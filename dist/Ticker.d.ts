/// <reference types="pixi.js" />
/**
 * 心跳，需要UI库初始化后，进行实例调用注册
 */
declare class Ticker extends PIXI.utils.EventEmitter {
    /**
     * 心跳构造函数
     * @param autoStart 是否自动开启心跳，默认false
     */
    constructor(autoStart: boolean);
    private _disabled;
    /** 是否关闭心跳.默认false不关闭,关闭后，缓动等组件也将关闭 */
    disabled: boolean;
    update(deltaTime: number, lastTime: number, elapsedMS: number): void;
    /**
     * 增加更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    addUpdateEvent<T>(fn: (deltaTime: number) => void, context: T): this;
    /**
     * 移除更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    removeUpdateEvent<T>(fn: (deltaTime: number) => void, context: T): this;
}
/**
 * Ticker 的实例
 */
export declare const shared: Ticker;
export {};
