import UIBase from "../UIBase";
/**
 * UI 序列图动画
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 */
export default class AnimatedSprite extends UIBase {
    constructor(textures, autoUpdate) {
        super();
        /**
         * 播放速度
        */
        this._animationSpeed = 1;
        /**
         * 是否循环
         */
        this._loop = true;
        this._animatedSprite = new PIXI.AnimatedSprite(textures, autoUpdate);
        this.container.addChild(this._animatedSprite);
        this._animatedSprite;
    }
    get animationSpeed() {
        return this._animationSpeed;
    }
    set animationSpeed(value) {
        this._animationSpeed = value;
        this._animatedSprite.animationSpeed = value;
    }
    get loop() {
        return this._loop;
    }
    set loop(value) {
        this._loop = value;
        this._animatedSprite.loop = value;
    }
    /** 跳转到第N帧并播放 */
    gotoAndPlay(frameNumber) {
        this._animatedSprite.gotoAndPlay(frameNumber);
    }
    /** 跳转到第N帧并停止 */
    gotoAndStop(frameNumber) {
        this._animatedSprite.gotoAndStop(frameNumber);
    }
    /** 停止 */
    stop() {
        this._animatedSprite.stop();
    }
    /** 播放 */
    play() {
        this._animatedSprite.play();
    }
}
//# sourceMappingURL=AnimatedSprite.js.map