import { DisplayObject } from "../core/DisplayObject";
import { updateGridLayout } from "./CSSGridLayout";
import { updateBasicDisplayList } from "./CSSBasicLayout";

export const $TempRectangle = new PIXI.Rectangle();

function updateDisplayAlign(target: DisplayObject,parentWidth: number,parentHeight: number,marginTop=0,marginLeft=0){


    if(target.style == undefined){
        return;
    }
    if (target.style.justifyContent == undefined && target.style.alignContent == undefined) {
        return
    }
    let startX = 0;
    let startY = 0;
    const bounds = target.getPreferredBounds($TempRectangle);

    switch(target.style.justifyContent){
        case "center":
            startX = parentWidth - bounds.width >>1 ;
            break;
        case "flex-start":
            startX = marginLeft;
            break;
        case "flex-end":
            startX = parentWidth - bounds.width - (marginLeft);
            break;

    }

    switch(target.style.alignContent){
        case "center":
            startY = parentHeight - bounds.height >>1 ;
            break;
        case "flex-start":
            startY = marginTop;
            break;
        case "flex-end":
            startY = parentHeight - bounds.height - (marginTop);
            break;

    }
    if(startX!==0) target.x = startX;
    if(startY!==0) target.y = startY;
}


/**
 * 调整目标的元素的大小并定位这些元素。
 */
export function updateDisplayLayout(target: DisplayObject,unscaledWidth: number, unscaledHeight: number) {

    if(target.style == undefined){
        return;
    }
    if(target.style.display === "block"){
        const pos = updateBasicDisplayList(target,unscaledWidth, unscaledHeight);
        //console.log(pos);
    }else if(target.style.display === "grid"){
        const size = updateGridLayout(target);
        updateBasicDisplayList(target,size.width, size.height);
    }
    
    if(target.parent){
        updateDisplayAlign(target,target.parent.width,target.parent.height,target.style.gridRowGap,target.style.gridColumnGap);
    }

    if(target.isContainer){
        
        const bounds = target.getPreferredBounds($TempRectangle);
        let child: DisplayObject;
        for(let i = 0;i<target.uiChildren.length;i++){
            child = target.uiChildren[i] as DisplayObject;
            updateDisplayAlign(child,bounds.width,bounds.height,child.style.gridRowGap,child.style.gridColumnGap);  
        }
        
    }

}

