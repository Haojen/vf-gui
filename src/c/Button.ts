/**
 * 按钮组件
 */

import {Label} from "./Label";
import {Image} from "./Image";
import { InputBase, InputBaseProp } from "../core/InputBase";
import { BaseProps } from "../layout/BaseProps";
import { CSSStyle } from "../layout/CSSStyle";
import { ComponentEvent } from "../interaction/Index";


/** 
 * 按钮自定义字段
 */
export class ButtonProps extends InputBaseProp{

    public constructor(){
        super();
    }

    /**
     * 按钮的文字
     */
    text = "";
    /** 状态展示 */
    readonly img = new Image();
    /** 文字展示 */
    readonly label = new Label();
}

/**
 * 按钮
 */
export class Button extends InputBase{

    public constructor() {
        super();
        this.container.buttonMode = true;
    }

    protected _props?: TAny;
    protected _oldState = "";
    protected _selectedStr: "AndSelected"|"" = "";

    protected initProps(){
        const props = this.props; 
        props.img.props.fillMode = "scale";
        props.img.props.scale9Grid = [3,3,3,3];
        this.addChild(props.img);

        props.label.props.fontSize = 18;
        props.label.on(ComponentEvent.CHANGE,this.onLabelChange,this);
        this.addChild(props.label);
        return props;
    }

    /** 子类可以重写 */
    public get props(): ButtonProps{

        if(this._props){
            return this._props;
        }

        this._props = new ButtonProps().proxyData;
        this.initProps();

        return this._props;
    }

    public update(_style: CSSStyle) {
        const {props} = this;
        if(props.dirty.dirty){
            props.dirty.dirty = false;

            if(props.label.props.text !== props.text){
                props.label.props.text = props.text;
            }
            this.container.hitArea = new PIXI.Rectangle(0, 0, this._width, this._height);
        }

        if(this.currentState !== this._oldState){
            this._oldState = this.currentState;
            props.img.style.width = this._width;
            props.img.style.height = this._height;
            props.img.props.src = (props as TAny)[this.currentState + this._selectedStr];
        }
    }

    public updateBlendMode() {
        if (this.blendMode) {
            this.blendMode = this.blendMode;
        }
    }

    public release() {
        super.release();
        this.props.label.off(ComponentEvent.CHANGE,this.onLabelChange,this);
        this.removeChild(this.props.img);
        this.removeChild(this.props.label);
    }

    protected onLabelChange(label: Label){
        label.style.left = this.width -  label.width >>1;
        label.style.top = this.height -  label.height >>1;
    }
}