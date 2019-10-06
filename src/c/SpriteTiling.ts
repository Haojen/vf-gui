import {UIBase} from "../core/UIBase";

/**
 * UI平铺显示对象,功能与官方一直，可参考官方示例
 * 
 * @example https://pixijs.io/examples/#/sprite/tiling-sprite.js
 */
export class SpriteTiling extends UIBase{
    public constructor(width?: number, height?: number){
        super(width,height);
    }

    private _tilePosition = new PIXI.ObservablePoint(this.update,this);
    private _tileScale = new PIXI.ObservablePoint(this.update,this);
    private _sprite: PIXI.TilingSprite|undefined;
    protected _source: number | string | PIXI.Texture |HTMLImageElement| HTMLCanvasElement | HTMLVideoElement|undefined;
    /** 
     * 获取或设置显示源 
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     * 
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    public get source(): number | string | PIXI.Texture | HTMLImageElement |HTMLCanvasElement | HTMLVideoElement|undefined {
        return this._source;
    }
    public set source(value: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement|undefined) {
        if(value === undefined){
            return;
        }
        if(value === this._source){
            return;
        }
        this._source = value;
        if(value instanceof  PIXI.Texture){
            this.getNewTilingSprite(value);
        }else{
            const t = PIXI.Texture.from(value);
            const sprite = this.getNewTilingSprite(t);
            sprite.texture.once("update",()=>{
                if(!this.height){
                    this.height = sprite.height;
                }
                if(!this.width){
                    this.width = sprite.width;
                } 
                this.updatesettings(true);  
            },this);

        }
    }

    private getNewTilingSprite(t: PIXI.Texture){
        if(this._sprite === undefined){
            this._sprite =new PIXI.TilingSprite(t);
            this.container.addChild(this._sprite);
        }else{
            this._sprite.texture.removeAllListeners();
            this._sprite.texture = t;
        }
        return this._sprite;
    }

    /** 获取设置位置 */
    public get tilePosition(){
        return this._tilePosition;
    }
    public set tilePosition(value: PIXI.Point){
        this._tilePosition.set(value.x,value.y);
        this.update();
    }
    /** 获取设置缩放 */
    public get tileScale(){
        return this._tileScale;
    }
    public set tileScale(value:  PIXI.Point){
        this._tileScale.set(value.x,value.y);
        this.update();
    }

    public update(){
        if(this._sprite){
            if (!isNaN(this.tint))
                this._sprite.tint = this.tint;

            if (!isNaN(this.blendMode))
                this._sprite.blendMode = this.blendMode;
 
            this._sprite.tileScale.set(this._tileScale.x,this._tileScale.y);
            this._sprite.tilePosition.set(this._tilePosition.y,this._tilePosition.y);
            this._sprite.width = this._width;
            this._sprite.height = this._height;

        }

    }
}