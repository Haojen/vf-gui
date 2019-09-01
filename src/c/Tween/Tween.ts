import { add, Plugins, remove, isRunning, isLagSmoothing } from './core';
import { now, deepCopy } from "../../Utils";
import Easing from './Easing';
import {
    decompose,
    decomposeString,
    recompose,
    SET_NESTED,
    CHAINED_TWEENS,
    FRAME_MS,
    TOO_LONG_FRAME_MS
} from './constants';
import { TweenEvent } from '../../Interaction/InteractionEvent';
import Interpolation from "./Interpolation";

let _id = 0; // Unique ID
const defaultEasing = Easing.Linear.None;

/**
 * 缓动动画的主类
 * @constructor
 * @class
 * @namespace vfui.Tween
 * @param {Object=} object 
 * @example let tween = new Tween(myObject).to({width:'300px'}, 2000).start()
 */
export default class Tween extends PIXI.utils.EventEmitter {
    /**
     * Easier way to call the Tween
     * @param {object} object - Initial value
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.fromTo(myObject, {x:0}, {x:200}, {duration:1000})
     * @memberof vfui.Tween
     * @static
     */
    static fromTo(object: any, to: any, params: any = {}) {
        params.quickRender = params.quickRender ? params.quickRender : !to
        const tween = new Tween(object).to(to, params);
        if (params.quickRender) {
            tween.render().update(tween._startTime);
            tween._rendered = false;
            tween._onStartCallbackFired = false;
        }
        return tween;
    }
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, {duration:1000})
     * @memberof vfui.Tween
     * @static
     */
    static to(object: TAny|TAny[], to: TAny, params: TAny) {
        return Tween.fromTo(object, to, params)
    }
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, {duration:1000})
     * @memberof vfui.Tween
     * @static
     */
    static from(object: any, from: any, params: any) {
        return Tween.fromTo(object, from, params)
    }
    constructor(object?: any) {
        super();

        this.id = _id++
        this.object = object;
        this._valuesStart = Array.isArray(object) ? [] : {};
        this._interpolationFunction = Interpolation.Linear;
        return this;
    }

    public id: number;
    public object: any;
    private _valuesEnd: any = null;
    private _valuesStart: any;
    private _duration = 1000;
    private _easingFunction = defaultEasing;
    private _easingReverse = defaultEasing;
    private _interpolationFunction:((v: any, k: number, value: any) => any)|any;

    protected _startTime = 0;
    private _initTime = 0;
    private _delayTime = 0;
    private _repeat = 0;
    private _r = 0;
    private _isPlaying = false;
    private _yoyo = false;
    private _reversed = false;

    private _onStartCallbackFired = false;
    private _pausedTime = 0;
    private _isFinite = true;
    private _chainedTweensCount = 0;
    private _prevTime = 0;

    private _rendered = false;
    private _reverseDelayTime = 0;

    /**
     * 是否在播放中
     * @return {boolean} 
     * @example tween.isPlaying() // returns `true` if tween in progress
     * @memberof vfui.Tween
     */
    public isPlaying() {
        return this._isPlaying;
    }

    /**
     * 是否开始播放
     * @return {boolean} State of started of tween
     * @example tween.isStarted() // returns `true` if tween in started
     * @memberof vfui.Tween
     */
    public isStarted() {
        return this._onStartCallbackFired;
    }

    /**
     * 获取动画的开始时间
     */
    public get startTime(){
        return this._startTime;
    }
    /**
     * 获取动画的开始时间
     */
    public set startTime(value:number){
        this._startTime = value;
    }
    /**
     * 设置缓动时长
     * @param {number} amount 持续的毫秒值
     * @example tween.duration(2000)
     * @memberof vfui.Tween
     * @deprecated 不推荐使用这个方法，内部使用
     * @private
     */
    public set duration(amount:number|Function) {
        this._duration = typeof amount === 'function' ? amount(this._duration) : amount;
    }
    public get duration(){
        return this._duration ;
    }

    /**
     * 逆向缓动
     * @example tween.reverse()
     * @param {boolean=} state Set state of current reverse
     * @memberof vfui.Tween
     */
    public reverse(state?:boolean) {
        const { _reversed } = this;

        this._reversed = state !== undefined ? state : !_reversed;

        return this;
    }

    /**
     * 当前动画是否逆转
     * @return {boolean} State of reversed
     * @example tween.reversed() // returns `true` if tween in reversed state
     * @memberof vfui.Tween
     */
    public reversed() {
        return this._reversed;
    }

    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof vfui.Tween
     */
    public pause() {
        if (!this._isPlaying) {
            return this;
        }

        this._isPlaying = false;

        remove(this);
        this._pausedTime = now();

        return this.emit(TweenEvent.pause, this.object);
    }

    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof vfui.Tween
     */
    public play() {
        if (this._isPlaying) {
            return this;
        }

        this._isPlaying = true;

        this._startTime += now() - this._pausedTime;
        this._initTime = this._startTime;
        add(this);
        this._pausedTime = now();

        return this.emit(TweenEvent.play, this.object);
    }

    /**
     * 从初始值，重新模仿
     * @param {boolean=} noDelay 如果为 `true`, 重新启动缓动，排除 `delay`
     * @example tween.restart()
     * @memberof vfui.Tween
     */
    public restart(noDelay?:boolean) {
        this._repeat = this._r;
        this.reassignValues();
        add(this);

        return this.emit(TweenEvent.restart, this.object);
    }

    /**
     * Seek tween value by `time`. Note: Not works as excepted. PR are welcome
     * @param {Time} time Tween update time
     * @param {boolean=} keepPlaying When this param is set to `false`, tween pausing after seek
     * @example tween.seek(500)
     * @memberof vfui.Tween
     * @deprecated Not works as excepted, so we deprecated this method
     */
    public seek(time:number, keepPlaying?:boolean) {
        const { _duration, _initTime, _startTime, _reversed } = this

        let updateTime = _initTime + time;
        this._isPlaying = true;

        if (updateTime < _startTime && _startTime >= _initTime) {
            this._startTime -= _duration;
            this._reversed = !_reversed;
        }

        this.update(time, false);

        this.emit(TweenEvent.seek, time, this.object);

        return keepPlaying ? this : this.pause();
    }


    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new vfui.Tween({x:0}).to({x:100}, 2000)
     * @memberof vfui.Tween
     */
    public to(properties:TAny, duration = 1000) {
        this._valuesEnd = properties;
        if(typeof duration === 'function'){
            this.duration = this._duration;
        }else{
            this._duration = duration;
        }
        return this;
    }

    /**
     * 
     * Renders and computes value at first render
     * @private
     * @memberof vfui.Tween
     */
    private render() {
        if (this._rendered) {
            return this;
        }
        let { _valuesStart, _valuesEnd, object } = this;

        SET_NESTED(object);
        SET_NESTED(_valuesEnd);

        if (!_valuesStart.processed) {
            for (const property in _valuesEnd) {
                let start = object && object[property] && deepCopy(object[property]);
                let end = _valuesEnd[property];
                if (Plugins[property] && Plugins[property].init) {
                    Plugins[property].init.call(this, start, end, property, object);
                    if (start === undefined && _valuesStart[property]) {
                        start = _valuesStart[property];
                    }
                    if (Plugins[property].skipProcess) {
                        continue;
                    }
                }
                if (
                    (typeof start === 'number' && isNaN(start)) ||
                    start === null ||
                    end === null ||
                    start === false ||
                    end === false ||
                    start === undefined ||
                    end === undefined ||
                    start === end
                ) {
                    continue;
                }
                _valuesStart[property] = start;
                if (Array.isArray(end)) {
                    if (!Array.isArray(start)) {
                        end.unshift(start);
                        for (let i = 0, len = end.length; i < len; i++) {
                            if (typeof end[i] === 'string') {
                                end[i] = decomposeString(end[i]);
                            }
                        }
                    } else {
                        if ((end as any).isString && object[property].isString && !(start as any).isString) {
                            (start as any).isString = true;
                        } else {
                            decompose(property, object, _valuesStart, _valuesEnd);
                        }
                    }
                } else {
                    decompose(property, object, _valuesStart, _valuesEnd);
                }
                if (typeof start === 'number' && typeof end === 'string' && end[1] === '=') {
                    continue;
                }
            }
            _valuesStart.processed = true;
        }

        this._rendered = true;

        return this;
    }

    /**
     * 开始执行缓动
     * @param {number|string} time setting manual time instead of Current browser timestamp or like `+1000` relative to current timestamp
     * @example tween.start()
     * @memberof vfui.Tween
     */
    public start(time?:string) {
        this._startTime = time !== undefined ? (typeof time === 'string' ? now() + parseFloat(time) : time) : now();
        this._startTime += this._delayTime;
        this._initTime = this._prevTime = this._startTime;

        this._onStartCallbackFired = false;
        this._rendered = false;
        this._isPlaying = true;

        add(this);

        return this;
    }

    /**
     * 停止缓动
     * @example tween.stop()
     * @memberof vfui.Tween
     */
    public stop() {
        let { _isPlaying, _isFinite, object, _startTime, _duration, _r, _yoyo, _reversed } = this;

        if (!_isPlaying) {
            return this;
        }

        let atStart = _isFinite ? (_r + 1) % 2 === 1 : !_reversed;

        this._reversed = false;

        if (_yoyo && atStart) {
            this.update(_startTime);
        } else {
            this.update(_startTime + _duration);
        }
        remove(this);

        return this.emit(TweenEvent.stop, object);
    }

    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof vfui.Tween
     */
    public delay(amount:number|Function) {
        this._delayTime = typeof amount === 'function' ? amount(this._delayTime) : amount;

        return this
    }

    /**
     * 链式执行
     * @param {any} arguments Arguments list
     * @example tween.chainedTweens(tween1, tween2)
     * @memberof vfui.Tween
     */
    public chainedTweens(... tween:Tween[]) {
        this._chainedTweensCount = tween.length;
        if (!this._chainedTweensCount) {
            return this
        }
        for (let i = 0, len = this._chainedTweensCount; i < len; i++) {
            (this as TAny)[CHAINED_TWEENS + i] = tween[i];
        }

        return this;
    }

    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof vfui.Tween
     */
    public repeat(amount:number|Function) {
        this._repeat = !this._duration ? 0 : typeof amount === 'function' ? amount(this._repeat) : amount
        this._r = this._repeat
        this._isFinite = isFinite(amount as number);

        return this;
    }

    /**
     * 设置每个重复执行过程的延迟时间，毫秒
     * @param {number} amount 延迟值
     * @example tween.reverseDelay(500)
     * @memberof vfui.Tween
     */
    public reverseDelay(amount:number|Function) {
        this._reverseDelayTime = typeof amount === 'function' ? amount(this._reverseDelayTime) : amount;

        return this;
    }

    /**
     * 是否在重复执行中启用反向动画
     * @param {boolean} state true启动
     * @param {Function=} _easingReverse 反向时的Easing function 
     * @example tween.yoyo(true)
     * @memberof vfui.Tween
     */
    public yoyo(state?:boolean|Function, _easingReverse?:(k: number) => number) {
        this._yoyo = typeof state === 'function' ? state(this._yoyo) : state === null ? this._yoyo : state;
        if (!state) {
            this._reversed = false;
        }
        if(_easingReverse){
            this._easingReverse = _easingReverse;
        }else{
            this._easingReverse = this._easingFunction;
        }

        return this;
    }

    /**
     * 设置缓动函数
     * @param {Function} _easingFunction 缓动函数的公式，如果设置yoyo的第二个值会应用于逆向缓动
     * @example tween.easing(Easing.Elastic.InOut)
     * @memberof vfui.Tween
     */
    public easing(_easingFunction:(k: number) => number) {
        this._easingFunction = _easingFunction;

        return this;
    }

    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof vfui.Tween
     */
    public interpolation(_interpolationFunction: (v: any, k: number, value: any) => any) {
        if (typeof _interpolationFunction === 'function') {
            this._interpolationFunction = _interpolationFunction;
        }

        return this;
    }

    /**
     * 为 Tween#restart 或 Timeline 重新分配时间
     * @private
     * @memberof vfui.Tween
     */
    public reassignValues(time?:number) {
        const { _valuesStart, object, _delayTime } = this;

        this._isPlaying = true;
        this._startTime = time !== undefined ? time : now();
        this._startTime += _delayTime;
        this._reversed = false;
        add(this);

        for (const property in _valuesStart) {
            const start = _valuesStart[property];

            object[property] = start;
        }

        return this;
    }

    /**
     * 更新函数，通过给定的 `time` 设置目标属性变化
    * @param {number=} time 当前时间戳
    * @param {Boolean=} preserve 完成后，防止删除动画对象
     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
     * @example tween.update(100)
     * @memberof vfui.Tween
     */
    public update(time?:number, preserve?:boolean, forceTime?:boolean) {
        let {
            _onStartCallbackFired,
            _easingFunction,
            _interpolationFunction,
            _easingReverse,
            _repeat,
            _delayTime,
            _reverseDelayTime,
            _yoyo,
            _reversed,
            _startTime,
            _prevTime,
            _duration,
            _valuesStart,
            _valuesEnd,
            object,
            _isFinite,
            _isPlaying,
            _chainedTweensCount
        } = this;

        let elapsed:number;
        let currentEasing:TAny;
        let property:string;
        let propCount = 0
        time = time !== undefined ? time : now();

        if (!_duration) {
            elapsed = 1;
            _repeat = 0;
        } else {    

            let delta = time - _prevTime;
            this._prevTime = time;
            if (delta > TOO_LONG_FRAME_MS && isRunning() && isLagSmoothing()) {
                time -= delta - FRAME_MS;
            }

            if (!_isPlaying || (time < _startTime && !forceTime)) {
                return true;
            }

            elapsed = (time - _startTime) / _duration;
            elapsed = elapsed > 1 ? 1 : elapsed;
            elapsed = _reversed ? 1 - elapsed : elapsed;
        }
        if (!_onStartCallbackFired) {
            if (!this._rendered) {
                this.render();
                this._rendered = true;
            }

            this.emit(TweenEvent.start, object);

            this._onStartCallbackFired = true;
        }

        currentEasing = _reversed ? _easingReverse || _easingFunction : _easingFunction;

        if (!object) {
            return true;
        }
        for (property in _valuesEnd) {
            const start = _valuesStart[property]
            if ((start === undefined || start === null) && !(Plugins[property] && Plugins[property].update)) {
                continue;
            }
            const end = _valuesEnd[property];
            const value = currentEasing[property] ? currentEasing[property](elapsed): typeof currentEasing === 'function'? currentEasing(elapsed): defaultEasing(elapsed);
            const _interpolationFunctionCall = _interpolationFunction[property] 
            ? _interpolationFunction[property] : typeof _interpolationFunction === 'function' ? _interpolationFunction : Interpolation.Linear;

            if (typeof end === 'number') {
                object[property] = start + (end - start) * value;
            } else if (Array.isArray(end) && !(end as any).isString && !Array.isArray(start)) {
                object[property] = _interpolationFunctionCall(end, value, object[property]);
            } else if (end && end.update) {
                end.update(value);
            } else if (typeof end === 'function') {
                object[property] = end(value);
            } else if (typeof end === 'string' && typeof start === 'number') {
                object[property] = start + parseFloat(end[0] + end.substr(2)) * value;
            } else {
                recompose(property, object, _valuesStart, _valuesEnd, value, elapsed);
            }
            if (Plugins[property] && Plugins[property].update) {
                Plugins[property].update.call(this, object[property], start, end, value, elapsed, property);
            }
            propCount++;
        }

        if (!propCount) {
            remove(this);
            return false;
        }
        this.emit(TweenEvent.update, object, elapsed, time);

        if (elapsed === 1 || (_reversed && elapsed === 0)) {
            if (_repeat > 0 && _duration > 0) {
                if (_isFinite) {
                    this._repeat--;
                }

                if (_yoyo) {
                    this._reversed = !_reversed;
                } else {
                    for (property in _valuesEnd) {
                        let end = _valuesEnd[property];
                        if (typeof end === 'string' && typeof _valuesStart[property] === 'number') {
                            _valuesStart[property] += parseFloat(end[0] + end.substr(2));
                        }
                    }
                }

                this.emit(_yoyo && !_reversed ? TweenEvent.reverse : TweenEvent.repeat, object);

                if (_reversed && _reverseDelayTime) {
                    this._startTime = time - _reverseDelayTime;
                } else {
                    this._startTime = time + _delayTime;
                }

                return true;
            } else {
                if (!preserve) {
                    this._isPlaying = false;
                    remove(this);
                    _id--;
                }
                this.emit(TweenEvent.complete, object);
                this._repeat = this._r;

                if (_chainedTweensCount) {
                    for (let i = 0; i < _chainedTweensCount; i++) {
                        (this as TAny)[CHAINED_TWEENS + i].start(time + _duration);
                    }
                }

                return false;
            }
        }

        return true;
    }
}
