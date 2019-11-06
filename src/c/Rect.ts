import {UIBase} from "../core/UIBase";
import { addDrawList } from "../layout/CSSSSystem";

/**
 * 绘制矩形或圆角矩形
 * 
 * @example let rect = new gui.Rect();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.5.0/TestRect
 */
export class Rect extends UIBase{
    public constructor(){
        super();
        this.graphics = new PIXI.Graphics();
        this.container.addChild(this.graphics);
    }

    public readonly graphics: PIXI.Graphics;

    /**
     * 圆角
     */
    private _radius = 0;
    public get radius() {
        return this._radius;
    }
    public set radius(value) {
        this._radius = value;
        addDrawList("draw",this,this.drawRoundedRectSystem);
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
        addDrawList("draw",this,this.drawRoundedRectSystem);
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
        addDrawList("draw",this,this.drawRoundedRectSystem);
    }
    /** 
     * 颜色 
     */
    private _color = 0;
    public get color() {
        return this._color;
    }
    public set color(value) {
        this._color = value;
        addDrawList("draw",this,this.drawRoundedRectSystem);
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
        addDrawList("draw",this,this.drawRoundedRectSystem);
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
        addDrawList("draw",this,this.drawRoundedRectSystem);
    }
    

    public update(){    
        this.graphics.width = this.width;
        this.graphics.width = this.height;
    }

    public release(){
        super.release();
        this.graphics.parent.removeChild(this.graphics).destroy();
    }

    protected drawRoundedRectSystem(rect: Rect,key: string){
        rect.graphics.clear();
        rect.graphics.lineStyle(rect.lineWidth,rect.lineColor);
        rect.graphics.beginFill(rect.color);   
        
        rect.graphics.drawRoundedRect(rect.anchorX?-rect.anchorX*this._width:0,rect.anchorY?-rect.anchorY*this._height:0,this._width, this._height,rect.radius);
        rect.graphics.endFill();
    }
}