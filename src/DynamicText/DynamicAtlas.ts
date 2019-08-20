import { TDynamicCharData, TGenerateCharData } from "./DynamicChar";
import { Rectangle } from "pixi.js";
import { DynamicTextStyle } from "./DynamicTextStyle";
import { log, hexToRgba } from "../Utils";
import { settings } from "./DynamicText";
import "../IUIBase";

//Atlas
/**
 * @private
 */
export const metricsCanvas = document.createElement("canvas");
/**
 * @private
 */
export const  metricsContext = metricsCanvas.getContext("2d");
metricsCanvas.width = 100;
metricsCanvas.height = 100;

class AtlasNode{
    public constructor(w?: number,h?: number){
        this.rect = new PIXI.Rectangle(0, 0, w || 0, h || 0);
    }
    public children: AtlasNode[] = [];
    public rect: PIXI.Rectangle;
    public data: TDynamicCharData|undefined;

    public insert(width: number, height: number, obj: TDynamicCharData): AtlasNode|undefined{
        if (this.children.length > 0) {
            const newNode = this.children[0].insert(width, height, obj);
            if (newNode) return newNode;

            return this.children[1].insert(width, height, obj);
        } else {
            if (this.data) return undefined;
            if (width > this.rect.width || height > this.rect.height) return undefined;
            if (width == this.rect.width && height == this.rect.height) {
                this.data = obj;
                obj.frame.x = this.rect.x;
                obj.frame.y = this.rect.y;
                return this;
            }

            this.children.push(new AtlasNode());
            this.children.push(new AtlasNode());

            const dw = this.rect.width - width;
            const dh = this.rect.height - height;

            if (dw > dh) {
                this.children[0].rect = new PIXI.Rectangle(this.rect.x, this.rect.y, width, this.rect.height);
                this.children[1].rect = new PIXI.Rectangle(this.rect.x + width, this.rect.y, this.rect.width - width, this.rect.height);
            } else {
                this.children[0].rect = new PIXI.Rectangle(this.rect.x, this.rect.y, this.rect.width, height);
                this.children[1].rect = new PIXI.Rectangle(this.rect.x, this.rect.y + height, this.rect.width, this.rect.height - height);
            }

            return this.children[0].insert(width, height, obj);
        }
    }
}

export class DynamicAtlas{
    public constructor(padding: number){
        this.res = devicePixelRatio || 1;
        this.padding = padding;
        this.addCanvas();
    }
    private res: number;
    private canvas: HTMLCanvasElement|undefined;
    private context: CanvasRenderingContext2D|undefined|null;
    private objects: TDynamicCharData[]|undefined;
    private newObjects: TDynamicCharData[] = [];
    private baseTexture: PIXI.BaseTexture|undefined;
    private lazyTimeout: number|undefined;
    private rootNode: AtlasNode|undefined;
    private canvasList: HTMLCanvasElement[] = [];
    private atlasdim: number|undefined;
    private startdim = 256;
    private maxdim = 2048;
    private fontFamilyCache: {[key: string]: TDynamicCharData} = {};
    private padding: number;

    private addCanvas(){
        //create new canvas
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvasList.push(this.canvas);

        //reset dimentions
        this.atlasdim = this.startdim;
        this.canvas.width = this.canvas.height = this.atlasdim;
        this.rootNode = new AtlasNode(this.atlasdim, this.atlasdim);

        //reset array with canvas objects and create new atlas
        this.objects = [];

        //set new basetexture
        this.baseTexture = PIXI.BaseTexture.from(this.canvas);
        this.baseTexture.mipmap = PIXI.MIPMAP_MODES.OFF; //if not, pixi bug resizing POW2
        this.baseTexture.resolution = 1; //todo: support all resolutions
        this.baseTexture.update();

        //Debug Spritesheet
        if (settings.debugSpriteSheet) {
            this.canvas.className = "DynamicText_SpriteSheet";
            document.body.appendChild(this.canvas);
        }
    }

    private drawObjects (arr: TDynamicCharData[], resized?: boolean) {
        if (resized) this.baseTexture && this.baseTexture.update();
        for (let i = 0; i < arr.length; i++)
            this.drawObject(arr[i]);
    }

    private drawObject(obj: TDynamicCharData){
        if(this.context && obj.texture){
            this.context.drawImage(obj._cache, obj.frame.x, obj.frame.y);
            obj.texture.frame = obj.frame as Rectangle;
            obj.texture.update();
        }
    }

    public getCharObject(char: string, style: DynamicTextStyle){

        const font = style.ctxFont();

        //create new cache for fontFamily
        let familyCache: TAny = this.fontFamilyCache[font];
        if (!familyCache) {
            familyCache = {};
            this.fontFamilyCache[font] = familyCache as TDynamicCharData;
        }

        //get char data
        const key = style.ctxKey(char);
        let obj = familyCache[key] as TDynamicCharData;
        if (!obj) {
            if(this.canvas == undefined){
                log("DynamicText -> getCharObject this.canvas = undefined");
                return;
            }
            if(this.baseTexture == undefined){
                log("DynamicText -> getCharObject this.baseTexture = undefined");
                return;
            }
            //create char object
            const metrics = this.generateCharData(char, style);

            //temp resize if doesnt fit (not nesseary when we dont need to generate textures)
            if (metrics.rect) {
                if (this.canvas.width < metrics.rect.width || this.canvas.height < metrics.rect.height) {
                    this.canvas.width = this.canvas.height = Math.max(metrics.rect.width, metrics.rect.height);
                    this.baseTexture.update();
                }
            }

            //todo: cleanup when we know whats needed
            obj = {
                metrics: metrics,
                font: font,
                value: char,
                frame: metrics.rect,
                baseTexture: metrics.rect ? this.baseTexture : undefined,
                xOffset: metrics.bounds ? metrics.bounds.minx : 0,
                yOffset: metrics.descent || 0,
                width: metrics.width || 0,
                lineHeight: metrics.lineHeight || 0,
                _cache: metrics.canvas,
                texture: metrics.rect ? new PIXI.Texture(this.baseTexture, metrics.rect) : undefined //temp texture
            };

            //add to collections
            familyCache[key] = obj;

            //add to atlas if visible char
            if (metrics.rect) {
                this.newObjects.push(obj);

                if (this.lazyTimeout === undefined)
                    this.lazyTimeout = setTimeout( () => {
                        this.addNewObjects();
                        this.lazyTimeout = undefined;
                    }, 0);

            }
        }

        return obj;
    }

    private compareFunction(a: TDynamicCharData,b: TDynamicCharData){
        if (a.frame.height < b.frame.height)
            return 1;

        if (a.frame.height > b.frame.height)
            return -1;


        if (a.frame.width < b.frame.width)
            return 1;

        if (a.frame.width > b.frame.width)
            return -1;


        return 0;
    }

    private addNewObjects(){
        if(this.rootNode == undefined){
            log("DynamicText -> addNewObjects this.rootNode = undefined");
            return;
        }
        if(this.objects == undefined){
            log("DynamicText -> addNewObjects this.objects = undefined");
            return;
        }
        let newObjects = this.newObjects;
        newObjects.sort(this.compareFunction);
        let _resized = false;
        let _newcanvas = false;

        for (let i = 0; i < newObjects.length; i++) {
            const obj = newObjects[i];
            const node = this.rootNode.insert(obj.frame.width + this.padding, obj.frame.height + this.padding, obj);

            if (node !== null && obj.texture && this.baseTexture) {
                if (_newcanvas) 
                    obj.texture.baseTexture = this.baseTexture; //update basetexture if new canvas was created (temp)
                this.objects.push(obj);
                continue;
            }

            //step one back (so it will be added after resize/new canvas)
            i--;

            if (this.atlasdim && this.atlasdim < this.maxdim) {
                _resized = true;
                this.resizeCanvas(this.atlasdim * 2);
                continue;
            }

            //close current spritesheet and make a new one
            this.drawObjects(this.objects, _resized);
            this.addCanvas();
            _newcanvas = true;
            _resized = false;
        }

        this.drawObjects(_resized || _newcanvas ? this.objects : newObjects, _resized);
        newObjects = [];
    }

    private resizeCanvas(dim: number) {
        if(this.canvas){
            this.canvas.width = this.canvas.height = this.atlasdim = dim;
        }
        if(this.rootNode && this.objects){
            this.rootNode = new AtlasNode(dim, dim);
            this.objects.sort(this.compareFunction);
    
            for (let i = 0; i < this.objects.length; i++) {
                const obj = this.objects[i];
                this.rootNode.insert(obj.frame.width + this.padding, obj.frame.height + this.padding, obj);
            }
        }
    }

    private generateCharData(char: string, style: DynamicTextStyle): TGenerateCharData{

        const fontSize = Math.max(1, style.fontSize || 26),
            lineHeight = fontSize * 1.25;


        //Start our returnobject
        const data = {
            fontSize: fontSize,
            lineHeight: lineHeight,
            width: 0
        };

        //Return if newline
        if (!char || /(?:\r\n|\r|\n)/.test(char))
            return data as TGenerateCharData;

        if(metricsContext == undefined){
            log("DynamicText -> generateCharData metricsContext = undefined");
            return data as TGenerateCharData;
        }
        
        //Ctx font string
        const font = style.ctxFont();
        metricsContext.font = font;

        //Get char width
        data.width = Math.round(metricsContext.measureText(char).width);

        //Return if char = space
        if (/(\s)/.test(char)) 
            return data as TGenerateCharData;

        //set canvas size (with padding so we can messure)
        const paddingY = Math.round(fontSize * 0.7), paddingX = Math.max(5, Math.round(fontSize * 0.7));
        metricsCanvas.width = Math.ceil(data.width) + paddingX * 2;
        metricsCanvas.height = 1.5 * fontSize;
        const w = metricsCanvas.width, h = metricsCanvas.height, baseline = (h / 2) + (paddingY * 0.5);

        //set font again after resize
        metricsContext.font = font;

        //make sure canvas is clean
        metricsContext.clearRect(0, 0, w, h);

        //save clean state with font
        metricsContext.save();

        //convert shadow string to shadow data
        const shadowData = function (str: string) {
            const data = str.trim().split(' ');
            return {
                color: data[0] || "#000000",
                alpha: parseFloat(data[1]) || 0.5,
                xOffset: parseFloat(data[2])|| 3,
                yOffset: parseFloat(data[3])|| 3,
                blur:  parseFloat(data[4]) || 5
            };
        };

        //convert fill string to fill data
        const fillData = function (str: string) {
            const data = str.trim().split(' ');
            const c = data[0] || "#FFFFFF";
            const a = parseFloat(data[1]) || 1;
            return {
                color: c,
                alpha: a,
                position: parseFloat(data[2])|| -1,
                rgba: hexToRgba(c, a)
            };
        };

        //create fill style from fill string
        const getFillStyle = function (str: string) {
            const fills: TAny = str.split(',').filter(function (s) { return s !== ''; });
            let i: number;

            //convert to fill data
            for (i = 0; i < fills.length; i++) fills[i] = fillData(fills[i]);

            switch (fills.length) {
                case 0: return "white";
                case 1: return fills[0].rgba ? fills[0].rgba : fills[0].color || "#FFFFFF";
                default:
                    //make gradient
                    try {
                        const gradEnd = baseline + lineHeight - fontSize,
                            gradient = metricsContext.createLinearGradient(0, gradEnd - fontSize, 0, gradEnd);

                        for (i = 0; i < fills.length; i++)
                            gradient.addColorStop(fills[i].position !== -1 ? fills[i].position : i / (fills.length - 1), fills[i].rgba || fills[i].color);

                        return gradient;
                    }
                    catch (e) {
                        return "#FFFFFF";
                    }
            }
        };


        //function to draw shadows
        const drawShadows = function (shadowString: string, stroke: boolean) {
            const shadows = shadowString.trim().split(',').filter(function (s) { return s !== ''; });
            if (shadows.length) {
                for (let i = 0; i < shadows.length; i++) {
                    const s = shadowData(shadows[i]);
                    metricsContext.globalAlpha = s.alpha;
                    metricsContext.shadowColor = s.color;
                    metricsContext.shadowOffsetX = s.xOffset + w;
                    metricsContext.shadowOffsetY = s.yOffset;
                    metricsContext.shadowBlur = s.blur;

                    if (stroke) {
                        metricsContext.lineWidth = style.stroke;
                        metricsContext.strokeText(char, paddingX - w, baseline);
                    }
                    else metricsContext.fillText(char, paddingX - w, baseline);
                }
                metricsContext.restore();
            }
        };

        //draw text shadows
        if (style.shadow.length)
            drawShadows(style.shadow, false);

        //draw stroke shadows
        if (style.stroke && style.strokeShadow.length) {
            drawShadows(style.strokeShadow, true);
        }

        //draw text
        metricsContext.fillStyle = getFillStyle(style.fill ||  "#000000");
        metricsContext.fillText(char, paddingX, baseline);
        metricsContext.restore();

        //draw stroke
        if (style.stroke) {
            metricsContext.strokeStyle = getFillStyle(style.strokeFill ||  "#000000");
            metricsContext.lineWidth = style.stroke;
            metricsContext.strokeText(char, paddingX, baseline);
            metricsContext.restore();
        }


        //begin messuring
        const pixelData = metricsContext.getImageData(0, 0, w, h).data;

        let i = 3;
        const line = w * 4;
        const len = pixelData.length;


        //scanline on alpha
        while (i < len && !pixelData[i]) { i += 4; }
        const ascent = (i / line) | 0;


        if (i < len) {
            //rev scanline on alpha
            i = len - 1;
            while (i > 0 && !pixelData[i]) { i -= 4; }
            const descent = (i / line) | 0;


            //left to right scanline on alpha
            for (i = 3; i < len && !pixelData[i];) {
                i += line;
                if (i >= len) { i = (i - len) + 4; }
            }
            const minx = ((i % line) / 4) | 0;

            //right to left scanline on alpha
            let step = 1;
            for (i = len - 1; i >= 0 && !pixelData[i];) {
                i -= line;
                if (i < 0) { i = (len - 1) - (step++) * 4; }
            }
            const maxx = ((i % line) / 4) + 1 | 0;

            // set font metrics
            (data as TGenerateCharData).ascent = Math.round(baseline - ascent);
            (data as TGenerateCharData).descent = Math.round(descent - baseline);
            (data as TGenerateCharData).height = 1 + Math.round(descent - ascent);
            (data as TGenerateCharData).bounds = {
                minx: minx - paddingX,
                maxx: maxx - paddingX,
                miny: 0,
                maxy: descent - ascent
            };
            
            const tempData = data as TGenerateCharData;
            const rect = {
                x: tempData.bounds.minx,
                y: -tempData.ascent - 2,
                width: tempData.bounds.maxx - tempData.bounds.minx + 2,
                height: tempData.ascent + tempData.descent + 4
            } as PIXI.Rectangle;
            (data as TGenerateCharData).rect = rect;

            //cache (for fast rearrange later)
            tempData.canvas = document.createElement("canvas");
            tempData.canvas.width = tempData.rect.width;
            tempData.canvas.height = tempData.rect.height;
            const c = tempData.canvas.getContext("2d");
            c && c.drawImage(metricsCanvas, -paddingX - tempData.rect.x, -baseline - tempData.rect.y);

            //reset rect position
            tempData.rect.x = tempData.rect.y = 0;


        }
        return data as TGenerateCharData;
    }

}