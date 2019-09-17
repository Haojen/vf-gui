/// <reference types="pixi.js" />
import UIBase from "../UIBase";
/**
 * UI平铺显示对象,功能与官方一直，可参考官方示例
 *
 * @example https://pixijs.io/examples/#/sprite/tiling-sprite.js
 */
export default class TilingSprite extends UIBase {
    constructor(width?: number, height?: number);
    private _tilePosition;
    private _tileScale;
    private _sprite;
    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    private getNewTilingSprite;
    /** 获取设置位置 */
    tilePosition: PIXI.Point;
    /** 获取设置缩放 */
    tileScale: PIXI.Point;
    update(): void;
}
