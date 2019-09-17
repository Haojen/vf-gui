/// <reference types="pixi.js" />
import UIBase from "../UIBase";
/**
 * UI 矩形
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
export default class Rect extends UIBase {
    constructor();
    private _graphics;
    private _graphicsDirty;
    private _radius;
    private _fill;
    private _rx;
    private _ry;
    private _lineWidth;
    private _lineColor;
    private drawUpdate;
    /** 绘制矩形方法 */
    drawRoundedRect(x: number, y: number, width: number, height: number, radius: number, color?: number): void;
    /** 获得绘制矢量源 */
    readonly graphics: PIXI.Graphics;
    /**
     * 圆角
     */
    radius: number;
    /**
     * 要填充的颜色
     * @default 0xFFFFFF
     * */
    fill: number;
    /**
     * 线条宽度
     */
    lineWidth: number | undefined;
    /**
     * 线条颜色
     */
    lineColor: number | undefined;
    /**
     * 绘制的起始坐标
     */
    rx: number;
    /**
     * 绘制的起始坐标
     */
    ry: number;
    /**
     * 显示对象填充色 0xFFFFFF
     */
    tint: number;
    update(): void;
}
