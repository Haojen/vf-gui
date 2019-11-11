// /**
//  * IOverride 接口定义视图状态的覆盖操作。State 类 overrides 属性数组中的所有条目均必须实现此接口。
//  */
// export default interface IOverride {

// 	/**
// 	 * 应用覆盖。将保留原始值，以便以后可以在 remove() 方法中恢复该值。<p/>
// 	 *
// 	 * 该方法是当进入状态的时候自动调用的，请不要直接调用此方法。
// 	 * @param host 含有视图状态的组件。
// 	 * @param parent 子项添加到的父级容器。
// 	 */
// 	apply(host: any, parent: PIXI.Container): void;

// 	/**
// 	 * 删除覆盖。在 apply() 方法中记住的值将被恢复。
// 	 * @param host 含有视图状态的组件。
// 	 * @param parent 子项添加到的父级容器。
// 	 */
// 	remove(host: any, parent: PIXI.Container): void;
// }
