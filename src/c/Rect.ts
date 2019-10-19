import {UIBase} from "../core/UIBase";
import { BaseFields } from "../layout/BaseFields";

/** Rect 对象的自有字段 */
class Fields extends BaseFields{
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
        this.fields = new Fields().proxyData; 
    }
    public readonly fields: Fields;

    protected _graphics: PIXI.Graphics;




    public get graphics():PIXI.Graphics{
        return this._graphics;
    }

    public getMaskSprite(){
        return this._graphics;
    }


    public update(){    
        if(this.fields.dirty.dirty){
            let {fields,_graphics} = this;
            _graphics.clear();
            _graphics.lineStyle(fields.lineWidth,fields.lineColor);
            _graphics.beginFill(fields.color);   
            _graphics.drawRoundedRect(0,0,this._width, this._height,fields.radius);
            _graphics.endFill();
            fields.dirty.dirty = false;

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