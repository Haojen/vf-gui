import { UIBase } from "../core/UIBase";
import { updateGridLayout } from "./CSSGridLayout";
import { updateBasicDisplayList } from "./CSSBasicLayout";


export function updateDisplayAlign(target: UIBase,targetWidth: number,targetHeight: number,marginTop=0,marginLeft=0){

    if(target.parent == undefined){
        return;
    }
    if(target.style == undefined){
        return;
    }
    let startX = 0;
    let startY = 0;

    switch(target.style.justifyContent){
        case "center":
            startX = target.parent.width - targetWidth >>1 ;
            break;
        case "flex-start":
            startX = marginLeft;
            break;
        case "flex-end":
            startX = target.parent.width - targetWidth - marginLeft;
            break;

    }

    switch(target.style.alignContent){
        case "center":
            startY = target.parent.height - targetHeight >>1 ;
            break;
        case "flex-start":
            startY = marginTop;
            break;
        case "flex-end":
            startY = target.parent.height - targetHeight - marginTop;
            break;

    }
    if(startX!==0) target.x = startX;
    if(startY!==0) target.y = startY;
}

/**
 * 调整目标的元素的大小并定位这些元素。
 */
export function updateDisplayLayout(target: UIBase,unscaledWidth: number, unscaledHeight: number) {

    if(target.style == undefined){
        return;
    }
    if(target.style.display === "block"){
        const pos = updateBasicDisplayList(target,unscaledWidth, unscaledHeight);
        //console.log(pos);
    }else if(target.style.display === "grid"){
        updateGridLayout(target);
    }
    const bounds = target.container.getLocalBounds()
    updateDisplayAlign(target,bounds.width,bounds.height,target.style.gridColumnGap,target.style.gridRowGap);
}

