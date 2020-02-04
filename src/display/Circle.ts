import {DisplayObject} from "../core/DisplayObject";
import {MaskSprite} from "../core/MaskSprite";

/**
 * 绘制圆型
 * 
 * @example let circle = new gui.Circle();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestCircle
 */
export class Circle extends DisplayObject implements MaskSprite{
    public constructor(){
        super();
        this.graphics = new PIXI.Graphics();
        this.container.addChild(this.graphics);
    }

    public readonly graphics: PIXI.Graphics;

    /** 可以支持遮罩的组件 */
    public maskSprite(){
        return this.graphics;
    }

    /**
     * 半径
     */
    private _radius = 0;
    public get radius() {
        return this._radius;
    }
    public set radius(value) {
        this._radius = value;
        this.invalidateDisplayList();
    }
    /**
     * 线条颜色
     */
    private _lineColor = 0;
    public get lineColor() {
        return this._lineColor;
    }
    public set lineColor(value) {
        this._lineColor = value;
        this.invalidateDisplayList();
    }
    /**
     * 线条粗细
     */
    private _lineWidth = 0;
    public get lineWidth() {
        return this._lineWidth;
    }
    public set lineWidth(value) {
        this._lineWidth = value;
        this.invalidateDisplayList();
    }
    /** 
     * 颜色 
     */
    private _color?: number;
    public get color() {
        return this._color;
    }
    public set color(value) {
        this._color = value;
        this.invalidateDisplayList();
    }
    /**
     * 锚点，调整位图的坐标中点 0-1
     */
    private _anchorX?: number;
    public get anchorX() {
        return this._anchorX;
    }
    public set anchorX(value) {
        this._anchorX = value;
        this.invalidateDisplayList();
    }
    /**
     * 锚点，调整位图的坐标中点 0-1
     */
    private _anchorY?: number;
    public get anchorY() {
        return this._anchorY;
    }
    public set anchorY(value) {
        this._anchorY = value;
        this.invalidateDisplayList();
    }

    public drawCircle(){
        const graphics = this.graphics;
        graphics.clear();
        graphics.lineStyle(this._lineWidth,this._lineColor);
        
        if(this._color !== undefined)
            graphics.beginFill(this._color);   
        
        
        graphics.drawCircle(this._anchorX || 0,this._anchorY || 0,this._radius);
        graphics.endFill();
    }
    
    public release(){
        super.release();
        if(this.graphics.parent){
            this.graphics.parent.removeChild(this.graphics).destroy();
        }
        
    }

    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number) {
        this.drawCircle();
        super.updateDisplayList(unscaledWidth,unscaledHeight);
    }


}