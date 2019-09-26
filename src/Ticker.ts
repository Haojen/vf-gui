import * as tween from "./c/Tween/index";

/**
 * 心跳，需要UI库初始化后，进行实例调用注册
 */
class Ticker extends PIXI.utils.EventEmitter{
    /**
     * 心跳构造函数
     * @param autoStart 是否自动开启心跳，默认false
     */
    public constructor(autoStart: boolean){
        super();
        if (autoStart) {
            this.disabled = false;
        }
    }
    
    private _disabled = true;
    /** 是否关闭心跳.默认false不关闭,关闭后，缓动等组件也将关闭 */
    public get disabled() {
        return this._disabled;
    }
    
    public set disabled(value: boolean) {
        if(value == this._disabled){
            return;
        }
        this._disabled = value;
    }
    
    public update(deltaTime: number,lastTime: number,elapsedMS: number) {
        if (this._disabled){
            return;
        }
        tween.update(elapsedMS);
        this.emit("update", deltaTime,lastTime,elapsedMS);
        
    }
    /**
     * 增加更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    public addUpdateEvent<T>(fn: (deltaTime: number,lastTime?: number,elapsedMS?: number) => void,context: T){
        return this.on("update",fn,context);
    }
    /**
     * 移除更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    public removeUpdateEvent<T>(fn: (deltaTime: number,lastTime?: number,elapsedMS?: number) => void,context: T){
        return this.removeListener("update",fn,context);
    }
    
}

/**
 * Ticker 的实例
 */
export const shared = new Ticker(true);
