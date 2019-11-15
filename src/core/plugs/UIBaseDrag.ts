import { UIBase } from "../UIBase";
import { DragEvent, DragDropController, InteractionEvent, ComponentEvent } from "../../interaction/Index";
import { TouchMouseEventEnum } from "../../enum/TouchMouseEventEnum";
import { Core } from "../Core";
import { Stage } from "../Stage";
import { getDisplayObject } from "../Utils";


/**
 *  组件的拖拽操作
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.5.0/TestDrop
 */
export class UIBaseDrag implements Lifecycle {
    /**
     * 构造函数
     */
    public constructor(target: UIBase) {
        this.target = target;
        this.target.plugs.set(UIBaseDrag.key, this);
    }

    public static key = "UIBaseDrag";

    private target: UIBase | undefined;
    public $targetParent: UIBase | Stage | undefined;
    /** 
     * 可拖动初始化
     *  @default
     */
    private dragInitialized = false;
    /** 
     * 可被掉落初始化
     * @default
    */
    private dropInitialized = false;
    /** 
     * 拖动控制类 
     */
    private drag: DragEvent | undefined;
    /** 
     * 位置 
     * 
     */
    private _dragPosition = new PIXI.Point();
    /**
     * 开始位置
     */
    private _containerStart: PIXI.Point | undefined;

    /** 
     * 是否拖动中
     * @default
     */
    public dragging = false;
    /** 
     * 当前拖动组件的事件ID，用于处理DragDropController中多组件的选定 
     */
    public get dragDropEventId(): number | undefined {
        if (this.target) {
            return this.target.attach.dragDropEventId as number;
        }
    }

    /**
     * 是否开启拖动
     * @default false
     */
    public set draggable(value: boolean) {
        if (value)
            this.initDraggable();
        else
            this.clearDraggable();
    }

    /**
     * 是否设置边界
     * @default false
     */
    public dragBoundary = false;
    /**
     * 是否启用回弹，在移动到非接收方时，回弹到原始位置
     */
    public dragBounces = false;

    /**
     * 限制拖动抽,XY,X抽或Y抽
     */
    private _dragRestrictAxis?: "x" | "y";
    public get dragRestrictAxis() {
        return this._dragRestrictAxis;
    }
    public set dragRestrictAxis(value) {
        this._dragRestrictAxis = value;
        if (this.drag) {
            this.drag.dragRestrictAxis = this._dragRestrictAxis;
        }
    }

    /** 
     * 拖动分组
     */
    public get dragGroup(): string {
        if (this.target) {
            return this.target.attach.dragGroup as string;
        }
        return "";
    }
    public set dragGroup(value: string) {
        if (this.target)
            this.target.attach.dragGroup = value;
    }

    /**
     * 拖动时，物体临时的存放容器，设置后，请注意事件流
     */
    private _dragContainer: Core | undefined;
    public get dragContainer() {
        return this._dragContainer;
    }
    public set dragContainer(value) {
        this._dragContainer = getDisplayObject(value);
    }

    /**
     * 是否开启拖动掉落接收
     */
    public set droppable(value: boolean | undefined) {
        if (value)
            this.initDroppable();
        else
            this.clearDroppable();
    }

    /**
     * 接收掉落的新容器
     */
    private _droppableReparent: UIBase | undefined;
    public get droppableReparent() {
        return this._droppableReparent;
    }
    public set droppableReparent(value) {
        this._droppableReparent = getDisplayObject(value);;
    }
    /**
     * 接收拖动掉落的分组名
     */
    public dropGroup: string | undefined;


    protected clearDraggable() {
        if (this.dragInitialized) {
            this.dragInitialized = false;
            this.drag && this.drag.stopEvent();
        }
    }

    protected initDraggable() {
        if (this.target == undefined) {
            return;
        }
        if (!this.dragInitialized) {

            this.dragInitialized = true;
            const containerStart = new PIXI.Point();
            const stageOffset = new PIXI.Point();
            this._containerStart = containerStart;
            this._dragPosition.set(0, 0);
            this._dragContainer = Stage.Ins;

            this.drag = new DragEvent(this.target);
            this.drag.dragRestrictAxis = this._dragRestrictAxis;

            this.drag.onDragStart = (e: InteractionEvent) => {
                if (this.target == undefined) {
                    return;
                }
                let target = this.target;
                this.$targetParent = target.parent;
                const added = DragDropController.add(target, e);
                if (!this.dragging && added) {
                    target.emit(ComponentEvent.DRAG_START_BEFORE, target, e);
                    this.dragging = true;
                    target.interactive = false;
                    containerStart.copyFrom(target.container.position);
                    if (this._dragContainer) {
                        let c: Core | undefined;
                        if (this._dragContainer instanceof Core) {
                            c = this._dragContainer;
                        }
                        if (c && target.parent) {
                            //_this.container._recursivePostUpdateTransform();

                            stageOffset.set(c.container.worldTransform.tx - target.parent.container.worldTransform.tx, c.container.worldTransform.ty - target.parent.container.worldTransform.ty);
                            c.addChild(target);
                        }
                    } else {
                        stageOffset.set(0);
                    }
                    target.emit(ComponentEvent.DRAG_START, target, e);
                }
            };


            this.drag.onDragMove = (e: InteractionEvent, offset: PIXI.Point) => {
                if (this.target == undefined) {
                    return;
                }
                let target = this.target;
                if (this.dragging) {
                    let x = containerStart.x + offset.x - stageOffset.x;
                    let y = containerStart.y + offset.y - stageOffset.y;
                    if (this.dragRestrictAxis == "x") {
                        this._dragPosition.set(x, containerStart.y - stageOffset.y);
                    } else if (this.dragRestrictAxis == "y") {
                        this._dragPosition.set(containerStart.x - stageOffset.x, y);
                    } else {
                        this._dragPosition.set(x, y);
                    }
                    if (this.dragBoundary && target.parent) {
                        this._dragPosition.x = Math.max(0, this._dragPosition.x);
                        this._dragPosition.x = Math.min(this._dragPosition.x, target.parent.width - target.width);
                        this._dragPosition.y = Math.max(0, this._dragPosition.y);
                        this._dragPosition.y = Math.min(this._dragPosition.y, target.parent.height - target.height);
                    }
                    target.setPosition(this._dragPosition.x, this._dragPosition.y);
                    target.emit(ComponentEvent.DRAG_MOVE, target, e);
                }

            };

            this.drag.onDragEnd = (e: InteractionEvent) => {
                if (this.dragging) {
                    this.dragging = false;

                    //如果没有可被放置掉落的容器，0秒后返回原容器
                    setTimeout(() => {
                        if (this.target == undefined) {
                            return;
                        }

                        //dragBounces
                        let target = this.target;
                        let parent = this.$targetParent;
                        target.interactive = true;
                        const item = DragDropController.getItem(target);
                        target.emit(ComponentEvent.DRAG_END_BEFORE, target, e);
                        if (item && parent) {
                            if (target.parent !== parent && target.parent) {
                                parent.container.toLocal(target.container.position, target.container.parent, this._dragPosition);
                                parent.addChild(target);
                                target.x = this._dragPosition.x;
                                target.y = this._dragPosition.y;
                            }
                            if (this.dragBounces && this._containerStart) {
                                target.x = this._containerStart.x;
                                target.y = this._containerStart.y;
                            }
                        }
                        target.emit(ComponentEvent.DRAG_END, target, e);


                    }, 0);
                }

            };
        }
    }

    protected clearDroppable() {
        if (this.target == undefined) {
            return;
        }
        let target = this.target;
        if (this.dropInitialized) {
            this.dropInitialized = false;
            target.container.off(TouchMouseEventEnum.mouseup, this.onDrop, this);
            target.container.off(TouchMouseEventEnum.touchend, this.onDrop, this);
        }
    }

    protected initDroppable() {
        if (this.target == undefined) {
            return;
        }
        let target = this.target;
        if (!this.dropInitialized) {
            this.dropInitialized = true;
            const container = target.container;
            //self = this;
            container.interactive = true;
            container.on(TouchMouseEventEnum.mouseup, this.onDrop, this);
            container.on(TouchMouseEventEnum.touchend, this.onDrop, this);

        }
    }

    private onDrop(e: InteractionEvent) {
        if (this.target == undefined) {
            return;
        }
        let target = this.target;
        const item = DragDropController.getEventItem(e, this.dropGroup);
        if (item && item.dragOption.dragging) {
            item.dragOption.dragging = false;
            item.interactive = true;
            const parent = item.dragOption.droppableReparent !== undefined ? item.dragOption.droppableReparent : target;
            if (parent) {
                parent.container.toLocal(item.container.position, item.container.parent, this._dragPosition);
                item.x = this._dragPosition.x;
                item.y = this._dragPosition.y;
                if (parent != item.parent) {
                    parent.addChild(item);
                    parent.emit(ComponentEvent.DROP_TARGET, parent, item, e);
                }
                item.dragOption.$targetParent = parent;
            }
            item.emit(ComponentEvent.DRAG_TARGET, item, e);
        }
    }

    load() {

    }

    release() {

        this.clearDraggable();
        this.clearDroppable();

        if (this.target) {
            this.target.plugs.delete(UIBaseDrag.key);
            this.target = undefined;
            this.$targetParent = undefined;
            this.dragContainer = undefined;
        }
    }

}