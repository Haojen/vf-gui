/// <reference types="pixi.js" />
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
     * @example Tween.fromTo(myObject, {x:0}, {x:200},1000)
     * @memberof vfui.Tween
     * @static
     */
    static fromTo(object: any, to: any, duration?: number): Tween;
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    static to(object: any | any[], to: any, duration?: number): Tween;
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    static from(object: any, from: any, duration?: number): Tween;
    constructor(object?: any);
    id: string;
    object: any;
    private _valuesEnd;
    private _valuesStart;
    private _duration;
    private _easingFunction;
    private _easingReverse;
    private _interpolationFunction;
    protected _startTime: number;
    private _delayTime;
    private _repeat;
    private _r;
    private _isPlaying;
    private _yoyo;
    private _reversed;
    private _onStartCallbackFired;
    private _isFinite;
    private _chainedTweensCount;
    private _prevTime;
    private _rendered;
    private _reverseDelayTime;
    /**
     * 是否在播放中
     * @return {boolean}
     * @example tween.isPlaying() // returns `true` if tween in progress
     * @memberof vfui.Tween
     */
    readonly isPlaying: boolean;
    /**
     * 是否开始播放
     * @return {boolean} State of started of tween
     * @example tween.isStarted() // returns `true` if tween in started
     * @memberof vfui.Tween
     */
    readonly isStarted: boolean;
    /**
     * 获取动画的开始时间
     */
    /**
    * 获取动画的开始时间
    */
    startTime: number;
    /**
     * 设置缓动时长
     * @param {number} amount 持续的毫秒值
     * @example tween.duration(2000)
     * @memberof vfui.Tween
     * @deprecated 不推荐使用这个方法，内部使用
     * @private
     */
    duration: number | Function;
    /**
     * 逆向缓动
     * @example tween.reverse()
     * @param {boolean=} state Set state of current reverse
     * @memberof vfui.Tween
     */
    reverse(state?: boolean): this;
    /**
     * 当前动画是否逆转
     * @return {boolean} State of reversed
     * @example tween.reversed() // returns `true` if tween in reversed state
     * @memberof vfui.Tween
     */
    reversed(): boolean;
    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof vfui.Tween
     */
    pause(): boolean | this;
    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof vfui.Tween
     */
    play(): boolean | this;
    /**
     * 从初始值，重新模仿
     * @param {boolean=} noDelay 如果为 `true`, 重新启动缓动，排除 `delay`
     * @example tween.restart()
     * @memberof vfui.Tween
     */
    restart(noDelay?: boolean): boolean;
    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new vfui.Tween({x:0}).to({x:100}, 2000)
     * @memberof vfui.Tween
     */
    to(properties: any, duration?: number): this;
    /**
     *
     * Renders and computes value at first render
     * @private
     * @memberof vfui.Tween
     */
    private render;
    /**
     * 开始执行缓动
     * @param {number|string} time setting manual time instead of Current browser timestamp or like `+1000` relative to current timestamp
     * @example tween.start()
     * @memberof vfui.Tween
     */
    start(time?: number): this;
    /**
     * 停止缓动
     * @example tween.stop()
     * @memberof vfui.Tween
     */
    stop(): boolean | this;
    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof vfui.Tween
     */
    delay(amount: number | Function): this;
    /**
     * 链式执行
     * @param {any} arguments Arguments list
     * @example tween.chainedTweens(tween1, tween2)
     * @memberof vfui.Tween
     */
    chainedTweens(...tween: Tween[]): this;
    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof vfui.Tween
     */
    repeat(amount: number | Function): this;
    /**
     * 设置每个重复执行过程的延迟时间，毫秒
     * @param {number} amount 延迟值
     * @example tween.reverseDelay(500)
     * @memberof vfui.Tween
     */
    reverseDelay(amount: number | Function): this;
    /**
     * 是否在重复执行中启用反向动画
     * @param {boolean} state true启动
     * @param {Function=} _easingReverse 反向时的Easing function
     * @example tween.yoyo(true)
     * @memberof vfui.Tween
     */
    yoyo(state?: boolean | Function, _easingReverse?: (k: number) => number): this;
    /**
     * 设置缓动函数
     * @param {Function} _easingFunction 缓动函数的公式，如果设置yoyo的第二个值会应用于逆向缓动
     * @example tween.easing(Easing.Elastic.InOut)
     * @memberof vfui.Tween
     */
    easing(_easingFunction: (k: number) => number): this;
    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof vfui.Tween
     */
    interpolation(_interpolationFunction: (v: any, k: number, value: any) => any): this;
    /**
     * 为 Tween#restart 或 Timeline 重新分配时间
     * @private
     * @memberof vfui.Tween
     */
    reassignValues(time?: number): this;
    /**
     * 更新动画到指定时间点，进行播放
     * @param time
     */
    gotoAndPlay(time: number): void;
    /**
     * 更新动画到指定时间点，停止播放
     * @param time
     */
    gotoAndStop(time: number): void;
    /**
     * 更新函数，通过给定的 `time` 设置目标属性变化
    * @param {number=} elapsedMS 帧间隔
    * @param {Boolean=} preserve 完成后，防止删除动画对象
     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
     * @example tween.update(100)
     * @memberof vfui.Tween
     */
    update(elapsedMS: number, preserve?: boolean, forceTime?: boolean): boolean;
}
