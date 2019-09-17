import Text from "./Text";
import InputSkinBase from "../InputSkinBase";
import TextStyle from "./Text/TextStyle";
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
    constructor(option?: {
        width: number;
        height: number;
        tabIndex: number;
        tabGroup: number;
    });
    _text: Text;
    protected initialize(): void;
    /**
     * 获取或设置文本内容
     */
    label: string;
    /** 设置颜色 */
    labelColor: string;
    /** 设置文字大小 */
    labelSize: number;
    /** 设置文字居中方式 */
    labelHorizontalAlign: number;
    /** 设置文字复杂样式 */
    labelStyle: TextStyle;
    readonly text: Text;
}
