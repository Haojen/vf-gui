import Container from "./Container";
import Ease from "../Ease/Ease";
import EaseBase from "../Ease/EaseBase";
import UIBase from "../UIBase";
import Tween from "./Tween";

/**
 * UI 表格容器
 */
export default class SortableList extends Container{
    public constructor(){
        super();
        Ease.Sine.SineIn
    }
    /** 
     * 是否按降序排序
     * @private false
     */
    public desc = false;
    /**
     * 是否开启排序动画，默认不开启
     * @default 0
     */
    public tweenTime = 0;
    public tweenEase:EaseBase|undefined;
    public items:UIBase[] = [];
    private _sortTimeout = -1;
    /** 排序的规则 */
    public fnValue?:()=>UIBase;
    /**  */
    public fnThenBy?:()=>UIBase;

    public addChild(UIObject:UIBase) {
        super.addChild(UIObject);
        if (this.items.indexOf(UIObject) == -1) {
            this.items.push(UIObject);
        }
    
        if (!UIObject.attach._sortListRnd)
            UIObject.attach._sortListRnd = Math.random();  
        this.sort();
        return [UIObject];
    }

    /**
     * 添加显示列表，并感觉相关传入函数进行排序
     * @param UIObject UI显示对象   
     * @param fnValue 前置条件
     * @param fnThenBy 后置条件
     */
    public addChildFn(UIObject:UIBase,fnValue:Function, fnThenBy:Function){
        if (this.fnValue)
            UIObject.attach._sortListValue = this.fnValue;
    
        if (this.fnThenBy)
            UIObject.attach._sortListThenByValue = this.fnThenBy;
    
        if (!UIObject.attach._sortListRnd)
            UIObject.attach._sortListRnd = Math.random();  

        this.addChild(UIObject);
    }
    public removeChild(... UIObject:UIBase[]) {
        super.removeChild(... UIObject);
        UIObject.forEach(value=>{
            let index = this.items.indexOf(value);
            if (index != -1) {
                this.items.splice(index, 1);
            }     
        });
        this.sort();
    }

    public sort(instant?:boolean) {
        clearTimeout(this._sortTimeout);
    
        if (instant) {
            this._sort();
            return;
        }

        this._sortTimeout = setTimeout( () => { this._sort(); }, 0);
    }

    _sort() {
        let self = this;
        let desc = this.desc;
        let y = 0;
        let alt = true;
    
        this.items.sort( (a, b) => {
            let aFnValue = a.attach._sortListValue as Function;
            let bFnValue = b.attach._sortListValue as Function;
            let aFnThenBy = a.attach._sortListThenByValue as Function;
            let bFnThenBy = a.attach._sortListThenByValue as Function;
            var res = aFnValue() < bFnValue() ? desc ? 1 : -1 :aFnValue() > bFnValue() ? desc ? -1 : 1 : 0;
    
            if (res === 0 && aFnThenBy && bFnThenBy) {
                res = aFnThenBy() < bFnThenBy() ? desc ? 1 : -1 :aFnThenBy() > bFnThenBy() ? desc ? -1 : 1 : 0;
            }
            if (res === 0) {
                res = a.attach._sortListRnd > b.attach._sortListRnd ? 1 :
                      a.attach._sortListRnd < b.attach._sortListRnd ? -1 : 0;
            }
            return res;
        });
    
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
    
            alt = !alt;
    
            if (this.tweenTime > 0) {
                Tween.fromTo(item, this.tweenTime, { x: item.x, y: item.y }, { x: 0, y: y }, this.tweenEase);
            }
            else {
                item.x = 0;
                item.y = y;
            }
            y += item.height;
            let itemTany = item as TAny;//设置单独项目的背景或
            if (typeof itemTany.altering === "function")
                itemTany.altering(alt);
        }
    
        //force it to update parents when sort animation is done (prevent scrolling container bug)
        if (this.tweenTime > 0) {
            setTimeout(function () {
                self.updatesettings(false, true);
            }, this.tweenTime * 1000);
        }
    }
}
