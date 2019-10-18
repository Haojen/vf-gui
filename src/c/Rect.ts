import {UIBase} from "../core/UIBase";

/** 自定义对象属性 */
class CustomizeStyle{
    _dirty = false;
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
    /** 颜色 */
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
        this.customizeStyle = new Proxy(new CustomizeStyle(), this.updateCustomizeProxyHandler);
    }

    private _graphics: PIXI.Graphics;
    public customizeStyle:CustomizeStyle;

    public get graphics():PIXI.Graphics{
        return this._graphics;
    }
    protected updateCustomizeProxyHandler = {
        get(target:CustomizeStyle, key: string, receiver: any) {
            return (target as any)[key];
        },
        set(target:CustomizeStyle, key: string, value: any, receiver: any) {
            if ((target as any)[key] === value) {
                return true;
            }
            target._dirty = true;
            //let oldValue = (target as any)[key];
            (target as any)[key] = value;
            //target.eventEmitter.emit("ValueChangeEvent",key,value,oldValue);
            return true;
        }
    }

    public update(){    
        if(this.customizeStyle._dirty){
            let {customizeStyle,_graphics} = this;
            _graphics.clear();
            _graphics.lineStyle(customizeStyle.lineWidth,customizeStyle.lineColor);
            _graphics.beginFill(customizeStyle.color);   
            _graphics.drawRoundedRect(0,0,this._width, this._height,customizeStyle.radius);
            _graphics.endFill();
            customizeStyle._dirty = false;

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