import UIBase from "../UIBase";
import InteractionEvent from "./InteractionEvent";
/**
 * 记录当前正在拖动的UI组件列表
 * @private
 */
export declare const _items: UIBase[];
/**
 * 添加拖动组件到控制器
 * @param item 要添加的UI组件
 * @param e 传送的事件
 * @returns true|false
 * @since 1.0.0
 */
export declare function add(item: UIBase, e: InteractionEvent): boolean;
/**
 * 获取正在拖动组件
 * @param item 要获取的UI组件
 * @returns flase | item
 */
export declare function getItem(item: UIBase): false | UIBase;
/**
 * 根据事件对象与分组名获取拖动项
 * @param e 事件对象
 * @param group 分组名
 */
export declare function getEventItem(e: InteractionEvent, group: string | undefined): false | UIBase | null;
