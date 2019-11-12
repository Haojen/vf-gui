import { ContainerBase } from "../c/ContainerBase";
import { Stage } from "./Stage";
import { ComponentEvent } from "../interaction/Index";
import { uid } from "./Utils";
import { UIBase } from "../UI";

export class Core extends PIXI.utils.EventEmitter implements LifecycleHook,Lifecycle {

    public constructor() {
        super();
        this.uuid = uid();
        this.container = new ContainerBase();
        this.container.on("added",this.$onAddStage,this);
        this.container.on("removed",this.$onRemoveStage,this);
    }
    /**
     * 全局唯一ID
     */
    public readonly uuid: number;
    /**
     * 自定义组价名
     */
    public name = "";
    /**
     * @private
     * 这个对象在显示列表中的嵌套深度，舞台为1，它的子项为2，子项的子项为3，以此类推。当对象不在显示列表中时此属性值为0.
     */
    public $nestLevel = 0;
    /** 
     * 是否初始化 
     * @default
     */
    public initialized = false;
    /** 
     * 舞台引用
     */
    public stage: Stage | undefined;
    /** 
     * 父容器 
     */
    public parent: UIBase | Stage | undefined;
    /**
     * 节点列表
     */
    public uiChildren: Core[] = [];

    /** 没有功能实现，内部编辑器 */
    public container: ContainerBase;
    
    /** 添加显示对象，需集成Core */
    public addChild(item: Core) {
        if (this.container.children.length !== this.uiChildren.length) {
            return this.addChildAt(item, this.container.children.length);
        } else {
            return this.addChildAt(item, this.uiChildren.length);
        }

    }

    public addChildAt(item: Core, index: number) {

        if (item.parent) {
            item.parent.removeChild(item);
        }
        item.stage = Stage.Ins;
        item.parent = this as TAny;       
        item.$nestLevel = this.$nestLevel + 1;
        this.uiChildren.splice(index, 0, item);
        if(!item.initialized){
            item.initialized = true;
            item.$onInit();
        }
        index = Math.min(index,this.container.children.length);
        this.container.addChildAt(item.container, index);
        return item;
    }

    public getChildAt(index: number) {
        return this.uiChildren[index] || undefined;
    }

    /**
     * 移除已添加的UI组件
     * @param UIObject 要移除的UI组件
     */
    public removeChild(item: Core) {

        const index = this.uiChildren.indexOf(item);
        if (index !== -1) {
            item.container.parent.removeChild(item.container);
            this.uiChildren.splice(index, 1);
            item.parent = undefined;
            item.stage = undefined;
        }
        return item;
    }

    public removeChildren(beginIndex?: number | undefined, endIndex?: number | undefined) {
        const start = beginIndex ? beginIndex : 0;
        const end = endIndex ? endIndex : this.uiChildren.length;
        for (let i = start; i < end; i++) {
            this.removeChild(this.uiChildren[i]);
        }
    }
    
    /**
     * 是否绘制显示对象，如果false不进行绘制，不过仍然会进行相关的更新计算。
     * 只影响父级的递归调用。
     */
    public set renderable(value: boolean) {
        this.container.renderable = value;
    }
    public get renderable() {
        return this.container.renderable;
    }

    /**
     * 缓存当前的显示对象，如果移除缓存，设置false即可
     * 在设置这个值时，请确保你的纹理位图已经加载
     */
    public set cacheAsBitmap(value: boolean) {
        this.container.cacheAsBitmap = value;
    }
    public get cacheAsBitmap() {
        return this.container.cacheAsBitmap;
    }

    /** 清除全部事件 */
    public offAll(event?: string | symbol) {
        return this.removeAllListeners(event);
    }

    load(): void {
        this.$onLoad();
    }
    release(): void {
        this.$onRelease();
    }

    $onInit(){
        this.emit(ComponentEvent.CREATION_COMPLETE,this);
    }

    $onLoad(){

    }

    $onRelease(){

    }

    $onAddStage(){
        this.checkInvalidateFlag();
        this.emit(ComponentEvent.ADDED, this);
    }
    $onRemoveStage(){
        this.checkInvalidateFlag();
        this.parent = undefined;
        this.emit(ComponentEvent.REMOVEED, this);
    }

    protected checkInvalidateFlag(){

    }
    
}


