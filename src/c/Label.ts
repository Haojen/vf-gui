import { UIBase } from "../core/UIBase";
import { ComponentEvent } from "../interaction/Index";
import { BaseProps } from "../layout/BaseProps";
import { CSSStyle } from "../layout/CSSStyle";



const updatepropsProxyHandler = {
    get(target: LabelProps, key: string, receiver: TAny) {
        return (target as TAny)[key];
    },
    set(target: LabelProps, key: string, value: TAny, receiver: TAny) {
        if ((target as TAny)[key] === value) {
            return true;
        }
        switch (key) {
            case "text":
                target.dirty.text = true;
                break;
            case "color":
                target.dirty.color = true;
                break;
            default:
                target.dirty.dirty = true;

        }
        (target as TAny)[key] = value;
        return true;
    }
}

/** Image 对象的自有字段 */
export class LabelProps extends BaseProps {

    public constructor() {
        super(updatepropsProxyHandler);
    }
    public dirty = { dirty: false, text: false, color: false };
    /**
     * 设置文本内容
     */
    public text = "";
    /** 
     * 文本颜色，16进制 
     * */
    public color?:string | string[] | number | number[] | CanvasGradient | CanvasPattern = 0xfffff0;


    /** 字符间距 */
    public letterSpacing?: number;
    /** 
     * 是否自动换行 
     * */
    public wordWrap = false;
    /** 
     * 自动换行的宽度 
     * */
    public wordWrapWidth?: number;
    /** 
     * 多行文本(wordWrap = true) - 对齐方式
     * */
    public textAlign: "left" | "right" | "center" = "left";
    /** 
     * 多行文本(wordWrap = true) - 行高 
     * */
    public lineHeight?: number;


    /** 字体 示例：fontFamily = "\"Comic Sans MS\", cursive, sans-serif" */
    public fontFamily?: string | string[];
    /** 字体大小 */
    public fontSize = 22;
    /** 字体样式 */
    public fontStyle: "normal" | "italic" | "oblique" = "normal";
    /**  字体变形，普通或小写  */
    public fontVariant: "normal" | "small-caps" = "normal";
    /** 字体粗细 */
    public fontWeight: "normal" | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = "normal";

    /** 内部填充 */
    public padding?: number;
    /** 描边颜色 */
    public stroke?: string | number;
    /** 描边的笔触粗细值 */
    public strokeThickness = 0;

    /** 是否设置投影 */
    public dropShadow = false;
    /** 投影的alpha值 */
    public dropShadowAlpha = false;
    /** 是否设置投影 */
    public dropShadowAngle = 0;//Math.PI / 6;
    /** 投影的模糊半径 */
    public dropShadowBlur = 0;
    /** 投影填充颜色值 */
    public dropShadowColor = 0x000000;
    /** 投影深度 */
    public dropShadowDistance = 5;
    /** 中文换行 */
    public breakWords = true;

}

/**
 * UI文本显示对象
 * 
 * 中文换行特殊处理 xxxx.style.breakWords = true;
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 * @see https://pixijs.io/pixi-text-style
 */
export class Label extends UIBase {
    /**
     * 文本构造函数
     * @param text 要显示的内容，默认为""
     * @param TextStyle {} 文本样式，参考TextStyle
     */
    public constructor(text = "") {
        super();
        this._text = new PIXI.Text(text);
        this.container.addChild(this._text);

    }
    protected _text: PIXI.Text;
    public _props:TAny = null;

    protected initProps(){

    }
    
    /** 子类可以重写 */
    public get props():LabelProps{

        if(this._props){
            return this._props;
        }

        this._props = new LabelProps().proxyData;
        this.initProps();

        return this._props;
    }

    public set props(value:LabelProps){
        this._props = value.proxyData;
        for(let key in this._props.dirty){
            (this._props.dirty as TAny)[key] = true;
        }
    }

    public update(_style: CSSStyle) {
        let {props} = this;

        if(props.dirty.dirty){
            props.dirty.dirty = false;
            for(let key in this.props){
                if(key === "_proxy" || key === "dirty"){
                    continue;
                }
                this._text.style[key] = (this.props as TAny)[key];
            }
        }

        if(props.dirty.text){
            props.dirty.text = false;
            this._text.text = props.text;
            if(this._width == 0){
                this._width = this._text.width;
            }else{
                this._text.width = this._width ;
            }
            if(this._height == 0){
                this._height = this._text.height;
            }else{
                this._text.height = this._height ;
            }
            this.emit(ComponentEvent.CHANGE,this);
        }

        if(props.dirty.color){
            props.dirty.color = false;
            if(props.color!==undefined)
                (this._text.style as PIXI.TextStyle).fill = props.color;
        }
    }

    public updateBlendMode() {
        // if (!isNaN(this.tint))
        //     this._text.tint = this.tint;
        if (this._text && this.blendMode) {
            this._text.blendMode = this.blendMode;
        }
    }
}