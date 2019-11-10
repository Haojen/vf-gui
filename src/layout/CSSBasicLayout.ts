import { UIBase } from "../core/UIBase";
import * as UIKeys from "../core/UIKeys";

/**
 * BasicLayout 类根据其各个设置彼此独立地排列布局元素。
 * BasicLayout（也称为绝对布局）要求显式定位每个容器子代。
 * 可以使用子代的 x 和 y 属性，或使用约束来定位每个子代。
 *
 */
// export class CSSBasicLayout extends CSSLayoutBase {

//     public constructor() {
//         super();
//     }


//     public measure(): void {
//         super.measure();
//         measure(this.$target);
//     }


//     public updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
//         super.updateDisplayList(unscaledWidth, unscaledHeight);
//         const pos = updateDisplayList(this.$target, unscaledWidth, unscaledHeight);
//         //if(pos)
//         //    this.$target.setContentSize(Math.ceil(pos.x), Math.ceil(pos.y));
//     }
// }


export const $TempRectangle = new PIXI.Rectangle();
export const $TempPoint = new PIXI.Point();
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
export function getLayoutBoundsSize(target: UIBase,rectangle: PIXI.Rectangle, layoutWidth: number, layoutHeight: number) {

    if(target.parent == undefined){
        rectangle.width = NaN;
        rectangle.height = NaN;
        return rectangle;
    }
    const parentHeight =target.parent.width;
    const parentWidth = target.parent.height;

    rectangle.width = layoutWidth;
    rectangle.height = layoutHeight;

    const values = target.$values;

    const maxWidth = formatRelative(values[UIKeys.maxWidth],parentWidth);
    const maxHeight = formatRelative(values[UIKeys.maxHeight],parentHeight);
    const minWidth = formatRelative(values[UIKeys.minWidth],parentWidth);
    const minHeight = formatRelative(values[UIKeys.minHeight],parentHeight);

    //min/max sizes
    if (!isNaN(maxWidth) && rectangle.width > maxWidth) {
        rectangle.width = maxWidth;
    }
    if (!isNaN(minWidth) && rectangle.width < minWidth) {
        rectangle.width = minWidth;
    }

    if (!isNaN(maxHeight) && rectangle.height > maxHeight) {
        rectangle.height = maxHeight;
    }
    if (!isNaN(minHeight) && rectangle.height < minHeight) {
        rectangle.height = minHeight;
    }

    if(isNaN(rectangle.width)){
        rectangle.width = 0;
    }
    if(isNaN(rectangle.height)){
        rectangle.height = 0;
    }

    return rectangle;
}


/**
 * @private
 * 一个工具方法，使用BasicLayout规则测量目标对象。
 */
export function measure(target?: UIBase): void {
    if (!target) {
        return;
    }
    let width = 0;
    let height = 0;
    const bounds = $TempRectangle;
    const count = target.uiChildren.length;
    for (let i = 0; i < count; i++) {
        const layoutElement =target.getChildAt(i) as UIBase;
        if (!(layoutElement instanceof UIBase) || !layoutElement.includeInLayout) {
            continue;
        }

        const values = layoutElement.$values;
        const hCenter = +values[UIKeys.horizontalCenter];
        const vCenter = +values[UIKeys.verticalCenter];
        const left = +values[UIKeys.left];
        const right = +values[UIKeys.right];
        const top = +values[UIKeys.top];
        const bottom = +values[UIKeys.bottom];

        layoutElement.getPreferredBounds(bounds);

        let extX: number;
        let extY: number;   

        if (!isNaN(left) && !isNaN(right)) {
            extX = left + right;
        }
        else if (!isNaN(hCenter)) {
            extX = Math.abs(hCenter) * 2;
        }
        else if (!isNaN(left) || !isNaN(right)) {
            extX = isNaN(left) ? 0 : left;
            extX += isNaN(right) ? 0 : right;
        }
        else {
            extX = bounds.x;
        }

        if (!isNaN(top) && !isNaN(bottom)) {
            extY = top + bottom;
        }
        else if (!isNaN(vCenter)) {
            extY = Math.abs(vCenter) * 2;
        }
        else if (!isNaN(top) || !isNaN(bottom)) {
            extY = isNaN(top) ? 0 : top;
            extY += isNaN(bottom) ? 0 : bottom;
        }
        else {
            extY = bounds.y;
        }

        const preferredWidth = bounds.width;
        const preferredHeight = bounds.height;
        width = Math.ceil(Math.max(width, extX + preferredWidth));
        height = Math.ceil(Math.max(height, extY + preferredHeight));
    }

    target.setMeasuredSize(width, height);
}

/**
 * @private
 * 一个工具方法，使用BasicLayout规则布局目标对象。
 */
export function updateBasicDisplayList(target: UIBase|undefined,unscaledWidth: number, unscaledHeight: number){
    if (!target)
        return;
    //console.log(target.container.name);
    const values = target.$values;
    const parentWidth = target.parent?target.parent.$values[UIKeys.width]:1;
    const parentHeight = target.parent?target.parent.$values[UIKeys.height]:1;
    const hCenter = formatRelative(values[UIKeys.horizontalCenter], parentWidth * 0.5);
    const vCenter = formatRelative(values[UIKeys.verticalCenter], parentHeight * 0.5);
    const left = formatRelative(values[UIKeys.left], parentWidth);
    const right = formatRelative(values[UIKeys.right], parentWidth);
    const top = formatRelative(values[UIKeys.top], parentHeight);
    const bottom = formatRelative(values[UIKeys.bottom], parentHeight);

    let childWidth = unscaledWidth;
    let childHeight = unscaledHeight;

    if (!isNaN(left) && !isNaN(right)) {
        childWidth = parentWidth - right - left;
    }

    if (!isNaN(top) && !isNaN(bottom)) {
        childHeight = parentHeight - bottom - top;
    }

    target.setActualSize(childWidth,childHeight)
    
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