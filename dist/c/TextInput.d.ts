/// <reference types="pixi.js" />
import UIBase from "../UIBase";
/**
 * @example
 * new PIXI.TextInput({
 * input: {
 *      fontSize: '25pt',
 *      padding: '14px',
 *      width: '500px',
 *      color: '#26272E'
 *  },
 *  box: {...}
 * })
 */
export default class TextInput extends UIBase {
    constructor(styles?: TAny);
    private htmlInputShared;
    private _inputStyle;
    private _disabled;
    private _maxLength;
    private _previous;
    private _domVisible;
    private _placeholder;
    private _placeholderColor;
    private _substituted;
    private _lastRenderer;
    private _resolution;
    private _canvasBounds;
    private _surrogateHitbox;
    private _surrogateMask;
    private _surrogate;
    private _fontMetrics;
    protected state: string;
    update(): void;
    /**
     * 预览文字
     */
    placeholder: string;
    /**
     * 设置不可用
     */
    disabled: boolean;
    /**
     * 设置最大可输入
     */
    maxLength: number;
    /**
     * 过滤表达式
     */
    restrict: RegExp | undefined;
    /**
     * 设置字体大小
     */
    fontSize: number;
    /** 设置字体 */
    fontFamily: string;
    /**
     * 设置字体颜色
     */
    fill: string;
    /**
     * 设置文本
     */
    text: string;
    private substituteText;
    /**
     * 设置焦点
     */
    focus(): void;
    /**
     * 失去焦点
     */
    blur(): void;
    /**
     * 全选
     */
    select(): void;
    /**
     * 设置css style样式
     * @param key 健
     * @param value 值
     */
    setInputStyle(key: TAny, value: TAny): void;
    private _onInputInput;
    private _onFocused;
    private _onBlurred;
    private _setState;
    render(renderer: PIXI.Renderer): void;
    private _renderInternal;
    private _update;
    private _updateSubstitution;
    private _updateDOMInput;
    private _needsUpdate;
    private _createSurrogate;
    private _updateSurrogate;
    private _updateSurrogateHitbox;
    private _updateSurrogateMask;
    private _destroySurrogate;
    private _onSurrogateFocus;
    private _ensureFocus;
    private _deriveSurrogateStyle;
    private _deriveSurrogatePadding;
    private _deriveSurrogateText;
    private _updateFontMetrics;
    private _hasFocus;
    private _getCanvasBounds;
    private _getDOMRelativeWorldTransform;
    private _pixiMatrixToCSS;
    private _comparePixiMatrices;
    private _compareClientRects;
}
