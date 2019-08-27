import UIBase from "../UIBase";
import * as Utils from "../Utils";
import SliceSprite from "./SliceSprite";
import Sprite from "./Sprite";
import Ease  from "../Ease/Ease";
import Tween from "./Tween";
import { VerticalAlignEnum, HorizontalAlignEnum } from "../Enum/AlignEnum";
import DragEvent from "../Interaction/DragEvent";
import InteractionEvent from "../Interaction/InteractionEvent";
/**
 * UI 滑动条
 */
export default class Slider extends UIBase{
    public constructor(){
        super();
    }
    /** 当前值 */
    protected _amt = 0;
    //set options
    private _track: SliceSprite | Sprite | undefined;
    /** 背景 */
    public get track(): SliceSprite | Sprite | undefined {
        return this._track;
    }
    public set track(value: SliceSprite | Sprite | undefined) {
        this._track = value;
        this.updateDisplayChild();
    }
    private _handle: SliceSprite | Sprite | undefined;
    /** 拖拽手柄*/
    public get handle(): SliceSprite | Sprite | undefined {
        return this._handle;
    }
    public set handle(value: SliceSprite | Sprite | undefined) {
        this._handle = value;
        if(this._handle) {
            this._handle.pivot = 0.5;
            this._handle.container.buttonMode = true;
        }
        this.updateDisplayChild();
    }   
    private _fill: SliceSprite | Sprite | undefined;
    /** 进度填充 */
    public get fill(): SliceSprite | Sprite | undefined {
        return this._fill;
    }
    public set fill(value: SliceSprite | Sprite | undefined) {
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
        if(this.track && this.fill && this.handle){
            const sps = [this.track,this.fill,this.handle];
            sps.forEach(value=>{
                value && this.addChild(value);
            });
            if (this.vertical) {
                this.heightPct = "100%";
                this.width = this.track.width;
                this.track.heightPct = "100%";
                this.handle.horizontalAlign = HorizontalAlignEnum.center;
                if (this.fill) this.fill.horizontalAlign = HorizontalAlignEnum.center;
            }
            else {
                this.widthPet = "100%";
                this.height = this.track.height;
                this.track.widthPet = "100%";
                this.handle.verticalAlign = VerticalAlignEnum.middle
                if (this.fill) this.fill.verticalAlign = VerticalAlignEnum.middle;
            }
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
                    Tween.to(this.handle, 0.3, { top: val }, Ease.Power2.easeOut);
                    if (this.fill) Tween.to(this.fill, 0.3, { height: val }, Ease.Power2.easeOut);
                }
                else {
                    Tween.set(this.handle, { top: val });
                    if (this.fill) Tween.set(this.fill, { height: val });
                }
            }
            else {
                handleSize = this.handle._width || this.handle.container.width;
                val = ((this._width - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    Tween.to(this.handle, 0.3, { left: val }, Ease.Power2.easeOut);
                    if (this.fill) Tween.to(this.fill, 0.3, { width: val }, Ease.Power2.easeOut);
                }
                else {
                    Tween.set(this.handle, { left: val });
                    if (this.fill) Tween.set(this.fill, { width: val });
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
        if(this.track){
            this.track.container.toLocal(mousePosition, undefined, this.localMousePosition, true);
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