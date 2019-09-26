import { shared as tickerShared } from '../../Ticker';
import Easing from './Easing';
import { objectPoolShared } from '../../ObjectPool';
class Node {
    constructor(node) {
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.endFrame = 0;
        this.prevTime = 0;
        this.parent = node;
    }
    release() {
        this.parent = undefined;
        this.easing = undefined;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.endFrame = 0;
        this.prevTime = 0;
    }
    load() { }
    destroy() { }
}
/**
 * 时间轴主类
 *
 * @constructor
 * @class
 * @namespace tween.Timeline
 * @param {Object=} params 默认参数
 * @example let tl = new Timeline({delay:200})
 * @extends Tween
 */
export default class Timeline {
    constructor() {
        this._id = -1;
        this._frames = new Array();
        this._frameCount = 0;
        this._curFrame = 0;
        this._elapsedMS = 16.666666666666; //1000/60
        this._prevTime = 0;
        this._duration = 60;
        this._isStop = false;
        this._lastNode = new Map();
    }
    setDefault(object, _duration, _framesCount) {
        this._object = object;
        this._duration = _duration;
        this._elapsedMS = _duration / _framesCount;
        this._frameCount = _framesCount;
        while (this._frames && this._frames.length > _framesCount) {
            this._frames.pop();
        }
        let i = this._frames.length === 0 ? 0 : this._frames.length;
        for (i; i <= _framesCount; i++) {
            if (this._frames[i] === undefined)
                this._frames[i] = new Map();
        }
        return this;
    }
    addProperty(property, value, endFrame, curve) {
        if (endFrame > this._frameCount) {
            throw "Error Timeline.addProperty overflow frame Count";
        }
        let parentNode = this._lastNode.get(property);
        let node = objectPoolShared.pop(Node);
        if (parentNode === undefined) {
            node.parent = undefined;
        }
        else {
            node.parent = parentNode;
        }
        let startFrame = node.parent === undefined ? 0 : (node.parent.endFrame + 1);
        node.end = value;
        node.start = node.parent === undefined ? (this._object[property] || 0) : node.parent.end;
        if (curve && curve.length == 1) {
            node.easing = Easing.Back.In;
        }
        else {
            node.easing = Easing.Linear.None;
        }
        node.duration = (endFrame - startFrame) * this._elapsedMS;
        node.endFrame = endFrame;
        this._lastNode.set(property, node);
        for (let i = startFrame; i <= endFrame; i++) {
            this._frames[i].set(property, node);
        }
        return this;
    }
    // public _addObject(obj:TAny,formTo:TAny,startFrame: number, endFrame: number){
    //     let tw = new Tween(obj).to(formTo,(endFrame - startFrame) * this._elapsedMS);
    //     this.add(tw,startFrame,endFrame);
    // }
    stop() {
        this._isStop = true;
    }
    play() {
        this._isStop = false;
    }
    gotoAndPlay(frame) {
        this.goto(frame, false);
    }
    gotoAndStop(frame) {
        this.goto(frame, true);
    }
    goto(frame, isStop) {
        // this._keyFrames.forEach(value=>{
        //     if(value<frame)
        //         this._frames[value].forEach(value=>{
        //             value.gotoAndEnd();
        //         });
        // });
        // this._frames[frame].forEach(value=>{
        //     const time = (frame - value.data.startFrame)*this._elapsedMS;
        //     if(isStop){
        //         value.gotoAndStop(time);
        //     }else{
        //         value.gotoAndPlay(time);
        //     }   
        // });
        // this._isStop = isStop;
    }
    update(a, b, elapsedMS = 0) {
        if (this._isStop) {
            return;
        }
        let { _curFrame, _prevTime, _frames, _frameCount, _elapsedMS } = this;
        _curFrame = Math.round(_prevTime / _elapsedMS);
        if (_curFrame >= _frameCount) {
            this._isStop = true;
        }
        if (_frames[this._curFrame] == undefined) {
            this._isStop = true;
            return;
        }
        _prevTime += elapsedMS;
        _frames[this._curFrame].forEach((value, key, map) => {
            if (value.start != value.end) {
                value.prevTime += elapsedMS;
                this.updateobject(key, value);
            }
        }, this);
        this._curFrame = _curFrame;
        this._prevTime = _prevTime;
        return true;
    }
    updateobject(key, node) {
        let elapsed;
        if (!node.duration) {
            elapsed = 1;
        }
        else {
            elapsed = node.prevTime / node.duration;
            elapsed = elapsed > 1 ? 1 : elapsed;
        }
        const value = node.easing(elapsed);
        const start = node.start;
        const end = node.end;
        if (typeof end === 'number') {
            this._object[key] = Math.floor(start + (end - start) * value);
        }
        else if (typeof end === 'boolean') {
            this._object[key] = end;
        }
        if (elapsed === 1) {
            return true;
        }
        return false;
    }
    load() {
        tickerShared.removeUpdateEvent(this.update, this);
        tickerShared.addUpdateEvent(this.update, this);
    }
    release() {
        tickerShared.removeUpdateEvent(this.update, this);
        this._frames.forEach(map => {
            map.forEach((value) => {
                objectPoolShared.push(Node, value);
            });
            map.clear();
        });
        this._object = undefined;
        this._id = -1;
        this._frameCount = 0;
        this._curFrame = 0;
        this._elapsedMS = 16.666666666666; //1000/60
        this._prevTime = 0;
        this._duration = 60;
        this._isStop = false;
        this._lastNode.clear();
    }
    destroy(destroyWebGL) {
    }
}
//# sourceMappingURL=Timeline.js.map