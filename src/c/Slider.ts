import {UIBase} from "../core/UIBase";
import {Image} from "./Image";
import * as Utils from "../core/Utils";
import {DragEvent,InteractionEvent, ComponentEvent} from "../interaction/Index";
import { BaseProps } from "../layout/BaseProps";
import { CSSStyle } from "../layout/CSSStyle";
import { Tween } from "./Tween";
import { Easing } from "./Easing";


/** 
 * 按钮自定义字段
 */
class SliderProps extends BaseProps{

    public constructor(){
        super();
    }
    /**
     * 当前值
     */
    value = 0;
    /**
     * 最小值
     */
    minValue = 0;
    /**
     * 最大值
     */
    maxValue = 100;
    /**
     * 是否垂直,滑块方向
     */
    vertical = false;
    /** 
     * 背景
     */
    track?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 手柄
     */
    thumb?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 进度
     */
    tracklight?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
 
    /** 状态展示 */
    readonly trackImg = new Image();
    readonly thumbImg = new Image();
    readonly tracklightImg = new Image();
    
}


/**
 * UI 滑动条
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
    }

    protected _props?:TAny;
    protected _oldState = "";

    /** 
     * 当前值 
     */
    protected _amt = 0;
    /**
     * 小数的保留位，0不保留
     * @default 0
     */
    protected _decimals = 0;

    protected _track:TAny;
    protected _thumb:TAny;
    protected _tracklight:TAny;

    protected _startValue = 0;
    protected _maxPosition = 0;
    protected _localMousePosition = new PIXI.Point();
    protected _lastChange = 0;
    protected _lastChanging = 0;
    
    private _thumbDrag = new DragEvent(this);
    private _trackDrag = new DragEvent(this);

    protected initProps(){

        let props = this.props; 

        props.thumbImg.props.anchorX = 0.5;
        props.thumbImg.props.anchorY = 0.5;
        props.thumbImg.on(Image.onload,this.onImgload, this);

        props.trackImg.props.fillMode = "scale";
        props.trackImg.props.scale9Grid = [2,2,2,2];
        props.trackImg.style.width = "100%";
        props.trackImg.style.height = "100%";
        props.trackImg.on(Image.onload,this.onImgload, this);

        props.tracklightImg.props.fillMode = "scale";
        props.tracklightImg.props.scale9Grid = [2,2,2,2];

        this.addChild(props.trackImg);
        this.addChild(props.tracklightImg);
        this.addChild(props.thumbImg);

        return props;
    }
    /** 子类可以重写 */
    public get props():SliderProps{

        if(this._props){
            return this._props;
        }

        this._props = new SliderProps().proxyData;
        this.initProps();

        return this._props;
    }

  
    /** 
     * 当前值 
     */
    public get value() {
        return Utils.Round(Utils.Lerp(this.props.minValue, this.props.maxValue, this._amt), this._decimals);
    }
    public set value(value: number) {
        this._amt = (Math.max(this.props.minValue, Math.min(this.props.maxValue, value)) - this.props.minValue) / (this.props.maxValue - this.props.minValue);
        this.updatePosition();
        this.triggerValueChange();
        this.triggerValueChanging();
    }

    private onImgload(){
        this.updateLayout();
    }

    protected updateLayout(){
        let thumbImg = this.props.thumbImg;
        let tracklightImg = this.props.tracklightImg;
        if (this.props.vertical) {
            //thumbImg.style.top =this._amt; 
            thumbImg.style.left = this._width >> 1;
            tracklightImg.style.width =this._width;
            //tracklightImg.style.height = this._amt * this.height;
        }else {
            thumbImg.style.top =this._height >> 1;
            //thumbImg.style.left = this._amt; 
            tracklightImg.style.height =this._height;
            //tracklightImg.style.width =  this._amt * this.width;
        }
    }


    public update(_style:CSSStyle) {
        let props = this.props;
        if(props.dirty.dirty){
            props.dirty.dirty = false;
            if(props.track !== this._track){
                this._track = props.track; 
                props.trackImg.props.src = props.track; 
            }
            if(props.thumb !== this._thumb){
                this._thumb = props.thumb; 
                props.thumbImg.props.src = props.thumb; 
            }
            if(props.tracklight !== this._tracklight){
                this._tracklight = props.tracklight; 
                props.tracklightImg.props.src = props.tracklight; 
            }
            this.updateLayout();
            if(props.value != this._lastChanging){
                this.value = this.props.value;
            }
        }

    }

    protected updatePosition(soft?:boolean){

        let val = 0;
        let thumbImg = this.props.thumbImg;
        let tracklightImg = this.props.tracklightImg;

        if (this.props.vertical) {
            val = this._height * this._amt;
            if (soft) {
                Tween.to(thumbImg.style,{ top: val },300).easing(Easing.Linear.None).start();
                Tween.to(tracklightImg.style, { height: val },300).easing(Easing.Linear.None).start();
            }
            else {
                thumbImg.style.top = val;
                tracklightImg.style.height = val;
            }
        }
        else {
            val = this._width* this._amt;
            if (soft) {
                Tween.to(thumbImg.style,{ left: val },300).easing(Easing.Linear.None).start();
                Tween.to(tracklightImg.style, { width: val },300).easing(Easing.Linear.None).start();
            }
            else {
                thumbImg.style.left = val;
                tracklightImg.style.width = val;
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
            this._maxPosition = this.props.vertical ? this._height : this._width;
        }
    }

    protected onDragMove (event: InteractionEvent,offset: PIXI.Point) {
        if(this._thumbDrag.id == event.data.identifier){
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.props.vertical ? offset.y : offset.x) / this._maxPosition)));
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
        this.props.trackImg.container.toLocal(mousePosition, undefined, this._localMousePosition, true);

        const newPos = this.props.vertical ? this._localMousePosition.y  : this._localMousePosition.x;
        const maxPos = this.props.vertical ? this._height: this._width ;
        this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
        this.updatePosition(soft);
        this.triggerValueChanging();
    }

    protected triggerValueChange() {
        this.emit(ComponentEvent.CHANGE,this, this.value,this._lastChange);
        if (this._lastChange != this.value) {
            this._lastChange = this.value;
        }
    }

    protected triggerValueChanging() {
        this.emit(ComponentEvent.CHANGEING,this, this.value,this._lastChanging);
        if (this._lastChanging != this.value) {
            this._lastChanging = this.value;
        }
    }
}
