export class CSSKeyWords {

    public static readonly maxHeight = Symbol("maxHeight");
    public static readonly maxWidth = Symbol("maxWidth");
    public static readonly minHeight = Symbol("minHeight");
    public static readonly minWidth = Symbol("minWidth");
    public static readonly width = Symbol("width");
    public static readonly height = Symbol("height");

    /** 距离上边距 */
    public static readonly left = Symbol("left");
    /** 距离上边距 */
    public static readonly top = Symbol("top");
    /** 距离左边距 */
    public static readonly right = Symbol("right");
    /** 距离底边距 */
    public static readonly bottom = Symbol("bottom");
    /** 文本颜色，16进制 */
    public static readonly color = Symbol("color");
    /** 定位 */
    public static readonly position = Symbol("position");
    /** 布局模式 */
    public static readonly display = Symbol("display");


    /** grid布局中行列 auto 根据父级自动计算 */
    public static readonly gridRows = Symbol("gridRows");
    public static readonly gridColumns = Symbol("gridColumns");
    /** 指定格子大小 */
    public static readonly gridSize = Symbol("gridSize");

    /** 索引位 */
    public static readonly zIndex = Symbol("zIndex");

    //transform start
    public static readonly scaleX = Symbol("scaleX");
    public static readonly scaleY = Symbol("scaleY");
    /** 斜切 */
    public static readonly skewX = Symbol("skewX");
    public static readonly skewY = Symbol("skewY");
    /** 轴点 0 - 1 */
    public static readonly pivotX = Symbol("pivotX");
    public static readonly pivotY = Symbol("pivotY");
    /** 旋转 弧度 */
    public static readonly rotate = Symbol("rotate");
    //transform end

    /** 透明度 0 - 1 */
    public static readonly alpha = Symbol("alpha");
    /** 是否隐藏 */
    public static readonly visibility = Symbol("visibility");

    /** 遮罩 */
    public static readonly maskImage = Symbol("maskImage");
    public static readonly maskPositionX = Symbol("maskPositionX");
    public static readonly maskPositionY = Symbol("maskPositionY");
    public static readonly maskSize = Symbol("maskSize");

    /** 设置容器的背景样式 */
    public static readonly backgroundColor = Symbol("backgroundColor");
    /** 设置容器的背景样式 */
    public static readonly backgroundImage = Symbol("backgroundImage");
    public static readonly backgroundPositionX = Symbol("backgroundPositionX");
    public static readonly backgroundPositionY = Symbol("backgroundPositionY");
    /** 
     * backgroundImage不为null时，
     * repeat重复
     * no-repeat不重复，
     *  --- nineSlice9切，暂不可用 ---- */
    public static readonly backgroundRepeat = Symbol("backgroundRepeat");
    /** 背景大小 [width,height] */
    public static readonly backgroundSize = Symbol("backgroundSize");


    /** 文本对齐方式 */
    public static readonly textAlign = Symbol("textAlign");
    /** 行高 */
    public static readonly lineHeight = Symbol("lineHeight");
    /** 字体 */
    public static readonly fontFamily = Symbol("fontFamily");
    /** 字体大小 */
    public static readonly fontSize = Symbol("fontSize");
    /** 字体样式 */
    public static readonly fontStyle = Symbol("fontStyle");
    /**  字体变形，普通或小写  */
    public static readonly fontVariant = Symbol("fontVariant");
    /** 字体粗细 */
    public static readonly fontWeight = Symbol("fontWeight");
    /** 字符间距 */
    public static readonly letterSpacing = Symbol("letterSpacing");
    /** 内部填充 */
    public static readonly padding = Symbol("padding");
    /** 描边颜色 */
    public static readonly textStrokeColor = Symbol("textStrokeColor");
    /** 描边的笔触粗细值 */
    public static readonly textStrokeThickness = Symbol("textStrokeThickness");
    /** 是否自动换行 */
    public static readonly wordWrap = Symbol("wordWrap");
    /** 自动换行的宽度 */
    public static readonly wordWrapWidth = Symbol("wordWrapWidth");
    /** 是否设置投影 */
    public static readonly dropShadow = Symbol("dropShadow");
    /** 投影的alpha值 */
    public static readonly dropShadowAlpha = Symbol("dropShadowAlpha");
    /** 是否设置投影 */
    public static readonly dropShadowAngle = Symbol("dropShadowAngle");
    /** 投影的模糊半径 */
    public static readonly dropShadowBlur = Symbol("dropShadowBlur");
    /** 投影填充颜色值 */
    public static readonly dropShadowColor = Symbol("dropShadowColor");
    /** 投影深度 */
    public static readonly dropShadowDistance = Symbol("dropShadowDistance");
    
}

