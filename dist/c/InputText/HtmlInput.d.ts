/// <reference types="pixi.js" />
/**
 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
 */
export default class HtmlInput extends PIXI.utils.EventEmitter {
    constructor(multiline: boolean);
    private _domInput;
    private _selection;
    private _restrictRegex;
    private _restrict_value;
    readonly domInput: HTMLInputElement | HTMLTextAreaElement;
    visible: boolean;
    value: string;
    placeholder: string;
    disabled: boolean;
    restrict: RegExp | undefined;
    setStyle(style: InputStyle): void;
    setStyleValue(key: TAny, value: TAny): void;
    setAttribute(key: string, value: string): void;
    select(): void;
    /** 测量，需要对象添加到body中 */
    getDOMInputBounds(): ClientRect | DOMRect;
    updatePostion(top: string | number, left: string | number, transform: string, opacity?: string | number): void;
    private addDom;
    private removeDom;
    destroy(): void;
    private _onInputKeyDownBind;
    private _onInputInputBind;
    private _onInputKeyUpBind;
    private _onFocusedBind;
    private _onBlurredBind;
    private addEvent;
    private removeEvent;
    private _applyRestriction;
    private _onInputKeyDown;
    private _onInputInput;
    private _onInputKeyUp;
    private _onFocused;
    private _onBlurred;
    focus(): void;
    blur(): void;
}
