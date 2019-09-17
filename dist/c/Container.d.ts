/// <reference types="pixi.js" />
import UIBase from "../UIBase";
import Sprite from "./Sprite";
import Rect from "./Rect";
/**
 * UI的显示容器
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {Number} 宽度
 * @param height {Number} 高度
 */
export default class Container extends UIBase {
    constructor(width?: number, height?: number);
    update(): void;
    private _mask;
    /**
     * 设置遮罩
     */
    mask: Sprite | Rect | PIXI.Sprite | PIXI.Graphics | undefined;
}
