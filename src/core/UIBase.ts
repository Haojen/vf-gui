import { Stage } from "./Stage";
import { DragEvent } from "../interaction/DragEvent";
import * as DragDropController from "../interaction/DragDropController";
import { TouchMouseEventEnum, } from "../enum/TouchMouseEventEnum";
import { uid } from "./Utils";
import { InteractionEvent, DraggableEvent } from "../interaction/InteractionEvent";

import { CSSStyle} from "../layout/CSSStyle";
import { updateDisplayList } from "../layout/CSSLayout";

import { Core } from "./Core";

/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @param width {Number} Width UI对象的宽度
 * @param height {Number} Height UI对象的高度
 * @since 1.0.0
 */
export class UIBase extends Core {
    /**
     * 构造函数
     * @param width 宽 数字或百分比, 不传默认0
     * @param height 高 数字或百分比,不传默认0
     */
    public constructor(width?: number, height?: number) {
        super();
        this.uuid = uid();
        this.container.name = (this.constructor as TAny).name;
        this.__styleObject = new CSSStyle();
        this._style = new Proxy(this.__styleObject, this.updateStyleProxyHandler);
        this.container.isEmitRender = true;
        this.container.on("renderChange", this.onRenderer, this);
    }

    /**
     * 全局唯一ID
     */
    public readonly uuid: string;
    /**
     * 自定义组价名
     */
    public name = "";
    /** 
     * 原始样式属性
     */
    protected __styleObject: CSSStyle;
    /** 
     * 私有样式代理 
     * */
    protected _style: CSSStyle;
    /**
    *  在不同分辨率下保持像素稳定 
    * @default
    */
    public pixelPerfect = true;
    /** 
     * 可拖动初始化
     *  @default
     */
    public dragInitialized = false;
    /** 
     * 可被掉落初始化
     * @default
    */
    public dropInitialized = false;
    /** 
     * 覆盖缓动播放时的位置 
     * 
     */
    public _dragPosition: PIXI.Point | undefined;
    /** 
     * 动态属性，避免其他类注入 
     */
    public attach: { [key: string]: object | number | string | Function } = {};
    /** 
     * 是否拖动中
     * @default
     */
    public dragging = false;
    /** 
     * 拖动控制类 
     */
    public drag: DragEvent | undefined;
    /** 
     * 当前拖动组件的事件ID，用于处理DragDropController中多组件的选定 
     */
    public dragDropEventId: number | undefined;
    /* 混合模式 */
    private _blendMode: PIXI.BLEND_MODES | undefined;
    public get blendMode(): PIXI.BLEND_MODES | undefined {
        return this._blendMode;
    }
    public set blendMode(value: PIXI.BLEND_MODES | undefined) {
        if (value !== this._blendMode) {
            this._blendMode = value;
            this.update();
        }
    }
    /** 
     * 组件渲染后，才会有值 
     */
    public get x() {
        return this.container.x;
    }
    public set x(value: number) {
        this.container.x = value;
    }
    /** 
     * 组件渲染后，才会有值 
     */
    public get y() {
        return this.container.y;
    }
    public set y(value: number) {
        this.container.y = value;
    }

    protected _width = 0;
    /** 
     * 组件渲染后，才会有值,继承组件需要根据这个值确定宽高 
     */
    public get width() {
        return this._width;
    }
    public set width(value:number) {
        this._width = value;
    }

    protected _height = 0;
    /** 
     * 组件渲染后，才会有值 
     */
    public get height() {
        return this._height;
    }
    public set height(value:number) {
        this._height = value;
    }
    /** 
     * 获取样式 
     */
    public get style() {
        return this._style;
    }


    private _draggable = false;
    /**
     * 是否开启拖动
     * @default false
     */
    public set draggable(value: boolean) {
        this._draggable = value;
        if (this.initialized) {
            if (value)
                this.initDraggable();
            else
                this.clearDraggable();
        }
    }
    public get draggable() {
        return this._draggable;
    }

    /**
     * 是否开启限制拖动范围
     */
    public dragRestricted = false;

    /**
     * 限制拖动抽X抽或Y抽，需要开启dragRestricted
     */
    public dragRestrictAxis: "x" | "y" | undefined;
    /**
     * 拖动限制门槛,小于设置的数不执行拖动
     */
    public dragThreshold = 0;
    /**
     * 拖动分组
     */
    public dragGroup: string | undefined;

    /**
     * 拖动的容器
     */
    public dragContainer: PIXI.Container | UIBase | undefined;

    private _droppable = false;
    /**
     * 是否开拖动掉落
     */
    public set droppable(value: boolean | undefined) {
        this._droppable = true;
        if (this.initialized) {
            if (value)
                this.initDroppable();
            else
                this.clearDroppable();
        }
    }
    public get droppable() {
        return this._droppable;
    }
    /**
     * 接收掉落的新容器
     */
    public droppableReparent: UIBase | undefined;
    /**
     * 接收拖动掉落的分组名
     */
    public dropGroup: string | undefined;

    /**
     * 绘制渲染对象
     * @param updateChildren 是否渲染子节点，true渲染
     * @param updateParent  是否渲染父容器，true渲染
     */
    public updatesettings(updateChildren: boolean, updateParent?: boolean) {
        if (!this.initialized) {
            if (this.parent == null) {
                return;
            }
            if (this.parent.stage !== null && this.parent.initialized) {
                this.initialize();
            }
        }

        if (updateParent) {
            this.updateParent();
        }
        this.updateBaseLayout();
        this.update();
        if (updateChildren) {
            this.updateChildren();
        }
    }


    protected updateStyleProxyHandler = {
        get(target: CSSStyle, key: string, receiver: any) {
            return (target as any)[key];
        },
        set(target: CSSStyle, key: string, value: any, receiver: any) {
            if ((target as any)[key] === value) {
                return true;
            }
            target._valuesPct[key] = 0;
            if (typeof value === "string" && value.indexOf("%") !== -1) {
                target._valuesPct[key] = parseFloat(value.replace('%', '')) * 0.01 || 0;
            }
            target._dirty = true;
            let oldValue = (target as any)[key];
            (target as any)[key] = value;
            target.eventEmitter.emit("ValueChangeEvent",key,value,oldValue);
            return true;
        }
    }

    protected onRenderer() {
        this.updateBaseLayout();
        this.update();
    }

    protected updateBaseLayout() {

        if (!this._style._dirty) {
            return;
        }
        console.log("updateBaseLayout");
        if (!this.parent) {
            return;
        }

        //Unrestricted dragging
        if (this.dragging && !this.dragRestricted && this._dragPosition) {
            this.container.setTransform(this._dragPosition.x, this._dragPosition.y);
            return;
        }

        updateDisplayList(this,this._style);

        this._style._dirty = false;

    }

    /**
     * 更新方法，其他组件重写
     */
    public update() {

    }

    public release() {
        this.container.removeAllListeners();
    }

    /**
     * Initializes the object when its added to an UIStage
     * 将对象添加到UIStage时，进行的初始化方法
     */
    protected initialize() {
        this.initialized = true;
        this.stage = this.parent && this.parent.stage;
        if (this.draggable) {
            this.initDraggable();
        }

        if (this.droppable) {
            this.initDroppable();
        }
    }

    protected clearDraggable() {
        if (this.dragInitialized) {
            this.dragInitialized = false;
            this.drag && this.drag.stopEvent();
        }
    }

    protected initDraggable() {
        if (!this.dragInitialized) {
            this.dragInitialized = true;
            const containerStart = new PIXI.Point(),
                stageOffset = new PIXI.Point();
            //self = this;

            this._dragPosition = new PIXI.Point();
            this.drag = new DragEvent(this);
            this.drag.onDragStart = (e: InteractionEvent) => {
                const added = DragDropController.add(this, e);
                if (!this.dragging && added) {
                    this.dragging = true;
                    this.container.interactive = false;
                    containerStart.copyFrom(this.container.position);
                    if (this.dragContainer) {
                        let c: PIXI.Container | undefined;
                        if (this.dragContainer instanceof UIBase) {
                            c = this.dragContainer.container;
                        } else if (this.dragContainer instanceof PIXI.Container) {
                            c = this.dragContainer;
                        }
                        if (c && this.parent) {
                            //_this.container._recursivePostUpdateTransform();
                            stageOffset.set(c.worldTransform.tx - this.parent.container.worldTransform.tx, c.worldTransform.ty - this.parent.container.worldTransform.ty);
                            c.addChild(this.container);
                        }
                    } else {
                        stageOffset.set(0);
                    }
                    this.emit(DraggableEvent.onDragStart, e);
                }
            };


            this.drag.onDragMove = (e: InteractionEvent, offset: PIXI.Point) => {
                if (this.dragging && this._dragPosition) {
                    this._dragPosition.set(containerStart.x + offset.x - stageOffset.x, containerStart.y + offset.y - stageOffset.y);
                    this.x = this._dragPosition.x;
                    this.y = this._dragPosition.y;
                    this.emit(DraggableEvent.onDragMove, e);
                }

            };

            this.drag.onDragEnd = (e: InteractionEvent) => {
                if (this.dragging) {
                    this.dragging = false;
                    //Return to container after 0ms if not picked up by a droppable
                    setTimeout(() => {

                        this.container.interactive = true;
                        const item = DragDropController.getItem(this);
                        if (item && this.parent) {
                            let container = this.parent.container;
                            if (container)
                                container.toLocal(this.container.position, this.container.parent);
                            if (container != this.container) {
                                if (this.parent instanceof UIBase) {
                                    this.parent.addChild(this);
                                } else {
                                    this.parent.addChild(this);
                                }

                            }
                        }
                        this.emit(DraggableEvent.onDragEnd, e);
                    }, 0);
                }

            };
        }
    }

    protected clearDroppable() {
        if (this.dropInitialized) {
            this.dropInitialized = false;
            this.container.removeListener(TouchMouseEventEnum.mouseup, this.onDrop, this);
            this.container.removeListener(TouchMouseEventEnum.touchend, this.onDrop, this);
        }
    }

    protected initDroppable() {
        if (!this.dropInitialized) {
            this.dropInitialized = true;
            const container = this.container;
            //self = this;
            this.container.interactive = true;
            container.on(TouchMouseEventEnum.mouseup, this.onDrop, this);
            container.on(TouchMouseEventEnum.touchend, this.onDrop, this);
        }
    }

    private onDrop(e: InteractionEvent) {
        const item = DragDropController.getEventItem(e, this.dropGroup);
        if (item && item.dragging) {
            item.dragging = false;
            item.container.interactive = true;
            const parent = this.droppableReparent !== undefined ? this.droppableReparent : this;
            if (parent) {
                parent.container.toLocal(item.container.position, item.container.parent);
                if (parent.container != item.container.parent)
                    parent.addChild(item);
            }
        }
    }


}