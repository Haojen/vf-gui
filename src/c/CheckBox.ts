import Sprite from "./Sprite";
import { VerticalAlignEnum, HorizontalAlignEnum } from "../Enum/AlignEnum";
import * as InputController from "../Interaction/InputController";
import InputSkinBase from "../InputSkinBase";

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
export default class CheckBox extends InputSkinBase{
    /**
     * 按钮构造函数 
     * 
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    public constructor(option = {width:20,height:20,tabIndex:0,tabGroup:0}){  
        super(option.width,option.height,option.tabIndex,option.tabGroup.toString());
        this.container.buttonMode = true;
        this._checkmark = new Sprite();
        this._checkmark.verticalAlign = VerticalAlignEnum.middle
        this._checkmark.horizontalAlign = HorizontalAlignEnum.center;
        this._checkmark.alpha = 0;
        this.addChild(this._checkmark);
    }

    private _checkmark: Sprite ;
    private _checked = false;
    private _checkGroup: string | undefined;
    private _value: string|undefined;

    protected _sourceMark: string|undefined;
    /** 勾选图 */
    public get sourceMark() {
        return this._sourceMark;
    }
    public set sourceMark(value: string|undefined) {
        this._sourceMark = value;
        this.update();
    }

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
        this._checkGroup = value;//需要在registrerCheckGroup之前
        InputController.registrerCheckGroup(this);
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
            this.update();
        }
    }

    protected onClick(){
        super.onClick();
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    }

    public update(){
        super.update(); 
        this._checkmark.alpha = this.checked ? 1 : 0;
        this._checkmark.source = this._sourceMark;
        
    }
}