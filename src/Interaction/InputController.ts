import {DisplayObject} from "../core/DisplayObject";
import { CheckBox } from "../display/CheckBox";

interface CheckGroupObject{
    groups: {[key: string]: {[value: string]: CheckBox}} ;
    values: {[key: string]: string|undefined}; 
}
/**
 * 记录当前正在拖动的UI组件列表
 * @private
 */
let _currentItem: DisplayObject|undefined;
/**
 * 
 * @private
 */
export const tabGroups: {[key: string]: DisplayObject[]} = {};
/**
 * 
 * @private
 */
export const _checkGroupObject: CheckGroupObject = {
    groups: {},
    values: {}
} 

/**
 * 注册组件
 * @param item 
 * @param tabIndex 切换位置
 * @param tabGroup 分组名
 * @returns 依据tabIndex返回是否需要排序 0，-1，1
 */
export function registrer(item: DisplayObject, tabIndex: number, tabGroup?: string) {
    const groupName = tabGroup || "default";

    let items = tabGroups[groupName];
    if (!items)
        items = tabGroups[groupName] = [];

    const i = items.indexOf(item);
    if (i === -1) {
        item.attach._tabIndex = tabIndex !== undefined ? tabIndex : -1;
        item.attach._tabGroup = items;
        items.push(item);
        items.sort(function (a, b) {
            if (a.attach._tabIndex < b.attach._tabIndex)
                return -1;
            if (a.attach._tabIndex > b.attach._tabIndex)
                return 1;
            return 0;
        });
    }
}
/** 失去焦点时 */
export function blur(){
    const obj = _currentItem as TInputBase;
    if(obj){
        if(obj.blur && typeof obj.blur == "function"){
            obj.blur();
        }
    }     
}
/** 设置当前输入组件 */
export function set(item: DisplayObject){
    blur();
    _currentItem = item;
}

/** 清楚当前设置的组件 */
export function clear(){
    _currentItem = undefined;
}
/** 一般再按下键盘tab健执行 焦点获取与设置 */
export function fireTab(){
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup as DisplayObject[];
        let i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length) 
            i = 0;
        const obj = _tabGroup[i] as TInputBase;
        if(obj.focus)
            obj.focus();
    }
}

/** 一般再按下键盘向下箭头执行 焦点获取与设置 */
export function fireNext(){
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup as DisplayObject[];
        let i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length) 
            i = _tabGroup.length - 1;
        const obj = _tabGroup[i] as TInputBase;
        if(obj.focus)
            obj.focus();
    }
}

/** 一般再按下键盘向上箭头执行 焦点获取与设置 */
export function firePrev(){
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup as DisplayObject[];
        let i = _tabGroup.indexOf(_currentItem) - 1;
        if (i < 0) 
            i = 0;
        const obj = _tabGroup[i] as TInputBase;
        if(obj.focus)
            obj.focus();
    }
}

/** 
 * 注册分组，一般用于checkBox组件的分组操作 
 * 
 *  ==== 目前没有实现卸载，如果无限制创建checkbox并设置分组可能引发泄露 ====
 * 
 * checkGroups = [key]:{["value"]:cb}
 */
export function registrerCheckGroup(cb: CheckBox){
    const name = cb.checkGroup;
    if(name){
        let group = _checkGroupObject.groups[name];
        if (!group) 
            group = _checkGroupObject.groups[name] = {};
    
        group[cb.uuid.toString()] = cb;
    
        if (cb.checked)
            _checkGroupObject.values[name] = cb.uuid.toString();
    }
}

/**
 * 注销指定分组或指定分组的子项
 * @param cb CheckBox
 */
export function unRegistrerCheckGroup(cb: CheckBox){
    if(cb.checkGroup && _checkGroupObject.groups[cb.checkGroup]){
        delete _checkGroupObject.groups[cb.checkGroup][cb.uuid.toString()];
        let isKey = false;
        for(const key in _checkGroupObject.groups[cb.checkGroup]){
            if(key) isKey = true;
            break;
        }
        if(!isKey){
            delete _checkGroupObject.groups[name];
        }
        if (cb.checked)
            _checkGroupObject.values[name] = undefined;
    }
}
/** 更新分组中选中的checkbox组件  */
export function updateCheckGroupSelected(cb: CheckBox){
    if(cb.checkGroup){
        const group = _checkGroupObject.groups[cb.checkGroup];
        for (const val in group) {
            const b = group[val];
            if (b !== cb)
                b.checked = false;
        }
        _checkGroupObject.values[cb.checkGroup] = cb.uuid.toString();
    }
}

/** 获取分组中选中的checkbox值 */
export function getCheckGroupSelectedValue(name: string){
    const uuid = _checkGroupObject.values[name];
    if(uuid){
        const cb = _checkGroupObject.groups[name][uuid.toString()];
        return cb.value;
    }
    return undefined;
}

/** 设置选中 */
export function setCheckGroupSelectedValue(name: string,uuid: string){
    const group = _checkGroupObject.groups[name];
    if (group) {
        const cb = group[uuid];
        if (cb) {
            cb.checked = true;
        }
    }
}
