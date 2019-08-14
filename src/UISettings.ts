import { HorizontalAlignEnum, VerticalAlignEnum } from "./Align";

/** 
 * 基础的显示数据类型 
 * @since 1.0.0
 */
export class UISettings {
    /** 宽度 */
    public width = 0;
    /** 高度 */
    public height = 0;
    /** 最小高度 */
    public minHeight = 0;
    /** 最大宽度 */
    public maxWidth: number | undefined;
    /** 最大高度 */
    public maxHeight: number | undefined;
    /** 距离父容器的左边距 */
    public left: number | undefined;
    /** 距离父容器的右边距 */
    public right: number | undefined;
    /** 距离父容器的顶边距 */
    public top: number | undefined;
    /** 距离父容器的底边距 */
    public bottom: number | undefined;
    /** 锚点距离父容器的左边距（0-1） */
    public anchorLeft: number | undefined;
    /** 锚点距离父容器的右边距（0-1） */
    public anchorRight: number | undefined;
    /** 锚点距离父容器的上边距（0-1） */
    public anchorTop: number | undefined;
    /** 锚点距离父容器的底边距（0-1） */
    public anchorBottom: number | undefined;
    /** 宽度百分比 */
    public widthPct: number | undefined;
    /** 高度百分比 */
    public heightPct: number | undefined;
    /** 最小宽度百分比 */
    public minWidthPct: number | undefined;
    /** 最小高度百分比 */
    public minHeightPct: number | undefined;
    /** 最大宽度百分比 */
    public maxWidthPct: number | undefined;
    /** 最大高度百分比 */
    public maxHeightPct: number | undefined;
    /** 宽度百分比 */
    public minWidth = 0;
    /** 距离父容器的左边距百分比 */
    public leftPct: number | undefined;
    /** 距离父容器的右边距百分比 */
    public rightPct: number | undefined;
    /** 距离父容器的顶边距百分比 */
    public topPct: number | undefined;
    /** 距离父容器的底边距百分比 */
    public bottomPct: number | undefined;
    /** 锚点距离父容器的左边距百分比 */
    public anchorLeftPct: number | undefined;
    /** 锚点距离父容器的右边距百分比 */
    public anchorRightPct: number | undefined;
    /** 锚点距离父容器的顶边距百分比 */
    public anchorTopPct: number | undefined;
    /** 锚点距离父容器的底边距百分比 */
    public anchorBottomPct: number | undefined;
    /** 锚点X的像素表示法 */
    public pivotX = 0;
    /** 锚点Y的像素表示法 */
    public pivotY = 0;
    /** X轴缩放 */
    public scaleX = 1;
    /** Y轴缩放 */
    public scaleY = 1;
    /** 垂直布局 */
    public verticalAlign: VerticalAlignEnum | undefined;
    /** 横向布局 */
    public horizontalAlign: HorizontalAlignEnum | undefined;
    /* 旋转 */
    public rotation: number | undefined;
    /* 混合模式 */
    public blendMode: PIXI.BLEND_MODES | undefined;
    /** 填充色 */
    public tint: number | undefined;
    /** 透明度（0-1） */
    public alpha = 1;
    /** 是否开启拖动 true|false */
    public draggable = false;
    /** 是否开启限制拖动范围 */
    public dragRestricted = false;
    /** 限制拖动抽X抽或Y抽 */
    public dragRestrictAxis: "x" | "y" | undefined; //x, y
    /** 拖动限制门槛,小于次数不执行拖动 */
    public dragThreshold = 0;
    /** 分组拖动 */
    public dragGroup: string | undefined;
    /** 拖动容器 */
    public dragContainer: any;
    /** 是否开启接收拖动物 */
    public droppable: boolean | undefined;
    /**  */
    public droppableReparent: any = null;
    /** 接收掉落的分组名 */
    public dropGroup: string | undefined;
}