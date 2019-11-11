import { UIBase } from "../core/UIBase";
import { ComponentEvent } from "../interaction/Index";

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
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.5.0/TestLabel
 */
export class Label extends UIBase {

    public constructor(text = "") {
        super();
        this.sprite = new PIXI.Text(text,{breakWords : true,fill:"#ffffff"});
        this.container.addChild(this.sprite);

    }

    public readonly sprite: PIXI.Text;
    /**
     * 文本内容
     */
    public get text() {
        return this.sprite.text;
    }
    public set text(value) {
        this.sprite.text = value;
        this.setActualSize(this.sprite.width,this.sprite.height);
        this.emit(ComponentEvent.CHANGE,this);
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
}