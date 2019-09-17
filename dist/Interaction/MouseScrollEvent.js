import { uid } from "../Utils";
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
export default class MouseScrollEvent {
    /**
     *
     * @param obj 需要绑定的对象
     * @param preventDefault 是否组织系统默认的事件触发
     */
    constructor(obj, preventDefault) {
        this.id = "";
        this.delta = new PIXI.Point();
        this.obj = obj;
        this.preventDefault = preventDefault;
        obj.container.interactive = true;
        this.startEvent();
    }
    startEvent() {
        this.obj.container.on("mouseover" /* mouseover */, this._onHover, this);
        this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
    }
    _onMouseScroll(_e) {
        _e;
        const e = _e;
        if (this.preventDefault)
            e.preventDefault();
        if (typeof e.deltaX !== "undefined")
            this.delta.set(e.deltaX, e.deltaY);
        else //Firefox{}
            this.delta.set(e.axis == 1 ? e.detail * 60 : 0, e.axis == 2 ? e.detail * 60 : 0);
        this.onMouseScroll && this.onMouseScroll.call(this.obj, e, this.delta);
    }
    //e?: interaction.InteractionEvent
    _onHover() {
        if (this.mouseScrllBind === undefined) {
            this.id = uid();
            this.mouseScrllBind = this._onMouseScroll.bind(this);
            document.addEventListener("mousewheel", this.mouseScrllBind, { passive: false });
            document.addEventListener("DOMMouseScroll", this.mouseScrllBind, { passive: false });
        }
    }
    //e?: interaction.InteractionEvent
    _onMouseOut() {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
    }
    stopEvent() {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
        this.obj.container.removeListener('mouseover', this._onHover, this);
        this.obj.container.removeListener('mouseout', this._onMouseOut, this);
    }
    remove() {
        this.stopEvent();
    }
}
//# sourceMappingURL=MouseScrollEvent.js.map