import HtmlInput from "./InputText/HtmlInput";
import { KeyEvent} from "../interaction/InteractionEvent";
import { BaseProps } from "../layout/BaseProps";
import { CSSStyle } from "../layout/CSSStyle";
import {  componentToHex } from "../core/Utils";
import { InputBase } from "../core/InputBase";
import { Image } from "./Image";


export class TextInputProps extends BaseProps{
    public constructor(){
        super();
    }
    /**
     * 设置字体大小
     */
    fontSize = 25;

    fontFamily:string|undefined;

    color = 0x26272e;
    /**
     * 设置文本
     */
    text = '';
    /**
     * 预览文字
     */
    placeholder = '';
    /** 
     * 状态皮肤，
     */
    up?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    down?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    move?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    disabled?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 是否可交互
     */
    enabled = true;
    /**
     * 设置最大可输入
     */
    maxLength = 99999;
    /** 
     * 过滤表达式
     */
    restrict: RegExp | undefined;
    /** 状态展示 */
    readonly img = new Image();
}
/**
 * @example
 * new PIXI.TextInput
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
                color: '#000000',
                lineHeight: '1'
            },
            {
                multiline:multiline
            }
        ) as TAny;
        
        this.htmlInputShared = new HtmlInput(this._inputStyle.multiline);
        this.htmlInputShared.setStyle(this._inputStyle);
        this.htmlInputShared.on(KeyEvent.input,this._onInputInput,this);
        this.htmlInputShared.on('focus',this._onFocused,this);
        this.htmlInputShared.on('blur',this._onBlurred,this);

        this._textHitbox = new PIXI.Graphics();
        this._textHitbox.name = "_textHitbox";
        this._textHitbox.alpha = 0;
        this._textHitbox.interactive = true;
        this._textHitbox.cursor = 'text';
        this._textHitbox.on('pointerdown', this._ontextFocus,this);
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
    }

    protected initProps(){
        let props = this.props; 
        props.img.props.fillMode = "scale";
        props.img.props.scale9Grid = [3,3,3,3];
        this.addChildAt(props.img,0);
    }

    /** 子类可以重写 */
    public get props():TextInputProps{

        if(this._props){
            return this._props;
        }

        this._props = new TextInputProps().proxyData;
        this.initProps();

        return this._props;
    }

    protected _props?:TAny;   
    protected _oldState = "";

    private htmlInputShared: HtmlInput;
   
    private _lastRenderer: PIXI.Renderer|undefined;
    private _resolution = 1;
    private _canvasBounds:  { top: number; left: number; width: number; height: number}|undefined;
    private _previous: {canvasBounds: TAny;worldTransform: TAny;worldAlpha: TAny;worldVisible: TAny}|TAny = {};

    private _inputStyle: InputStyle;
    /**
     * 预览文字的样式
     */
    private placeholderColor = 0xa9a9a9;
    private _domVisible = true;
    
    private _textHitbox: PIXI.Graphics;
    private _textMask: PIXI.Graphics;
    private _text: PIXI.Text;


    private _fontMetrics: PIXI.IFontMetrics|undefined;
    protected state = 'DEFAULT';
    
    // GETTERS & SETTERS
    public update(_style:CSSStyle,renderer: PIXI.Renderer){

        let {props,htmlInputShared} = this;

        if(this.props.dirty.dirty){
            this.props.dirty.dirty = false;
            htmlInputShared.maxlength = props.maxLength;
            htmlInputShared.placeholder = props.placeholder;
            htmlInputShared.disabled = !props.enabled;
            htmlInputShared.restrict = props.restrict;
            htmlInputShared.value = props.text;
    
            this.setInputStyle("fontFamily",props.fontFamily);
            this.setInputStyle("fontSize",props.fontSize + "px");
            this.setInputStyle("width",this._width + "px");
            this.setInputStyle("height",this._height + "px");
            this.setInputStyle("color", "#" + componentToHex(props.color));
    
            this.render(renderer);
        }

        if(this.currentState !== this._oldState){
            if(!props.enabled){
                this.currentState = "disabled";
            }
            let currentState = (props as TAny)[this.currentState];
            if(currentState){
                this._oldState = this.currentState;
                props.img.props.src = currentState;
            }
        }

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
    private setInputStyle(key: TAny, value: TAny) {
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key,value);
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


    private  _setState(state: string) {
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
        if (this._needsUpdate()){
            this._updateSubstitution();
        }
           
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

    private _updatetext() {

        const padding = this._derivetextPadding();
        const inputBounds = this.htmlInputShared.getDOMInputBounds();

        this._text.style = this._derivetextStyle();
        this._text.style.padding = Math.max(... padding);
        this._text.y = this._inputStyle.multiline ? padding[0] : (inputBounds.height - this._text.height) / 2;
        this._text.x = padding[3];
        if(this._inputStyle.multiline){
            this._text.style.wordWrap = true;
            this._text.style.wordWrapWidth = inputBounds.width;
            this._text.style.breakWords = true;
        }

        this._text.text = this._derivetextText();
        this.props.text = this._text.text;
        this.props.dirty.dirty = false;

        this._textHitbox.clear();
        this._textHitbox.beginFill(0);
        this._textHitbox.drawRect(0, 0, inputBounds.width, inputBounds.height);
        this._textHitbox.endFill();
        this._textHitbox.interactive = this.props.enabled;

        this._textMask.clear();
        this._textMask.beginFill(0);
        this._textMask.drawRect(padding[3], 0, inputBounds.width - padding[3] - padding[1], inputBounds.height);
        this._textMask.endFill();

        this.props.img.style.width =  inputBounds.width;
        this.props.img.style.height = inputBounds.height;
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
        return this.htmlInputShared.value.length === 0 ? this.props.placeholder : this.htmlInputShared.value;
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

    public release() {

        super.release();

        this.container.removeChild(this._text);
        this.container.removeChild(this._textHitbox);

        this.props.img.release();

        this._text.destroy();
        this._textHitbox && this._textHitbox.destroy();

        this.htmlInputShared.release();

    }

    
}

