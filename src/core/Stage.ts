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
        this._stageWidth = width;
        this._stageWidth = height;
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
    public _stageWidth = 0;//调整缩放后的值
    public _stageHeight = 0;//调整缩放后的值

    public get stageWidth(){
        return this._stageWidth;
    }

    public get stageHeight(){
        return this._stageHeight;
    }

    public get scaleX() {
        return  this.container.scale.x;
    }

    public set scaleX(value: number) {
        this.container.scale.x = value;
        this._stageWidth = value * this.width;
    }

    public get scaleY() {
        return this.container.scale.y;
    }

    public set scaleY(value: number) {
        this.container.scale.y = value;
        this._stageHeight = value * this.height;
    }

    public set Scale(value: PIXI.Point){
        this.container.scale.copyFrom(value);
        this._stageWidth = value.x * this.width;
        this._stageHeight = value.y * this.height;
    }

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