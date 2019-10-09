declare module 'enum/AlignEnum' {
	/**
	 * 水平布局枚举
	 * @since 1.0.0
	 */
	export const enum HorizontalAlignEnum {
	    right = 1,
	    center = 2,
	    left = 3
	}
	/**
	 * 横向布局枚举
	 * @since 1.0.0
	 */
	export const enum VerticalAlignEnum {
	    top = 1,
	    middle = 2,
	    bottom = 3
	}

}
declare module 'core/UISettings' {
	/// <reference types="pixi.js" />
	import { HorizontalAlignEnum, VerticalAlignEnum } from 'enum/AlignEnum';
	import { UIBase } from 'core/UIBase';
	/**
	 * 基础的显示数据类型
	 * @since 1.0.0
	 */
	export class UISettings {
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

}
declare module 'enum/TouchMouseEventEnum' {
	/**
	 * 鼠标点击与触摸事件枚举,内部UIBase使用
	 * @since 1.0.0
	 */
	export const enum TouchMouseEventEnum {
	    mousedown = "mousedown",
	    mousemove = "mousemove",
	    mouseup = "mouseup",
	    mouseover = "mouseover",
	    mouseout = "mouseout",
	    mouseupoutside = "mouseupoutside",
	    mouseRightDown = "rightdown",
	    mouseRightup = "rightup",
	    mouseRightupoutside = "rightupoutside",
	    touchstart = "touchstart",
	    touchcancel = "touchcancel",
	    touchend = "touchend",
	    touchendoutside = "touchendoutside",
	    touchmove = "touchmove",
	    tap = "tap"
	}

}
declare module 'interaction/InteractionEvent' {
	/// <reference types="pixi.js" />
	/**
	 * 事件的基础类
	 *
	 * 触摸或鼠标操作事件 可查看 -> TouchEventEnum.TouchEnum
	 *
	 * import InteractionEvent from "../interaction/InteractionEvent",
	 */
	export class InteractionEvent extends PIXI.interaction.InteractionEvent {
	    constructor();
	}
	/**
	 * 对外，封装的点击触摸事件
	 *
	 * import InteractionEvent,{Mouse} from "../interaction/InteractionEvent",
	 */
	export const TouchMouseEvent: {
	    /**
	     * 移出
	     *
	     * (e: InteractionEvent,thisObj:UIBase,over: boolean)=>{}
	     */
	    onHover: string;
	    /**
	     * 按下
	     *
	     * (e: InteractionEvent,thisObj:UIBase, isPressed: boolean)=>void
	     */
	    onPress: string;
	    /**
	     * 点击
	     *
	     * (e: InteractionEvent,thisObj:UIBase)=>void
	     */
	    onClick: string;
	    /**
	     * 移动
	     *
	     * (e: InteractionEvent,thisObj:UIBase)=>void
	     */
	    onMove: string;
	};
	/**
	 * DragEvent、UI组件拖动事件枚举，
	 */
	export const enum DraggableEvent {
	    /**
	     * UIBase中不包含次事件，DragEvent中包含
	     */
	    onDragPress = "onDragPress",
	    onDragStart = "onDragStart",
	    onDragMove = "onDragMove",
	    onDragEnd = "onDragEnd"
	}
	/**
	 * 键盘事件 驱动类KeysEvent
	 *
	 * import InteractionEvent,{KeyEvent} from "../interaction/InteractionEvent",
	 */
	export const enum KeyEvent {
	    input = "input",
	    /**
	     * 键盘按下
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    keydown = "keydown",
	    /**
	     * 键盘弹起
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    keyup = "keyup",
	    /**
	     * 粘贴
	     *
	     * (e:InteractionEvent,obj:UIBase,clipboardData: DataTransfer | null)
	     */
	    paste = "paste",
	    /**
	     * 复制
	     *
	     * (e:InteractionEvent,obj:UIBase,clipboardData: DataTransfer | null)
	     */
	    copy = "copy",
	    /**
	     * 剪切
	     *
	     * (e:InteractionEvent,obj:UIBase,clipboardData: DataTransfer | null)
	     */
	    cut = "cut",
	    /**
	     * 回退删除
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    backspace = 8,
	    /**
	     * 回车
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    enter = 13,
	    /**
	     * 删除
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    delete = 46,
	    /**
	     * 全选 ctrl+a
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    ctrlA = 65,
	    /**
	     * 撤销 ctrl+z
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    ctrlZ = 90,
	    /**
	     * 箭头左
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    left = 37,
	    /**
	     * 箭头上
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    top = 38,
	    /**
	     * 箭头右
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    right = 39,
	    /**
	     * 箭头下
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    down = 40,
	    /**
	     * shift + 箭头左
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    shiftLeft = "shift37",
	    /**
	     * shift + 箭头右
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    shiftRight = "shift39",
	    /**
	     * shift + 箭头上
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    shiftTop = "shift38",
	    /**
	     * shift + 箭头下
	     *
	     * (e:InteractionEvent,obj:UIBase)
	     */
	    shiftDown = "shift40"
	}
	/**
	 * 缓动事件
	 */
	export const TweenEvent: {
	    /**
	     *
	     */
	    Callback: string;
	    /**
	     * 每次改变
	     */
	    update: string;
	    /**
	     * 完成
	     */
	    complete: string;
	    /**
	     * 开始时
	     */
	    start: string;
	    /**
	     * 每次重复时
	     */
	    repeat: string;
	    /**
	     * 反向时
	     */
	    reverse: string;
	    /**
	     * 暂停时
	     */
	    pause: string;
	    /**
	     * 播放时
	     */
	    play: string;
	    /**
	     * 重新开始时
	     */
	    restart: string;
	    /**
	     * 停止时
	     */
	    stop: string;
	};

}
declare module 'interaction/DragEvent' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	import { InteractionEvent } from 'interaction/InteractionEvent';
	/**
	 * 多拽相关的事件处理类
	 *
	 *  可侦听事件(未实现):
	 * ```
	 *  {InteractionEvent}.DraggableEvent.onDragPress
	 *  {InteractionEvent}.DraggableEvent.onDragStart
	 *  {InteractionEvent}.DraggableEvent.onDragMove
	 *  {InteractionEvent}.DraggableEvent.onDragEnd
	 * ```
	 *  可赋值方法:
	 * ```
	 * onPress: ((e: InteractionEvent, isPressed: boolean,dragObj?: DragEvent) => void) | undefined;
	 * onDragEnd: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
	 * onDragMove: ((e: InteractionEvent, offset: PIXI.Point,dragObj?: DragEvent) => void) | undefined
	 * onDragStart: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
	 * ```
	 *
	 * @example 可查看 `Slider` 源码
	 *
	 * @since 1.0.0
	 */
	export class DragEvent {
	    constructor(obj: UIBase);
	    private obj;
	    id: number;
	    private offset;
	    private movementX;
	    private movementY;
	    private bound;
	    private start;
	    private mouse;
	    private cancel;
	    private dragging;
	    private startEvent;
	    private _onDragStart;
	    private _onDragMove;
	    private _onDragEnd;
	    /** 清除拖动 */
	    stopEvent(): void;
	    remove(): void;
	    onDragPress: ((e: InteractionEvent, isPressed: boolean, dragObj?: DragEvent) => void) | undefined;
	    onDragEnd: ((e: InteractionEvent, dragObj?: DragEvent) => void) | undefined;
	    onDragMove: ((e: InteractionEvent, offset: PIXI.Point, dragObj?: DragEvent) => void) | undefined;
	    onDragStart: ((e: InteractionEvent, dragObj?: DragEvent) => void) | undefined;
	}

}
declare module 'interaction/DragDropController' {
	import { UIBase } from 'core/UIBase';
	import { InteractionEvent } from 'interaction/InteractionEvent';
	/**
	 * 记录当前正在拖动的UI组件列表
	 * @private
	 */
	export const _items: UIBase[];
	/**
	 * 添加拖动组件到控制器
	 * @param item 要添加的UI组件
	 * @param e 传送的事件
	 * @returns true|false
	 * @since 1.0.0
	 */
	export function add(item: UIBase, e: InteractionEvent): boolean;
	/**
	 * 获取正在拖动组件
	 * @param item 要获取的UI组件
	 * @returns flase | item
	 */
	export function getItem(item: UIBase): false | UIBase;
	/**
	 * 根据事件对象与分组名获取拖动项
	 * @param e 事件对象
	 * @param group 分组名
	 */
	export function getEventItem(e: InteractionEvent, group: string | undefined): false | UIBase | null;

}
declare module 'core/Utils' {
	/**
	 * 工具类
	 */
	/// <reference types="pixi.js" />
	/**
	 * 组件获取资源 - 源路径,外部可以重写本方法
	 */
	export let _getSourcePath: Function;
	/** 日志输出 */
	export function log(message?: string | number | object, ...optionalParams: string[] | number[] | object[]): void;
	export function setSourcePath(params: (path: TAny, cls?: TAny) => {}): void;
	/**
	 * 快速设置矩形
	 * @param sourcr
	 * @param x
	 * @param y
	 * @param w
	 * @param h
	 */
	export function setRectangle(source: PIXI.Rectangle, x: number, y: number, w: number, h: number): void;
	/** 获取当前运行时时间 */
	export function now(): number;
	/**
	 * 深度拷贝对象
	 * @param source 对象元
	 */
	export function deepCopy(source: TAny): any;
	/**
	 * helper function to convert string hex to int or default
	 *
	 * 16进制转int，颜色转换
	 * @param str 要转换的值，如#FFFFFF,0xFFFFFF
	 * @param def 转换失败的返回值
	 */
	export function hexToInt(str: string, def: number): number;
	/**
	 *
	 * @param hex 16进制字符窜 如 #FFFFFF ，不能省略三位写法
	 * @param alpha 透明度
	 * @returns "rgba(255,255,255,1)" || false
	 */
	export function hexToRgba(hex: string, alpha: number): string | false;
	/**
	 * 转换为16位字符串，不够2位的补0，如 “01”
	 * @param c 要转换的数字
	 */
	export function componentToHex(c: number): string;
	/**
	 * RGB转16进制
	 * @param r 红 0-255
	 * @param g 绿 0-255
	 * @param b 蓝 0-255
	 */
	export function rgbToHex(r: number, g: number, b: number): string;
	/**
	 * RGB转number
	 * @param r 红 0-255
	 * @param g 绿 0-255
	 * @param b 蓝 0-255
	 */
	export function rgbToNumber(r: number, g: number, b: number): number;
	/**
	 * rgb字符串形式转换
	 * @param color rgb(255,255,255)
	 */
	export function rgbStrToNumber(color: string): number;
	/**
	 * 10进制转RGB
	 * @param c 数
	 */
	export function numberToRgb(c: number): {
	    r: number;
	    g: number;
	    b: number;
	};
	/**
	 * hex 转 RGB，
	 *
	 * 如hex字符串: "#ffffff"->255,255,255
	 *
	 * 如16进制数字: 0xffffff->255,255,255
	 * @param hex
	 */
	export function hexToRgb(hex?: string | number): {
	    r: number;
	    g: number;
	    b: number;
	};
	/**
	 * 根据amt计算当前的位置start-stop，两数差值
	 * @param start 开始数值
	 * @param stop  结束的数值
	 * @param amt 0-1 用时 >1为1，小于0为0
	 */
	export function Lerp(start: number, stop: number, amt: number): number;
	/**
	 * 四舍五入保留指定位数的小数
	 * @param num 取舍的数
	 * @param decimals 保留小数位
	 */
	export function Round(num: number, decimals: number): number;
	/** 获取全局唯一数 */
	export function uid(): string;
	/** 获取URL参数 */
	export function getQueryVariable(variable: string): string | null | undefined;

}
declare module 'c/ContainerBase' {
	/// <reference types="pixi.js" />
	/** 容器扩展类，后续便于做延时渲染 */
	export class ContainerBase extends PIXI.Container {
	    constructor();
	    isEmitRender: boolean;
	    render(renderer: PIXI.Renderer): void;
	}

}
declare module 'core/UIBase' {
	/// <reference types="pixi.js" />
	import { UISettings } from 'core/UISettings';
	import { Stage } from 'core/Stage';
	import { DragEvent } from 'interaction/DragEvent';
	import { ContainerBase } from 'c/ContainerBase';
	/**
	 * UI的顶级类，基础的UI对象
	 *
	 * @class
	 * @extends PIXI.UI.UIBase
	 * @param width {Number} Width UI对象的宽度
	 * @param height {Number} Height UI对象的高度
	 * @since 1.0.0
	 */
	export class UIBase extends PIXI.utils.EventEmitter {
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
	     *  旋转缩放轴点
	     */
	    pivotX: number;
	    /**
	     *  旋转缩放轴点
	     */
	    pivotY: number;
	    /**
	     * 旋转缩放轴点
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

}
declare module 'core/Stage' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	/**
	 * UI的舞台对象，展示所有UI组件
	 *
	 * @class
	 * @extends PIXI.UI.Container
	 * @memberof PIXI.UI
	 * @param width {Number} 舞台宽度
	 * @param height {Number} 舞台高度
	 * @since 1.0.0
	 */
	export class Stage extends PIXI.Container {
	    constructor(width: number, height: number);
	    /**
	     * 最小宽度
	     * @default
	     */
	    minWidth: number;
	    /**
	     * 最小高度
	     * @default
	     */
	    minHeight: number;
	    /**
	     * 节点列表
	     */
	    UIChildren: UIBase[];
	    /**
	     * 自引用
	     */
	    stage: Stage;
	    /**
	     * 是否开启交互功能
	     * @default
	     */
	    interactive: boolean;
	    /**
	     * 可交互区域
	     */
	    hitArea: PIXI.Rectangle;
	    /**
	     * 是否初始化
	     * @default
	     */
	    initialized: boolean;
	    _width: number;
	    width: number;
	    _height: number;
	    height: number;
	    /** 添加显示对象，需集成UIBASE */
	    addChild<T>(...UIObject: T[]): T;
	    addChildAt<T>(item: T, index: number): T & UIBase;
	    removeChild<T>(...UIObject: T[]): T;
	    resize(width?: number, height?: number): void;
	    /** 没有功能实现，内部编辑器 */
	    updatesettings(): void;
	    /** 没有功能实现，内部编辑器 */
	    container: PIXI.Container;
	}

}
declare module 'c/Easing' {
	/**
	 *  完整的缓动曲线列表
	 * @namespace tween.Easing
	 * @example
	 *
	 * // then set via new vfui.Tween({x:0}).to({x:100}, 1000).easing(tween.Easing.Quadratic.InOut).start()
	 */
	export const Easing: {
	    Linear: {
	        None(k: number): number;
	    };
	    Quadratic: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Cubic: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Quartic: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Quintic: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Sinusoidal: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Exponential: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Circular: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Elastic: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Back: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Bounce: {
	        In(k: number): number;
	        Out(k: number): number;
	        InOut(k: number): number;
	    };
	    Stepped: {
	        steps: (steps: number) => (k: number) => number;
	    };
	};

}
declare module 'c/tween/constants' {
	/**
	 * 卡帧后的平滑处理帧率
	 */
	export const FRAME_MS: number;
	/**
	 * 平滑处理允许的触发时间
	 */
	export const TOO_LONG_FRAME_MS = 250;
	/**
	 * 链式补间动画的key前缀
	 */
	export const CHAINED_TWEENS = "_chainedTweens";
	export const STRING_PROP = "STRING_PROP";
	export const NUM_REGEX: RegExp;
	export function decomposeString(fromValue: string | any): any;
	export function decompose(prop: any, obj: any, from: any, to: any): any;
	export const RGB = "rgb(";
	export const RGBA = "rgba(";
	export function isRGBColor(v: any, i: number, r?: string): boolean;
	export function recompose(prop: any, obj: any, from: any, to: any, t: any, originalT: any, stringBuffer?: any): any;
	export const SET_NESTED: (nested: any) => any;

}
declare module 'c/tween/Interpolation' {
	/**
	 * 差值计算列表
	 * @namespace TWEEN.Interpolation
	 * @example
	 *
	 * let bezier = vfui.tween.Interpolation.Bezier
	 * new vfui.tween.Tween({x:0}).to({x:[0, 4, 8, 12, 15, 20, 30, 40, 20, 40, 10, 50]}, 1000).interpolation(bezier).start()
	 * @memberof vfui.tween
	 */
	export const Interpolation: {
	    Linear(v: any, k: number, value: any): any;
	    Bezier(v: any, k: number, value: any): any;
	    CatmullRom(v: any, k: number, value: any): any;
	    Utils: {
	        Linear(p0: any, p1: any, t: any, v: any): any;
	        Reset(value: any): any;
	        Bernstein(n: any, i: any): number;
	        Factorial: (n: any) => number;
	        CatmullRom(p0: any, p1: any, p2: any, p3: any, t: any, v?: any): any;
	    };
	};

}
declare module 'c/Tween' {
	/// <reference types="pixi.js" />
	import { add, get, getAll, remove, removeAll, removeDisplay, update } from 'c/tween/core';
	/**
	 * 缓动动画的主类
	 * @constructor
	 * @class
	 * @namespace vfui.Tween
	 * @param {Object=} object
	 * @example let tween = new Tween(myObject).to({width:'300px'}, 2000).start()
	 */
	export class Tween extends PIXI.utils.EventEmitter {
	    static core: {
	        add: typeof add;
	        get: typeof get;
	        getAll: typeof getAll;
	        remove: typeof remove;
	        removeAll: typeof removeAll;
	        removeDisplay: typeof removeDisplay;
	        update: typeof update;
	    };
	    static Event: {
	        Callback: string;
	        update: string;
	        complete: string;
	        start: string;
	        repeat: string;
	        reverse: string;
	        pause: string;
	        play: string;
	        restart: string;
	        stop: string;
	    };
	    /**
	     * Easier way to call the Tween
	     * @param {object} object - Initial value
	     * @param {object} to - Target value
	     * @param {object} params - Options of tweens
	     * @example Tween.fromTo(myObject, {x:0}, {x:200},1000)
	     * @memberof vfui.Tween
	     * @static
	     */
	    static fromTo(object: any, to: any, duration?: number): Tween;
	    /**
	     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
	     * @param {any} object object
	     * @param {object} to - Target value
	     * @param {object} params - Options of tweens
	     * @example Tween.to(myObject, {x:200}, 1000)
	     * @memberof vfui.Tween
	     * @static
	     */
	    static to(object: any | any[], to: any, duration?: number): Tween;
	    /**
	     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
	     * @param {any} object object
	     * @param {object} from - Initial value
	     * @param {object} params - Options of tweens
	     * @example Tween.from(myObject, {x:200}, 1000)
	     * @memberof vfui.Tween
	     * @static
	     */
	    static from(object: any, from: any, duration?: number): Tween;
	    constructor(object?: any);
	    id: string;
	    object: any;
	    private _valuesEnd;
	    private _valuesStart;
	    protected _duration: number;
	    private _easingFunction;
	    private _easingReverse;
	    private _interpolationFunction;
	    protected _startTime: number;
	    protected _delayTime: number;
	    private _repeat;
	    private _initRepeat;
	    _isPlaying: boolean;
	    private _yoyo;
	    private _reversed;
	    private _onStartCallbackFired;
	    private _isFinite;
	    private _prevTime;
	    private _rendered;
	    private _reverseDelayTime;
	    /** 附加数据 */
	    data: {
	        [key: string]: TAny;
	    };
	    /**
	     * 是否在播放中
	     * @return {boolean}
	     * @example tween.isPlaying()
	     * @memberof vfui.Tween
	     */
	    readonly isPlaying: boolean;
	    /**
	     * 是否开始播放
	     * @return {boolean}
	     * @example tween.isStarted()
	     * @memberof vfui.Tween
	     */
	    readonly isStarted: boolean;
	    /**
	     * 获取动画的开始时间
	     */
	    /**
	    * 获取动画的开始时间
	    */
	    startTime: number;
	    /**
	     * 设置缓动时长
	     * @param {number} amount 持续的毫秒值
	     * @example tween.duration(2000)
	     * @memberof vfui.Tween
	     * @deprecated 不推荐使用这个方法，内部使用
	     * @private
	     */
	    duration: number | Function;
	    /**
	     * 逆向缓动
	     * @example tween.reverse()
	     * @param {boolean=} state 是否逆向
	     * @memberof vfui.Tween
	     */
	    reverse(state?: boolean): this;
	    /**
	     * 当前动画是否逆转
	     * @return {boolean}
	     * @example tween.reversed() true逆向中
	     * @memberof vfui.Tween
	     */
	    reversed(): boolean;
	    /**
	     * 暂停缓动
	     * @example tween.pause()
	     * @memberof vfui.Tween
	     */
	    pause(): boolean | this;
	    /**
	     * 播放或恢复播放
	     * @example tween.play()
	     * @memberof vfui.Tween
	     */
	    play(): boolean | this;
	    /**
	     * 设置要缓动的目标属性与持续时间
	     * @param {object} properties 目标属性值
	     * @param {number|Object=} [duration=1000] 持续时间
	     * @example let tween = new vfui.Tween({x:0}).to({x:100}, 2000)
	     * @memberof vfui.Tween
	     */
	    to(properties: any, duration?: number): this;
	    private render;
	    /**
	     * 开始执行缓动
	     * @param {number|string} time 要开始的时间，延迟值
	     * @example tween.start()
	     * @memberof vfui.Tween
	     */
	    start(time?: number): this;
	    /**
	     * 停止缓动
	     * @example tween.stop()
	     * @memberof vfui.Tween
	     */
	    stop(): boolean | this;
	    /**
	     * 设置延迟执行时间
	     * @param {number} amount 延迟等待的时间，毫秒
	     * @example tween.delay(500)
	     * @memberof vfui.Tween
	     */
	    delay(amount: number): this;
	    /**
	     * 设置重复执行的次数
	     * @param {number} amount 重复次数
	     * @example tween.repeat(5)
	     * @memberof vfui.Tween
	     */
	    repeat(amount: number): this;
	    /**
	     * 设置每个重复执行过程的延迟时间，毫秒
	     * @param {number} amount 延迟值
	     * @example tween.reverseDelay(500)
	     * @memberof vfui.Tween
	     */
	    reverseDelay(amount: number): this;
	    /**
	     * 是否在重复执行中启用反向动画
	     * @param {boolean} state true启动
	     * @param {Function=} _easingReverse 反向时的Easing function
	     * @example tween.yoyo(true)
	     * @memberof vfui.Tween
	     */
	    yoyo(state?: boolean | Function, _easingReverse?: (k: number) => number): this;
	    /**
	     * 设置缓动函数
	     * @param {Function} _easingFunction 缓动函数的公式，如果设置yoyo的第二个值会应用于逆向缓动
	     * @example tween.easing(Easing.Elastic.InOut)
	     * @memberof vfui.Tween
	     */
	    easing(_easingFunction: ((k: number) => number) | TAny): this;
	    /**
	     * 设置差值
	     * @param {Function} _interpolationFunction 差值的函数
	     * @example tween.interpolation(Interpolation.Bezier)
	     * @memberof vfui.Tween
	     */
	    interpolation(_interpolationFunction: (v: any, k: number, value: any) => any): this;
	    /**
	     * 更新动画到指定时间点，进行播放
	     * @param time
	     */
	    gotoAndPlay(time: number): void;
	    /**
	     * 更新动画到指定时间点，停止播放
	     * @param time
	     */
	    gotoAndStop(time: number): void;
	    /**
	     * 更新动画到指定时间点，停止播放
	     * @param time
	     */
	    gotoAndEnd(): void;
	    /**
	     * 更新函数，通过给定的 `time` 设置目标属性变化
	    * @param {number=} elapsedMS 帧间隔
	    * @param {Boolean=} preserve 完成后，防止删除动画对象
	     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
	     * @example tween.update(100)
	     * @memberof vfui.Tween
	     */
	    update(elapsedMS: number, preserve?: boolean, forceTime?: boolean): boolean;
	}

}
declare module 'c/tween/core' {
	import { Tween } from 'c/Tween';
	/**
	 * 插件存储器
	 * @namespace tween.Plugins
	 * @memberof vfui.tween
	 * @example
	 * let num = Plugins.num = function (node, start, end) {
	  * return t => start + (end - start) * t
	  * }
	  *
	  * @static
	  */
	export const Plugins: TAny;
	/**
	 * 添加对象到缓动列表
	 * @param {Tween} tween Tween 实例
	 * @memberof vfui.tween
	 * @example
	 * let tween = new vfui.tween.Tween({x:0})
	 * tween.to({x:200}, 1000)
	 * vfui.tween.add(tween)
	 */
	export function add(tween: Tween): void;
	/**
	 * 没有缓动后，设置运行多少帧后，停止
	 * @param {number} frameCount=120 删除所有动画后，要运行的剩余帧
	 * @memberof vfui.tween
	 * @example
	 * vfui.tween.FrameThrottle(60)
	 */
	export function FrameThrottle(frameCount?: number): void;
	/**
	 * 延时处理，针对插件、canvas、dom
	 * @param {number} state=true 是否平滑处理
	 * @memberof vfui.tween
	 * @example
	 * vfui.tween.ToggleLagSmoothing(false)
	 */
	export function ToggleLagSmoothing(_state?: boolean): void;
	/**
	 * 获得所有缓动对象
	 * @memberof vfui.tween
	 * vfui.tween.getAll()
	 */
	export function getAll(): Tween[];
	/**
	 * 移除所有动画对象
	 * @example  vfui.tween.removeAll()
	 * @memberof vfui.tween
	 */
	export function removeAll(): void;
	/**
	 * 获取对象
	 * @param {Tween} tween 缓动对象实例
	 * @return {Tween} 返回对象或null
	 * @memberof vfui.tween
	 * @example
	 * vfui.tween.get(tween)
	 */
	export function get(tween: Tween): Tween | null;
	export function removeDisplay(uuid: string): void;
	/**
	 * 从缓动列表移除对象
	 * @param {Tween} tween Tween instance
	 * @memberof vfui.tween
	 * @example
	 * vfui.tween.remove(tween)
	 */
	export function remove(tween: Tween): void;
	/**
	 * 按给定时间更新缓动
	 * @param {number=} time 时间戳
	 * @param {Boolean=} preserve 完成后，防止删除动画对象
	 * @memberof vfui.tween
	 * @example
	 * vfui.tween.update(500)
	 */
	export function update(time: number, preserve?: boolean): boolean;
	/**
	 * 是否正在运行中
	 * @return {Boolean} 只要还有缓动在运行，返回true
	 * @memberof vfui.tween
	 * @example vfui.tween.isRunning()
	 */
	export function isRunning(): boolean;
	/**
	 * 返回是否开启延迟平滑状态
	 * @return {Boolean}
	 * @memberof vfui.tween
	 * @example vfui.tween.isRunning()
	 */
	export function isLagSmoothing(): boolean;

}
declare module 'core/ObjectPool' {
	 class ObjectPool {
	    constructor();
	    /**
	     * 作为对象池的词典dict
	     */
	    private objPoolDict;
	    /**
	     * 向对象池中放入对象，以便重复利用
	     */
	    push<T extends Lifecycle, S>(keyClass: S, oldObj: T): void;
	    /**
	     * 从对象池中取出需要的对象
	     * @return 取出的相应对象
	     *
	     */
	    pop<T>(keyClass: T): TAny;
	}
	/**
	 * 对象池实例
	 */
	export const objectPoolShared: ObjectPool;
	export {};

}
declare module 'c/Timeline' {
	 class Node {
	    constructor(node?: Node);
	    parent: Node | undefined;
	    default: number;
	    start: TAny;
	    end: TAny;
	    easing: TAny;
	    duration: number;
	    startFrame: number;
	    endFrame: number;
	    prevTime: number;
	    release(): void;
	    load(): void;
	    destroy(): void;
	}
	/**
	 * 时间轴主类
	 *
	 * @constructor
	 * @class
	 * @namespace tween.Timeline
	 * @param {Object=} params 默认参数
	 * @example let tl = new Timeline({delay:200})
	 * @extends Tween
	 */
	export class Timeline implements Lifecycle {
	    constructor();
	    id: number;
	    private _object;
	    private _frames;
	    private _frameCount;
	    private _elapsedMS;
	    private _prevTime;
	    private _isStop;
	    private _lastNode;
	    private _isSetDefault;
	    isLoop: boolean;
	    setDefault(object: TAny, _duration: number, fps: number): this;
	    addProperty(property: string, value: number | string | boolean, endFrame: number, easing?: TAny): this;
	    stop(): void;
	    play(): void;
	    gotoAndPlay(frame: number): void;
	    gotoAndStop(frame: number): void;
	    private seekLastNode;
	    private goto;
	    update(a: number, b?: number, elapsedMS?: number): true | undefined;
	    updateobject(key: string, node: Node): boolean;
	    load(): void;
	    release(): void;
	    destroy(destroyWebGL?: boolean): void;
	}
	export {};

}
declare module 'c/tween/index' {
	import { add, get, getAll, isRunning, FrameThrottle, ToggleLagSmoothing, Plugins, remove, removeAll, removeDisplay, update } from 'c/tween/core';
	import { Easing } from 'c/Easing';
	import { Interpolation } from 'c/tween/Interpolation';
	import * as utils from 'c/tween/constants';
	import { TweenEvent } from 'interaction/InteractionEvent';
	import { Tween } from 'c/Tween';
	import { Timeline } from 'c/Timeline';
	export { Plugins, get, getAll, removeAll, remove, removeDisplay, add, update, isRunning, FrameThrottle, ToggleLagSmoothing, Tween, Easing, Interpolation, TweenEvent, Timeline, utils };

}
declare module 'core/Ticker' {
	 class Ticker extends PIXI.utils.EventEmitter {
	    /**
	     * 心跳构造函数
	     * @param autoStart 是否自动开启心跳，默认false
	     */
	    constructor(autoStart: boolean);
	    private _disabled;
	    /** 是否关闭心跳.默认false不关闭,关闭后，缓动等组件也将关闭 */
	    disabled: boolean;
	    update(deltaTime: number, lastTime: number, elapsedMS: number): void;
	    /**
	     * 增加更新监听器
	     * @param fn 被调用的函数
	     * @param context 当前域
	     */
	    addUpdateEvent<T>(fn: (deltaTime: number, lastTime?: number, elapsedMS?: number) => void, context: T): this;
	    /**
	     * 移除更新监听器
	     * @param fn 被调用的函数
	     * @param context 当前域
	     */
	    removeUpdateEvent<T>(fn: (deltaTime: number, lastTime?: number, elapsedMS?: number) => void, context: T): this;
	}
	/**
	 * Ticker 的实例
	 */
	export const shared: Ticker;
	export {};

}
declare module 'c/Image' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase'; type RepeatEnum = "no-repeat" | "repeat" | "nineSlice";
	/**
	 * 图片
	 * Event: sourceComplete
	 */
	export class Image extends UIBase {
	    /** 图片加载完成事件 */
	    static readonly onload = "onload";
	    constructor(repeat?: RepeatEnum);
	    _sprite: PIXI.Sprite | PIXI.TilingSprite | PIXI.NineSlicePlane | undefined;
	    protected _texture: PIXI.Texture | undefined;
	    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
	    protected _isLoad: boolean;
	    /**
	     * 设置背景方式
	     */
	    private _backgroundRepeat;
	    backgroundRepeat: RepeatEnum;
	    /**
	     * 获取或设置显示源
	     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
	     *
	     * 设置null可以传入PIXI.Texture.EMPTY
	     */
	    source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
	    private _anchorX;
	    /** 设置X的锚点 */
	    anchorX: number;
	    private _anchorY;
	    /** 设置Y的锚点 */
	    anchorY: number;
	    private _leftWidth;
	    /**
	     * 获取设置距离左边宽度
	     */
	    leftWidth: number;
	    private _topHeight;
	    /**
	     * 获取设置距离顶部宽度
	     */
	    topHeight: number;
	    private _rightWidth;
	    /**
	     * 获取设置距离右边宽度,no-repeat|nineSlice状态时，无效果
	     */
	    rightWidth: number;
	    private _bottomHeight;
	    /**
	     * 获取设置距离底部宽度,no-repeat|nineSlice状态时，无效果
	     */
	    bottomHeight: number;
	    /**
	     * nineSlice状态时,9切时的固定值
	    */
	    borderWidth: number;
	    protected createSprite(): void;
	    update(): void;
	}
	export {};

}
declare module 'c/Rect' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	/**
	 * UI 矩形
	 *
	 * @class
	 * @extends PIXI.UI.UIBase
	 * @memberof PIXI.UI
	 * @param Texture {PIXI.Texture} 文本对象
	 */
	export class Rect extends UIBase {
	    constructor();
	    private _graphics;
	    private _graphicsDirty;
	    private _radius;
	    private _fill;
	    private _rx;
	    private _ry;
	    private _lineWidth;
	    private _lineColor;
	    private drawUpdate;
	    /** 绘制矩形方法 */
	    drawRoundedRect(x: number, y: number, width: number, height: number, radius: number, color?: number): void;
	    /** 获得绘制矢量源 */
	    readonly graphics: PIXI.Graphics;
	    /**
	     * 圆角
	     */
	    radius: number;
	    /**
	     * 要填充的颜色
	     * @default 0xFFFFFF
	     * */
	    fill: number;
	    /**
	     * 线条宽度
	     */
	    lineWidth: number | undefined;
	    /**
	     * 线条颜色
	     */
	    lineColor: number | undefined;
	    /**
	     * 绘制的起始坐标
	     */
	    rx: number;
	    /**
	     * 绘制的起始坐标
	     */
	    ry: number;
	    /**
	     * 显示对象填充色 0xFFFFFF
	     */
	    tint: number;
	    update(): void;
	}

}
declare module 'c/Container' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	import { Image } from 'c/Image';
	import { Rect } from 'c/Rect';
	/**
	 * UI的显示容器
	 *
	 * @class
	 * @extends PIXI.UI.UIBase
	 * @memberof PIXI.UI
	 * @param width {Number} 宽度
	 * @param height {Number} 高度
	 */
	export class Container extends UIBase {
	    constructor(width?: number, height?: number);
	    update(): void;
	    private _mask;
	    /**
	     * 设置遮罩
	     */
	    mask: Image | Rect | PIXI.Sprite | PIXI.Graphics | undefined;
	}

}
declare module 'interaction/MouseScrollEvent' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	/**
	 * 鼠标滑轮事件
	 *
	 *  可侦听事件(未实现):
	 * ```
	 *  {InteractionEvent}.MouseScroll.xxxxxx.
	 * ```
	 *  可赋值方法:
	 * ```
	 * oonMouseScroll: ((e: WheelEvent,delta: PIXI.Point) => void) | undefined
	 * ```
	 *
	 * @example 可查看 `Slider` 源码
	 *
	 * @since 1.0.0
	 */
	export class MouseScrollEvent {
	    /**
	     *
	     * @param obj 需要绑定的对象
	     * @param preventDefault 是否组织系统默认的事件触发
	     */
	    constructor(obj: UIBase, preventDefault: boolean);
	    id: string;
	    private obj;
	    private preventDefault;
	    private delta;
	    private mouseScrllBind;
	    private startEvent;
	    private _onMouseScroll;
	    private _onHover;
	    private _onMouseOut;
	    stopEvent(): void;
	    remove(): void;
	    onMouseScroll: ((e: WheelEvent, delta: PIXI.Point) => void) | undefined;
	}

}
declare module 'c/ScrollingContainer' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	import { Container } from 'c/Container';
	/**
	 * 可滚动的容器
	 */
	export class ScrollingContainer extends Container {
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

}
declare module 'c/SortableList' {
	import { Container } from 'c/Container';
	import { UIBase } from 'core/UIBase';
	/**
	 * UI 可以排序的容器
	 */
	export class SortableList extends Container {
	    constructor();
	    /**
	     * 是否按降序排序
	     * @private false
	     */
	    desc: boolean;
	    /**
	     * 是否开启排序动画，默认不开启
	     * @default 0
	     */
	    tweenTime: number;
	    tweenEase: (k: number) => number;
	    items: UIBase[];
	    private _sortTimeout;
	    /**
	     * 添加显示列表，通过参数函数进行排序
	     * @param UIObject UI显示对象
	     * @param fnValue 前置条件
	     * @param fnThenBy 后置条件
	     */
	    addChild(UIObject: UIBase, fnValue?: Function, fnThenBy?: Function): UIBase;
	    removeChild(UIObject: UIBase): void;
	    sort(instant?: boolean): void;
	    _sort(): void;
	}

}
declare module 'c/Slider' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	import { Image } from 'c/Image';
	import { DragEvent } from 'interaction/DragEvent';
	import { InteractionEvent } from 'interaction/InteractionEvent';
	/**
	 * UI 滑动条
	 */
	export class Slider extends UIBase {
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
	    protected _track: Image;
	    protected _tracklight: Image;
	    protected _thumb: Image;
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
	    protected onThumbLoadComplete(rectangle: PIXI.Rectangle, source: Image): void;
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

}
declare module 'c/ScrollBar' {
	/// <reference types="pixi.js" />
	import { Slider } from 'c/Slider';
	import { ScrollingContainer } from 'c/ScrollingContainer';
	import { Image } from 'c/Image';
	/**
	 * UI 带有滚动条的容器
	 */
	export class ScrollBar extends Slider {
	    constructor(trackBorderWidth?: number, thumbBorderWidth?: number, tracklightBorderWidth?: number);
	    /**
	     * 是的自动隐藏滚动条
	     */
	    autohide: boolean;
	    private _scrollingContainer;
	    private _hidden;
	    protected toggleHidden(hidden: boolean): void;
	    protected onThumbLoadComplete(rectangle: PIXI.Rectangle, source: Image): void;
	    protected triggerValueChanging(): void;
	    scrollingContainer: ScrollingContainer | undefined;
	    protected alignToContainer(): void;
	}

}
declare module 'c/SpriteAnimated' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	/**
	 * UI 序列图动画
	 * 需要设置轴点旋转，需要使用texturepacker处理轴点
	 *
	 * @class
	 * @extends PIXI.UI.UIBase
	 * @memberof PIXI.UI
	 */
	export class SpriteAnimated extends UIBase {
	    constructor();
	    private _animatedSprites;
	    private _curAnimation;
	    private _animationName;
	    animationName: string;
	    /**
	     * 是否自动播放
	     */
	    private _autoPlay;
	    autoPlay: boolean;
	    /**
	     * 设置源,loader中的PIXI.Spritesheet
	     */
	    private _source;
	    source: PIXI.Spritesheet | PIXI.Texture[] | undefined;
	    /**
	     * 播放速度
	    */
	    private _animationSpeed;
	    animationSpeed: number;
	    /**
	     * 是否循环
	     */
	    private _loop;
	    loop: boolean;
	    /** 跳转到第N帧并播放 */
	    gotoAndPlay(frameNumber: number): void;
	    /** 跳转到第N帧并停止 */
	    gotoAndStop(frameNumber: number): void;
	    /** 停止 */
	    stop(): void;
	    /** 播放 */
	    play(): void;
	    update(): void;
	}

}
declare module 'c/TextStyle' {
	/// <reference types="pixi.js" />
	export class TextStyle extends PIXI.TextStyle {
	    constructor(style?: {
	        align?: string;
	        breakWords?: boolean;
	        dropShadow?: boolean;
	        dropShadowAlpha?: number;
	        dropShadowAngle?: number;
	        dropShadowBlur?: number;
	        dropShadowColor?: string | number;
	        dropShadowDistance?: number;
	        fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
	        fillGradientType?: number;
	        fillGradientStops?: number[];
	        fontFamily?: string | string[];
	        fontSize?: number | string;
	        fontStyle?: string;
	        fontVariant?: string;
	        fontWeight?: string;
	        leading?: number;
	        letterSpacing?: number;
	        lineHeight?: number;
	        lineJoin?: string;
	        miterLimit?: number;
	        padding?: number;
	        stroke?: string | number;
	        strokeThickness?: number;
	        trim?: boolean;
	        textBaseline?: string;
	        whiteSpace?: string;
	        wordWrap?: boolean;
	        wordWrapWidth?: number;
	    });
	}

}
declare module 'interaction/ClickEvent' {
	import { UIBase } from 'core/UIBase';
	import { InteractionEvent } from 'interaction/InteractionEvent';
	/**
	 * 点击触摸相关的事件处理订阅类,UI组件内部可以创建此类实现点击相关操作
	 *
	 *  可侦听事件:
	 * ```
	 *  {InteractionEvent}.TouchEvent.onHover
	 *  {InteractionEvent}.TouchEvent.onPress
	 *  {InteractionEvent}.TouchEvent.onClick
	 *  {InteractionEvent}.TouchEvent.onMove
	 * ```
	 *  可赋值方法:
	 * ```
	 *  onHover: ((e: InteractionEvent,thisOBj:UIBase,over: boolean) => void) | undefined
	 *  onPress: ((e: InteractionEvent,thisOBj:UIBase, isPressed: boolean) => void) | undefined;
	 *  onClick: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
	 *  onMove: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
	 * ```
	 *
	 * @example 可查看 `TestSliceSprite` 示例
	 *
	 * @since 1.0.0
	 */
	export class ClickEvent {
	    /**
	     * ClickEvent 构造函数
	     * @param obj 调用的显示对象
	     * @param isOpenEmitEvent 是否开启事件派发，默认false，开启后，父类可以监听InteractionEvent下的TouchEvent
	     * @param includeHover 是否监听鼠标移上与移出，默认true
	     * @param rightMouseButton 是否开启鼠标右键点击，默认false
	     * @param doubleClick 是否开启鼠标双击,默认false
	     */
	    constructor(obj: UIBase, isOpenEmitEvent?: boolean, includeHover?: boolean, rightMouseButton?: boolean, doubleClick?: boolean);
	    private obj;
	    id: number;
	    /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | vfui.Interaction.TouchEvent */
	    isOpenEmitEvent: boolean;
	    private offset;
	    private movementX;
	    private movementY;
	    private ishover;
	    private mouse;
	    private bound;
	    private right;
	    private hover;
	    private double;
	    private time;
	    private eventnameMousedown;
	    private eventnameMouseup;
	    private eventnameMouseupoutside;
	    private startEvent;
	    private _onMouseDown;
	    private emitTouchEvent;
	    private _mouseUpAll;
	    private _onMouseUp;
	    private _onMouseUpOutside;
	    private _onMouseOver;
	    private _onMouseOut;
	    private _onMouseMove;
	    /** 清除拖动 */
	    stopEvent(): void;
	    remove(): void;
	    onHover: ((e: InteractionEvent, thisOBj: UIBase, over: boolean) => void) | undefined;
	    onPress: ((e: InteractionEvent, thisOBj: UIBase, isPressed: boolean) => void) | undefined;
	    onClick: ((e: InteractionEvent, thisOBj: UIBase) => void) | undefined;
	    onMove: ((e: InteractionEvent, thisOBj: UIBase) => void) | undefined;
	}

}
declare module 'interaction/InputController' {
	import { UIBase } from 'core/UIBase';
	interface CheckGroupObject {
	    groups: {
	        [key: string]: {
	            [value: string]: CheckBox;
	        };
	    };
	    values: {
	        [key: string]: string | undefined;
	    };
	}
	/**
	 *
	 * @private
	 */
	export const tabGroups: {
	    [key: string]: UIBase[];
	};
	/**
	 *
	 * @private
	 */
	export const _checkGroupObject: CheckGroupObject;
	/**
	 * 注册组件
	 * @param item
	 * @param tabIndex 切换位置
	 * @param tabGroup 分组名
	 * @returns 依据tabIndex返回是否需要排序 0，-1，1
	 */
	export function registrer(item: UIBase, tabIndex: number, tabGroup?: string): void;
	/** 失去焦点时 */
	export function blur(): void;
	/** 设置当前输入组件 */
	export function set(item: UIBase): void;
	/** 清楚当前设置的组件 */
	export function clear(): void;
	/** 一般再按下键盘tab健执行 焦点获取与设置 */
	export function fireTab(): void;
	/** 一般再按下键盘向下箭头执行 焦点获取与设置 */
	export function fireNext(): void;
	/** 一般再按下键盘向上箭头执行 焦点获取与设置 */
	export function firePrev(): void;
	/**
	 * 注册分组，一般用于checkBox组件的分组操作
	 *
	 *  ==== 目前没有实现卸载，如果无限制创建checkbox并设置分组可能引发泄露 ====
	 *
	 * checkGroups = [key]:{["value"]:cb}
	 */
	export function registrerCheckGroup(cb: CheckBox): void;
	/**
	 * 注销指定分组或指定分组的子项
	 * @param cb CheckBox
	 */
	export function unRegistrerCheckGroup(cb: CheckBox): void;
	/** 更新分组中选中的checkbox组件  */
	export function updateCheckGroupSelected(cb: CheckBox): void;
	/** 获取分组中选中的checkbox值 */
	export function getCheckGroupSelectedValue(name: string): string | undefined;
	/** 设置选中 */
	export function setCheckGroupSelectedValue(name: string, uuid: string): void;
	export {};

}
declare module 'interaction/ComponentEvent' {
	/**
	 * 特定属性改变时
	 * 1. CheckBox 的 checked 改变时
	 * 2. Text 的 label 改变时
	 */
	export const CHANGE = "CHANGE";

}
declare module 'interaction/Index' {
	import { ClickEvent } from 'interaction/ClickEvent';
	import * as DragDropController from 'interaction/DragDropController';
	import { DragEvent } from 'interaction/DragEvent';
	import * as InputController from 'interaction/InputController';
	import { MouseScrollEvent } from 'interaction/MouseScrollEvent';
	import { InteractionEvent, TouchMouseEvent } from 'interaction/InteractionEvent';
	import * as ComponentEvent from 'interaction/ComponentEvent';
	export { ClickEvent, DragDropController, DragEvent, InputController, MouseScrollEvent, InteractionEvent, TouchMouseEvent, ComponentEvent };

}
declare module 'c/Text' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	import { TextStyle } from 'c/TextStyle';
	/**
	 * UI文本显示对象
	 *
	 * 中文换行特殊处理 xxxx.style.breakWords = true;
	 *
	 * @class
	 * @extends PIXI.UI.UIBase
	 * @memberof PIXI.UI
	 * @param Texture {PIXI.Texture} 文本对象
	 * @see https://pixijs.io/pixi-text-style
	 */
	export class Text extends UIBase {
	    /**
	     * 文本构造函数
	     * @param text 要显示的内容，默认为""
	     * @param TextStyle {} 文本样式，参考TextStyle
	     */
	    constructor(text?: string, TextStyle?: TextStyle);
	    private _text;
	    private _source;
	    /**
	     * 获取或设置文本
	     */
	    private source;
	    /**
	     * 获取或设置文本内容
	     */
	    label: string;
	    style: TextStyle;
	    readonly textWidth: number;
	    readonly textHeight: number;
	    readonly textBounds: PIXI.Rectangle;
	    baseupdate(): void;
	    update(): void;
	}
	/** 获得默认行高 */
	export function defaultLineHeight(style?: TextStyle): {
	    lineHeight: number;
	    textHeight: number;
	};

}
declare module 'c/InputText/HtmlInput' {
	/// <reference types="pixi.js" />
	/**
	 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
	 */
	export default class HtmlInput extends PIXI.utils.EventEmitter {
	    constructor(multiline: boolean);
	    private _domInput;
	    private _selection;
	    private _restrictRegex;
	    private _restrict_value;
	    readonly domInput: HTMLInputElement | HTMLTextAreaElement;
	    visible: boolean;
	    value: string;
	    placeholder: string;
	    disabled: boolean;
	    restrict: RegExp | undefined;
	    setStyle(style: InputStyle): void;
	    setStyleValue(key: TAny, value: TAny): void;
	    setAttribute(key: string, value: string): void;
	    select(): void;
	    /** 测量，需要对象添加到body中 */
	    getDOMInputBounds(): ClientRect | DOMRect;
	    updatePostion(top: string | number, left: string | number, transform: string, opacity?: string | number): void;
	    private addDom;
	    private removeDom;
	    destroy(): void;
	    private _onInputKeyDownBind;
	    private _onInputInputBind;
	    private _onInputKeyUpBind;
	    private _onFocusedBind;
	    private _onBlurredBind;
	    private addEvent;
	    private removeEvent;
	    private _applyRestriction;
	    private _onInputKeyDown;
	    private _onInputInput;
	    private _onInputKeyUp;
	    private _onFocused;
	    private _onBlurred;
	    focus(): void;
	    blur(): void;
	}

}
declare module 'c/TextInput' {
	/// <reference types="pixi.js" />
	import { UIBase } from 'core/UIBase';
	/**
	 * @example
	 * new PIXI.TextInput({
	 * input: {
	 *      fontSize: '25pt',
	 *      padding: '14px',
	 *      width: '500px',
	 *      color: '#26272E'
	 *  },
	 *  box: {...}
	 * })
	 */
	export class TextInput extends UIBase {
	    constructor(styles?: TAny);
	    private htmlInputShared;
	    private _inputStyle;
	    private _disabled;
	    private _maxLength;
	    private _previous;
	    private _domVisible;
	    private _placeholder;
	    private _placeholderColor;
	    private _substituted;
	    private _lastRenderer;
	    private _resolution;
	    private _canvasBounds;
	    private _surrogateHitbox;
	    private _surrogateMask;
	    private _surrogate;
	    private _fontMetrics;
	    protected state: string;
	    update(): void;
	    /**
	     * 预览文字
	     */
	    placeholder: string;
	    /**
	     * 设置不可用
	     */
	    disabled: boolean;
	    /**
	     * 设置最大可输入
	     */
	    maxLength: number;
	    /**
	     * 过滤表达式
	     */
	    restrict: RegExp | undefined;
	    /**
	     * 设置字体大小
	     */
	    fontSize: number;
	    /** 设置字体 */
	    fontFamily: string;
	    /**
	     * 设置字体颜色
	     */
	    fill: string;
	    /**
	     * 设置文本
	     */
	    text: string;
	    private substituteText;
	    /**
	     * 设置焦点
	     */
	    focus(): void;
	    /**
	     * 失去焦点
	     */
	    blur(): void;
	    /**
	     * 全选
	     */
	    select(): void;
	    /**
	     * 设置css style样式
	     * @param key 健
	     * @param value 值
	     */
	    setInputStyle(key: TAny, value: TAny): void;
	    private _onInputInput;
	    private _onFocused;
	    private _onBlurred;
	    private _setState;
	    render(renderer: PIXI.Renderer): void;
	    private _renderInternal;
	    private _update;
	    private _updateSubstitution;
	    private _updateDOMInput;
	    private _needsUpdate;
	    private _createSurrogate;
	    private _updateSurrogate;
	    private _updateSurrogateHitbox;
	    private _updateSurrogateMask;
	    private _destroySurrogate;
	    private _onSurrogateFocus;
	    private _ensureFocus;
	    private _deriveSurrogateStyle;
	    private _deriveSurrogatePadding;
	    private _deriveSurrogateText;
	    private _updateFontMetrics;
	    private _hasFocus;
	    private _getCanvasBounds;
	    private _getDOMRelativeWorldTransform;
	    private _pixiMatrixToCSS;
	    private _comparePixiMatrices;
	    private _compareClientRects;
	}

}
declare module 'core/InputBase' {
	import { UIBase } from 'core/UIBase';
	import { InteractionEvent } from 'interaction/InteractionEvent';
	/**
	 * 输入对象的基础类
	 *
	 * base object for all Input type objects
	 *
	 * @class
	 * @extends PIXI.UI.UIBase
	 * @memberof PIXI.UI
	 * @param width {number} 宽度
	 * @param height {number} 高度
	 * @param tabIndex {(PIXI.UI.SliceSprite|PIXI.UI.Sprite)} will be used as background for input
	 */
	export class InputBase extends UIBase {
	    constructor(width: number, height: number, tabIndex: number, tabGroup: string);
	    protected _focused: boolean;
	    private _useTab;
	    protected _usePrev: boolean;
	    protected _useNext: boolean;
	    protected __down: boolean;
	    protected onPointer(e: InteractionEvent): void;
	    protected keyDownEvent(event: WheelEvent | Event): void;
	    protected documentMouseDown(): void;
	    private keyDownEventBind;
	    protected _bindEvents(): void;
	    protected _clearEvents(): void;
	    focus(): void;
	    blur(): void;
	}

}
declare module 'core/InputSkinBase' {
	import { InputBase } from 'core/InputBase';
	import { ClickEvent } from 'interaction/ClickEvent';
	import { InteractionEvent } from 'interaction/InteractionEvent';
	import { Image } from 'c/Image';
	import { UIBase } from 'core/UIBase';
	/**
	 * UI 按钮显 示对象
	 *
	 * @class
	 * @extends PIXI.UI.InputBase
	 * @memberof PIXI.UI
	 * @param [options.tabIndex=0] {Number} input tab index
	 * @param [options.tabGroup=0] {Number|String} input tab group
	 * @param [options.width=100h] {Number|String} width
	 * @param [options.height=20] {Number|String} height
	 */
	export class InputSkinBase extends InputBase {
	    /**
	     * 按钮构造函数
	     *
	     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
	     */
	    constructor(width: number, height: number, tabIndex: number, tabGroup: string);
	    protected onHover(e: InteractionEvent, thisObj: UIBase, over: boolean): void;
	    protected onPress(e: InteractionEvent, thisObj: UIBase, isPress: boolean): void;
	    protected onClick(): void;
	    protected onMove(): void;
	    protected _isHover: boolean;
	    protected _background: Image;
	    protected _clickEvent: ClickEvent;
	    /**
	     * 组件的当前视图状态 。 后续扩展
	     */
	    protected _currentState: "Up" | "Move" | "Down";
	    currentState: "Up" | "Move" | "Down";
	    protected _sourceUp: string | undefined;
	    sourceUp: string | undefined;
	    protected _sourceMove: string | undefined;
	    sourceMove: string | undefined;
	    protected _sourceDown: string | undefined;
	    sourceDown: string | undefined;
	    focus(): void;
	    blur(): void;
	    updateHitArea(): void;
	    update(): void;
	}

}
declare module 'c/Button' {
	import { Text } from 'c/Text';
	import { InputSkinBase } from 'core/InputSkinBase';
	import { TextStyle } from 'c/TextStyle';
	/**
	 * UI 按钮显 示对象
	 *
	 * @class
	 * @extends PIXI.UI.InputBase
	 * @memberof PIXI.UI
	 * @param [options.tabIndex=0] {Number} input tab index
	 * @param [options.tabGroup=0] {Number|String} input tab group
	 * @param [options.width=100h] {Number|String} width
	 * @param [options.height=20] {Number|String} height
	 */
	export class Button extends InputSkinBase {
	    /**
	     * 按钮构造函数
	     *
	     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
	     */
	    constructor(option?: {
	        width: number;
	        height: number;
	        tabIndex: number;
	        tabGroup: number;
	    });
	    _text: Text;
	    protected initialize(): void;
	    /**
	     * 获取或设置文本内容
	     */
	    label: string;
	    /** 设置颜色 */
	    labelColor: string;
	    /** 设置文字大小 */
	    labelSize: number;
	    /** 设置文字居中方式 */
	    labelHorizontalAlign: number;
	    /** 设置文字复杂样式 */
	    labelStyle: TextStyle;
	    readonly text: Text;
	}

}
declare module 'c/CheckBox' {
	import { InputSkinBase } from 'core/InputSkinBase';
	/**
	 * UI 单选框与复选框，区别在于有没有时间去拆分，如果没有时间拆分就直接用这个吧，只是皮肤不同
	 *
	 * box不需要设置设置组
	 *
	 * radio 需要设置分组
	 *
	 * @class
	 * @extends PIXI.UI.InputBase
	 * @memberof PIXI.UI
	 * @param [options.tabIndex=0] {Number} input tab index
	 * @param [options.tabGroup=0] {Number|String} input tab group
	 * @param [options.width=20] {Number|String} width
	 * @param [options.height=20] {Number|String} height
	 */
	export class CheckBox extends InputSkinBase {
	    /**
	     * 按钮构造函数
	     *
	     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
	     */
	    constructor(option?: {
	        width: number;
	        height: number;
	        tabIndex: number;
	        tabGroup: number;
	    });
	    private _checkmark;
	    private _checked;
	    private _checkGroup;
	    private _value;
	    protected _sourceMark: string | undefined;
	    /** 勾选图 */
	    sourceMark: string | undefined;
	    /**
	     * 获取设置默认值
	     */
	    value: string | undefined;
	    /**
	     * 获取或设置当前选中的值
	     */
	    readonly selectedValue: string | undefined;
	    /**
	     * 设置分组名
	     */
	    checkGroup: string | undefined;
	    /**
	     * 设置是否选中
	     * @default false
	     */
	    checked: boolean;
	    protected onClick(): void;
	    update(): void;
	}

}
declare module 'UI' {
	import { Stage } from 'core/Stage';
	import { UIBase } from 'core/UIBase';
	import { shared as TickerShared } from 'core/Ticker';
	import * as Utils from 'core/Utils';
	import { Container } from 'c/Container';
	import { ScrollingContainer } from 'c/ScrollingContainer';
	import { SortableList } from 'c/SortableList';
	import { ScrollBar } from 'c/ScrollBar';
	import { Image } from 'c/Image';
	import { SpriteAnimated } from 'c/SpriteAnimated';
	import { Text } from 'c/Text';
	import { TextStyle } from 'c/TextStyle';
	import { TextInput } from 'c/TextInput';
	import { Slider } from 'c/Slider';
	import { Button } from 'c/Button';
	import { CheckBox } from 'c/CheckBox';
	import { Rect } from 'c/Rect';
	import { Tween } from 'c/Tween';
	import { Timeline } from 'c/Timeline';
	import { Easing } from 'c/Easing';
	import * as Interaction from 'interaction/Index';
	import * as AlignEnum from 'enum/AlignEnum';
	/** 请不要在编写UI组件内部使用本类 */
	export { Utils, Stage, Container, ScrollingContainer, SortableList, Slider, ScrollBar, Text, TextStyle, TextInput, Button, CheckBox, Rect, Interaction, UIBase, TickerShared, AlignEnum, Tween, Timeline, Easing, Image, SpriteAnimated };

}
declare module 'pixi-vfui' {
	import * as pixivfui from 'UI';
	export default pixivfui;

}
declare module 'c/tween/PlaybackPosition' {
	/**
	 * 回放位置的相关操作函数
	 */
	export default class PlaybackPosition {
	    constructor();
	    private totalTime;
	    private labels;
	    private offsets;
	    parseLabel(_name: string, offset: string | number | null): number;
	    addLabel(_name: string, offset: string | number | null): this;
	    setLabel(_name: string, offset: string | number | null): this;
	    eraseLabel(_name: string, offset: string | number | null): this;
	}

}
/** 严禁外部使用，声明 */
declare type TAny = any;
interface Window {
    readonly clipboardData: DataTransfer | null;
    vfui: any;
}
declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}
interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    from<T>(arrayLike: ArrayLike<T>): T[];
}
interface String {
    startsWith(searchString: string, position?: number): boolean;
}
interface TUIBase {
    blur?: Function;
    focus?: Function;
}
interface InputStyle {
    [propName: string]: any;
    fontFamily: string;
    fontSize?: string;
    fontWeight?: string;
    fontVariant: "normal" | "small-caps" | "inherit";
    color: '#000000';
    padding: string;
    multiline: boolean;
    fontStyle: "normal" | "italic" | "oblique" | "inherit";
    letterSpacing: number;
    textIndent: string;
    position: 'absolute';
    background: 'none';
    border: 'none';
    outline: 'none';
    transformOrigin: '0 0';
    lineHeight: '1';
}
interface CheckBox {
    uuid: string;
    checkGroup: string | undefined;
    checked: boolean;
    value: string | undefined;
}
interface ScrollBar {
    alignToContainer: () => void;
}
interface Color {
    r: number;
    g: number;
    b: number;
    a?: number;
}
interface Lifecycle {
    load(): void;
    /**
     * 释放，回收
     */
    release(): void;
    /**
     * 释放，彻底释放
     * @param destroyWebGL 释放WEBGL资源，与本地资源，可能破坏其他显示对象
     */
    destroy(destroyWebGL?: boolean): void;
}
/**
 * 生命周期的接口
 */
interface LifecycleHook {
    /**
     * 初始化完成，只执行一次
     */
    onInit(): void;
    /**
     * 加载完成
     */
    onLoad(): void;
    /**
     * 回收，释放
     */
    onRelease(): void;
    /**
     * 添加到舞台
     */
    onAddStage(): void;
    /**
     * 移出舞台
     */
    onRemoveStage(): void;
    /**
     * 显示对象初始化完成，只执行一次
     */
    onViewInit(): void;
    /**
     * 释放指令
     */
    onDestroy(): void;
}
declare module 'interaction/KeyboardEvent' {
	import { UIBase } from 'core/UIBase'; class KeyboardSelectEvent {
	    /**
	     * document的键盘事件
	    */
	    constructor();
	    private obj;
	    private ctrlDown;
	    private shiftDown;
	    private shiftKey;
	    private ctrlKey;
	    private cmdKey;
	    private isAddEvent;
	    private keyDownEventBind;
	    private keyUpEventBind;
	    private pasteEventBind;
	    private copyEventBind;
	    private cutEventBind;
	    private addEvent;
	    private removeEvent;
	    protected keyDownEvent(e: KeyboardEvent): void;
	    protected keyUpEvent(e: KeyboardEvent): void;
	    protected copyEvent(e: ClipboardEvent): void;
	    protected cutEvent(e: ClipboardEvent): void;
	    protected pasteEvent(e: ClipboardEvent): void;
	    focus(obj: UIBase): void;
	    blur(): void;
	}
	/**
	 * KeyboardSelectEvent 的实例
	 */
	export const keyboardShared: KeyboardSelectEvent;
	export {};

}

declare namespace vfui{
    export * from "UI";
}
