/// <reference types="pixi.js" />
import UIBase from "../UIBase";
/**
 * 动态宽高的图片,9切
 * Event: sourceComplete
 */
export default class SliceSprite extends UIBase {
    /** 图片加载完成事件 */
    static readonly SourceCompleteEvent = "sourceCompleteEvent";
    /**
     * 构造函数，如果不设置horizontalSlice，verticalSlice。 按设置的BorderWidth进行9切
     *
     * @see https://docs.cocos.com/creator/manual/zh/ui/sliced-sprite.html
     */
    constructor();
    protected _nineSlice: PIXI.NineSlicePlane | undefined;
    protected _texture: PIXI.Texture | undefined;
    protected _source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    source: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | undefined;
    /**
     * 边角宽度，要9切的范围
    */
    borderWidth: number;
    private _leftWidth;
    /**
     * 获取设置距离左边宽度
     */
    leftWidth: number;
    private _topHeight;
    /**
     * 获取设置距离顶部宽度
     */
    topHeight: number;
    private _rightWidth;
    /**
     * 获取设置距离右边宽度
     */
    rightWidth: number;
    private _bottomHeight;
    /**
     * 获取设置距离底部宽度
     */
    bottomHeight: number;
    /**
     * 是否水平切
    */
    horizontalSlice: boolean;
    /**
      * 是否垂直切
     */
    verticalSlice: boolean;
    /** 边框 */
    private bw;
    private vs;
    private hs;
    protected createSlice(): void;
    protected drawSlicePlane(): void;
    update(): void;
}
