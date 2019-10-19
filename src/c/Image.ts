import { UIBase } from "../core/UIBase";
import { _getSourcePath } from "../core/Utils";
import { BaseFields } from "../layout/BaseFields";
import { CSSStyle } from "../layout/CSSStyle";

/** Image 对象的自有字段 */
class Fields extends BaseFields{

    public constructor(){
        super();
    }

    /**
     * 图像路径或位图对象
     */
    src:number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    /**
     * 矩形区域，它定义素材对象的九个缩放区域。
     * fillMode = scale 时，[leftWidth,rightWidth,topHeight,bottomHeight]
     * fillMode = repeat 是，[x,y,scalex,scaley]
     */
    scale9Grid?:number[];
    /**
     * 填充模式
     * 设置scale后，可设置scale9Grid进行调整缩放区域
     */
    fillMode?:"no-repeat"|"repeat"|"scale" = "no-repeat";
    /**
     * 填充颜色值
     */
    tint?:number;
}

/**
 * 图片
 * Event: sourceComplete
 */
export class Image extends UIBase {

    /** 图片加载完成事件 */
    public static readonly onload = "onload";


    public constructor() {
        super();
        this.fields = new Fields().proxyData; 
    }

    public readonly fields: Fields;
    protected _sprite: PIXI.Sprite | PIXI.TilingSprite | PIXI.NineSlicePlane | undefined;
    protected _texture: PIXI.Texture | undefined;
    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;

    public getMaskSprite(){
        return this._sprite;
    }

    public update(_style:CSSStyle) {
        if(this.fields.dirty.dirty){
            console.log("update");
            let {fields,_sprite,_texture,container,_source} = this;
            fields.dirty.dirty = false;
            if(fields.src === undefined){
                if(_sprite && _sprite.parent){
                    container.removeChild(_sprite);
                    _sprite.destroy();
                }
                if(_texture){
                    _texture.removeAllListeners();
                }
                _sprite = undefined;
                _texture = undefined;
                _source = undefined;
                return;
            }

            if(fields.src && fields.src !== _source){
                this._source = _source = fields.src;
                if(fields.src instanceof PIXI.Texture){
                    this._texture = _texture = fields.src;
                }else{
                    this._texture = _texture = PIXI.Texture.from(fields.src);
                }
                this._texture.once("update", () => {
                    this.syncImageSize();
                    this.emit(Image.onload, this);
                }, this);
                if (fields.fillMode === "no-repeat") {
                    _sprite = new PIXI.Sprite(_texture);
                } else if (fields.fillMode === "repeat") {
                    _sprite = new PIXI.TilingSprite(_texture);
                } else if (fields.fillMode === "scale") {
                    _sprite = new PIXI.NineSlicePlane(_texture);
                }
                this._sprite = _sprite;
            }

            if(fields.scale9Grid){
                if (_sprite instanceof PIXI.TilingSprite) {
                    _sprite.tileScale.set(fields.scale9Grid[0],fields.scale9Grid[1]);
                    _sprite.tilePosition.set(fields.scale9Grid[2],fields.scale9Grid[3]);
                } else if (_sprite instanceof PIXI.NineSlicePlane) {
                    if(fields.scale9Grid[0] !== undefined){
                        _sprite.leftWidth = fields.scale9Grid[0];
                    }
                    if(fields.scale9Grid[1] !== undefined){
                        _sprite.rightWidth = fields.scale9Grid[1];
                    }
                    if(fields.scale9Grid[2] !== undefined){
                        _sprite.topHeight = fields.scale9Grid[2];
                    }
                    if(fields.scale9Grid[3] !== undefined){
                        _sprite.bottomHeight = fields.scale9Grid[3];
                    }
                }
            }

            if(_sprite){
                if(_sprite.parent == null){
                    container.addChild(_sprite);
                }
                this.syncImageSize();

                if(fields.tint!==undefined){
                    _sprite.tint = fields.tint;
                }
            }
        }
    }

    protected syncImageSize(){
        let {_sprite,_texture} = this;
        if(_sprite){
            if(this._width>0){
                _sprite.width = this._width;
            }else{
                if(_texture && _texture.width > 1){ 
                    this._width = _sprite.width = _texture.frame.width;
                }
                
            }

            if(this._height>0){
                _sprite.height = this._height;
            }else{
                if(_texture && _texture.height > 1){ 
                    this._height = _sprite.height = _texture.frame.height;
                }
            }
        }
    }

}