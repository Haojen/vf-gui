import UIBase from "../UIBase";

/**
 * UI图片显示对象，如果使用拉伸或9切，请使用 SliceSprite
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
export class Sprite extends UIBase{
    public constructor(t?: PIXI.Texture){
        super();
        this._source = t;
        this._sprite = new PIXI.Sprite(t);
        this.setDefaultSize(this._sprite.width,this._sprite.height);
        this.container.addChild(this._sprite);

    }
    private _sprite: PIXI.Sprite;
    private _source: number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement|undefined;
    /** 
     * 获取或设置显示源 
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     * 
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    public get source(): number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement|undefined {
        return this._source;
    }
    public set source(value: number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement|undefined) {
        if(value === undefined){
            return;
        }
        if(value === this._source){
            return;
        }
        this._source = value;
        if(value instanceof  PIXI.Texture){
            this._sprite.texture = value;
        }else{
            this._sprite.texture = PIXI.Texture.from(value);
        }
        this.update();
    }

    public update(){
        if (!isNaN(this.tint))
            this._sprite.tint = this.tint;

        if (!isNaN(this.blendMode))
            this._sprite.blendMode = this.blendMode;

        this._sprite.width = this._width;
        this._sprite.height = this._height;
    }
}