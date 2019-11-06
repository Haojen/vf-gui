import { UIBase } from "../core/UIBase";
import { Stage } from "../UI";
import { updateBlockLayout } from "./CSSBlockLayout";
import { updateGridLayout } from "./CSSGridLayout";
import { ComponentEvent } from "../interaction/Index";

export const $Rectangle = new PIXI.Rectangle();
/**
 * 布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸
 */


export function formatRelative(value: number | string | undefined, total: number): number {
    if (value == undefined) {
        return NaN;
    }
    if (typeof value === "number") {
        return value;
    }
    const str = value;
    const index = str.indexOf("%");
    if (index == -1) {
        return +str;
    }
    const percent = +str.substring(0, index);
    return percent * 0.01 * total;
}


/**
 * @private
 * 设置组件的布局宽高
 */
export function getLayoutBoundsSize(target: UIBase, layoutWidth: number, layoutHeight: number) {

    let parentHeight = 0;
    let parentWidth = 0;
    if (target.parent instanceof UIBase) {
        parentWidth = target.parent.width;
        parentHeight = target.parent.height;
    } else if (target.parent instanceof Stage) {
        parentWidth = target.parent.width;
        parentHeight = target.parent.height;
    }

    const x = 0;
    const y = 0;
    const maxWidth = formatRelative(target.style.maxWidth,parentWidth);
    const maxHeight = formatRelative(target.style.maxHeight,parentHeight);
    const minWidth = formatRelative(target.style.minWidth,parentWidth);
    const minHeight = formatRelative(target.style.minHeight,parentHeight);
    let width = layoutWidth;
    let height = layoutHeight;

    //min/max sizes
    if (!isNaN(maxWidth) && width > maxWidth) {
        width = maxWidth;
    }
    if (!isNaN(minWidth) && width < minWidth) {
        width = minWidth;
    }

    if (!isNaN(maxHeight) && height > maxHeight) {
        height = maxHeight;
    }
    if (!isNaN(minHeight) && height < minHeight) {
        height = minHeight;
    }

    if(isNaN(width)){
        width = 0;
    }
    if(isNaN(height)){
        height = 0;
    }

    return {width,height,x,y};
}

export function updateDisplayAlign(target: UIBase,targetWidth: number,targetHeight: number,marginTop=0,marginLeft=0){

    if(target.parent == undefined){
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

export function onGridChildChange(gridContainer: UIBase){
    if(gridContainer.isDrawLayout){
        return;
    }
    gridContainer.isDrawLayout = true;
    //^ ^!请原谅我，后期有时间改
    setTimeout(() => {
        updateDisplayLayout(gridContainer);
        gridContainer.isDrawLayout = false;
    }, 5);
}

/**
 * 调整目标的元素的大小并定位这些元素。
 */
export function updateDisplayLayout(target: UIBase) {

    if(target.style.display === "block"){
        updateBlockLayout(target);
    }else if(target.style.display === "grid"){
        updateBlockLayout(target);
        updateGridLayout(target);
        if(target.listeners(ComponentEvent.CHILD_CHANGE).indexOf(onGridChildChange)==-1){
            target.on(ComponentEvent.CHILD_CHANGE,onGridChildChange);
        }
    }
    //^ ^!请原谅我，后期有时间改
    setTimeout(() => {
        const bounds = target.container.getLocalBounds()
        updateDisplayAlign(target,bounds.width,bounds.height,target.style.gridColumnGap,target.style.gridRowGap);
    }, 10);
}

