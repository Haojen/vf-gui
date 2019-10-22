import { _getSourcePath } from "../core/Utils";
import { UIBase } from "../UI";

/**
 * 组件样式表
 */
export class CSSStyle {

    public dirty = {
        /** 
         * 内部脏数据标记 
         * */
        dirty: false,
        /**
         * transform 脏数据标记 
         */
        transform: false,
        /**
         * 遮罩脏数据
         */
        mask: false,
        /**
         * 脏背景
         */
        background: false,
        /**
         * 常规的不需要改变的脏数据
         */
        alpha: false

    }

    /** 
     * 存放上次的值 
     * */
    public _oldValue: CSSStyle = ({} as TAny);
    /** 
     * 内部百分比转换至 
     * */
    public _valuesPct: { [key: string]: number } = {};
    /** 
     * 事件发送
     * */
    public eventEmitter = new PIXI.utils.EventEmitter();




    /** 
     * 表示显示对象的宽度，以像素为单位。
     * */
    public width: string | number = 0;
    /** 
     * 设置元素的最小宽度。
     * */
    public minWidth?: number;
    /** 
     * 设置元素的最大宽度。
     * */
    public maxWidth?: number;
    /** 
     * 表示显示对象的高度，以像素为单位。
     * */
    public height: string | number = 0;
    /** 
     * 设置元素的最小高度。
     * */
    public maxHeight?: number;
    /** 
     * 设置元素的最大高度。
     * */
    public minHeight?: number;


    /** 
     * 设置定位元素左外边距边界与其容器左边界之间的偏移。 
     * */
    public left: number | string | undefined;
    /** 
     * 设置定位元素的上外边距边界与其容器上边界之间的偏移。
     * */
    public top: number | string | undefined;
    /** 
     * 设置定位元素右外边距边界与其容器右边界之间的偏移。
     * */
    public right: number | string | undefined;
    /** 
     * 设置定位元素下外边距边界与其容器下边界之间的偏移。
     * */
    public bottom: number | string | undefined;

    //transform start
    /** 
     * 缩放
     * */
    public scaleX = 1
    public scaleY = 1
    /** 
     * 设置元素水平拉伸扭曲（角度）。
     * */
    public skewX = 0;
    /** 
     * 设置元素垂直拉伸扭曲（角度）。
     * */
    public skewY = 0;

    /** 设置元素旋转 （角度） */
    public rotate = 0;
    public get rotation() {
        return this.rotate;
    }
    public set rotation(value: number) {
        this.rotate = value;
    }

    /** 轴点 0 - 1 */
    public pivotX = 0;
    public pivotY = 0;
    //transform end

    /** 
     * 规定元素的定位类型。
     * */
    public position: Position = "absolute";
    /** 
     * 规定元素的显示类型。布局模式 
     * */
    public display: Display = "block";
    /** 
     * grid布局中行列 auto 根据父级自动计算 
     * */
    public gridRows?: number | "auto";
    public gridColumns?: number | "auto";
    public gridSize?: number[];

    /**
      * 调整元素的色调，取消设置0xFFFFFF
      */
    public tint?: number;
    /** 
     * 索引位 
     * */
    public zIndex = -1;
    /** 
     * 表示指定对象的 Alpha 透明度值。有效值为0（完全透明）～ 1（完全不透明）。
     * */
    public alpha = 1;
    /** 
     * 显示对象是否可见 
     * */
    public visible = true;
    public get visibility() {
        return this.visible ? "visible" : "hidden";
    }
    public set visibility(value: "visible" | "hidden") {
        this.visible = value === "hidden" ? false : true;
    }


    /** 
     * 设置元件的背景颜色。（16进制数字0xffffff | 字符串 "#ffffff"） 
     * */
    public backgroundColor?: number | string;
    /** 
     * 设置元素的背景图像。backgroundImage = "./xxx.png" 
     * */
    public backgroundImage?: PIXI.Texture | string;
    /** 
     * 设置 backgroundImage 后 ，设置背景图像的X位置
     * */
    public backgroundPositionX?: number;
    /** 
     * 设置 backgroundImage 后 ，设置背景图像的Y位置
     * */
    public backgroundPositionY?: number;
    /** 
     * 设置 backgroundImage 后，设置是否及如何重复背景图像。
     * repeat重复
     * no-repeat不重复，
     */
    public backgroundRepeat: "no-repeat" | "repeat" = "no-repeat";
    /** 
     * 设置 backgroundImage 后， 规定背景图像的尺寸。 [width,height] 
     * */
    public backgroundSize?: number[];


    /** 遮罩图 */
    public maskImage?: string | PIXI.Graphics | PIXI.Texture | UIBase;
    /** 设置位数 [x,y] */
    public maskPosition?: number[];
    /** 设置遮罩位图的大小 */
    public maskSize?: number[];

    public dirtyCheck(key: string, value: TAny) {
        dirtyCheck(this, key, value);
    }
}

/**
 * 脏数据检测
 * @param target 
 * @param key 
 * @param value 
 */
export function dirtyCheck(target: CSSStyle, key: string, value: TAny) {

    if (typeof value === "string" && value.indexOf("%") !== -1) {
        target._valuesPct[key] = parseFloat(value.replace('%', '')) * 0.01 || 0;
    } else {
        target._valuesPct[key] = 0;
    }

    switch (key) {
        case "tint":
        case "alpha":
        case "visible":
            target.dirty.alpha = true;
            break;
        case "maskImage":
        case "maskPosition":
        case "maskSize":
            target.dirty.mask = true;
            break;
        case "backgroundColor":
        case "backgroundImage":
        case "backgroundPositionX":
        case "backgroundPositionY":
        case "backgroundRepeat":
        case "backgroundSize":
            //需要背景的组件，自己实现
            target.dirty.background = true;
            break;
        default:
            target.dirty.dirty = true;
    }
}

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
export type Align = "left" | "right"  | "bottom" | "top" | "center" | "middle";

/** 布局模式 */
export type Display = "block" | "grid";


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