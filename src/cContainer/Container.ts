import UIBase from "../UIBase";

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
        this.container.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
    }

    public update(){
    //if (this.container.interactive) {
        // this.container.hitArea.width = this._width;
        // this.container.hitArea.height = this._height;
    //}
    }
}