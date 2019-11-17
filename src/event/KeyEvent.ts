
/** 
 * 键盘事件 驱动类KeysEvent
 * 
 */
export const enum KeyEvent {

    input = "input",
    /** 
     * 键盘按下 
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    keydown = "keydown",
    /** 
     * 键盘弹起
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    keyup = "keyup",
    /** 
     * 粘贴
     * 
     * (e:InteractionEvent,obj:DisplayObject,clipboardData: DataTransfer | null)
     */
    paste = "paste",
    /** 
     * 复制 
     * 
     * (e:InteractionEvent,obj:DisplayObject,clipboardData: DataTransfer | null)
     */
    copy = "copy",
    /** 
     * 剪切 
     * 
     * (e:InteractionEvent,obj:DisplayObject,clipboardData: DataTransfer | null)
     */
    cut = "cut",
    /** 
     * 回退删除
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    backspace = 8,
    /** 
     * 回车
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    enter = 13,
    /** 
     * 删除
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    delete = 46,
    /** 
     * 全选 ctrl+a
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    ctrlA = 65,
    /** 
     * 撤销 ctrl+z
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    ctrlZ = 90,
    /** 
     * 箭头左
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    left = 37,
    /** 
     * 箭头上
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    top = 38,
    /** 
     * 箭头右
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    right = 39,
    /** 
     * 箭头下
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    down = 40,
    /** 
     * shift + 箭头左
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    shiftLeft = "shift37",
    /** 
     * shift + 箭头右
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    shiftRight = "shift39",
    /** 
     * shift + 箭头上
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    shiftTop = "shift38",
    /** 
     * shift + 箭头下
     * 
     * (e:InteractionEvent,obj:DisplayObject)
     */
    shiftDown = "shift40"
}
