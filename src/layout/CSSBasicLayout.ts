import { DisplayObject } from "../core/DisplayObject";
import * as UIKeys from "../core/DisplayLayoutKeys";

export const $tempRectangle = new PIXI.Rectangle();

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
 * 一个工具方法，使用BasicLayout规则布局目标对象。
 */
export function updateBasicDisplayList(target: DisplayObject|undefined,unscaledWidth: number, unscaledHeight: number){
    if (!target)
        return;
    //console.log(target.container.name);
    const values = target.$values;
    const parentWidth = target.parent?target.parent.$values[UIKeys.width]:1;
    const parentHeight = target.parent?target.parent.$values[UIKeys.height]:1;
    const hCenter = formatRelative(values[UIKeys.horizontalCenter], parentWidth * 0.5);
    const vCenter = formatRelative(values[UIKeys.verticalCenter], parentHeight * 0.5);
    const left = formatRelative(values[UIKeys.left], parentWidth || 1);
    const right = formatRelative(values[UIKeys.right], parentWidth);
    const top = formatRelative(values[UIKeys.top], parentHeight || 1);
    const bottom = formatRelative(values[UIKeys.bottom], parentHeight);

    let childWidth = unscaledWidth;
    let childHeight = unscaledHeight;

    if (!isNaN(left) && !isNaN(right)) {
        childWidth = parentWidth - right - left;
    }

    if (!isNaN(top) && !isNaN(bottom)) {
        childHeight = parentHeight - bottom - top;
    }

    target.setMeasuredSize(childWidth,childHeight);
    target.setActualSize(childWidth,childHeight);
    
    let childX = NaN;
    let childY = NaN;

    if (!isNaN(hCenter))
        childX = Math.round((parentWidth - childWidth) / 2 + hCenter);
    else if (!isNaN(left))
        childX = left;
    else if (!isNaN(right))
        childX = parentWidth - childWidth - right;
    else
        childX = target.x;

    if (!isNaN(vCenter))
        childY = Math.round((parentHeight - childHeight) / 2 + vCenter);
    else if (!isNaN(top))
        childY = top;
    else if (!isNaN(bottom))
        childY = parentHeight - childHeight - bottom;
    else
        childY = target.y;

    target.setPosition(childX, childY);
}