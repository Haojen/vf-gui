/// <reference types="pixi.js" />
import UIBase from "../UIBase";
import SliceSprite from "./SliceSprite";
import DragEvent from "../Interaction/DragEvent";
import InteractionEvent from "../Interaction/InteractionEvent";
/**
 * UI 滑动条
 */
export default class Slider extends UIBase {
    /**
     * 滑动条值发生改变后
     */
    static readonly ChangeEvent = "change";
    /**
     * 滑动条值发生改变时
     */
    static readonly ChangingEvent = "changing";
    constructor(trackBorderWidth?: number, thumbBorderWidth?: number, tracklightBorderWidth?: number);
    /**
     * 当前值
     */
    protected _amt: number;
    /**
     * 小数的保留位，0不保留
     * @default 0
     */
    private _decimals;
    /**
     * 滑块方向
     */
    private _vertical;
    protected _track: SliceSprite;
    protected _tracklight: SliceSprite;
    protected _thumb: SliceSprite;
    protected _sourceTrack: string;
    protected _sourceTracklight: string;
    protected _sourceThumb: string;
    private _thumbDrag;
    private _trackDrag;
    private _startValue;
    private _maxPosition;
    private _localMousePosition;
    private _lastChange;
    private _lastChanging;
    private _minValue;
    private _maxValue;
    /** 是否可以绘制布局，设置本值并不会触发绘制，只是标记*/
    protected _isUpdateLayout: boolean;
    /**
     * 背景
     */
    sourceTrack: string;
    /**
     * 进度填充
     */
    sourceTracklight: string;
    /**
     * 拖拽手柄
     */
    sourceThumb: string;
    protected onThumbLoadComplete(rectangle: PIXI.Rectangle, source: SliceSprite): void;
    /**
     * 是否垂直
     * @default false
     */
    vertical: boolean;
    /**
     * 最小值
     * @default 0
     */
    minValue: number;
    /**
     * 最大值
     * @default 100
     */
    maxValue: number;
    /**
     * 当前值
     */
    value: number;
    protected updateLayout(): void;
    update(soft?: boolean): void;
    protected onPress(event: InteractionEvent, isPressed: boolean, dragEvent?: DragEvent): void;
    protected onDragStart(event: InteractionEvent): void;
    protected onDragMove(event: InteractionEvent, offset: PIXI.Point): void;
    protected onDragEnd(event: InteractionEvent): void;
    protected updatePositionToMouse(mousePosition: PIXI.Point, soft: boolean): void;
    protected triggerValueChange(): void;
    protected triggerValueChanging(): void;
}
