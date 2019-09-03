import UIBase from "../UIBase";
import Sprite from "./Sprite";
import Rect from "./Rect";

/**
 * UI的显示容器
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {Number} 宽度
 * @param height {Number} 高度
 */
export default class Container extends UIBase{
    public constructor(width?: number, height?: number){
        super(width,height);
    }

    public update(){
    //if (this.container.interactive) {
        // this.container.hitArea.width = this._width;
        // this.container.hitArea.height = this._height;
    //}
    }


    private _mask: Sprite|Rect|PIXI.Sprite|PIXI.Graphics|undefined;
    /**
     * 设置遮罩
     */
    public set mask(value: Sprite|Rect|PIXI.Sprite|PIXI.Graphics|undefined){
        if(value === this.mask){
            return;
        }
        if(value === undefined){
            this.container.mask = null;
        }else if(value instanceof Sprite){
            this.container.mask = value.img;
        }else if(value instanceof Rect){
            this.container.mask = value.graphics;
        }else{
            this.container.mask = value;
        }
        this._mask = value;
        
    }
    public get mask(){
        return this._mask;
    }
   
}