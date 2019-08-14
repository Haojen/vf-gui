import { UIBase } from "../UIBase";
import { TouchEventEnum } from "./TouchEventEnum";
import { interaction } from "pixi.js";

/**
 * 拖动相关的事件订阅类
 */
export class DragEvent {

    constructor(obj: UIBase) {
        this.obj = obj;
        obj.container.interactive = true;
        this.startEvent();
    }

    private obj: UIBase;
    private bound = false;
    private start = new PIXI.Point();
    private offset = new PIXI.Point();
    private mouse = new PIXI.Point();
    private movementX = 0;
    private movementY = 0;
    private cancel = false;
    private dragging = false;
    private self = this;
    private id = 0;

    private startEvent() {

        this.obj.container.on(TouchEventEnum.mousedown, this._onDragStart, this);
        this.obj.container.on(TouchEventEnum.touchstart, this._onDragStart, this);
    }


    private _onDragStart(e: interaction.InteractionEvent) {
        this.id = e.data.identifier;
        this.onPress.call(this.obj, e, true);
        if (!this.bound && this.obj.stage) {
            this.start.copyFrom(e.data.global);
            this.obj.stage.on(TouchEventEnum.mousemove, this._onDragMove, this);
            this.obj.stage.on(TouchEventEnum.touchmove, this._onDragMove, this);
            this.obj.stage.on(TouchEventEnum.mouseup, this._onDragEnd, this);
            this.obj.stage.on(TouchEventEnum.mouseupoutside, this._onDragEnd, this);
            this.obj.stage.on(TouchEventEnum.touchend, this._onDragEnd, this);
            this.obj.stage.on(TouchEventEnum.touchendoutside, this._onDragEnd, this);
            this.obj.stage.on(TouchEventEnum.touchcancel, this._onDragEnd, this);
            this.bound = true;
        }

        e.data.originalEvent.preventDefault();
    }

    private _onDragMove(e: interaction.InteractionEvent) {
        if (e.data.identifier !== this.id) return;
        this.mouse.copyFrom(e.data.global);
        this.offset.set(this.mouse.x - this.start.x, this.mouse.y - this.start.y);
        if (!this.dragging) {
            this.movementX = Math.abs(this.offset.x);
            this.movementY = Math.abs(this.offset.y);
            if (this.movementX === 0 && this.movementY === 0 || Math.max(this.movementX, this.movementY) < this.obj.dragThreshold) return; //thresshold
            if (this.obj.dragRestrictAxis !== undefined) {
                this.cancel = false;
                if (this.obj.dragRestrictAxis == "x" && this.movementY > this.movementX) this.cancel = true;
                else if (this.obj.dragRestrictAxis == "y" && this.movementY <= this.movementX) this.cancel = true;
                if (this.cancel) {
                    this._onDragEnd(e);
                    return;
                }
            }
            this.onDragStart.call(this.obj, e);
            this.dragging = true;
        }
        this.onDragMove.call(this.obj, e, this.offset);
    }

    private _onDragEnd(e: interaction.InteractionEvent) {
        if (e.data.identifier !== this.id) return;
        if (this.bound && this.obj.stage) {
            this.obj.stage.removeListener(TouchEventEnum.mousemove, this._onDragMove, this);
            this.obj.stage.removeListener(TouchEventEnum.touchmove, this._onDragMove, this);
            this.obj.stage.removeListener(TouchEventEnum.mouseup, this._onDragEnd, this);
            this.obj.stage.removeListener(TouchEventEnum.mouseupoutside, this._onDragEnd, this);
            this.obj.stage.removeListener(TouchEventEnum.touchend, this._onDragEnd, this);
            this.obj.stage.removeListener(TouchEventEnum.touchendoutside, this._onDragEnd, this);
            this.obj.stage.removeListener(TouchEventEnum.touchcancel, this._onDragEnd, this);
            this.dragging = false;
            this.bound = false;
            this.onDragEnd.call(this.obj, e);
            this.onPress.call(this.obj, e, false);

        }
    }

    /** 清除拖动 */
    public stopEvent() {
        if (this.bound && this.obj.stage) {
            this.obj.stage.removeListener(TouchEventEnum.mousemove, this._onDragMove, this);
            this.obj.stage.removeListener(TouchEventEnum.touchmove, this._onDragMove, this);
            this.obj.stage.removeListener(TouchEventEnum.mouseup, this._onDragEnd, this);
            this.obj.stage.removeListener(TouchEventEnum.mouseupoutside, this._onDragEnd, this);
            this.obj.stage.removeListener(TouchEventEnum.touchend, this._onDragEnd, this);
            this.obj.stage.removeListener(TouchEventEnum.touchendoutside, this._onDragEnd, this);
            this.bound = false;
        }
        this.obj.container.removeListener(TouchEventEnum.mousedown, this._onDragStart, this);
        this.obj.container.removeListener(TouchEventEnum.touchstart, this._onDragStart, this);
    }


    public onPress(e: interaction.InteractionEvent, isPressed: boolean) { }
    public onDragEnd(e: interaction.InteractionEvent) { }
    public onDragMove(e: interaction.InteractionEvent, offset: PIXI.Point) { }
    public onDragStart(e: interaction.InteractionEvent) { }
}