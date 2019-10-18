import { UIBase } from "../core/UIBase";
import { _getSourcePath } from "../core/Utils";

type RepeatEnum =  "no-repeat" | "repeat" | "nineSlice";
/**
 * 图片
 * Event: sourceComplete
 */
export class Image extends UIBase {

    /** 图片加载完成事件 */
    public static readonly onload = "onload";


    public constructor(repeat:RepeatEnum = "no-repeat") {
        super();
        this._backgroundRepeat = repeat;
        this.container.skew
    }

    public _sprite: PIXI.Sprite | PIXI.TilingSprite | PIXI.NineSlicePlane | undefined;
    protected _texture: PIXI.Texture | undefined;
    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    protected _isLoad = false;
    /** 
     * 设置背景方式
     */
    private _backgroundRepeat:RepeatEnum ;
    public get backgroundRepeat():RepeatEnum {
        return this._backgroundRepeat;
    }
    public set backgroundRepeat(value:RepeatEnum) {
        if (this._backgroundRepeat === value) {
            return;
        }
        this._backgroundRepeat = value;
        this.createSprite();
    }

    /** 
     * 获取或设置显示源 
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     * 
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    public get source(): number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined {
        return this._source;
    }
    public set source(value: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined) {
        if (_getSourcePath) {
            value = _getSourcePath(value);
        }
        if (value === undefined) {
            return;
        }
        if (value === this._source) {
            return;
        }
        this._isLoad = false;
        this._source = value;
        if (value instanceof PIXI.Texture) {
            this._texture = value;
            this._isLoad = true;
            this.createSprite();
            this.emit(Image.onload, value.frame, this);
        } else {
            if (this._texture) {
                this._texture.removeAllListeners();
                this._texture = undefined;
            }
            this._texture = PIXI.Texture.from(value);
            if (this._texture.width > 1 && this._texture.height > 1) {
                if (this._texture) {
                    this._isLoad = true;
                    this.createSprite();
                    this.emit(Image.onload, this._texture.frame, this);
                }
            } else {
                this._texture.once("update", () => {
                    if (this._texture) {
                        this._isLoad = true;
                        this.createSprite();
                        this.emit(Image.onload, this._texture.frame, this);
                    }
                }, this);
            }
        }
    }

    private _anchorX = 0;
    /** 设置X的锚点 */
    public get anchorX() {
        return this._anchorX;
    }
    public set anchorX(value) {
        this._anchorX = value;
        this.dalayDraw = true;
    }
    private _anchorY = 0;
    /** 设置Y的锚点 */
    public get anchorY() {
        return this._anchorY;
    }
    public set anchorY(value) {
        this._anchorY = value;
        this.dalayDraw = true;
    }

    private _leftWidth = 0;
    /**
     * 获取设置距离左边宽度
     */
    public get leftWidth() {
        return this._leftWidth;
    }
    public set leftWidth(value) {
        this._leftWidth = value;
        this.dalayDraw = true;
    }
    private _topHeight = 0;
    /**
     * 获取设置距离顶部宽度
     */
    public get topHeight() {
        return this._topHeight;
    }
    public set topHeight(value) {
        this._topHeight = value;
        this.dalayDraw = true;
    }
    private _rightWidth = 0;
    /**
     * 获取设置距离右边宽度,no-repeat|nineSlice状态时，无效果
     */
    public get rightWidth() {
        return this._rightWidth;
    }
    public set rightWidth(value) {
        this._rightWidth = value;
        this.dalayDraw = true;
    }
    private _bottomHeight = 0;
    /**
     * 获取设置距离底部宽度,no-repeat|nineSlice状态时，无效果
     */
    public get bottomHeight() {
        return this._bottomHeight;
    }
    public set bottomHeight(value) {
        this._bottomHeight = value;
        this.dalayDraw = true;
    }
    /** 
     * nineSlice状态时,9切时的固定值
    */
    public set borderWidth(value: number) {
        this._topHeight = value;
        this._leftWidth = value;
        this._rightWidth = value;
        this._bottomHeight = value;
    }

    protected createSprite() {
        if (this._texture === undefined) {
            return;
        }
        if (!this._isLoad) {
            return;
        }
        let { _sprite, _texture, _backgroundRepeat } = this;
        if (_sprite && _sprite.parent) {
            this.container.removeChild(_sprite);
        }
        if (_backgroundRepeat === "no-repeat") {
            _sprite = new PIXI.Sprite(_texture);
        } else if (_backgroundRepeat === "repeat") {
            _sprite = new PIXI.TilingSprite(_texture);
        } else if (this._backgroundRepeat === "nineSlice") {
            _sprite = new PIXI.NineSlicePlane(_texture);
        }
        //跳过编译器
        if (_sprite) {
            this._sprite = _sprite;
            this.update();
            this.container.addChild(_sprite);
        }
    }

    public update() {
        if (this._texture === undefined) {
            return;
        }

        if (this._sprite === undefined) {
            return;
        }

        let { _sprite, _topHeight, _bottomHeight, _leftWidth, _rightWidth } = this;
        // if(this.actualWidth === 0 && this.actualHeight === 0){
        //     _sprite.width = this._texture.frame.width;
        //     _sprite.height =  this._texture.frame.height;
        // }else{
        //     _sprite.width = this.actualWidth;
        //     _sprite.height = this.actualHeight;
        // }

        if (_sprite instanceof PIXI.TilingSprite) {
            //_sprite.tileScale.set(1,1);
            _sprite.tilePosition.set(this._leftWidth, this._topHeight);
        } else if (_sprite instanceof PIXI.NineSlicePlane) {
            _sprite.leftWidth = _leftWidth;
            _sprite.rightWidth = _rightWidth;
            _sprite.topHeight = _topHeight;
            _sprite.bottomHeight = _bottomHeight;
        }
        if(this._anchorX!==0){
            _sprite.x = -this._texture.frame.width * this._anchorX;
        }
        if(this._anchorY!==0){
            _sprite.y = -this._texture.frame.height * this._anchorY;
        }

        // if (!isNaN(this.tint)) {
        //     _sprite.tint = this.tint;
        // }

        // if (!isNaN(this.blendMode)) {
        //     _sprite.blendMode = this.blendMode;
        // }
    }

}