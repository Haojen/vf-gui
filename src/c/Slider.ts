import {UIBase} from "../core/UIBase";
import {Image as VfuiImage} from "./Image";
import * as Utils from "../core/Utils";
import {DragEvent,InteractionEvent, ComponentEvent} from "../interaction/Index";
import { Tween } from "./Tween";
import { Easing } from "./Easing";
import { addDrawList } from "../layout/CSSSSystem";


/**
 * 滑动条/进度条
 * 
 * @example let slider = new gui.Slider();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.5.0/TestSlider
 */
export class Slider extends UIBase{

    public constructor(){
        super();

        this._thumbDrag.onDragPress = this.onPress;
        this._thumbDrag.onDragStart = this.onDragStart;
        this._thumbDrag.onDragMove = this.onDragMove;
        this._thumbDrag.onDragEnd = this.onDragEnd;

        this._trackDrag.onDragPress = this.onPress;
        this._trackDrag.onDragStart = this.onDragStart;
        this._trackDrag.onDragMove = this.onDragMove;
        this._trackDrag.onDragEnd = this.onDragEnd;

        this.thumbImg.container.name = "thumbImg";
        this.thumbImg.anchorX = 0.5;
        this.thumbImg.anchorY = 0.5;
        this.thumbImg.on(ComponentEvent.COMPLETE,this.onImgload, this);

        this.trackImg.container.name = "trackImg";
        this.trackImg.fillMode = "scale";
        this.trackImg.scale9Grid = [2,2,2,2];
        this.trackImg.style.width = "100%";
        this.trackImg.style.height = "100%";
        this.trackImg.on(ComponentEvent.COMPLETE,this.onImgload, this);

        this.tracklightImg.container.name = "tracklightImg";
        this.tracklightImg.fillMode = "scale";
        this.tracklightImg.scale9Grid = [2,2,2,2];

        this.addChild(this.trackImg);
        this.addChild(this.tracklightImg);
        this.addChild(this.thumbImg);
    }
    /** 
     * 当前值 
     */
    protected _amt = 0;
    /**
     * 小数的保留位，0不保留
     * @default 0
     */
    protected _decimals = 0;

    protected _startValue = 0;
    protected _maxPosition = 0;
    protected _localMousePosition = new PIXI.Point();
    protected _lastChange = 0;
    protected _lastChanging = 0;
    
    private _thumbDrag = new DragEvent(this);
    private _trackDrag = new DragEvent(this);

    /** 状态展示 */
    readonly trackImg = new VfuiImage();
    readonly thumbImg = new VfuiImage();
    readonly tracklightImg = new VfuiImage();

    private _value = 0;
    /**
     * 当前值
     */
    public get value() {
        return Utils.Round(Utils.Lerp(this.minValue, this.maxValue, this._amt), this._decimals);
    }
    public set value(value: number) {
        this._value = value;
        addDrawList("valueSystem",this,this.valueSystem);
    }

    protected valueSystem(){
        this._amt = (Math.max(this.minValue, Math.min(this.maxValue, this._value)) - this.minValue) / (this.maxValue - this.minValue);
        this.updatePosition();
        this.triggerValueChange();
        this.triggerValueChanging();
    }

    /**
     * 最小值
     */
    private _minValue = 0;
    public get minValue() {
        return this._minValue;
    }
    public set minValue(value) {
        this._minValue = value;
    }
    /**
     * 最大值
     */
    private _maxValue = 100;
    public get maxValue() {
        return this._maxValue;
    }
    public set maxValue(value) {
        this._maxValue = value;
    }
    /**
     * 是否垂直,滑块方向
     */
    private _vertical = false;
    public get vertical() {
        return this._vertical;
    }
    public set vertical(value) {
        this._vertical = value;
        this.updateLayout();
    }
    /** 
     * 背景
     */
    private _track?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    public get track(){
        return this._track;
    }
    public set track(value) {
        if(value !== this._track){
            this._track = value;
            this.trackImg.src = value; 
        }
    }
    /** 
     * 手柄
     */
    private _thumb?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    public get thumb() {
        return this._thumb;
    }
    public set thumb(value) {
        if(value !== this._thumb){
            this._thumb = value;
            this.thumbImg.src = value; 
        }
    }
    /** 
     * 进度
     */
    private _tracklight?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    public get tracklight() {
        return this._tracklight;
    }
    public set tracklight(value) {
        if(value !== this._tracklight){
            this._tracklight = value;
            this.tracklightImg.src = value; 
        }
    }

    public release(){
        super.release();
        this.trackImg.release();
        this.thumbImg.release();
        this.tracklightImg.release();
    }


    private onImgload(){
        this.updateLayout();
    }

    protected updateLayout(){
        const thumbImg = this.thumbImg;
        const tracklightImg = this.tracklightImg;
        if (this.vertical) {
            //thumbImg.style.top =this._amt; 
            thumbImg.x = this._width >> 1;
            tracklightImg.width =this._width;
            //tracklightImg.style.height = this._amt * this.height;
        }else {
            thumbImg.y =this._height >> 1;
            //thumbImg.style.left = this._amt; 
            tracklightImg.height =this._height;
            //tracklightImg.style.width =  this._amt * this.width;
        }
    }


    protected updatePosition(soft?: boolean){

        let val = 0;
        const thumbImg = this.thumbImg;
        const tracklightImg = this.tracklightImg;

        if (this.vertical) {
            val = this._height * this._amt;
            if (soft) {
                Tween.to(thumbImg,{ y: val },300).easing(Easing.Linear.None).start();
                Tween.to(tracklightImg, { height: val },300).easing(Easing.Linear.None).start();
            }
            else {
                thumbImg.y = val;
                tracklightImg.height = val;
            }
        }
        else {
            val = this._width* this._amt;
            if (soft) {
                Tween.to(thumbImg,{ x: val },300).easing(Easing.Linear.None).start();
                Tween.to(tracklightImg, { width: val },300).easing(Easing.Linear.None).start();
            }
            else {
                thumbImg.x = val;
                tracklightImg.width = val;
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
        if(this._thumbDrag.id == event.data.identifier){
            this._startValue = this._amt;
            this._maxPosition = this.vertical ? this._height : this._width;
        }
    }

    protected onDragMove (event: InteractionEvent,offset: PIXI.Point) {
        if(this._thumbDrag.id == event.data.identifier){
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.vertical ? offset.y : offset.x) / this._maxPosition)));
            this.triggerValueChanging();
            this.updatePosition();
        }else if(this._trackDrag && this._trackDrag.id == event.data.identifier){
            this.updatePositionToMouse(event.data.global, false);
        }

    }

    protected onDragEnd (event: InteractionEvent) {
        if(this._thumbDrag.id == event.data.identifier){
            this.triggerValueChange();
            this.updatePosition();
        }else if(this._trackDrag && this._trackDrag.id == event.data.identifier){
            this.triggerValueChange();
        }
    }
    protected updatePositionToMouse (mousePosition: PIXI.Point, soft: boolean) {
        this.trackImg.container.toLocal(mousePosition, undefined, this._localMousePosition, true);

        const newPos = this.vertical ? this._localMousePosition.y  : this._localMousePosition.x;
        const maxPos = this.vertical ? this._height: this._width ;
        this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
        this.updatePosition(soft);
        this.triggerValueChanging();
    }

    protected triggerValueChange() {
        const value = this.value;
        this.emit(ComponentEvent.CHANGE,this, value,this._lastChange);
        if (this._lastChange != value) {
            this._lastChange = value;
        }
    }

    protected triggerValueChanging() {
        const value = this.value;
        this.emit(ComponentEvent.CHANGEING,this, value,this._lastChanging);
        if (this._lastChanging != value) {
            this._lastChanging = value;
        }
    }
}
