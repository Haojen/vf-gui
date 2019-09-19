/// <reference types="pixi.js" />
import UISettings from "./UISettings";
import Stage from "./Stage";
import DragEvent from "./Interaction/DragEvent";
import ContainerBase from "./c/ContainerBase";
/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @param width {Number} Width UI对象的宽度
 * @param height {Number} Height UI对象的高度
 * @since 1.0.0
 */
export default class UIBase extends PIXI.utils.EventEmitter {
    /**
     * 构造函数
     * @param width 宽 数字或百分比, 不传默认0
     * @param height 高 数字或百分比,不传默认0
     */
    constructor(width?: number | string, height?: number | string);
    /** 设置默认的宽高，一般使用情况在构造函数中，并不会触发组件刷新 */
    setDefaultSize(width: number | string, height: number | string): void;
    uuid: string;
    name: string;
    /**
     * 当前的显示容器
     */
    container: ContainerBase;
    /**
     * UI对象的显示属性集合
     */
    setting: UISettings;
    /**
     * 当前UI包含的节点
     * @default
     */
    children: UIBase[];
    /**
     * 父容器
     */
    parent: UIBase | Stage | undefined;
    /**
     * 舞台引用
     */
    stage: Stage | undefined;
    /**
     * 是否初始化
     * @default
     */
    initialized: boolean;
    /**
     * 可拖动初始化
     *  @default
     */
    dragInitialized: boolean;
    /**
     * 可被掉落初始化
     * @default
    */
    dropInitialized: boolean;
    /**
     * 是否脏数据
     * @default
     */
    dirty: boolean;
    /** 测量值 */
    /**
     * @private
     */
    _width: number;
    /**
     * @private
     */
    _height: number;
    protected _minWidth: number | undefined;
    protected _minHeight: number | undefined;
    protected _maxWidth: number | undefined;
    protected _maxHeight: number | undefined;
    protected _anchorLeft: number | undefined;
    protected _anchorRight: number | undefined;
    protected _anchorTop: number | undefined;
    protected _anchorBottom: number | undefined;
    protected _left: number | undefined;
    protected _right: number | undefined;
    protected _top: number | undefined;
    protected _bottom: number | undefined;
    protected _parentWidth: number;
    protected _parentHeight: number;
    /** 覆盖缓动播放时的位置 */
    protected _dragPosition: PIXI.Point | undefined;
    /** 动态属性，避免其他类注入 */
    attach: {
        [key: string]: object | number | string | Function;
    };
    /**
     * 上次的宽度（未使用，丢弃）
     */
    protected _oldWidth: number;
    /**
     * 上次的高度（未使用，丢弃）
     */
    protected _oldHeight: number;
    /**
    *  在不同分辨率下保持像素稳定
    * @default
    */
    pixelPerfect: boolean;
    /**
     * 是否拖动中
     * @default
     */
    dragging: boolean;
    /** 拖动控制类 */
    drag: DragEvent | undefined;
    /** 当前拖动组件的事件ID，用于处理DragDropController中多组件的选定 */
    dragDropEventId: number | undefined;
    /**
     * 数值或百分比，转换为数值类型
     */
    private getPetValue;
    /** 获取设置X */
    x: number;
    /** 获取设置Y */
    y: number;
    /**
     * 设置宽度百分比
     */
    widthPet: string;
    /**
     * 设置宽度,整数
     */
    width: number;
    /**
     * 立即获取渲染的实际宽度 Identifier 'actual_width' is not in camel case
     */
    protected readonly actualWidth: number;
    /**
     * 设置高度，数百分比
     */
    heightPct: string;
    /**
     * 设置高度，数字
     */
    height: number;
    /**
     * 立即获取渲染的实际高度
     */
    protected readonly actualHeight: number;
    /**
     * 设置最小宽度百分比
     */
    minWidthPct: string;
    /**
     * 设置最小宽度
     */
    minWidth: number;
    /**
     * 立即获取渲染的实际最小宽度
     */
    protected readonly actualMinWidth: number | undefined;
    /**
     * 设置最小高度百分比
     */
    minHeightPct: string;
    /** 设置最小高度 */
    minHeight: number;
    /**
     * 立即获取渲染的实际最小高度
     */
    protected readonly actualMinHeight: number | undefined;
    /**
     * 设置最大宽度百分比
     */
    maxWidthPct: string;
    /** 置最大宽度 */
    maxWidth: number | undefined;
    /**
     * 立即获取渲染的实际最小高度
     */
    protected readonly actualMaxWidth: number | undefined;
    /**
     * 设置最大高度百分比
     */
    maxHeightPct: string;
    /** 设置最大高度 */
    maxHeight: number | undefined;
    /**
     * 立即获取渲染的实际最小高度
     */
    protected readonly actualMaxHeight: number | undefined;
    /**
     * 设置锚点距左边距离百分比
     */
    anchorLeftPct: string;
    /** 设置锚点距左边距离 */
    anchorLeft: number | undefined;
    /**
     * 立即获取渲染的实际锚点左边距离
     */
    protected readonly actualAnchorLeft: number | undefined;
    /**
     * 获取设置锚点右边距离百分比
     */
    anchorRightPct: string;
    /** 获取设置锚点右边距离 */
    anchorRight: number | undefined;
    /**
     * 立即获取渲染的实际锚点右边距离
     */
    protected readonly actualAnchorRight: number | undefined;
    /**
     * 获取或设置锚点距离顶部距离百分比
     */
    anchorTopPct: string;
    /** 获取或设置锚点距离顶部距离 */
    anchorTop: number | undefined;
    /**
     * 立即获取渲染的实际锚点顶部距离
     */
    protected readonly actualAnchorTop: number | undefined;
    /**
     * 设置锚点距离底部距离百分比
     */
    anchorBottomPct: string;
    /** 获取或设置锚点距离底部距离 */
    anchorBottom: number | undefined;
    /**
     * 立即获取渲染的实际锚点底部距离
     */
    protected readonly actualAnchorBottom: number | undefined;
    /** 设置距离左边距 百分比 */
    leftPct: string;
    /** 设置左边距 */
    left: number | undefined;
    /**
     * 立即获取渲染的实际左部距离
     */
    protected readonly actualLeft: number | undefined;
    /** 设置右边距百分比 */
    rightPct: string;
    /** 设置右边距 */
    right: number | undefined;
    /**
     * 立即获取渲染的实际右部距离
     */
    protected readonly actualRight: number | undefined;
    /**
     * 设置距离顶部距离百分比
     */
    topPct: string;
    /** 设置顶边距 */
    top: number | undefined;
    /**
     * 立即获取渲染的实际顶部距离
     */
    protected readonly actualTop: number | undefined;
    /**
     * 获取或设置距离底部距离
     */
    bottomPct: string;
    /** 设置底边距 */
    bootom: number;
    readonly bottom: number | undefined;
    /**
     * 立即获取渲染的实际顶部距离
     */
    protected readonly actualBottom: number | undefined;
    /**
     * 垂直布局
     */
    verticalAlign: number | undefined;
    /**
     * 垂直布局 verticalAlign简写
     */
    valign: number | undefined;
    /**
     * 水平布局
     */
    horizontalAlign: number | undefined;
    /**
     * 水平布局 horizontalAlign 简写
     */
    align: number | undefined;
    /**
     * 显示对象填充色 0xFFFFFF
     */
    tint: number;
    /**
     * 获取设置透明度
     */
    alpha: number;
    /**
     * 获取设置旋转 (弧度)
     */
    rotation: number;
    /**
     * 获取设置旋转 (角度)
     */
    angle: number;
    /**
     * 设置混合模式参考，PIXI.BLEND_MODES
     */
    blendMode: number;
    /**
     * 获取设置锚点Y的像素
     */
    pivotX: number;
    /**
     * 获取设置锚点Y的像素
     */
    pivotY: number;
    /**
     * 锚点的像素表示法,便捷的方法，避免单独设置
     */
    pivot: number;
    /**
     * 设置X轴缩放
     */
    scaleX: number;
    /**
     * 设置Y轴缩放
     */
    scaleY: number;
    /**
     * 进行统一缩放，当单独设置过scaleX、scaleY后，调用scale取值为scaleX
     */
    scale: number;
    /**
     * 是否开启拖动
     * @default false
     */
    draggable: boolean;
    /**
     * 是否开启限制拖动范围
     */
    dragRestricted: boolean;
    /**
     * 限制拖动抽X抽或Y抽，需要开启dragRestricted
     */
    dragRestrictAxis: "x" | "y" | undefined;
    /**
     * 拖动限制门槛,小于设置的数不执行拖动
     */
    dragThreshold: number;
    /**
     * 拖动分组
     */
    dragGroup: string | undefined;
    /**
     * 拖动的容器
     */
    dragContainer: PIXI.Container | UIBase | undefined;
    /**
     * 是否开拖动掉落
     */
    droppable: boolean | undefined;
    /**
     * 接收掉落的新容器
     */
    droppableReparent: UIBase | undefined;
    /**
     * 接收拖动掉落的分组名
     */
    dropGroup: string | undefined;
    /**
     * 是否绘制显示对象，如果false不进行绘制，不过仍然会进行相关的更新计算。
     * 只影响父级的递归调用。
     */
    renderable: boolean;
    /**
     * 显示对象是否可见
     */
    visible: boolean;
    /**
     * 缓存当前的显示对象，如果移除缓存，设置false即可
     * 在设置这个值时，请确保你的纹理位图已经加载
     */
    cacheAsBitmap: boolean;
    /**
     * 对象是否可以接收事件
     */
    interactive: boolean;
    /**
     * 子对象是否可以接收事件，设置false后，会绕过HitTest方法的递归
     */
    interactiveChildren: boolean;
    /**
     * 绘制渲染对象
     * @param updateChildren 是否渲染子节点，true渲染
     * @param updateParent  是否渲染父容器，true渲染
     */
    updatesettings(updateChildren: boolean, updateParent?: boolean): void;
    protected dalayDrawTimeId: number;
    /**
     * 延迟渲染，PIXI还没找到下一帧事件，后续修改，注意生命周期结束的销毁
     */
    protected dalayDraw: boolean;
    /**
     * 更新方法，其他组件重写
     */
    update(): void;
    release(): void;
    /**
     * 更新渲染设置属性
     */
    baseupdate(): void;
    /**
     * 渲染父容器
     */
    updateParent(): void;
    /**
     * 更新所有子节点
     */
    updateChildren(): void;
    /**
     * 添加UI元件，可以同时添加多个如addChild(a,b,c,d)
     * @param UIObject 要添加的UI组件
     */
    addChild(UIObject: UIBase): UIBase;
    addChildAt(item: UIBase, index: number): UIBase;
    /**
     * 移除已添加的UI组件，可以同时移除多个如addChild(a,b,c,d)
     * @param UIObject 要移除的UI组件
     */
    removeChild(UIObject: UIBase): void;
    /**
     * Initializes the object when its added to an UIStage
     * 将对象添加到UIStage时，进行的初始化方法
     */
    protected initialize(): void;
    protected clearDraggable(): void;
    protected initDraggable(): void;
    protected clearDroppable(): void;
    protected initDroppable(): void;
    private onDrop;
}
