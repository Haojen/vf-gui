import { shared as tickerShared } from '../../Ticker';
import Easing from './Easing';
import { objectPoolShared } from '../../ObjectPool';
class Node {
    constructor(node) {
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.startFrame = 0;
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
        this.id = -1;
        this._frames = new Array();
        this._frameCount = 0;
        this._elapsedMS = 16.66; //1000/60
        this._prevTime = 0;
        this._duration = 0;
        this._isStop = false;
        this._lastNode = new Map();
        this._isSetDefault = false;
    }
    setDefault(object, _duration, fps) {
        this._object = object;
        this._duration = _duration;
        this._elapsedMS = 1000 / fps;
        let frameCount = Math.round(_duration / this._elapsedMS);
        this._frameCount = frameCount;
        let frames = this._frames;
        while (frames && frames.length > frameCount) {
            frames.pop();
        }
        let i = frames.length === 0 ? 0 : frames.length;
        for (i; i <= frameCount; i++) {
            if (frames[i] === undefined)
                frames[i] = new Map();
        }
        this._isSetDefault = true;
        return this;
    }
    addProperty(property, value, endFrame, easing) {
        if (endFrame > this._frameCount) {
            throw "Error Timeline.addProperty overflow frame";
        }
        let parentNode = this._lastNode.get(property);
        let node = objectPoolShared.pop(Node);
        if (parentNode === undefined) {
            node.parent = undefined;
        }
        else {
            node.parent = parentNode;
        }
        node.startFrame = node.parent === undefined ? 0 : (node.parent.endFrame + 1);
        node.end = value;
        node.start = node.parent === undefined ? (this._object[property] || 0) : node.parent.end;
        if (easing) {
            node.easing = easing;
        }
        else {
            node.easing = Easing.Linear.None;
        }
        node.duration = (endFrame - node.startFrame) * this._elapsedMS;
        node.endFrame = endFrame;
        this._lastNode.set(property, node);
        for (let i = node.startFrame; i <= endFrame; i++) {
            this._frames[i].set(property, node);
        }
        return this;
    }
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
    seekLastNode(value, frame) {
        if (value.parent === undefined) {
            return value;
        }
        if (value.endFrame > frame) {
            this.seekLastNode(value.parent, frame);
        }
        return value;
    }
    goto(frame, isStop) {
        let { _lastNode, _frames } = this;
        _lastNode.forEach((value, key) => {
            let node = this.seekLastNode(value, frame);
            node.prevTime = node.duration;
            this.updateobject(key, node);
        }, this);
        this._prevTime = frame * this._elapsedMS;
        for (let i = frame; i < _frames.length; i++) {
            _frames[i].forEach((value, key) => {
                if (i == frame) {
                    value.prevTime = (frame - value.startFrame) * this._elapsedMS;
                    this.updateobject(key, value);
                }
                else {
                    value.prevTime = 0;
                }
            }, this);
        }
        this._isStop = isStop;
        if (!this._isStop) {
            this.load();
        }
    }
    update(a, b, elapsedMS = 0) {
        if (this._isStop) {
            return;
        }
        let { _prevTime, _frames, _frameCount, _elapsedMS } = this;
        let curFrame = Math.round(_prevTime / _elapsedMS);
        if (curFrame >= _frameCount) {
            this._isStop = true;
        }
        if (_frames[curFrame] == undefined) {
            this._isStop = true;
            return;
        }
        _prevTime += elapsedMS;
        _frames[curFrame].forEach((value, key) => {
            if (value.start !== value.end) {
                value.prevTime += elapsedMS;
                this.updateobject(key, value);
            }
        }, this);
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
        if (!this._isSetDefault) {
            throw "Error Timeline.load undefined default";
        }
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
        this.id = -1;
        this._object = undefined;
        this._frameCount = 0;
        this._elapsedMS = 16.666666666666; //1000/60
        this._prevTime = 0;
        this._duration = 0;
        this._isStop = false;
        this._isSetDefault = false;
        this._lastNode.clear();
    }
    destroy(destroyWebGL) {
    }
}
//# sourceMappingURL=Timeline.js.map