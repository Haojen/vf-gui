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
    constructor() {
        super();
        this._graphicsDirty = false;
        this._radius = 0;
        this._fill = 0xffffff;
        this._rx = 0;
        this._ry = 0;
        this._graphics = new PIXI.Graphics();
        this.container.addChild(this._graphics);
    }
    drawUpdate() {
        if (this._graphicsDirty) {
            this._graphics.clear();
            const graphics = this._graphics;
            graphics.lineStyle(this._lineWidth, this._lineColor);
            graphics.beginFill(this._fill);
            graphics.drawRoundedRect(this.rx, this.ry, this.width, this.height, this.radius);
            graphics.endFill();
            this._graphicsDirty = false;
        }
    }
    /** 绘制矩形方法 */
    drawRoundedRect(x, y, width, height, radius, color) {
        this._radius = radius;
        this._rx = x;
        this._ry = y;
        this.setDefaultSize(width, height);
        if (color) {
            this._fill = color;
        }
        this._graphicsDirty = true;
        this.updatesettings(true);
    }
    /** 获得绘制矢量源 */
    get graphics() {
        return this._graphics;
    }
    /**
     * 圆角
     */
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 要填充的颜色
     * @default 0xFFFFFF
     * */
    get fill() {
        return this._fill;
    }
    set fill(value) {
        this._fill = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 线条宽度
     */
    get lineWidth() {
        return this._lineWidth;
    }
    set lineWidth(value) {
        this._lineWidth = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 线条颜色
     */
    get lineColor() {
        return this._lineColor;
    }
    set lineColor(value) {
        this._lineColor = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 绘制的起始坐标
     */
    get rx() {
        return this._rx;
    }
    set rx(value) {
        this._rx = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 绘制的起始坐标
     */
    get ry() {
        return this._ry;
    }
    set ry(value) {
        this._ry = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 显示对象填充色 0xFFFFFF
     */
    set tint(value) {
        this._graphics.tint = value;
        this.setting.tint = value;
    }
    get tint() {
        return this.setting.tint || NaN;
    }
    update() {
        this.drawUpdate();
    }
}
//# sourceMappingURL=Rect.js.map