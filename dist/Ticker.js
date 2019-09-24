import * as tween from "./c/Tween/index";
/**
 * 心跳，需要UI库初始化后，进行实例调用注册
 */
class Ticker extends PIXI.utils.EventEmitter {
    /**
     * 心跳构造函数
     * @param autoStart 是否自动开启心跳，默认false
     */
    constructor(autoStart) {
        super();
        this._disabled = true;
        if (autoStart) {
            this.disabled = false;
        }
    }
    /** 是否关闭心跳.默认false不关闭,关闭后，缓动等组件也将关闭 */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value == this._disabled) {
            return;
        }
        this._disabled = value;
    }
    update(deltaTime, lastTime, elapsedMS) {
        if (this._disabled) {
            return;
        }
        tween.update(elapsedMS);
        this.emit("update", deltaTime, lastTime);
    }
    /**
     * 增加更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    addUpdateEvent(fn, context) {
        return this.on("update", fn, context);
    }
    /**
     * 移除更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    removeUpdateEvent(fn, context) {
        return this.removeListener("update", fn, context);
    }
}
/**
 * Ticker 的实例
 */
export const shared = new Ticker(true);
//# sourceMappingURL=Ticker.js.map