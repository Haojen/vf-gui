/**
 * 多拽相关的事件处理类
 *
 *  可侦听事件(未实现):
 * ```
 *  {InteractionEvent}.DraggableEvent.onDragPress
 *  {InteractionEvent}.DraggableEvent.onDragStart
 *  {InteractionEvent}.DraggableEvent.onDragMove
 *  {InteractionEvent}.DraggableEvent.onDragEnd
 * ```
 *  可赋值方法:
 * ```
 * onPress: ((e: InteractionEvent, isPressed: boolean,dragObj?: DragEvent) => void) | undefined;
 * onDragEnd: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
 * onDragMove: ((e: InteractionEvent, offset: PIXI.Point,dragObj?: DragEvent) => void) | undefined
 * onDragStart: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
 * ```
 *
 * @example 可查看 `Slider` 源码
 *
 * @since 1.0.0
 */
export default class DragEvent {
    constructor(obj) {
        this.id = 0;
        this.offset = new PIXI.Point();
        this.movementX = 0;
        this.movementY = 0;
        this.bound = false;
        this.start = new PIXI.Point();
        this.mouse = new PIXI.Point();
        this.cancel = false;
        this.dragging = false;
        this.obj = obj;
        obj.container.interactive = true;
        this.startEvent();
    }
    startEvent() {
        this.obj.container.on("mousedown" /* mousedown */, this._onDragStart, this);
        this.obj.container.on("touchstart" /* touchstart */, this._onDragStart, this);
    }
    _onDragStart(e) {
        this.id = e.data.identifier;
        this.onDragPress && this.onDragPress.call(this.obj, e, true, this);
        if (!this.bound && this.obj.stage) {
            this.start.copyFrom(e.data.global);
            this.obj.stage.on("mousemove" /* mousemove */, this._onDragMove, this);
            this.obj.stage.on("touchmove" /* touchmove */, this._onDragMove, this);
            this.obj.stage.on("mouseup" /* mouseup */, this._onDragEnd, this);
            this.obj.stage.on("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            this.obj.stage.on("touchend" /* touchend */, this._onDragEnd, this);
            this.obj.stage.on("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            this.obj.stage.on("touchcancel" /* touchcancel */, this._onDragEnd, this);
            this.bound = true;
        }
        e.data.originalEvent.preventDefault();
    }
    _onDragMove(e) {
        if (e.data.identifier !== this.id)
            return;
        this.mouse.copyFrom(e.data.global);
        this.offset.set(this.mouse.x - this.start.x, this.mouse.y - this.start.y);
        if (!this.dragging) {
            this.movementX = Math.abs(this.offset.x);
            this.movementY = Math.abs(this.offset.y);
            if (this.movementX === 0 && this.movementY === 0 || Math.max(this.movementX, this.movementY) < this.obj.dragThreshold)
                return; //thresshold
            if (this.obj.dragRestrictAxis !== undefined) {
                this.cancel = false;
                if (this.obj.dragRestrictAxis == "x" && this.movementY > this.movementX)
                    this.cancel = true;
                else if (this.obj.dragRestrictAxis == "y" && this.movementY <= this.movementX)
                    this.cancel = true;
                if (this.cancel) {
                    this._onDragEnd(e);
                    return;
                }
            }
            this.onDragStart && this.onDragStart.call(this.obj, e, this);
            this.dragging = true;
        }
        this.onDragMove && this.onDragMove.call(this.obj, e, this.offset, this);
    }
    _onDragEnd(e) {
        if (e.data.identifier !== this.id)
            return;
        if (this.bound && this.obj.stage) {
            this.obj.stage.removeListener("mousemove" /* mousemove */, this._onDragMove, this);
            this.obj.stage.removeListener("touchmove" /* touchmove */, this._onDragMove, this);
            this.obj.stage.removeListener("mouseup" /* mouseup */, this._onDragEnd, this);
            this.obj.stage.removeListener("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchend" /* touchend */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchcancel" /* touchcancel */, this._onDragEnd, this);
            this.dragging = false;
            this.bound = false;
            this.onDragEnd && this.onDragEnd.call(this.obj, e, this);
            this.onDragPress && this.onDragPress.call(this.obj, e, false, this);
        }
    }
    /** 清除拖动 */
    stopEvent() {
        if (this.bound && this.obj.stage) {
            this.obj.stage.removeListener("mousemove" /* mousemove */, this._onDragMove, this);
            this.obj.stage.removeListener("touchmove" /* touchmove */, this._onDragMove, this);
            this.obj.stage.removeListener("mouseup" /* mouseup */, this._onDragEnd, this);
            this.obj.stage.removeListener("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchend" /* touchend */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            this.bound = false;
        }
        this.obj.container.removeListener("mousedown" /* mousedown */, this._onDragStart, this);
        this.obj.container.removeListener("touchstart" /* touchstart */, this._onDragStart, this);
    }
    remove() {
        this.stopEvent();
        this.onDragPress = undefined;
        this.onDragEnd = undefined;
        this.onDragMove = undefined;
        this.onDragStart = undefined;
        this.obj.container.interactive = false;
    }
}
//# sourceMappingURL=DragEvent.js.map