import UIBase from "../UIBase";
interface CheckGroupObject {
    groups: {
        [key: string]: {
            [value: string]: CheckBox;
        };
    };
    values: {
        [key: string]: string | undefined;
    };
}
/**
 *
 * @private
 */
export declare const tabGroups: {
    [key: string]: UIBase[];
};
/**
 *
 * @private
 */
export declare const _checkGroupObject: CheckGroupObject;
/**
 * 注册组件
 * @param item
 * @param tabIndex 切换位置
 * @param tabGroup 分组名
 * @returns 依据tabIndex返回是否需要排序 0，-1，1
 */
export declare function registrer(item: UIBase, tabIndex: number, tabGroup?: string): void;
/** 失去焦点时 */
export declare function blur(): void;
/** 设置当前输入组件 */
export declare function set(item: UIBase): void;
/** 清楚当前设置的组件 */
export declare function clear(): void;
/** 一般再按下键盘tab健执行 焦点获取与设置 */
export declare function fireTab(): void;
/** 一般再按下键盘向下箭头执行 焦点获取与设置 */
export declare function fireNext(): void;
/** 一般再按下键盘向上箭头执行 焦点获取与设置 */
export declare function firePrev(): void;
/**
 * 注册分组，一般用于checkBox组件的分组操作
 *
 *  ==== 目前没有实现卸载，如果无限制创建checkbox并设置分组可能引发泄露 ====
 *
 * checkGroups = [key]:{["value"]:cb}
 */
export declare function registrerCheckGroup(cb: CheckBox): void;
/**
 * 注销指定分组或指定分组的子项
 * @param cb CheckBox
 */
export declare function unRegistrerCheckGroup(cb: CheckBox): void;
/** 更新分组中选中的checkbox组件  */
export declare function updateCheckGroupSelected(cb: CheckBox): void;
/** 获取分组中选中的checkbox值 */
export declare function getCheckGroupSelectedValue(name: string): string | undefined;
/** 设置选中 */
export declare function setCheckGroupSelectedValue(name: string, uuid: string): void;
export {};
