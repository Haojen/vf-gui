import UIBase from "../UIBase";
import { getSourcePath } from "../Utils";
/**
 * UI图片显示对象，如果使用拉伸或9切，请使用 SliceSprite
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
export default class Sprite extends UIBase {
    constructor(t) {
        super();
        this._anchorX = 0;
        this._anchorY = 0;
        this._source = t;
        this._sprite = new PIXI.Sprite(t);
        this.container.addChild(this._sprite);
    }
    /** 获得图像 */
    get img() {
        return this._sprite;
    }
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    get source() {
        return this._source;
    }
    set source(value) {
        value = getSourcePath(value);
        if (value === undefined) {
            return;
        }
        if (value === this._source) {
            return;
        }
        this._source = value;
        if (value instanceof PIXI.Texture) {
            this._sprite.texture = value;
            this.correctionWidthAndHeight();
            this.updatesettings(true);
            this.emit(Sprite.SourceCompleteEvent, value.frame, this);
        }
        else {
            this._sprite.texture = PIXI.Texture.from(value);
            if (this._sprite.texture.width > 1 && this._sprite.texture.height > 1) {
                this.correctionWidthAndHeight();
                this.updatesettings(true);
                this.emit(Sprite.SourceCompleteEvent, this._sprite.texture.frame, this);
            }
            else {
                this._sprite.texture.once("update", () => {
                    this.correctionWidthAndHeight();
                    this.updatesettings(true);
                    this.emit(Sprite.SourceCompleteEvent, this._sprite.texture.frame, this);
                }, this);
            }
        }
    }
    correctionWidthAndHeight() {
        if (this.setting.width == 0) {
            this.setting.width = this._sprite.texture.width;
        }
        if (this.setting.height == 0) {
            this.setting.height = this._sprite.texture.height;
        }
    }
    /** 设置X的锚点 */
    get anchorX() {
        return this._anchorX;
    }
    set anchorX(value) {
        this._anchorX = value;
        this._sprite.anchor.x = value;
    }
    /** 设置Y的锚点 */
    get anchorY() {
        return this._anchorY;
    }
    set anchorY(value) {
        this._anchorY = value;
        this._sprite.anchor.y = value;
    }
    update() {
        if (!isNaN(this.tint))
            this._sprite.tint = this.tint;
        if (!isNaN(this.blendMode))
            this._sprite.blendMode = this.blendMode;
        this._sprite.width = this._width;
        this._sprite.height = this._height;
    }
}
/** 图片加载完成事件 */
Sprite.SourceCompleteEvent = "sourceCompleteEvent";
//# sourceMappingURL=Sprite.js.map