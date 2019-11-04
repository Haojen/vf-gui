import {Label} from "./Label";
import {Image} from "./Image";
import { InputBase } from "../core/InputBase";
import { CSSStyle } from "../layout/CSSStyle";
import { ComponentEvent } from "../interaction/Index";


/**
 * 按钮
 */
export class Button extends InputBase{

    public constructor() {
        super();
        this.container.buttonMode = true;
        this.img.fillMode = "scale";
        this.img.scale9Grid = [3,3,3,3];
        this.addChild(this.img);

        this.label.sprite.style.fontSize = 18;
        this.label.on(ComponentEvent.CHANGE,this.onLabelChange,this);
        this.addChild(this.label);

        this.on(ComponentEvent.STATE_CHANGE,this.onStateChange,this);
    }

    protected _selectedStr: "AndSelected"|"" = "";
    protected _oldState = "";


    /** 状态展示 */
    public readonly img = new Image();
    /** 文字展示 */
    public readonly label = new Label();

    public get text() {
        return this.label.text;
    }
    public set text(value) {

        this.label.text = value;
    }

    
    public update(_style: CSSStyle) {
        this.container.hitArea = new PIXI.Rectangle(0, 0, this._width, this._height);
        const img = this.img;
        img.width = this._width;
        img.height = this._height;
        this.onStateChange(this,this.currentState);
    }

    public release() {
        super.release();
        this.offAll(ComponentEvent.STATE_CHANGE);
        this.img.release();
        this.label.release();
    }

    protected onLabelChange(label: Label){
        label.x = this.width -  label.width >>1;
        label.y = this.height -  label.height >>1;
    }

    protected onStateChange(label: Button,state: string){
        if(this._oldState == state){
            return;
        }
        this._oldState = state;
        const img = this.img;
        img.src = (this as TAny)[state + this._selectedStr];
    }
}