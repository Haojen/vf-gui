import UIBase from "../UIBase";
import {getSourcePath} from "../Utils";

/**
 * 动态宽高的图片,9切
 * Event: sourceComplete
 */
export default class SliceSprite extends UIBase {

    /** 图片加载完成事件 */
    public static readonly SourceCompleteEvent = "sourceCompleteEvent";
    /**
     * 构造函数，如果不设置horizontalSlice，verticalSlice。 按设置的BorderWidth进行9切
     * 
     * @see https://docs.cocos.com/creator/manual/zh/ui/sliced-sprite.html
     */
    public constructor() {
        super();
    }

    protected _nineSlice:PIXI.NineSlicePlane|undefined;
    protected _texture: PIXI.Texture|undefined;
    protected _source: number | string | PIXI.Texture |HTMLImageElement| HTMLCanvasElement | HTMLVideoElement|undefined;
    /** 
     * 获取或设置显示源 
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     * 
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    public get source(): number | string | PIXI.Texture | HTMLImageElement |HTMLCanvasElement | HTMLVideoElement|undefined {
        return this._source;
    }
    public set source(value: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement|undefined) {
        value = getSourcePath(value);
        if(value === undefined){
            return;
        }
        if(value === this._source){
            return;
        }
        this._source = value;
        if(value instanceof  PIXI.Texture){
            this._texture = value;
            this.createSlice();
            this.emit(SliceSprite.SourceCompleteEvent,value.frame,this);
        }else{
            if(this._texture){
                this._texture.removeAllListeners();
            }
            this._texture = PIXI.Texture.from(value);
            if(this._texture.width>1 && this._texture.height>1){
                if(this._texture){
                    this.createSlice();
                    this.emit(SliceSprite.SourceCompleteEvent,this._texture.frame,this);      
                }
            }else{
                this._texture.once("update",()=>{
                    if(this._texture){
                        this.createSlice();
                        this.emit(SliceSprite.SourceCompleteEvent,this._texture.frame,this);
                    }
                },this);
            }
        }
    }

    /** 
     * 边角宽度，要9切的范围
    */
    public set borderWidth(value: number) {
        this.bw = value;
        this._topHeight = value;
        this._leftWidth = value;
        this._rightWidth = value;
        this._bottomHeight = value;
        this.drawSlicePlane();

    }
    public get borderWidth() {
        return this.bw;
    }

    private _leftWidth = 0;
    /**
     * 获取设置距离左边宽度
     */
    public get leftWidth() {
        return this._leftWidth;
    }
    public set leftWidth(value) {
        this._leftWidth = value;
        this.drawSlicePlane();
    }
    private _topHeight = 0;
    /**
     * 获取设置距离顶部宽度
     */
    public get topHeight() {
        return this._topHeight;
    }
    public set topHeight(value) {
        this._topHeight = value;
        this.drawSlicePlane();
    }
    private _rightWidth = 0;
    /**
     * 获取设置距离右边宽度
     */
    public get rightWidth() {
        return this._rightWidth;
    }
    public set rightWidth(value) {
        this._rightWidth = value;
        this.drawSlicePlane();
    }
    private _bottomHeight = 0;
    /**
     * 获取设置距离底部宽度
     */
    public get bottomHeight() {
        return this._bottomHeight;
    }
    public set bottomHeight(value) {
        this._bottomHeight = value;
        this.drawSlicePlane();
    }
    /** 
     * 是否水平切
    */
    public set horizontalSlice(value: boolean) {
        this.hs = value;
        this.setting.minWidth = this.bw * 2;
        this.drawSlicePlane();
    }
    public get horizontalSlice() {
        return this.hs;
    }
    /** 
      * 是否垂直切
     */
    public set verticalSlice(value: boolean) {
        this.vs = value;
        this.setting.minHeight = this.bw * 2;
        this.drawSlicePlane();
    }
    public get verticalSlice() {
        return this.vs;
    }
   
    /** 边框 */
    private bw = 0;
    private vs = true;
    private hs = true;

    protected createSlice(){
        if(this._texture == null){
            return;
        }
        let lastSlicePlane = this._nineSlice;
        this._nineSlice = new PIXI.NineSlicePlane(this._texture);
        this.drawSlicePlane();
        //跳过编译器
        this.container.addChild(this._nineSlice);
        this.dalayDraw = true;
        if(lastSlicePlane){
            this.container.removeChild(lastSlicePlane);
        }
    }
    protected drawSlicePlane(){
        if(this._nineSlice === undefined){
            return;
        }
        const nineSlicePlane = this._nineSlice;
        nineSlicePlane.width = this._width;
        nineSlicePlane.height = this._height;
        if (this.vs && this.hs) {
            //默认
            nineSlicePlane.topHeight = this._topHeight;
            nineSlicePlane.bottomHeight = this._bottomHeight;
            nineSlicePlane.leftWidth = this._leftWidth;
            nineSlicePlane.rightWidth = this._rightWidth;
        }
        else if (this.hs) {
            nineSlicePlane.leftWidth = this._leftWidth;
            nineSlicePlane.rightWidth = this._rightWidth;
        }
        else { //vs
            nineSlicePlane.topHeight = this._topHeight;
            nineSlicePlane.bottomHeight = this._bottomHeight;
        }
    }


    public update() {

        const nineSlicePlane = this._nineSlice;
        if(nineSlicePlane === undefined){
            return;
        }
        if(nineSlicePlane){
            nineSlicePlane.width = this._width;
            nineSlicePlane.height = this._height;

            if (!isNaN(this.tint)) {
                nineSlicePlane.tint =  this.tint;
            }

            if (!isNaN(this.blendMode)) {
                nineSlicePlane.blendMode =  this.blendMode;
            }
        }
    }

}