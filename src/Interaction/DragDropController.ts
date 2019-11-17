import {DisplayObject} from "../core/DisplayObject";
import {InteractionEvent} from "../event/InteractionEvent";

/**
 * 记录当前正在拖动的UI组件列表
 * @private
 */
export const _items: DisplayObject[] = [];
/**
 * 添加拖动组件到控制器
 * @param item 要添加的UI组件
 * @param e 传送的事件
 * @returns true|false
 * @since 1.0.0
 */
export function add(item: DisplayObject, e: InteractionEvent) {
    item.attach.dragDropEventId = e.data.identifier;
    if (_items.indexOf(item) === -1) {
        _items.push(item);
        return true;
    }
    return false;
}

/**
 * 获取正在拖动组件
 * @param item 要获取的UI组件
 * @returns flase | item
 */
export function getItem(item: DisplayObject) {
    let index: number | undefined;
    for (let i = 0; i < _items.length; i++) {
        if (_items[i] === item) {
            index = i;
            break;
        }
    }

    if (index !== undefined) {
        _items.splice(index, 1);
        return item;
    }
    else {
        return false;
    }
}

/**
 * 根据事件对象与分组名获取拖动项
 * @param e 事件对象
 * @param group 分组名
 */
export function getEventItem(e: InteractionEvent, group: string | undefined) {
    let item = null, index: number | undefined;
    const id = e.data.identifier;
    
    for (let i = 0; i < _items.length; i++) {
        if (_items[i].attach.dragDropEventId === id) {
            if (group !== _items[i].attach.dragGroup && _items[i].attach.dragGroup!=="") {
                return false;
            }
            item = _items[i];
            index = i;
            break;
        }
    }

    if (index !== undefined) {
        _items.splice(index, 1);
        return item;
    }
    else {
        return false;
    }
}