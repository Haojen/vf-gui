import { UIBase } from "../core/UIBase";
import { CSSStyle } from "./CSSStyle";
import { Stage } from "../UI";
import { updateBlockLayout } from "./CSSBlockLayout";

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
    return {width,height,x,y};
}


/**
 * 调整目标的元素的大小并定位这些元素。
 */
export function updateDisplayList(target: UIBase) {

    if(target.style.display === "block"){
        updateBlockLayout(target);
    }else if(target.style.display === "grid"){
        updateBlockLayout(target);
    }
}

function getColumnRowValue(gridTemplate: number[] | string[] | undefined, parentValue: number) {
    const list: number[] = [0];
    if (gridTemplate) {
        if (gridTemplate[0] === "repeat") {
            for (let i = 0; i < gridTemplate[1]; i++) {
                list.push(formatRelative(gridTemplate[2], parentValue));
            }
        } else {
            for (let i = 0; i < gridTemplate.length; i++) {
                list.push(formatRelative(gridTemplate[i], parentValue));
            }
        }
    }
    return list;
}



export function updateDisplayGridList(component: UIBase) {
    if (component.style.display !== "grid") {
        return;
    }
    if (component.parent == undefined) {
        return;
    }

    const gridColumnGap = component.style.gridColumnGap || 0;
    const gridRowGap = component.style.gridRowGap || 0;

    const columnsWidth = getColumnRowValue(component.style.gridTemplateColumns, component.parent.width);
    const rowsWidth = getColumnRowValue(component.style.gridTemplateRows, component.parent.height);
}