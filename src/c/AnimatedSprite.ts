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

    private _animatedSprites: Map<string,PIXI.AnimatedSprite>|undefined;
    private _curAnimation:{name:string,sp:PIXI.AnimatedSprite}|undefined;
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
        if(this._curAnimation)
            this._curAnimation.sp.gotoAndPlay(frameNumber);
    }

    /** 跳转到第N帧并停止 */
    public gotoAndStop(frameNumber: number){
        if(this._curAnimation)
            this._curAnimation.sp.gotoAndStop(frameNumber);
    }

    /** 停止 */
    public stop(){
        if(this._curAnimation)
            this._curAnimation.sp.stop();
    }

    /** 播放 */
    public play(){
        if(this._curAnimation)
            this._curAnimation.sp.play();
   
    }

    public update(){
        let {_source,_animationName,_animatedSprites,_curAnimation} = this;
        if(_source === undefined){
            return;
        }
        if(_animationName === ""){
            return;
        }
   
        if(_animatedSprites === undefined || _animatedSprites.size == 0){
            _animatedSprites = new Map();
            for(let key in _source.animations){
                _animatedSprites.set(key, new PIXI.AnimatedSprite(_source.animations[key]));
            }
            
            if(_animatedSprites.size){
                let sp = _animatedSprites.get(_animationName);
                if(sp){
                    this.container.addChild(sp);
                    if(this.autoPlay){
                        sp.play();
                    }
                    _curAnimation = {name:_animationName,sp:sp};
                }
            }
        }
        
        if(_curAnimation){
            if(_curAnimation.name!==_animationName){
                _curAnimation.sp.stop();
                this.container.removeChild(_curAnimation.sp);
                let sp = _animatedSprites.get(_animationName);
                if(sp){
                    this.container.addChild(sp);
                    _curAnimation.name = _animationName;
                    _curAnimation.sp = sp;
                    if(this.autoPlay){
                        sp.play();
                    }
                }
            }
            _curAnimation.sp.loop = this._loop;
            _curAnimation.sp.animationSpeed = this._animationSpeed;
        }
        this._curAnimation = _curAnimation;
        this._animatedSprites = _animatedSprites;
    }
    
}