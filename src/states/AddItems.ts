// import IOverride from "./IOverride";
// import { UIComponent, skin } from "../core/UIComponent";

// /**
//  * @private
//  */
// export const enum AddPosition {
//     /**
//      * @private
//      * 添加父级容器的底层
//      */
//     FIRST,
//     /**
//      * @private
//      * 添加在父级容器的顶层
//      */
//     LAST,
//     /**
//      * @private
//      * 添加在相对对象之前
//      */
//     BEFORE,
//     /**
//      * @private
//      * 添加在相对对象之后
//      */
//     AFTER
// }

// /**
//  * 视图添加状态显示元素操作
//  */
// export class AddItems implements IOverride {

//     public constructor(target: string, propertyName: string, position: number, relativeTo: string) {
//         this.target = target;
//         this.propertyName = propertyName;
//         this.position = position;
//         this.relativeTo = relativeTo;
//     }

//     /**
//      * 要添加到的属性
//      */
//     public propertyName: string;

//     /**
//      * 添加的位置，有效值为: "first","last","before","after"
//      */
//     public position: number;

//     /**
//      * 相对的显示元素的实例名
//      */
//     public relativeTo: string;

//     /**
//      * 目标实例名
//      */
//     public target: string;


//     public apply(host: TAny, parent:PIXI.Container): void {
//         let index: number|undefined;
//         let relative: PIXI.DisplayObject = host[this.relativeTo];
//         let target: PIXI.DisplayObject = host[this.target];
//         let container: PIXI.Container = this.propertyName ? host[this.propertyName] : parent;
//         if (!target || !container)
//             return;
//         switch (this.position) {
//             case AddPosition.FIRST:
//                 index = 0;
//                 break;
//             case AddPosition.LAST:
//                 index = -1;
//                 break;
//             case AddPosition.BEFORE:
//                 index = container.getChildIndex(relative);
//                 break;
//             case AddPosition.AFTER:
//                 index = container.getChildIndex(relative) + 1;
//                 break;
//         }
//         if(index!== undefined){
//             if (index == -1) {
//                 index = container.children.length;
//             }
//             if(container instanceof UIComponent){
//                 container.$Component[skin].$elementsContent.push(target);
//             }
//             container.addChildAt(target, index);
//         }

//     }


//     public remove(host: any, parent: PIXI.Container): void {
//         let container:PIXI.Container = this.propertyName ? host[this.propertyName] : parent;
//         let target: PIXI.DisplayObject = host[this.target];
//         if (!target || !container)
//             return;
//         if (target.parent === container) {
//             container.removeChild(target);
//         }
//         if(container instanceof UIComponent){
//             let arr = container.$Component[skin].$elementsContent;
//             let idx = arr.indexOf(target);
//             if (idx > -1) {
//                 arr.splice(idx, 1);
//             }
//         }
//     }
// }