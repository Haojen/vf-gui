import { UIBase } from "../core/UIBase";


/**
 * 矢量绘制
 * 
 * @example let graphics = new vfui.Graphics();
 * 
 * @namespace vfui
 * 
 * @link https://vipkid-edu.github.io/pixi-vfui-docs/play/#example/0.5.0/TestTimeLine
 */
export class Graphics extends UIBase {

    public constructor(geometry?: PIXI.GraphicsGeometry | undefined) {
        super();
        this.graphics = new PIXI.Graphics(geometry);
        this.container.addChild(this.graphics);
    }

    public readonly graphics: PIXI.Graphics;

}