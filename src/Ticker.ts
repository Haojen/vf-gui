import * as Tween from "./cTween/Tween";

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
        this.time = performance.now();
        if (autoStart) {
            this.disabled = false;
        }
    }
    /** 当前运行的时间 */
    public now = 0;
    /** 时间的增量（秒） ms*0.001 */
    public deltaTime = 0;
    /** 上一次运行的时间 */
    public time: number;
    /** 时差 now - time */
    public ms = 0;
    
    private _disabled = true;
    /** 是否关闭心跳.默认false不关闭 */
    public get disabled() {
        return this._disabled;
    }
    public set disabled(value: boolean) {
        if(value == this._disabled){
            return;
        }
        this._disabled = value;
        if(!this._disabled){
            this.update(performance.now());
        }
    }
    private update(time: number) {
        this.now = time;
        this.ms = this.now - this.time;
        this.time = this.now;
        this.deltaTime = this.ms  * 0.001;
        this.emit("update", this.deltaTime);
        Tween.update(this.deltaTime);
        if (this._disabled)
            requestAnimationFrame(this.update.bind(this));
    }
    /**
     * 增加更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    public addUpdateEvent<T>(fn: (deltaTime: number) => void,context: T){
        return this.on("update",fn,context);
    }
    /**
     * 移除更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    public removeUpdateEvent<T>(fn: (deltaTime: number) => void,context: T){
        return this.removeListener("update",fn,context);
    }
    
}

/**
 * Ticker 的实例
 */
export const shared= new Ticker(true);
