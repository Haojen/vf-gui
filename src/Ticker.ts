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
        this._time = performance.now();
        if (autoStart) {
            this.disabled = false;
        }
    }
    /** 上次运行的时间 */
    private _now = 0;
    public get now() {
        return this._now;
    }

    /** 开始运行的时间(运行时开始的时间) */
    private _time = 0;
    public get time() {
        return this._time;
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
        tween.autoPlay(!this._disabled);
        if(!this._disabled){
            this.update(this._now - performance.now());
        }
    }
    
    public update(deltaTime: number) {
        if (this._disabled){
            return;
        }
        //let lastNow = this._now;
        //this._now = performance.now();
        //tween.update();
        this.emit("update", deltaTime);
        
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
export const shared = new Ticker(true);
