import { DisplayObject } from "../core/DisplayObject";
import * as CSSFunction from "./CSSSSystem";
import { ComponentEvent } from "../interaction/Index";
import { getStringFunctionParam } from "../utils/Utils";


/**
 * 	定位方式
 *
 *  元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
 *
 * 	absolute 生成绝对定位的元素，相对于第一个父元素进行定位。
 *
 *  fixed 生成绝对定位的元素，相对于舞台进行定位。
 *
 *  static 没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
 *
 */
export type Position = "absolute" | "fixed" | "static";

/** 对齐方式 父级如果是grid布局，会忽略当前居中模式 */
export type Align = "flex-start" | "flex-end" | "center";

/** 布局模式 */
export type Display = "none" | "block" | "grid";

function formatRelative(value: number | string | undefined): { percent: number; value: number } {

    if (value == undefined) {
        return { percent: NaN, value: NaN };
    }
    if (typeof value === "number") {
        return { percent: NaN, value: value };
    }
    const str = value;
    const index = str.indexOf("%");
    if (index == -1) {
        return { percent: NaN, value: +str };
    }
    const percent = +str.substring(0, index);
    return { percent: Math.min(percent * 0.01, 1), value: NaN };
}

/**
 * 组件样式表
 */
export class CSSStyle {

    public constructor(target: DisplayObject) {
        this.parent = target;
        target.on(ComponentEvent.RESIZE, this.onResize, this);
    }
    public parent: DisplayObject;

    public release() {
        this.parent.off(ComponentEvent.RESIZE, this.onResize, this);
    }
    /**
     * 规定元素的显示类型。布局模式
     *
     * grid 模式下，子节点会忽略left,top,right，bottom,width,height等
     *
     * none 模式下，忽略style
     * */
    private _display: Display = "block";
    public get display(): Display {
        return this._display;
    }
    public set display(value: Display) {
        this._display = value;
    }
    /**
     * 规定元素的定位类型。
     * */
    private _position: Position = "absolute";
    public get position(): Position {
        return this._position;
    }
    public set position(value: Position) {
        this._position = value;
    }

    /**
     * 在容器里面的水平位置（左中右）
     */
    private _justifyContent?: Align;
    public get justifyContent() {
        return this._justifyContent;
    }
    public set justifyContent(value) {
        this._justifyContent = value;
    }

    /**
     * 在容器里面的垂直位置（上中下）
     */
    private _alignContent?: Align;
    public get alignContent() {
        return this._alignContent;
    }
    public set alignContent(value) {
        this._alignContent = value;
    }
    /**
     * 基于 网格列的维度，去定义网格线的名称和网格轨道的尺寸大小。
     *
     * 方式一 [80,90,100]|["30%","40%","30%"] 第一列宽度80，第二列宽度，第三列宽度100
     *
     * 方式二 ["repeat",3,100] 三列，宽度都为100像素
     */
    private _gridTemplateColumns?: number[] | string[] | [string, number, number];
    public get gridTemplateColumns() {
        return this._gridTemplateColumns;
    }
    public set gridTemplateColumns(value) {
        this._gridTemplateColumns = value;
    }

    /**
     * 设置列间距
     */
    private _gridColumnGap?: number;
    public get gridColumnGap() {
        return this._gridColumnGap;
    }
    public set gridColumnGap(value) {
        this._gridColumnGap = value;
    }
    /**
     * 基于 网格行的维度，去定义网格线的名称和网格轨道的尺寸大小。
     *
     * 方式一 [80,90,100]|["30%","40%","30%"] 第一行高度80，第二行高度90，第三行行高度100
     *
     * 方式二 ["repeat",3,100] 三行，宽度都为100像素
     */
    private _gridTemplateRows?: number[] | string[] | [string, number, number];
    public get gridTemplateRows() {
        return this._gridTemplateRows;
    }
    public set gridTemplateRows(value) {
        this._gridTemplateRows = value;
    }
    /**
     * 设置行间距
     */
    private _gridRowGap?: number;
    public get gridRowGap() {
        return this._gridRowGap;
    }
    public set gridRowGap(value) {
        this._gridRowGap = value;
    }

    /**
     * 表示显示对象的宽度，以像素为单位。
     * */
    public get width() {
        return this.parent.width;
    }
    public set width(value: number | string) {
        const relative = formatRelative(value);
        this.parent.width = relative.value;
        this.parent.percentWidth = relative.percent;
    }
    /**
     * 表示显示对象的高度，以像素为单位。
     * */
    public get height() {
        return this.parent.height;
    }
    public set height(value: number | string) {
        const relative = formatRelative(value);
        this.parent.height = relative.value;
        this.parent.percentHeight = relative.percent;
    }

    /**
     * 设置元素的最小宽度。
     */
    public get minWidth() {
        return this.parent.minWidth;
    }
    public set minWidth(value) {
        this.parent.minWidth = value;
    }
    /**
     * 设置元素的最大宽度。
     */
    public get maxWidth() {
        return this.parent.maxWidth;
    }
    public set maxWidth(value) {
        this.parent.maxWidth = value;
    }

    /**
     * 设置元素的最小高度。
     */
    public get maxHeight() {
        return this.parent.maxHeight;
    }
    public set maxHeight(value) {
        this.parent.maxHeight = value;
    }
    /**
     * 设置元素的最大高度。
     * */
    public get minHeight() {
        return this.parent.minHeight;
    }
    public set minHeight(value) {
        this.parent.minHeight = value;
    }

    /**
     * 设置定位元素左外边距边界与其容器左边界之间的偏移。
     * */
    public get left() {
        return this.parent.left;
    }
    public set left(value) {
        this.parent.left = value;
    }
    /**
     * 设置定位元素的上外边距边界与其容器上边界之间的偏移。
     * */
    public get top() {
        return this.parent.top;
    }
    public set top(value) {
        this.parent.top = value;
    }
    /**
     * 设置定位元素右外边距边界与其容器右边界之间的偏移。
     * */
    public get right() {
        return this.parent.right;
    }
    public set right(value) {
        this.parent.right = value;
    }
    /**
     * 设置定位元素下外边距边界与其容器下边界之间的偏移。
     * */
    public get bottom() {
        return this.parent.bottom;
    }
    public set bottom(value) {
        this.parent.bottom = value;
    }

    /**
     * 缩放
     * */
    public get scaleX() {
        return this.parent.scaleX;
    }
    public set scaleX(value) {
        this.parent.scaleX = value;
    }
    /**
     * 缩放
     * */
    public get scaleY() {
        return this.parent.scaleY;
    }
    public set scaleY(value) {
        this.parent.scaleY = value;
    }
    /**
     * 设置元素水平拉伸扭曲（角度）。
     * */
    public get skewX() {
        return this.parent.skewX;
    }
    public set skewX(value) {
        this.parent.skewX = value;
    }
    /**
     * 设置元素垂直拉伸扭曲（角度）。
     * */
    public get skewY() {
        return this.parent.skewY;
    }
    public set skewY(value) {
        this.parent.skewY = value;
    }

    /**
     * 设置元素旋转 （角度）
    */
    public get rotate() {
        return this.parent.rotation;
    }
    public set rotate(value) {
        this.parent.rotation = value;
    }
    /**
     * 设置元素旋转 （角度）
    */
    public get rotation() {
        return this.parent.rotation;
    }
    public set rotation(value: number) {
        this.parent.rotation = value;
    }

    /**
     * 轴点 像素值
     */
    public get pivotX() {
        return this.parent.pivotX;
    }
    public set pivotX(value) {
        this.parent.pivotX = value;
    }
    /**
     * 轴点 像素值
     */
    public get pivotY() {
        return this.parent.pivotY;
    }
    public set pivotY(value) {
        this.parent.pivotY = value;
    }

    /**
      * 调整元素的色调，取消设置0xFFFFFF
      */
    public get tint() {
        return this.parent.tint;
    }
    public set tint(value) {
        this.parent.tint = value;
    }

    /**
     * 表示指定对象的 Alpha 透明度值。有效值为0（完全透明）～ 1（完全不透明）。
     * */
    public get alpha() {
        return this.parent.alpha;
    }
    public set alpha(value) {
        this.parent.alpha = value;
    }

    /**
     * 显示对象是否可见
     * */
    public get visible() {
        return this.parent.visible;
    }
    public set visible(value) {
        this.parent.visible = value;
    }
    public get visibility() {
        return this.parent.visible ? "visible" : "hidden";
    }
    public set visibility(value: "visible" | "hidden") {
        this.visible = value === "hidden" ? false : true;
    }


    /**
     * 设置元件的背景颜色。（16进制数字0xffffff
     * */
    private _backgroundColor?: number;
    public get backgroundColor() {
        return this._backgroundColor;
    }
    public set backgroundColor(value) {
        if (value === this.backgroundColor) {
            return;
        }
        this._backgroundColor = value;
        CSSFunction.backgroundColor(this.parent);

    }

    /**
     * 设置元素的背景图像。backgroundImage = "./xxx.png"
     * */
    private _backgroundImage?: PIXI.Texture | string;
    public get backgroundImage() {
        return this._backgroundImage;
    }
    public set backgroundImage(value) {
        this._backgroundImage = value;
        CSSFunction.backgroundImage(this.parent);
    }
    /**
     * 设置 backgroundImage 后 ，设置背景图像的X位置
     * */
    private _backgroundPositionX?: number;
    public get backgroundPositionX() {
        return this._backgroundPositionX;
    }
    public set backgroundPositionX(value) {
        this._backgroundPositionX = value;
        CSSFunction.backgroundPositionSize(this.parent);
    }
    /**
     * 设置 backgroundImage 后 ，设置背景图像的Y位置
     * */
    private _backgroundPositionY?: number;
    public get backgroundPositionY() {
        return this._backgroundPositionY;
    }
    public set backgroundPositionY(value) {
        this._backgroundPositionY = value;
        CSSFunction.backgroundPositionSize(this.parent);
    }
    /**
     * 设置 backgroundImage 后， 规定背景图像的尺寸。 [width,height]
     * */
    private _backgroundSize?: number[];
    public get backgroundSize() {
        return this._backgroundSize;
    }
    public set backgroundSize(value) {
        this._backgroundSize = value;
        CSSFunction.backgroundPositionSize(this.parent);
    }
    /**
     * 设置 backgroundImage 后，设置是否及如何重复背景图像。
     * repeat重复
     * no-repeat不重复，
     */
    private _backgroundRepeat: "no-repeat" | "repeat" = "no-repeat";
    public get backgroundRepeat() {
        return this._backgroundRepeat;
    }
    public set backgroundRepeat(value) {
        this._backgroundRepeat = value;
        CSSFunction.backgroundRepeat(this.parent);
    }



    /**
     * 遮罩图
     */
    private _maskImage?: string | PIXI.Graphics | PIXI.Texture | DisplayObject;
    public get maskImage() {
        return this._maskImage;
    }
    public set maskImage(value) {
        this._maskImage = value;
        CSSFunction.maskImage(this.parent);
    }
    /**
     * 设置位数 [x,y]
     */
    private _maskPosition?: number[];
    public get maskPosition() {
        return this._maskPosition;
    }
    public set maskPosition(value) {
        this._maskPosition = value;
        CSSFunction.maskPosition(this.parent);

    }
    /**
     * 设置遮罩位图的大小
     */
    private _maskSize?: number[];
    public get maskSize() {
        return this._maskSize;
    }
    public set maskSize(value) {
        this._maskSize = value;
        CSSFunction.maskSize(this.parent);
    }

    /**
     * 设置滤镜
     *
     * 支持 blur(number)
     */
    private _filter?: string;
    public get filter() {
        return this._filter;
    }
    public set filter(value: string | undefined) {
        if (value === this._filter) {
            return;
        }
        this._filter = value;
        if (value === undefined || value === 'none') {
            this.parent.container.filters = [];
            return;
        }
        const target = getStringFunctionParam(value);
        switch (target.key) {
            case "blur":
                this.parent.filterBlur = target.value;
                break;
            case "grayscale":
                this.parent.filterGrayscale = target.value;
                break;
            case "outline":
                this.parent.filterOutline = value;
                break;
        }
    }


    /**
     * 设置鼠标样式
     */
    public get cursor(){
        return this.parent.container.cursor;
    }
    public set cursor(value: string){
        this.parent.container.cursor = value;
    }




    /**
     * 文本颜色，16进制
     * */
    private _color?: number | number[] = 0xfffff0;
    public get color() {
        return this._color;
    }
    public set color(value) {
        this._color = value;
        CSSFunction.color(this.parent, "color", value);
    }
    /** 字符间距 */
    private _letterSpacing?: number;
    public get letterSpacing() {
        return this._letterSpacing;
    }
    public set letterSpacing(value) {
        this._letterSpacing = value;
        CSSFunction.updateFontStyle(this.parent, "letterSpacing", value);
    }
    /**
     * 是否自动换行
     * */
    private _wordWrap = false;
    public get wordWrap() {
        return this._wordWrap;
    }
    public set wordWrap(value) {
        this._wordWrap = value;
        CSSFunction.updateFontStyle(this.parent, "wordWrap", value);
    }
    /**
     * 自动换行的宽度
     * */
    private _wordWrapWidth?: number;
    public get wordWrapWidth() {
        return this._wordWrapWidth;
    }
    public set wordWrapWidth(value) {
        this._wordWrapWidth = value;
        CSSFunction.updateFontStyle(this.parent, "wordWrapWidth", value);
    }
    /**
     * 多行文本(wordWrap = true) - 对齐方式
     * */
    private _textAlign: "left" | "right" | "center" = "center";
    public get textAlign() {
        return this._textAlign;
    }
    public set textAlign(value) {
        this._textAlign = value;
        CSSFunction.updateFontStyle(this.parent, "textAlign", value);
        CSSFunction.updateFontStyle(this.parent, "align", value);

    }
    /**
     * 多行文本(wordWrap = true) - 行高
     * */
    private _lineHeight?: number;
    public get lineHeight() {
        return this._lineHeight;
    }
    public set lineHeight(value) {
        this._lineHeight = value;
        CSSFunction.updateFontStyle(this.parent, "lineHeight", value);
    }
    /** 字体 示例：fontFamily = "\"Comic Sans MS\", cursive, sans-serif" */
    private _fontFamily?: string | string[];
    public get fontFamily() {
        return this._fontFamily;
    }
    public set fontFamily(value) {
        this._fontFamily = value;
        CSSFunction.updateFontStyle(this.parent, "fontFamily", value);
    }
    /** 字体大小 */
    private _fontSize = 22;
    public get fontSize() {
        return this._fontSize;
    }
    public set fontSize(value) {
        this._fontSize = value;
        CSSFunction.updateFontStyle(this.parent, "fontSize", value);
    }
    /** 字体样式 */
    private _fontStyle: "normal" | "italic" | "oblique" = "normal";
    public get fontStyle() {
        return this._fontStyle;
    }
    public set fontStyle(value) {
        this._fontStyle = value;
        CSSFunction.updateFontStyle(this.parent, "fontStyle", value);
    }
    /**  字体变形，普通或小写  */
    private _fontVariant: "normal" | "small-caps" = "normal";
    public get fontVariant() {
        return this._fontVariant;
    }
    public set fontVariant(value) {
        this._fontVariant = value;
        CSSFunction.updateFontStyle(this.parent, "fontVariant", value);
    }
    /** 字体粗细 */
    private _fontWeight: "normal" | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = "normal";
    public get fontWeight() {
        return this._fontWeight;
    }
    public set fontWeight(value) {
        this._fontWeight = value;
        CSSFunction.updateFontStyle(this.parent, "fontWeight", value);
    }
    /** 内部填充,只支持文字 */
    private _padding?: number;
    public get padding() {
        return this._padding;
    }
    public set padding(value) {
        this._padding = value;
        CSSFunction.updateFontStyle(this.parent, "padding", value);
    }
    /** 描边颜色 */
    private _stroke?: string | number;
    public get stroke() {
        return this._stroke;
    }
    public set stroke(value) {
        this._stroke = value;
        CSSFunction.updateFontStyle(this.parent, "stroke", value);
    }
    /** 描边的笔触粗细值 */
    private _strokeThickness = 0;
    public get strokeThickness() {
        return this._strokeThickness;
    }
    public set strokeThickness(value) {
        this._strokeThickness = value;
        CSSFunction.updateFontStyle(this.parent, "strokeThickness", value);
    }
    /** 是否设置投影 */
    private _dropShadow = false;
    public get dropShadow() {
        return this._dropShadow;
    }
    public set dropShadow(value) {
        this._dropShadow = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadow", value);
    }
    /** 投影的alpha值 */
    private _dropShadowAlpha = false;
    public get dropShadowAlpha() {
        return this._dropShadowAlpha;
    }
    public set dropShadowAlpha(value) {
        this._dropShadowAlpha = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowAlpha", value);
    }
    /** 是否设置投影 */
    private _dropShadowAngle = 0;//Math.PI / 6;
    public get dropShadowAngle() {
        return this._dropShadowAngle;
    }
    public set dropShadowAngle(value) {
        this._dropShadowAngle = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowAngle", value);
    }
    /** 投影的模糊半径 */
    private _dropShadowBlur = 0;
    public get dropShadowBlur() {
        return this._dropShadowBlur;
    }
    public set dropShadowBlur(value) {
        this._dropShadowBlur = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowBlur", value);
    }
    /** 投影填充颜色值 */
    private _dropShadowColor = 0x000000;
    public get dropShadowColor() {
        return this._dropShadowColor;
    }
    public set dropShadowColor(value) {
        this._dropShadowColor = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowColor", value);
    }
    /** 投影深度 */
    private _dropShadowDistance = 5;
    public get dropShadowDistance() {
        return this._dropShadowDistance;
    }
    public set dropShadowDistance(value) {
        this._dropShadowDistance = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowDistance", value);
    }
    /** 中文换行 */
    private _breakWords = true;
    public get breakWords() {
        return this._breakWords;
    }
    public set breakWords(value) {
        this._breakWords = value;
        CSSFunction.updateFontStyle(this.parent, "breakWords", value);
    }

    private onResize() {


        const target = this.parent;
        if (target.width == 0 || target.height == 0) {
            return;
        }
        if (this.backgroundColor && target.$background) {

            const background = target.$background;
            //console.log("onResize backgroundColor",background.width , target.width ,background.height ,target.height)
            background.clear();
            background.beginFill(this.backgroundColor);
            background.drawRoundedRect(0, 0, target.width, target.height, 0);
            background.endFill();

        }
        if (target.$background && target.$background.mask) {
            //console.log("onResize backgroundColor mask",this.backgroundColor)
            const mask = target.$background.mask as PIXI.Graphics;
            mask.clear();
            mask.beginFill(this.backgroundColor);
            mask.drawRoundedRect(0, 0, target.width, target.height, 0);
            mask.endFill();
        }
    }
}



/*
CSS3.0 所有样式属性

    background: string | null;
    backgroundAttachment: string | null;
    backgroundClip: string | null;
    // backgroundColor: string | null;
    // backgroundImage: string | null;
    backgroundOrigin: string | null;
    backgroundPosition: string | null;
    // backgroundPositionX: string | null;
    // backgroundPositionY: string | null;
    backgroundRepeat: string | null;
    // backgroundSize: string | null;


    alignContent: string;
    alignItems: string;
    alignSelf: string;
    alignmentBaseline: string | null;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    backfaceVisibility: string | null;

    baselineShift: string | null;
    border: string | null;
    borderBottom: string | null;
    borderBottomColor: string | null;
    borderBottomLeftRadius: string | null;
    borderBottomRightRadius: string | null;
    borderBottomStyle: string | null;
    borderBottomWidth: string | null;
    borderCollapse: string | null;
    borderColor: string | null;
    borderImage: string | null;
    borderImageOutset: string | null;
    borderImageRepeat: string | null;
    borderImageSlice: string | null;
    borderImageSource: string | null;
    borderImageWidth: string | null;
    borderLeft: string | null;
    borderLeftColor: string | null;
    borderLeftStyle: string | null;
    borderLeftWidth: string | null;
    borderRadius: string | null;
    borderRight: string | null;
    borderRightColor: string | null;
    borderRightStyle: string | null;
    borderRightWidth: string | null;
    borderSpacing: string | null;
    borderStyle: string | null;
    borderTop: string | null;
    borderTopColor: string | null;
    borderTopLeftRadius: string | null;
    borderTopRightRadius: string | null;
    borderTopStyle: string | null;
    borderTopWidth: string | null;
    borderWidth: string | null;
    // bottom: string | null;
    boxShadow: string | null;
    boxSizing: string;
    breakAfter: string | null;
    breakBefore: string | null;
    breakInside: string | null;
    captionSide: string | null;
    caretColor: string;
    clear: string | null;
    clip: string;
    clipPath: string;
    clipRule: string;
    // color: string | null;
    colorInterpolationFilters: string;
    columnCount: string;
    columnFill: string;
    columnGap: string;
    columnRule: string;
    columnRuleColor: string;
    columnRuleStyle: string;
    columnRuleWidth: string;
    columnSpan: string;
    columnWidth: string;
    columns: string;
    content: string | null;
    counterIncrement: string | null;
    counterReset: string | null;
    cssFloat: string | null;
    cssText: string;
    cursor: string;
    direction: string;
    // display: string | null;
    dominantBaseline: string | null;
    emptyCells: string | null;
    enableBackground: string | null;
    fill: string | null;
    fillOpacity: string | null;
    fillRule: string | null;
    filter: string;
    flex: string | null;
    flexBasis: string | null;
    flexDirection: string | null;
    flexFlow: string | null;
    flexGrow: string | null;
    flexShrink: string | null;
    flexWrap: string | null;
    floodColor: string;
    floodOpacity: string;
    font: string;
    // fontFamily: string;
    fontFeatureSettings: string;
    fontKerning: string;
    // fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    // fontStyle: string;
    fontSynthesis: string;
    // fontVariant: string;
    fontVariantCaps: string;
    fontVariantEastAsian: string;
    fontVariantLigatures: string;
    fontVariantNumeric: string;
    fontVariantPosition: string;
    // fontWeight: string;
    gap: string;
    glyphOrientationHorizontal: string | null;
    glyphOrientationVertical: string;
    grid: string | null;
    gridArea: string | null;
    gridAutoColumns: string | null;
    gridAutoFlow: string | null;
    gridAutoRows: string | null;
    gridColumn: string | null;
    gridColumnEnd: string | null;
    gridColumnGap: string;
    gridColumnStart: string | null;
    gridGap: string;
    gridRow: string | null;
    gridRowEnd: string | null;
    gridRowGap: string;
    gridRowStart: string | null;
    gridTemplate: string | null;
    gridTemplateAreas: string | null;
    gridTemplateColumns: string | null;
    gridTemplateRows: string | null;
    // height: string | null;
    hyphens: string;
    imageOrientation: string;
    imageRendering: string;
    imeMode: string | null;
    justifyContent: string;
    justifyItems: string;
    justifySelf: string;
    kerning: string | null;
    layoutGrid: string | null;
    layoutGridChar: string | null;
    layoutGridLine: string | null;
    layoutGridMode: string | null;
    layoutGridType: string | null;
    // left: string | null;
    readonly length: number;
    // letterSpacing: string;
    lightingColor: string;
    lineBreak: string;
    // lineHeight: string | null;
    listStyle: string | null;
    listStyleImage: string | null;
    listStylePosition: string | null;
    listStyleType: string | null;

    margin: string | null;
    marginBottom: string | null;
    marginLeft: string | null;
    marginRight: string | null;
    marginTop: string | null;

    marker: string | null;
    markerEnd: string | null;
    markerMid: string | null;
    markerStart: string | null;
    mask: string;
    maskComposite: string;
    maskImage: string;
    maskPosition: string;
    maskRepeat: string;
    maskSize: string;
    maskType: string;

    // maxHeight: string | null;
    // maxWidth: string | null;
    // minHeight: string | null;
    // minWidth: string | null;

    objectFit: string;
    objectPosition: string;
    opacity: string | null;
    order: string | null;
    orphans: string | null;
    outline: string;
    outlineColor: string;
    outlineOffset: string;
    outlineStyle: string;
    outlineWidth: string;

    overflow: string;
    overflowAnchor: string;
    overflowWrap: string;
    overflowX: string;
    overflowY: string;

    padding: string | null;
    paddingBottom: string | null;
    paddingLeft: string | null;
    paddingRight: string | null;
    paddingTop: string | null;

    pageBreakAfter: string | null;
    pageBreakBefore: string | null;
    pageBreakInside: string | null;
    readonly parentRule: CSSRule;
    penAction: string | null;
    perspective: string | null;
    perspectiveOrigin: string | null;
    placeContent: string;
    placeItems: string;
    placeSelf: string;
    pointerEvents: string | null;
    // position: string | null;
    quotes: string | null;
    resize: string;
    // right: string | null;
    rotate: string | null;
    rowGap: string;
    rubyAlign: string | null;
    rubyOverhang: string | null;
    rubyPosition: string | null;
    // scale: string | null;
    scrollBehavior: string;
    stopColor: string | null;
    stopOpacity: string | null;

    stroke: string | null;
    strokeDasharray: string | null;
    strokeDashoffset: string | null;
    strokeLinecap: string | null;
    strokeLinejoin: string | null;
    strokeMiterlimit: string | null;
    strokeOpacity: string | null;
    strokeWidth: string | null;

    tabSize: string;
    tableLayout: string | null;
    // textAlign: string;
    textAlignLast: string;
    textAnchor: string | null;
    textCombineUpright: string;
    textDecoration: string;
    textDecorationColor: string;
    textDecorationLine: string;
    textDecorationStyle: string;
    textEmphasis: string;
    textEmphasisColor: string;
    textEmphasisPosition: string;
    textEmphasisStyle: string;
    textIndent: string;
    textJustify: string;
    textKashida: string | null;
    textKashidaSpace: string | null;
    textOrientation: string;
    textOverflow: string;
    textShadow: string;
    textTransform: string;
    textUnderlinePosition: string;
    // top: string | null;
    touchAction: string;
    transform: string;
    transformBox: string;
    transformOrigin: string;
    transformStyle: string | null;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    translate: string | null;
    unicodeBidi: string;
    userSelect: string;
    verticalAlign: string | null;
    visibility: string | null;

    whiteSpace: string;
    widows: string | null;
    // width: string | null;
    willChange: string;
    wordBreak: string;
    wordSpacing: string;
    // wordWrap: string;
    writingMode: string;
    // zIndex: string | null;
    zoom: string | null;
    */
