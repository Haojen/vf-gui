import { DynamicTextStyle } from "./DynamicTextStyle";
import { Rectangle } from "pixi.js";

export interface TBounds{
    minx: number;
    maxx: number;
    miny: number;
    maxy: number;
}

// export interface TRect{
//     x:number;
//     y:number;
//     width:number;
//     height:number;
// }

export interface TGenerateCharData{
    fontSize: number;
    lineHeight: number;
    width: number;
    ascent: number;
    descent: number;
    height: number;
    bounds: TBounds;
    rect: Rectangle;
    canvas: HTMLCanvasElement;
}

export interface TDynamicCharData{
    
    metrics: TGenerateCharData;
    font: string;
    value: string;
    frame: Rectangle;
    baseTexture: PIXI.BaseTexture|undefined;
    xOffset: number;
    yOffset: number;
    width: number;
    lineHeight: number;
    _cache: HTMLCanvasElement;
    texture: PIXI.Texture|undefined; //temp texture
}

export class DynamicChar {
    //styledata (texture, orig width, orig height)
    public style = new DynamicTextStyle();

    //char data
    public data: TDynamicCharData|undefined;

    //is this char space?
    public space = false;

    //is this char newline?
    public newline = false;

    public emoji = false;

    //charcode
    public charcode = 0;

    //char string value
    public value = "";

    //word index
    public wordIndex = -1;

    //line index of char
    public lineIndex = -1;

    public x = 0;
    public y = 0;
}