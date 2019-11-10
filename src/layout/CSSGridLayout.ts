import { UIBase } from "../core/UIBase";
import { formatRelative } from "../core/Utils";

function getColumnRowValue(gridTemplate: number[] | string[] | [string,number,number] |undefined, parentValue: number) {
    const list: number[] = [];
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
export function updateGridLayout(target: UIBase): void {

    if (target.parent == undefined) {
        return;
    }
    if (target.style == undefined) {
        return;
    }
    const style = target.style;

    const gridColumnGap = style.gridColumnGap || 0;
    const gridRowGap = style.gridRowGap || 0;

    const column = getColumnRowValue(style.gridTemplateColumns, target.parent.width);
    const row = getColumnRowValue(style.gridTemplateRows, target.parent.height);

    let child: UIBase;

    let cloumnIndex = 0;
    let rowIndex = 0;

    let cloumnWidth = 0;
    let rowHeight = 0;

    let heightTotal = 0;
    let widthTotal = 0;

    for(let i=0;i<target.uiChildren.length;i++){
        child = target.uiChildren[i] as UIBase;

        cloumnWidth =  column[cloumnIndex] || 0;
        rowHeight = row[rowIndex] || 0;

        child.width = child.width || cloumnWidth;
        child.height = child.height || rowHeight;

        child.x = widthTotal;
        child.y = heightTotal;

        widthTotal +=  (cloumnWidth || child.width) + gridColumnGap;
        cloumnIndex++;
        if(cloumnIndex >= column.length){
            cloumnIndex = 0;
            widthTotal = 0;
            if(rowHeight!==0){
                heightTotal += (rowHeight+gridRowGap);
            }else{
                heightTotal += (child.height + gridRowGap);
            }
            rowIndex++;
        }
        
    }
   
}

