import UIBase from "../UIBase";
import * as Utils from "../Utils";
import SliceSprite from "./SliceSprite";
import * as tween from "./Tween/index";
import { VerticalAlignEnum, HorizontalAlignEnum } from "../Enum/AlignEnum";
import DragEvent from "../Interaction/DragEvent";
import InteractionEvent from "../Interaction/InteractionEvent";
/**
 * UI 滑动条
 */
export default class Slider extends UIBase{
    public constructor(){
        super();
        this._track = new SliceSprite();
        this._track.borderWidth = 7;
        this.handle = new SliceSprite();
        this.handle.borderWidth = 7;
        this._fill = new SliceSprite();
        this._fill.borderWidth = 7;
        this.addChild(this._track);
        this.addChild(this.handle);
        this.addChild(this._fill);
    }
    /** 当前值 */
    protected _amt = 0;
    //set options
    private _track: SliceSprite;
    /** 背景 */
    public get sourceTrack(): SliceSprite {
        return this._track;
    }
    public set sourceTrack(value: SliceSprite) {
        this._track = value;
        this.updateDisplayChild();
    }
    public handle: SliceSprite;
    /** 拖拽手柄*/
    public get sourceHandle(): SliceSprite {
        return this.handle;
    }
    public set sourceHandle(value: SliceSprite) {
        this.handle = value;
        if(this.handle) {
            this.handle.pivot = 0.5;
            this.handle.container.buttonMode = true;
        }
        this.updateDisplayChild();
    }   
    private _fill: SliceSprite;
    /** 进度填充 */
    public get sourceFill(): SliceSprite {
        return this._fill;
    }
    public set sourceFill(value: SliceSprite) {
        this._fill = value;
        this.updateDisplayChild();
    }

    private handleDrag: DragEvent|undefined;
    private trackDrag: DragEvent|undefined;
    /**
     * 小数的保留位，0不保留
     * @default 0
     */
    private decimals = 0;
    /**
     * 滑块方向
     */
    private _vertical = false;
    public get vertical() {
        return this._vertical;
    }
    public set vertical(value) {
        this._vertical = value;
    }
    /** 更改完成 */
    protected _onValueChange: Function|undefined;
    /** 更改时 */
    protected _onValueChanging: Function|undefined;
    /**
     * 是否可用
     */
    private _disabled = false;
    private startValue = 0;
    private maxPosition = 0;
    private localMousePosition = new PIXI.Point();
    private _lastChange = 0;
    private _lastChanging = 0;
    
    private _minValue = 0;
    /** 
     * 最小值 
     * @default 0
     */
    public get minValue() {
        return this._minValue;
    }
    public set minValue(value) {
        this._minValue = value;
        this.update();
    }
    private _maxValue = 100;
    /** 
     * 最大值 
     * @default 100
     */
    public get maxValue() {
        return this._maxValue;
    }
    public set maxValue(value) {
        this._maxValue = value;
        this.update();
    }
    /** 
     * 当前值 
     */
    public get value() {
        return Utils.Round(Utils.Lerp(this._minValue, this._maxValue, this._amt), this.decimals);
    }
    public set value(value: number) {
        this._amt = (Math.max(this._minValue, Math.min(this._maxValue, value)) - this._minValue) / (this._maxValue - this._minValue);
        if (this._onValueChange )
            this._onValueChange(this.value);
        if (this._onValueChanging)
            this._onValueChanging(this.value);
        this.update();
    }
    protected updateDisplayChild(){
        if (this.vertical) {
            this.heightPct = "100%";
            this.width = this._track.width;
            this._track.heightPct = "100%";
            this.handle.horizontalAlign = HorizontalAlignEnum.center;
            if (this._fill) this._fill.horizontalAlign = HorizontalAlignEnum.center;
        }
        else {
            this.widthPet = "100%";
            this.height = this._track.height;
            this._track.widthPet = "100%";
            this.handle.verticalAlign = VerticalAlignEnum.middle
            if (this._fill) this._fill.verticalAlign = VerticalAlignEnum.middle;
        }
    }
    public update (soft?: boolean) {
        let handleSize: number;
        let val: number;
        if(this.handle){
            if (this.vertical) {
                handleSize = this.handle._height || this.handle.container.height;
                val = ((this._height - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    tween.Tween.to(this.handle, 0.3, { top: val }).easing(tween.Easing.Exponential.InOut)
                    if (this._fill) tween.Tween.to(this._fill, 0.3, { height: val }).easing(tween.Easing.Exponential.InOut)
                }
                else {
                    //tween.Tween.set(this.handle, { top: val });
                    //if (this._fill) tween.Tween.set(this._fill, { height: val });
                }
            }
            else {
                handleSize = this.handle._width || this.handle.container.width;
                val = ((this._width - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    tween.Tween.to(this.handle, 0.3, { left: val }).easing(tween.Easing.Exponential.InOut)
                    if (this._fill) tween.Tween.to(this._fill, 0.3, { width: val }).easing(tween.Easing.Exponential.InOut)
                }
                else {
                    //tween.Tween.set(this.handle, { left: val });
                    //if (this._fill) tween.Tween.set(this._fill, { width: val });
                }
            }
        }
    }

    protected initialize(){
        super.initialize();
    }
    protected onPress (event: InteractionEvent,isPressed: boolean) {
        event.stopPropagation()
        if(this.trackDrag && this.trackDrag.id == event.data.identifier){
            if (isPressed)
                this.updatePositionToMouse(event.data.global, true);
        }
    }

    protected onDragStart (event: InteractionEvent) {
        if(this.handle && this.handleDrag && this.handleDrag.id == event.data.identifier){
            this.startValue = this._amt;
            this.maxPosition = this.vertical ? this._height - this.handle._height : this._width - this.handle._width;
        }
    }

    protected onDragMove (event: InteractionEvent,offset: PIXI.Point) {
        if(this.handleDrag && this.handleDrag.id == event.data.identifier){
            this._amt = !this.maxPosition ? 0 : Math.max(0, Math.min(1, this.startValue + ((this.vertical ? offset.y : offset.x) / this.maxPosition)));
            this.triggerValueChanging();
            this.update();
        }else if(this.trackDrag && this.trackDrag.id == event.data.identifier){
            this.updatePositionToMouse(event.data.global, false);
        }

    }

    protected onDragEnd (event: InteractionEvent) {
        if(this.handleDrag && this.handleDrag.id == event.data.identifier){
            this.triggerValueChange();
            this.update();
        }else if(this.trackDrag && this.trackDrag.id == event.data.identifier){
            this.triggerValueChange();
        }
    }
    protected updatePositionToMouse (mousePosition: PIXI.Point, soft: boolean) {
        if(this._track){
            this._track.container.toLocal(mousePosition, undefined, this.localMousePosition, true);
        }     
        if(this.handle){
            const newPos = this.vertical ? this.localMousePosition.y - this.handle._height * 0.5 : this.localMousePosition.x - this.handle._width * 0.5;
            const maxPos = this.vertical ? this._height - this.handle._height : this._width - this.handle._width;
            this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
            this.update(soft);
            this.triggerValueChanging();
        }
    }

    private triggerValueChange() {
        this.emit("change", this.value);
        if (this._lastChange != this.value) {
            this._lastChange = this.value;
            if (this._onValueChange)
                this._onValueChange(this.value);
        }
    }

    private triggerValueChanging() {
        this.emit("changing", this.value);
        if (this._lastChanging != this.value) {
            this._lastChanging = this.value;
            if (this._onValueChanging)
                this._onValueChanging(this.value);
        }
    }
}