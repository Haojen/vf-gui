import UIBase from "./UIBase";
import InteractionEvent from "./Interaction/InteractionEvent";
/**
 * 输入对象的基础类
 *
 * base object for all Input type objects
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {number} 宽度
 * @param height {number} 高度
 * @param tabIndex {(PIXI.UI.SliceSprite|PIXI.UI.Sprite)} will be used as background for input
 */
export default class InputBase extends UIBase {
    constructor(width: number, height: number, tabIndex: number, tabGroup: string);
    protected _focused: boolean;
    private _useTab;
    protected _usePrev: boolean;
    protected _useNext: boolean;
    protected __down: boolean;
    protected onPointer(e: InteractionEvent): void;
    protected keyDownEvent(event: WheelEvent | Event): void;
    protected documentMouseDown(): void;
    private keyDownEventBind;
    protected _bindEvents(): void;
    protected _clearEvents(): void;
    focus(): void;
    blur(): void;
}
