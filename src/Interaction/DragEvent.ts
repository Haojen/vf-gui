import {DisplayObject} from "../core/DisplayObject";
import { TouchMouseEventEnum } from "./TouchMouseEventEnum";
import {InteractionEvent} from "../event/InteractionEvent";

/**
 * 多拽相关的事件处理类
 * 
 *  可侦听事件:
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
export class DragEvent {

    public constructor(obj: DisplayObject) {
        this.obj = obj;
        obj.interactive = true;
        this.startEvent();
    }

    private obj: DisplayObject;
    public  id = 0;
    private offset = new PIXI.Point();
    private movementX = 0;
    private movementY = 0;
    private bound = false;
    private start = new PIXI.Point();
    private mouse = new PIXI.Point();
    private cancel = false;
    private dragging = false;
    private isStop = true;
    /**
     * 限制拖动抽,XY,X抽或Y抽
     */
    public dragRestrictAxis?: "x" | "y" ;

    public startEvent() {

        if(this.isStop){
            this.obj.container.on(TouchMouseEventEnum.mousedown, this._onDragStart, this);
            this.obj.container.on(TouchMouseEventEnum.touchstart, this._onDragStart, this);
            this.isStop = false;
        }
    }


    private _onDragStart(e: InteractionEvent) {

        this.id = e.data.identifier;
        this.onDragPress && this.onDragPress.call(this.obj, e, true,this);

        if (!this.bound && this.obj.parent && this.obj.stage) {
            const stage =  this.obj.stage.container;
            this.start.copyFrom(e.data.global);
            stage.on(TouchMouseEventEnum.mousemove, this._onDragMove, this);
            stage.on(TouchMouseEventEnum.touchmove, this._onDragMove, this);
            stage.on(TouchMouseEventEnum.mouseup, this._onDragEnd, this);
            stage.on(TouchMouseEventEnum.mouseupoutside, this._onDragEnd, this);
            stage.on(TouchMouseEventEnum.touchend, this._onDragEnd, this);
            stage.on(TouchMouseEventEnum.touchendoutside, this._onDragEnd, this);
            stage.on(TouchMouseEventEnum.touchcancel, this._onDragEnd, this);
            this.bound = true;
        }

        e.data.originalEvent.preventDefault();
    }

    private _onDragMove(e: InteractionEvent) {

        if (e.data.identifier !== this.id) return;
        this.mouse.copyFrom(e.data.global);
        this.offset.set(this.mouse.x - this.start.x, this.mouse.y - this.start.y);
        if (!this.dragging) {
            this.movementX = Math.abs(this.offset.x);
            this.movementY = Math.abs(this.offset.y);
            if (this.movementX === 0 && this.movementY === 0 || Math.max(this.movementX, this.movementY) < this.obj.dragThreshold) 
                return; //thresshold
            if (this.dragRestrictAxis !== undefined) {
                this.cancel = false;
                if (this.dragRestrictAxis == "x" && this.movementY > this.movementX) 
                    this.cancel = true;
                else if (this.dragRestrictAxis == "y" && this.movementY <= this.movementX) 
                    this.cancel = true;
                if (this.cancel) {
                    this._onDragEnd(e);
                    return;
                }
            }
            
            this.onDragStart && this.onDragStart.call(this.obj, e,this);
            this.dragging = true;
        }
        this.onDragMove && this.onDragMove.call(this.obj, e, this.offset,this);
    }

    private _onDragEnd(e: InteractionEvent) {
        if (e.data.identifier !== this.id) return; 
        if (this.bound && this.obj.stage) {
            const stage = this.obj.stage.container;
            stage.off(TouchMouseEventEnum.mousemove, this._onDragMove, this);
            stage.off(TouchMouseEventEnum.touchmove, this._onDragMove, this);
            stage.off(TouchMouseEventEnum.mouseup, this._onDragEnd, this);
            stage.off(TouchMouseEventEnum.mouseupoutside, this._onDragEnd, this);
            stage.off(TouchMouseEventEnum.touchend, this._onDragEnd, this);
            stage.off(TouchMouseEventEnum.touchendoutside, this._onDragEnd, this);
            stage.off(TouchMouseEventEnum.touchcancel, this._onDragEnd, this);
            this.dragging = false;
            this.bound = false;
            this.onDragEnd && this.onDragEnd.call(this.obj, e,this);
            this.onDragPress && this.onDragPress.call(this.obj, e, false,this);

        }
    }

    /** 清除拖动 */
    public stopEvent() {
        if (this.bound && this.obj.stage) {      
            const stage =  this.obj.stage.container;
            stage.off(TouchMouseEventEnum.mousemove, this._onDragMove, this);
            stage.off(TouchMouseEventEnum.touchmove, this._onDragMove, this);
            stage.off(TouchMouseEventEnum.mouseup, this._onDragEnd, this);
            stage.off(TouchMouseEventEnum.mouseupoutside, this._onDragEnd, this);
            stage.off(TouchMouseEventEnum.touchend, this._onDragEnd, this);
            stage.off(TouchMouseEventEnum.touchendoutside, this._onDragEnd, this);
            this.bound = false;
        }
        this.obj.container.off(TouchMouseEventEnum.mousedown, this._onDragStart, this);
        this.obj.container.off(TouchMouseEventEnum.touchstart, this._onDragStart, this);

        this.isStop = true;
    }

    public remove(){
        this.stopEvent();
        this.onDragPress = undefined;
        this.onDragEnd = undefined;
        this.onDragMove = undefined;
        this.onDragStart = undefined;
        this.obj.interactive = false;
    }

    public onDragPress: ((e: InteractionEvent, isPressed: boolean,dragObj?: DragEvent) => void) | undefined;
    public onDragEnd: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
    public onDragMove: ((e: InteractionEvent, offset: PIXI.Point,dragObj?: DragEvent) => void) | undefined 
    public onDragStart: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
}