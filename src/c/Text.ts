import UIBase from "../UIBase";

/**
 * UI文本显示对象
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
export default class Text extends UIBase{
    /**
     * 文本构造函数
     * @param text 要显示的内容，默认为""
     * @param TextStyle {} 文本样式，参考PIXI.TextStyle
     */
    public constructor(text = "", TextStyle?: PIXI.TextStyle){
        super();
        this._source = text;
        this._text = new PIXI.Text(text,TextStyle);
        this.setDefaultSize(this._text.width,this._text.height);
        this.container.addChild(this._text);

    }
    private _text: PIXI.Text;
    private _source: string;
    /** 
     * 获取或设置文本
     */
    private get source(): string{
        return this._source;
    }
    private set source(value: string) {
        if(value === this._source){
            return;
        }
        this._source = value;
        this._text.text = value;
        this.updatesettings(true);
    }
    /**
     * 获取或设置文本内容
     */
    public get label(): string{
        return this._source;
    }
    public set label(value: string){
        this.source = value;
    }

    public update(){
        if (!isNaN(this.tint))
            this._text.tint = this.tint;

        if (!isNaN(this.blendMode))
            this._text.blendMode = this.blendMode;
    }
}