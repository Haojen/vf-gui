/// <reference types="pixi.js" />
import UIBase from "../UIBase";
/**
 * UI 序列图动画
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 */
export default class AnimatedSprite extends UIBase {
    constructor();
    private _animatedSprites;
    private _curAnimation;
    private _animationName;
    animationName: string;
    /**
     * 是否自动播放
     */
    private _autoPlay;
    autoPlay: boolean;
    /**
     * 设置源,loader中的PIXI.Spritesheet
     */
    private _source;
    source: PIXI.Spritesheet | undefined;
    /**
     * 播放速度
    */
    private _animationSpeed;
    animationSpeed: number;
    /**
     * 是否循环
     */
    private _loop;
    loop: boolean;
    /** 跳转到第N帧并播放 */
    gotoAndPlay(frameNumber: number): void;
    /** 跳转到第N帧并停止 */
    gotoAndStop(frameNumber: number): void;
    /** 停止 */
    stop(): void;
    /** 播放 */
    play(): void;
    update(): void;
}
