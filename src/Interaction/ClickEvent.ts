import { interaction } from "pixi.js";
import { UIBase } from "../UIBase";
import { TouchMouseEventEnum } from "../Enum/TouchMouseEventEnum";

/**
 * 点击触摸相关的事件处理订阅类
 * @since 1.0.0
 */
export class ClickEvent {

    /**
     * ClickEvent 构造函数
     * @param obj 调用的显示对象
     * @param includeHover 是否监听鼠标移上与移出，默认true
     * @param rightMouseButton 是否开启鼠标右键点击，默认false
     * @param doubleClick 是否开启鼠标双击,默认false
     */
    public constructor(obj: UIBase,includeHover?: boolean, rightMouseButton?: boolean, doubleClick?: boolean) {
        this.obj = obj;
        
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

    private _onMouseDown(e: interaction.InteractionEvent) {
        this.mouse.copyFrom(e.data.global);
        this.id = e.data.identifier;
        this.onPress && this.onPress.call(this.obj, e, true);
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
                this.onClick && this.onClick.call(this.obj, e);
            }
            else {
                this.time = now;
            }
        }

        e.data.originalEvent.preventDefault();
    }

    private _mouseUpAll(e: interaction.InteractionEvent){
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
    }
    private _onMouseUp(e: interaction.InteractionEvent) {
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

        if (!this.double)
            this.onClick && this.onClick.call(this.obj, e);
    }

    private _onMouseUpOutside(e: interaction.InteractionEvent) {
        if (e.data.identifier !== this.id) 
            return;
        this._mouseUpAll(e);
    }

    private _onMouseOver(e: interaction.InteractionEvent) {
        if (!this.ishover) {
            this.ishover = true;
            this.obj.container.on(TouchMouseEventEnum.mousemove, this._onMouseMove,this);
            this.obj.container.on(TouchMouseEventEnum.touchmove, this._onMouseMove,this);
            this.onHover && this.onHover.call(this.obj, e, true);
        }
    }

    private _onMouseOut(e: interaction.InteractionEvent) {
        if (this.ishover) {
            this.ishover = false;
            this.obj.container.removeListener(TouchMouseEventEnum.mousemove,this. _onMouseMove,this);
            this.obj.container.removeListener(TouchMouseEventEnum.touchmove, this._onMouseMove,this);
            this.onHover && this.onHover.call(this.obj, e, false);
        }
    }

    private _onMouseMove(e: interaction.InteractionEvent) {
        this.onMove && this.onMove.call(this.obj, e);
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
    }
    public onHover: ((e: interaction.InteractionEvent,over: boolean) => void) | undefined
    public onPress: ((e: interaction.InteractionEvent, isPressed: boolean) => void) | undefined;
    public onClick: ((e: interaction.InteractionEvent) => void) | undefined 
    public onMove: ((e: interaction.InteractionEvent) => void) | undefined
}