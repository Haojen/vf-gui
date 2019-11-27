declare module 'interaction/TouchMouseEventEnum' {
	/**
	 * 鼠标点击与触摸事件枚举,内部DisplayObject使用
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
declare module 'event/InteractionEvent' {
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

}
declare module 'event/TouchMouseEvent' {
	/**
	 * 对外，封装的点击触摸事件
	 *
	 * import InteractionEvent,{Mouse} from "../interaction/InteractionEvent",
	 */
	export const TouchMouseEvent: {
	    /**
	     * 移出
	     *
	     * (e: InteractionEvent,thisObj:DisplayObject,over: boolean)=>{}
	     */
	    onHover: string;
	    /**
	     * 按下
	     *
	     * (e: InteractionEvent,thisObj:DisplayObject, isPressed: boolean)=>void
	     */
	    onPress: string;
	    /**
	     * 按下
	     */
	    onDown: string;
	    /**
	     * 弹起
	     */
	    onUp: string;
	    /**
	     * 点击
	     *
	     * (e: InteractionEvent,thisObj:DisplayObject)=>void
	     */
	    onClick: string;
	    /**
	     * 移动
	     *
	     * (e: InteractionEvent,thisObj:DisplayObject)=>void
	     */
	    onMove: string;
	};

}
declare module 'interaction/ClickEvent' {
	import { DisplayObject } from 'core/DisplayObject';
	import { InteractionEvent } from 'event/InteractionEvent';
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
	 *  onHover: ((e: InteractionEvent,thisOBj:DisplayObject,over: boolean) => void) | undefined
	 *  onPress: ((e: InteractionEvent,thisOBj:DisplayObject, isPressed: boolean) => void) | undefined;
	 *  onClick: ((e: InteractionEvent,thisOBj:DisplayObject) => void) | undefined
	 *  onMove: ((e: InteractionEvent,thisOBj:DisplayObject) => void) | undefined
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
	    constructor(obj: DisplayObject, isOpenEmitEvent?: boolean, includeHover?: boolean, rightMouseButton?: boolean, doubleClick?: boolean);
	    private obj;
	    id: number;
	    /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | gui.Interaction.TouchEvent */
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
	    private isStop;
	    startEvent(): void;
	    /** 清除拖动 */
	    stopEvent(): void;
	    private _onMouseDown;
	    private emitTouchEvent;
	    private _mouseUpAll;
	    private _onMouseUp;
	    private _onMouseUpOutside;
	    private _onMouseOver;
	    private _onMouseOut;
	    private _onMouseMove;
	    remove(): void;
	    onHover: ((e: InteractionEvent, thisOBj: DisplayObject, over: boolean) => void) | undefined;
	    onPress: ((e: InteractionEvent, thisOBj: DisplayObject, isPressed: boolean) => void) | undefined;
	    onClick: ((e: InteractionEvent, thisOBj: DisplayObject) => void) | undefined;
	    onMove: ((e: InteractionEvent, thisOBj: DisplayObject) => void) | undefined;
	}

}
declare module 'interaction/DragDropController' {
	import { DisplayObject } from 'core/DisplayObject';
	import { InteractionEvent } from 'event/InteractionEvent';
	/**
	 * 记录当前正在拖动的UI组件列表
	 * @private
	 */
	export const _items: DisplayObject[];
	/**
	 * 添加拖动组件到控制器
	 * @param item 要添加的UI组件
	 * @param e 传送的事件
	 * @returns true|false
	 * @since 1.0.0
	 */
	export function add(item: DisplayObject, e: InteractionEvent): boolean;
	/**
	 * 获取正在拖动组件
	 * @param item 要获取的UI组件
	 * @returns flase | item
	 */
	export function getItem(item: DisplayObject): false | DisplayObject;
	/**
	 * 根据事件对象与分组名获取拖动项
	 * @param e 事件对象
	 * @param group 分组名
	 */
	export function getEventItem(e: InteractionEvent, group: string | undefined): false | DisplayObject | null;

}
declare module 'interaction/DragEvent' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	import { InteractionEvent } from 'event/InteractionEvent';
	/**
	 * 多拽相关的事件处理类
	 *
	 *  可侦听事件:
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
	    constructor(obj: DisplayObject);
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
	    private isStop;
	    /**
	     * 限制拖动抽,XY,X抽或Y抽
	     */
	    dragRestrictAxis?: "x" | "y";
	    startEvent(): void;
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
declare module 'core/DisplayLayoutKeys' {
	/** 标记属性失效 */
	export const invalidatePropertiesFlag: unique symbol;
	/** 标记大小失效 */
	export const invalidateSizeFlag: unique symbol;
	/** 标记显示失效 */
	export const invalidateDisplayListFlag: unique symbol;
	export const explicitWidth: unique symbol;
	export const explicitHeight: unique symbol;
	export const width: unique symbol;
	export const height: unique symbol;
	export const minWidth: unique symbol;
	export const maxWidth: unique symbol;
	export const minHeight: unique symbol;
	export const maxHeight: unique symbol;
	export const percentWidth: unique symbol;
	export const percentHeight: unique symbol;
	export const scaleX: unique symbol;
	export const scaleY: unique symbol;
	export const x: unique symbol;
	export const y: unique symbol;
	export const skewX: unique symbol;
	export const skewY: unique symbol;
	export const pivotX: unique symbol;
	export const pivotY: unique symbol;
	export const rotation: unique symbol;
	export const zIndex: unique symbol;
	export const measuredWidth: unique symbol;
	export const measuredHeight: unique symbol;
	export const oldPreferWidth: unique symbol;
	export const oldPreferHeight: unique symbol;
	export const oldX: unique symbol;
	export const oldY: unique symbol;
	export const oldWidth: unique symbol;
	export const oldHeight: unique symbol;
	export const left: unique symbol;
	export const right: unique symbol;
	export const top: unique symbol;
	export const bottom: unique symbol;
	export const horizontalCenter: unique symbol;
	export const verticalCenter: unique symbol;

}
declare module 'display/Label' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 * 文本
	 *
	 * 中文换行特殊处理 xxxx.style.breakWords = true;
	 *
	 * 文本没有宽高，自适应
	 *
	 * @example let label = new gui.Label();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestLabel
	 */
	export class Label extends DisplayObject {
	    constructor(text?: string);
	    readonly sprite: PIXI.Text;
	    /**
	     * 文本内容
	     */
	    text: string;
	    fontCssStyle: TAny;
	    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
	    release(): void;
	}

}
declare module 'display/Image' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 * 图片
	 *
	 * @example let image = new gui.Image();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestImage
	 */
	export class Image extends DisplayObject {
	    constructor();
	    protected _sprite: PIXI.Sprite | PIXI.TilingSprite | PIXI.NineSlicePlane | undefined;
	    protected _texture: PIXI.Texture | undefined;
	    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
	    /**
	     * 图像路径或位图对象
	     */
	    private _src;
	    src: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
	    /**
	     * 矩形区域，它定义素材对象的九个缩放区域。
	     *
	     * fillMode = scale 时，[leftWidth,rightWidth,topHeight,bottomHeight]
	     *
	     * fillMode = repeat 是，[scalex,scaley,x,y]
	     */
	    private _scale9Grid?;
	    scale9Grid: number[] | undefined;
	    /**
	     * 填充模式
	     * 设置scale后，可设置scale9Grid进行调整缩放区域
	     */
	    private _fillMode?;
	    fillMode: "no-repeat" | "repeat" | "scale" | undefined;
	    /**
	     * 锚点，调整位图的坐标中点 0-1
	     */
	    private _anchorX?;
	    anchorX: number | undefined;
	    /**
	     * 锚点，调整位图的坐标中点 0-1
	     */
	    private _anchorY?;
	    anchorY: number | undefined;
	    release(): void;
	    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
	    protected srcSystem(): void;
	    protected scale9GridSystem(): void;
	    protected anchorSystem(): void;
	}

}
declare module 'display/private/InputBase' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	import { ClickEvent, InteractionEvent } from 'interaction/Index';
	/**
	 * 输入对象的基础类
	 */
	export class InputBase extends DisplayObject {
	    constructor();
	    protected clickEvent: ClickEvent;
	    private _currentState;
	    protected currentState: "up" | "move" | "down" | "disabled";
	    protected _tabIndex: undefined | number;
	    protected _tabGroup: undefined | string;
	    protected _focused: boolean;
	    protected _useTab: boolean;
	    protected _usePrev: boolean;
	    protected _useNext: boolean;
	    protected _down: boolean;
	    /**
	     * 状态皮肤，
	     */
	    up?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    /**
	     * 状态皮肤，
	     */
	    down?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    /**
	     * 状态皮肤，
	     */
	    move?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    /**
	     * 状态皮肤，
	     */
	    disabled?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    /**
	     * 选中状态皮肤，
	     */
	    upAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    /**
	     * 选中状态皮肤，
	     */
	    downAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    /**
	     * 选中状态皮肤，
	     */
	    moveAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    /**
	     * 选中状态皮肤，
	     */
	    disabledAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
	    protected onMove(): void;
	    protected onHover(): void;
	    protected onPress(e: InteractionEvent, thisObj: DisplayObject, isPress: boolean): void;
	    protected onClick(): void;
	    protected keyDownEvent(event: WheelEvent | Event): void;
	    protected documentMouseDown(): void;
	    private keyDownEventBind;
	    protected _bindEvents(): void;
	    protected _clearEvents(): void;
	    focus(): void;
	    blur(): void;
	    release(): void;
	    setTabIndex(index: number | undefined, group: string | undefined): void;
	}

}
declare module 'display/Button' {
	import { Label } from 'display/Label';
	import { Image } from 'display/Image';
	import { InputBase } from 'display/private/InputBase';
	/**
	 * 按钮
	 *
	 * @example let button = new gui.Button();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestButton
	 */
	export class Button extends InputBase {
	    constructor();
	    protected _selectedStr: "AndSelected" | "";
	    protected _oldState: string;
	    /** 状态展示 */
	    readonly img: Image;
	    /** 文字展示 */
	    readonly label: Label;
	    private _text;
	    /**
	     * 设置按钮的文本内容
	     */
	    text: string;
	    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
	    release(): void;
	    protected onStateChange(label: Button, state: string): void;
	}

}
declare module 'display/CheckBox' {
	import { Label } from 'display/Label';
	import { Button } from 'display/Button';
	/**
	 * 单选\复选框
	 *
	 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
	 *
	 * @example let checkBox = new gui.CheckBox();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestCheckBox
	 */
	export class CheckBox extends Button {
	    constructor();
	    /**
	     * 设置值
	     */
	    private _value;
	    /**
	     * 设置是否选中
	     * */
	    private _checked;
	    /**
	     * 获取或设置当前选中的值
	     */
	    readonly selectedValue: string | undefined;
	    /**
	     * 设置分组名
	     */
	    checkGroup: string | undefined;
	    /**
	     * 获取设置默认值
	     */
	    value: string;
	    /**
	     * 设置是否选中
	     * @default false
	     */
	    checked: boolean;
	    protected onClick(): void;
	    protected onLabelChange(label: Label): void;
	}

}
declare module 'interaction/InputController' {
	import { DisplayObject } from 'core/DisplayObject';
	import { CheckBox } from 'display/CheckBox';
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
	    [key: string]: DisplayObject[];
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
	export function registrer(item: DisplayObject, tabIndex: number, tabGroup?: string): void;
	/** 失去焦点时 */
	export function blur(): void;
	/** 设置当前输入组件 */
	export function set(item: DisplayObject): void;
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
declare module 'interaction/MouseScrollEvent' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
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
	    constructor(obj: DisplayObject, preventDefault: boolean);
	    id: number;
	    private obj;
	    private preventDefault;
	    private delta;
	    private mouseScrllBind;
	    private isStop;
	    startEvent(): void;
	    private _onMouseScroll;
	    private _onHover;
	    private _onMouseOut;
	    stopEvent(): void;
	    remove(): void;
	    onMouseScroll: ((e: WheelEvent, delta: PIXI.Point) => void) | undefined;
	}

}
declare module 'event/ComponentEvent' {
	/**
	 * 特定属性改变时,通常为了去系统事件区分，UI组件的事件名为大写
	 * 1. CheckBox 的 checked 改变时
	 * 2. Label 的 text 改变时
	 * 3. SpriteAnimated 的 animationName 改变时
	 * 4. Button 文字改变
	 * 5. ScrollingContainer 拖动改变时
	 * 6. Slider 滑动改变后
	 * 7. SpriteAnimated 动画改变后
	 */
	export const CHANGE = "CHANGE";
	/**
	 * 状态改变中
	 *
	 * slider 滑动时
	 */
	export const CHANGEING = "CHANGEING";
	/**
	 * 状态切换完成时
	 *
	 * 1. SpriteAnimated 每次播放完时，触发(loop = false时)
	 * 2. Image 图片加载完成时
	 * 3. Slider 滑动完成
	 * 4. Timeline  每次播放完时，触发(loop = false时)
	 */
	export const COMPLETE = "COMPLETE";
	/**
	 * 状态发生改变时
	 */
	export const STATE_CHANGE = "STATE_CHANGE";
	/**
	 * 状态切换完成时
	 *
	 * SpriteAnimated 每次播放完时，，触发(loop = true时)
	 */
	export const LOOP = "LOOP";
	/**
	 * 组件被添加前
	 */
	export const ADD = "add";
	/**
	 * 组件被添加时
	 */
	export const ADDED = "added";
	/**
	 * 组件被移除时
	 */
	export const REMOVEED = "removed";
	/**
	 * 组件大小改变后
	 */
	export const RESIZE = "RESIZE";
	/**
	 * 组件位置移动
	 */
	export const MOVE = "MOVE";
	/**
	 * 组件创建完成后
	 */
	export const CREATION_COMPLETE = "CREATION_COMPLETE";
	/**
	 * 组件拖动开始之前
	 */
	export const DRAG_START_BEFORE = "DRAG_START_BEFORE";
	/**
	 * 组件拖动开始时
	 */
	export const DRAG_START = "DRAG_START";
	/**
	 * 组件拖动结束之前
	 */
	export const DRAG_END_BEFORE = "DRAG_END_BEFORE";
	/**
	 * 组件拖动结束时 （如果绑定接收容器并拖动到接收容器中，不会触发此事件）
	 */
	export const DRAG_END = "DRAG_END";
	/**
	 * 组件拖动中
	 */
	export const DRAG_MOVE = "DRAG_MOVE";
	/**
	 * 组件拖动到接收目标中之前
	 */
	export const DRAG_TARGET_BEFORE = "DRAG_TARGET_BEFORE";
	/**
	 * 组件拖动到接收目标中
	 */
	export const DRAG_TARGET = "DRAG_TARGET";
	/**
	 * 有拖拽物掉落到此容器时触发
	 */
	export const DROP_TARGET = "DROP_TARGET";

}
declare module 'interaction/GroupController' {
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 *
	 * @private
	 */
	export const _GroupObject: Map<string, {
	    [key: string]: DisplayObject;
	}>;
	/**
	 * 注册分组，
	 */
	export function registrerGroup(ui: DisplayObject): void;
	/**
	 * 注销指定分组或指定分组的子项
	 */
	export function unRegistrerGroup(ui: DisplayObject): void;
	/** 设置选中 */
	export function getGroup(name?: string): {
	    [key: string]: DisplayObject;
	} | undefined;

}
declare module 'interaction/Index' {
	import { ClickEvent } from 'interaction/ClickEvent';
	import * as DragDropController from 'interaction/DragDropController';
	import { DragEvent } from 'interaction/DragEvent';
	import * as InputController from 'interaction/InputController';
	import { MouseScrollEvent } from 'interaction/MouseScrollEvent';
	import { InteractionEvent } from 'event/InteractionEvent';
	import { TouchMouseEvent } from 'event/TouchMouseEvent';
	import * as ComponentEvent from 'event/ComponentEvent';
	import * as GroupController from 'interaction/GroupController';
	export { ClickEvent, DragDropController, DragEvent, InputController, MouseScrollEvent, InteractionEvent, TouchMouseEvent, ComponentEvent, GroupController };

}
declare module 'tween/Easing' {
	/**
	 * 完整的缓动曲线列表
	 *
	 * @example gui.Easing.Linear.None;
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
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
declare module 'tween/private/constants' {
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
declare module 'tween/private/Interpolation' {
	/**
	 * 差值计算列表
	 * @namespace TWEEN.Interpolation
	 * @example
	 *
	 * let bezier = gui.tween.Interpolation.Bezier
	 * new gui.tween.Tween({x:0}).to({x:[0, 4, 8, 12, 15, 20, 30, 40, 20, 40, 10, 50]}, 1000).interpolation(bezier).start()
	 * @memberof gui.tween
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
declare module 'event/TweenEvent' {
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
declare module 'tween/tween' {
	/// <reference types="pixi.js" />
	import { add, get, getAll, remove, removeAll, removeDisplay, update } from 'tween/private/core';
	/**
	 * 缓动动画
	 *
	 * @example let tween = new gui.Tween(myObject).to({width:'300px'}, 2000).start()
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
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
	     * @memberof gui.Tween
	     * @static
	     */
	    static fromTo(object: TAny, to: TAny, duration?: number): Tween;
	    /**
	     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
	     * @param {TAny} object object
	     * @param {object} to - Target value
	     * @param {object} params - Options of tweens
	     * @example Tween.to(myObject, {x:200}, 1000)
	     * @memberof gui.Tween
	     * @static
	     */
	    static to(object: TAny | TAny[], to: TAny, duration?: number): Tween;
	    /**
	     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
	     * @param {TAny} object object
	     * @param {object} from - Initial value
	     * @param {object} params - Options of tweens
	     * @example Tween.from(myObject, {x:200}, 1000)
	     * @memberof gui.Tween
	     * @static
	     */
	    static from(object: TAny, from: TAny, duration?: number): Tween;
	    constructor(object?: TAny);
	    id: number;
	    object: TAny;
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
	     * @memberof gui.Tween
	     */
	    readonly isPlaying: boolean;
	    /**
	     * 是否开始播放
	     * @return {boolean}
	     * @example tween.isStarted()
	     * @memberof gui.Tween
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
	     * @memberof gui.Tween
	     * @deprecated 不推荐使用这个方法，内部使用
	     * @private
	     */
	    duration: number | Function;
	    /**
	     * 逆向缓动
	     * @example tween.reverse()
	     * @param {boolean=} state 是否逆向
	     * @memberof gui.Tween
	     */
	    reverse(state?: boolean): this;
	    /**
	     * 当前动画是否逆转
	     * @return {boolean}
	     * @example tween.reversed() true逆向中
	     * @memberof gui.Tween
	     */
	    reversed(): boolean;
	    /**
	     * 暂停缓动
	     * @example tween.pause()
	     * @memberof gui.Tween
	     */
	    pause(): boolean | this;
	    /**
	     * 播放或恢复播放
	     * @example tween.play()
	     * @memberof gui.Tween
	     */
	    play(): boolean | this;
	    /**
	     * 设置要缓动的目标属性与持续时间
	     * @param {object} properties 目标属性值
	     * @param {number|Object=} [duration=1000] 持续时间
	     * @example let tween = new gui.Tween({x:0}).to({x:100}, 2000)
	     * @memberof gui.Tween
	     */
	    to(properties: TAny, duration?: number): this;
	    private render;
	    /**
	     * 开始执行缓动
	     * @param {number|string} time 要开始的时间，延迟值
	     * @example tween.start()
	     * @memberof gui.Tween
	     */
	    start(time?: number): this;
	    /**
	     * 停止缓动
	     * @example tween.stop()
	     * @memberof gui.Tween
	     */
	    stop(): boolean | this;
	    /**
	     * 设置延迟执行时间
	     * @param {number} amount 延迟等待的时间，毫秒
	     * @example tween.delay(500)
	     * @memberof gui.Tween
	     */
	    delay(amount: number): this;
	    /**
	     * 设置重复执行的次数
	     * @param {number} amount 重复次数
	     * @example tween.repeat(5)
	     * @memberof gui.Tween
	     */
	    repeat(amount: number): this;
	    /**
	     * 设置每个重复执行过程的延迟时间，毫秒
	     * @param {number} amount 延迟值
	     * @example tween.reverseDelay(500)
	     * @memberof gui.Tween
	     */
	    reverseDelay(amount: number): this;
	    /**
	     * 是否在重复执行中启用反向动画
	     * @param {boolean} state true启动
	     * @param {Function=} _easingReverse 反向时的Easing function
	     * @example tween.yoyo(true)
	     * @memberof gui.Tween
	     */
	    yoyo(state?: boolean | Function, _easingReverse?: (k: number) => number): this;
	    /**
	     * 设置缓动函数
	     * @param {Function} _easingFunction 缓动函数的公式，如果设置yoyo的第二个值会应用于逆向缓动
	     * @example tween.easing(Easing.Elastic.InOut)
	     * @memberof gui.Tween
	     */
	    easing(_easingFunction: ((k: number) => number) | TAny): this;
	    /**
	     * 设置差值
	     * @param {Function} _interpolationFunction 差值的函数
	     * @example tween.interpolation(Interpolation.Bezier)
	     * @memberof gui.Tween
	     */
	    interpolation(_interpolationFunction: (v: TAny, k: number, value: TAny) => TAny): this;
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
	     * @memberof gui.Tween
	     */
	    update(elapsedMS: number, preserve?: boolean, forceTime?: boolean): boolean;
	}

}
declare module 'tween/private/core' {
	import { Tween } from 'tween/tween';
	/**
	 * 插件存储器
	 * @namespace tween.Plugins
	 * @memberof gui.tween
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
	 * @memberof gui.tween
	 * @example
	 * let tween = new gui.tween.Tween({x:0})
	 * tween.to({x:200}, 1000)
	 * gui.tween.add(tween)
	 */
	export function add(tween: Tween): void;
	/**
	 * 没有缓动后，设置运行多少帧后，停止
	 * @param {number} frameCount=120 删除所有动画后，要运行的剩余帧
	 * @memberof gui.tween
	 * @example
	 * gui.tween.FrameThrottle(60)
	 */
	export function FrameThrottle(frameCount?: number): void;
	/**
	 * 延时处理，针对插件、canvas、dom
	 * @param {number} state=true 是否平滑处理
	 * @memberof gui.tween
	 * @example
	 * gui.tween.ToggleLagSmoothing(false)
	 */
	export function ToggleLagSmoothing(_state?: boolean): void;
	/**
	 * 获得所有缓动对象
	 * @memberof gui.tween
	 * gui.tween.getAll()
	 */
	export function getAll(): Tween[];
	/**
	 * 移除所有动画对象
	 * @example  gui.tween.removeAll()
	 * @memberof gui.tween
	 */
	export function removeAll(): void;
	/**
	 * 获取对象
	 * @param {Tween} tween 缓动对象实例
	 * @return {Tween} 返回对象或null
	 * @memberof gui.tween
	 * @example
	 * gui.tween.get(tween)
	 */
	export function get(tween: Tween): Tween | null;
	export function removeDisplay(uuid: string): void;
	/**
	 * 从缓动列表移除对象
	 * @param {Tween} tween Tween instance
	 * @memberof gui.tween
	 * @example
	 * gui.tween.remove(tween)
	 */
	export function remove(tween: Tween): void;
	/**
	 * 按给定时间更新缓动
	 * @param {number=} time 时间戳
	 * @param {Boolean=} preserve 完成后，防止删除动画对象
	 * @memberof gui.tween
	 * @example
	 * gui.tween.update(500)
	 */
	export function update(time: number, preserve?: boolean): boolean;
	/**
	 * 是否正在运行中
	 * @return {Boolean} 只要还有缓动在运行，返回true
	 * @memberof gui.tween
	 * @example gui.tween.isRunning()
	 */
	export function isRunning(): boolean;
	/**
	 * 返回是否开启延迟平滑状态
	 * @return {Boolean}
	 * @memberof gui.tween
	 * @example gui.tween.isRunning()
	 */
	export function isLagSmoothing(): boolean;

}
declare module 'utils/ObjectPool' {
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
declare module 'tween/Timeline' {
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
	 * 基于帧的时间轴控制类
	 *
	 * @example let timeline = new gui.Timeline();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
	 */
	export class Timeline extends PIXI.utils.EventEmitter implements Lifecycle {
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
	    loop: boolean;
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
	}
	export {};

}
declare module 'tween/private/index' {
	import { add, get, getAll, isRunning, FrameThrottle, ToggleLagSmoothing, Plugins, remove, removeAll, removeDisplay, update } from 'tween/private/core';
	import { Interpolation } from 'tween/private/Interpolation';
	import * as utils from 'tween/private/constants';
	import { TweenEvent } from 'event/TweenEvent';
	import { Timeline } from 'tween/Timeline';
	export { Plugins, get, getAll, removeAll, remove, removeDisplay, add, update, isRunning, FrameThrottle, ToggleLagSmoothing, Interpolation, TweenEvent, Timeline, utils };

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
	export const tickerShared: Ticker;
	export default tickerShared;

}
declare module 'core/DisplayLayoutValidator' {
	/// <reference types="pixi.js" />
	import { DisplayLayoutAbstract } from 'core/DisplayLayoutAbstract'; class UIValidator extends PIXI.utils.EventEmitter {
	    /**
	     * @private
	     * 创建一个Validator对象
	     */
	    constructor();
	    /**
	     * @private
	     */
	    private targetLevel;
	    /**
	     * @private
	     */
	    private invalidatePropertiesFlag;
	    /**
	     * @private
	     */
	    private invalidateClientPropertiesFlag;
	    /**
	     * @private
	     */
	    private invalidatePropertiesQueue;
	    /**
	     * @private
	     * 标记组件属性失效
	     */
	    invalidateProperties(target: DisplayLayoutAbstract): void;
	    /**
	     * @private
	     * 验证失效的属性
	     */
	    private validateProperties;
	    /**
	     * @private
	     */
	    private invalidateSizeFlag;
	    /**
	     * @private
	     */
	    private invalidateClientSizeFlag;
	    /**
	     * @private
	     */
	    private invalidateSizeQueue;
	    /**
	     * @private
	     * 标记需要重新测量尺寸
	     */
	    invalidateSize(target: DisplayLayoutAbstract): void;
	    /**
	     * @private
	     * 测量尺寸
	     */
	    private validateSize;
	    /**
	     * @private
	     */
	    private invalidateDisplayListFlag;
	    /**
	     * @private
	     */
	    private invalidateDisplayListQueue;
	    /**
	     * @private
	     * 标记需要重新布局
	     */
	    invalidateDisplayList(client: DisplayLayoutAbstract): void;
	    /**
	     * @private
	     * 重新布局
	     */
	    private validateDisplayList;
	    /**
	     * @private
	     * 是否已经添加了事件监听
	     */
	    private listenersAttached;
	    /**
	     * @private
	     * 添加事件监听
	     */
	    private attachListeners;
	    /**
	     * @private
	     * 执行属性应用
	     */
	    private doPhasedInstantiationCallBack;
	    /**
	     * @private
	     */
	    private doPhasedInstantiation;
	    /**
	     * @private
	     * 使大于等于指定组件层级的元素立即应用属性
	     * @param target 要立即应用属性的组件
	     */
	    validateClient(target: DisplayLayoutAbstract): void;
	} const validatorShared: UIValidator;
	export default validatorShared;

}
declare module 'core/ContainerBase' {
	/// <reference types="pixi.js" />
	/** 容器扩展类，后续便于做延时渲染 */
	export class ContainerBase extends PIXI.Container {
	    constructor();
	    isEmitRender: boolean;
	    render(renderer: PIXI.Renderer): void;
	}

}
declare module 'core/Stage' {
	/// <reference types="pixi.js" />
	import { DisplayLayoutAbstract } from 'core/DisplayLayoutAbstract';
	/**
	 * UI的舞台对象，展示所有UI组件
	 *
	 * @class
	 * @param width {Number} 舞台宽度
	 * @param height {Number} 舞台高度
	 */
	export class Stage extends DisplayLayoutAbstract {
	    constructor(width: number, height: number, app?: PIXI.Application);
	    app?: PIXI.Application;
	    _stageWidth: number;
	    _stageHeight: number;
	    readonly stageWidth: number;
	    readonly stageHeight: number;
	    scaleX: number;
	    scaleY: number;
	    Scale: PIXI.Point;
	    release(): void;
	    releaseAll(): void;
	    resize(): void;
	}

}
declare module 'core/DisplayObjectAbstract' {
	/// <reference types="pixi.js" />
	import { ContainerBase } from 'core/ContainerBase';
	import { Stage } from 'core/Stage';
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 *
	 */
	export class DisplayObjectAbstract extends PIXI.utils.EventEmitter implements LifecycleHook, Lifecycle {
	    constructor();
	    /**
	     * 全局唯一ID
	     */
	    readonly uuid: number;
	    /**
	     * 自定义组价名
	     */
	    name: string;
	    /**
	     * @private
	     * 这个对象在显示列表中的嵌套深度，舞台为1，它的子项为2，子项的子项为3，以此类推。当对象不在显示列表中时此属性值为0.
	     */
	    $nestLevel: number;
	    /**
	     * 是否初始化
	     * @default
	     */
	    initialized: boolean;
	    /**
	     * 舞台引用
	     */
	    $stage?: Stage;
	    /**
	     * 父容器
	     */
	    parent: DisplayObject | Stage | undefined;
	    /**
	     * 节点列表
	     */
	    uiChildren: DisplayObjectAbstract[];
	    /** 没有功能实现，内部编辑器 */
	    container: ContainerBase;
	    /** 添加显示对象，需集成Core */
	    addChild<T extends DisplayObjectAbstract>(item: T): T;
	    addChildAt<T extends DisplayObjectAbstract>(item: T, index: number): T;
	    getChildAt(index: number): DisplayObjectAbstract;
	    /**
	     * 移除已添加的UI组件
	     * @param UIObject 要移除的UI组件
	     */
	    removeChild<T extends DisplayObjectAbstract>(item: T): T;
	    removeChildAt<T>(index: number): T;
	    removeChildren(beginIndex?: number | undefined, endIndex?: number | undefined): void;
	    /**
	     * 是否绘制显示对象，如果false不进行绘制，不过仍然会进行相关的更新计算。
	     * 只影响父级的递归调用。
	     */
	    renderable: boolean;
	    /**
	     * 缓存当前的显示对象，如果移除缓存，设置false即可
	     * 在设置这个值时，请确保你的纹理位图已经加载
	     */
	    cacheAsBitmap: boolean;
	    private _interactive;
	    private _interactiveChildren;
	    /**
	     * 对象是否可以接收事件
	     */
	    interactive: boolean;
	    /**
	     * 子对象是否可以接收事件，设置false后，会绕过HitTest方法的递归
	     */
	    interactiveChildren: boolean;
	    private _enabled;
	    enabled: boolean;
	    /**
	     * 是否可见
	     */
	    private _visible;
	    visible: boolean;
	    /** 清除全部事件 */
	    offAll(event?: string | symbol): this;
	    readonly stage: Stage | undefined;
	    protected checkInvalidateFlag(): void;
	    load(): void;
	    release(): void;
	    $onInit(): void;
	    $onLoad(): void;
	    $onRelease(): void;
	    $onAddStage(): void;
	    $onRemoveStage(): void;
	}

}
declare module 'core/DisplayLayoutAbstract' {
	/// <reference types="pixi.js" />
	import { DisplayObjectAbstract } from 'core/DisplayObjectAbstract';
	export const $tempLocalBounds: PIXI.Rectangle;
	/**
	 * UI 布局的基础属性类
	 */
	export class DisplayLayoutAbstract extends DisplayObjectAbstract {
	    constructor();
	    isContainer: boolean;
	    /**
	     * @private
	     */
	    $values: TAny;
	    includeInLayout: boolean;
	    /**
	     * @private
	     * 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
	     */
	    protected initializeUIValues(): void;
	    /**
	     * @private
	     * 检查属性失效标记并应用
	     */
	    protected checkInvalidateFlag(): void;
	    /**
	     * @private
	     * 验证组件的属性
	     */
	    validateProperties(): void;
	    /**
	     * @private
	     * 验证组件的尺寸
	     */
	    validateSize(recursive?: boolean): void;
	    /**
	     * @private
	     * 验证子项的位置和大小，并绘制其他可视内容
	     */
	    validateDisplayList(): void;
	    /**
	     * @private
	     * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
	     */
	    protected commitProperties(): void;
	    /**
	     * @private
	     * 测量组件尺寸
	     */
	    protected measure(): void;
	    /**
	     * @private
	     * 测量组件尺寸，返回尺寸是否发生变化
	     */
	    private measureSizes;
	    /**
	     * @private
	     * 设置测量结果。
	     * @param width 测量宽度
	     * @param height 测量高度
	     */
	    setMeasuredSize(width: number, height: number): void;
	    /**
	     * @private
	     *
	     * @returns
	     */
	    protected getPreferredUWidth(): number;
	    /**
	     * @private
	     */
	    protected getPreferredUHeight(): number;
	    /**
	     * @private
	     * 获取组件的首选尺寸,常用于父级的measure()方法中
	     * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
	     */
	    getPreferredBounds(bounds: PIXI.Rectangle): PIXI.Rectangle;
	    /**
	    * @private
	    * 标记提交过需要延迟应用的属性，以便在稍后屏幕更新期间调用该组件的 commitProperties() 方法。
	    *
	    * 例如，要更改文本颜色和大小，如果在更改颜色后立即进行更新，然后在设置大小后再更新大小，就有些浪费。
	    * 同时更改两个属性后再使用新的大小和颜色一次性呈示文本，效率会更高。<p/>
	    *
	    * 通常，子类应覆盖 commitProperties() 方法，而不是覆盖此方法。
	     */
	    invalidateProperties(): void;
	    /**
	    * @private
	    * 标记提交过需要验证组件尺寸，以便在稍后屏幕更新期间调用该组件的 measure(),updatesize() 方法。
	    */
	    invalidateSize(): void;
	    /**
	    * @private
	    * 标记需要验证显示列表，以便在稍后屏幕更新期间调用该组件的 updateDisplayList() 方法。
	    */
	    invalidateDisplayList(): void;
	    /**
	     * @private
	     * 标记父级容器的尺寸和显示列表为失效
	     */
	    protected invalidateParentLayout(): void;
	    /**
	     * @private
	     * 设置组件的布局位置
	     */
	    setPosition(x: number, y: number): void;
	    /**
	     * @private
	     * 设置组件的宽高。此方法不同于直接设置width,height属性，
	     * 不会影响显式标记尺寸属性
	     */
	    setActualSize(w: number, h: number): void;
	    /**
	     * @private
	     * 更新最终的组件宽高
	     */
	    private updateSize;
	    updateTransform(): void;
	    /**
	     * 更新显示列表,子类重写，实现布局
	     */
	    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
	    /**
	     * @private
	     * 立即应用组件及其子项的所有属性
	     */
	    validateNow(): void;
	    /**
	     * @private
	    * 验证并更新此对象的属性和布局，如果需要的话重绘对象。
	    *
	    * 通常只有当脚本执行完毕后，才会处理要求进行大量计算的处理属性。<p/>
	    *
	    * 例如，对 width 属性的设置可能会延迟，因为此设置需要重新计算这些对象的子项或父项的宽度。
	    * 如果脚本多次设置了 width 属性，则延迟处理可防止进行多次处理。此方法允许您手动覆盖此行为。
	     */
	    validateSizeNow(): void;
	    /**
	     * @private
	     * 距父级容器离左边距离
	     */
	    left: TAny;
	    /**
	     * @private
	     * 距父级容器右边距离
	     */
	    right: TAny;
	    /**
	     * @private
	     * 距父级容器顶部距离
	     */
	    top: TAny;
	    /**
	     * @private
	     * 距父级容器底部距离
	     */
	    bottom: TAny;
	    /**
	     * @private
	     * 在父级容器中距水平中心位置的距离
	     */
	    horizontalCenter: TAny;
	    /**
	     * @private
	     * 在父级容器中距竖直中心位置的距离
	     */
	    verticalCenter: TAny;
	    /**
	     * @private
	     * 相对父级容器宽度的百分比
	     */
	    percentWidth: number;
	    /**
	     * @private
	     * 相对父级容器高度的百分比
	     */
	    percentHeight: number;
	    /**
	     * @private
	     * 外部显式指定的宽度
	     */
	    readonly explicitWidth: number;
	    /**
	     * @private
	     * 外部显式指定的高度
	     */
	    readonly explicitHeight: number;
	    readonly _width: number;
	    readonly _height: number;
	    /**
	     * @private
	     * 组件宽度设置为undefined将使用组件的measure()方法自动计算尺寸
	     */
	    /**
	    * @private
	    *
	    * @param value
	    */
	    width: number;
	    /**
	     * @private
	     * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
	     */
	    /**
	    * @private
	    *
	    * @param value
	    */
	    height: number;
	    /**
	     * @private
	     * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
	     */
	    minWidth: number;
	    /**
	     * @private
	     * 组件的最大高度。同时影响测量和自动布局的尺寸。
	     */
	    maxWidth: number;
	    /**
	     * @private
	     * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
	     */
	    minHeight: number;
	    /**
	     * @private
	     * 组件的最大高度,同时影响测量和自动布局的尺寸。
	     */
	    maxHeight: number;
	    scaleX: number;
	    scaleY: number;
	    x: number;
	    y: number;
	    skewX: any;
	    skewY: any;
	    pivotX: any;
	    pivotY: any;
	    rotation: any;
	    /**
	     *  =不可用= 设置索引层级，每次父级变化时，会排序 （未实现）
	     */
	    zIndex: any;
	}

}
declare module 'layout/CSSSSystem' {
	import { DisplayObject } from 'core/DisplayObject';
	/** ===================== background  ===================== */
	export function backgroundColor(target: DisplayObject): void;
	export function backgroundPositionSize(target: DisplayObject): void;
	export function backgroundRepeat(target: DisplayObject): void;
	export function backgroundImage(target: DisplayObject): void;
	/** ===================== mask  ===================== */
	export function maskPosition(target: DisplayObject): void;
	export function maskSize(target: DisplayObject): void;
	export function maskImage(target: DisplayObject): void;
	/** ===================== font  ===================== */
	export function updateFontStyle(target: TAny, key: string, value: TAny): void;
	export function color(target: TAny, key: string, value: TAny): void;

}
declare module 'layout/CSSStyle' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
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
	/**
	 * 组件样式表
	 */
	export class CSSStyle {
	    constructor(target: DisplayObject);
	    parent: DisplayObject;
	    release(): void;
	    /**
	     * 规定元素的显示类型。布局模式
	     *
	     * grid 模式下，子节点会忽略left,top,right，bottom,width,height等
	     *
	     * none 模式下，忽略style
	     * */
	    private _display;
	    display: Display;
	    /**
	     * 规定元素的定位类型。
	     * */
	    private _position;
	    position: Position;
	    /**
	     * 在容器里面的水平位置（左中右）
	     */
	    private _justifyContent?;
	    justifyContent: "flex-start" | "flex-end" | "center" | undefined;
	    /**
	     * 在容器里面的垂直位置（上中下）
	     */
	    private _alignContent?;
	    alignContent: "flex-start" | "flex-end" | "center" | undefined;
	    /**
	     * 基于 网格列的维度，去定义网格线的名称和网格轨道的尺寸大小。
	     *
	     * 方式一 [80,90,100]|["30%","40%","30%"] 第一列宽度80，第二列宽度，第三列宽度100
	     *
	     * 方式二 ["repeat",3,100] 三列，宽度都为100像素
	     */
	    private _gridTemplateColumns?;
	    gridTemplateColumns: number[] | string[] | [string, number, number] | undefined;
	    /**
	     * 设置列间距
	     */
	    private _gridColumnGap?;
	    gridColumnGap: number | undefined;
	    /**
	     * 基于 网格行的维度，去定义网格线的名称和网格轨道的尺寸大小。
	     *
	     * 方式一 [80,90,100]|["30%","40%","30%"] 第一行高度80，第二行高度90，第三行行高度100
	     *
	     * 方式二 ["repeat",3,100] 三行，宽度都为100像素
	     */
	    private _gridTemplateRows?;
	    gridTemplateRows: number[] | string[] | [string, number, number] | undefined;
	    /**
	     * 设置行间距
	     */
	    private _gridRowGap?;
	    gridRowGap: number | undefined;
	    /**
	     * 表示显示对象的宽度，以像素为单位。
	     * */
	    width: number | string;
	    /**
	     * 表示显示对象的高度，以像素为单位。
	     * */
	    height: number | string;
	    /**
	     * 设置元素的最小宽度。
	     */
	    minWidth: number;
	    /**
	     * 设置元素的最大宽度。
	     */
	    maxWidth: number;
	    /**
	     * 设置元素的最小高度。
	     */
	    maxHeight: number;
	    /**
	     * 设置元素的最大高度。
	     * */
	    minHeight: number;
	    /**
	     * 设置定位元素左外边距边界与其容器左边界之间的偏移。
	     * */
	    left: any;
	    /**
	     * 设置定位元素的上外边距边界与其容器上边界之间的偏移。
	     * */
	    top: any;
	    /**
	     * 设置定位元素右外边距边界与其容器右边界之间的偏移。
	     * */
	    right: any;
	    /**
	     * 设置定位元素下外边距边界与其容器下边界之间的偏移。
	     * */
	    bottom: any;
	    /**
	     * 缩放
	     * */
	    scaleX: number;
	    /**
	     * 缩放
	     * */
	    scaleY: number;
	    /**
	     * 设置元素水平拉伸扭曲（角度）。
	     * */
	    skewX: any;
	    /**
	     * 设置元素垂直拉伸扭曲（角度）。
	     * */
	    skewY: any;
	    /**
	     * 设置元素旋转 （角度）
	    */
	    rotate: any;
	    /**
	     * 设置元素旋转 （角度）
	    */
	    rotation: number;
	    /**
	     * 轴点 像素值
	     */
	    pivotX: any;
	    /**
	     * 轴点 像素值
	     */
	    pivotY: any;
	    /**
	      * 调整元素的色调，取消设置0xFFFFFF
	      */
	    tint: number | undefined;
	    /**
	     * 表示指定对象的 Alpha 透明度值。有效值为0（完全透明）～ 1（完全不透明）。
	     * */
	    alpha: number;
	    /**
	     * 显示对象是否可见
	     * */
	    visible: boolean;
	    visibility: "visible" | "hidden";
	    /**
	     * 设置元件的背景颜色。（16进制数字0xffffff
	     * */
	    private _backgroundColor?;
	    backgroundColor: number | undefined;
	    /**
	     * 设置元素的背景图像。backgroundImage = "./xxx.png"
	     * */
	    private _backgroundImage?;
	    backgroundImage: string | PIXI.Texture | undefined;
	    /**
	     * 设置 backgroundImage 后 ，设置背景图像的X位置
	     * */
	    private _backgroundPositionX?;
	    backgroundPositionX: number | undefined;
	    /**
	     * 设置 backgroundImage 后 ，设置背景图像的Y位置
	     * */
	    private _backgroundPositionY?;
	    backgroundPositionY: number | undefined;
	    /**
	     * 设置 backgroundImage 后， 规定背景图像的尺寸。 [width,height]
	     * */
	    private _backgroundSize?;
	    backgroundSize: number[] | undefined;
	    /**
	     * 设置 backgroundImage 后，设置是否及如何重复背景图像。
	     * repeat重复
	     * no-repeat不重复，
	     */
	    private _backgroundRepeat;
	    backgroundRepeat: "no-repeat" | "repeat";
	    /**
	     * 遮罩图
	     */
	    private _maskImage?;
	    maskImage: string | DisplayObject | PIXI.Graphics | PIXI.Texture | undefined;
	    /**
	     * 设置位数 [x,y]
	     */
	    private _maskPosition?;
	    maskPosition: number[] | undefined;
	    /**
	     * 设置遮罩位图的大小
	     */
	    private _maskSize?;
	    maskSize: number[] | undefined;
	    /**
	     * 设置滤镜
	     *
	     * 支持 blur(number)
	     */
	    private _filter?;
	    filter: string | undefined;
	    /**
	     * 设置鼠标样式
	     */
	    cursor: string;
	    /**
	     * 文本颜色，16进制
	     * */
	    private _color?;
	    color: number | number[] | undefined;
	    /** 字符间距 */
	    private _letterSpacing?;
	    letterSpacing: number | undefined;
	    /**
	     * 是否自动换行
	     * */
	    private _wordWrap;
	    wordWrap: boolean;
	    /**
	     * 自动换行的宽度
	     * */
	    private _wordWrapWidth?;
	    wordWrapWidth: number | undefined;
	    /**
	     * 多行文本(wordWrap = true) - 对齐方式
	     * */
	    private _textAlign;
	    textAlign: "left" | "right" | "center";
	    /**
	     * 多行文本(wordWrap = true) - 行高
	     * */
	    private _lineHeight?;
	    lineHeight: number | undefined;
	    /** 字体 示例：fontFamily = "\"Comic Sans MS\", cursive, sans-serif" */
	    private _fontFamily?;
	    fontFamily: string | string[] | undefined;
	    /** 字体大小 */
	    private _fontSize;
	    fontSize: number;
	    /** 字体样式 */
	    private _fontStyle;
	    fontStyle: "normal" | "italic" | "oblique";
	    /**  字体变形，普通或小写  */
	    private _fontVariant;
	    fontVariant: "normal" | "small-caps";
	    /** 字体粗细 */
	    private _fontWeight;
	    fontWeight: "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
	    /** 内部填充,只支持文字 */
	    private _padding?;
	    padding: number | undefined;
	    /** 描边颜色 */
	    private _stroke?;
	    stroke: string | number | undefined;
	    /** 描边的笔触粗细值 */
	    private _strokeThickness;
	    strokeThickness: number;
	    /** 是否设置投影 */
	    private _dropShadow;
	    dropShadow: boolean;
	    /** 投影的alpha值 */
	    private _dropShadowAlpha;
	    dropShadowAlpha: boolean;
	    /** 是否设置投影 */
	    private _dropShadowAngle;
	    dropShadowAngle: number;
	    /** 投影的模糊半径 */
	    private _dropShadowBlur;
	    dropShadowBlur: number;
	    /** 投影填充颜色值 */
	    private _dropShadowColor;
	    dropShadowColor: number;
	    /** 投影深度 */
	    private _dropShadowDistance;
	    dropShadowDistance: number;
	    /** 中文换行 */
	    private _breakWords;
	    breakWords: boolean;
	    private onResize;
	}

}
declare module 'layout/CSSBasicLayout' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	export const $tempRectangle: PIXI.Rectangle;
	/**
	 * 布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸
	 */
	export function formatRelative(value: number | string | undefined, total: number): number;
	/**
	 * @private
	 * 一个工具方法，使用BasicLayout规则布局目标对象。
	 */
	export function updateBasicDisplayList(target: DisplayObject | undefined, unscaledWidth: number, unscaledHeight: number): void;

}
declare module 'layout/CSSGridLayout' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 *  更新网格布局
	 *
	 * 单位目前只支持数值或百分比：100 ，”100%“
	 *
	 *  网格布局中，子容器的位置与宽高可能失效
	 *
	 * 关于grid布局的词汇表
	 *
	 * 格网 https://developer.mozilla.org/zh-CN/docs/Glossary/Grid
	 *
	 * 网格行 gridTemplateRows https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns
	 *
	 * 网格列 gridTemplateColumns https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows
	 *
	 * 网格行间距 gridRowGap   https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-gap
	 *
	 * 网格列间距 gridColumnGap  https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column-gap
	 *
	 * 网格轴 （未实现） 支持居中方式为：justifyContent，alignContent
	 *
	 * 网格线（未实现） https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines
	 *
	 * 网格面积（未实现）https://developer.mozilla.org/zh-CN/docs/Glossary/Grid_Areas
	 */
	export function updateGridLayout(target: DisplayObject): PIXI.Rectangle;

}
declare module 'layout/CSSLayout' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	export const $TempRectangle: PIXI.Rectangle;
	/**
	 * 调整目标的元素的大小并定位这些元素。
	 */
	export function updateDisplayLayout(target: DisplayObject, unscaledWidth: number, unscaledHeight: number): void;

}
declare module 'core/plugs/UIBaseDrag' {
	import { DisplayObject } from 'core/DisplayObject';
	import { DisplayObjectAbstract } from 'core/DisplayObjectAbstract';
	import { Stage } from 'core/Stage';
	/**
	 *  组件的拖拽操作
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestDrop
	 */
	export class UIBaseDrag implements Lifecycle {
	    /**
	     * 构造函数
	     */
	    constructor(target: DisplayObject);
	    static key: string;
	    private target;
	    $targetParent: DisplayObject | Stage | undefined;
	    /**
	     * 可拖动初始化
	     *  @default
	     */
	    private dragInitialized;
	    /**
	     * 可被掉落初始化
	     * @default
	    */
	    private dropInitialized;
	    /**
	     * 拖动控制类
	     */
	    private drag;
	    /**
	     * 位置
	     *
	     */
	    private _dragPosition;
	    /**
	     * 开始位置
	     */
	    private _containerStart;
	    /**
	     * 是否拖动中
	     * @default
	     */
	    dragging: boolean;
	    /**
	     * 当前拖动组件的事件ID，用于处理DragDropController中多组件的选定
	     */
	    readonly dragDropEventId: number | undefined;
	    /**
	     * 是否开启拖动
	     * @default false
	     */
	    draggable: boolean;
	    /**
	     * 是否设置边界
	     * @default false
	     */
	    dragBoundary: boolean;
	    /**
	     * 是否启用回弹，在移动到非接收方时，回弹到原始位置
	     */
	    dragBounces: boolean;
	    /**
	     * 限制拖动抽,XY,X抽或Y抽
	     */
	    private _dragRestrictAxis?;
	    dragRestrictAxis: "x" | "y" | undefined;
	    /**
	     * 拖动分组
	     */
	    dragGroup: string;
	    /**
	     * 拖动时，物体临时的存放容器，设置后，请注意事件流
	     */
	    private _dragContainer;
	    dragContainer: DisplayObjectAbstract | undefined;
	    /**
	     * 是否开启拖动掉落接收
	     */
	    droppable: boolean | undefined;
	    /**
	     * 接收掉落的新容器
	     */
	    private _droppableReparent;
	    droppableReparent: DisplayObject | undefined;
	    /**
	     * 接收拖动掉落的分组名
	     */
	    dropGroup: string | undefined;
	    protected clearDraggable(): void;
	    protected initDraggable(): void;
	    protected clearDroppable(): void;
	    protected initDroppable(): void;
	    private onDrop;
	    load(): void;
	    release(): void;
	}

}
declare module 'core/DisplayObject' {
	/// <reference types="pixi.js" />
	import { DisplayLayoutAbstract } from 'core/DisplayLayoutAbstract';
	import { CSSStyle } from 'layout/CSSStyle';
	import { UIBaseDrag } from 'core/plugs/UIBaseDrag';
	/**
	 * UI的顶级类，基础的UI对象
	 *
	 * @class
	 * @since 1.0.0
	 */
	export class DisplayObject extends DisplayLayoutAbstract implements Lifecycle {
	    /**
	     * 构造函数
	     */
	    constructor();
	    /**
	     * 背景
	     */
	    background?: PIXI.Graphics;
	    /**
	     * 遮罩，设置遮罩后，组件内部的索引位置可能产生变化
	     */
	    mask?: PIXI.Graphics | PIXI.Sprite | DisplayObject;
	    /**
	     * 插件列表
	     */
	    plugs: Map<string, Lifecycle>;
	    /**
	     * 拖动限制门槛,小于设置的数不执行拖动,防止点击与滚动
	     */
	    dragThreshold: number;
	    /** 模糊 */
	    private blurFilter?;
	    /**
	     * 设置拖动
	     */
	    dragOption: UIBaseDrag;
	    /**
	     * 分组
	     */
	    protected _groupName?: string;
	    groupName: string | undefined;
	    /**
	     * 透明度
	     */
	    alpha: number;
	    /** 色调 */
	    private _tint;
	    tint: number | undefined;
	    private _blendMode;
	    blendMode: PIXI.BLEND_MODES | undefined;
	    /**
	     * 设置Blur XY的模糊强度
	     *
	     * 参数类型为number时，设置 blurX = blurY = value
	     *
	     */
	    filterBlur: number;
	    /**
	     * 私有样式代理
	     * */
	    protected _style?: CSSStyle;
	    /**
	    *  在不同分辨率下保持像素稳定
	    * @default
	    */
	    pixelPerfect: boolean;
	    /**
	     * 动态属性，避免其他类注入
	     */
	    attach: {
	        [key: string]: object | number | string | Function;
	    };
	    /**
	     * 获取样式
	     */
	    style: CSSStyle;
	    /**
	     * 更新显示列表,子类重写，实现布局
	     */
	    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
	    load(): void;
	    release(): void;
	    releaseAll(): void;
	}

}
declare module 'utils/Utils' {
	/// <reference types="pixi-sound" />
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	import { Stage } from 'core/Stage';
	import { DisplayObjectAbstract } from 'core/DisplayObjectAbstract';
	/**
	 * 工具类
	 */
	/** 日志输出 */
	export function log(message?: string | number | object, ...optionalParams: string[] | number[] | object[]): void;
	/**
	 * 组件获取资源 - 源路径,外部可以重写本方法
	 */
	export let $getSourcePath: Function;
	export function setSourcePath(params: (path: TAny, cls?: TAny) => {}): void;
	/**
	 * 根据显示路径，获取显示对象
	 */
	export let $getUIDisplayObjectPath: Function;
	export function setDisplayObjectPath(params: (cls?: TAny, target?: DisplayObject) => {}): void;
	export function getTexture(src: TAny): any;
	export function getSheet(src: TAny): any;
	export function getSound(src: TAny): PIXI.sound.Sound;
	export function getDisplayObject(src: TAny, target?: DisplayObject): any;
	/**
	 * 递归获取舞台，组件必须已经添加到舞台
	 * @param DisplayObject
	 */
	export function getStage(target: DisplayObject | DisplayObjectAbstract | Stage): Stage | undefined;
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
	export function deepCopy(source: TAny, target?: TAny): any;
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
	export function uid(): number;
	/** 获取URL参数 */
	export function getQueryVariable(variable: string): string | null | undefined;
	/**
	 * 解析一个字符串函数的参数，如xxx(1) = 1
	 * @param
	 */
	export function getStringFunctionParam(str: string): {
	    key: string;
	    value: number;
	};
	export function isDeltaIdentity(m: PIXI.Matrix): boolean;
	/**
	 * 格式化一个百分比为小数
	 * @param value
	 * @param total
	 */
	export function formatRelative(value: number | string | undefined, total: number): number;

}
declare module 'display/Container' {
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 * 基础容器
	 *
	 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
	 *
	 * @example let container = new gui.Container();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestContainer
	 */
	export class Container extends DisplayObject {
	    constructor();
	    /**
	     * 确定指定显示对象是 DisplayObjectContainer 实例的子项或该实例本身。搜索包括整个显示列表（其中包括此 DisplayObjectContainer 实例）。
	     * 孙项、曾孙项等，每项都返回 true。
	     * @param child 要测试的子对象。
	     * @returns 如果 child 对象是 DisplayObjectContainer 的子项或容器本身，则为 true；否则为 false。
	     */
	    contains(child: DisplayObject): boolean;
	}

}
declare module 'display/ScrollingContainer' {
	/// <reference types="pixi.js" />
	import { Container } from 'display/Container';
	import { DisplayObjectAbstract } from 'core/DisplayObjectAbstract';
	/**
	 * 可滚动的容器
	 *
	 * @example let scrollingContainer = new gui.ScrollingContainer();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
	 */
	export class ScrollingContainer extends Container {
	    constructor();
	    /**
	     * 是否启动拖拽滚动
	     * @default true
	     */
	    private _dragScrolling;
	    dragScrolling: boolean;
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
	     * 是否启用水平滚动
	     * @default false
	     */
	    scrollX: boolean;
	    /**
	     * 是否滚动中
	     */
	    scrollY: boolean;
	    /**
	     * 内容容器
	     * @private
	     */
	    private _innerContainer;
	    /**
	     * 内容的宽高
	     */
	    innerBounds: PIXI.Rectangle;
	    /**
	     * 拖动处理类
	     */
	    private dragEvent;
	    /**
	     * 鼠标滚动
	     */
	    private mouseScrollEvent;
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
	    private _isInitScrolling;
	    private _containerStart;
	    private _targetPosition;
	    private _lastPosition;
	    private _Position;
	    private _Speed;
	    private _stop;
	    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
	    protected setScrollPosition(speed?: PIXI.Point): void;
	    addChildAt<T extends DisplayObjectAbstract>(item: T, index: number): T;
	    protected getInnerBounds(force?: boolean): PIXI.Rectangle;
	    $onInit(): void;
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
declare module 'display/SpriteAnimated' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 * 序列图动画
	 *
	 * 支持使用texturepacker导出以及处理轴点
	 *
	 * @example let spriteAnimated = new gui.SpriteAnimated();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSpriteAnimated
	 */
	export class SpriteAnimated extends DisplayObject {
	    constructor();
	    private _animatedSprites;
	    private _lastAnimatedName;
	    private _curFrameNumber;
	    /**
	     * 要播放的动作名
	     */
	    private _animationName;
	    animationName: string;
	    /**
	     * 序列图路径，或序列图数组
	     */
	    private _src;
	    src: PIXI.Spritesheet | PIXI.Texture[] | undefined;
	    /**
	     * 动画速度
	     */
	    private _animationSpeed;
	    animationSpeed: number;
	    /**
	     * 是的循环
	     */
	    private _loop;
	    loop: boolean;
	    /**
	     * 是否播放中
	     */
	    private _playing;
	    readonly playing: boolean;
	    /**
	     * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
	     */
	    private _anchorX;
	    anchorX: number;
	    /**
	     * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
	     */
	    private _anchorY;
	    anchorY: number;
	    /** 跳转到第N帧并播放 */
	    gotoAndPlay(frameNumber: number): void;
	    /** 跳转到第N帧并停止 */
	    gotoAndStop(frameNumber: number): void;
	    /** 停止 */
	    stop(): void;
	    /** 播放 */
	    play(): void;
	    autoPlay: boolean;
	    isPlay: boolean;
	    /**
	     * 添加动画
	     */
	    addAnimated(animationName: string, textures: PIXI.Texture[]): void;
	    release(): void;
	    protected releaseAnimate(): void;
	    protected srcSystem(): void;
	    protected animatedNameSystem(): void;
	    protected playSystem(): void;
	    protected attribSystem(): void;
	}

}
declare module 'event/KeyEvent' {
	/**
	 * 键盘事件 驱动类KeysEvent
	 *
	 */
	export const enum KeyEvent {
	    input = "input",
	    /**
	     * 键盘按下
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    keydown = "keydown",
	    /**
	     * 键盘弹起
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    keyup = "keyup",
	    /**
	     * 粘贴
	     *
	     * (e:InteractionEvent,obj:DisplayObject,clipboardData: DataTransfer | null)
	     */
	    paste = "paste",
	    /**
	     * 复制
	     *
	     * (e:InteractionEvent,obj:DisplayObject,clipboardData: DataTransfer | null)
	     */
	    copy = "copy",
	    /**
	     * 剪切
	     *
	     * (e:InteractionEvent,obj:DisplayObject,clipboardData: DataTransfer | null)
	     */
	    cut = "cut",
	    /**
	     * 回退删除
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    backspace = 8,
	    /**
	     * 回车
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    enter = 13,
	    /**
	     * 删除
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    delete = 46,
	    /**
	     * 全选 ctrl+a
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    ctrlA = 65,
	    /**
	     * 撤销 ctrl+z
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    ctrlZ = 90,
	    /**
	     * 箭头左
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    left = 37,
	    /**
	     * 箭头上
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    top = 38,
	    /**
	     * 箭头右
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    right = 39,
	    /**
	     * 箭头下
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    down = 40,
	    /**
	     * shift + 箭头左
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    shiftLeft = "shift37",
	    /**
	     * shift + 箭头右
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    shiftRight = "shift39",
	    /**
	     * shift + 箭头上
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    shiftTop = "shift38",
	    /**
	     * shift + 箭头下
	     *
	     * (e:InteractionEvent,obj:DisplayObject)
	     */
	    shiftDown = "shift40"
	}

}
declare module 'display/private/HtmlInput' {
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
	    maxlength: number;
	    restrict: RegExp | undefined;
	    setStyle(style: InputStyle): void;
	    setStyleValue(key: TAny, value: TAny): void;
	    select(): void;
	    /** 测量，需要对象添加到body中 */
	    getDOMInputBounds(): ClientRect | DOMRect;
	    updatePostion(top: string | number, left: string | number, transform: string, opacity?: string | number): void;
	    private addDom;
	    private removeDom;
	    release(): void;
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
declare module 'display/TextInput' {
	/// <reference types="pixi.js" />
	import HtmlInput from 'display/private/HtmlInput';
	import { InputBase } from 'display/private/InputBase';
	import { Image } from 'display/Image';
	/**
	 * 文本输入
	 *
	 * @example let textInput = new gui.TextInput(true|false);//单行或多行
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTextInput
	 */
	export class TextInput extends InputBase {
	    constructor(multiline?: boolean);
	    protected _oldState: string;
	    protected htmlInputShared: HtmlInput;
	    protected _lastRenderer: PIXI.Renderer | undefined;
	    protected _resolution: number;
	    protected _canvasBounds: {
	        top: number;
	        left: number;
	        width: number;
	        height: number;
	    } | undefined;
	    protected _previous: {
	        canvasBounds: TAny;
	        worldTransform: TAny;
	        worldAlpha: TAny;
	        worldVisible: TAny;
	    } | TAny;
	    protected _inputStyle: InputStyle;
	    /**
	     * 预览文字的样式
	     */
	    protected placeholderColor: number;
	    protected _domVisible: boolean;
	    protected _textHitbox: PIXI.Graphics;
	    protected _textMask: PIXI.Graphics;
	    protected _text: PIXI.Text;
	    protected _fontMetrics: PIXI.IFontMetrics | undefined;
	    protected state: string;
	    /**
	     * 设置文本
	     */
	    text: string;
	    /**
	     * 预览文字
	     */
	    private _placeholder;
	    placeholder: string;
	    /**
	     * 设置最大可输入
	     */
	    private _maxLength;
	    maxLength: number;
	    /**
	     * 过滤表达式
	     */
	    private _restrict;
	    restrict: RegExp | undefined;
	    /**
	     * 状态展示
	    */
	    readonly img: Image;
	    updateSystem(renderer?: PIXI.Renderer): void;
	    /**
	     * 设置焦点
	     */
	    focus(): void;
	    /**
	     * 失去焦点
	     */
	    blur(): void;
	    /**
	     * 设置css style样式
	     * @param key 健
	     * @param value 值
	     */
	    setInputStyle(key: TAny, value: TAny): void;
	    protected onStateChange(ui: TextInput, state: string): void;
	    private _onInputInput;
	    private _onFocused;
	    private _onBlurred;
	    private _setState;
	    private _updateSubstitution;
	    render(renderer: PIXI.Renderer): void;
	    private _renderInternal;
	    private _updateDOMInput;
	    private _needsUpdate;
	    private _updatetext;
	    private _ontextFocus;
	    private _ensureFocus;
	    private _derivetextStyle;
	    private _derivetextPadding;
	    private _derivetextText;
	    private _hasFocus;
	    private _getCanvasBounds;
	    private _getDOMRelativeWorldTransform;
	    private _pixiMatrixToCSS;
	    private _comparePixiMatrices;
	    private _compareClientRects;
	    release(): void;
	}

}
declare module 'display/Slider' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	import { Image as VfuiImage } from 'display/Image';
	import { DragEvent, InteractionEvent } from 'interaction/Index';
	/**
	 * 滑动条/进度条
	 *
	 * @example let slider = new gui.Slider();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSlider
	 */
	export class Slider extends DisplayObject {
	    constructor();
	    /**
	     * 当前值
	     */
	    protected _amt: number;
	    /**
	     * 小数的保留位，0不保留
	     * @default 0
	     */
	    protected _decimals: number;
	    protected _startValue: number;
	    protected _maxPosition: number;
	    protected _localMousePosition: PIXI.Point;
	    protected _lastChange: number;
	    protected _lastChanging: number;
	    private _thumbDrag;
	    private _trackDrag;
	    /** 状态展示 */
	    readonly trackImg: VfuiImage;
	    readonly thumbImg: VfuiImage;
	    readonly tracklightImg: VfuiImage;
	    private _value;
	    /**
	     * 当前值
	     */
	    value: number;
	    protected valueSystem(): void;
	    /**
	     * 最小值
	     */
	    private _minValue;
	    minValue: number;
	    /**
	     * 最大值
	     */
	    private _maxValue;
	    maxValue: number;
	    /**
	     * 是否垂直,滑块方向
	     */
	    private _vertical;
	    vertical: boolean;
	    /**
	     * 背景
	     */
	    private _track?;
	    track: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
	    /**
	     * 手柄
	     */
	    private _thumb?;
	    thumb: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
	    /**
	     * 进度
	     */
	    private _tracklight?;
	    tracklight: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
	    private isExcValueSystem;
	    setActualSize(w: number, h: number): void;
	    release(): void;
	    private onImgload;
	    protected updateLayout(): void;
	    protected updatePosition(soft?: boolean): void;
	    protected onPress(event: InteractionEvent, isPressed: boolean, dragEvent?: DragEvent): void;
	    protected onDragStart(event: InteractionEvent): void;
	    protected onDragMove(event: InteractionEvent, offset: PIXI.Point): void;
	    protected onDragEnd(event: InteractionEvent): void;
	    protected updatePositionToMouse(mousePosition: PIXI.Point, soft: boolean): void;
	    protected triggerValueChange(): void;
	    protected triggerValueChanging(): void;
	}

}
declare module 'display/Rect' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 * 绘制矩形或圆角矩形
	 *
	 * @example let rect = new gui.Rect();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
	 */
	export class Rect extends DisplayObject {
	    constructor();
	    readonly graphics: PIXI.Graphics;
	    /**
	     * 圆角
	     */
	    private _radius;
	    radius: number;
	    /**
	     * 线条颜色
	     */
	    private _lineColor;
	    lineColor: number;
	    /**
	     * 线条粗细
	     */
	    private _lineWidth;
	    lineWidth: number;
	    /**
	     * 颜色
	     */
	    private _color;
	    color: number;
	    /**
	     * 锚点，调整位图的坐标中点 0-1
	     */
	    private _anchorX?;
	    anchorX: number | undefined;
	    /**
	     * 锚点，调整位图的坐标中点 0-1
	     */
	    private _anchorY?;
	    anchorY: number | undefined;
	    drawRoundedRect(): void;
	    release(): void;
	    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
	}

}
declare module 'display/Graphics' {
	/// <reference types="pixi.js" />
	import { DisplayObject } from 'core/DisplayObject';
	/**
	 * 矢量绘制
	 *
	 * @example let graphics = new gui.Graphics();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
	 */
	export class Graphics extends DisplayObject {
	    constructor(geometry?: PIXI.GraphicsGeometry | undefined);
	    readonly graphics: PIXI.Graphics;
	}

}
declare module 'display/Sound' {
	/// <reference types="pixi-sound" />
	/// <reference types="pixi.js" />
	import { SpriteAnimated } from 'display/SpriteAnimated';
	import { InputBase } from 'display/private/InputBase';
	export const $sounds: Map<string, PIXI.sound.Sound>;
	/**
	 * 音频播放组件
	 *
	 * @example let sound = new gui.Sound();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSound
	 */
	export class Sound extends InputBase {
	    constructor();
	    protected _sound: PIXI.sound.Sound | undefined;
	    protected _mediaInstance: PIXI.sound.IMediaInstance | undefined;
	    /**
	     * 状态展示
	     */
	    readonly spriteAnimated: SpriteAnimated;
	    /**
	     * 是否自动播放
	     * @default false
	     */
	    private _autoPlay;
	    autoPlay: boolean;
	    /**
	     * 播放的动画
	     */
	    private _sheetSkin?;
	    sheetSkin: PIXI.Spritesheet | undefined;
	    readonly duration: number;
	    private _src;
	    /**
	     * 音频源
	     */
	    src: string | number | PIXI.sound.Options | ArrayBuffer | HTMLAudioElement | undefined;
	    /**
	     * 动画速度
	     */
	    animationSpeed: number;
	    private _speed;
	    /**
	     * 设置播放速度
	     */
	    speed: number;
	    private _volume;
	    /**
	     * 音量
	     * @default 100
	     */
	    volume: number;
	    private _loop;
	    /**
	     * 是否循环
	     * @default false
	     */
	    loop: boolean;
	    protected _curProgress: number;
	    protected _playing: boolean;
	    readonly isPlaying: boolean;
	    private _startTime?;
	    startTime: number | undefined;
	    private _endTime?;
	    endTime: number | undefined;
	    isPlay: boolean;
	    protected commitProperties(): void;
	    play(start?: number, end?: number): Promise<void>;
	    stop(): void;
	    /**
	     * 恢复播放
	     */
	    resume(): void;
	    /**
	     * 暂停播放
	     */
	    pause(): void;
	    release(): void;
	    private releaseSound;
	    private onProgress;
	    private onEnd;
	    protected onClick(): void;
	}

}
declare module 'event/Index' {
	import * as ComponentEvent from 'event/ComponentEvent';
	import { InteractionEvent } from 'event/InteractionEvent';
	import { TouchMouseEvent } from 'event/TouchMouseEvent';
	import { TweenEvent } from 'event/TweenEvent';
	export { ComponentEvent, InteractionEvent, TouchMouseEvent, TweenEvent, };

}
declare module 'UI' {
	/** 工具类 */
	import * as Utils from 'utils/Utils';
	/** UI舞台，最顶级的层 展示所有UI组件 */
	import { Stage } from 'core/Stage';
	/** UI基础显示对象，一般不会直接使用，只作为类型推断 */
	import { DisplayObject } from 'core/DisplayObject';
	/** 心跳，需要在初始化完成后，启动心跳更新 */
	import { shared as TickerShared } from 'core/Ticker';
	/**
	 * 基础容器
	 *
	 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
	 *
	 * @example let container = new gui.Container();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestContainer
	 */
	import { Container } from 'display/Container';
	/**
	 * 滚动容器
	 *
	 * @example let scrollingContainer = new gui.ScrollingContainer();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
	 */
	import { ScrollingContainer } from 'display/ScrollingContainer';
	/**
	 * 图片
	 *
	 * @example let image = new gui.Image();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestImage
	 */
	import { Image } from 'display/Image';
	/**
	 * 序列图动画
	 *
	 * 支持使用texturepacker导出以及处理轴点
	 *
	 * @example let spriteAnimated = new gui.SpriteAnimated();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSpriteAnimated
	 */
	import { SpriteAnimated } from 'display/SpriteAnimated';
	/**
	 * 文本
	 *
	 * 中文换行特殊处理 xxxx.style.breakWords = true;
	 *
	 * 文本没有宽高，自适应
	 *
	 * @example let label = new gui.Label();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestLabel
	 */
	import { Label } from 'display/Label';
	/**
	 * 文本输入
	 *
	 * @example let textInput = new gui.TextInput(true|false);//单行或多行
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTextInput
	 */
	import { TextInput } from 'display/TextInput';
	/**
	 * 滑动条/进度条
	 *
	 * @example let slider = new gui.Slider();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSlider
	 */
	import { Slider } from 'display/Slider';
	/**
	 * 按钮
	 *
	 * @example let button = new gui.Button();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestButton
	 */
	import { Button } from 'display/Button';
	/**
	 * 单选\复选框
	 *
	 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
	 *
	 * @example let checkBox = new gui.CheckBox();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestCheckBox
	 */
	import { CheckBox } from 'display/CheckBox';
	/**
	 * 绘制矩形或圆角矩形
	 *
	 * @example let rect = new gui.Rect();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
	 */
	import { Rect } from 'display/Rect';
	/**
	 * 矢量绘制
	 *
	 * @example let graphics = new gui.Graphics();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
	 */
	import { Graphics } from 'display/Graphics';
	/**
	 * 音频播放组件
	 *
	 * @example let sound = new gui.Sound();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSound
	 */
	import { Sound } from 'display/Sound';
	/**
	 * 完整的缓动曲线列表
	 *
	 * @example gui.Easing.Linear.None;
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
	 */
	import { Easing } from 'tween/Easing';
	/**
	 * 缓动动画
	 *
	 * @example let tween = new gui.Tween(myObject).to({width:'300px'}, 2000).start()
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
	 */
	import { Tween } from 'tween/Tween';
	/**
	 * 基于帧的时间轴控制类
	 *
	 * @example let timeline = new gui.Timeline();
	 *
	 * @namespace gui
	 *
	 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
	 */
	import { Timeline } from 'tween/Timeline';
	/**
	 * 事件绑定类，非继承于inputbase的组件是没有任何交互事件，需单独绑定
	 */
	import * as Interaction from 'interaction/Index';
	/**
	 * 事件名
	 */
	import * as Event from 'event/Index';
	/** 请不要在编写UI组件内部使用本类 */
	export { Utils, Stage, Container, ScrollingContainer, Slider, Label, TextInput, Button, CheckBox, Rect, Graphics, Interaction, DisplayObject, TickerShared, Tween, Timeline, Easing, Image, SpriteAnimated, Sound, Event };

}
declare module 'vf-gui' {
	import * as vfgui from 'UI';
	export default vfgui;

}
declare type TAny = any;
interface Window {
    readonly clipboardData: DataTransfer | null;
    gui: any;
}
declare interface ObjectConstructor {
    assign(...objects: Record<string, any>[]): Record<string, any>;
}
interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    from<T>(arrayLike: ArrayLike<T>): T[];
}
interface String {
    startsWith(searchString: string, position?: number): boolean;
}
interface TInputBase {
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
interface Lifecycle {
    /**
     * 组件加载，暂时可能用不到
     */
    load(): void;
    /**
     * 释放，回收
     */
    release(): void;
}
/**
 * 生命周期的接口
 */
interface LifecycleHook {
    /**
     * 显示对象初始化完成，只执行一次,子类重写，不可外部调用
     */
    $onInit(): void;
    /**
     * 加载完成，不可外部调用
     */
    $onLoad(): void;
    /**
     * 回收，释放完成，不可外部调用
     */
    $onRelease(): void;
    /**
     * 添加到舞台后，不可外部调用
     */
    $onAddStage(): void;
    /**
     * 移出舞台后，不可外部调用
     */
    $onRemoveStage(): void;
}
declare module 'core/UIBase' {
	import { DisplayObject } from 'core/DisplayObject';
	export class UIBase extends DisplayObject implements Lifecycle {
	    constructor();
	}

}
declare module 'interaction/KeyboardEvent' {
	import { DisplayObject } from 'core/DisplayObject'; class KeyboardSelectEvent {
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
	    focus(obj: DisplayObject): void;
	    blur(): void;
	}
	/**
	 * KeyboardSelectEvent 的实例
	 */
	export const keyboardShared: KeyboardSelectEvent;
	export {};

}
declare module 'tween/private/PlaybackPosition' {
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

declare namespace gui{
    export * from "UI";
}
