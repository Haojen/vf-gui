
// class Prop<T>{

//     public constructor(id: number,onValueChange: (id: number,value: T|undefined) => void,dirtyList: number[],value?: T){
//         this.id = id;
//         this.onValueChange = onValueChange;
//         this.dirtyList = dirtyList;
//         if(value){
//             this._value = value;
//         }
//     }
//     public id = 0;
//     public index = 0;
//     public dirty = false;
//     public onValueChange: (id: number,value: T|undefined) => void;
//     public lastValue: T|undefined;
//     public dirtyList: number[];

//     private _value: T|undefined;
//     public get value(): T | undefined {
//         return this._value;
//     }
//     public set value(value: T | undefined) {
//         this.dirty = true;
//         this.lastValue = this._value;
//         this._value = value;
//         if(this.dirtyList.indexOf(this.index)!==-1){
//             this.dirtyList.push(this.index);
//         }
//         this.onValueChange(this.id,value);
//     }
// }

// export class TypeClass extends PIXI.utils.EventEmitter {
//     private list: Prop<number|string|boolean|undefined>[] = [];
//     private dirtyList: number[] = [];

//     public constructor(){
//         super();
//         this.add(Type.width,0);
//         this.add(Type.height,0);
//         this.add(Type.minHeight,0);
//         this.add(Type.maxWidth,0);
//         this.add(Type.maxHeight,0);
//         this.add(Type.left,0);
//         this.add(Type.right,0);
//         this.add(Type.top,0);
//         this.add(Type.bottom,0);
//         this.add(Type.anchorLeft,0);
//         this.add(Type.anchorRight,0);
//         this.add(Type.anchorTop,0);
//         this.add(Type.anchorBottom,0);
//         this.add(Type.widthPct,0);
//         this.add(Type.heightPct,0);
//         this.add(Type.minHeightPct,0);
//         this.add(Type.minWidthPct,0);
//         this.add(Type.maxWidthPct,0);
//         this.add(Type.maxHeightPct,0);
//         this.add(Type.minWidth,0);
//         this.add(Type.leftPct,0);
//         this.add(Type.rightPct,0);
//         this.add(Type.topPct,0);
//         this.add(Type.bottomPct,0);
//         this.add(Type.anchorLeftPct,0);
//         this.add(Type.anchorRightPct,0);
//         this.add(Type.anchorTopPct,0);
//         this.add(Type.anchorBottomPct,0);
//         this.add(Type.pivotX,0);
//         this.add(Type.pivotY,0);
//         this.add(Type.scaleX,0);
//         this.add(Type.scaleY,0);
//         this.add(Type.verticalAlign,0);
//         this.add(Type.horizontalAlign,0);
//         this.add(Type.rotation,0);
//         this.add(Type.angle,0);
//         this.add(Type.blendMode,0);
//         this.add(Type.alpha,0);
//         this.add(Type.draggable,0);
//         this.add(Type.dragRestricted,0);
//         this.add(Type.dragRestrictAxis,0);
//         this.add(Type.dragThreshold,0);
//         this.add(Type.dragGroup,0);
//         this.add(Type.dragContainer,0);
//         this.add(Type.droppable,0);
//         this.add(Type.droppableReparent,0);
//         this.add(Type.dropGroup,0);    
//     }
//     private add(id: number,value: number){
//         const obj = new Prop<number|string|boolean|undefined>(id,this.onValueChange,this.dirtyList,value);
//         this.list.push(obj);
//     }
//     public setVal(id: number,value: number){
//         return this.list[id].value = value;
//     }
//     public getVal(id: number){
//         return this.list[id].value;
//     }

//     private  onValueChange<T>(id: number,value: T|undefined){
//         this.emit("valueChange",id,value);
//     }

//     public addValueChangeEvent(fn: Function,thisOBj: TAny){
//         this.on("valueChange",fn,this);
//     }

// }
// export const enum Type{
//     /** 宽度 */
//     width,
//     /** 高度 */
//     height,
//     /** 最小高度 */
//     minHeight,
//     /** 最大宽度 */
//     maxWidth,
//     /** 最大高度 */
//     maxHeight,
//     /** 距离父容器的左边距 */
//     left,
//     /** 距离父容器的右边距 */
//     right,
//     /** 距离父容器的顶边距 */
//     top,
//     /** 距离父容器的底边距 */
//     bottom,
//     /** 锚点距离父容器的左边距（0-1） */
//     anchorLeft,
//     /** 锚点距离父容器的右边距（0-1） */
//     anchorRight,
//     /** 锚点距离父容器的上边距（0-1） */
//     anchorTop,
//     /** 锚点距离父容器的底边距（0-1） */
//     anchorBottom,
//     /** 宽度百分比 */
//     widthPct,
//     /** 高度百分比 */
//     heightPct,
//     /** 最小宽度百分比 */
//     minWidthPct,
//     /** 最小高度百分比 */
//     minHeightPct,
//     /** 最大宽度百分比 */
//     maxWidthPct,
//     /** 最大高度百分比 */
//     maxHeightPct,
//     /** 宽度百分比 */
//     minWidth,
//     /** 距离父容器的左边距百分比 */
//     leftPct,
//     /** 距离父容器的右边距百分比 */
//     rightPct,
//     /** 距离父容器的顶边距百分比 */
//     topPct,
//     /** 距离父容器的底边距百分比 */
//     bottomPct,
//     /** 锚点距离父容器的左边距百分比 */
//     anchorLeftPct,
//     /** 锚点距离父容器的右边距百分比 */
//     anchorRightPct,
//     /** 锚点距离父容器的顶边距百分比 */
//     anchorTopPct,
//     /** 锚点距离父容器的底边距百分比 */
//     anchorBottomPct,
//     /** 锚点X的像素表示法 */
//     pivotX,
//     /** 锚点Y的像素表示法 */
//     pivotY,
//     /** X轴缩放 */
//     scaleX,
//     /** Y轴缩放 */
//     scaleY,
//     /** 垂直布局 */
//     verticalAlign,
//     /** 横向布局 */
//     horizontalAlign,
//     /* 旋转 */
//     rotation,
//     angle,
//     /* 混合模式 */
//     blendMode,
//     /** 色调 */
//     tint,
//     /** 透明度（0-1） */
//     alpha ,
//     /** 是否开启拖动 true|false */
//     draggable,
//     /** 是否开启限制拖动范围 */
//     dragRestricted ,
//     /** 限制拖动抽X抽或Y抽 */
//     dragRestrictAxis,
//     /** 拖动限制门槛,小于次数不执行拖动 */
//     dragThreshold ,
//     /** 分组拖动 */
//     dragGroup,
//     /** 拖动容器 */
//     dragContainer,
//     /** 是否开启接收拖动物 */
//     droppable,
//     /**  */
//     droppableReparent,
//     /** 接收掉落的分组名 */
//     dropGroup,
// }