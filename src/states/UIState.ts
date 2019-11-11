// import IOverride from "./IOverride";
// import { Stage } from "../core/Stage";
// import { AddItems } from "./AddItems";
// import { Image } from "../c/Image";

// /**
//  * State 类定义视图状态，即组件的特定视图。
//  *
//  * 例如，产品缩略图可以有两个视图状态，包含最少信息的基本视图状态和包含附加信息的丰富视图状态。
//  *
//  */
// export class UIState {

//     /**
//      * 创建一个State实例。
//      *
//      * @param name 视图状态的名称。给定组件的状态名称必须唯一。必须设置此属性。
//      * @param overrides 该视图状态的覆盖，表现为实现 IOverride 接口的对象的数组。
//      * 这些覆盖在进入状态时按顺序应用，在退出状态时按相反的顺序删除。
//      * 
//      */
//     public constructor(name: string, overrides: IOverride[] = []) {
//         this.name = name;
//         this.overrides = overrides;
//     }

//     /**
//      * 视图状态的名称。给定组件的状态名称必须唯一。必须设置此属性。
//      */
//     public name: string;

//     /**
//      * 该视图状态的覆盖，表现为实现 IOverride 接口的对象的数组。
//      * 这些覆盖在进入状态时按顺序应用，在退出状态时按相反的顺序删除。
//      */
//     public overrides: IOverride[];

//     /**
//      * 此视图状态作为 string 数组所属的状态组。
//      */
//     public stateGroups?: string[];

//     /**
//      * 初始化视图状态
//      */
//     public initialize(host: any, stage: Stage): void {
//         let overrides = this.overrides;
//         let length = overrides.length;
//         for (let i = 0; i < length; i++) {
//             let addItems: AddItems = <AddItems>overrides[i];
//             if (addItems instanceof AddItems) {
//                 let target: PIXI.DisplayObject = host[addItems.target];
//                 if (target && target instanceof Image && !target.parent) {
//                     stage.addChild(target);
//                     stage.removeChild(target);
//                 }
//             }
//         }
//     }
// }
