import {Label} from "./Label";
import {Image} from "./Image";
import { InputBase } from "../core/InputBase";
import { BaseFields } from "../layout/BaseFields";
import { CSSStyle } from "../layout/CSSStyle";
import { ComponentEvent } from "../interaction/Index";


/** Image 对象的自有字段 */
class Fields extends BaseFields{

    public constructor(){
        super();
    }

    /**
     * 按钮的文字
     */
    text = "";
    /** 
     * 状态皮肤，
     */
    up?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    down?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    move?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    disabled?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 状态展示 */
    readonly img = new Image();
    /** 文字展示 */
    readonly label = new Label();
}
/**
 * UI 按钮显 示对象
 */
export class Button extends InputBase{

    public constructor() {
        super();
        let fields = this.fields = new Fields().proxyData; 
        fields.img.fields.fillMode = "scale";
        fields.img.fields.scale9Grid = [3,3,3,3];
        this.addChild(fields.img);

        fields.label.fields.fontSize = 18;
        fields.label.on(ComponentEvent.CHANGE,this.onLabelChange,this);
        this.addChild(fields.label);
    }

    public readonly fields: Fields;

    protected _oldState = "";

    public update(_style:CSSStyle) {
        let {fields} = this;
        if(fields.dirty.dirty){
            fields.dirty.dirty = false;

            if(fields.label.fields.text !== fields.text){
                fields.label.fields.text = fields.text;
            }
            this.container.hitArea = new PIXI.Rectangle(0, 0, this._width, this._height);
        }

        if(this.currentState !== this._oldState){
            this._oldState = this.currentState;
            fields.img.style.width = this._width;
            fields.img.style.height = this._height;
            fields.img.fields.src = (fields as TAny)[this.currentState];
        }
    }

    public updateBlendMode() {
        if (this.blendMode) {
            this.blendMode = this.blendMode;
        }
    }

    public release() {
        super.release();
        this.fields.label.off(ComponentEvent.CHANGE,this.onLabelChange,this);
        this.removeChild(this.fields.img);
        this.removeChild(this.fields.label);
    }

    protected onLabelChange(label:Label){
        label.style.left = this.width -  label.width >>1;
        label.style.top = this.height -  label.height >>1;
    }
}