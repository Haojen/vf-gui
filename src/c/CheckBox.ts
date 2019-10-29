/**
 * 单选框与复选框组件，没有时间去拆分，区别只是皮肤与分组不同
 * 
 * checbox 不需要设置设置组
 * 
 * radio 需要设置分组
 *
 */

import {Label} from "./Label";
import { ComponentEvent, InputController } from "../interaction/Index";
import { ButtonProps, Button } from "./Button";


/** Image 对象的自有字段 */
class CheckBoxFields extends ButtonProps{

    public constructor(){
        super();
    } 
    /**
     * 设置值
     */
    value?: string;
    /** 
     * 设置是否选中 
     * */
    checked = false;
    /** 
     * 设置分组的名 
     * */
    checkGroup?: string;
    /**
     * 获取或设置选中的值
     */
    selectedValue?: string;
    /** 
     * 选中状态皮肤，
     */
    upAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 选中状态皮肤，
     */
    downAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 选中状态皮肤，
     */
    moveAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 选中状态皮肤，
     */
    disabledAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
}
/**
 * UI 按钮显 示对象
 */
export class CheckBox extends Button{

    public constructor() {
        super();
    }

    public get props(): CheckBoxFields{

        if(this._props){
            return this._props;
        }

        this._props = new CheckBoxFields().proxyData;
        this.initProps();
        return this._props;
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
        return  this.props.checkGroup;
    }
    public set checkGroup(value: string | undefined) {
        if(value === undefined){     
            InputController.unRegistrerCheckGroup(this)
        }
        if(this.props.checkGroup == value){
            return;
        }
        this.props.checkGroup = value;//需要在registrerCheckGroup之前
        InputController.registrerCheckGroup(this);
    }

    /** 
     * 获取设置默认值 
     */
    public get value() {
        return this.props.value;
    }
    public set value(value) {
        if(value === this.props.value){
            return;
        }
        this.props.value = value;
    }

    /** 
     * 设置是否选中 
     * @default false
     */
    public get checked() {
        return this.props.checked;
    }
    public set checked(value) {
        if (value !==  this.props.checked) {
            if (this.checkGroup)
                InputController.updateCheckGroupSelected(this);
            
            this._oldState = "";
            if(value){
                this._selectedStr = "AndSelected";
            }else{
                
                this._selectedStr = "";
            }
            this.props.checked = value;
            this.emit(ComponentEvent.CHANGE,this);
        }
    }


    protected onClick(){
        super.onClick();
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    }


    // public update(_style:CSSStyle) {
    //     super.update(_style);
    // }

    // public release() {
    //     super.release();
    // }

    protected onLabelChange(label: Label){
        label.style.left = this.width;
        label.style.top =  this.height - label.height >> 1;
    }
}