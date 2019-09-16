import UIBase from "../UIBase";
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
        if(value === undefined){
            return;
        }
        if(value === this._source){
            return;
        }
        this._source = value;
        if(value instanceof  PIXI.Texture){
            this.emit(SliceSprite.SourceCompleteEvent,value.frame,this);
        }else{
            if(this._texture){
                this._texture.removeAllListeners();
            }
            this._texture = PIXI.Texture.from(value);
            if(this._texture.width>1 && this._texture.height>1){
                if(this._texture){
                    this.updatesettings(true);     
                    this.emit(SliceSprite.SourceCompleteEvent,this._texture.frame,this);      
                }
            }else{
                this._texture.once("update",()=>{
                    if(this._texture){
                        this.updatesettings(true);
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

        this.updatesettings(true);
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
    }
    /** 
     * 是否水平切
    */
    public set horizontalSlice(value: boolean) {
        this.hs = value;
        this.setting.minWidth = this.bw * 2;
        this.updatesettings(true);
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
        this.updatesettings(true);
    }
    public get verticalSlice() {
        return this.vs;
    }
   
    /** 边框 */
    private bw = 0;
    private vs = true;
    private hs = true;

    protected updateLayer(){

        if(this._texture == null){
            return;
        }
        this._nineSlice = new PIXI.NineSlicePlane(this._texture, this._leftWidth, this._topHeight, this._rightWidth, this._bottomHeight);
        this._nineSlice.name = "NineSlicePlane";
        const nineSlicePlane = this._nineSlice;
        const bw = this.bw;
        //get frames
        if (this.vs && this.hs) {
            //默认
        }
        else if (this.hs) {
            nineSlicePlane.leftWidth = this._leftWidth;
            nineSlicePlane.rightWidth = this._rightWidth;
        }
        else { //vs
            nineSlicePlane.topHeight = this._topHeight;
            nineSlicePlane.bottomHeight = this._bottomHeight;
        }

        //make sprites
        //跳过编译器
        this.container.removeChildren();
        this.container.addChild(nineSlicePlane);
        
    }

    public update() {
        this.updateLayer();
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