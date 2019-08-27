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
        this.drawUpdate();
        this.container.addChild(this._graphics);
    }
    private _graphics: PIXI.Graphics;

    private drawUpdate(){
        this._graphics.clear();
        const graphics = this._graphics;
        graphics.beginFill(this.fill);
        graphics.drawRoundedRect(this.rx, this.ry, this.height, this.width,this.radius);
        graphics.endFill();
        this.updatesettings(true);
        
    }
    /** 绘制矩形方法 */
    public drawRoundedRect(x: number,y: number,width: number,height: number,radius: number,color?: number){
        this._radius = radius;
        this._rx = x;
        this._ry = y;
        this.setting.width = width;
        this.setting.height = height;
        if(color){
            this._fill = color;
        }
        this.drawUpdate();
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
        this.drawUpdate();
    }

    private _fill = 0xFFFFFF;
    /** 
     * 要填充的颜色 
     * @default 0xFFFFFF
     * */
    public get fill() {
        return this._fill;
    }
    public set fill(value) {
        this._fill = value;
        this.drawUpdate();
    }

    public set height(value: number){
        this.setting.height = value;
        this.drawUpdate();
    }
    public get height() {
        return this.setting.height;
    }
    public set width(value: number){
        this.setting.width = value;
        this.drawUpdate();
    }
    public get width() {
        return this.setting.height;
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
        this.drawUpdate();
    }
    private _ry = 0;
    /**
     * 绘制的起始坐标
     */
    public get ry() {
        return this._rx;
    }
    public set ry(value) {
        this._ry = value;
        this.drawUpdate();
    }  
    
}