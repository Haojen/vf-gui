// import { Container } from "../../c/Container";

//     /**
//      * 容器布局基类。若要创建使用 Container 容器的自定义布局，必须扩展 LayoutBase 或其子类之一。
//      *
//      * 子类必须实现 updateDisplayList() 方法
//      * （定位 target - Container 的子项并调整这些子项的大小）和 measure() 方法
//      * 
//      * （计算 target 的默认大小）。
//      */
//     export class CSSLayoutBase extends PIXI.utils.EventEmitter {


//         public constructor() {
//             super();
//         }

//         /**
//          * @private
//          */
//         $target?:Container;

//         /**
//          * 此布局将测量其元素、调整其元素的大小并定位其元素的 Container 容器。
//          *
//          */
//         public get target() {
//             return this.$target;
//         }

//         public set target(value) {
//             if (this.$target === value)
//                 return;
//             this.$target = value;
//             this.clearVirtualLayoutCache();
//         }


//         /**
//          * @private
//          */
//         $useVirtualLayout:boolean = false;

//         /**
//          * 
//          * 若要配置容器使用虚拟布局，请为与容器关联的布局的 useVirtualLayout 属性设置为 true。
//          * 
//          * 只有布局设置为 VerticalLayout、HorizontalLayout 或 TileLayout 的 DataGroup 才支持虚拟布局。
//          * 
//          * 不支持虚拟化的布局子类必须禁止更改此属性。
//          *
//          * @default false
//          *
//          */
//         public get useVirtualLayout():boolean {
//             return this.$useVirtualLayout;
//         }

//         public set useVirtualLayout(value:boolean) {
//             value = !!value;
//             if (this.$useVirtualLayout == value)
//                 return;

//             this.$useVirtualLayout = value;
//             //this.emit("useVirtualLayoutChanged")
//             if (this.$useVirtualLayout && !value)
//                 this.clearVirtualLayoutCache();
//             if (this.target)
//                 this.target.invalidateDisplayList();
//         }

//         /**
//          * @private
//          */
//         $typicalWidth:number = 71;
//         /**
//          * @private
//          */
//         $typicalHeight:number = 22;

//         /**
//          * 设置一个典型元素的大小
//          *
//          * @param width 元素的宽
//          * @param height 元素的高
//          */
//         public setTypicalSize(width:number, height:number):void {
//             width = +width || 71;
//             height = +height || 22;
//             if (width !== this.$typicalWidth || height !== this.$typicalHeight) {
//                 this.$typicalWidth = width;
//                 this.$typicalHeight = height;
//                 if (this.$target) {
//                     this.$target.invalidateSize();
//                 }
//             }
//         }

//         /**
//          * verticalScrollPosition 或 horizontalScrollPosition
//          * 属性更改时调用。
//          *
//          */
//         public scrollPositionChanged():void {
//         }

//         /**
//          * 如果 useVirtualLayout 为 true，
//          * 则当布局目标改变时，布局目标可以使用此方法来清除已缓存布局信息。
//          *
//          */
//         public clearVirtualLayoutCache():void {
//         }


//         /**
//          * 在已添加布局元素之后且在验证目标的大小和显示列表之前，由目标调用。
//          * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
//          *
//          * @param index 发生改变的子项索引
//          */
//         public elementAdded(index:number):void {
//         }

//         /**
//          *
//          * 必须在已删除布局元素之后且在验证目标的大小和显示列表之前，由目标调用此方法。
//          * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
//          *
//          * @param index 发生改变的子项索引
//          */
//         public elementRemoved(index:number):void {
//         }

//         /**
//          * 基于目标的内容测量其默认大小
//          *
//          */
//         public measure():void {
//         }

//         /**
//          * 调整目标的元素的大小并定位这些元素。
//          *
//          * @param unscaledWidth 指定目标在目标坐标中的宽度（以像素为单位）。
//          * @param unscaledHeight 指定组件在目标坐标中的高度（以像素为单位）。
//          *
//          */
//         public updateDisplayList(width:number, height:number):void {
//         }
//     }
