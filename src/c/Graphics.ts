import { UIBase } from "../core/UIBase";

/**
 * 矢量绘制
 */
export class Graphics extends UIBase {

    public constructor(geometry?: PIXI.GraphicsGeometry | undefined) {
        super();
        this.graphics = new PIXI.Graphics(geometry);
        this.container.addChild(this.graphics);
    }

    public readonly graphics: PIXI.Graphics;

}