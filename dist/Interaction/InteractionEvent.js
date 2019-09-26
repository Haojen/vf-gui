/**
 * 事件的基础类
 *
 * 触摸或鼠标操作事件 可查看 -> TouchEventEnum.TouchEnum
 *
 * import InteractionEvent from "../Interaction/InteractionEvent",
 */
export default class InteractionEvent extends PIXI.interaction.InteractionEvent {
    constructor() {
        super();
    }
}
/**
 * 缓动事件
 */
export const TweenEvent = {
    /**
     *
     */
    Callback: 'Callback',
    /**
     * 每次改变
     */
    update: 'update',
    /**
     * 完成
     */
    complete: 'complete',
    /**
     * 开始时
     */
    start: 'start',
    /**
     * 每次重复时
     */
    repeat: 'repeat',
    /**
     * 反向时
     */
    reverse: 'reverse',
    /**
     * 暂停时
     */
    pause: 'pause',
    /**
     * 播放时
     */
    play: 'play',
    /**
     * 重新开始时
     */
    restart: 'restart',
    /**
     * 停止时
     */
    stop: 'stop'
};
//# sourceMappingURL=InteractionEvent.js.map