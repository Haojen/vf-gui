import Container from "./Container";
import * as tween from "./Tween/index";
/**
 * UI 可以排序的容器
 */
export default class SortableList extends Container {
    constructor() {
        super();
        /**
         * 是否按降序排序
         * @private false
         */
        this.desc = false;
        /**
         * 是否开启排序动画，默认不开启
         * @default 0
         */
        this.tweenTime = 0;
        this.tweenEase = tween.Easing.Sinusoidal.In;
        this.items = [];
        this._sortTimeout = -1;
    }
    /**
     * 添加显示列表，通过参数函数进行排序
     * @param UIObject UI显示对象
     * @param fnValue 前置条件
     * @param fnThenBy 后置条件
     */
    addChild(UIObject, fnValue, fnThenBy) {
        super.addChild(UIObject);
        if (this.items.indexOf(UIObject) === -1) {
            this.items.push(UIObject);
        }
        if (fnValue)
            UIObject.attach._sortListValue = fnValue;
        if (fnThenBy)
            UIObject.attach._sortListThenByValue = fnThenBy;
        if (!UIObject.attach._sortListRnd)
            UIObject.attach._sortListRnd = Math.random();
        this.sort();
        return UIObject;
    }
    removeChild(UIObject) {
        super.removeChild(UIObject);
        const index = this.items.indexOf(UIObject);
        if (index != -1) {
            this.items.splice(index, 1);
        }
        this.sort();
    }
    sort(instant) {
        clearTimeout(this._sortTimeout);
        if (instant) {
            this._sort();
            return;
        }
        this._sortTimeout = window.setTimeout(() => { this._sort(); }, 0);
    }
    _sort() {
        const self = this;
        const desc = this.desc;
        let y = 0;
        let alt = true;
        this.items.sort((a, b) => {
            const aFnValue = a.attach._sortListValue;
            const bFnValue = b.attach._sortListValue;
            const aFnThenBy = a.attach._sortListThenByValue;
            const bFnThenBy = a.attach._sortListThenByValue;
            let res = aFnValue() < bFnValue() ? desc ? 1 : -1 : aFnValue() > bFnValue() ? desc ? -1 : 1 : 0;
            if (res === 0 && aFnThenBy && bFnThenBy) {
                res = aFnThenBy() < bFnThenBy() ? desc ? 1 : -1 : aFnThenBy() > bFnThenBy() ? desc ? -1 : 1 : 0;
            }
            if (res === 0) {
                res = a.attach._sortListRnd > b.attach._sortListRnd ? 1 :
                    a.attach._sortListRnd < b.attach._sortListRnd ? -1 : 0;
            }
            return res;
        });
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            alt = !alt;
            if (this.tweenTime > 0) {
                tween.Tween.fromTo(item, { x: 0, y: y }, this.tweenTime).easing(this.tweenEase).start();
            }
            else {
                item.x = 0;
                item.y = y;
            }
            y += item.height;
            const itemTany = item; //设置单独项目的背景或
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
//# sourceMappingURL=SortableList.js.map