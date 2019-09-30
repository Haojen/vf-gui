import UIBase from "../UIBase";

/**
 * UI 序列图动画
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 */
export default class AnimatedSprite extends UIBase{
    public constructor(textures: PIXI.Texture[] | PIXI.AnimatedSprite.FrameObject[], autoUpdate?: boolean | undefined){
        super();
        this._animatedSprite = new PIXI.AnimatedSprite(textures,autoUpdate);
        this.container.addChild(this._animatedSprite);

        this._animatedSprite
    }

    private _animatedSprite: PIXI.AnimatedSprite;

    /** 
     * 播放速度
    */
    private _animationSpeed = 1;
    public get animationSpeed() {
        return this._animationSpeed;
    }
    public set animationSpeed(value) {
        this._animationSpeed = value;
        this._animatedSprite.animationSpeed = value;
    }

    /**
     * 是否循环
     */
    private _loop = true;
    public get loop() {
        return this._loop;
    }
    public set loop(value) {
        this._loop = value;
        this._animatedSprite.loop = value;
    }
    /** 跳转到第N帧并播放 */
    public gotoAndPlay(frameNumber: number){
        this._animatedSprite.gotoAndPlay(frameNumber);
    }

    /** 跳转到第N帧并停止 */
    public gotoAndStop(frameNumber: number){
        this._animatedSprite.gotoAndStop(frameNumber);
    }

    /** 停止 */
    public stop(){
        this._animatedSprite.stop();
    }

    /** 播放 */
    public play(){
        this._animatedSprite.play();
    }
}