import { DragEvent,DragDropController,InteractionEvent, GroupController, ComponentEvent  } from "../interaction/Index";
import { DraggableEvent } from "../interaction/InteractionEvent";
import { TouchMouseEventEnum, } from "../enum/TouchMouseEventEnum";
import { UILayout } from "./UILayout";
import { CSSStyle} from "../layout/CSSStyle";
import { updateDisplayLayout } from "../layout/CSSLayout";

/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @since 1.0.0
 */
export class UIBase extends UILayout {
    /**
     * 构造函数
     */
    public constructor() {
        super();
        this.container.name = (this.constructor as TAny).name;
    }
    /**
     * 是否不可用
     */
    public isRelease = false;
    /** 
     * 背景 
     */
    public background?: PIXI.Graphics;
    /** 
     * 遮罩，设置遮罩后，组件内部的索引位置可能产生变化 
     */
    public mask?: PIXI.Graphics | PIXI.Sprite | UIBase;
    /** 
     * 延迟渲染的列表
     */
    public delayDrawList = new Map<string,Function>();
    /**
     * 是否布局渲染中
     */
    public isDrawLayout = false;
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

        
    /**
     * 透明度
     */
    public get alpha() {
        return this.container.alpha;
    }
    public set alpha(value) {
        this.container.alpha = value;
    }


    /** 色调 */
    private _tint: number | undefined;
    public get tint(): number | undefined {
        return this._tint;
    }
    public set tint(value: number | undefined) {
        if(value === this._blendMode){
            return;
        }
        this._tint = value;
        this.container.children.forEach(childrenItem=>{
            if((childrenItem as TAny)["tint"]){
                (childrenItem as TAny)["tint"] = value;
            }
        });
    }

    /* 混合模式 */
    private _blendMode: PIXI.BLEND_MODES | undefined;
    public get blendMode(): PIXI.BLEND_MODES | undefined {
        return this._blendMode;
    }
    public set blendMode(value: PIXI.BLEND_MODES | undefined) {
        if(value === this._blendMode){
            return;
        }
        this._blendMode = value;
        this.container.children.forEach(childrenItem=>{
            if(childrenItem instanceof PIXI.Sprite){
                childrenItem.blendMode = value || PIXI.BLEND_MODES.NORMAL;
            }
        });
    }
  
    /** 
     * 私有样式代理 
     * */
    protected _style?: CSSStyle;
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
     * 获取样式 
     */
    public get style(): CSSStyle{
        if(this._style == undefined){
            this._style = new CSSStyle(this);
        }
        return this._style;
    }

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
        
        if (this.parent == null) {
            return;
        }
        
        if (!this.initialized) {
            this.initialized = true;
            this.initialize();    
            this.emit(ComponentEvent.CREATION_COMPLETE,this);
        }

        if (updateParent) {
            //this.updateParent();
        }

        //this.updateRenderer();

        if (updateChildren) {
            //this.updateChildren();
        }

    }

    // protected updateRenderer(renderer?: PIXI.Renderer) {
    //     const { _style } = this;

    //     if (!this.parent) {
    //         return;
    //     }
    //     //Unrestricted dragging
    //     if (this.dragging && !this.dragRestricted && this._dragPosition) {
    //         this.container.setTransform(this._dragPosition.x, this._dragPosition.y);
    //         return;
    //     }
    
    //     updateDrawList(this);
        
    //     this.update(_style,renderer);
    // }

    /**
     * 更新方法，其他组件重写
     */
    public update(_style: CSSStyle,renderer?: PIXI.Renderer) {

    }
    
    /**
     * 更新显示列表,子类重写，实现布局
     */
    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
        
        if(this._style && this._style.display!=="none"){
            //console.log("displayStyle",unscaledWidth,unscaledHeight,this.left,this.right,this.x,this.y);
            updateDisplayLayout(this,unscaledWidth,unscaledHeight);
        }else{
            //console.log("display",this.x + this.pivotX,this.y + this.pivotY,this.scaleX,this.scaleY,this.rotation*(Math.PI/180),this.skewX,this.skewY,this.pivotX,this.pivotY);
            this.container.setTransform(this.x + this.pivotX,this.y + this.pivotY,this.scaleX,this.scaleY,this.rotation*(Math.PI/180),this.skewX,this.skewY,this.pivotX,this.pivotY);
        }
    }

    public release() {

        this.isRelease = true;
        const {container,mask,background} = this;
        //container.off("renderChange", this.updateRenderer, this);    
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
        //this._style.eventEmitter.removeAllListeners();
        //this._style.parent = undefined;
        GroupController.unRegistrerGroup(this);
    }

    public releaseAll(){
        this.offAll();
        this.release();
        for(let i=0;i<this.uiChildren.length;i++){
            const ui = this.uiChildren[i] as UIBase;
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
     * 将对象添加到UIStage时，进行的初始化方法
     */
    protected initialize() {

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