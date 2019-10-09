import {UIBase} from "../core/UIBase";
import {Image} from "./Image";
import {Rect} from "./Rect";

/**
 * UI的显示容器
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {Number} 宽度
 * @param height {Number} 高度
 */
export class Container extends UIBase{
    public constructor(width?: number, height?: number){
        super(width,height);
    }

    public update(){
    //if (this.container.interactive) {
        // this.container.hitArea.width = this._width;
        // this.container.hitArea.height = this._height;
    //}
    }


    private _mask: Image|Rect|PIXI.Sprite|PIXI.Graphics|undefined;
    /**
     * 设置遮罩
     */
    public set mask(value: Image|Rect|PIXI.Sprite|PIXI.Graphics|undefined){
        if(value === this.mask){
            return;
        }
        if(value === undefined){
            this.container.mask = null;
        }else if(value instanceof Image){
            this.container.mask = value._sprite as PIXI.Sprite;
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