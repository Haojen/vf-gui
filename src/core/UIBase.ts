import { DragEvent,DragDropController,InteractionEvent, GroupController  } from "../interaction/Index";
import { DraggableEvent } from "../interaction/InteractionEvent";
import { TouchMouseEventEnum, } from "../enum/TouchMouseEventEnum";
import { uid } from "./Utils";
import { CSSStyle} from "../layout/CSSStyle";
import { Core } from "./Core";
import { updateStyleProxyHandler, addDrawList, updateDrawList } from "../layout/CSSSSystem";


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
    public constructor() {
        super();
        this.uuid = uid();
        this.container.name = (this.constructor as TAny).name;
        this.__styleObject = new CSSStyle();
        this.__styleObject.parent = this;
        this._style = new Proxy(this.__styleObject, updateStyleProxyHandler);
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
     * 是否不可用
     */
    public isRelease = false;
    /** 
     * 背景 
     */
    public background?:PIXI.Graphics;
    /** 
     * 遮罩，设置遮罩后，组件内部的索引位置可能产生变化 
     */
    public mask?: PIXI.Graphics | PIXI.Sprite | UIBase;
    /** 
     * 延迟渲染的列表
     */
    public delayDrawList = new Map<string,Function>();
    /**
     * 延迟渲染是否完成
     */
    public delayRenderedComplete = false;
    /**
     * 分组
     */
    protected _groupName?: string;
    public get groupName() {
        return this._groupName;
    }
    public set groupName(value) {
  
        if(value === undefined){     
            GroupController.unRegistrerGroup(this);
        }
        if(this._groupName == value){
            return;
        }
        this._groupName = value;
        GroupController.registrerGroup(this);
    }

    /* 混合模式 */
    private _blendMode: PIXI.BLEND_MODES | undefined;
    public get blendMode(): PIXI.BLEND_MODES | undefined {
        return this._blendMode;
    }
    public set blendMode(value: PIXI.BLEND_MODES | undefined) {
        this._blendMode = value;
        addDrawList("blendMode",this);
    }
  
    private _x = 0;
    /** 
     * 组件渲染后，才会有值 
     */
    public get x() {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
        this.__styleObject.left = value;
        addDrawList("transform",this);
    }

    private _y = 0;
    /** 
     * 组件渲染后，才会有值 
     */
    public get y() {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
        this.__styleObject.top = value;
        addDrawList("transform",this);
    }
    /** 
     * X轴缩放 
     */
    private _scaleX = 1;
    public get scaleX() {
        return this._scaleX;
    }
    public set scaleX(value) {
        this._scaleX = value;
        this.__styleObject.scaleX = value;
        addDrawList("transform",this);
    }
    /** 
     * Y轴缩放 
     */
    private _scaleY = 1;
    public get scaleY() {
        return this._scaleY;
    }
    public set scaleY(value) {
        this._scaleY = value;
        this.__styleObject.scaleY = value;
        addDrawList("transform",this);
    }
  
    private _skewX = 0;
    public get skewX() {
        return this._skewX;
    }
    public set skewX(value) {
        this._skewX = value;
        this.__styleObject.skewX = value;
        addDrawList("transform",this);
    }
    private _skewY = 0;
    public get skewY() {
        return this._skewY;
    }
    public set skewY(value) {
        this._skewY = value;
        this.__styleObject.skewY = value;
        addDrawList("transform",this);
    }
    /** 锚点X的像素表示法 */
    private _pivotX = 0;
    public get pivotX() {
        return this._pivotX;
    }
    public set pivotX(value) {
        this._pivotX = value;
        this.__styleObject.pivotX = value;
        addDrawList("transform",this);
    }
    /** 锚点Y的像素表示法 */
    private _pivotY = 0;
    public get pivotY() {
        return this._pivotY;
    }
    public set pivotY(value) {
        this._pivotY = value;
        this.__styleObject.pivotY = value;
        addDrawList("transform",this);
    }

    private _rotation = 0;
    public get rotation() {
        return this._rotation;
    }
    public set rotation(value) {   
        this._rotation = value;
        this.__styleObject.rotation = value;
        addDrawList("transform",this);
    }
    
    protected _width = 0;
    /** 
     * 组件渲染后，才会有值,继承组件需要根据这个值确定宽高 
     */
    public get width() {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
        this.__styleObject.width = value;
        this.update(this._style);
    }

    protected _height = 0;
    /** 
     * 组件渲染后，才会有值 
     */
    public get height() {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
        this.__styleObject.height = value;
        this.update(this._style);
    }
  
    /** 色调 */
    private _tint: number | undefined;
    public get tint(): number | undefined {
        return this._tint;
    }
    public set tint(value: number | undefined) {
        this._tint = value;
        addDrawList("tint",this);
    }
    /**
     * 透明度
     */
    protected _alpha = 1;
    public get alpha() {
        return this._alpha;
    }
    public set alpha(value) {
        this._alpha = value;
        this.__styleObject.alpha = value;
        addDrawList("alpha",this);
    }

    /**
     * 是否可见
     */
    private _visible = true;
    public get visible() {
        return this._visible;
    }
    public set visible(value) {
        this._visible = value;
        this.__styleObject.visible = value;
        addDrawList("visible",this);
    }

    /** 
     * 是否可用
     */
    public enabled = true;
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
     * 动态属性，避免其他类注入 
     */
    public attach: { [key: string]: object | number | string | Function } = {};

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
            if (this.parent.initialized) {
                this.initialize();
            }
        }

        if (updateParent) {
            this.updateParent();
        }
        this.onRenderer();
        if (updateChildren) {
            this.updateChildren();
        }
    }

    protected onRenderer(renderer?: PIXI.Renderer) {
        const { _style } = this;

        if (!this.parent) {
            return;
        }
        //Unrestricted dragging
        if (this.dragging && !this.dragRestricted && this._dragPosition) {
            this.container.setTransform(this._dragPosition.x, this._dragPosition.y);
            return;
        }

        updateDrawList(this);
        this.update(_style,renderer);
    }

    /**
     * 更新方法，其他组件重写
     */
    public update(_style: CSSStyle,renderer?: PIXI.Renderer) {

    }

    public release() {

        this.isRelease = true;
        const {container,mask,background} = this;
        container.off("renderChange", this.onRenderer, this);    
        container.mask = null;

        if(mask){
            if(mask instanceof UIBase){
                mask.release();
            }else{
                mask.parent && mask.parent.removeChild(mask).destroy();
            }
            this.mask = undefined;
        }

        if(background && background.parent){
            
            background.parent.removeChild(background).destroy();
            this.background = undefined;
        }

        if(this.parent){
            this.parent.removeChild(this);
        }
        this._style.eventEmitter.removeAllListeners();
        this._style.parent = undefined;
        GroupController.unRegistrerGroup(this);
    }

    public releaseAll(){
        for(let i=0;i<this.uiChildren.length;i++){
            let ui = this.uiChildren[i];
            ui.offAll();
            ui.release();
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
        this.isRelease = true;
    }

    /**
     * Initializes the object when its added to an UIStage
     * 将对象添加到UIStage时，进行的初始化方法
     */
    protected initialize() {
        this.initialized = true;
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
                            const container = this.parent.container;
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
            this.container.off(TouchMouseEventEnum.mouseup, this.onDrop, this);
            this.container.off(TouchMouseEventEnum.touchend, this.onDrop, this);
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