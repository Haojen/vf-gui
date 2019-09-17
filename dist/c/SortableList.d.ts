import Container from "./Container";
import UIBase from "../UIBase";
/**
 * UI 可以排序的容器
 */
export default class SortableList extends Container {
    constructor();
    /**
     * 是否按降序排序
     * @private false
     */
    desc: boolean;
    /**
     * 是否开启排序动画，默认不开启
     * @default 0
     */
    tweenTime: number;
    tweenEase: (k: number) => number;
    items: UIBase[];
    private _sortTimeout;
    /**
     * 添加显示列表，通过参数函数进行排序
     * @param UIObject UI显示对象
     * @param fnValue 前置条件
     * @param fnThenBy 后置条件
     */
    addChild(UIObject: UIBase, fnValue?: Function, fnThenBy?: Function): UIBase;
    removeChild(UIObject: UIBase): void;
    sort(instant?: boolean): void;
    _sort(): void;
}
