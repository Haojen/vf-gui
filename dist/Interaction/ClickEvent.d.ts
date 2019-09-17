import UIBase from "../UIBase";
import InteractionEvent from "./InteractionEvent";
/**
 * 点击触摸相关的事件处理订阅类,UI组件内部可以创建此类实现点击相关操作
 *
 *  可侦听事件:
 * ```
 *  {InteractionEvent}.TouchEvent.onHover
 *  {InteractionEvent}.TouchEvent.onPress
 *  {InteractionEvent}.TouchEvent.onClick
 *  {InteractionEvent}.TouchEvent.onMove
 * ```
 *  可赋值方法:
 * ```
 *  onHover: ((e: InteractionEvent,thisOBj:UIBase,over: boolean) => void) | undefined
 *  onPress: ((e: InteractionEvent,thisOBj:UIBase, isPressed: boolean) => void) | undefined;
 *  onClick: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
 *  onMove: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
 * ```
 *
 * @example 可查看 `TestSliceSprite` 示例
 *
 * @since 1.0.0
 */
export default class ClickEvent {
    /**
     * ClickEvent 构造函数
     * @param obj 调用的显示对象
     * @param isOpenEmitEvent 是否开启事件派发，默认false，开启后，父类可以监听InteractionEvent下的TouchEvent
     * @param includeHover 是否监听鼠标移上与移出，默认true
     * @param rightMouseButton 是否开启鼠标右键点击，默认false
     * @param doubleClick 是否开启鼠标双击,默认false
     */
    constructor(obj: UIBase, isOpenEmitEvent?: boolean, includeHover?: boolean, rightMouseButton?: boolean, doubleClick?: boolean);
    private obj;
    id: number;
    /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | vfui.Interaction.TouchEvent */
    isOpenEmitEvent: boolean;
    private offset;
    private movementX;
    private movementY;
    private ishover;
    private mouse;
    private bound;
    private right;
    private hover;
    private double;
    private time;
    private eventnameMousedown;
    private eventnameMouseup;
    private eventnameMouseupoutside;
    private startEvent;
    private _onMouseDown;
    private emitTouchEvent;
    private _mouseUpAll;
    private _onMouseUp;
    private _onMouseUpOutside;
    private _onMouseOver;
    private _onMouseOut;
    private _onMouseMove;
    /** 清除拖动 */
    stopEvent(): void;
    remove(): void;
    onHover: ((e: InteractionEvent, thisOBj: UIBase, over: boolean) => void) | undefined;
    onPress: ((e: InteractionEvent, thisOBj: UIBase, isPressed: boolean) => void) | undefined;
    onClick: ((e: InteractionEvent, thisOBj: UIBase) => void) | undefined;
    onMove: ((e: InteractionEvent, thisOBj: UIBase) => void) | undefined;
}
