import UIBase from "../UIBase";
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
    constructor(text = "", TextStyle) {
        super();
        this._source = text;
        this._text = new PIXI.Text(text, TextStyle);
        this.setDefaultSize(this._text.width, this._text.height);
        this.container.addChild(this._text);
    }
    /**
     * 获取或设置文本
     */
    get source() {
        return this._source;
    }
    set source(value) {
        if (value === this._source) {
            return;
        }
        this._source = value;
        this._text.text = value;
        this.updatesettings(true);
    }
    /**
     * 获取或设置文本内容
     */
    get label() {
        return this._source;
    }
    set label(value) {
        this.source = value;
    }
    get style() {
        return this._text.style;
    }
    set style(value) {
        this._text.style = value;
    }
    get textWidth() {
        return this._text.getBounds().width;
    }
    get textHeight() {
        return this._text.getBounds().height;
    }
    get textBounds() {
        return this._text.getBounds();
    }
    baseupdate() {
        const bounds = this._text.getBounds();
        this.setting.width = bounds.width;
        this.setting.widthPct = undefined;
        this.setting.height = bounds.height;
        this.setting.heightPct = undefined;
        super.baseupdate();
    }
    update() {
        if (!isNaN(this.tint))
            this._text.tint = this.tint;
        if (!isNaN(this.blendMode))
            this._text.blendMode = this.blendMode;
    }
}
/** 获得默认行高 */
export function defaultLineHeight(style) {
    const _tempText = new PIXI.Text("1", style);
    const lineHeight = _tempText.height;
    const textHeight = _tempText.height;
    _tempText.destroy();
    return { lineHeight, textHeight };
}
//# sourceMappingURL=Text.js.map