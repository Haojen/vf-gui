import { TweenItem } from "./TweenItem";
import UIBase from "../../UIBase";
import { _activeTweenObjects } from "../Tween";
import { TweenCallbackItem } from "./TweenCallbackItem";
/**
 * @protected
 */
export let _currentId = 1;
/**
 * @protected
 */
export const _tweenObjects: {[key: string]: TweenObject} = {};

export class TweenObject{

    public constructor(obj: UIBase){
        this.object = obj;
    }
    /**
     * 当前的引用
     */
    public object: UIBase;
    /**
     * 当前缓动项目列表
     */
    public tweens: {[key: string]: TweenItem|TweenCallbackItem} = {};
    /**
     * 是否激活状态
     */
    public active = false;
    public onUpdate: ((delta: number) => void) | undefined;

    /**
     * 获取项目，不存在返回undefined
     */
    public getTweenItem(key: string){
        if(this.tweens[key] == undefined){
            return undefined;
        }
        return this.tweens[key];
    }
    /**
     * 删除指定项
     * @param key 
     */
    public removeTweenItem(key: string){
        if(this.tweens[key]){
            delete this.tweens[key];
            if (!Object.keys(this.tweens).length) {
                this.active = false;
                this.onUpdate = undefined;
                delete _activeTweenObjects[this.object.attach._tweenObjectId as number];
            }
        }
    }
    /**
     * 添加缓动字段变化到列表
     * @param key 属性
     * @param item 方法或属性构造类，用于解析字段或完成更新方法
     */
    public addTweenItem(key: string,item: TweenItem|TweenCallbackItem){
        this.tweens[key] = item;
    }
}

/**
 * 获取缓动对象，如果不存在则创建新的TweenObject
 * @param obj
 * @private
 */
export function getObject(obj: UIBase) {
    if (!obj.attach._tweenObjectId) {
        obj.attach._tweenObjectId = _currentId;
        _currentId++;
    }
    const key = obj.attach._tweenObjectId as number;
    let object = _tweenObjects[key];
    if (!object) {
        object = _tweenObjects[key] = new TweenObject(obj);
    }
    return object;
}