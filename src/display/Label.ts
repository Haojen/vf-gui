import { DisplayObject } from "../core/DisplayObject";
import { ComponentEvent } from "../interaction/Index";
import * as UIKeys from "../core/DisplayLayoutKeys";

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
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestLabel
 */
export class Label extends DisplayObject {

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
        this.invalidateSize();
        this.invalidateDisplayList();
        this.emit(ComponentEvent.CHANGE,this);
    }

    public set fontCssStyle(value: TAny){
        if(value.color){
            value.fill = value.color;
        }
        value.breakWords = true;
        this.sprite.style = value;
        this.invalidateSize();
        this.invalidateDisplayList();
    }

    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
        super.updateDisplayList(unscaledWidth,unscaledHeight);
        const values = this.$values;
        if(!isNaN(values[UIKeys.explicitWidth])){
            switch(this.style.textAlign){
                case "left":
                    this.sprite.x = 0;
                    break;
                case "right":
                    this.sprite.x =  values[UIKeys.explicitWidth] - this.sprite.width;
                    break;
                case "center":
                    this.sprite.x = values[UIKeys.explicitWidth] - this.sprite.width >>1;
                    break;
            }
            
        }
        if(!isNaN(values[UIKeys.explicitHeight])){
            this.sprite.y = values[UIKeys.explicitHeight] - this.sprite.height >>1; 
        }
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