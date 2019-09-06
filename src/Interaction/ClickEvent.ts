import UIBase from "../UIBase";
import { TouchMouseEventEnum } from "../Enum/TouchMouseEventEnum";
import InteractionEvent, { TouchMouseEvent } from "./InteractionEvent";

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
 *  onHover: ((e: InteractionEvent,over: boolean,clickEvent?: ClickEvent) => void) | undefined
 *  onPress: ((e: InteractionEvent, isPressed: boolean,clickEvent?: ClickEvent) => void) | undefined;
 *  onClick: ((e: InteractionEvent,clickEvent?: ClickEvent) => void) | undefined 
 *  onMove: ((e: InteractionEvent,clickEvent?: ClickEvent) => void) | undefined
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
    public constructor(obj: UIBase,isOpenEmitEvent?: boolean,includeHover?: boolean, rightMouseButton?: boolean, doubleClick?: boolean) {
        this.obj = obj;
        
        if(isOpenEmitEvent!==undefined){
            this.isOpenEmitEvent = isOpenEmitEvent;
        }
        if(includeHover!==undefined){
            this.right = includeHover;
        }
        if(rightMouseButton!==undefined){
            this.hover = rightMouseButton;
        }
        if(doubleClick!==undefined){
            this.double = doubleClick;
        }

        if(this.right){
            this.eventnameMousedown = TouchMouseEventEnum.rightdown;
            this.eventnameMouseup = TouchMouseEventEnum.rightup;
            this.eventnameMouseupoutside = TouchMouseEventEnum.rightupoutside;
        }

        obj.container.interactive = true;

        this.startEvent();
    }

    private obj: UIBase;
    public  id = 0;
    /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | vfui.Interaction.TouchEvent */
    public isOpenEmitEvent = false;
    private offset = new PIXI.Point();
    private movementX = 0;
    private movementY = 0;
    private ishover = false;
    private mouse = new PIXI.Point();
    private bound = false;
    private right = false;
    private hover = true;
    private double = false;
    private time = 0;
    private eventnameMousedown =  TouchMouseEventEnum.mousedown;
    private eventnameMouseup =  TouchMouseEventEnum.mouseup;
    private eventnameMouseupoutside =  TouchMouseEventEnum.mouseupoutside;

    private startEvent() {
        this.obj.container.on(this.eventnameMousedown, this._onMouseDown,this);
        if (!this.right) 
            this.obj.container.on(TouchMouseEventEnum.touchstart, this._onMouseDown,this);

        if (this.hover) {
            this.obj.container.on(TouchMouseEventEnum.mouseover, this._onMouseOver,this);
            this.obj.container.on(TouchMouseEventEnum.mouseout, this._onMouseOut,this);

        }
    }

    private _onMouseDown(e: InteractionEvent) {
        this.mouse.copyFrom(e.data.global);
        this.id = e.data.identifier;
        this.onPress && this.onPress.call(this.obj, e, true),this.obj;
        this.emitTouchEvent(TouchMouseEvent.onPress,e,true);
        if (!this.bound) {
            this.obj.container.on(this.eventnameMouseup, this._onMouseUp,this);
            this.obj.container.on(this.eventnameMouseupoutside, this._onMouseUpOutside,this);
            if (!this.right) {
                this.obj.container.on(TouchMouseEventEnum.touchend, this._onMouseUp,this);
                this.obj.container.on(TouchMouseEventEnum.touchendoutside, this._onMouseUpOutside,this);
            }
            this.bound = true;
        }

        if (this.double) {
            const now = performance.now();
            if (now - this.time < 210) {
                this.onClick && this.onClick.call(this.obj, e,this);
                this.emitTouchEvent(TouchMouseEvent.onClick,e);
            }
            else {
                this.time = now;
            }
        }

        e.data.originalEvent.preventDefault();
    }

    private emitTouchEvent(event: string | symbol,e: InteractionEvent, ... args: unknown[]){
        if(this.isOpenEmitEvent){
            e.type = event.toString();
            this.obj.emit(e.type,e,this.obj,... args);
        }
        
    }

    private _mouseUpAll(e: InteractionEvent){
        if (e.data.identifier !== this.id) 
            return;
        this.offset.set(e.data.global.x - this.mouse.x, e.data.global.y - this.mouse.y);
        if (this.bound) {
            this.obj.container.removeListener(this.eventnameMouseup, this._onMouseUp,this);
            this.obj.container.removeListener(this.eventnameMouseupoutside, this._onMouseUpOutside,this);
            if (!this.right) {
                this.obj.container.removeListener(TouchMouseEventEnum.touchend, this._onMouseUp,this);
                this.obj.container.removeListener(TouchMouseEventEnum.touchendoutside, this._onMouseUpOutside,this);
            }
            this.bound = false;
        }
        this.onPress && this.onPress.call(this.obj, e, false);
        this.emitTouchEvent(TouchMouseEvent.onPress,e,false);
    }
    private _onMouseUp(e: InteractionEvent) {
        if (e.data.identifier !== this.id) 
            return;
        this._mouseUpAll(e);

        //prevent clicks with scrolling/dragging objects
        if (this.obj.dragThreshold) {
            this.movementX = Math.abs(this.offset.x);
            this.movementY = Math.abs(this.offset.y);
            if (Math.max(this.movementX, this.movementY) > this.obj.dragThreshold) 
                return;
        }

        if (!this.double){    
            this.onClick && this.onClick.call(this.obj, e,this);
            this.emitTouchEvent(TouchMouseEvent.onClick,e,false);
        }
    }

    private _onMouseUpOutside(e: InteractionEvent) {
        if (e.data.identifier !== this.id) 
            return;
        this._mouseUpAll(e);
    }

    private _onMouseOver(e: InteractionEvent) {
        if (!this.ishover) {
            this.ishover = true;
            this.obj.container.on(TouchMouseEventEnum.mousemove, this._onMouseMove,this);
            this.obj.container.on(TouchMouseEventEnum.touchmove, this._onMouseMove,this);
            this.onHover && this.onHover.call(this.obj, e, true,this);
            this.emitTouchEvent(TouchMouseEvent.onHover,e,true);
        }
    }

    private _onMouseOut(e: InteractionEvent) {
        if (this.ishover) {
            this.ishover = false;
            this.obj.container.removeListener(TouchMouseEventEnum.mousemove,this. _onMouseMove,this);
            this.obj.container.removeListener(TouchMouseEventEnum.touchmove, this._onMouseMove,this);
            this.onHover && this.onHover.call(this.obj, e, false,this);
            this.emitTouchEvent(TouchMouseEvent.onHover,e,true);
        }
    }

    private _onMouseMove(e: InteractionEvent) {
        this.onMove && this.onMove.call(this.obj, e,this);
        this.emitTouchEvent(TouchMouseEvent.onMove,e);
    }

    /** 清除拖动 */
    public stopEvent() {
        if (this.bound) {
            this.obj.container.removeListener(this.eventnameMouseup, this._onMouseUp,this);
            this.obj.container.removeListener(this.eventnameMouseupoutside, this._onMouseUpOutside,this);

            if (!this.right) {
                this.obj.container.removeListener(TouchMouseEventEnum.touchend, this._onMouseUp,this);
                this.obj.container.removeListener(TouchMouseEventEnum.touchendoutside, this._onMouseUpOutside,this);
            }
            this.bound = false;
        }
        this.obj.container.removeListener(this.eventnameMousedown, this._onMouseDown,this);
        if (!this.right) 
            this.obj.container.removeListener(TouchMouseEventEnum.touchstart, this._onMouseDown,this);

        if (this.hover) {
            this.obj.container.removeListener(TouchMouseEventEnum.mouseover, this._onMouseOver,this);
            this.obj.container.removeListener(TouchMouseEventEnum.mouseout, this._onMouseOut,this);
            this.obj.container.removeListener(TouchMouseEventEnum.mousemove, this._onMouseMove,this);
            this.obj.container.removeListener(TouchMouseEventEnum.touchmove, this._onMouseMove,this);
        }
    }
    public remove(){
        this.stopEvent();
        this.onPress = undefined;
        this.onHover = undefined;
        this.onClick = undefined;
        this.onMove = undefined;
        this.obj.container.interactive = false;
    }
    public onHover: ((e: InteractionEvent,over: boolean,clickEvent?: ClickEvent) => void) | undefined
    public onPress: ((e: InteractionEvent, isPressed: boolean,clickEvent?: ClickEvent) => void) | undefined;
    public onClick: ((e: InteractionEvent,clickEvent?: ClickEvent) => void) | undefined 
    public onMove: ((e: InteractionEvent,clickEvent?: ClickEvent) => void) | undefined
}