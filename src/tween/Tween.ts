import { deepCopy, uid } from "../utils/Utils";
import { Easing } from './Easing';
import { Interpolation } from "./private/Interpolation";
import { add, get, getAll, remove, removeAll, removeDisplay, update, isRunning, isLagSmoothing } from './private/core';
import { decompose, recompose, FRAME_MS, TOO_LONG_FRAME_MS } from './private/constants';
import { TweenEvent } from '../event/TweenEvent';

const defaultEasing = Easing.Linear.None;
/**
 * 缓动动画
 * 
 * @example let tween = new gui.Tween(myObject).to({width:'300px'}, 2000).start()
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestTween
 */
export class Tween extends PIXI.utils.EventEmitter {

    static core = { add, get, getAll, remove, removeAll, removeDisplay, update };
    static Event = TweenEvent;
    /**
     * Easier way to call the Tween
     * @param {object} object - Initial value
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.fromTo(myObject, {x:0}, {x:200},1000)
     * @memberof gui.Tween
     * @static
     */
    static fromTo(object: TAny, to: TAny, duration?: number) {
        const tween = new Tween(object).to(to, duration);
        return tween;
    }
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {TAny} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, 1000)
     * @memberof gui.Tween
     * @static
     */
    static to(object: TAny | TAny[], to: TAny, duration?: number) {
        return Tween.fromTo(object, to, duration)
    }
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {TAny} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, 1000)
     * @memberof gui.Tween
     * @static
     */
    static from(object: TAny, from: TAny, duration?: number) {
        return Tween.fromTo(object, from, duration)
    }
    constructor(object?: TAny) {
        super();

        this.id = uid();
        this.object = object;
        this._valuesStart = Array.isArray(object) ? [] : {};
        this._interpolationFunction = Interpolation.Linear;
        return this;
    }

    public id: number;
    public object: TAny;
    private _valuesEnd: TAny = null;
    private _valuesStart: TAny;
    protected _duration = 1000;
    private _easingFunction = defaultEasing;
    private _easingReverse = defaultEasing;
    private _interpolationFunction: ((v: TAny, k: number, value: TAny) => TAny) | TAny;

    protected _startTime = 0;
    protected _delayTime = 0;
    private _repeat = 0;
    private _initRepeat = 0;
    public _isPlaying = false;
    private _yoyo = false;
    private _reversed = false;

    private _onStartCallbackFired = false;
    private _isFinite = true;
    private _prevTime = 0;

    private _rendered = false;
    private _reverseDelayTime = 0;
    /** 附加数据 */
    public data: { [key: string]: TAny } = {};


    public setObject(object: TAny){
        this.object = object;
        this._valuesStart = Array.isArray(object) ? [] : {};
    }
    
    /**
     * 是否在播放中
     * @return {boolean} 
     * @example tween.isPlaying()
     * @memberof gui.Tween
     */
    public get isPlaying() {
        return this._isPlaying;
    }

    /**
     * 是否开始播放
     * @return {boolean} 
     * @example tween.isStarted()
     * @memberof gui.Tween
     */
    public get isStarted() {
        return this._onStartCallbackFired;
    }

    /**
     * 获取动画的开始时间
     */
    public get startTime() {
        return this._startTime;
    }
    /**
     * 获取动画的开始时间
     */
    public set startTime(value: number) {
        this._startTime = value;
    }
    /**
     * 设置缓动时长
     * @param {number} amount 持续的毫秒值
     * @example tween.duration(2000)
     * @memberof gui.Tween
     * @deprecated 不推荐使用这个方法，内部使用
     * @private
     */
    public set duration(amount: number | Function) {
        this._duration = typeof amount === 'function' ? amount(this._duration) : amount;
    }
    public get duration() {
        return this._duration;
    }

    /**
     * 逆向缓动
     * @example tween.reverse()
     * @param {boolean=} state 是否逆向
     * @memberof gui.Tween
     */
    public reverse(state?: boolean) {
        const { _reversed } = this;

        this._reversed = state !== undefined ? state : !_reversed;

        return this;
    }

    /**
     * 当前动画是否逆转
     * @return {boolean}
     * @example tween.reversed() true逆向中
     * @memberof gui.Tween
     */
    public reversed() {
        return this._reversed;
    }

    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof gui.Tween
     */
    public pause() {
        if (!this._isPlaying) {
            return this;
        }

        this._isPlaying = false;

        remove(this);

        return this.emit(TweenEvent.pause, this.object);
    }

    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof gui.Tween
     */
    public play() {
        if (this._isPlaying) {
            return this;
        }

        this._isPlaying = true;
        this._startTime = 0;
        add(this);

        return this.emit(TweenEvent.play, this.object);
    }

    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new gui.Tween({x:0}).to({x:100}, 2000)
     * @memberof gui.Tween
     */
    public to(properties: TAny, duration = 1000) {
        this._valuesEnd = properties;
        this._duration = duration;
        return this;
    }


    private render() {
        if (this._rendered) {
            return this;
        }
        const { _valuesStart, _valuesEnd, object } = this;

        if (!_valuesStart.processed) {
            for (const property in _valuesEnd) {
                const start = object && object[property] && deepCopy(object[property]);
                _valuesStart[property] = start || 0;
                decompose(property, object, _valuesStart, _valuesEnd);
            }
            _valuesStart.processed = true;
        }

        this._rendered = true;

        return this;
    }

    /**
     * 开始执行缓动
     * @param {number|string} time 要开始的时间，延迟值
     * @example tween.start()
     * @memberof gui.Tween
     */
    public start(time?: number) {
        this._startTime = time !== undefined ? time : 0;
        this._startTime += this._delayTime;
        this._prevTime = 0;
        this._onStartCallbackFired = false;
        this._rendered = false;
        this._isPlaying = true;
        add(this);

        return this;
    }

    /**
     * 停止缓动
     * @example tween.stop()
     * @memberof gui.Tween
     */
    public stop() {
        const { _isPlaying, _isFinite, object, _duration, _initRepeat, _yoyo, _reversed } = this;

        if (!_isPlaying) {
            return this;
        }
        this._isPlaying = false;

        const atStart = _isFinite ? (_initRepeat + 1) % 2 === 1 : !_reversed;

        this._reversed = false;
        if (_yoyo && atStart) {
            this._prevTime = _duration;
        } else {
            this._prevTime = 0;
        }
        this.update(0);
        remove(this);

        return this.emit(TweenEvent.stop, object);
    }

    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof gui.Tween
     */
    public delay(amount: number) {
        this._delayTime = amount;
        return this;
    }

    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof gui.Tween
     */
    public repeat(amount: number) {
        this._repeat = !this._duration ? 0 : amount;
        this._initRepeat = this._repeat;
        this._isFinite = isFinite(amount);

        return this;
    }

    /**
     * 设置每个重复执行过程的延迟时间，毫秒
     * @param {number} amount 延迟值
     * @example tween.reverseDelay(500)
     * @memberof gui.Tween
     */
    public reverseDelay(amount: number) {
        this._reverseDelayTime = amount;

        return this;
    }

    /**
     * 是否在重复执行中启用反向动画
     * @param {boolean} state true启动
     * @param {Function=} _easingReverse 反向时的Easing function 
     * @example tween.yoyo(true)
     * @memberof gui.Tween
     */
    public yoyo(state?: boolean | Function, _easingReverse?: (k: number) => number) {
        this._yoyo = typeof state === 'function' ? state(this._yoyo) : state === null ? this._yoyo : state;
        if (!state) {
            this._reversed = false;
        }
        if (_easingReverse) {
            this._easingReverse = _easingReverse;
        } else {
            this._easingReverse = this._easingFunction;
        }

        return this;
    }

    /**
     * 设置缓动函数
     * @param {Function} _easingFunction 缓动函数的公式，如果设置yoyo的第二个值会应用于逆向缓动
     * @example tween.easing(Easing.Elastic.InOut)
     * @memberof gui.Tween
     */
    public easing(_easingFunction: ((k: number) => number) | TAny) {
        this._easingFunction = _easingFunction;

        return this;
    }

    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof gui.Tween
     */
    public interpolation(_interpolationFunction: (v: TAny, k: number, value: TAny) => TAny) {
        if (typeof _interpolationFunction === 'function') {
            this._interpolationFunction = _interpolationFunction;
        }

        return this;
    }

    /**
     * 更新动画到指定时间点，进行播放
     * @param time 
     */
    public gotoAndPlay(time: number) {
        this._prevTime = time;
        this.update(0);
    }

    /**
     * 更新动画到指定时间点，停止播放
     * @param time 
     */
    public gotoAndStop(time: number) {
        this._prevTime = time;
        this.update(0);
        this.pause();
    }
    /**
     * 更新动画到指定时间点，停止播放
     * @param time 
     */
    public gotoAndEnd() {
        this._prevTime = this._duration;
        this.update(0);
    }

    /**
     * 更新函数，通过给定的 `time` 设置目标属性变化
    * @param {number=} elapsedMS 帧间隔
    * @param {Boolean=} preserve 完成后，防止删除动画对象
     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
     * @example tween.update(100)
     * @memberof gui.Tween
     */
    public update(elapsedMS: number, preserve?: boolean, forceTime?: boolean) {

        const {
            _onStartCallbackFired,
            _easingFunction,
            _easingReverse,
            _delayTime,
            _reverseDelayTime,
            _yoyo,
            _reversed,
            _startTime,
            _duration,
            _valuesStart,
            _valuesEnd,
            object,
            _isFinite,
            _isPlaying
        } = this;

        if (!_isPlaying || (_startTime > 0 && !forceTime)) {
            this._startTime -= elapsedMS;
            this._startTime = Math.max(0, this._startTime);
            return true;
        }

        let elapsed: number;
        let property: string;
        let _repeat = this._repeat;
        if (!_duration) {
            elapsed = 1;
            _repeat = 0;
        } else {

            this._prevTime += elapsedMS;
            if (elapsedMS > TOO_LONG_FRAME_MS && isRunning() && isLagSmoothing()) {
                this._prevTime -= FRAME_MS;
            }

            elapsed = (this._prevTime) / _duration;
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

        const currentEasing: TAny = _reversed ? _easingReverse || _easingFunction : _easingFunction;

        for (property in _valuesEnd) {
            const start = _valuesStart[property]
            const end = _valuesEnd[property];
            const value = currentEasing[property] ? currentEasing[property](elapsed) : typeof currentEasing === 'function' ? currentEasing(elapsed) : defaultEasing(elapsed);

            if (typeof end === 'number') {
                object[property] = start + (end - start) * value;
            } else if (typeof end === 'boolean') {
                object[property] = end;
                elapsed = _reversed ? 0 : 1;
            } else {//颜色
                recompose(property, object, _valuesStart, _valuesEnd, value, elapsed);
            }
            // else if (Array.isArray(end) && !(end as TAny).isString && !Array.isArray(start)) {
            //     const _interpolationFunctionCall = _interpolationFunction[property]
            //     ? _interpolationFunction[property] : typeof _interpolationFunction === 'function' ? _interpolationFunction : Interpolation.Linear;
            //     object[property] = _interpolationFunctionCall(end, value, object[property]);
            // } 
        }

        this.emit(TweenEvent.update, object, elapsed, elapsedMS);

        if (elapsed === 1 || (_reversed && elapsed === 0)) {
            this._prevTime = 0;
            if (_repeat > 0 && _duration > 0) {
                if (_isFinite) {
                    this._repeat--;
                }

                if (_yoyo) {
                    this._reversed = !_reversed;
                }

                this.emit(_yoyo && !_reversed ? TweenEvent.reverse : TweenEvent.repeat, object);

                if (_reversed && _reverseDelayTime) {
                    this._startTime = _reverseDelayTime;
                } else {
                    this._startTime = _delayTime;
                }
                return true;
            } else {
                if (!preserve) {
                    this._isPlaying = false;
                    remove(this);
                }
                this.emit(TweenEvent.complete, object);
                this._repeat = this._initRepeat;
                return false;
            }
        }

        return true;
    }

    public release() {
        this.object = undefined;
        this.stop();
    }
}
