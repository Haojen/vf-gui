import { UIBase } from "../core/UIBase";
import { ComponentEvent } from "../interaction/Index";
import { addDrawList } from "../layout/CSSSSystem";


/**
 * 文本
 * 
 * 中文换行特殊处理 xxxx.style.breakWords = true;
 * 
 * 文本没有宽高，自适应
 * 
 * @example let label = new gui.Label();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/pixi-vfui-docs/play/#example/0.5.0/TestLabel
 */
export class Label extends UIBase {

    public constructor(text = "") {
        super();
        this.text = text;
        this.sprite = new PIXI.Text(this.text,{breakWords : true});
        this.container.addChild(this.sprite);

    }

    public readonly sprite: PIXI.Text;
    /**
     * 文本内容
     */
    private _text = "";
    public get text() {
        return this._text;
    }
    public set text(value) {
        this._text = value;
        addDrawList("text",this,this.textSystem);
    }

    public set fontCssStyle(value: TAny){
        if(value.color){
            value.fill = value.color;
        }
        value.breakWords = true;
        this.sprite.style = value;
    }

    public release(){
        super.release();
        const sprite = this.sprite;
        if(sprite && sprite.parent){
            sprite.parent.removeChild(sprite).destroy();
        }
        this.offAll(ComponentEvent.CHANGE);
    }

    protected textSystem(){
        this.sprite.text = this._text;
        
        if(this._width == 0){
            this._width = this.sprite.width;
        }else{
            this.sprite.width = this._width ;
        }
        if(this._height == 0){
            this._height = this.sprite.height;
        }else{
            this.sprite.height = this._height ;
        }
        this.emit(ComponentEvent.CHANGE,this);
    }
}