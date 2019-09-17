import Sprite from "./Sprite";
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
export default class CheckBox extends InputSkinBase {
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    constructor(option = { width: 20, height: 20, tabIndex: 0, tabGroup: 0 }) {
        super(option.width, option.height, option.tabIndex, option.tabGroup.toString());
        this._checked = false;
        this.container.buttonMode = true;
        this._checkmark = new Sprite();
        this._checkmark.verticalAlign = 2 /* middle */;
        this._checkmark.horizontalAlign = 2 /* center */;
        this._checkmark.alpha = 0;
        this.addChild(this._checkmark);
    }
    /** 勾选图 */
    get sourceMark() {
        return this._sourceMark;
    }
    set sourceMark(value) {
        this._sourceMark = value;
        this.update();
    }
    /**
     * 获取设置默认值
     */
    get value() {
        return this._value;
    }
    set value(value) {
        if (value === this._value) {
            return;
        }
        this._value = value;
    }
    /**
     * 获取或设置当前选中的值
     */
    get selectedValue() {
        if (this.checkGroup) {
            return InputController.getCheckGroupSelectedValue(this.checkGroup);
        }
        return undefined;
    }
    /**
     * 设置分组名
     */
    get checkGroup() {
        return this._checkGroup;
    }
    set checkGroup(value) {
        if (value === undefined) {
            InputController.unRegistrerCheckGroup(this);
        }
        if (this._checkGroup == value) {
            return;
        }
        this._checkGroup = value; //需要在registrerCheckGroup之前
        InputController.registrerCheckGroup(this);
    }
    /**
     * 设置是否选中
     * @default false
     */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        if (value !== this._checked) {
            if (this.checkGroup)
                InputController.updateCheckGroupSelected(this);
            this._checked = value;
            this.update();
        }
    }
    onClick() {
        super.onClick();
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    }
    update() {
        super.update();
        this._checkmark.alpha = this.checked ? 1 : 0;
        this._checkmark.source = this._sourceMark;
    }
}
//# sourceMappingURL=CheckBox.js.map