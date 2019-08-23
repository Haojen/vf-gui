import UIBase from "../UIBase";
import { TweenObject } from "./TweenObject";
import { _activeTweenObjects} from "./Tween";
/**
 * @protected
 */
export const _callbackItemCache: TweenCallbackItem[] = [];

export class TweenCallbackItem{

    public constructor(){}

    private _ready = false;
    /** 
     * 是否已准备好，执行remove后，ready = true
    */
    public get ready() {
        return this._ready;
    }
    public parent: TweenObject|undefined;
    private obj: UIBase|undefined;
    /** 属性或函数标识符 */
    public key = "";
    private time = 0;
    private callback: ((cb: TweenObject|undefined) => void)|undefined;
    private currentTime = 0;

    /** 移除 */
    public remove() {
        this._ready = true;
        if(this.parent){
            this.parent.removeTweenItem(this.key);
        }
    }

    public set<T extends TweenObject>(obj: T, callback: (cb: TweenObject|undefined) => void, time: number) {
        
        this.obj = obj.object;
    
        if (!this.obj.attach._currentCallbackID)
            this.obj.attach._currentCallbackID = 1;
        else
            (this.obj.attach._currentCallbackID as number)++;
    
        this.time = time;
        this.parent = obj;
        this.callback = callback;
        this._ready = false;
        this.key = "cb_" + this.obj.attach._currentCallbackID;
        this.currentTime = 0;
        if (!this.parent.active) {
            this.parent.active = true;
            _activeTweenObjects[this.obj.attach._tweenObjectId as number] = this.parent;
        }
    }

    update(delta: number) {
        this.currentTime += delta;
        if (this.currentTime >= this.time) {
            this.remove();
            if(this.callback){
                this.callback(this.parent)
            } 
        }
    }
}
/**
 * 
 * @private
 */
export function getNewCallbackItem() {
    for (let i = 0; i < _callbackItemCache.length; i++) {
        if (_callbackItemCache[i].ready)
            return _callbackItemCache[i];
    }
    const cb = new TweenCallbackItem();
    _callbackItemCache.push(cb);
    return cb;
}