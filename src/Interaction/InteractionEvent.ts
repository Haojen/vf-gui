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
     * e: interaction.InteractionEvent,over: boolean
     */
    onHover = "onHover",
    /**
     * 按下 
     * e: interaction.InteractionEvent, isPressed: boolean)
     */
    onPress = "onPress",
    /**
     * 点击
     * e: interaction.InteractionEvent
     */
    onClick = "onClick",
    /**
     * 移动
     * e: interaction.InteractionEvent
     */
    onMove = "onMove",
}