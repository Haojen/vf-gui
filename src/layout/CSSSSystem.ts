import { CSSStyle } from "./CSSStyle";
import { UIBase, Label } from "../UI";
import { getTexture } from "../core/Utils";
import { updateDisplayLayout } from "./CSSLayout";
import { TextInput } from "../c/TextInput";
import { ComponentEvent } from "../interaction/Index";

export const updateDisplayKey = "updateDisplayList";
export const CSSFunction: TAny = {};


export function addDrawList(key: string, target: UIBase,fun?: Function) {
    target.container.isEmitRender = true;
    if(fun){
        target.delayDrawList.set(key, fun);
        return;
    }
    const efunction = CSSFunction[key];
    if (efunction) {
        if(typeof efunction === "string"){
            target.delayDrawList.set(efunction, CSSFunction[efunction]);
        }else{
            target.delayDrawList.set(key, CSSFunction[key]);
        }    
    }
}

export function updateDrawList(target: UIBase){
    
    
    if(target.parent == undefined){
        return;
    }

    if(target.delayDrawList.size == 0 ){
        target.container.isEmitRender = false;
        return;
    }
    let isDraw = false;
    const updateDisplayList = target.delayDrawList.get(updateDisplayKey);
    if(updateDisplayList){
        updateDisplayLayout(target);
        target.delayDrawList.delete(updateDisplayKey);
        isDraw = true;
    }
    target.delayDrawList.forEach((value: Function, key: string, map: Map<string, Function>) => {
        value.call(target,target,key);
        target.delayDrawList.delete(key);
        isDraw = true;
    });
    target.container.isEmitRender = false;
    if(isDraw && target.listenerCount(ComponentEvent.RENDERER_COMPLETE)){
        target.emit(ComponentEvent.RENDERER_COMPLETE,target);
    }
    
}


export const updateStyleProxyHandler = {
    get(target: CSSStyle, key: string, receiver: TAny) {
        return (target as TAny)[key];
    },
    set(target: CSSStyle, key: string, value: TAny, receiver: TAny) {
        if ((target as TAny)[key] === value) {
            return true;
        }
        //const oldValue = (target as TAny)[key];
        (target as TAny)[key] = value;
        //target.eventEmitter.emit("ValueChangeEvent", key, value, oldValue);
        if(target.parent)
            addDrawList(key, target.parent);
        return true;
    }
}


/** ===================== 更新布局  ===================== */

CSSFunction.updateDisplayList = (uibase: UIBase) => {
    updateDisplayLayout(uibase);
}

/** ===================== background  ===================== */

CSSFunction.backgroundPositionSize = (uibase: UIBase) => {
    if (uibase.background && uibase.background.children.length > 0) {
        const sprite = uibase.background.getChildAt(0) as PIXI.Sprite;
        const style = uibase.style;
        if (sprite instanceof PIXI.TilingSprite) {
            sprite.tilePosition.set(style.backgroundPositionX || 0, style.backgroundPositionY || 0);
        } else {
            if (style.backgroundSize) {
                sprite.width = style.backgroundSize[0];
                sprite.height = style.backgroundSize[1];
            }
            sprite.position.set(style.backgroundPositionX || 0, style.backgroundPositionY || 0);
        }
    }
}

CSSFunction.backgroundPositionX = (uibase: UIBase) => {
    CSSFunction.backgroundPositionSize(uibase);
}
CSSFunction.backgroundPositionY = (uibase: UIBase) => {
    CSSFunction.backgroundPositionSize(uibase);
}
CSSFunction.backgroundSize = (uibase: UIBase) => {
    CSSFunction.backgroundPositionSize(uibase);
}
CSSFunction.backgroundRepeat = (uibase: UIBase) => {
    const style = uibase.style;
    if (style.backgroundImage && uibase.background) {
        uibase.background.removeChildren();

        let backgroundImage: PIXI.Texture | undefined;
        if (style.backgroundImage instanceof PIXI.Texture) {
            backgroundImage = style.backgroundImage;
        } else if (typeof style.backgroundImage === "string") {
            backgroundImage = getTexture(style.backgroundImage);
        }
        if (backgroundImage) {
            let sprite: PIXI.TilingSprite | PIXI.NineSlicePlane | PIXI.Sprite;
            if (style.backgroundRepeat === undefined) {
                style.backgroundRepeat = "no-repeat";
            }
            if (style.backgroundRepeat === "repeat") {
                sprite = new PIXI.TilingSprite(backgroundImage);
            } else {
                sprite = new PIXI.Sprite(backgroundImage);
            }

            uibase.background.addChild(sprite);
            const maskGraphics = new PIXI.Graphics();
            maskGraphics.beginFill(0xFF3300);
            maskGraphics.drawRect(0, 0, uibase.width, uibase.height);
            maskGraphics.endFill();
            uibase.background.addChild(maskGraphics);
            uibase.background.mask = maskGraphics;
        }
    }
}

CSSFunction.backgroundColor = (uibase: UIBase) => {

    if (uibase.background === undefined) {
        uibase.background = new PIXI.Graphics();
        uibase.background.name = "background";
        uibase.container.addChildAt(uibase.background, 0);
    }
    const style = uibase.style;
    const background = uibase.background;
    if (style.backgroundColor) {
        background.clear();
        background.beginFill(style.backgroundColor);
        background.drawRoundedRect(0, 0, uibase.width, uibase.height, 0);
        background.endFill();
    }

}

CSSFunction.backgroundImage = (uibase: UIBase) => {
    if (uibase.background === undefined) {
        uibase.background = new PIXI.Graphics();
        uibase.background.name = "background";
        uibase.container.addChildAt(uibase.background, 0);
    }
    CSSFunction.backgroundRepeat(uibase);
    CSSFunction.backgroundPositionSize(uibase);

}

/** ===================== mask  ===================== */

CSSFunction.maskPosition = (uibase: UIBase) => {

    if(uibase.mask){
        const style = uibase.style;
        if(style.maskPosition === undefined){
            return;
        }
        
        if(uibase.mask instanceof UIBase){
            uibase.mask.x = style.maskPosition[0];
            uibase.mask.y =  style.maskPosition[1];
        }else{
            uibase.mask.position.set(style.maskPosition[0],style.maskPosition[1])
        }
    }
}

CSSFunction.maskSize = (uibase: UIBase) => {
    if(uibase.mask){
        const style = uibase.style;
        if(style.maskSize === undefined){
            return;
        }

        uibase.mask.width = style.maskSize[0];
        uibase.mask.height = style.maskSize[1];
        if(!(uibase.mask instanceof UIBase))
            uibase.mask.updateTransform();
    }
}

CSSFunction.maskImage = (uibase: UIBase) => {

    uibase.container.mask = null;
    if (uibase.mask && uibase.mask.parent) {
        if (uibase.mask instanceof UIBase) {
            uibase.removeChild(uibase.mask);
        } else {
            uibase.mask.parent.removeChild(uibase.mask);
        }
    }

    for (let i = 0; i < uibase.uiChildren.length; i++) {
        if (uibase.uiChildren[i].name == "maskImage") {
            uibase.removeChild(uibase.uiChildren[i]);
            break;
        }
    }

    uibase.mask = undefined;
    const style = uibase.style;
    const container = uibase.container;

    if (style.maskImage instanceof PIXI.Graphics) {
        uibase.mask = style.maskImage;
        container.mask = uibase.mask;
        container.addChild(uibase.mask);
    } else if (style.maskImage instanceof UIBase) {
        //后期组件完成后补充，矢量与位图组件
        uibase.mask = style.maskImage;
        uibase.mask.name = "maskImage";
        uibase.mask.container.name = "maskImage";
        container.mask = (uibase.mask.container as TAny) || null;
        uibase.addChild(uibase.mask);
    } else {
        uibase.mask = PIXI.Sprite.from(getTexture(style.maskImage));
        container.mask = uibase.mask;
        container.addChild(uibase.mask);
    }
    
    CSSFunction.maskSize(uibase);
    CSSFunction.maskPosition(uibase)

}


/** ===================== alpha  ===================== */
CSSFunction.alpha = (uibase: UIBase) => {
    const style = uibase.style;
    uibase.container.alpha = style.alpha;
}

/** ===================== visible  ===================== */
CSSFunction.visible = (uibase: UIBase) => {
    const style = uibase.style;
    uibase.container.visible = style.visible;
}

/** ===================== tint  ===================== */
CSSFunction.tint = (uibase: UIBase) => {
    uibase.container.children.forEach(value=>{
        if((value as TAny)["tint"]){
            (value as TAny)["tint"] = uibase.tint;
        }
    });
}


/** ===================== transform  ===================== */
CSSFunction.transform = (uibase: UIBase) => {
    uibase.container.setTransform(uibase.x + uibase.pivotX,uibase.y + uibase.pivotY,uibase.scaleX,uibase.scaleY,uibase.rotation*(Math.PI/180),uibase.skewX,uibase.skewY,uibase.pivotX,uibase.pivotY);
    CSSFunction.backgroundColor(uibase);
}

/** ===================== blendMode  ===================== */
CSSFunction.blendMode = (uibase: UIBase) => {
    uibase.container.children.forEach(value=>{
        if(value instanceof PIXI.Sprite){
            value.blendMode = uibase.blendMode || PIXI.BLEND_MODES.NORMAL;
        }
    });
}


/** ===================== loayout  ===================== */
CSSFunction.display = updateDisplayKey;
CSSFunction.justifyContent = updateDisplayKey;
CSSFunction.alignContent = updateDisplayKey;
CSSFunction.width = updateDisplayKey;
CSSFunction.minWidth = updateDisplayKey;
CSSFunction.maxWidth= updateDisplayKey;
CSSFunction.height = updateDisplayKey;
CSSFunction.minHeight = updateDisplayKey;
CSSFunction.maxHeight = updateDisplayKey;
CSSFunction.left = updateDisplayKey;
CSSFunction.top = updateDisplayKey;
CSSFunction.right = updateDisplayKey;
CSSFunction.bottom = updateDisplayKey;


CSSFunction.pivotX= (target: UIBase) => {
    target.pivotX = target.style.pivotX;
}
CSSFunction.pivotY = (target: UIBase) => {
    target.pivotY = target.style.pivotY;
}
CSSFunction.scaleX = (target: UIBase) => {
    target.scaleX = target.style.scaleX;
}
CSSFunction.scaleY = (target: UIBase) => {
    target.scaleY = target.style.scaleY;
}
CSSFunction.rotation = (target: UIBase) => {
    target.rotation = target.style.rotation;
}
CSSFunction.skewX = (target: UIBase) => {
    target.skewX = target.style.skewX;
}
CSSFunction.skewY = (target: UIBase) => {
    target.skewY = target.style.skewY;
}

CSSFunction.skewY = (target: UIBase) => {
    target.skewY = target.style.skewY;
}


/** ===================== font  ===================== */
function updateFontStyle(target: Label|TextInput,key: string){
    if(target instanceof Label){
        target.sprite.style[key] = (target.style as TAny)[key];
    }else{
        target.setInputStyle(key, (target.style as TAny)[key]);
    }
    
}
CSSFunction.color = (target: Label|TextInput,key: string) =>{
    if(target instanceof Label){
        target.sprite.style.fill = (target.style as TAny)[key];
    }else{
        target.setInputStyle(key, (target.style as TAny)[key]);
    }
};

CSSFunction.letterSpacing = updateFontStyle;
CSSFunction.wordWrap = updateFontStyle;
CSSFunction.wordWrapWidth = updateFontStyle;
CSSFunction.textAlign = updateFontStyle;
CSSFunction.lineHeight= updateFontStyle;
CSSFunction.fontFamily= updateFontStyle;

CSSFunction.fontStyle= updateFontStyle;
CSSFunction.fontVariant= updateFontStyle;
CSSFunction.fontWeight= updateFontStyle;
CSSFunction.padding= updateFontStyle;
CSSFunction.stroke= updateFontStyle;
CSSFunction.strokeThickness = updateFontStyle;
CSSFunction.dropShadow = updateFontStyle;
CSSFunction.dropShadowAlpha = updateFontStyle;
CSSFunction.dropShadowAngle = updateFontStyle;
CSSFunction.dropShadowBlur = updateFontStyle;
CSSFunction.dropShadowColor = updateFontStyle;
CSSFunction.dropShadowDistance = updateFontStyle;
CSSFunction.breakWords = updateFontStyle;