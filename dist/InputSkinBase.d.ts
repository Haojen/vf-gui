import InputBase from "./InputBase";
import ClickEvent from "./Interaction/ClickEvent";
import InteractionEvent from "./Interaction/InteractionEvent";
import SliceSprite from "./c/SliceSprite";
import UIBase from './UIBase';
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
export default class InputSkinBase extends InputBase {
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    constructor(width: number, height: number, tabIndex: number, tabGroup: string);
    protected onHover(e: InteractionEvent, thisObj: UIBase, over: boolean): void;
    protected onPress(e: InteractionEvent, thisObj: UIBase, isPress: boolean): void;
    protected onClick(): void;
    protected onMove(): void;
    protected _isHover: boolean;
    protected _background: SliceSprite;
    protected _clickEvent: ClickEvent;
    /**
     * 组件的当前视图状态 。 后续扩展
     */
    protected _currentState: "Up" | "Move" | "Down";
    currentState: "Up" | "Move" | "Down";
    protected _sourceUp: string | undefined;
    sourceUp: string | undefined;
    protected _sourceMove: string | undefined;
    sourceMove: string | undefined;
    protected _sourceDown: string | undefined;
    sourceDown: string | undefined;
    focus(): void;
    blur(): void;
    updateHitArea(): void;
    update(): void;
}
