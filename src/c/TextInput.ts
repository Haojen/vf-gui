import HtmlInput from "./InputText/HtmlInput";
import { KeyEvent} from "../interaction/InteractionEvent";
import {UIBase} from "../core/UIBase";


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
export class TextInput extends UIBase {

    constructor(styles?: TAny) {
        super();

        this._inputStyle = Object.assign(
            {
                position: 'absolute',
                background: 'none',
                border: 'none',
                outline: 'none',
                transformOrigin: '0 0',
                padding: '5px 8px',
                color: '#000000',
                lineHeight: '1'
            },
            styles
        ) as TAny;
        
        this.htmlInputShared = new HtmlInput(this._inputStyle.multiline);
        this.htmlInputShared.setStyle(this._inputStyle);
        this.htmlInputShared.on(KeyEvent.input,this._onInputInput,this);
        this.htmlInputShared.on('focus',this._onFocused,this);
        this.htmlInputShared.on('blur',this._onBlurred,this);

        this.substituteText = true;
        this._setState('DEFAULT'); 
        this.container.isEmitRender = true;
        this.container.on("render",this.render,this);

    }
    private htmlInputShared: HtmlInput;
    private _inputStyle: InputStyle;
    private _disabled = false;
    private _maxLength = NaN;
    private _previous: {canvasBounds: TAny;worldTransform: TAny;worldAlpha: TAny;worldVisible: TAny}|TAny = {};
    private _domVisible = true;
    private _placeholder = '';
    private _placeholderColor = 0xa9a9a9;
    private _substituted = false;
    private _lastRenderer: PIXI.Renderer|undefined;
    private _resolution = 1;
    private _canvasBounds:  { top: number; left: number; width: number; height: number}|undefined;
    private _surrogateHitbox: PIXI.Graphics|undefined;
    private _surrogateMask: PIXI.Graphics|undefined;
    private _surrogate: PIXI.Text|undefined;
    private _fontMetrics: PIXI.IFontMetrics|undefined;
    protected state = 'DEFAULT';
    
    // GETTERS & SETTERS
    public update(){
        if(this._surrogate){
            //this._surrogate.width = this.actualWidth;
            //this._surrogate.height = this.actualHeight;
        }
        this.setInputStyle("width",this.actualWidth.toString() + "px");
        this.setInputStyle("height",this.actualHeight.toString() + "px");
    }
    
    /**
     * 预览文字
     */
    public get placeholder() {
        return this._placeholder;
    }
    public set placeholder(text) {
        this._placeholder = text;
        if (this._substituted) {
            this._updateSurrogate()
            this.htmlInputShared.placeholder = '';
        } else {
            this.htmlInputShared.placeholder = text;
        }
    }

    /**
     * 设置不可用
     */
    public get disabled() {
        return this._disabled;
    }
    public set disabled(value) {
        this._disabled = value;
        this.htmlInputShared.disabled = value;
        this._setState(value ? 'DISABLED' : 'DEFAULT')
    }

    /**
     * 设置最大可输入
     */
    public get maxLength() {
        return this._maxLength;
    }
    public set maxLength(value) {
        this._maxLength = value;
        this.htmlInputShared.setAttribute('maxlength', value.toString());
    }
    /** 
     * 过滤表达式
     */
    public get restrict() {
        return this.htmlInputShared.restrict;
    }
    public set restrict(regex) {
        this.htmlInputShared.restrict = regex;
    }
    /**
     * 设置字体大小
     */
    public get fontSize() {
        if(this._inputStyle.fontSize == null){
            return NaN;
        }
        return parseInt(this._inputStyle.fontSize);
    }
    public set fontSize(value: number) {
        const str = value + "px";
        this.setInputStyle("fontSize",str);
    }
    /** 设置字体 */
    public get fontFamily() {
        return this._inputStyle.fontFamily;
    }
    public set fontFamily(value: string) {
        this.setInputStyle("fontFamily",value);
    }
    
    /**
     * 设置字体颜色
     */
    public get fill() {
        if(this._inputStyle.color == null){
            return "";
        }
        return this._inputStyle.color;
    }
    public set fill(value: string) {
        this.setInputStyle("color",value.toString());
    }
    
    /** 
     * 设置文本 
     */
    public get text() {
        return this.htmlInputShared.value;
    }
    public set text(text) {
        this.htmlInputShared.value = text;
        if (this._substituted) this._updateSurrogate();
    }

 
    private get substituteText() {
        return this._substituted;
    }
    private set substituteText(substitute) {
        if (this._substituted == substitute)
            return;

        this._substituted = substitute;

        if (substitute) {
            this._createSurrogate();
            this._domVisible = false;
        } else {
            this._destroySurrogate();
            this._domVisible = true;
        }
        this.placeholder = this._placeholder;
        this._update();
    }

    /** 
     * 设置焦点 
     */
    public focus() {
        this.htmlInputShared.setStyle(this._inputStyle);
        if (this._substituted && !this._domVisible)
            this.htmlInputShared.visible = true;
        this.htmlInputShared.value = this.text;
        this.htmlInputShared.focus();

    }
    /** 
     * 失去焦点 
     */
    public blur() {
        this.htmlInputShared.blur();
    }

    /**
     * 全选
     */
    public select() {
        this.focus()
        this.htmlInputShared.select();
    }

    /**
     * 设置css style样式
     * @param key 健
     * @param value 值
     */
    public setInputStyle(key: TAny, value: TAny) {
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key,value);
        if (this._substituted && (key === 'fontFamily' || key === 'fontSize'))
            this._updateFontMetrics();

        if (this._lastRenderer)
            this._update();
    }


    // SETUP
    private _onInputInput() {
        if (this._substituted)
            this._updateSubstitution();
    }

    private _onFocused() {
        this._setState('FOCUSED');
    }

    private _onBlurred() {
        this._setState('DEFAULT');
    }


    private  _setState(state: string) {
        this.state = state;
        if (this._substituted)
            this._updateSubstitution();
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
        if (this._needsUpdate())
            this._update();
    }

    private _update() {
        this._updateDOMInput();
        if (this._substituted) this._updateSurrogate();
        
    }

    private _updateSubstitution() {
        if (this.state === 'FOCUSED') {
            this._domVisible = true;
            if(this._surrogate)
                this._surrogate.visible = false;
            this.text.length === 0
        } else {
            this._domVisible = false;
            if(this._surrogate)
                this._surrogate.visible = true;
        }
        this._updateDOMInput();
        this._updateSurrogate();
    }

    private _updateDOMInput() {
        if (!this._canvasBounds)
            return;
        const cb = this._canvasBounds;
        const transform = this._pixiMatrixToCSS(this._getDOMRelativeWorldTransform());
        this.htmlInputShared.updatePostion(cb.top,cb.left,transform,this.container.worldAlpha);
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

    // INPUT SUBSTITUTION
    private _createSurrogate() {
        this._surrogateHitbox = new PIXI.Graphics();
        this._surrogateHitbox.name = "_surrogateHitbox";
        this._surrogateHitbox.alpha = 0;
        this._surrogateHitbox.interactive = true;
        this._surrogateHitbox.cursor = 'text';
        this._surrogateHitbox.on('pointerdown', this._onSurrogateFocus,this);
        this.container.addChild(this._surrogateHitbox);

        this._surrogateMask = new PIXI.Graphics();
        this._surrogateMask.name = "_surrogateMask";
        this.container.addChild(this._surrogateMask);

        this._surrogate = new PIXI.Text('', {});
        this._surrogate.name = "_surrogate";
        this.container.addChild(this._surrogate);

        this._surrogate.mask = this._surrogateMask;

        this._updateFontMetrics();
        this._updateSurrogate();
    }

    private _updateSurrogate() {
        const padding = this._deriveSurrogatePadding();
        const inputBounds = this.htmlInputShared.getDOMInputBounds();
        if(this._surrogate){
            this._surrogate.style = this._deriveSurrogateStyle();
            this._surrogate.style.padding = Math.max(... padding);
            this._surrogate.y = this._inputStyle.multiline ? padding[0] : (inputBounds.height - this._surrogate.height) / 2;
            this._surrogate.x = padding[3];
            if(this._inputStyle.multiline){
                this._surrogate.style.wordWrap = true;
                this._surrogate.style.wordWrapWidth = inputBounds.width;
                this._surrogate.style.breakWords = true;
            }
            this._surrogate.text = this._deriveSurrogateText();
        }
        this._updateSurrogateHitbox(inputBounds);
        this._updateSurrogateMask(inputBounds, padding);
    }

    private _updateSurrogateHitbox(bounds: ClientRect) {
        if(this._surrogateHitbox){
            this._surrogateHitbox.clear();
            this._surrogateHitbox.beginFill(0);
            this._surrogateHitbox.drawRect(0, 0, bounds.width, bounds.height);
            this._surrogateHitbox.endFill();
            this._surrogateHitbox.interactive = !this._disabled;
        }
    }

    private _updateSurrogateMask(bounds: ClientRect, padding: number[]) {
        if(this._surrogateMask){
            this._surrogateMask.clear();
            this._surrogateMask.beginFill(0);
            this._surrogateMask.drawRect(padding[3], 0, bounds.width - padding[3] - padding[1], bounds.height);
            this._surrogateMask.endFill();
        }
    }

    private _destroySurrogate() {
        if (!this._surrogate) return;
        if (!this._surrogateHitbox) return

        this.container.removeChild(this._surrogate);
        this.container.removeChild(this._surrogateHitbox);

        this._surrogate.destroy();
        this._surrogateHitbox && this._surrogateHitbox.destroy();

        this._surrogate = undefined;
        this._surrogateHitbox = undefined;
    }

    private _onSurrogateFocus() {
        this.htmlInputShared.visible = true;
        //sometimes the input is not being focused by the mouseclick
        setTimeout(this._ensureFocus.bind(this), 10);
    }

    private _ensureFocus() {
        if (!this._hasFocus())
            this.focus();
    }

    private _deriveSurrogateStyle() {
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
            style.fill = this._placeholderColor;

        return style;
    }

    private _deriveSurrogatePadding() {
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

    private _deriveSurrogateText() {
        return this.htmlInputShared.value.length === 0 ? this._placeholder : this.htmlInputShared.value;
    }

    private _updateFontMetrics() {
        const style = this._deriveSurrogateStyle();
        const font = style.toFontString();
        this._fontMetrics = PIXI.TextMetrics.measureFont(font);
    }

    // HELPER FUNCTIONS

    private _hasFocus() {
        return document.activeElement === this.htmlInputShared.domInput;
    }

    private _getCanvasBounds() {
        if(this._lastRenderer){
            const rect = this._lastRenderer.view.getBoundingClientRect();
            const bounds = { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
            bounds.left += window.scrollX;
            bounds.top += window.scrollY;
            return bounds;
        }
        return undefined;
    }

    private _getDOMRelativeWorldTransform() {
        if(this._lastRenderer){
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
}

