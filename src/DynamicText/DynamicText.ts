import * as emojiRegex from "emoji-regex";
import { DynamicTextStyle } from "./DynamicTextStyle";
import UIBase from "../UIBase";
import { DynamicChar} from "./DynamicChar";
import { hexToInt } from "../Utils";
import { FontStyleEnum } from "../Enum/FontStyleEnum";
import { HorizontalAlignEnum } from "../Enum/AlignEnum";
import { DynamicAtlas } from "./DynamicAtlas";

/**  
 * @private
*/
export let atlas: DynamicAtlas;
/**  
 * phrases the input text and prepares the char array
 * @private
*/
export const closeTags = ['</i>', '</b>', '</font>', '</center>'];
/**  
 * force one font family for emojis so we dont rerender them multiple times
 * @private
*/
export const settings = {
    debugSpriteSheet: false,
    defaultEmojiFont: "Segoe UI Emoji"
};
/**
* An dynamic text object with auto generated atlas
* 自动生成动态文本
*
* @class
* @extends PIXI.UI.UIBase
* @memberof PIXI.UI
* @param text {String} Text content
* @param [width=0] {Number|String} width of textbox. 0 = autoWidth
* @param [height=0] {Number|String} height of textbox. 0 = autoHeight
* @param [allowTags=true] {boolean} Allow inline styling
* @param [options=null] {DynamicTextStyle} Additional text settings
*/
export class DynamicText extends UIBase{

    public constructor(text: string, options: {width: number;height: number;allowTags: boolean;style: DynamicTextStyle}){
        super(options.width || 0,options.height || 0);
        this.options = options;

        //create atlas
        if (atlas === null)
            atlas = new DynamicAtlas(1);

        this.autoWidth = !options.width;
        this.autoHeight = !options.height;

        //defaultstyle for this textobject
        this.defaultStyle = this._style = new DynamicTextStyle(this);
        this.defaultStyle.merge(options.style);

        //collection of all processed char
        this.container.addChild(this.charContainer);

        //the input text
        this._inputText = text;

        //list of rendered sprites (temp)
        //this.sprites = [];
    }
    
    protected dirtyText = true;
    public dirtyStyle = true;
    protected dirtyRender = true;

    protected options: {width: number;height: number;allowTags: boolean}|undefined;
    protected autoWidth: boolean;
    protected autoHeight: boolean;
    //collection of all processed char
    protected chars: DynamicChar[] = [];
    protected renderChars: DynamicChar[] = [];
    protected spriteCache: PIXI.Sprite[] = [];
    protected charContainer = new PIXI.Container();
    //states
    protected lastWidth = 0;
    protected lastHeight = 0;
    //dictionary for line data
    protected lineWidthData: number[] = [];
    protected lineHeightData: number[]  = [];
    protected lineFontSizeData: number[] = [];
    protected lineAlignmentData: HorizontalAlignEnum[] = [];
    protected renderCount = 0;
    protected charCount = 0;
    //ellipsis caches (not nessesary when no sprites)
    protected lineEllipsisData: DynamicChar[][] = [];
    protected lineHasEllipsis: boolean[] = [];

    private _inputText: string;
    private lazyUpdate: number|undefined;

    protected defaultStyle: DynamicTextStyle;
    private _style: DynamicTextStyle;

    /**
     * ROUGH TEMP RENDER (with sprites)
     */
    public render(){
        let yOffset = 0,
            xOffset = 0,
            currentLine = -1,
            i;
        if (this.spriteCache.length > this.renderCount) {
            for (i = this.renderCount; i < this.spriteCache.length; i++) {
                const removeSprite = this.spriteCache[i];
                if (removeSprite)
                    removeSprite.visible = false;
            }
        }

        let char: DynamicChar;
        let lineWidth = 0;
        let lineHeight = 0;
        let maxLineWidth = 0;

        for (i = 0; i < this.renderCount; i++) {
            char = this.renderChars[i];

            //get line data
            if (currentLine !== char.lineIndex) {
                currentLine = char.lineIndex;
                lineWidth = this.lineWidthData[currentLine];
                lineHeight = this.lineHeightData[currentLine];
                yOffset += lineHeight;

                switch (this.lineAlignmentData[currentLine]) {
                    case HorizontalAlignEnum.right: xOffset = this._width - lineWidth; break;
                    case HorizontalAlignEnum.center: xOffset = (this._width - lineWidth) * 0.5; break;
                    default: xOffset = 0;
                }

                maxLineWidth = Math.max(lineWidth, maxLineWidth);
            }

            let tex: PIXI.Texture|undefined;
            let sprite: PIXI.Sprite|undefined;
            if(char.data){
                //no reason to render a blank space or 0x0 letters (no texture created)
                if (char.data && !char.data.texture || char.space || char.newline) {
                    if (this.spriteCache[i])
                        this.spriteCache[i].visible = false;
                    continue;
                }
                if(char.data.texture){
                    tex = char.data.texture;
                    sprite = this.spriteCache[i];
                    if (!sprite) {
                        sprite = this.spriteCache[i] = new PIXI.Sprite(tex);
                        sprite.anchor.set(0.5);
                    }
                    else
                        sprite.texture = tex;
                }
            }
            if(tex && sprite){
                sprite.visible = true;
                sprite.x = char.x + xOffset + tex.width * 0.5;
                sprite.y = char.y + yOffset - tex.height * 0.5 - (lineHeight - this.lineFontSizeData[currentLine]);
    
    
                sprite.tint = char.emoji ? 0xffffff : hexToInt(char.style.tint, 0xffffff);
                sprite.rotation = char.style.rotation
                sprite.skew.x =char.style.skew;
    
                if (!sprite.parent)
                    this.charContainer.addChild(sprite);
            }
        }

        if (this.autoWidth) this.width = maxLineWidth;
        if (this.autoHeight) this.height = yOffset;
    }

    public prepareForRender(){
        const pos = new PIXI.Point();
        let wordIndex = 0;
        let lineHeight = 0;
        let lineFontSize = 0;
        let lineIndex = 0;
        let lineAlignment = this.defaultStyle.align;
        let lastSpaceIndex = -1;
        let lastSpaceLineWidth = 0;
        let textHeight = 0;
        let forceNewline = false;
        let style: DynamicTextStyle;
        let renderIndex = 0;
        let ellipsis = false;
        let lineFull = false;
        let i;
        
        for (i = 0; i < this.charCount; i++) {
            const char = this.chars[i], lastChar = this.chars[i - 1];
            style = char.style;

            if(char.data == undefined){
                continue;
            }
            //lineheight
            lineHeight = Math.max(lineHeight, this.defaultStyle.lineHeight || style.lineHeight || char.data.lineHeight);

            if (style.overflowY !== 'visible' && lineHeight + textHeight > this._height) {
                if (style.overflowY === 'hidden')
                    break;
            }

            if (char.newline)
                lineFull = false;

            //set word index
            if (char.space || char.newline) wordIndex++;
            else char.wordIndex = wordIndex;

            //textheight
            lineFontSize = Math.max(lineFontSize, style.fontSize);

            //lineindex
            char.lineIndex = lineIndex;

            //lineAlignment
            if (style.align !== this.defaultStyle.align) lineAlignment = style.align;


            if (char.space) {
                lastSpaceIndex = i;
                lastSpaceLineWidth = pos.x;
            }

            const size = Math.round(char.data.width) + style.letterSpacing;
            if (!this.autoWidth && !forceNewline && !char.newline && pos.x + size > this._width) {
                if (style.wrap) {
                    if (char.space) {
                        forceNewline = true;
                    }
                    else if (lastSpaceIndex !== -1) {
                        renderIndex -= i - lastSpaceIndex;
                        i = lastSpaceIndex - 1;
                        lastSpaceIndex = -1;
                        pos.x = lastSpaceLineWidth;
                        forceNewline = true;
                        continue;

                    }
                    else if (style.breakWords) {
                        if (lastChar && lastChar.data) {
                            pos.x -= lastChar.style.letterSpacing;
                            pos.x -= lastChar.data.width;
                        }
                        i -= 2;
                        renderIndex--;
                        forceNewline = true;
                        continue;
                    }

                }


                if (style.overflowX == 'hidden' && !forceNewline) {
                    lineFull = true;
                    if (style.ellipsis && !ellipsis) {
                        ellipsis = true;
                        let ellipsisData = this.lineEllipsisData[lineIndex];
                        if (!ellipsisData) ellipsisData = this.lineEllipsisData[lineIndex] = [new DynamicChar(), new DynamicChar(), new DynamicChar()];
                        for (let d = 0; d < 3; d++) {
                            const dot = ellipsisData[d];
                            dot.value = ".";
                            dot.data = atlas.getCharObject(dot.value, style);
                            dot.style = style;
                            dot.x = pos.x + char.data.xOffset;
                            dot.y = style.verticalAlign + (dot.data ? dot.data.yOffset : 0);
                            dot.lineIndex = lineIndex;
                            pos.x += Math.round((dot.data ? dot.data.width:0)) + style.letterSpacing;
                            this.renderChars[renderIndex] = dot;
                            renderIndex++;
                        }

                    }

                }

            }


            //Update position and add to renderchars
            if (!lineFull) {
                //position
                char.x = pos.x + char.data.xOffset;
                char.y = style.verticalAlign+ char.data.yOffset;
                pos.x += size;
                this.renderChars[renderIndex] = char;
                renderIndex++;
            }



            //new line
            if (forceNewline || char.newline || i === this.charCount - 1) {
                if (lastChar) {
                    pos.x -= lastChar.style.letterSpacing;
                }

                if (char.space) {
                    pos.x -= char.data.width;
                    pos.x -= style.letterSpacing;
                }

                textHeight += lineHeight;
                this.lineHasEllipsis[lineIndex] = ellipsis;
                this.lineWidthData[lineIndex] = pos.x;
                this.lineHeightData[lineIndex] = lineHeight;
                this.lineFontSizeData[lineIndex] = lineFontSize;
                this.lineAlignmentData[lineIndex] = lineAlignment;


                //reset line vaules
                lineHeight = pos.x = lastSpaceLineWidth = lineFontSize = 0;
                lineAlignment = this.defaultStyle.align;
                lastSpaceIndex = -1;
                lineIndex++;
                forceNewline = lineFull = ellipsis = false;

            }

        }

        this.renderCount = renderIndex;
    }

    public processInputText(){
        const styleTree = [this.defaultStyle];
        let charIndex = 0;
        let inputTextIndex = 0;
        const inputArray = Array.from(this._inputText);

        for (let i = 0; i < inputArray.length; i++) {
            this.style = styleTree[styleTree.length - 1];
            let c = inputArray[i];
            //const charcode = c.charCodeAt(0);
            let newline = false;
            let space = false;
            let emoji = false;

            let style = this.style;
            //Extract Tags
            if (/(?:\r\n|\r|\n)/.test(c))
                newline = true;
            else if (/(\s)/.test(c))
                space = true;
            else if (this.options && this.options.allowTags && c === "<") {
                let tag = this._inputText.substring(inputTextIndex);
                tag = tag.slice(0, tag.indexOf(">") + 1);
                let FoundTag = true;
                if (tag.length) {
                    if (tag === "<i>") {
                        style = style.clone();
                        style.fontStyle = FontStyleEnum.italic;
                        styleTree.push(style);
                    }
                    else if (tag === "<b>") {
                        style = style.clone();
                        style.fontWeight = FontStyleEnum.bold;
                        styleTree.push(style);
                    }
                    else if (tag === "<center>") {
                        style = style.clone();
                        style.align = HorizontalAlignEnum.center;
                        styleTree.push(style);
                    }
                    else if (closeTags.indexOf(tag) !== -1) {
                        if (styleTree.length > 1) styleTree.splice(styleTree.length - 1, 1);
                    }
                    else if (tag.startsWith("<font ")) {
                        const regex = /(\w+)\s*=\s*((["'])(.*?)\3|([^>\s]*)(?=\s|\/>))(?=[^<]*>)/g;
                        let match = regex.exec(tag);

                        if (match !== null) {
                            style = style.clone();
                            while (match !== null) {
                                switch (match[1]) {
                                    case 'family': match[1] = 'fontFamily'; break;
                                    case 'size': match[1] = 'fontSize'; break;
                                    case 'weight': match[1] = 'fontWeight'; break;
                                    case 'style': match[1] = 'fontStyle'; break;
                                    case 'valign': match[1] = 'verticalAlign'; break;
                                    case 'spacing': match[1] = 'letterSpacing'; break;
                                    case 'color': match[1] = 'tint'; break;

                                }
                                const tampStyle: TAny = style;
                                tampStyle[match[1]] = match[4];
                                match = regex.exec(tag);
                            }
                            styleTree.push(style);
                        }
                    }
                    else {
                        FoundTag = false;
                    }

                    if (FoundTag) {
                        inputTextIndex += tag.length;
                        i += tag.length - 1;
                        continue;
                    }
                }
            }
            else {
                //detect emoji
                let emojiMatch = emojiRegex.default().exec(c);
                if (emojiMatch !== null) {
                    i--; c = '';
                    while (emojiMatch !== null && c !== emojiMatch[0]) {
                        i++;
                        c = emojiMatch[0];
                        emojiMatch = emojiRegex.default().exec(c + inputArray[i + 1]);
                    }
                    emoji = true;
                }
            }


            //Prepare DynamicChar object
            let char = this.chars[charIndex];
            if (!char) {
                char = new DynamicChar();
                this.chars[charIndex] = char;
            }
            char.style = style;


            if (emoji) {
                char.style = char.style.clone();
                char.style.fontFamily = settings.defaultEmojiFont;
            }

            char.data = atlas.getCharObject(c, char.style);
            char.value = c;
            char.space = space;
            char.newline = newline;
            char.emoji = emoji;

            charIndex++;
            inputTextIndex += c.length;
        }
        this.charCount = charIndex;
    }

    public update(){
        if (this.lazyUpdate === undefined) return;
        const self = this;
        this.lazyUpdate = setTimeout(function () {
            
            //console.log("UPDATING TEXT");
            const dirtySize = !self.autoWidth && (self._width != self.lastWidth || self._height != self.lastHeight || self.dirtyText);

            if (self.dirtyText || self.dirtyStyle) {
                self.dirtyText = self.dirtyStyle = false;
                self.dirtyRender = true; //force render after textchange
                self.processInputText();
            }

            if (dirtySize || self.dirtyRender) {
                self.dirtyRender = false;
                self.lastWidth = self._width;
                self.lastHeight = self.height;
                self.prepareForRender();
                self.render();
            }
            self.lazyUpdate = undefined;
        }, 0);
    }
    /** 设置文本内容 */
    get value() {
        return this._inputText;
    }
    set value(value) {
        if (value !== this._inputText) {
            this._inputText = value;
            this.dirtyText = true;
            this.update();
            //console.log("Updating Text to: " + val);
        }
    }
    /** 设置文本内容 */
    get text() {
        return this.value;
    }
    set text(value) {
        this.value = value;
    }
    /** 设置样式 */
    get style() {
        return this._style;
    }
    set style(value) {
        //get a clean default style
        const style = new DynamicTextStyle(this);

        //merge it with new style
        style.merge(value);

        //merge it onto this default style
        this._style.merge(style);

        this.dirtyStyle = true;
        this.update();
    }
}

