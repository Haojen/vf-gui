/**
 * 基础的显示数据类型
 * @since 1.0.0
 */
export default class UISettings {
    constructor() {
        /** 宽度 */
        this.width = 0;
        /** 高度 */
        this.height = 0;
        /** 最小高度 */
        this.minHeight = 0;
        /** 宽度百分比 */
        this.minWidth = 0;
        /** 锚点X的像素表示法 */
        this.pivotX = 0;
        /** 锚点Y的像素表示法 */
        this.pivotY = 0;
        /** X轴缩放 */
        this.scaleX = 1;
        /** Y轴缩放 */
        this.scaleY = 1;
        /** 透明度（0-1） */
        this.alpha = 1;
        /** 是否开启拖动 true|false */
        this.draggable = false;
        /** 是否开启限制拖动范围 */
        this.dragRestricted = false;
        /** 拖动限制门槛,小于次数不执行拖动 */
        this.dragThreshold = 0;
    }
}
//# sourceMappingURL=UISettings.js.map