import { shared as tickerShared } from '../core/Ticker'
import {Easing} from './Easing';
import { objectPoolShared } from '../core/ObjectPool';
import { ComponentEvent } from '../interaction/Index';

class Node {

    constructor(node?: Node) {
        this.parent = node;
    }
    public parent: Node | undefined;
    public default = 0;
    public start: TAny = 0;
    public end: TAny = 0;
    public easing: TAny;
    public duration = 0;
    public startFrame = 0;
    public endFrame = 0;
    public prevTime = 0;

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
export class Timeline extends PIXI.utils.EventEmitter implements Lifecycle {

    constructor() { super() }

    public id: number = -1;
    private _object: TAny;
    private _frames = new Array<Map<string, Node>>();
    private _frameCount = 0;
    private _elapsedMS = 16.66; //1000/60
    private _prevTime = 0;
    private _isStop = false;
    private _lastNode = new Map<string, Node>();
    private _isSetDefault = false;
    public loop = false;

    public setDefault(object: TAny, _duration: number, fps: number) {

        this._object = object;
        this._elapsedMS = 1000 / fps;
        const frameCount = Math.round(_duration / this._elapsedMS);
        this._frameCount = frameCount;
        const frames = this._frames;
        while (frames && frames.length > frameCount) {
            frames.pop();
        }
        let i = frames.length === 0 ? 0 : frames.length;
        for (i; i <= frameCount; i++) {
            if (frames[i] === undefined)
                frames[i] = new Map<string, Node>();
        }
        this._isSetDefault = true;
        return this;
    }
    public addProperty(property: string, value: number | string | boolean, endFrame: number, easing?: TAny) {
        if (endFrame > this._frameCount) {
            throw "Error Timeline.addProperty overflow frame";
        }
        const parentNode = this._lastNode.get(property);
        const node = objectPoolShared.pop(Node);
        if (parentNode === undefined) {
            node.parent = undefined;
        } else {
            node.parent = parentNode;
        }

        node.startFrame = node.parent === undefined ? 0 : (node.parent.endFrame + 1);
        node.end = value;
        node.start = node.parent === undefined ? (this._object[property] || 0) : node.parent.end;
        node.default = this._object[property] || 0;
        if (easing) {
            node.easing = easing;
        } else {
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

    public stop() {
        this._isStop = true;
    }
    public play() {
        this._isStop = false;
    }
    public gotoAndPlay(frame: number) {
        this.goto(frame, false);
    }

    public gotoAndStop(frame: number) {
        this.goto(frame, true);
    }

    private seekLastNode(value: Node, frame: number) {
        if (value.parent === undefined) {
            return value;
        }
        if (value.endFrame > frame) {
            this.seekLastNode(value.parent, frame);
        }
        return value;
    }

    private goto(frame: number, isStop: boolean) {

        const { _lastNode, _frames } = this;
        _lastNode.forEach((value: Node, key: string) => {
            const node = this.seekLastNode(value, frame);
            node.prevTime = node.duration;
            this.updateobject(key, node);
        }, this);

        this._prevTime = frame * this._elapsedMS;
        for (let i = frame; i < _frames.length; i++) {
            _frames[i].forEach((value: Node, key: string) => {
                if (i == frame) {
                    value.prevTime = (frame - value.startFrame) * this._elapsedMS;
                    this.updateobject(key, value);
                } else {
                    value.prevTime = 0;
                }
            }, this);
        }

        this._isStop = isStop;
        if (!this._isStop) {
            this.load();
        }
    }

    public update(a: number, b?: number, elapsedMS = 0) {
        if (this._isStop) {
            return;
        }
        let _prevTime = this._prevTime;
        const { _frames, _frameCount, _elapsedMS } = this;
        const curFrame = Math.round(_prevTime / _elapsedMS);
        
        if (curFrame >= _frameCount) {
            if(this.loop){
                this.emit(ComponentEvent.LOOP,this);
                this.goto(1,false);
                return;
            }
            this._isStop = true;
            this.emit(ComponentEvent.COMPLETE,this);
        }
        if (_frames[curFrame] == undefined) {
            this._isStop = true;
            return;
        }
        _prevTime += elapsedMS;
        _frames[curFrame].forEach((value: Node, key: string) => {
            if (value.start !== value.end) {
                value.prevTime += elapsedMS;
                this.updateobject(key, value);
            }
        }, this);
        this._prevTime = _prevTime;
        return true;
    }

    public updateobject(key: string, node: Node) {

        let elapsed: number;
        if (!node.duration) {
            elapsed = 1;
        } else {

            elapsed = node.prevTime / node.duration;
            elapsed = elapsed > 1 ? 1 : elapsed;
        }

        const value = node.easing(elapsed);
        const start = node.start;
        const end = node.end;
        if (typeof end === 'number') {
            switch(key){
                case "x":
                case "y":
                case "angle":
                    this._object[key] =node.default + Math.floor(start + (end - start) * value);
                    break;
                case "scaleX":
                case "scaleY":
                case "rotation":
                    this._object[key] = node.default * Math.floor(start + (end - start) * value);
                    break;
                default:
                    this._object[key] = Math.floor(start + (end - start) * value);
            }
            
        } else if (typeof end === 'boolean') {
            this._object[key] = end;
        }
        if (elapsed === 1) {
            return true
        }

        return false;
    }


    public load() {
        if (!this._isSetDefault) {
            throw "Error Timeline.load undefined default";
        }
        tickerShared.removeUpdateEvent(this.update, this)
        tickerShared.addUpdateEvent(this.update, this);
    }


    release() {
        tickerShared.removeUpdateEvent(this.update, this);
        this._frames.forEach(map => {
            map.forEach((value: Node, ) => {
                objectPoolShared.push(Node, value);
            });
            map.clear();
        });

        this.id = -1;
        this._object = undefined;
        this._frameCount = 0;
        this._elapsedMS = 16.666666666666; //1000/60
        this._prevTime = 0;
        this._isStop = false;
        this._isSetDefault = false;
        this.loop = false;
        this._lastNode.clear();
    }
}
