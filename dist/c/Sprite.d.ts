/// <reference types="pixi.js" />
import UIBase from "../UIBase";
/**
 * UI图片显示对象，如果使用拉伸或9切，请使用 SliceSprite
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
export default class Sprite extends UIBase {
    /** 图片加载完成事件 */
    static readonly SourceCompleteEvent = "sourceCompleteEvent";
    constructor(t?: PIXI.Texture);
    protected _sprite: PIXI.Sprite;
    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    /** 获得图像 */
    readonly img: PIXI.Sprite;
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    private correctionWidthAndHeight;
    private _anchorX;
    /** 设置X的锚点 */
    anchorX: number;
    private _anchorY;
    /** 设置Y的锚点 */
    anchorY: number;
    update(): void;
}
