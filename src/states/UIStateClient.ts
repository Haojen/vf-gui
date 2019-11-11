// import { UIStateValues } from "./UIStateValues";
// import { UIState } from "./UIState";
// import { Stage } from "../core/Stage";

// /**
//  * @private
//  */
// export class UIStateClient {

//     /**
//      * @private
//      */
//     $stateValues!: UIStateValues;

//     /**
//      * @private
//      * 为此组件定义的视图状态。
//      */
//     public get states(): UIState[] {
//         return this.$stateValues.states;
//     }

//     public set states(value: UIState[]) {
//         if (!value)
//             value = [];
//         let values = this.$stateValues;
//         values.states = value;
//         let statesMap:TAny = {};
//         let length = value.length;
//         for (let i = 0; i < length; i++) {
//             let state = value[i];
//             statesMap[state.name] = state;
//         }
//         values.statesMap = statesMap;
//         if (values.parent) {
//             this.commitCurrentState();
//         }
//     }

//     /**
//      * @private
//      * 组件的当前视图状态。将其设置为 "" 或 undefined 可将组件重置回其基本状态。
//      */
//     public get currentState() {
//         return this.$stateValues.currentState;
//     }

//     public set currentState(value: string) {
//         let values = this.$stateValues;
//         values.explicitState = value;
//         values.currentState = value;
//         this.commitCurrentState();
//     }

//     /**
//      * @private
//      * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
//      */
//     private commitCurrentState(): void {
//         let values = this.$stateValues;
//         if (!values.parent) {
//             return;
//         }
//         let destination: UIState = values.statesMap[values.currentState];
//         if (!destination) {
//             if (values.states.length > 0) {
//                 values.currentState = values.states[0].name;
//             }
//             else {
//                 return;
//             }
//         }
//         if (values.oldState == values.currentState) {
//             return;
//         }

//         let parent = values.parent;
//         let state = values.statesMap[values.oldState];
//         if (state) {
//             let overrides = state.overrides;
//             let length = overrides.length;
//             for (let i = 0; i < length; i++) {
//                 overrides[i].remove(this, parent);
//             }
//         }

//         values.oldState = values.currentState;

//         state = values.statesMap[values.currentState];
//         if (state) {
//             let overrides = state.overrides;
//             let length = overrides.length;
//             for (let i = 0; i < length; i++) {
//                 overrides[i].apply(this, parent);
//             }
//         }
//     }

//     /**
//      * @private
//      * 返回是否含有指定名称的视图状态
//      * @param stateName 要检查的视图状态名称
//      */
//     public hasState(stateName: string): boolean {
//         return !!this.$stateValues.statesMap[stateName];
//     }

//     /**
//      * @private
//      * 初始化所有视图状态
//      */
//     private initializeStates(stage: Stage): void {
//         this.$stateValues.intialized = true;
//         let states = this.states;
//         let length = states.length;
//         for (let i = 0; i < length; i++) {
//             states[i].initialize(this, stage);
//         }
//     }
// }
