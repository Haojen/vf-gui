import UIBase from "../UIBase";
import Ease  from "../Ease/Ease";
import { TweenObject, getObject } from "./TweenObject"
import { TweenItem, getNewTweenItem } from "./TweenItem";
import { getNewCallbackItem } from "./TweenCallbackItem";
import { EaseBase } from "../Ease/EaseBase";
/**
 * 缓动控制类
 */

/**
 * @protected
 */
export const _activeTweenObjects: { [key: string]: TweenObject } = {};


class Tween {

    /**
     * 设置缓动，调用to,from,fromTo
     * @param obj 需要动画的对象
     * @param params 设置动画的一些属性及其他参数
     * @private
     */
    public static set(obj: UIBase, params: TAny) {
        const object = getObject(obj);
        const tempObj: TAny = obj;
        for (const key in params) {
            if (typeof tempObj[key] === "undefined")
                continue;
            object.removeTweenItem(key);
            tempObj[key] = params[key];
        }
    }
    /**
     * 从当前值到目标值
     * @param obj 需要动画的对象
     * @param time 动画持续时间，一般是秒
     * @param params 缓动字段 如: { scale: 1.15, tint: "#ffffff" ,onComplete:(obj)=>{},onUpdate:(delta)=>{}}
     * @param ease 缓动函数 Ease/Ease.ts
     */
    public static to(obj: UIBase, time: number, params: TAny, ease?: EaseBase) {
        if(ease === undefined){
            ease = Ease.Power0.easeNone;
        }
        const object = getObject(obj);
        let onUpdate = null;
        for (const key in params) {
            if (key === "onComplete") {
                const cb = getNewCallbackItem();
                cb.set(object, params[key], time);
                object.addTweenItem(cb.key, cb);
                continue;
            }

            if (key === "onUpdate") {
                onUpdate = params[key];
                continue;
            }

            if (time) {
                const tempObj = obj as TAny;
                if (typeof tempObj[key] === "undefined")
                    continue;
                const match = params[key] === tempObj[key];
                if (match) {
                    object.removeTweenItem(key);
                }
                else {
                    let item = object.getTweenItem(key) as TweenItem;
                    if (item === undefined) {
                        item = getNewTweenItem();
                        object.addTweenItem(key, item);
                    }
                    item.set(object, key, tempObj[key], params[key], time, ease);
                }
            }
        }

        if (time)
            object.onUpdate = onUpdate;
        else
            Tween.set(obj, params);
    }

    /**
     * 从指定目标值到属性当前值
     * @param obj 需要动画的对象
     * @param time 动画持续时间，一般是秒
     * @param params 设置动画的一些属性及其他参数
     * @param ease 
     */
    public static from(obj: UIBase, time: number, params: TAny, ease: EaseBase) {
        const object = getObject(obj);
        let onUpdate = null;
        for (const key in params) {
            if (key === "onComplete") {
                const cb = getNewCallbackItem();
                cb.set(object, params[key], time);
                object.addTweenItem(cb.key, cb);
                continue;
            }

            if (key === "onUpdate") {
                onUpdate = params[key];
                continue;
            }

            if (time) {
                const tempObj = obj as TAny;
                if (typeof tempObj[key] === "undefined")
                    continue;
                const match = params[key] == tempObj[key];
                if (match) {
                    object.removeTweenItem(key);
                }
                else {
                    let item = object.getTweenItem(key) as TweenItem;
                    if (item === undefined) {
                        item = getNewTweenItem();
                        object.addTweenItem(key, item);
                    }
                    item.set(object, key, params[key], tempObj[key], time, ease);
                }
            }
        }

        if (time)
            object.onUpdate = onUpdate;
        else
            Tween.set(obj, params);
    }

    /**
     * 动画从设置点到第二个设置点。
     * @param obj 需要动画的对象
     * @param time 动画持续时间，一般是秒
     * @param paramsFrom 第一个目标点
     * @param paramsTo 第二个目标点
     * @param ease 
     */
    public static fromTo(obj: UIBase, time: number, paramsFrom: TAny, paramsTo: TAny, ease: EaseBase) {
        const object = getObject(obj);
        let onUpdate = null;
        for (const key in paramsTo) {
            if (key === "onComplete") {
                const cb = getNewCallbackItem();
                cb.set(object, paramsTo[key], time);
                object.addTweenItem(cb.key, cb);
                continue;
            }

            if (key === "onUpdate") {
                onUpdate = paramsTo[key];
                continue;
            }

            if (time) {
                const tempObj = obj as TAny;
                if (typeof tempObj[key] === "undefined" || typeof paramsFrom[key] === "undefined")
                    continue;
                const match = paramsFrom[key] == paramsTo[key];
                if (match) {
                    object.removeTweenItem(key);
                    tempObj[key] = paramsTo[key];
                }
                else {
                    let item = object.getTweenItem(key) as TweenItem;
                    if (item === undefined) {
                        item = getNewTweenItem();
                        object.addTweenItem(key, item);
                    }
                    item.set(object, key, paramsFrom[key], paramsTo[key], time, ease);
                }
            }
        }

        if (time)
            object.onUpdate = onUpdate;
        else
            Tween.set(obj, paramsTo);
    }

    public static update(delta: number) {
        for (const id in _activeTweenObjects) {
            const object = _activeTweenObjects[id];
            for (const key in object.tweens) {
                object.tweens[key].update(delta);
            }
            if (object.onUpdate) {
                object.onUpdate.call(object.object, delta);
            }
        }
    }
}

export default Tween;