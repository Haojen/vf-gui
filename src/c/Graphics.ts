import { UIBase } from "../core/UIBase";
import { _getSourcePath } from "../core/Utils";

/**
 * 图片
 * Event: sourceComplete
 */
export class Graphics extends UIBase {

    public constructor(geometry?: PIXI.GraphicsGeometry | undefined) {
        super();
        this._props = new PIXI.Graphics(geometry);
        this.container.addChild(this._props);
    }

    public readonly _props:PIXI.Graphics;

    public get props():PIXI.Graphics{
        return this._props;
    }

}