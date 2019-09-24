import { add, Plugins, remove, isRunning, isLagSmoothing } from './core';
import { deepCopy, uid } from "../../Utils";
import Easing from './Easing';
import { decompose, decomposeString, recompose, SET_NESTED, CHAINED_TWEENS, FRAME_MS, TOO_LONG_FRAME_MS } from './constants';
import Interpolation from "./Interpolation";
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
    constructor(object) {
        super();
        this._valuesEnd = null;
        this._duration = 1000;
        this._easingFunction = defaultEasing;
        this._easingReverse = defaultEasing;
        this._startTime = 0;
        this._delayTime = 0;
        this._repeat = 0;
        this._r = 0;
        this._isPlaying = false;
        this._yoyo = false;
        this._reversed = false;
        this._onStartCallbackFired = false;
        this._isFinite = true;
        this._chainedTweensCount = 0;
        this._prevTime = 0;
        this._rendered = false;
        this._reverseDelayTime = 0;
        this.id = uid();
        this.object = object;
        this._valuesStart = Array.isArray(object) ? [] : {};
        this._interpolationFunction = Interpolation.Linear;
        return this;
    }
    /**
     * Easier way to call the Tween
     * @param {object} object - Initial value
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.fromTo(myObject, {x:0}, {x:200},1000)
     * @memberof vfui.Tween
     * @static
     */
    static fromTo(object, to, duration) {
        const tween = new Tween(object).to(to, duration);
        return tween;
    }
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    static to(object, to, duration) {
        return Tween.fromTo(object, to, duration);
    }
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    static from(object, from, duration) {
        return Tween.fromTo(object, from, duration);
    }
    /**
     * 是否在播放中
     * @return {boolean}
     * @example tween.isPlaying() // returns `true` if tween in progress
     * @memberof vfui.Tween
     */
    get isPlaying() {
        return this._isPlaying;
    }
    /**
     * 是否开始播放
     * @return {boolean} State of started of tween
     * @example tween.isStarted() // returns `true` if tween in started
     * @memberof vfui.Tween
     */
    get isStarted() {
        return this._onStartCallbackFired;
    }
    /**
     * 获取动画的开始时间
     */
    get startTime() {
        return this._startTime;
    }
    /**
     * 获取动画的开始时间
     */
    set startTime(value) {
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
    set duration(amount) {
        this._duration = typeof amount === 'function' ? amount(this._duration) : amount;
    }
    get duration() {
        return this._duration;
    }
    /**
     * 逆向缓动
     * @example tween.reverse()
     * @param {boolean=} state Set state of current reverse
     * @memberof vfui.Tween
     */
    reverse(state) {
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
    reversed() {
        return this._reversed;
    }
    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof vfui.Tween
     */
    pause() {
        if (!this._isPlaying) {
            return this;
        }
        this._isPlaying = false;
        remove(this);
        return this.emit("pause" /* pause */, this.object);
    }
    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof vfui.Tween
     */
    play() {
        if (this._isPlaying) {
            return this;
        }
        this._isPlaying = true;
        this._startTime = 0;
        add(this);
        return this.emit("play" /* play */, this.object);
    }
    /**
     * 从初始值，重新模仿
     * @param {boolean=} noDelay 如果为 `true`, 重新启动缓动，排除 `delay`
     * @example tween.restart()
     * @memberof vfui.Tween
     */
    restart(noDelay) {
        this._repeat = this._r;
        this.reassignValues();
        add(this);
        return this.emit("restart" /* restart */, this.object);
    }
    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new vfui.Tween({x:0}).to({x:100}, 2000)
     * @memberof vfui.Tween
     */
    to(properties, duration = 1000) {
        this._valuesEnd = properties;
        for (let key in properties) {
            this._valuesStart[key] = this.object[key];
        }
        if (typeof duration === 'function') {
            this.duration = this._duration;
        }
        else {
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
    render() {
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
                if ((typeof start === 'number' && isNaN(start)) ||
                    start === null ||
                    end === null ||
                    start === false ||
                    end === false ||
                    start === undefined ||
                    end === undefined ||
                    start === end) {
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
                    }
                    else {
                        if (end.isString && object[property].isString && !start.isString) {
                            start.isString = true;
                        }
                        else {
                            decompose(property, object, _valuesStart, _valuesEnd);
                        }
                    }
                }
                else {
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
    start(time) {
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
     * @memberof vfui.Tween
     */
    stop() {
        let { _isPlaying, _isFinite, object, _duration, _r, _yoyo, _reversed } = this;
        if (!_isPlaying) {
            return this;
        }
        let atStart = _isFinite ? (_r + 1) % 2 === 1 : !_reversed;
        this._reversed = false;
        if (_yoyo && atStart) {
            this._prevTime = _duration;
        }
        else {
            this._prevTime = 0;
        }
        this.update(0);
        this._isPlaying = false;
        remove(this);
        return this.emit("stop" /* stop */, object);
    }
    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof vfui.Tween
     */
    delay(amount) {
        this._delayTime = typeof amount === 'function' ? amount(this._delayTime) : amount;
        return this;
    }
    /**
     * 链式执行
     * @param {any} arguments Arguments list
     * @example tween.chainedTweens(tween1, tween2)
     * @memberof vfui.Tween
     */
    chainedTweens(...tween) {
        this._chainedTweensCount = tween.length;
        if (!this._chainedTweensCount) {
            return this;
        }
        for (let i = 0, len = this._chainedTweensCount; i < len; i++) {
            this[CHAINED_TWEENS + i] = tween[i];
        }
        return this;
    }
    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof vfui.Tween
     */
    repeat(amount) {
        this._repeat = !this._duration ? 0 : typeof amount === 'function' ? amount(this._repeat) : amount;
        this._r = this._repeat;
        this._isFinite = isFinite(amount);
        return this;
    }
    /**
     * 设置每个重复执行过程的延迟时间，毫秒
     * @param {number} amount 延迟值
     * @example tween.reverseDelay(500)
     * @memberof vfui.Tween
     */
    reverseDelay(amount) {
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
    yoyo(state, _easingReverse) {
        this._yoyo = typeof state === 'function' ? state(this._yoyo) : state === null ? this._yoyo : state;
        if (!state) {
            this._reversed = false;
        }
        if (_easingReverse) {
            this._easingReverse = _easingReverse;
        }
        else {
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
    easing(_easingFunction) {
        this._easingFunction = _easingFunction;
        return this;
    }
    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof vfui.Tween
     */
    interpolation(_interpolationFunction) {
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
    reassignValues(time) {
        const { _valuesStart, object, _delayTime } = this;
        this._isPlaying = true;
        this._startTime = time !== undefined ? time : 0;
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
     * 更新动画到指定时间点，进行播放
     * @param time
     */
    gotoAndPlay(time) {
        this._prevTime = time;
        this.update(0);
    }
    /**
     * 更新动画到指定时间点，停止播放
     * @param time
     */
    gotoAndStop(time) {
        this._prevTime = time;
        this.update(0);
        this.pause();
    }
    /**
     * 更新函数，通过给定的 `time` 设置目标属性变化
    * @param {number=} elapsedMS 帧间隔
    * @param {Boolean=} preserve 完成后，防止删除动画对象
     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
     * @example tween.update(100)
     * @memberof vfui.Tween
     */
    update(elapsedMS, preserve, forceTime) {
        //console.log(time);
        let { _onStartCallbackFired, _easingFunction, _interpolationFunction, _easingReverse, _repeat, _delayTime, _reverseDelayTime, _yoyo, _reversed, _startTime, _duration, _valuesStart, _valuesEnd, object, _isFinite, _isPlaying, _chainedTweensCount } = this;
        let elapsed;
        let currentEasing;
        let property;
        let propCount = 0;
        elapsedMS = elapsedMS !== undefined ? elapsedMS : 0;
        if (!_isPlaying || (_startTime > 0 && !forceTime)) {
            this._startTime -= elapsedMS;
            this._startTime = Math.max(0, this._startTime);
            return true;
        }
        if (!_duration) {
            elapsed = 1;
            _repeat = 0;
        }
        else {
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
            this.emit("start" /* start */, object);
            this._onStartCallbackFired = true;
        }
        currentEasing = _reversed ? _easingReverse || _easingFunction : _easingFunction;
        if (!object) {
            return true;
        }
        for (property in _valuesEnd) {
            const start = _valuesStart[property];
            if ((start === undefined || start === null) && !(Plugins[property] && Plugins[property].update)) {
                continue;
            }
            const end = _valuesEnd[property];
            const value = currentEasing[property] ? currentEasing[property](elapsed) : typeof currentEasing === 'function' ? currentEasing(elapsed) : defaultEasing(elapsed);
            const _interpolationFunctionCall = _interpolationFunction[property]
                ? _interpolationFunction[property] : typeof _interpolationFunction === 'function' ? _interpolationFunction : Interpolation.Linear;
            if (typeof end === 'number') {
                object[property] = Math.floor(start + (end - start) * value);
            }
            else if (Array.isArray(end) && !end.isString && !Array.isArray(start)) {
                object[property] = _interpolationFunctionCall(end, value, object[property]);
            }
            else if (end && end.update) {
                end.update(value);
            }
            else if (typeof end === 'function') {
                object[property] = end(value);
            }
            else if (typeof end === 'string' && typeof start === 'number') {
                object[property] = start + parseFloat(end[0] + end.substr(2)) * value;
            }
            else {
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
        this.emit("update" /* update */, object, elapsed, elapsedMS);
        if (elapsed === 1 || (_reversed && elapsed === 0)) {
            this._prevTime = 0;
            if (_repeat > 0 && _duration > 0) {
                if (_isFinite) {
                    this._repeat--;
                }
                if (_yoyo) {
                    this._reversed = !_reversed;
                }
                else {
                    for (property in _valuesEnd) {
                        let end = _valuesEnd[property];
                        if (typeof end === 'string' && typeof _valuesStart[property] === 'number') {
                            _valuesStart[property] += parseFloat(end[0] + end.substr(2));
                        }
                    }
                }
                this.emit(_yoyo && !_reversed ? "reverse" /* reverse */ : "repeat" /* repeat */, object);
                if (_reversed && _reverseDelayTime) {
                    this._startTime = _reverseDelayTime;
                }
                else {
                    this._startTime = _delayTime;
                }
                return true;
            }
            else {
                if (!preserve) {
                    this._isPlaying = false;
                    remove(this);
                }
                this.emit("complete" /* complete */, object);
                this._repeat = this._r;
                if (_chainedTweensCount) {
                    for (let i = 0; i < _chainedTweensCount; i++) {
                        this[CHAINED_TWEENS + i].start(this._prevTime + _duration);
                    }
                }
                return false;
            }
        }
        return true;
    }
}
//# sourceMappingURL=Tween.js.map