import { Core } from "./Core";

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
export class Stage extends Core{

    public constructor(width: number, height: number) {
        super();
        this.container.name = "Stage";
        this._width = width;
        this._height = height;
        this.stage = this;
        this.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        Stage._stage = this;

    }

    private static _stage:Stage;
    public static get Ins(){
        return Stage._stage;
    }

    /**
     * 可交互区域
     */
    public hitArea = new PIXI.Rectangle(0, 0, 0, 0);

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

    public resize(): void {

        this.hitArea.width = this._width;
        this.hitArea.height = this._height;
        this.container.hitArea = this.hitArea;
        this.updateChildren();
    }

}