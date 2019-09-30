import UIBase from "../UIBase";
import { _getSourcePath } from "../Utils";
/**
 * UI 序列图动画
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 */
export default class AnimatedSprite extends UIBase {
    constructor() {
        super();
        this._animationName = "";
        /**
         * 是否自动播放
         */
        this.autoPlay = false;
        /**
         * 播放速度
        */
        this._animationSpeed = 1;
        /**
         * 是否循环
         */
        this._loop = true;
    }
    get animationName() {
        return this._animationName;
    }
    set animationName(value) {
        this._animationName = value;
        this.update();
    }
    get source() {
        return this._source;
    }
    set source(value) {
        if (_getSourcePath) {
            value = _getSourcePath(value, AnimatedSprite);
        }
        this._source = value;
        this.update();
    }
    get animationSpeed() {
        return this._animationSpeed;
    }
    set animationSpeed(value) {
        this._animationSpeed = value;
        this.dalayDraw = true;
    }
    get loop() {
        return this._loop;
    }
    set loop(value) {
        this._loop = value;
        this.dalayDraw = true;
    }
    /** 跳转到第N帧并播放 */
    gotoAndPlay(frameNumber) {
        if (this._animatedSprite)
            this._animatedSprite.gotoAndPlay(frameNumber);
    }
    /** 跳转到第N帧并停止 */
    gotoAndStop(frameNumber) {
        if (this._animatedSprite)
            this._animatedSprite.gotoAndStop(frameNumber);
    }
    /** 停止 */
    stop() {
        if (this._animatedSprite)
            this._animatedSprite.stop();
    }
    /** 播放 */
    play() {
        if (this._animatedSprite)
            this._animatedSprite.play();
    }
    update() {
        let { _source, _animationName, _animatedSprite } = this;
        if (_source === undefined) {
            return;
        }
        if (_animationName === "") {
            return;
        }
        if (_animatedSprite === undefined) {
            if (_source.animations[_animationName]) {
                _animatedSprite = new PIXI.AnimatedSprite(_source.animations[_animationName]);
                this.container.addChild(_animatedSprite);
                this._animatedSprite = _animatedSprite;
                if (this.autoPlay) {
                    _animatedSprite.play();
                }
            }
            else {
                console.log("Error AnimatedSprite source or animationName");
            }
        }
        if (_animatedSprite !== undefined) {
            _animatedSprite.loop = this._loop;
            _animatedSprite.animationSpeed = this._animationSpeed;
        }
    }
}
//# sourceMappingURL=AnimatedSprite.js.map