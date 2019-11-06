import { UIBase } from "../UI";

/**
 * 组件样式表
 */
export class CSSStyle {

    public parent: TAny;
    /** 
     * 事件发送
     * */
    public eventEmitter = new PIXI.utils.EventEmitter();

    public hCenter?: number;
    public vCenter?: number;

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

    /** 
     * 缩放
     * */
    public scaleX = 1
    /** 
     * 缩放
     * */
    public scaleY = 1
    /** 
     * 设置元素水平拉伸扭曲（角度）。
     * */
    public skewX = 0;
    /** 
     * 设置元素垂直拉伸扭曲（角度）。
     * */
    public skewY = 0;

    /** 
     * 设置元素旋转 （角度）
      */
    public rotate = 0;
    /** 
     * 设置元素旋转 （角度）
      */
    public get rotation() {
        return this.rotate;
    }
    public set rotation(value: number) {
        this.rotate = value;
    }

    /** 
     * 轴点 像素值
     */
    public pivotX = 0;
    /** 
     * 轴点 像素值
     */
    public pivotY = 0;


    

    /** 
     * 规定元素的定位类型。
     * */
    public position: Position = "absolute";
    /** 
     * 规定元素的显示类型。布局模式 
     * 
     * grid 模式下，子节点会忽略left,top,right，bottom,width,height等
     * 
     * none 模式下，忽略style
     * */
    public display: Display = "block";
    /**
     * 在容器里面的水平位置（左中右）
     */
    public justifyContent?: "flex-start"|"flex-end"|"center";
    /**
     * 在容器里面的垂直位置（上中下）
     */
    public alignContent?: "flex-start"|"flex-end"|"center";
    /**
     * 基于 网格列的维度，去定义网格线的名称和网格轨道的尺寸大小。
     * 
     * 方式一 [80,90,100]|["30%","40%","30%"] 第一列宽度80，第二列宽度，第三列宽度100
     * 
     * 方式二 ["repeat",3,100] 三列，宽度都为100像素
     */
    public gridTemplateColumns?: number[]|string[]|[string,number,number];; 
    /**
     * 设置列间距
     */
    public gridColumnGap?: number;
    /**
     * 基于 网格行的维度，去定义网格线的名称和网格轨道的尺寸大小。
     * 
     * 方式一 [80,90,100]|["30%","40%","30%"] 第一行高度80，第二行高度90，第三行行高度100
     * 
     * 方式二 ["repeat",3,100] 三行，宽度都为100像素
     */
    public gridTemplateRows?: number[]|string[]|[string,number,number];
    /**
     * 设置行间距
     */
    public gridRowGap?: number;





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
     * 设置元件的背景颜色。（16进制数字0xffffff
     * */
    public backgroundColor?: number;
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


    /** 
     * 遮罩图 
     */
    public maskImage?: string | PIXI.Graphics | PIXI.Texture | UIBase;
    /** 
     * 设置位数 [x,y] 
     */
    public maskPosition?: number[];
    /** 
     * 设置遮罩位图的大小 
     */
    public maskSize?: number[];




    /** 
     * 文本颜色，16进制 
     * */
    public color?: number|number[] = 0xfffff0;
    /** 字符间距 */
    public letterSpacing?: number;
    /** 
     * 是否自动换行 
     * */
    public wordWrap = false;
    /** 
     * 自动换行的宽度 
     * */
    public wordWrapWidth?: number;
    /** 
     * 多行文本(wordWrap = true) - 对齐方式
     * */
    public textAlign: "left" | "right" | "center" = "left";
    /** 
     * 多行文本(wordWrap = true) - 行高 
     * */
    public lineHeight?: number;
    /** 字体 示例：fontFamily = "\"Comic Sans MS\", cursive, sans-serif" */
    public fontFamily?: string | string[];
    /** 字体大小 */
    public fontSize = 22;
    /** 字体样式 */
    public fontStyle: "normal" | "italic" | "oblique" = "normal";
    /**  字体变形，普通或小写  */
    public fontVariant: "normal" | "small-caps" = "normal";
    /** 字体粗细 */
    public fontWeight: "normal" | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = "normal";
    /** 内部填充 */
    public padding?: number;
    /** 描边颜色 */
    public stroke?: string | number;
    /** 描边的笔触粗细值 */
    public strokeThickness = 0;
    /** 是否设置投影 */
    public dropShadow = false;
    /** 投影的alpha值 */
    public dropShadowAlpha = false;
    /** 是否设置投影 */
    public dropShadowAngle = 0;//Math.PI / 6;
    /** 投影的模糊半径 */
    public dropShadowBlur = 0;
    /** 投影填充颜色值 */
    public dropShadowColor = 0x000000;
    /** 投影深度 */
    public dropShadowDistance = 5;
    /** 中文换行 */
    public breakWords = true;
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
export type Display = "none"|"block" | "grid";


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