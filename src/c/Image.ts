import { UIBase } from "../core/UIBase";
import { _getSourcePath, getTexture } from "../core/Utils";
import { BaseProps } from "../layout/BaseProps";
import { CSSStyle } from "../layout/CSSStyle";

/** Image 对象的自有字段 */
class ImageProps extends BaseProps{

    public constructor(){
        super();
    }

    /**
     * 图像路径或位图对象
     */
    src:number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    /**
     * 矩形区域，它定义素材对象的九个缩放区域。
     * 
     * fillMode = scale 时，[leftWidth,rightWidth,topHeight,bottomHeight]
     * 
     * fillMode = repeat 是，[scalex,scaley,x,y]
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

    /**
     * 锚点，调整位图的坐标中点 0-1
     */
    anchorX?:number;
        /**
     * 锚点，调整位图的坐标中点 0-1
     */
    anchorY?:number;
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
    }

    protected _props?:TAny;
    protected _sprite: PIXI.Sprite | PIXI.TilingSprite | PIXI.NineSlicePlane | undefined;
    protected _texture: PIXI.Texture | undefined;
    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;

    protected initProps(){

    }

    /** 子类可以重写 */
    public get props():ImageProps{

        if(this._props){
            return this._props;
        }

        this._props = new ImageProps().proxyData;
        this.initProps();

        return this._props;
    }

    public getMaskSprite(){
        return this._sprite;
    }

    public set width(value: number) {
        this._width = value;
        this.syncImageSize();
    }
    public set height(value: number) {
        this._height = value;
        this.syncImageSize();
    }

    public update(_style:CSSStyle) {
        if(this.props.dirty.dirty){
            //console.log("update");
            let {props,_sprite,_texture,container,_source} = this;
            props.dirty.dirty = false;
            if(props.src === undefined){
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

            if(props.src && props.src !== _source){
                this._source = _source = props.src;
                this._texture = _texture = getTexture(props.src);
                this._texture.once("update", () => {
                    this.syncImageSize();
                    this.emit(Image.onload, this);
                }, this);
                if (props.fillMode === "no-repeat") {
                    if(_sprite instanceof PIXI.Sprite){
                        _sprite.texture = _texture;
                    }else{
                        _sprite = new PIXI.Sprite(_texture);
                    }
                } else if (props.fillMode === "repeat") {
                    if(_sprite instanceof PIXI.TilingSprite){
                        _sprite.texture = _texture;
                    }else{
                        _sprite = new PIXI.TilingSprite(_texture);
                    }          
                } else if (props.fillMode === "scale") {
                    if(_sprite instanceof PIXI.NineSlicePlane){
                        _sprite.texture = _texture;
                    }else{
                        _sprite = new PIXI.NineSlicePlane(_texture);
                    }
                }
                
                this._sprite = _sprite;
            }

            if(props.scale9Grid){
                if (_sprite instanceof PIXI.TilingSprite) {
                    _sprite.tileScale.set(props.scale9Grid[0],props.scale9Grid[1]);
                    _sprite.tilePosition.set(props.scale9Grid[2],props.scale9Grid[3]);
                } else if (_sprite instanceof PIXI.NineSlicePlane) {
                    if(props.scale9Grid[0] !== undefined){
                        _sprite.leftWidth = props.scale9Grid[0];
                    }
                    if(props.scale9Grid[1] !== undefined){
                        _sprite.rightWidth = props.scale9Grid[1];
                    }
                    if(props.scale9Grid[2] !== undefined){
                        _sprite.topHeight = props.scale9Grid[2];
                    }
                    if(props.scale9Grid[3] !== undefined){
                        _sprite.bottomHeight = props.scale9Grid[3];
                    }
                }
            }

            if(_sprite){
                if(_sprite.parent == null){
                    container.addChild(_sprite);
                }
                this.syncImageSize();
                if(props.tint!==undefined){
                    _sprite.tint = props.tint;
                }
            }
        }
    }

    protected syncImageSize(){
        let {_sprite,_texture} = this;
        if(_sprite){
            if(this._width>1){
                _sprite.width = this._width;
            }else{
                if(_texture && _texture.width > 1){ 
                    this._width = _sprite.width = _texture.frame.width;
                }
                
            }

            if(this._height>1){
                _sprite.height = this._height;
            }else{
                if(_texture && _texture.height > 1){ 
                    this._height = _sprite.height = _texture.frame.height;
                }
            }
            if(this.props.anchorX){
                _sprite.x = -Math.floor( _sprite.width * this.props.anchorX);
            }
            if(this.props.anchorY){
                _sprite.y = -Math.floor( _sprite.height * this.props.anchorY);
            }
        }
    }

}