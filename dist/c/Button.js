import Text from "./Text";
import InputSkinBase from "../InputSkinBase";
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
export default class Button extends InputSkinBase {
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    constructor(option = { width: 100, height: 20, tabIndex: 0, tabGroup: 0 }) {
        super(option.width, option.height, option.tabIndex, option.tabGroup.toString());
        this._text = new Text();
        this.container.buttonMode = true;
        this._text.verticalAlign = 2 /* middle */;
        this._text.horizontalAlign = 2 /* center */;
        this._text.style.fontSize = 18;
        this._text.style.fill = 0xFFFFFF;
        this._text.top = 8;
        this._text.left = 8;
        this._text.right = 8;
        this._text.bootom = 8;
        this.addChild(this._text);
    }
    initialize() {
        super.initialize();
        this.container.interactiveChildren = false;
    }
    /**
     * 获取或设置文本内容
     */
    get label() {
        return this._text.label;
    }
    set label(value) {
        this._text.label = value;
    }
    /** 设置颜色 */
    get labelColor() {
        return this._text.style.fill.toString();
    }
    set labelColor(value) {
        this._text.style.fill = value;
    }
    /** 设置文字大小 */
    get labelSize() {
        return this._text.style.fontSize;
    }
    set labelSize(value) {
        this._text.style.fontSize = value;
    }
    /** 设置文字居中方式 */
    get labelHorizontalAlign() {
        return this._text.horizontalAlign || 2 /* center */;
    }
    set labelHorizontalAlign(value) {
        this._text.horizontalAlign = value;
    }
    /** 设置文字复杂样式 */
    get labelStyle() {
        return this._text.style;
    }
    set labelStyle(value) {
        this._text.style = value;
    }
    get text() {
        return this._text;
    }
}
//# sourceMappingURL=Button.js.map