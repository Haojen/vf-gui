
/**
 * 对外，封装的点击触摸事件
 * 
 * import InteractionEvent,{Mouse} from "../interaction/InteractionEvent",
 */
export const TouchMouseEvent = {
    /**
     * 移出
     * 
     * (e: InteractionEvent,thisObj:DisplayObject,over: boolean)=>{}
     */
    onHover : "hover",
    /**
     * 按下 
     * 
     * (e: InteractionEvent,thisObj:DisplayObject, isPressed: boolean)=>void
     */
    onPress : "press",
    /**
     * 按下
     */
    onDown : "down",
    /**
     * 弹起
     */
    onUp : "up",
    /**
     * 点击
     * 
     * (e: InteractionEvent,thisObj:DisplayObject)=>void
     */
    onClick : "click",
    /**
     * 移动
     * 
     * (e: InteractionEvent,thisObj:DisplayObject)=>void
     */
    onMove : "move",
}
