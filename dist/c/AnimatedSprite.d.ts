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
    constructor(textures: PIXI.Texture[] | PIXI.AnimatedSprite.FrameObject[], autoUpdate?: boolean | undefined);
    private _animatedSprite;
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
}
