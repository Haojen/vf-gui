import {shared as TickerShared} from "./Ticker";
import { DisplayLayoutAbstract } from "./DisplayLayoutAbstract";
import { DisplayObject } from "./DisplayObject";

/**
 * UI的舞台对象，展示所有UI组件
 *
 * @class 
 * @param width {Number} 舞台宽度
 * @param height {Number} 舞台高度
 */
export class Stage extends DisplayLayoutAbstract{


    public constructor(width: number, height: number,app?: PIXI.Application) {
        super(); 
        this.width = width;
        this.height = height;
        this.setActualSize(width,height);
        this.container.name = "Stage";
        this.container.hitArea = new PIXI.Rectangle(0, 0, width, height);
        this.container.interactive = true;
        this.container.interactiveChildren = true;
        this.initialized = true;
        this.$nestLevel = 1;
        this.app = app;
    }

    public app?: PIXI.Application;

    public release(){
        super.release();
    }

    public releaseAll(){
        for(let i=0;i<this.uiChildren.length;i++){
            const ui = this.uiChildren[i] as DisplayObject;
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
        TickerShared.removeAllListeners();
    }

 
    public resize(): void {
        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
        //this.updateChildren();
    }

}