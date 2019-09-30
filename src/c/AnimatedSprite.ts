import UIBase from "../UIBase";
import { _getSourcePath } from "../Utils";

/**
 * UI 序列图动画
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 */
export default class AnimatedSprite extends UIBase{
    public constructor(){
        super();
    }

    private _animatedSprite: PIXI.AnimatedSprite|undefined;
    private _animationName = "";
    public get animationName(): string {
        return this._animationName;
    }
    public set animationName(value: string) {
        this._animationName = value;
        this.update();
    }

    /**
     * 是否自动播放
     */
    public autoPlay = false;
    /**
     * 设置源,loader中的PIXI.Spritesheet
     */
    private _source :PIXI.Spritesheet|undefined;

    public get source() {
        return this._source;
    }
    public set source(value) {
        if(_getSourcePath){
            value = _getSourcePath(value,AnimatedSprite);
        }   
        this._source = value;
        this.update();
    }

    /** 
     * 播放速度
    */
    private _animationSpeed = 1;
    public get animationSpeed() {
        return this._animationSpeed;
    }
    public set animationSpeed(value) {
        this._animationSpeed = value;
        this.dalayDraw = true;
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
        this.dalayDraw = true;
    }

    /** 跳转到第N帧并播放 */
    public gotoAndPlay(frameNumber: number){
        if(this._animatedSprite)
            this._animatedSprite.gotoAndPlay(frameNumber);
    }

    /** 跳转到第N帧并停止 */
    public gotoAndStop(frameNumber: number){
        if(this._animatedSprite)
            this._animatedSprite.gotoAndStop(frameNumber);
    }

    /** 停止 */
    public stop(){
        if(this._animatedSprite)
            this._animatedSprite.stop();
    }

    /** 播放 */
    public play(){
        if(this._animatedSprite)
            this._animatedSprite.play();
   
    }

    public update(){
        let {_source,_animationName,_animatedSprite} = this
        if(_source === undefined){
            return;
        }
        if(_animationName === ""){
            return;
        }
        if(_animatedSprite === undefined){
            if(_source.animations[_animationName]){    
                _animatedSprite = new PIXI.AnimatedSprite(_source.animations[_animationName])
                this.container.addChild(_animatedSprite);
                this._animatedSprite = _animatedSprite;
                if(this.autoPlay){
                    _animatedSprite.play();
                }
            }else{
                console.log("Error AnimatedSprite source or animationName")
            }
        }
        if(_animatedSprite !== undefined){
            _animatedSprite.loop = this._loop;
            _animatedSprite.animationSpeed = this._animationSpeed;
        }
    }
    
}