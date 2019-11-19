import { getTexture } from "../utils/Utils";
import { DisplayObject } from "../core/DisplayObject";

/** ===================== background  ===================== */

export function backgroundColor(target: DisplayObject){

    if(target.style == undefined){
        return;
    }
    if(target.style.backgroundColor==undefined  && target.background == undefined){
        return;
    }
    if (target.background === undefined) {
        target.background = new PIXI.Graphics();
        target.background.name = "background";
        target.container.addChildAt(target.background, 0);
    }
}

export function backgroundPositionSize(target: DisplayObject){
    if(target.style == undefined){
        return;
    }
    if (target.background && target.background.children.length > 0) {
        const sprite = target.background.getChildAt(0) as PIXI.Sprite;
        const style = target.style;
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

export function backgroundRepeat(target: DisplayObject){
    if(target.style == undefined){
        return;
    }
    const style = target.style;
    if (style.backgroundImage && target.background) {
        target.background.removeChildren();

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

            target.background.addChild(sprite);
            const maskGraphics = new PIXI.Graphics();
            target.background.addChild(maskGraphics);
            target.background.mask = maskGraphics;
        }
    }
}

export function backgroundImage(target: DisplayObject){
    if (target.background === undefined) {
        target.background = new PIXI.Graphics();
        target.background.name = "background";
        target.container.addChildAt(target.background, 0);
    }
    backgroundRepeat(target);
    backgroundPositionSize(target);

}

/** ===================== mask  ===================== */


export function maskPosition(target: DisplayObject){
    if(target.style == undefined){
        return;
    }
    if(target.mask){
        const style = target.style;
        if(style.maskPosition === undefined){
            return;
        }
        
        if(target.mask instanceof DisplayObject){
            target.mask.x = style.maskPosition[0];
            target.mask.y =  style.maskPosition[1];
        }else{
            target.mask.position.set(style.maskPosition[0],style.maskPosition[1])
        }
    }
}

export function maskSize(target: DisplayObject){
    if(target.style == undefined){
        return;
    }
    if(target.mask){
        const style = target.style;
        if(style.maskSize === undefined){
            return;
        }

        target.mask.width = style.maskSize[0];
        target.mask.height = style.maskSize[1];
        if(!(target.mask instanceof DisplayObject))
            target.mask.updateTransform();
    }
}

export function maskImage(target: DisplayObject){
    if(target.style == undefined){
        return;
    }
    target.container.mask = null;
    if (target.mask && target.mask.parent) {
        if (target.mask instanceof DisplayObject) {
            target.removeChild(target.mask);
        } else {
            target.mask.parent.removeChild(target.mask);
        }
    }

    for (let i = 0; i < target.uiChildren.length; i++) {
        if (target.uiChildren[i].name == "maskImage") {
            target.removeChild(target.uiChildren[i]);
            break;
        }
    }

    target.mask = undefined;
    const style = target.style;
    const container = target.container;

    if (style.maskImage instanceof PIXI.Graphics) {
        target.mask = style.maskImage;
        container.mask = target.mask;
        container.addChild(target.mask);
    } else if (style.maskImage instanceof DisplayObject) {
        //后期组件完成后补充，矢量与位图组件
        target.mask = style.maskImage;
        target.mask.name = "maskImage";
        target.mask.container.name = "maskImage";
        container.mask = (target.mask.container as TAny) || null;
        target.addChild(target.mask);
    } else {
        target.mask = PIXI.Sprite.from(getTexture(style.maskImage));
        container.mask = target.mask;
        container.addChild(target.mask);
    }
    
    maskSize(target);
    maskPosition(target)

}


/** ===================== font  ===================== */
export function updateFontStyle(target: TAny,key: string,value: TAny){
    if(target.setInputStyle){
        target.setInputStyle(key, value);
    }else{
        target.sprite.style[key] =value;
    } 
}
export function color(target: TAny,key: string,value: TAny){
    if(target.setInputStyle){
        target.setInputStyle(key, value);
    }else{
        target.sprite.style.fill =value;
    }
}
