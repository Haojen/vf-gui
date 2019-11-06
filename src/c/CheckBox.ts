import {Label} from "./Label";
import { ComponentEvent, InputController } from "../interaction/Index";
import {  Button } from "./Button";


/**
 * 单选\复选框
 * 
 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
 * 
 * @example let checkBox = new vfui.CheckBox();
 * 
 * @namespace vfui
 * 
 * @link https://vipkid-edu.github.io/pixi-vfui-docs/play/#example/0.5.0/TestCheckBox
 */
export class CheckBox extends Button{

    public constructor() {
        super();
    }

    /**
     * 设置值
     */
    private _value = "";
    /** 
     * 设置是否选中 
     * */
    private _checked = false;

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
        return  this._groupName;
    }
    public set checkGroup(value: string | undefined) {
        if(value === undefined){     
            InputController.unRegistrerCheckGroup(this)
        }
        if(this._groupName == value){
            return;
        }
        this._groupName = value;//需要在registrerCheckGroup之前
        InputController.registrerCheckGroup(this);
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
     * 设置是否选中 
     * @default false
     */
    public get checked() {
        return this._checked;
    }
    public set checked(value) {
        if (value !==  this._checked) {
            if (this.checkGroup)
                InputController.updateCheckGroupSelected(this);
            
            this._oldState = "";
            if(value){
                this._selectedStr = "AndSelected";
            }else{
                
                this._selectedStr = "";
            }
            this._checked = value;
            this.emit(ComponentEvent.CHANGE,this);
            this.onStateChange(this,this.currentState);
        }
    }


    protected onClick(){
        super.onClick();
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    }

    protected onLabelChange(label: Label){
        label.style.left = this.width;
        label.style.top =  this.height - label.height >> 1;
    }
}