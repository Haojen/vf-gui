import { TweenObject } from "./TweenObject";
import { _activeTweenObjects} from "./Tween";
import { UIBase } from "../UIBase";
import { EaseBase } from "../Ease/EaseBase";
import * as Utils from "../Utils";


const widthKeys = ["width", "minWidth", "maxWidth", "anchorLeft", "anchorRight", "left", "right", "x"];
const heightKeys = ["height", "minHeight", "maxHeight", "anchorTop", "anchorBottom", "top", "bottom", "y"];


function getToValue(to: number|string) {
    if(typeof(to) == "number"){
        return to;
    }else{
        if(to.indexOf('%') !== -1){
            return parseFloat(to.replace('%', ''));
        }
    }
    return parseFloat(to);
}

function getFromValue(from: number|string, to: number|string, obj: UIBase, key: string) {
    //both number
    if(typeof(to) == "number" && typeof(to) == "number"){
        return from;
    }
    //both percentage
    if(typeof(from) == "string" && typeof(to) == "string"){
        if(from.indexOf('%') !== -1 && to.indexOf('%') !== -1){
            return parseFloat(from.replace('%', ''));
        }
    }
    //convert from to px
    if(typeof(from) == "string" && typeof(to) == "number" && from.indexOf('%') !== -1){
        if (widthKeys.indexOf(key) !== -1 && obj.parent)
            return obj.parent._width * (parseFloat(from.replace('%', '')) * 0.01);
        else if (heightKeys.indexOf(key) !== -1 && obj.parent)
            return obj.parent._height * (parseFloat(from.replace('%', '')) * 0.01);
        else
            return 0;
    }
    //convert from to percentage
    if(typeof(from) == "number" && typeof(to) == "string" && to.indexOf('%') !== -1){
        if (widthKeys.indexOf(key) !== -1 && obj.parent)
            return from / obj.parent._width * 100;
        else if (heightKeys.indexOf(key) !== -1 && obj.parent)
            return from / obj.parent._height * 100;
        else
            return 0;
    }
    return 0;
}


export class TweenItem{

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
    private key = "";
    private from: number|string|Color = 0;
    private to: number|string|Color = 0;
    private time = 0;
    private ease: EaseBase|undefined;
    private currentTime = 0;
    private t = 0;
    private isColor = false;
    private surfix = "";
    private currentColor: Color|undefined;
    /**
     * 移除当前缓动对象
     */
    public remove() {
        this._ready = true;
        if(this.parent){
            this.parent.removeTweenItem(this.key);
        }
    }
    /**
     * 设置显示对象到缓动激活列表
     * @param obj 显示对象
     * @param key 缓动字段
     * @param from 开始的值
     * @param to 结束的值
     * @param time 缓动用时
     * @param ease 缓动函数
     */
    public set(obj: TweenObject, key: string, from: number|string, to: number|string, time: number, ease: EaseBase) {
        if(typeof(from) == "string"){
            if(from[0]=="#"){
                this.isColor = true;
            }
        }else if(typeof(to) == "string"){
            if(to[0]=="#"){
                this.isColor = true;
            }else if(to.indexOf("%")!==-1){
                this.surfix = "%";
            }
        }
        this.parent = obj;
        this.obj = obj.object;
    
        if (this.isColor) {
            this.to = Utils.hexToRgb(to);
            this.from = Utils .hexToRgb(from);
            this.currentColor = { r: this.from.r, g: this.from.g, b: this.from.b };
        }
        else {
            this.to = getToValue(to);
            this.from = getFromValue(from, to, this.obj, key);
        }
    
        this.time = time;
        this.currentTime = 0;
        this.ease = ease;
        this._ready = false;
    
        if (!this.parent.active) {
            this.parent.active = true;
            _activeTweenObjects[this.obj.attach._tweenObjectId as number] = this.parent;
        }
    
    }
    /**
     * 更新UI
     * @param delta 间隔
     */
    public update(delta: number) {
        this.currentTime += delta;
        this.t = Math.min(this.currentTime, this.time) / this.time;
        if (this.ease)
            this.t = this.ease.getPosition(this.t);
        const tempObj = this.obj as TAny;
        if (this.isColor) {
            if(this.currentColor && typeof(this.from)=="object" && typeof(this.to)=="object"){
                this.currentColor.r = Math.round(Utils .Lerp(this.from.r, this.to.r, this.t));
                this.currentColor.g = Math.round(Utils .Lerp(this.from.g, this.to.g, this.t));
                this.currentColor.b = Math.round(Utils .Lerp(this.from.b, this.to.b, this.t));
                if(tempObj && tempObj[this.key]){
                    tempObj[this.key] = Utils .rgbToNumber(this.currentColor.r, this.currentColor.g, this.currentColor.b);
                }
                
            }else{
                Utils.log("TweenItem -> update this.currentColor = undefined")
            }

        }
        else {
            const val = Utils.Lerp(Number(this.from), Number(this.to), this.t);
            tempObj[this.key] = this.surfix ? val + this.surfix : val;
        }
    
        if (this.currentTime >= this.time) {
            this.remove();
        }
    }
} 
/**
 * @protected
 */
export const _tweenItemCache: TweenItem[] = [];
/**
 * 
 * @private
 */
export function getNewTweenItem() {
    for (let i = 0; i < _tweenItemCache.length; i++) {
        if (_tweenItemCache[i].ready)
            return _tweenItemCache[i];
    }
    const tween = new TweenItem();
    _tweenItemCache.push(tween);
    return tween;
}