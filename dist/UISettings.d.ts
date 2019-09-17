/// <reference types="pixi.js" />
import { HorizontalAlignEnum, VerticalAlignEnum } from "./Enum/AlignEnum";
import UIBase from "./UIBase";
/**
 * 基础的显示数据类型
 * @since 1.0.0
 */
export default class UISettings {
    /** 宽度 */
    width: number;
    /** 高度 */
    height: number;
    /** 最小高度 */
    minHeight: number;
    /** 最大宽度 */
    maxWidth: number | undefined;
    /** 最大高度 */
    maxHeight: number | undefined;
    /** 距离父容器的左边距 */
    left: number | undefined;
    /** 距离父容器的右边距 */
    right: number | undefined;
    /** 距离父容器的顶边距 */
    top: number | undefined;
    /** 距离父容器的底边距 */
    bottom: number | undefined;
    /** 锚点距离父容器的左边距（0-1） */
    anchorLeft: number | undefined;
    /** 锚点距离父容器的右边距（0-1） */
    anchorRight: number | undefined;
    /** 锚点距离父容器的上边距（0-1） */
    anchorTop: number | undefined;
    /** 锚点距离父容器的底边距（0-1） */
    anchorBottom: number | undefined;
    /** 宽度百分比 */
    widthPct: number | undefined;
    /** 高度百分比 */
    heightPct: number | undefined;
    /** 最小宽度百分比 */
    minWidthPct: number | undefined;
    /** 最小高度百分比 */
    minHeightPct: number | undefined;
    /** 最大宽度百分比 */
    maxWidthPct: number | undefined;
    /** 最大高度百分比 */
    maxHeightPct: number | undefined;
    /** 宽度百分比 */
    minWidth: number;
    /** 距离父容器的左边距百分比 */
    leftPct: number | undefined;
    /** 距离父容器的右边距百分比 */
    rightPct: number | undefined;
    /** 距离父容器的顶边距百分比 */
    topPct: number | undefined;
    /** 距离父容器的底边距百分比 */
    bottomPct: number | undefined;
    /** 锚点距离父容器的左边距百分比 */
    anchorLeftPct: number | undefined;
    /** 锚点距离父容器的右边距百分比 */
    anchorRightPct: number | undefined;
    /** 锚点距离父容器的顶边距百分比 */
    anchorTopPct: number | undefined;
    /** 锚点距离父容器的底边距百分比 */
    anchorBottomPct: number | undefined;
    /** 锚点X的像素表示法 */
    pivotX: number;
    /** 锚点Y的像素表示法 */
    pivotY: number;
    /** X轴缩放 */
    scaleX: number;
    /** Y轴缩放 */
    scaleY: number;
    /** 垂直布局 */
    verticalAlign: VerticalAlignEnum | undefined;
    /** 横向布局 */
    horizontalAlign: HorizontalAlignEnum | undefined;
    rotation: number | undefined;
    angle: number | undefined;
    blendMode: PIXI.BLEND_MODES | undefined;
    /** 色调 */
    tint: number | undefined;
    /** 透明度（0-1） */
    alpha: number;
    /** 是否开启拖动 true|false */
    draggable: boolean;
    /** 是否开启限制拖动范围 */
    dragRestricted: boolean;
    /** 限制拖动抽X抽或Y抽 */
    dragRestrictAxis: "x" | "y" | undefined;
    /** 拖动限制门槛,小于次数不执行拖动 */
    dragThreshold: number;
    /** 分组拖动 */
    dragGroup: string | undefined;
    /** 拖动容器 */
    dragContainer: PIXI.Container | UIBase | undefined;
    /** 是否开启接收拖动物 */
    droppable: boolean | undefined;
    /**  */
    droppableReparent: UIBase | undefined;
    /** 接收掉落的分组名 */
    dropGroup: string | undefined;
}
