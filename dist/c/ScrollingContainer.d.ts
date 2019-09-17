/// <reference types="pixi.js" />
import UIBase from "../UIBase";
import Container from "./Container";
/**
 * 可滚动的容器
 */
export default class ScrollingContainer extends Container {
    constructor();
    /**
     * 滑动条值发生改变后
     */
    static readonly ChangeEvent = "change";
    /**
     * 滑动条值发生改变后
     */
    static readonly ReSizeEvent = "resize";
    /**
     * 遮罩
     */
    private _maskRect;
    /**
     * 内容容器
     * @private
     */
    innerContainer: PIXI.Container;
    /**
     * 内容的宽高
     */
    innerBounds: PIXI.Rectangle;
    /**
     * 是否启动拖拽滚动
     * @default true
     */
    dragScrolling: boolean;
    /**
     * 拖动处理类
     */
    private dragEvent;
    /**
     * 鼠标滚动
     */
    private mouseScrollEvent;
    /**
     * 滚动的阻力或柔度 (0-1)
     * @default 0.5
     */
    softness: number;
    /**
     * 滚动条的圆角半径 设置0时，滚动条为直角长方形
     * @default 0
     */
    radius: number;
    /**
     * 遮罩的扩充范围
     */
    expandMask: number;
    /**
     * 是否开启滚动动画
     * @default false
     */
    animating: boolean;
    /**
     * 是否滚动中
     */
    private scrolling;
    /**
     * 临时方案，设置时间间隔，跳转容器宽高
     */
    private _boundCached;
    private _lastWidth;
    private _lastHeight;
    private _scrollX;
    private _scrollY;
    private _isInitScrolling;
    /**
     * 是否启用水平滚动
     * @default false
     */
    scrollX: boolean;
    /**
     * 是否启用垂直滚动
     * @default false
     */
    scrollY: boolean;
    update(): void;
    protected setScrollPosition(speed?: PIXI.Point): void;
    addChild(uiObject: UIBase): UIBase;
    protected getInnerBounds(force?: boolean): PIXI.Rectangle;
    private _containerStart;
    private _targetPosition;
    private _lastPosition;
    private _Position;
    private _Speed;
    private _stop;
    protected initialize(): void;
    protected initScrolling(): void;
    protected updateScrollBars(): void;
    /**
     * 百分比设置位置
     * @param direction 方向
     * @param pct 百分比0-1
     */
    forcePctPosition(direction: "x" | "y", pct: number): void;
    /** 根据焦点设置位置 */
    focusPosition(pos: PIXI.Point): void;
    protected updateScrollPosition(delta: number): void;
    protected updateDirection(direction: "x" | "y", delta: number): void;
}
