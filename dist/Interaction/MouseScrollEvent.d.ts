/// <reference types="pixi.js" />
import UIBase from "../UIBase";
/**
 * 鼠标滑轮事件
 *
 *  可侦听事件(未实现):
 * ```
 *  {InteractionEvent}.MouseScroll.xxxxxx.
 * ```
 *  可赋值方法:
 * ```
 * oonMouseScroll: ((e: WheelEvent,delta: PIXI.Point) => void) | undefined
 * ```
 *
 * @example 可查看 `Slider` 源码
 *
 * @since 1.0.0
 */
export default class MouseScrollEvent {
    /**
     *
     * @param obj 需要绑定的对象
     * @param preventDefault 是否组织系统默认的事件触发
     */
    constructor(obj: UIBase, preventDefault: boolean);
    id: string;
    private obj;
    private preventDefault;
    private delta;
    private mouseScrllBind;
    private startEvent;
    private _onMouseScroll;
    private _onHover;
    private _onMouseOut;
    stopEvent(): void;
    remove(): void;
    onMouseScroll: ((e: WheelEvent, delta: PIXI.Point) => void) | undefined;
}
