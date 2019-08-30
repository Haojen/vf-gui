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

/** 
 * 键盘事件 驱动类KeysEvent
 * 
 * import InteractionEvent,{KeyEvent} from "../Interaction/InteractionEvent";
 */
export const enum KeyEvent{
    /** 
     * 键盘按下 
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    keydown = "keydown",
    /** 
     * 键盘弹起
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    keyup = "keyup",
    /** 
     * 粘贴
     * 
     * (e:InteractionEvent,obj:UIBase,clipboardData: DataTransfer | null)
     */
    paste = "paste",
    /** 
     * 复制 
     * 
     * (e:InteractionEvent,obj:UIBase,clipboardData: DataTransfer | null)
     */
    copy = "copy",
    /** 
     * 剪切 
     * 
     * (e:InteractionEvent,obj:UIBase,clipboardData: DataTransfer | null)
     */
    cut = "cut",
    /** 
     * 空格
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    backspace = 8,
    /** 
     * 回车
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    enter = 13, 
    /** 
     * 删除
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    delete = 46,
    /** 
     * 全选 ctrl+a
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    ctrlA = 65,
    /** 
     * 撤销 ctrl+z
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    ctrlZ = 90,
    /** 
     * 箭头左
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    left = 37,
    /** 
     * 箭头上
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    top = 38,
    /** 
     * 箭头右
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    right = 39,
    /** 
     * 箭头下
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    down = 40,
    /** 
     * shift + 箭头左
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    shiftLeft = "shift37",
    /** 
     * shift + 箭头右
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    shiftRight= "shift39",
    /** 
     * shift + 箭头上
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    shiftTop = "shift38",
    /** 
     * shift + 箭头下
     * 
     * (e:InteractionEvent,obj:UIBase)
     */
    shiftDown = "shift40"
}