import { UIBase } from "../core/UIBase";
import { CSSStyle } from "./CSSStyle";
import { Stage } from "../UI";


/** 
 * 格式化值（int,%）到组件 
 */
export function formatStyleValue(style:CSSStyle,key: string, parentValue: number) {
    if (style._valuesPct[key]) {
        return  Math.round(style._valuesPct[key] * parentValue);
    } else {
        return (style as any)[key];
    }
}

/**
 * 调整目标的元素的大小并定位这些元素。
 *
 * @param width 指定目标在目标坐标中的宽度（以像素为单位）。
 * @param height 指定组件在目标坐标中的高度（以像素为单位）。
 *
 */
export function updateDisplayList(component: UIBase, _style: CSSStyle) {
    let { container } = component;

    let x = 0;
    let y = 0;

    let parentHeight = 0;
    let parentWidth = 0;
    if (component.parent instanceof UIBase) {
        parentWidth = component.parent.style.width;
        parentHeight = component.parent.style.height;
    } else if (component.parent instanceof Stage) {
        parentWidth = component.parent.width;
        parentHeight = component.parent.height;
    }

    if(_style.position === "fixed"){
        parentWidth = Stage.Ins.width;
        parentHeight = Stage.Ins.height;
    }

    let width = formatStyleValue(_style,"width", parentWidth);
    let minWidth = formatStyleValue(_style,"minWidth", parentWidth);
    let maxWidth = formatStyleValue(_style,"maxWidth", parentWidth);

    let height = formatStyleValue(_style,"height", parentHeight);
    let minHeight = formatStyleValue(_style,"minHeight", parentHeight);
    let maxHeight = formatStyleValue(_style,"maxHeight", parentHeight);

    let left = formatStyleValue(_style,"left", parentWidth);
    let top = formatStyleValue(_style,"top", parentHeight);
    let right = formatStyleValue(_style,"right", parentWidth);
    let bottom = formatStyleValue(_style,"bottom", parentHeight);

    if (_style.display === "block") {
        if (_style.position === "absolute") {

            let bounds = getChildBoundsSize(left, right, top, bottom,width,height, parentWidth, parentHeight, maxWidth, minWidth, maxHeight, minHeight);
            width = bounds.width;
            height = bounds.height;
            x = bounds.x;
            y = bounds.y;

        } else if (_style.position === "fixed") {//fixed

            let bounds = getChildBoundsSize(left, right, top, bottom,width,height, Stage.Ins.width, Stage.Ins.height, maxWidth, minWidth, maxHeight, minHeight);
            width = bounds.width;
            height = bounds.height;
            x = bounds.x;
            y = bounds.y;
            
            let globalPosition = container.toLocal(new PIXI.Point(x, y));
            x = globalPosition.x;
            y = globalPosition.y;
        } else {
            x = left;
            y = top;
        }
    } else {//style.display = grid

    }

    //后期优化，可以放到外面，赋值时，调整一次即可
    if (_style.pivotX || _style.pivotY) {
        container.children.forEach(value => {
            value.x = -_style.pivotX * width;
            value.y = -_style.pivotY * height;
        });
    }

    //make pixel perfect
    if (component.pixelPerfect) {
        width = Math.round(width);
        height = Math.round(height);
        x = Math.round(x);
        y = Math.round(y);
    }

    container.alpha = _style.alpha;
    container.visible = _style.visibility === "hidden" ? false : true;

    if (_style.zIndex !== -1) {
        if (component.parent) {
            component.parent.container.sortableChildren = true;
            container.zIndex = _style.zIndex;
        }
    }
    component.width = width;
    component.height = height;
    container.setTransform(x, y, _style.scaleX, _style.scaleY, _style.rotate, _style.skewX, _style.skewY);

}

/** 计算节点的宽高位置 */
export function getChildBoundsSize(
    left: number, right: number, top: number, bottom: number,
    width: number, height: number,parentWidth:number,parentHeight:number,
    maxWidth: number, minWidth: number, maxHeight: number, minHeight: number
) {
    let x = 0;
    let y = 0;
    
    if (left !== undefined && right !== undefined) {
        width = parentWidth - right - left;
    }
    if (top !== undefined && bottom !== undefined) {
        height = parentHeight - bottom - top;
    }
    //min/max sizes
    if (maxWidth !== undefined && width > maxWidth) {
        width = maxWidth;
    }
    if (minWidth !== undefined && width < minWidth) {
        width = minWidth;
    }

    if (maxHeight !== undefined && height > maxHeight) {
        height = maxHeight;
    }
    if (minHeight !== undefined && height < minHeight) {
        height = minHeight;
    }

    if (left !== undefined)
        x = left;
    else if (right !== undefined)
        x = parentWidth - width - right;

    if (top !== undefined)
        y = top;
    else if (bottom !== undefined)
        y = parentHeight - height - bottom;

    return { width, height,x,y };
}
