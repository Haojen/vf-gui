/// <reference types="pixi.js" />
import UIBase from "../UIBase";
import TextStyle from "./Text/TextStyle";
/**
 * UI文本显示对象
 *
 * 中文换行特殊处理 xxxx.style.breakWords = true;
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 * @see https://pixijs.io/pixi-text-style
 */
export default class Text extends UIBase {
    /**
     * 文本构造函数
     * @param text 要显示的内容，默认为""
     * @param TextStyle {} 文本样式，参考TextStyle
     */
    constructor(text?: string, TextStyle?: TextStyle);
    private _text;
    private _source;
    /**
     * 获取或设置文本
     */
    private source;
    /**
     * 获取或设置文本内容
     */
    label: string;
    style: TextStyle;
    readonly textWidth: number;
    readonly textHeight: number;
    readonly textBounds: PIXI.Rectangle;
    baseupdate(): void;
    update(): void;
}
/** 获得默认行高 */
export declare function defaultLineHeight(style?: TextStyle): {
    lineHeight: number;
    textHeight: number;
};
