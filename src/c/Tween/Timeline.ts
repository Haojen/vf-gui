import {shared as tickerShared} from '../../Ticker'
import Easing from './Easing';
import { now, uid } from '../../Utils';
import { objectPoolShared } from '../../ObjectPool';

class Node{

    constructor(node?:Node){
        this.parent = node;
    }
    public parent:Node|undefined;
    public start : TAny = 0;
    public end: TAny = 0;
    public easing:TAny;
    public duration = 0;
    public endFrame = 0;
    public prevTime = 0;
    
    release(){
        this.parent = undefined;
        this.easing = undefined;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.endFrame = 0;
        this.prevTime = 0;
    }

    load(){}
    destroy(){}
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
export default class Timeline implements Lifecycle{

    constructor() {


    }
    private _object:TAny;
    private _id: number = -1;
    private _frames = new Array<Map<string,Node>>();
    private _frameCount = 0;
    private _curFrame = 0;
    private _elapsedMS = 16.666666666666; //1000/60
    private _prevTime = 0;
    private _duration = 60;
    private _isStop = false;
    private _lastNode = new Map<string,Node>();

    public setDefault(object:TAny, _duration: number,_framesCount:number){

        this._object = object;
        this._duration = _duration;
        this._elapsedMS = _duration/_framesCount;
        this._frameCount = _framesCount;

        while( this._frames &&  this._frames.length>_framesCount){
            this._frames.pop();
        }
        let i = this._frames.length === 0 ? 0 :  this._frames.length;
        for(i;i<=_framesCount;i++){
            if(this._frames[i] === undefined)
                this._frames[i] = new Map<string,Node>();
        }
        return this;
    }
    public addProperty(property:string,value:number|string|boolean,endFrame:number,curve?:number[]){
        if(endFrame>this._frameCount){
            throw "Error Timeline.addProperty overflow frame Count";
        }
        let parentNode = this._lastNode.get(property);
        let node = objectPoolShared.pop(Node);
        if(parentNode === undefined){
            node.parent = undefined;
        }else{
            node.parent = parentNode;
        }
        let startFrame = node.parent === undefined ? 0 : (node.parent.endFrame+1);
        node.end = value;
        node.start = node.parent === undefined ? (this._object[property] || 0)  : node.parent.end;
        if(curve && curve.length==1){
            node.easing = Easing.Back.In;
        }else{
            node.easing = Easing.Linear.None;
        }
        node.duration = (endFrame - startFrame)*this._elapsedMS;
        node.endFrame = endFrame;
        
        this._lastNode.set(property,node);

        for (let i = startFrame; i <= endFrame; i++) {
            this._frames[i].set(property,node);
        }
        
        return this;
    }

    // public _addObject(obj:TAny,formTo:TAny,startFrame: number, endFrame: number){
    //     let tw = new Tween(obj).to(formTo,(endFrame - startFrame) * this._elapsedMS);
    //     this.add(tw,startFrame,endFrame);
        
    // }

    public stop(){
        this._isStop = true;
    }
    public play(){
        this._isStop = false;
    }
    public gotoAndPlay(frame:number){
        this.goto(frame,false);
    }

    public gotoAndStop(frame:number){
        this.goto(frame,true);
    }

    public goto(frame:number,isStop:boolean){
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

    public update(a:number,b?:number,elapsedMS = 0) {
        if(this._isStop){
            return;
        }
        let {_curFrame,_prevTime,_frames,_frameCount,_elapsedMS} = this;
        _curFrame =Math.round(_prevTime/_elapsedMS);
        if(_curFrame >= _frameCount){
            this._isStop = true;
        }
        if( _frames[this._curFrame] == undefined){
            this._isStop = true;
            return;
        }  
        _prevTime += elapsedMS;
        _frames[this._curFrame ].forEach((value: Node, key: string, map: Map<string, Node>)=>{
            if(value.start != value.end){
                value.prevTime += elapsedMS;
                this.updateobject(key,value);
            }
        },this);
        this._curFrame = _curFrame;
        this._prevTime = _prevTime;
        return true
    }

    public updateobject(key:string,node:Node) {

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
            this._object[key]= Math.floor(start + (end - start) * value);
        } else if (typeof end === 'boolean') {
            this._object[key]= end;
        } 
        if (elapsed === 1) {
            return true
        }

        return false;
    }



    public load(){
        tickerShared.removeUpdateEvent(this.update,this)
        tickerShared.addUpdateEvent(this.update,this);
    }


    release(){
        tickerShared.removeUpdateEvent(this.update,this);
        this._frames.forEach(map=>{
            map.forEach((value: Node,)=>{
                objectPoolShared.push(Node,value);
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

    public destroy(destroyWebGL?:boolean){

    }

}
