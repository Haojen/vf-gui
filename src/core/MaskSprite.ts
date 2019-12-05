import { DisplayObject } from "./DisplayObject";

export interface MaskSprite extends DisplayObject{
    maskSprite(): PIXI.Sprite | PIXI.Graphics;
}
