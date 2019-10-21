import { ContainerBase } from "../c/ContainerBase";
import { UIBase } from "./UIBase";
import { Stage } from "../UI";

export class Core extends PIXI.utils.EventEmitter{
 
    public constructor(){
        super();
        this.container = new ContainerBase();
    }
    /** 
     * 是否初始化 
     * @default
     */
    public initialized = false;
    /** 设置添加索引时的开始位置，一般过滤子组件的背景 */
    protected _childrenStartIndex = 0;
    /** 
     * 父容器 
     */
    public parent: UIBase | Stage | undefined;
    /**
     * 节点列表
     */
    public uiChildren: UIBase[] = [];

    /** 没有功能实现，内部编辑器 */
    public container:ContainerBase;

    /** 添加显示对象，需集成UIBASE */
    public addChild(item: UIBase) {
        return this.addChildAt(item,this.uiChildren.length + this._childrenStartIndex);
    }

    public addChildAt(item: UIBase, index: number) {

        if (item.parent) {
            item.parent.removeChild(item);
        }

        item.parent = this as any;    
        this.container.addChildAt(item.container, index);
        this.uiChildren.splice(index, 0, item);
        this.updatesettings(true, true);
        return item;
    }

    /**
     * 移除已添加的UI组件，可以同时移除多个如addChild(a,b,c,d)
     * @param UIObject 要移除的UI组件
     */
    public removeChild(item: UIBase) {
        
        const index = this.uiChildren.indexOf(item);
        if (index !== -1) {
            const oldUIParent = item.parent;
            //var oldParent = UIObject.container.parent;
            item.container.parent.removeChild(item.container);
            this.uiChildren.splice(index, 1);
            item.parent = undefined;

            //oldParent._recursivePostUpdateTransform();
            setTimeout(() => { //hack but cant get the transforms to update propertly otherwice?
                if (oldUIParent && oldUIParent.updatesettings)
                    oldUIParent.updatesettings(true, true);
            }, 0);
        }
    }

   /**
     * 渲染父容器
     */
    public updateParent() {
        if (this.parent && this.parent.updatesettings) {
            this.parent.updatesettings(false, true);
        }
    }

    /** 
     * 更新所有子节点
     */
    public updateChildren() {
        for (let i = 0; i < this.uiChildren.length; i++) {
            this.uiChildren[i].updatesettings(true);
        }
    }

    /**
     * 绘制渲染对象
     * @param updateChildren 是否渲染子节点，true渲染
     * @param updateParent  是否渲染父容器，true渲染
     */
    public updatesettings(updateChildren: boolean, updateParent?: boolean) {

    }

    /**
     * 对象是否可以接收事件
     */
    public set interactive(value: boolean) {
        this.container.interactive = value;
    }
    public get interactive() {
        return this.container.interactive;
    }

    /**
     * 子对象是否可以接收事件，设置false后，会绕过HitTest方法的递归
     */
    public set interactiveChildren(value: boolean) {
        this.container.interactiveChildren = value;
    }
    public get interactiveChildren() {
        return this.container.interactiveChildren;
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



}


    