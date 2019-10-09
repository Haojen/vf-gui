import {UIBase} from "../core/UIBase";
import {Image} from "./Image";
import * as Utils from "../core/Utils";
import * as tween from "./tween/index";
import { VerticalAlignEnum, HorizontalAlignEnum } from "../enum/AlignEnum";
import {DragEvent} from "../interaction/DragEvent";
import {InteractionEvent} from "../interaction/InteractionEvent";

/**
 * UI 滑动条
 */
export class Slider extends UIBase{

    /**
     * 滑动条值发生改变后
     */
    public static readonly ChangeEvent= "change";
    /**
     * 滑动条值发生改变时
     */
    public static readonly ChangingEvent= "changing";

    public constructor(trackBorderWidth = 0,thumbBorderWidth = 0,tracklightBorderWidth = 0){
        super();
        this._track = new Image("nineSlice");
        this._track.borderWidth = trackBorderWidth;
        this._thumb = new Image("nineSlice");
        this._thumb.borderWidth = thumbBorderWidth;
        this._thumb.pivot = 0.5;
        this._thumb.container.buttonMode = true;

        this._tracklight = new Image("nineSlice");
        this._tracklight.borderWidth = tracklightBorderWidth;
        this.addChild(this._track);
        this.addChild(this._tracklight);
        this.addChild(this._thumb);

        this._thumbDrag.onDragPress = this.onPress;
        this._thumbDrag.onDragStart = this.onDragStart;
        this._thumbDrag.onDragMove = this.onDragMove;
        this._thumbDrag.onDragEnd = this.onDragEnd;

        this._trackDrag.onDragPress = this.onPress;
        this._trackDrag.onDragStart = this.onDragStart;
        this._trackDrag.onDragMove = this.onDragMove;
        this._trackDrag.onDragEnd = this.onDragEnd;
    }
    /** 
     * 当前值 
     */
    protected _amt = 0;
    /**
     * 小数的保留位，0不保留
     * @default 0
     */
    private _decimals = 0;
    /**
     * 滑块方向
     */
    private _vertical = false;
    //set options
    protected _track: Image;
    protected _tracklight: Image;
    protected _thumb: Image;

    protected _sourceTrack = "";
    protected _sourceTracklight = "";
    protected _sourceThumb = "";

    private _thumbDrag = new DragEvent(this);
    private _trackDrag = new DragEvent(this);

    private _startValue = 0;
    private _maxPosition = 0;
    private _localMousePosition = new PIXI.Point();
    private _lastChange = 0;
    private _lastChanging = 0;
    
    private _minValue = 0;
    private _maxValue = 100;

    /** 是否可以绘制布局，设置本值并不会触发绘制，只是标记*/
    protected _isUpdateLayout = true;
    
    /** 
     * 背景
     */
    public get sourceTrack(){
        return this._sourceTrack;
    }
    public set sourceTrack(value) {
        this._sourceTrack = value;
        this._track.source = value;
    }
    
    /** 
     * 进度填充 
     */
    public get sourceTracklight() {
        return this._sourceTracklight;
    }
    public set sourceTracklight(value) {
        this._sourceTracklight = value;
        this._tracklight.source = value;
    }

    /** 
     * 拖拽手柄
     */
    public get sourceThumb() {
        return this._sourceThumb;
    }
    public set sourceThumb(value) {
        this._sourceThumb = value;
        this._thumb.visible = false;
        this._thumb.off(Image.onload,this.onThumbLoadComplete,this);
        this._thumb.once(Image.onload,this.onThumbLoadComplete,this);
        this._thumb.source = value;
    }

    //rectangle:PIXI.Rectangle,source?:SliceSprite
    protected  onThumbLoadComplete(rectangle: PIXI.Rectangle,source: Image){
        source.width = rectangle.width;
        source.height = rectangle.height;
        source.visible = true;
        this.update();
    }

    /**
     * 是否垂直
     * @default false
     */
    public get vertical() {
        return this._vertical;
    }
    public set vertical(value) {
        this._vertical = value;
        this._isUpdateLayout = true;
        this.update();
    }

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
        return Utils.Round(Utils.Lerp(this._minValue, this._maxValue, this._amt), this._decimals);
    }
    public set value(value: number) {
        this._amt = (Math.max(this._minValue, Math.min(this._maxValue, value)) - this._minValue) / (this._maxValue - this._minValue);
        this.update();
        this.triggerValueChange();
        this.triggerValueChanging();
    }

    protected updateLayout(){

        if(!this._isUpdateLayout){
            return;
        }
        this._track.widthPet = "100%";
        this._track.heightPct = "100%";

        if (this.vertical) {
            this._thumb.horizontalAlign = HorizontalAlignEnum.center;
            this._thumb.verticalAlign = undefined;
            this._tracklight.horizontalAlign = HorizontalAlignEnum.center;
            this._tracklight.verticalAlign = undefined;
            this._tracklight.widthPet = "100%";
        }else {
            this._thumb.verticalAlign = VerticalAlignEnum.middle;
            this._thumb.horizontalAlign = undefined;
            this._tracklight.verticalAlign = VerticalAlignEnum.middle;
            this._tracklight.horizontalAlign = undefined;
            this._tracklight.heightPct = "100%";
        }
        this._isUpdateLayout = false;
    }
    public update (soft?: boolean) {
        this.updateLayout();

        let handleSize: number;
        let val: number;
        if(this._thumb){
            if (this.vertical) {
                handleSize = this._thumb._height || this._thumb.container.height;
                val = ((this._height - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    
                    tween.Tween.to(this._thumb,{ top: val },300).easing(tween.Easing.Linear.None).start();
                    tween.Tween.to(this._tracklight, { height: val },300).easing(tween.Easing.Linear.None).start();
                }
                else {
                    this._thumb.top = val;
                    this._tracklight.height = val;
                }
            }
            else {
                handleSize = this._thumb._width || this._thumb.container.width;
                val = ((this._width - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    tween.Tween.to(this._thumb,{ left: val },300).easing(tween.Easing.Linear.None).start();
                    tween.Tween.to(this._tracklight, { width: val },300).easing(tween.Easing.Linear.None).start();
                }
                else {
                    this._thumb.left = val;
                    this._tracklight.width = val;
                }
            }
        }
    }

    protected onPress (event: InteractionEvent,isPressed: boolean,dragEvent?: DragEvent) {
        
        event.stopPropagation();
        if(this._trackDrag==dragEvent && this._trackDrag.id == event.data.identifier){
            if (isPressed){
                this.updatePositionToMouse(event.data.global, true);
            }
                
        }
    }

    protected onDragStart (event: InteractionEvent) {
        if(this._thumb && this._thumbDrag && this._thumbDrag.id == event.data.identifier){
            this._startValue = this._amt;
            this._maxPosition = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
        }
    }

    protected onDragMove (event: InteractionEvent,offset: PIXI.Point) {
        if(this._thumbDrag && this._thumbDrag.id == event.data.identifier){
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.vertical ? offset.y : offset.x) / this._maxPosition)));
            this.triggerValueChanging();
            this.update();
        }else if(this._trackDrag && this._trackDrag.id == event.data.identifier){
            this.updatePositionToMouse(event.data.global, false);
        }

    }

    protected onDragEnd (event: InteractionEvent) {
        if(this._thumbDrag && this._thumbDrag.id == event.data.identifier){
            this.triggerValueChange();
            this.update();
        }else if(this._trackDrag && this._trackDrag.id == event.data.identifier){
            this.triggerValueChange();
        }
    }
    protected updatePositionToMouse (mousePosition: PIXI.Point, soft: boolean) {
        if(this._track){
            this._track.container.toLocal(mousePosition, undefined, this._localMousePosition, true);
        }     
        if(this._thumb){
            const newPos = this.vertical ? this._localMousePosition.y - this._thumb._height * 0.5 : this._localMousePosition.x - this._thumb._width * 0.5;
            const maxPos = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
            this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
            this.update(soft);
            this.triggerValueChanging();
        }
    }

    protected triggerValueChange() {
        this.emit("change", this.value,this._lastChange);
        if (this._lastChange != this.value) {
            this._lastChange = this.value;
        }
    }

    protected triggerValueChanging() {
        this.emit("changing", this.value,this._lastChanging);
        if (this._lastChanging != this.value) {
            this._lastChanging = this.value;
        }
    }
}
