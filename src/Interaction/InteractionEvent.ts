/**
 * 事件的基础类
 * 
 * 触摸或鼠标操作事件 可查看 -> TouchEventEnum.TouchEnum
 * 
 * import InteractionEvent from "../Interaction/InteractionEvent";
 */
export default class InteractionEvent extends PIXI.interaction.InteractionEvent{
    public constructor(){
        super();
    }
}

/**
 * 对外
 * 
 * import InteractionEvent,{TouchEvent} from "../Interaction/InteractionEvent";
 */
export enum TouchEvent{
    /**
     * 移出
     * 
     * (e: InteractionEvent,thisObj:UIBase,over: boolean)=>{}
     */
    onHover = "hover",
    /**
     * 按下 
     * 
     * (e: InteractionEvent,thisObj:UIBase, isPressed: boolean)=>void
     */
    onPress = "press",
    /**
     * 点击
     * 
     * (e: InteractionEvent,thisObj:UIBase)=>void
     */
    onClick = "click",
    /**
     * 移动
     * 
     * (e: InteractionEvent,thisObj:UIBase)=>void
     */
    onMove = "move",
}