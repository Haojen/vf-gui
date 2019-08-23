import InputBase from "../InputBase";
import Sprite from "../cSprite/Sprite";
import SliceSprite from "../cSliceSprite/SliceSprite";
import { VerticalAlignEnum, HorizontalAlignEnum } from "../Enum/AlignEnum";
import ClickEvent from "../Interaction/ClickEvent";
import { interaction } from "pixi.js";
import UIBase from "../UIBase";
import * as InputController from "../Interaction/InputController";
/*
 * Features:
 * Button, radio button (checkgroups)
 *
 * Methods:
 * blur()
 * focus()
 *
 * Properties:
 * label: get/set Button value
 *
 * Events:
 * "hover"          param: [bool]isHover (hover/leave)
 * "press"          param: [bool]isPressed (pointerdown/pointerup)
 * "click"
 * "blur"
 * "focus"
 * "focusChanged"   param: [bool]isFocussed
 *
 */

/**
 * UI 单选框与复选框，区别在于有没有时间去拆分，如果没有时间拆分就直接用这个吧，只是皮肤不同
 * 
 * box不需要设置设置组
 * 
 * radio 需要设置分组
 *
 * @class
 * @extends PIXI.UI.InputBase
 * @memberof PIXI.UI
 * @param [options.tabIndex=0] {Number} input tab index
 * @param [options.tabGroup=0] {Number|String} input tab group
 * @param [options.width=20] {Number|String} width
 * @param [options.height=20] {Number|String} height
 */
export default class CheckBox extends InputBase{
    /**
     * 按钮构造函数 
     * 
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    public constructor(option = {width:20,height:20,tabIndex:0,tabGroup:0}){  
        super(option.width,option.height,option.tabIndex,option.tabGroup.toString());
        this._option = option;
        this.container.buttonMode = true;
        this._clickEvent.onHover = this.onHover;
        this._clickEvent.onPress = this.onPress;
        this._clickEvent.onClick = this.onClick;
    }
    private _option: {width: number;height: number;tabIndex: number;tabGroup: number};
    private _isHover = false;
    private _background: SliceSprite | Sprite | undefined;
    private _checkmark: SliceSprite | Sprite | undefined;
    private _clickEvent = new ClickEvent(this);
    private _checked = false;
    private _checkGroup: string | undefined;
    private _value: string|undefined;

    /** 
     * 获取设置默认值 
     */
    public get value() {
        return this._value;
    }
    public set value(value) {
        if(value === this._value){
            return;
        }
        this._value = value;
    }
    /** 
     * 获取或设置当前选中的值
     */
    public get selectedValue() {
        if(this.checkGroup){
            return InputController.getCheckGroupSelectedValue(this.checkGroup);
        }
        return undefined;
    }
    /** 
     * 设置分组名
     */
    public get checkGroup(): string | undefined {
        return this._checkGroup;
    }
    public set checkGroup(value: string | undefined) {
        if(value === undefined){     
            InputController.unRegistrerCheckGroup(this)
        }
        if(this._checkGroup == value){
            return;
        }
        InputController.registrerCheckGroup(this);
        this._checkGroup = value;
    }
    /** 
     * 设置是否选中 
     * @default false
     */
    public get checked() {
        return this._checked;
    }
    public set checked(value) {
        if (value !== this._checked) {
            if (this.checkGroup)
                InputController.updateCheckGroupSelected(this);
            this._checked = value;
            this.change(value);
        }
    }

    /**
     * 设置背景
     */
    public get background(): SliceSprite | Sprite|undefined {
        return this._background;
    }
    public set background(value: SliceSprite | Sprite|undefined) {
        if(value === undefined){
            return;
        }
        if(value === this._background){
            return;
        }
        if(this._background){
            this.removeChild(this._background);
        }
        this._background = value;
        this._background.widthPet = "100%";
        this._background.heightPct = "100%";
        this._background.pivot = 0.5;
        this._background.verticalAlign = VerticalAlignEnum.middle
        this._background.horizontalAlign = HorizontalAlignEnum.center;
        this.addChildAt(this._background as UIBase,0);

    }
    public get checkmark(): SliceSprite | Sprite | undefined {
        return this._checkmark;
    }
    public set checkmark(value: SliceSprite | Sprite | undefined) {
        if(value === undefined){
            return;
        }
        if(value === this._checkmark){
            return;
        }
        if(this._checkmark){
            this.removeChild(this._checkmark);
        }
        this._checkmark = value;
        this._checkmark.verticalAlign = VerticalAlignEnum.middle
        this._checkmark.horizontalAlign = HorizontalAlignEnum.center;
        if (!this._checked) {
            this._checkmark.alpha = 0;
        }
        this.addChildAt(this._checkmark,1);
    }

    private onHover(e: interaction.InteractionEvent,over: boolean){
        this._isHover = over;
        this.emit("hover", over);
    }
    private onPress(e: interaction.InteractionEvent,isPressed: boolean){
        if (isPressed) {
            this.focus();
            e.data.originalEvent.preventDefault();
        }
        this.emit("press", isPressed);
    }
    private onClick(){
        this.click();
    }
    private change(value: boolean) {
        if (this.checkmark)
            this.checkmark.alpha = value ? 1 : 0;
    }
    private click  () {
        this.emit("click");
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
        this.emit("change", this.checked);
    }
    public focus() {
        if (!this._focused) {
            super.focus();
        }
    }
    public blur() {
        if (this._focused) {
            super.blur();
        }
    }

}