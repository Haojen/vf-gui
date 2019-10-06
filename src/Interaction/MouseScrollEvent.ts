import {UIBase} from "../core/UIBase";
import { TouchMouseEventEnum } from "../enum/TouchMouseEventEnum";
import { uid } from "../core/Utils";

interface TWheelEvent extends WheelEvent{
    /** 火狐 */
    axis: number;
}



/**
 * 鼠标滑轮事件
 * 
 *  可侦听事件(未实现):
 * ```
 *  {InteractionEvent}.MouseScroll.xxxxxx.
 * ```
 *  可赋值方法:
 * ```
 * oonMouseScroll: ((e: WheelEvent,delta: PIXI.Point) => void) | undefined
 * ```
 * 
 * @example 可查看 `Slider` 源码
 * 
 * @since 1.0.0
 */
export class MouseScrollEvent{
    /**
     * 
     * @param obj 需要绑定的对象
     * @param preventDefault 是否组织系统默认的事件触发
     */
    public constructor(obj: UIBase, preventDefault: boolean){
        this.obj = obj;
        this.preventDefault = preventDefault;
        obj.container.interactive = true;
        this.startEvent();
    }
    public  id = "";
    private obj: UIBase
    private preventDefault: boolean;
    private delta = new PIXI.Point();
    private mouseScrllBind: ((_e: TWheelEvent | Event) => void | undefined) | undefined;

    private startEvent() {
        this.obj.container.on(TouchMouseEventEnum.mouseover, this._onHover, this);
        this.obj.container.on(TouchMouseEventEnum.mouseout, this._onMouseOut, this);
    }

    private _onMouseScroll(_e: TWheelEvent|Event) {
        _e
        const e = _e as TWheelEvent;
        if (this.preventDefault)
            e.preventDefault();

        if (typeof e.deltaX !== "undefined")
            this.delta.set(e.deltaX, e.deltaY);
        else //Firefox{}
            this.delta.set(e.axis == 1 ? e.detail * 60 : 0, e.axis == 2 ? e.detail * 60 : 0);

        this.onMouseScroll && this.onMouseScroll.call(this.obj, e, this.delta);
    }
    //e?: interaction.InteractionEvent

    private _onHover() {
        if (this.mouseScrllBind === undefined) {
            this.id = uid();
            this.mouseScrllBind = this._onMouseScroll.bind(this);
            document.addEventListener("mousewheel", this.mouseScrllBind, { passive: false });
            document.addEventListener("DOMMouseScroll", this.mouseScrllBind, { passive: false });
        }
    }
    //e?: interaction.InteractionEvent
    private _onMouseOut() {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
    }

    public stopEvent() {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
        this.obj.container.removeListener('mouseover',this. _onHover,this);
        this.obj.container.removeListener('mouseout', this._onMouseOut,this);
    }

    public remove(){
        this.stopEvent();
    }

    public onMouseScroll: ((e: WheelEvent,delta: PIXI.Point) => void) | undefined
}