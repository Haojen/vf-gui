import { DisplayObject } from "../DisplayObject";
import { ClickEvent } from "../../interaction/Index";

/**
 *  组件的单击操作
 * 
 */
export class UIClick implements Lifecycle {
    /**
     * 构造函数
     */
    public constructor(target: DisplayObject) {
        this._target = target;
        this._target.plugs.set(UIClick.key, this);
        this._clickEvent = new ClickEvent(target,true);;
    }

    public static key = "UIClick";
    private _target: DisplayObject | undefined;
    private _clickEvent:ClickEvent;

    load() {

    }

    release() {

        this._clickEvent.remove();
        if (this._target) {
            this._target.plugs.delete(UIClick.key);
            this._target = undefined;
        }
    }

}