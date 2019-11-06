import { Core } from "./Core";
import {shared as TickerShared} from "./Ticker";

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
        this._width = width;
        this._height = height;
        this.stage = this;
        this.container.name = "Stage";
        this.container.hitArea = new PIXI.Rectangle(0, 0, width, height);
        this.container.interactive = true;
        this.container.interactiveChildren = true;
        Stage._stage = this;
        this.initialized = true;

    }
    

    private static _stage: Stage;
    public static get Ins(){
        return Stage._stage;
    }
    
    public releaseAll(){
        for(let i=0;i<this.uiChildren.length;i++){
            const ui = this.uiChildren[i];
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
        TickerShared.removeAllListeners();
    }

    /**  
     * 舞台引用
     */
    public stage: Stage | undefined;
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

        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
        this.updateChildren();
    }

}