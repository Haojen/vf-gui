import { DisplayObject } from "../core/DisplayObject";
import { formatRelative } from "../utils/Utils";
import { $tempRectangle } from "./CSSBasicLayout";

function getColumnRowValue(gridTemplate: number[] | string[] | [string, number, number] | undefined, parentValue: number) {
    const list: number[] = [];
    let isInfinity = false;
    if (gridTemplate) {
        if (gridTemplate[0] === "repeat") {
            if (gridTemplate[1] === Infinity) {
                isInfinity = true;
                list.push(formatRelative(0, parentValue));
            } else {
                for (let i = 0; i < gridTemplate[1]; i++) {
                    list.push(formatRelative(gridTemplate[2], parentValue));
                }
            }
        } else {
            for (let i = 0; i < gridTemplate.length; i++) {
                list.push(formatRelative(gridTemplate[i], parentValue));
            }
        }
    }
    return { list, isInfinity };
}

/**
 *  更新网格布局
 * 
 * 单位目前只支持数值或百分比：100 ，”100%“
 * 
 *  网格布局中，子容器的位置与宽高可能失效
 * 
 * 关于grid布局的词汇表
 * 
 * 格网 https://developer.mozilla.org/zh-CN/docs/Glossary/Grid
 * 
 * 网格行 gridTemplateRows https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns
 * 
 * 网格列 gridTemplateColumns https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows
 * 
 * 网格行间距 gridRowGap   https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-gap
 * 
 * 网格列间距 gridColumnGap  https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column-gap
 * 
 * 网格轴 （未实现） 支持居中方式为：justifyContent，alignContent
 * 
 * 网格线（未实现） https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines
 * 
 * 网格面积（未实现）https://developer.mozilla.org/zh-CN/docs/Glossary/Grid_Areas
 */
export function updateGridLayout(target: DisplayObject) {

    if (target.parent == undefined) {
        return $tempRectangle;
    }
    if (target.style == undefined) {
        return $tempRectangle;
    }


    let rowHeightTotal = 0;
    let columnWidthTotal = 0;

    const style = target.style;

    const gridColumnGap = style.gridColumnGap || 0;
    const gridRowGap = style.gridRowGap || 0;

    const column = getColumnRowValue(style.gridTemplateColumns, target.parent.width);
    const row = getColumnRowValue(style.gridTemplateRows, target.parent.height);



    let child: DisplayObject;

    let cloumnIndex = 0;
    let rowIndex = 0;

    let cloumnWidth = 0;
    let rowHeight = 0;

    let widthTotal = 0;
    for (let i = 0; i < target.uiChildren.length; i++) {
        child = target.uiChildren[i] as DisplayObject;
        if (child.style.justifyContent || child.style.alignContent) {
            continue;
        }
        if (column.isInfinity) {
            cloumnWidth = column.list[0] || 0;
        } else {
            cloumnWidth = column.list[cloumnIndex] || 0;
        }

        if (row.isInfinity) {
            rowHeight = row.list[0] || 0;
        } else {
            rowHeight = row.list[rowIndex] || 0;
        }

        child.width = child.explicitWidth || cloumnWidth;
        child.height = child.explicitHeight || rowHeight;

        child.x = widthTotal;
        child.y = rowHeightTotal;

        widthTotal += cloumnWidth + gridColumnGap;
        cloumnIndex++;
        if (widthTotal > columnWidthTotal) {
            columnWidthTotal = widthTotal;
        }
        if (cloumnIndex >= column.list.length) {
            cloumnIndex = 0;
            widthTotal = 0;
            if (rowHeight !== 0) {
                rowHeightTotal += (rowHeight + gridRowGap);
            } else {
                rowHeightTotal += (child.height + gridRowGap);
            }
            if (!column.isInfinity)
                rowIndex++;
        }
    }
    columnWidthTotal = Math.max(target.width, columnWidthTotal - gridColumnGap);
    rowHeightTotal = Math.max(target.height, rowHeightTotal - gridRowGap);

    target.width = columnWidthTotal
    target.height = rowHeightTotal
    $tempRectangle.width = columnWidthTotal;
    $tempRectangle.height = rowHeightTotal;
    return $tempRectangle;

}

