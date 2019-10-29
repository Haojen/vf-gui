import {UIBase} from "../core/UIBase";
import { BaseProps } from "../layout/BaseProps";

/** Rect 对象的自有字段 */
class RectProps extends BaseProps{
    public constructor(){
        super();
    }
    /**
     * 圆角
     */
    radius = 0;
    /**
     * 线条颜色
     */
    lineColor = 0;
    /**
     * 线条粗细
     */
    lineWidth = 0;
    /** 
     * 颜色 
     */
    color = 0;

    /**
     * 锚点，调整位图的坐标中点 0-1
     */
    anchorX?:number;
        /**
     * 锚点，调整位图的坐标中点 0-1
     */
    anchorY?:number;
}


/**
 * UI 矩形
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
export class Rect extends UIBase{
    public constructor(){
        super();
        this._graphics = new PIXI.Graphics();
        this.container.addChild(this._graphics);
    }

    protected _props?:TAny;
    /** 子类可以重写 */
    public get props():RectProps{

        if(this._props){
            return this._props;
        }

        this._props = new RectProps().proxyData;
        this.initProps();

        return this._props;
    }

    protected initProps(){

    }

    protected _graphics: PIXI.Graphics;


    public get graphics():PIXI.Graphics{
        return this._graphics;
    }

    public get width() {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
        this._graphics.width = value;
    }

    public get height() {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
        this._graphics.height = value;
    }

    public update(){    

        if(this.props.dirty.dirty){
            let {props,_graphics} = this;
            _graphics.clear();
            _graphics.lineStyle(props.lineWidth,props.lineColor);
            _graphics.beginFill(props.color);   
            
            _graphics.drawRoundedRect(props.anchorX?-props.anchorX*this._width:0,props.anchorY?-props.anchorY*this._height:0,this._width, this._height,props.radius);
            _graphics.endFill();
            props.dirty.dirty = false;

            // if(this._style.tint!== undefined){
            //     _graphics.tint
            //     _graphics.tint = this._style.tint;
            // }

            if(this.blendMode!== undefined){
                _graphics.blendMode = this.blendMode;
            }
        }
    }
}