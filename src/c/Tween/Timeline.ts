import { add, remove, isRunning, isLagSmoothing } from './core'
import { now } from "../../Utils"
import PlaybackPosition from './PlaybackPosition'
import Tween from './Tween'
import { TweenEvent } from '../../Interaction/InteractionEvent';
import { FRAME_MS, TOO_LONG_FRAME_MS } from './constants'

let _id = 0

/**
 * 将序列的所有元素随机排序。
 * @param a 序列数组
 */
export const shuffle = (a: number[]) => {
    let j: number;
    let x: number;
    let i: number;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

/**
 * 时间轴主类
 *
 * It works same as `Tween` instance, using `.repeat`, `.restart` or `etc` works like a `Tween`, so please see `Tween` class for methods
 * @constructor
 * @class
 * @namespace tween.Timeline
 * @param {Object=} params Default params for new tweens
 * @example let tl = new Timeline({delay:200})
 * @extends Tween
 */
export default class Timeline extends Tween {

    // constructor(params:TAny) {
    //     super()
    //     this._id = _id++;
    //     this._startTime = params && params.startTime !== undefined ? params.startTime : now();
    //     this._defaultParams = params;
    //     this.position.addLabel('afterLast', this._duration);
    //     this.position.addLabel('afterInit', this._startTime);

    //     return this;
    // }

    // private _id:number;
    // private _duration = 0;
    // private _startTime:number;
    // private _tweens:Tween[] = [];
    // private _defaultParams:TAny;
    // private _onStartCallbackFired = false;
    // public position = new PlaybackPosition();
    // public elapsed = 0;

    // public mapTotal(fn:Function) {
    //     fn.call(this, this._tweens);
    //     return this;
    // }

    // public timingOrder(fn:Function) {
    //     const timing = fn(this._tweens.map((t) => t.startTime));
    //     this._tweens.map((tween, i) => {
    //         tween.startTime = timing[i];
    //     })
    //     return this;
    // }

    // public getTiming(mode:string, nodes:TAny[], params:TAny, offset = 0) {
    //     if (mode === 'reverse') {
    //         const { stagger } = params
    //         const totalStagger = (stagger || 0) * (nodes.length - 1)
    //         return nodes.map((node, i) => totalStagger - (stagger || 0) * i + offset)
    //     } else if (mode === 'async') {
    //         return nodes.map((node) => offset)
    //     } else if (mode === 'sequence' || mode === 'delayed') {
    //         let { stagger } = params
    //         if (!stagger) {
    //             stagger = (params.duration || 1000) / (nodes.length - 1)
    //         }
    //         return nodes.map((node, i) => stagger * i + offset)
    //     } else if (mode === 'oneByOne') {
    //         return nodes.map((node) => params.duration)
    //     } else if (mode === 'shuffle') {
    //         const { stagger } = params
    //         return shuffle(nodes.map((node, i) => (stagger || 0) * i + offset))
    //     } else {
    //         const { stagger } = params
    //         return nodes.map((node, i) => (stagger || 0) * i + offset)
    //     }
    // }

    // /**
    //  * @param {Array<Element>} nodes DOM Elements Collection (converted to Array)
    //  * @param {object} from - Initial value
    //  * @param {object} to - Target value
    //  * @param {object} params - Options of tweens
    //  * @example timeline.fromTo(nodes, {x:0}, {x:200}, {duration:1000, stagger:200})
    //  * @memberof Timeline
    //  * @static
    //  */
    // public fromTo(nodes:TAny[], to:TAny, params:TAny) {
    //     if (nodes && nodes.length) {
    //         if (this._defaultParams) {
    //             params = params ? { ...this._defaultParams, ...params } : this._defaultParams;
    //         }
    //         const position = params.label;
    //         const offset =typeof position === 'number' ? position : this.position.parseLabel(typeof position !== 'undefined' ? position : 'afterLast', null);
    //         const mode = this.getTiming(params.mode, nodes, params, offset);
    //         for (let i = 0, node, len = nodes.length; i < len; i++) {
    //             node = nodes[i];
    //             this.add(
    //                 Tween.fromTo(
    //                     node,
    //                     typeof to === 'function' ? to(i, nodes.length) : to,
    //                     typeof params === 'function' ? params(i, nodes.length) : params
    //                 ),
    //                 mode[i]
    //             );
    //         }
    //     }
    //     return this.start();
    // }

    // /**
    //  * @param {Array<Element>} nodes DOM Elements Collection (converted to Array)
    //  * @param {object} from - Initial value
    //  * @param {object} params - Options of tweens
    //  * @example tl.from(nodes, {x:200}, {duration:1000, stagger:200})
    //  * @memberof Timeline
    //  * @static
    //  */
    // public from(nodes:TAny[], from:TAny, params:TAny) {
    //     return this.fromTo(nodes, from , params);
    // }
    
    // /**
    //  * @param {Array<Element>} nodes DOM Elements Collection (converted to Array)
    //  * @param {object} to - Target value
    //  * @param {object} params - Options of tweens
    //  * @example tl.to(nodes, {x:200}, {duration:1000, stagger:200})
    //  * @memberof Timeline
    //  * @static
    //  */
    // public tos(nodes:TAny[], to:TAny, params:TAny) {
    //     return this.fromTo(nodes, to, params)
    // }

    // /**
    //  * Add label to Timeline
    //  * @param {string} name Label name
    //  * @param {any} offset Label value, can be `number` and/or `string`
    //  * @example tl.add('label1', 200)
    //  * @memberof Timeline
    //  */
    // public addLabel(name:string, offset:number|string) {
    //     this.position.addLabel(name, offset);
    //     return this;
    // }

    // public map(fn:Function) {
    //     for (let i = 0, len = this._tweens.length; i < len; i++) {
    //         const _tween = this._tweens[i]
    //         fn(_tween, i)
    //         this._duration = Math.max(this._duration, (_tween.duration as number) + (_tween.startTime as number));
    //     }
    //     return this
    // }

    // /**
    //  * Add tween to Timeline
    //  * @param {Tween} tween Tween instance
    //  * @param {position} position Can be label name, number or relative number to label
    //  * @example tl.add(new Tween(node, {x:0}).to({x:200}, 200))
    //  * @memberof Timeline
    //  */
    // public add(tween, position) {
    //     if (Array.isArray(tween)) {
    //         tween.map((_tween) => {
    //             this.add(_tween, position)
    //         })
    //         return this
    //     } else if (typeof tween === 'object' && !(tween instanceof Tween)) {
    //         tween = new Tween(tween.from).to(tween.to, tween)
    //     }

    //     const { _defaultParams, _duration } = this

    //     if (_defaultParams) {
    //         for (const method in _defaultParams) {
    //             if (typeof tween[method] === 'function') {
    //                 tween[method](_defaultParams[method])
    //             }
    //         }
    //     }

    //     const offset =
    //         typeof position === 'number'
    //             ? position
    //             : this.position.parseLabel(typeof position !== 'undefined' ? position : 'afterLast', null)
    //     tween._startTime = Math.max(this._startTime, tween._delayTime, offset)
    //     tween._delayTime = offset
    //     tween._isPlaying = true
    //     this._duration = Math.max(_duration, Math.max(tween._startTime + tween._delayTime, tween._duration))
    //     this._tweens.push(tween)
    //     this.position.setLabel('afterLast', this._duration)
    //     return this
    // }

    // public restart() {
    //     this._startTime += now()

    //     add(this)

    //     return this.emit(TweenEvent.restart)
    // }

    // public easing(easing) {
    //     return this.map((tween) => tween.easing(easing))
    // }

    // public interpolation(interpolation) {
    //     return this.map((tween) => tween.interpolation(interpolation))
    // }

    // public update(time) {
    //     const {
    //         _tweens,
    //         _duration,
    //         _reverseDelayTime,
    //         _startTime,
    //         _reversed,
    //         _yoyo,
    //         _repeat,
    //         _isFinite,
    //         _isPlaying,
    //         _prevTime,
    //         _onStartCallbackFired
    //     } = this

    //     let elapsed

    //     time = time !== undefined ? time : now()

    //     let delta = time - _prevTime
    //     this._prevTime = time
    //     if (delta > TOO_LONG_FRAME_MS && isRunning() && isLagSmoothing()) {
    //         time -= delta - FRAME_MS
    //     }

    //     if (!_isPlaying || time < _startTime) {
    //         return true
    //     }

    //     elapsed = (time - _startTime) / _duration
    //     elapsed = elapsed > 1 ? 1 : elapsed
    //     elapsed = _reversed ? 1 - elapsed : elapsed

    //     this.elapsed = elapsed

    //     if (!_onStartCallbackFired) {
    //         this.emit(TweenEvent.start)
    //         this._onStartCallbackFired = true
    //     }

    //     const timing = time - _startTime
    //     const _timing = _reversed ? _duration - timing : timing

    //     let i = 0
    //     while (i < _tweens.length) {
    //         _tweens[i].update(_timing)
    //         i++
    //     }

    //     this.emit(TweenEvent.update, elapsed, timing)

    //     if (elapsed === 1 || (_reversed && elapsed === 0)) {
    //         if (_repeat) {
    //             if (_isFinite) {
    //                 this._repeat--
    //             }

    //             this.emit(_reversed ? TweenEvent.reverse : TweenEvent.repeat)

    //             if (_yoyo) {
    //                 this._reversed = !_reversed
    //                 this.timingOrder((timing) => timing.reverse())
    //             }

    //             if (_reversed && _reverseDelayTime) {
    //                 this._startTime = time + _reverseDelayTime
    //             } else {
    //                 this._startTime = time
    //             }

    //             i = 0
    //             while (i < _tweens.length) {
    //                 _tweens[i].reassignValues(time)
    //                 i++
    //             }

    //             return true
    //         } else {
    //             this.emit(TweenEvent.complete)
    //             this._repeat = this._r

    //             remove(this)
    //             this._isPlaying = false

    //             return false
    //         }
    //     }

    //     return true
    // }

    // public progress(value) {
    //     return value !== undefined ? this.update(value * this._duration) : this.elapsed
    // }
}
