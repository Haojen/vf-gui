/// <reference types="pixi.js" />
import UIBase from "../UIBase";
import InteractionEvent from "./InteractionEvent";
/**
 * 多拽相关的事件处理类
 *
 *  可侦听事件(未实现):
 * ```
 *  {InteractionEvent}.DraggableEvent.onDragPress
 *  {InteractionEvent}.DraggableEvent.onDragStart
 *  {InteractionEvent}.DraggableEvent.onDragMove
 *  {InteractionEvent}.DraggableEvent.onDragEnd
 * ```
 *  可赋值方法:
 * ```
 * onPress: ((e: InteractionEvent, isPressed: boolean,dragObj?: DragEvent) => void) | undefined;
 * onDragEnd: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
 * onDragMove: ((e: InteractionEvent, offset: PIXI.Point,dragObj?: DragEvent) => void) | undefined
 * onDragStart: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
 * ```
 *
 * @example 可查看 `Slider` 源码
 *
 * @since 1.0.0
 */
export default class DragEvent {
    constructor(obj: UIBase);
    private obj;
    id: number;
    private offset;
    private movementX;
    private movementY;
    private bound;
    private start;
    private mouse;
    private cancel;
    private dragging;
    private startEvent;
    private _onDragStart;
    private _onDragMove;
    private _onDragEnd;
    /** 清除拖动 */
    stopEvent(): void;
    remove(): void;
    onDragPress: ((e: InteractionEvent, isPressed: boolean, dragObj?: DragEvent) => void) | undefined;
    onDragEnd: ((e: InteractionEvent, dragObj?: DragEvent) => void) | undefined;
    onDragMove: ((e: InteractionEvent, offset: PIXI.Point, dragObj?: DragEvent) => void) | undefined;
    onDragStart: ((e: InteractionEvent, dragObj?: DragEvent) => void) | undefined;
}
