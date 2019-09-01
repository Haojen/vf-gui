import UIBase from "../UIBase";

/**
 * UI 矩形
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
export default class Rect extends UIBase{
    public constructor(){
        super();
        this.setDefaultSize(10,10);
        this._graphics = new PIXI.Graphics();
        this.container.addChild(this._graphics);
    }
    private _graphics: PIXI.Graphics;
    private _graphicsDirty = false;

    private drawUpdate(){
        if(this._graphicsDirty){
            this._graphics.clear();
            const graphics = this._graphics;
            graphics.beginFill(this._fill);
            graphics.drawRoundedRect(this.rx, this.ry,this.width, this.height,this.radius);
            graphics.endFill();
            this._graphicsDirty = false;
        }
    }
    /** 绘制矩形方法 */
    public drawRoundedRect(x: number,y: number,width: number,height: number,radius: number,color?: number){
        this._radius = radius;
        this._rx = x;
        this._ry = y;
        this.setDefaultSize(width,height);
        if(color){
            this._fill = color;
        }
        this._graphicsDirty = true;
        this.updatesettings(true);
    }
    private _radius = 0;
    /**
     * 圆角
     */
    public get radius() {
        return this._radius;
    }
    public set radius(value) {
        this._radius = value;
        this._graphicsDirty = true;
        this.updatesettings(true);
    }

    private _fill = 0xffffff;
    /** 
     * 要填充的颜色 
     * @default 0xFFFFFF
     * */
    public get fill() {
        return this._fill;
    }
    public set fill(value) {
        this._fill = value;
        this._graphicsDirty = true;
        this.drawUpdate();
    }

    private _rx = 0;
    /**
     * 绘制的起始坐标
     */
    public get rx() {
        return this._rx;
    }
    public set rx(value) {
        this._rx = value;
        this._graphicsDirty = true;
        this.updatesettings(true);
    }
    private _ry = 0;
    /**
     * 绘制的起始坐标
     */
    public get ry() {
        return this._ry;
    }
    public set ry(value) {
        this._ry = value;
        this._graphicsDirty = true;
        this.updatesettings(true);
    } 
   /**
     * 显示对象填充色 0xFFFFFF
     */
    set tint(value: number) {
        this._graphics.tint = value;
        this.setting.tint = value;
    }
    get tint() {
        return this.setting.tint || NaN;
    }
    public update(){
        this.drawUpdate();
    }
    
}