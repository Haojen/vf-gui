import { UIBase } from "../core/UIBase";
import { formatRelative, getLayoutBoundsSize } from "./CSSLayout";
import { Stage } from "../core/Stage";

/**
 * CSSBlockLayout 类根据其各个设置彼此独立地排列布局元素。要求显式定位每个容器子代。
 * 可以使用子代的x,y 属性，或使用约束来定位每个子代。
 */

export function updateBlockLayout(target: UIBase): void {

    if(target.parent == undefined){
        return;
    }
    
    const style = target.style;

    let maxX = 0;
    let maxY = 0;

    let unscaledWidth = target.parent.width;
    let unscaledHeight = target.parent.height;

    if (style.position === "fixed") {
        unscaledWidth = Stage.Ins.width;
        unscaledHeight = Stage.Ins.height;
    }
    
    const hCenter = formatRelative(style.hCenter, unscaledWidth * 0.5);
    const vCenter = formatRelative(style.vCenter, unscaledHeight * 0.5);
    const left = formatRelative(style.left, unscaledWidth);
    const right = formatRelative(style.right, unscaledWidth);
    const top = formatRelative(style.top, unscaledHeight);
    const bottom = formatRelative(style.bottom, unscaledHeight);
    const percentWidth = formatRelative(style.width, unscaledWidth);
    const percentHeight =formatRelative(style.height, unscaledHeight);

    let childWidth = NaN;
    let childHeight = NaN;

    if (!isNaN(left) && !isNaN(right)) {
        childWidth = unscaledWidth - right - left;
    }
    else if (percentWidth!==0) {
        childWidth = percentWidth;
    }

    if (!isNaN(top) && !isNaN(bottom)) {
        childHeight = unscaledHeight - bottom - top;
    }
    else if (percentHeight!=0) {
        childHeight = percentHeight;
    }

    const bounds  = getLayoutBoundsSize(target,childWidth, childHeight);

    let elementWidth = bounds.width;
    let elementHeight = bounds.height;

    let childX = NaN;
    let childY = NaN;

    if (!isNaN(hCenter))
        childX = Math.round((unscaledWidth - elementWidth) / 2 + hCenter);
    else if (!isNaN(left))
        childX = left;
    else if (!isNaN(right))
        childX = unscaledWidth - elementWidth - right;
    else
        childX = bounds.x;

    if (!isNaN(vCenter))
        childY = Math.round((unscaledHeight - elementHeight) / 2 + vCenter);
    else if (!isNaN(top))
        childY = top;
    else if (!isNaN(bottom))
        childY = unscaledHeight - elementHeight - bottom;
    else
        childY = bounds.y;

    if (style.position === "fixed") {
        const globalPosition = target.container.toLocal(new PIXI.Point(childY, childY));
        childY = globalPosition.x;
        childY = globalPosition.y;
    }
    //make pixel perfect
    if (target.pixelPerfect) {
        elementWidth = Math.round(elementWidth);
        elementHeight = Math.round(elementHeight);
        childX = Math.round(childX);
        childY = Math.round(childY);
    }

    bounds.x = childX;
    bounds.y = childY;
    maxX = Math.max(maxX, childX + elementWidth);
    maxY = Math.max(maxY, childY + elementHeight);

    target.width = bounds.width;
    target.height = bounds.height;
    target.x = bounds.x;
    target.y = bounds.y;
}
