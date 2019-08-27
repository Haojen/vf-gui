import UIBase from "./UIBase";

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
export default class Stage extends PIXI.Container {

    public constructor(width: number, height: number) {
        super();
        this._width = width;
        this._height = height;
        this.stage = this;
        this.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        this.resize(width, height);
    }
    /**
     * 最小宽度
     * @default
     */
    public minWidth = 0;
    /**
     * 最小高度
     * @default
     */
    public minHeight = 0;
    /**
     * 节点列表
     */
    public UIChildren: UIBase[] = [];
    /**
     * 自引用
     */
    public stage: Stage;
    /**
     * 是否开启交互功能
     * @default
     */
    public interactive = true;
    /**
     * 可交互区域
     */
    public hitArea = new PIXI.Rectangle(0, 0, 0, 0);
    /**
     * 是否初始化
     * @default
     */
    public initialized = true;

    public _width: number = 0;
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        if (!isNaN(value)) {
            this._width = value;
            this.resize();
        }
    }

    public _height: number = 0;
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        if (!isNaN(value)) {
            this._height = value;
            this.resize();
        }
    }
    /** 添加显示对象，需集成UIBASE */
    public addChild<T>(... UIObject: T[]): T {

        const argumentsLength = UIObject.length;
        if (argumentsLength > 1) {
            for (let i = 0; i < argumentsLength; i++) {
                this.addChild(UIObject[i]);
            }
        }
        else {
            if(UIObject[0] instanceof UIBase){
                const item: TAny = UIObject[0];
                if (item.parent) {
                    item.parent.removeChild(item);
                }
                item.parent = this;
                this.UIChildren.push(item as UIBase);
                super.addChild(item.container);
                item.updatesettings(true);
            }else{
                throw "stage addChild arg not vfui";
            }
        }
        return UIObject[0];
    }

    public addChildAt<T>(item: T, index: number){
        if(item instanceof UIBase){
            if (item.parent) {
                item.parent.removeChild(item);
            }
            item.parent = this;
            super.addChildAt(item.container,index);
            this.UIChildren.splice(index,0,item);
            item.updatesettings(true);
        }else{
            throw "stage addChildAt arg not vfui";
        }
        return item;
    }
    public removeChild<T>(... UIObject: T[]): T {
        const argumentLenght = UIObject.length;
        if (argumentLenght > 1) {
            for (let i = 0; i < argumentLenght; i++) {
                this.removeChild(UIObject[i]);
            }
        }
        else {
            
            if(!(UIObject[0] instanceof UIBase)){
                throw "stage removeChild arg not vfui";
            }
            const item: TAny = UIObject[0];
            const index = this.UIChildren.indexOf(item as UIBase);
            if (index !== -1) {
                item.container.parent.removeChild(item.container);
                this.UIChildren.splice(index, 1);
                item.parent = undefined;
            }

        }
        return UIObject[0];
    }

    public resize(width?: number, height?: number): void {
        if (width && !isNaN(width)) this._width = width;
        if (height && !isNaN(height)) this._height = height;

        if (this.minWidth || this.minHeight) {
            let rx = 1,
                ry = 1;

            if (width && width < this.minWidth) {
                rx = this.minWidth / width;
            }

            if (height && height < this.minHeight) {
                ry = this.minHeight / height;
            }

            if (rx > ry && rx > 1) {
                this.scale.set(1 / rx);
                this._height *= rx;
                this._width *= rx;
            }
            else if (ry > 1) {
                this.scale.set(1 / ry);
                this._width *= ry;
                this._height *= ry;
            }
            else if (this.scale.x !== 1) {
                this.scale.set(1);
            }
        }

        this.hitArea.width = this._width;
        this.hitArea.height = this._height;

        for (let i = 0; i < this.UIChildren.length; i++)
            this.UIChildren[i].updatesettings(true, false);
    }


    /** 没有功能实现，内部编辑器 */
    public updatesettings(){

    }
    /** 没有功能实现，内部编辑器 */
    public container = new PIXI.Container;

}