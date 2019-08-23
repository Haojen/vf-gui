import UIBase from "../UIBase";

/**
 * UI平铺显示对象,功能与官方一直，可参考官方示例
 * 
 * @example https://pixijs.io/examples/#/sprite/tiling-sprite.js
 */
export class TilingSprite extends UIBase{
    public constructor(t: PIXI.Texture, width?: number, height?: number){
        super();
        this.sprite = new PIXI.TilingSprite(t);
        this.setDefaultSize(width || this.sprite.width, height || this.sprite.height);
        this.container.addChild(this.sprite);
    }

    private sprite: PIXI.TilingSprite;

    /** 获取设置位置 */
    public get tilePosition(){
        return this.sprite.tilePosition;
    }
    public set tilePosition(value: PIXI.ObservablePoint){
        this.sprite.tilePosition = value;
    }
    /** 获取设置缩放 */
    public get tileScale(){
        return this.sprite.tileScale;
    }
    public set tileScale(value: PIXI.ObservablePoint){
        this.sprite.tileScale = value;
    }

    public update(){
        if (!isNaN(this.tint))
            this.sprite.tint = this.tint;

        if (!isNaN(this.blendMode))
            this.sprite.blendMode = this.blendMode;

        this.sprite.width = this._width;
        this.sprite.height = this._height;
    }
}