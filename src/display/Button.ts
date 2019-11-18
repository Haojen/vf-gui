import {Label} from "./Label";
import {Image} from "./Image";
import { InputBase } from "./private/InputBase";
import { ComponentEvent } from "../interaction/Index";


/**
 * 按钮
 * 
 * @example let button = new gui.Button();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestButton
 */
export class Button extends InputBase{

    public constructor() {
        super();
        this.container.buttonMode = true;
        this.img.fillMode = "scale";
        this.img.scale9Grid = [3,3,3,3];
        this.addChild(this.img);

        this.label.sprite.style.fontSize = 18;
        this.addChild(this.label);

        this.on(ComponentEvent.STATE_CHANGE,this.onStateChange,this);
    }

    protected _selectedStr: "AndSelected"|"" = "";
    protected _oldState = "";


    /** 状态展示 */
    public readonly img = new Image();
    /** 文字展示 */
    public readonly label = new Label();

    private _text = "";
    /**
     * 设置按钮的文本内容
     */
    public get text() {
        return this.label.text;
    }
    public set text(value) {
        this._text = value;
        this.invalidateDisplayList();

    }


    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number) {

        super.updateDisplayList(unscaledWidth,unscaledHeight);
        
        this.container.hitArea = new PIXI.Rectangle(0, 0, unscaledWidth, unscaledHeight);

        const img = this.img;
        img.width = unscaledWidth;
        img.height = unscaledHeight;

        if(this.label.width!==unscaledWidth)
            this.label.width = unscaledWidth;
        if(this.label.height!==unscaledHeight)
            this.label.height = unscaledHeight;

        if(this.label.text !== this._text){
            this.label.text = this._text;

        }

        this.onStateChange(this,this.currentState);

    }

    public release() {
        super.release();
        this.offAll(ComponentEvent.STATE_CHANGE);
        this.img.release();
        this.label.release();
    }


    protected onStateChange(label: Button,state: string){
        if(this._oldState == state){
            return;
        }
        this._oldState = state;
        this.img.src = (this as TAny)[state + this._selectedStr];
    }
}