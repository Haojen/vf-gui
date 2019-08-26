import DynamicText from "./DynamicText";
import { HorizontalAlignEnum } from "../Enum/AlignEnum";
import { DynamicAtlas } from "./DynamicAtlas";

/**
 * 动态文本的样式描述
 */
export default class DynamicTextStyle{
    public constructor(_parent?: DynamicText){
        this._parent = _parent;
    }
    private _parent: DynamicText|undefined;
    /** 数据合并时的验证刷新字段，当false时，数据合并中，此时的脏属性设置并会被执行更新父级操作 */
    private respectDirty = true;
    private _scale = 1;
    private _align = HorizontalAlignEnum.left;
    private _fontFamily = 'Arial';
    private _fontSize = 26;
    private _fontWeight = 'normal';
    private _fontStyle = 'normal';
    private _letterSpacing = 0;
    private _lineHeight = 0;
    private _verticalAlign = 0;
    private _rotation = 0;
    private _skew = 0;
    private _tint = "#FFFFFF";
    private _fill = '#FFFFFF';
    private _shadow = '';
    private _stroke = 0;
    private _strokeFill = '';
    private _strokeShadow = '';
    private _wrap = true;
    private _breakWords = false;
    private _overflowX: "visible"|"hidden" = 'visible'; //visible|hidden
    private _overflowY: "visible"|"hidden" = 'visible'; //visible|hidden
    private _ellipsis = false;

    /**
     * 设置省略号
     * @param atlas 动态图集
     */
    public ellipsisSize(atlas: DynamicAtlas) {
        if (!this.ellipsis) 
            return 0;
        const charObj = (atlas.getCharObject(".", this));
        if(charObj){
            return (charObj.width + this._letterSpacing) * 3;
        }
        return 0;
    }

    /**
     * 克隆当前样式
     */
    public clone() {
        const style = new DynamicTextStyle();
        style.merge(this);
        return style;
    }

    /**
     * 合并样式到当前组件
     * @param style 要合并的样式
     */
    public merge(style: DynamicTextStyle|undefined) {
        if(style == undefined){
            return;
        }
        if(style instanceof DynamicTextStyle){
            this.respectDirty = false;
            const tempStyle: TAny = style;
            const tempThis: TAny = this;
            for (const param in tempStyle) {
                const val = tempStyle[param];
                if (typeof val === 'function' || param === 'respectDirty' || param === '_parent') continue;
                tempThis[param] = tempStyle[param];
            }
            this.respectDirty = true;
            this._dirty = true;
        }
    }

    /**
     * 获取当前字符的特定字符串形式的样式，以"|"分割  
     * 
     * 如： 字符|颜色|阴影|描边|描边色|描边阴影
     */
    public ctxKey(char: string) {
        return [char, this.fill, this.shadow, this.stroke, this.strokeFill, this.strokeShadow].join('|');
    }

    /** 
     * 获取特定格式的字体样式 fontWeight + fontStyle + fontSize + this.fontFamily;
     * 
     * 如：bold italic 26px Arial
     */
    public ctxFont() {
        const fontSize = Math.min(200, Math.max(1, this.fontSize || 26)) + "px ";
        const fontWeight = this.fontWeight === "bold" ? this.fontWeight + " " : "";
        const fontStyle = this.fontStyle === "italic" || this.fontStyle === "oblique" ? this.fontStyle + " " : "";
        return fontWeight + fontStyle + fontSize + this.fontFamily;
    }

    /** 设置脏渲染，当数据正在合并中时，并不会立即更新父级 */
    private set _dirty(value: boolean){
        if (this.respectDirty) {
            if (this._parent) {
                this._parent.dirtyStyle = value;
                this._parent.update();
            }
        }
    }

    /** 
     * 设置缩放 
     * @default 1
     */
    public get scale() {
        return this._scale;
    }
    public set scale(value: number) {
        if (value !== this._scale) {
            this._scale = value;
            this._dirty = true;
        }
    }
    /** 
     * 置居中方式 
     * @default left
     * @see AlignEnum.HorizontalAlignEnum
     */
    public get align() {
        return this._align;
    }
    public set align(value) {
        if (value !== this._align) {
            this._align = value;
            this._dirty = true;
        }
    }
    /** 
     * 设置字体
     * @default Arial
     */
    public get fontFamily() {
        return this._fontFamily;
    }
    public set fontFamily(value) {
        if (value !== this._fontFamily) {
            this._fontFamily = value;
            this._dirty = true;
        }
    }
    /** 
     * 设置字体大小
     * @default 26
     */
    public get fontSize() {
        return this._fontSize;
    }
    public set fontSize(value) {
        if (value !== this._fontSize) {
            this._fontSize = value;
            this._dirty = true;
        }
    }
    /** 
     * 设置字体粗细,normal系统默认，100，200，300...900
     * @default normal
     */
    public get fontWeight() {
        return this._fontWeight;
    }
    public set fontWeight(value) {
        if (value !== this._fontWeight) {
            this._fontWeight = value;
            this._dirty = true;
        }
    }
    /** 
     * 设置样式
     * @default normal
     * @see FontStyleEnum
     */
    public get fontStyle() {
        return this._fontStyle;
    }
    public set fontStyle(value) {
        if (value !== this._fontStyle) {
            this._fontStyle = value;
            this._dirty = true;
        }
    }
    /** 
     * 字符间距
     * @default 0
     */
    public get letterSpacing() {
        return this._letterSpacing;
    }
    public set letterSpacing(value) {
        if (value !== this._letterSpacing) {
            this._letterSpacing = value;
            this._dirty = true;
        }
    }
    /** 
     * 行高
     * @default 0
     */
    public get lineHeight() {
        return this._lineHeight;
    }
    public set lineHeight(value) {
        if (value !== this._lineHeight) {
            this._lineHeight = value;
            this._dirty = true;
        }
    }
    /** 
     * 水平居中方式
     * @default 0
     */
    public get verticalAlign() {
        return this._verticalAlign;
    }
    public set verticalAlign(value) {
        if (value !== this._verticalAlign) {
            this._verticalAlign = value;
            this._dirty = true;
        }
    }
    /** 
     * 旋转角度
     * @default 0
     */
    public get rotation() {
        return this._rotation;
    }
    public set rotation(value) {
        if (value !== this._rotation) {
            this._rotation = value;
            this._dirty = true;
        }
    }
    /** 
     * 斜切
     * @default 0
     */
    public get skew() {
        return this._skew;
    }
    public set skew(value) {
        if (value !== this._skew) {
            this._skew = value;
            this._dirty = true;
        }
    }
    /** 
     * 色调
     * @default #FFFFFF
     */
    public get tint() {
        return this._tint;
    }
    public set tint(value) {
        if (value !== this._tint) {
            this._tint = value;
            this._dirty = true;
        }
    }
    /** 
     * 填充色
     * @default #FFFFFF
     */
    public get fill() {
        return this._fill;
    }
    public set fill(value) {
        if (value !== this._fill) {
            this._fill = value;
            this._dirty = true;
        }
    }
    /** 
     * 阴影
     * @default ""
     */
    public get shadow() {
        return this._shadow;
    }
    public set shadow(value) {
        if (value !== this._shadow) {
            this._shadow = value;
            this._dirty = true;
        }
    }
    /** 
     * 文字描边行间距
     * @default 0
     */
    public get stroke() {
        return this._stroke;
    }
    public set stroke(value) {
        if (value !== this._stroke) {
            this._stroke = value;
            this._dirty = true;
        }
    }
    /** 
     * 文字描边填充色
     * @default ""
     */
    public get strokeFill() {
        return this._strokeFill;
    }
    public set strokeFill(value) {
        if (value !== this._strokeFill) {
            this._strokeFill = value;
            this._dirty = true;
        }
    }
    /** 
     * 文字描边填阴影色
     * @default ""
     */
    public get strokeShadow() {
        return this._strokeShadow;
    }
    public set strokeShadow(value) {
        if (value !== this._strokeShadow) {
            this._strokeShadow = value;
            this._dirty = true;
        }
    }
    /** 
     * 是否自动换行
     * @default ""
     */
    public get wrap() {
        return this._wrap;
    }
    public set wrap(value) {
        if (value !== this._wrap) {
            this._wrap = value;
            this._dirty = true;
        }
    }
    /** 
     * 自动换行 - 是否按字符连接方式换行
     * @default ""
     */
    public get breakWords() {
        return this._breakWords;
    }
    public set breakWords(value) {
        if (value !== this._breakWords) {
            this._breakWords = value;
            this._dirty = true;
        }
    }
    /** 
     * 文字超出显示范围后的处理方式 visible|hidden
     * visible 内容不会被修剪，会呈现在元素框之外。
     * hidden 内容会被修剪，并且其余内容是不可见的。
     * @default "visible"
     */
    public get overflowX() {
        return this._overflowX;
    }
    public set overflowX(value) {
        if (value !== this._overflowX) {
            this._overflowX = value;
            this._dirty = true;
        }
    }
    /** 
     * 文字超出显示范围后的处理方式 visible|hidden
     * visible 内容不会被修剪，会呈现在元素框之外。
     * hidden 内容会被修剪，并且其余内容是不可见的。
     * @default "visible"
     */
    public get overflowY() {
        return this._overflowY;
    }
    public set overflowY(value) {
        if (value !== this._overflowY) {
            this._overflowY = value;
            this._dirty = true;
        }
    }
    /** 
     * 是否开启多行文字溢出显示... 
     * @default false
     */
    public get ellipsis() {
        return this._ellipsis;
    }
    public set ellipsis(value) {
        if (value !== this._ellipsis) {
            this._ellipsis = value;
            this._dirty = true;
        }
    }
}
