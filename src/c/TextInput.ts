import HtmlInput from "./InputText/HtmlInput";
import { KeyEvent } from "../interaction/InteractionEvent";
import { CSSStyle } from "../layout/CSSStyle";
import { componentToHex } from "../core/Utils";
import { InputBase } from "../core/InputBase";
import { Image } from "./Image";
import { addDrawList } from "../layout/CSSSSystem";
import { ComponentEvent } from "../interaction/Index";


 /**
 * 文本输入
 * 
 * @example let textInput = new vfui.TextInput(true|false);//单行或多行
 * 
 * @namespace vfui
 * 
 * @link https://vipkid-edu.github.io/pixi-vfui-docs/play/#example/0.5.0/TestTextInput
 */
export class TextInput extends InputBase {

    constructor(multiline = false) {
        super();

        this._inputStyle = Object.assign(
            {
                position: 'absolute',
                background: 'none',
                border: 'none',
                outline: 'none',
                transformOrigin: '0 0',
                padding: '5px 8px',
                color: '#26272e',
                lineHeight: '1',
                fontSize: "25px"
            },
            {
                multiline: multiline
            }
        ) as TAny;

        this.htmlInputShared = new HtmlInput(this._inputStyle.multiline);
        this.htmlInputShared.setStyle(this._inputStyle);
        this.htmlInputShared.on(KeyEvent.input, this._onInputInput, this);
        this.htmlInputShared.on('focus', this._onFocused, this);
        this.htmlInputShared.on('blur', this._onBlurred, this);

        this.img.fillMode = "scale";
        this.img.scale9Grid = [3, 3, 3, 3];
        this.addChild(this.img);

        this._textHitbox = new PIXI.Graphics();
        this._textHitbox.name = "_textHitbox";
        this._textHitbox.alpha = 0;
        this._textHitbox.interactive = true;
        this._textHitbox.cursor = 'text';
        this._textHitbox.on('pointerdown', this._ontextFocus, this);
        this.container.addChild(this._textHitbox);

        this._textMask = new PIXI.Graphics();
        this._textMask.name = "_textMask";
        this.container.addChild(this._textMask);

        this._text = new PIXI.Text('', {});
        this._text.name = "_text";
        this._text.visible = false;
        this.container.addChild(this._text);

        this._text.mask = this._textMask;

        this._domVisible = false;

        this.container.interactiveChildren = true;

        this.on(ComponentEvent.STATE_CHANGE,this.onStateChange,this);
    }

    protected _oldState = "";

    protected htmlInputShared: HtmlInput;

    protected _lastRenderer: PIXI.Renderer | undefined;
    protected _resolution = 1;
    protected _canvasBounds: { top: number; left: number; width: number; height: number } | undefined;
    protected _previous: { canvasBounds: TAny; worldTransform: TAny; worldAlpha: TAny; worldVisible: TAny } | TAny = {};

    protected _inputStyle: InputStyle;
    /**
     * 预览文字的样式
     */
    protected placeholderColor = 0xa9a9a9;
    protected _domVisible = true;

    protected _textHitbox: PIXI.Graphics;
    protected _textMask: PIXI.Graphics;
    protected _text: PIXI.Text;


    protected _fontMetrics: PIXI.IFontMetrics | undefined;
    protected state = 'DEFAULT';

    /**
     * 设置文本
     */
    public get text() {
        return this._text.text;
    }
    public set text(value) {
        this._text.text = value;
        addDrawList("update",this,this.updateSystem);
    }
    /**
     * 预览文字
     */
    private _placeholder = '';
    public get placeholder() {
        return this._placeholder;
    }
    public set placeholder(value) {
        this._placeholder = value;
        addDrawList("update",this,this.updateSystem);
    }
    /**
     * 设置最大可输入
     */
    private _maxLength = 99999;
    public get maxLength() {
        return this._maxLength;
    }
    public set maxLength(value) {
        this._maxLength = value;
        addDrawList("update",this,this.updateSystem);
    }
    /** 
     * 过滤表达式
     */
    private _restrict: RegExp | undefined;
    public get restrict(): RegExp | undefined {
        return this._restrict;
    }
    public set restrict(value: RegExp | undefined) {
        this._restrict = value;
        addDrawList("update",this,this.updateSystem);
    }

    /** 
     * 状态展示
    */
    public readonly img = new Image();


    // GETTERS & SETTERS
    public update(_style: CSSStyle, renderer?: PIXI.Renderer) {

        if(renderer === undefined){
            return;
        }
        const { htmlInputShared } = this;

        htmlInputShared.maxlength = this.maxLength;
        htmlInputShared.placeholder = this.placeholder;
        htmlInputShared.disabled = !this.enabled;
        htmlInputShared.restrict = this.restrict;

        this.setInputStyle("fontFamily", this.style.fontFamily);
        this.setInputStyle("fontSize", this.style.fontSize);
        this.setInputStyle("color", this.style.color);

        this.setInputStyle("width", this._width + "px");
        this.setInputStyle("height", this._height + "px");
       
        this.render(renderer);

        this.onStateChange(this, this.currentState);

    }

    /** 
     * 设置焦点 
     */
    public focus() {
        this.htmlInputShared.focus();

    }
    /** 
     * 失去焦点 
     */
    public blur() {
        this.htmlInputShared.blur();
    }

    /**
     * 设置css style样式
     * @param key 健
     * @param value 值
     */
    public setInputStyle(key: TAny, value: TAny) {
        if (key === "fontSize") {
            value = value + "px";
        }
        if (key === "color") {
            value = "#" + componentToHex(value);
        }
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key, value);
    }

    protected onStateChange(ui: TextInput, state: string) {
        if (this._oldState == state) {
            return;
        }
        if (!this.enabled) {
            this.currentState = "disabled";
        }
        this._oldState = state;
        const img = this.img;
        img.src = (this as TAny)[state];
    }
    protected updateSystem(){
        //一次空的执行，为了触发update
    }

    // SETUP
    private _onInputInput() {
        this._updateSubstitution();
    }

    private _onFocused() {
        this._setState('FOCUSED');
    }

    private _onBlurred() {
        this._setState('DEFAULT');
    }


    private _setState(state: string) {
        this.state = state;
        this._updateSubstitution();
    }

    private _updateSubstitution() {
        if (this.state === 'FOCUSED') {
            this._domVisible = true;
            this._text.visible = false;
        } else {
            this._domVisible = false;
            this._text.visible = true;
        }
        this._updateDOMInput();
        this._updatetext();
    }


    // RENDER & UPDATE
    // for pixi v5
    public render(renderer: PIXI.Renderer) {
        this._renderInternal(renderer);
    }

    private _renderInternal(renderer: PIXI.Renderer) {
        this._resolution = renderer.resolution;
        this._lastRenderer = renderer;
        this._canvasBounds = this._getCanvasBounds();
        if (this._needsUpdate()) {
            this._updateSubstitution();
        }

    }

    private _updateDOMInput() {
        if (!this._canvasBounds)
            return;
        const cb = this._canvasBounds;
        const transform = this._pixiMatrixToCSS(this._getDOMRelativeWorldTransform());
        this.htmlInputShared.updatePostion(cb.top, cb.left, transform, this.container.worldAlpha);
        this.htmlInputShared.visible = this.container.worldVisible && this._domVisible;

        this._previous.canvasBounds = this._canvasBounds;
        this._previous.worldTransform = this.container.worldTransform.clone();
        this._previous.worldAlpha = this.container.worldAlpha;
        this._previous.worldVisible = this.container.worldVisible;
    }

    // STATE COMPAIRSON (FOR PERFORMANCE BENEFITS)
    private _needsUpdate() {
        return (
            !this._comparePixiMatrices(this.container.worldTransform, this._previous.worldTransform)
            || !this._compareClientRects(this._canvasBounds, this._previous.canvasBounds)
            || this.container.worldAlpha != this._previous.worldAlpha
            || this.container.worldVisible != this._previous.worldVisible
        )
    }

    private _updatetext() {

        const padding = this._derivetextPadding();
        const inputBounds = this.htmlInputShared.getDOMInputBounds();

        this._text.style = this._derivetextStyle();
        this._text.style.padding = Math.max(...padding);
        this._text.y = this._inputStyle.multiline ? padding[0] : (inputBounds.height - this._text.height) / 2;
        this._text.x = padding[3];
        if (this._inputStyle.multiline) {
            this._text.style.wordWrap = true;
            this._text.style.wordWrapWidth = inputBounds.width;
            this._text.style.breakWords = true;
        }

        this._text.text = this._derivetextText();

        this._textHitbox.clear();
        this._textHitbox.beginFill(0);
        this._textHitbox.drawRect(0, 0, inputBounds.width, inputBounds.height);
        this._textHitbox.endFill();
        this._textHitbox.interactive = this.enabled;

        this._textMask.clear();
        this._textMask.beginFill(0);
        this._textMask.drawRect(padding[3], 0, inputBounds.width - padding[3] - padding[1], inputBounds.height);
        this._textMask.endFill();

        this.img.width = inputBounds.width;
        this.img.height = inputBounds.height;
    }


    private _ontextFocus() {
        this.htmlInputShared.visible = true;
        //sometimes the input is not being focused by the mouseclick
        setTimeout(this._ensureFocus.bind(this), 10);
    }

    private _ensureFocus() {
        if (!this._hasFocus())
            this.focus();
    }

    private _derivetextStyle() {
        const style: TAny = new PIXI.TextStyle()

        for (const key in this._inputStyle) {
            switch (key) {
                case 'color':
                    style.fill = this._inputStyle.color;
                    break
                case 'fontFamily':
                case 'fontSize':
                case 'fontWeight':
                case 'fontVariant':
                case 'fontStyle':
                    style[key] = this._inputStyle[key];
                    break
                case 'letterSpacing':
                    style.letterSpacing = parseFloat(this._inputStyle.letterSpacing as TAny);
                    break
            }
        }

        if (this._inputStyle.multiline) {
            style.lineHeight = parseFloat(style.fontSize);
            style.wordWrap = true;
            style.wordWrapWidth = this.htmlInputShared.getDOMInputBounds().width;
        }

        if (this.htmlInputShared.value.length === 0)
            style.fill = this.placeholderColor;

        return style;
    }

    private _derivetextPadding() {
        const indent = this._inputStyle.textIndent ? parseFloat(this._inputStyle.textIndent) : 0

        if (this._inputStyle.padding && this._inputStyle.padding.length > 0) {
            const components = this._inputStyle.padding.trim().split(' ');

            if (components.length == 1) {
                const padding = parseFloat(components[0]);
                return [padding, padding, padding, padding + indent];
            } else if (components.length == 2) {
                const paddingV = parseFloat(components[0]);
                const paddingH = parseFloat(components[1]);
                return [paddingV, paddingH, paddingV, paddingH + indent];
            } else if (components.length == 4) {
                const padding = components.map(component => {
                    return parseFloat(component);
                })
                padding[3] += indent;
                return padding;
            }
        }

        return [0, 0, 0, indent];
    }

    private _derivetextText() {
        return this.htmlInputShared.value.length === 0 ? this.placeholder : this.htmlInputShared.value;
    }

    // private _updateFontMetrics() {
    //     const style = this._derivetextStyle();
    //     const font = style.toFontString();
    //     this._fontMetrics = PIXI.TextMetrics.measureFont(font);
    // }

    // HELPER FUNCTIONS

    private _hasFocus() {
        return document.activeElement === this.htmlInputShared.domInput;
    }

    private _getCanvasBounds() {
        if (this._lastRenderer) {
            const rect = this._lastRenderer.view.getBoundingClientRect();
            const bounds = { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
            bounds.left += window.scrollX;
            bounds.top += window.scrollY;
            return bounds;
        }
        return undefined;
    }

    private _getDOMRelativeWorldTransform() {
        if (this._lastRenderer) {
            const canvasBounds = this._lastRenderer.view.getBoundingClientRect();
            const matrix = this.container.worldTransform.clone();

            matrix.scale(this._resolution, this._resolution);
            matrix.scale(canvasBounds.width / this._lastRenderer.width,
                canvasBounds.height / this._lastRenderer.height)
            return matrix;
        }

    }

    private _pixiMatrixToCSS(m: TAny) {
        return 'matrix(' + [m.a, m.b, m.c, m.d, m.tx, m.ty].join(',') + ')';
    }

    private _comparePixiMatrices(m1: TAny, m2: TAny) {
        if (!m1 || !m2) return false
        return (
            m1.a == m2.a
            && m1.b == m2.b
            && m1.c == m2.c
            && m1.d == m2.d
            && m1.tx == m2.tx
            && m1.ty == m2.ty
        )
    }

    private _compareClientRects(r1: TAny, r2: TAny) {
        if (!r1 || !r2) return false
        return (
            r1.left == r2.left
            && r1.top == r2.top
            && r1.width == r2.width
            && r1.height == r2.height
        )
    }

    public release() {

        super.release();

        this.container.removeChild(this._text);
        this.container.removeChild(this._textHitbox);

        this.img.release();

        this._text.destroy();
        this._textHitbox && this._textHitbox.destroy();

        this.htmlInputShared.release();

        this.offAll(ComponentEvent.STATE_CHANGE);

    }


}

