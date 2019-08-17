import { UIBase } from "../UIBase";

/**
 * 记录当前正在拖动的UI组件列表
 * @private
 */
let _currentItem: UIBase|undefined;
/**
 * 
 * @private
 */
export const tabGroups: {[key: string]: UIBase[]} = {};
/**
 * 
 * @private
 */
export const checkGroups: {[key: string]: {[value: string]: TCheckBox}} = {};
/**
 * 
 * @private
 */
export const checkGroupValues: {[key: string]: string} = {};

/**
 * 注册组件
 * @param item 
 * @param tabIndex 切换位置
 * @param tabGroup 分组名
 * @returns 依据tabIndex返回是否需要排序 0，-1，1
 */
export function registrer(item: UIBase, tabIndex: number, tabGroup?: string) {
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
    const obj = _currentItem as TUIBase;
    if(obj){
        if(obj.blur && typeof obj.blur == "function"){
            obj.blur();
        }
    }     
}
/** 设置当前输入组件 */
export function set(item: UIBase){
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
        const _tabGroup = _currentItem.attach._tabGroup as UIBase[];
        let i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length) 
            i = 0;
        const obj = _tabGroup[i] as TUIBase;
        if(obj.focus)
            obj.focus();
    }
}

/** 一般再按下键盘向下箭头执行 焦点获取与设置 */
export function fireNext(){
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup as UIBase[];
        let i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length) 
            i = _tabGroup.length - 1;
        const obj = _tabGroup[i] as TUIBase;
        if(obj.focus)
            obj.focus();
    }
}

/** 一般再按下键盘向上箭头执行 焦点获取与设置 */
export function firePrev(){
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup as UIBase[];
        let i = _tabGroup.indexOf(_currentItem) - 1;
        if (i < 0) 
            i = 0;
        const obj = _tabGroup[i] as TUIBase;
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
export function registrerCheckGroup(cb: TCheckBox){
    const name = cb.checkGroup;
    let group = checkGroups[name];
    if (!group) 
        group = checkGroups[name] = {};

    group[cb.value] = cb;

    if (cb.checked)
        checkGroupValues[name] = cb.value;
}

/** 更新分组中选中的checkbox组件  */
export function updateCheckGroupSelected(cb: TCheckBox){
    const group = checkGroups[cb.checkGroup];
    for (const val in group) {
        const b = group[val];
        if (b !== cb)
            b.checked = false;
    }
    checkGroupValues[cb.checkGroup] = cb.value;
}

/** 获取分组中选中的checkbox值 */
export function getCheckGroupSelectedValue(name: string){
    if (checkGroupValues[name])
        return checkGroupValues[name];
    return "";
}

/** 设置选中 */
export function setCheckGroupSelectedValue(name: string,value: string){
    const group = checkGroups[name];
    if (group) {
        const cb = group[value];
        if (cb) {
            cb.checked = true;
        }
    }
}

/**
 * 注销指定分组或指定分组的子项
 * @param name 分组名
 * @param value 分组值，如不传，删除整个name分组
 */
export function unRegistrerCheckGroup(name: string,value?: string){
    const group = checkGroups[name];
    if (group) {
        if(value && group[value]){
            delete checkGroups[name][value];
        }else{
            delete checkGroups[name];
        }
    } 
}