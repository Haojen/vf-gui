import { VerticalAlignEnum, HorizontalAlignEnum } from "../enum/AlignEnum";
import {Text} from "./Text";
import {InputSkinBase} from "../core/InputSkinBase";
import {TextStyle} from "./TextStyle";

/**
 * UI 按钮显 示对象
 *
 * @class
 * @extends PIXI.UI.InputBase
 * @memberof PIXI.UI
 * @param [options.tabIndex=0] {Number} input tab index
 * @param [options.tabGroup=0] {Number|String} input tab group
 * @param [options.width=100h] {Number|String} width
 * @param [options.height=20] {Number|String} height
 */
export class Button extends InputSkinBase{
    /**
     * 按钮构造函数 
     * 
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    public constructor(option = {width:100,height:20,tabIndex:0,tabGroup:0}){  
        super(option.width,option.height,option.tabIndex,option.tabGroup.toString());
        this.container.buttonMode = true;
        // this._text.verticalAlign = VerticalAlignEnum.middle
        // this._text.horizontalAlign = HorizontalAlignEnum.center;
        // this._text.style.fontSize = 18;
        // this._text.style.fill = 0xFFFFFF;
        // this._text.top = 8;
        // this._text.left = 8;
        // this._text.right = 8;
        // this._text.bootom = 8;
        // this.addChild(this._text);   
    }

    public _text = new Text();

    protected initialize() {
        super.initialize();
        this.container.interactiveChildren = false;
    }

    /**
     * 获取或设置文本内容
     */
    public get label(): string{
        return this._text.label;
    }
    public set label(value: string){
        this._text.label = value;
    }

    /** 设置颜色 */
    // public get labelColor(){
    //     return this._text.style.fill.toString();
    // }
    // public set labelColor(value: string){
    //     this._text.style.fill = value;
    // }

    // /** 设置文字大小 */
    // public get labelSize(){
    //     return this._text.style.fontSize as number;
    // }
    // public set labelSize(value: number){
    //     this._text.style.fontSize = value;
    // }
    // /** 设置文字居中方式 */
    // public get labelHorizontalAlign(){
    //     return this._text.horizontalAlign || HorizontalAlignEnum.center;
    // }      
    // public set labelHorizontalAlign(value: number){
    //     this._text.horizontalAlign = value;
    // }

    /** 设置文字复杂样式 */
    // public get labelStyle(){
    //     return this._text.style;
    // }
    // public set labelStyle(value: TextStyle){
    //     this._text.style = value;
    // }

    public get text(){
        return this._text;
    }
}