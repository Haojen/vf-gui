import { UIBase } from "./UIBase";

/**
 * UI的舞台对象，展示所有UI组件
 *
 * @class 
 * @extends PIXI.UI.Container
 * @memberof PIXI.UI
 * @param width {Number} 舞台宽度
 * @param height {Number} 舞台高度
 */
export class Stage extends PIXI.Container {

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

    private _width: number = 0;
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        if (!isNaN(value)) {
            this._width = value;
            this.resize();
        }
    }

    private _height: number = 0;
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        if (!isNaN(value)) {
            this._height = value;
            this.resize();
        }
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

}