import { getTexture } from "../core/Utils";
import { UIBase } from "../core/UIBase";

/** ===================== background  ===================== */

export function backgroundColor(uibase: UIBase){

    if(uibase.style == undefined){
        return;
    }
    if(uibase.style.backgroundColor==undefined  && uibase.background == undefined){
        return;
    }
    if (uibase.background === undefined) {
        uibase.background = new PIXI.Graphics();
        uibase.background.name = "background";
        uibase.container.addChildAt(uibase.background, 0);
    }
}

export function backgroundPositionSize(uibase: UIBase){
    if(uibase.style == undefined){
        return;
    }
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

export function backgroundRepeat(uibase: UIBase){
    if(uibase.style == undefined){
        return;
    }
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
            uibase.background.addChild(maskGraphics);
            uibase.background.mask = maskGraphics;
        }
    }
}

export function backgroundImage(uibase: UIBase){
    if (uibase.background === undefined) {
        uibase.background = new PIXI.Graphics();
        uibase.background.name = "background";
        uibase.container.addChildAt(uibase.background, 0);
    }
    backgroundRepeat(uibase);
    backgroundPositionSize(uibase);

}

/** ===================== mask  ===================== */


export function maskPosition(uibase: UIBase){
    if(uibase.style == undefined){
        return;
    }
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

export function maskSize(uibase: UIBase){
    if(uibase.style == undefined){
        return;
    }
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

export function maskImage(uibase: UIBase){
    if(uibase.style == undefined){
        return;
    }
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
    
    maskSize(uibase);
    maskPosition(uibase)

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
