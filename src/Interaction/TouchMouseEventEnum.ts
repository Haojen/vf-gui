/**
 * 鼠标点击与触摸事件枚举,内部DisplayObject使用
 * @since 1.0.0
 */
export const enum TouchMouseEventEnum {
    mousedown = "mousedown",
    mousemove = "mousemove",
    mouseup = "mouseup",
    mouseover = "mouseover",
    mouseout = "mouseout",
    mouseupoutside = "mouseupoutside",
    
    mouseRightDown  = "rightdown",
    mouseRightup = "rightup",
    mouseRightupoutside = "rightupoutside",

    touchstart = "touchstart",
    touchcancel = "touchcancel",
    touchend = "touchend",
    touchendoutside = "touchendoutside",
    touchmove = "touchmove",
    tap = "tap"
}

// type InteractionPointerEvents = "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout";
// type InteractionTouchEvents = "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" | "tap";
// type InteractionMouseEvents = "rightdown" | "mousedown" | "rightup" | "mouseup" | "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" | "mouseover" | "mouseout" | "mouseover";
// type InteractionPixiEvents = "added" | "removed";