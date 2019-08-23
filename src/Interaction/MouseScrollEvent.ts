import UIBase from "../UIBase";
import { TouchMouseEventEnum } from "../Enum/TouchMouseEventEnum";

interface TWheelEvent extends WheelEvent{
    /** 火狐 */
    axis: number;
}

/**
 * 鼠标滚动滑轮事件处理
 * @since 1.0.0
 */
export default class MouseScrollEvent{
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

    private obj: UIBase
    private preventDefault: boolean;
    private bound = false;
    private delta = new PIXI.Point();

    private startEvent() {
        this.obj.container.on(TouchMouseEventEnum.mouseover, this._onHover, this);
        this.obj.container.on(TouchMouseEventEnum.mouseout, this._onMouseOut, this);
    }

    private _onMouseScroll(_e: TWheelEvent|Event) {

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
        if (!this.bound) {
            document.addEventListener("mousewheel", this._onMouseScroll.bind(this), false);
            document.addEventListener("DOMMouseScroll", this._onMouseScroll.bind(this), false);
            this.bound = true;
        }
    }
    //e?: interaction.InteractionEvent
    private _onMouseOut() {
        if (this.bound) {
            document.removeEventListener("mousewheel", this._onMouseScroll.bind(this));
            document.removeEventListener("DOMMouseScroll", this._onMouseScroll.bind(this));
            this.bound = false;
        }
    }

    public stopEvent() {
        if (this.bound) {
            document.removeEventListener("mousewheel", this._onMouseScroll.bind(this));
            document.removeEventListener("DOMMouseScroll", this._onMouseScroll.bind(this));
            this.bound = false;
        }
        this.obj.container.removeListener('mouseover',this. _onHover,this);
        this.obj.container.removeListener('mouseout', this._onMouseOut,this);
    }

    public onMouseScroll: ((e: WheelEvent,delta: PIXI.Point) => void) | undefined
}