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
    constructor(option?: {
        width: number;
        height: number;
        tabIndex: number;
        tabGroup: number;
    });
    private _checkmark;
    private _checked;
    private _checkGroup;
    private _value;
    protected _sourceMark: string | undefined;
    /** 勾选图 */
    sourceMark: string | undefined;
    /**
     * 获取设置默认值
     */
    value: string | undefined;
    /**
     * 获取或设置当前选中的值
     */
    readonly selectedValue: string | undefined;
    /**
     * 设置分组名
     */
    checkGroup: string | undefined;
    /**
     * 设置是否选中
     * @default false
     */
    checked: boolean;
    protected onClick(): void;
    update(): void;
}
