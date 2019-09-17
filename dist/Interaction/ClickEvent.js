/**
 * 点击触摸相关的事件处理订阅类,UI组件内部可以创建此类实现点击相关操作
 *
 *  可侦听事件:
 * ```
 *  {InteractionEvent}.TouchEvent.onHover
 *  {InteractionEvent}.TouchEvent.onPress
 *  {InteractionEvent}.TouchEvent.onClick
 *  {InteractionEvent}.TouchEvent.onMove
 * ```
 *  可赋值方法:
 * ```
 *  onHover: ((e: InteractionEvent,thisOBj:UIBase,over: boolean) => void) | undefined
 *  onPress: ((e: InteractionEvent,thisOBj:UIBase, isPressed: boolean) => void) | undefined;
 *  onClick: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
 *  onMove: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
 * ```
 *
 * @example 可查看 `TestSliceSprite` 示例
 *
 * @since 1.0.0
 */
export default class ClickEvent {
    /**
     * ClickEvent 构造函数
     * @param obj 调用的显示对象
     * @param isOpenEmitEvent 是否开启事件派发，默认false，开启后，父类可以监听InteractionEvent下的TouchEvent
     * @param includeHover 是否监听鼠标移上与移出，默认true
     * @param rightMouseButton 是否开启鼠标右键点击，默认false
     * @param doubleClick 是否开启鼠标双击,默认false
     */
    constructor(obj, isOpenEmitEvent, includeHover, rightMouseButton, doubleClick) {
        this.id = 0;
        /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | vfui.Interaction.TouchEvent */
        this.isOpenEmitEvent = false;
        this.offset = new PIXI.Point();
        this.movementX = 0;
        this.movementY = 0;
        this.ishover = false;
        this.mouse = new PIXI.Point();
        this.bound = false;
        this.right = false;
        this.hover = true;
        this.double = false;
        this.time = 0;
        this.eventnameMousedown = "mousedown" /* mousedown */;
        this.eventnameMouseup = "mouseup" /* mouseup */;
        this.eventnameMouseupoutside = "mouseupoutside" /* mouseupoutside */;
        this.obj = obj;
        if (isOpenEmitEvent !== undefined) {
            this.isOpenEmitEvent = isOpenEmitEvent;
        }
        if (includeHover !== undefined) {
            this.right = includeHover;
        }
        if (rightMouseButton !== undefined) {
            this.hover = rightMouseButton;
        }
        if (doubleClick !== undefined) {
            this.double = doubleClick;
        }
        if (this.right) {
            this.eventnameMousedown = "rightdown" /* mouseRightDown */;
            this.eventnameMouseup = "rightup" /* mouseRightup */;
            this.eventnameMouseupoutside = "rightupoutside" /* mouseRightupoutside */;
        }
        obj.container.interactive = true;
        this.startEvent();
    }
    startEvent() {
        this.obj.container.on(this.eventnameMousedown, this._onMouseDown, this);
        if (!this.right)
            this.obj.container.on("touchstart" /* touchstart */, this._onMouseDown, this);
        if (this.hover) {
            this.obj.container.on("mouseover" /* mouseover */, this._onMouseOver, this);
            this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
        }
    }
    _onMouseDown(e) {
        this.mouse.copyFrom(e.data.global);
        this.id = e.data.identifier;
        this.onPress && this.onPress.call(this.obj, e, this.obj, true), this.obj;
        this.emitTouchEvent("press" /* onPress */, e, true);
        if (!this.bound) {
            this.obj.container.on(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.on(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.on("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.on("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = true;
        }
        if (this.double) {
            const now = performance.now();
            if (now - this.time < 210) {
                this.onClick && this.onClick.call(this.obj, e, this.obj);
                this.emitTouchEvent("click" /* onClick */, e);
            }
            else {
                this.time = now;
            }
        }
        e.data.originalEvent.preventDefault();
    }
    emitTouchEvent(event, e, ...args) {
        if (this.isOpenEmitEvent) {
            e.type = event.toString();
            this.obj.emit(e.type, e, this.obj, ...args);
        }
    }
    _mouseUpAll(e) {
        if (e.data.identifier !== this.id)
            return;
        this.offset.set(e.data.global.x - this.mouse.x, e.data.global.y - this.mouse.y);
        if (this.bound) {
            this.obj.container.removeListener(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.removeListener(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.removeListener("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.removeListener("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = false;
        }
        this.onPress && this.onPress.call(this.obj, e, this.obj, false);
        this.emitTouchEvent("press" /* onPress */, e, false);
    }
    _onMouseUp(e) {
        if (e.data.identifier !== this.id)
            return;
        this._mouseUpAll(e);
        //prevent clicks with scrolling/dragging objects
        if (this.obj.dragThreshold) {
            this.movementX = Math.abs(this.offset.x);
            this.movementY = Math.abs(this.offset.y);
            if (Math.max(this.movementX, this.movementY) > this.obj.dragThreshold)
                return;
        }
        if (!this.double) {
            this.onClick && this.onClick.call(this.obj, e, this.obj);
            this.emitTouchEvent("click" /* onClick */, e, false);
        }
    }
    _onMouseUpOutside(e) {
        if (e.data.identifier !== this.id)
            return;
        this._mouseUpAll(e);
    }
    _onMouseOver(e) {
        if (!this.ishover) {
            this.ishover = true;
            this.obj.container.on("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.on("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, true);
            this.emitTouchEvent("hover" /* onHover */, e, true);
        }
    }
    _onMouseOut(e) {
        if (this.ishover) {
            this.ishover = false;
            this.obj.container.removeListener("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.removeListener("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, false);
            this.emitTouchEvent("hover" /* onHover */, e, false);
        }
    }
    _onMouseMove(e) {
        this.onMove && this.onMove.call(this.obj, e, this.obj);
        this.emitTouchEvent("move" /* onMove */, e);
    }
    /** 清除拖动 */
    stopEvent() {
        if (this.bound) {
            this.obj.container.removeListener(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.removeListener(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.removeListener("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.removeListener("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = false;
        }
        this.obj.container.removeListener(this.eventnameMousedown, this._onMouseDown, this);
        if (!this.right)
            this.obj.container.removeListener("touchstart" /* touchstart */, this._onMouseDown, this);
        if (this.hover) {
            this.obj.container.removeListener("mouseover" /* mouseover */, this._onMouseOver, this);
            this.obj.container.removeListener("mouseout" /* mouseout */, this._onMouseOut, this);
            this.obj.container.removeListener("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.removeListener("touchmove" /* touchmove */, this._onMouseMove, this);
        }
    }
    remove() {
        this.stopEvent();
        this.onPress = undefined;
        this.onHover = undefined;
        this.onClick = undefined;
        this.onMove = undefined;
        this.obj.container.interactive = false;
    }
}
//# sourceMappingURL=ClickEvent.js.map