import { UIBase } from "../core/UIBase";
import { updateGridLayout } from "./CSSGridLayout";
import { updateBasicDisplayList } from "./CSSBasicLayout";

export const $TempRectangle = new PIXI.Rectangle();

export function updateDisplayAlign(target: UIBase,parentWidth: number,parentHeight: number,marginTop=0,marginLeft=0){


    if(target.style == undefined){
        return;
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
            startX = parentWidth - bounds.width - marginLeft;
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
            startY = parentHeight - bounds.height - marginTop;
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
    
    if(target.isContainer){
        
        if (target.style.justifyContent || target.style.alignContent) {
            if(target.parent)
                updateDisplayAlign(target,target.parent.width,target.parent.height,target.style.gridColumnGap,target.style.gridRowGap);
        }
        const bounds = target.getPreferredBounds($TempRectangle);
        let child:UIBase;
        for(let i = 0;i<target.uiChildren.length;i++){
            child = target.uiChildren[i] as UIBase;
            updateDisplayAlign(child,bounds.width,bounds.height,child.style.gridColumnGap,child.style.gridRowGap);  
        }
        
    }

}

