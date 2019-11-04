import {UIBase} from "../core/UIBase";
import { log, getTexture } from "../core/Utils";
import { ComponentEvent } from "../interaction/Index";
import { addDrawList } from "../layout/CSSSSystem";

/**
 * UI 序列图动画
 * 需要设置轴点旋转，需要使用texturepacker处理轴点
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 */
export class SpriteAnimated extends UIBase{
    public constructor(){
        super();
        this._animatedSprites = new Map();
    }


    private _animatedSprites: Map<string,PIXI.AnimatedSprite>;
    private _lastAnimatedName = "";
    private _curFrameNumber = 0;

    /**
     * 要播放的动作名
     */
    private _animationName = "default";
    public get animationName() {
        return this._animationName;
    }
    public set animationName(value) {
        if(this._animationName == value){
            return;
        }
        this._animationName = value;
        addDrawList("animatedNameSystem",this,this.animatedNameSystem);
    }
    /**
     * 序列图路径，或序列图数组
     */
    private _src: PIXI.Spritesheet | PIXI.Texture[] | undefined;
    public get src(): PIXI.Spritesheet | PIXI.Texture[] | undefined {
        return this._src;
    }
    public set src(value: PIXI.Spritesheet | PIXI.Texture[] | undefined) {
        this._src = value;
        addDrawList("srcSystem",this,this.srcSystem);
    }
    /**
     * 动画速度
     */
    private _animationSpeed = 0.1;
    public get animationSpeed() {
        return this._animationSpeed;
    }
    public set animationSpeed(value) {
        this._animationSpeed = value;
        addDrawList("attribSystem",this,this.attribSystem);
    }
    /** 
     * 是的循环
     */
    private _loop = false;
    public get loop() {
        return this._loop;
    }
    public set loop(value) {
        this._loop = value;
        addDrawList("attribSystem",this,this.attribSystem);
    }
    /** 
     * 是否播放中
     */
    private _playing = false;
    public get playing() {
        return this._playing;
    }

    /**
     * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
     */
    private _anchorX = 0;
    public get anchorX() {
        return this._anchorX;
    }
    public set anchorX(value) {
        this._anchorX = value;
        addDrawList("attribSystem",this,this.attribSystem);
    }
    /**
     * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
     */
    private _anchorY = 0;
    public get anchorY() {
        return this._anchorY;
    }
    public set anchorY(value) {
        this._anchorY = value;
        addDrawList("attribSystem",this,this.attribSystem);
    }
   
    /** 跳转到第N帧并播放 */
    public gotoAndPlay(frameNumber: number){
        this._curFrameNumber = frameNumber;    
        this._playing = true;
        addDrawList("playSystem",this,this.playSystem);
    }

    /** 跳转到第N帧并停止 */
    public gotoAndStop(frameNumber: number){

        this._curFrameNumber = frameNumber;
        this._playing = false;
        addDrawList("playSystem",this,this.playSystem);
    }

    /** 停止 */
    public stop(){
        this._curFrameNumber = 0;
        this._playing = false;
        addDrawList("playSystem",this,this.playSystem);
    }

    /** 播放 */
    public play(){
        this._curFrameNumber = 0;
        this._playing = true;
        addDrawList("playSystem",this,this.playSystem);
    }

    /** 
     * 添加动画 
     */
    public addAnimated(animationName:string,textures: PIXI.Texture[]){
        let sp = this._animatedSprites.get(animationName);
        if(sp && sp.parent){
            sp.parent.removeChild(sp);
            sp.removeAllListeners();
            sp.destroy();
        }
        this._animatedSprites.set(animationName,new PIXI.AnimatedSprite(textures));
    }

    public release(){
        super.release();
        this.releaseAnimate();
        this.src = undefined;
    }

    protected releaseAnimate(){
        this._animatedSprites.forEach(element => {
            element.stop();
            element.removeAllListeners();
            if(element.parent){
                element.parent.removeChild(element).destroy();
            }
        });
    }

    protected srcSystem(){

        this.releaseAnimate();
        const src = this.src;
        if(src){
            if(Array.isArray(src)){
                let textures: PIXI.Texture[] = [];
                src.forEach(value=>{
                    textures.push(getTexture(value));
                });
                this.addAnimated("default",textures);
            }else{
                for(const key in src.animations){
                    this.addAnimated(key,src.animations[key]);
                }
            }
            this.animatedNameSystem();
        }
    }

    protected animatedNameSystem(){

        if(this._animatedSprites.size == 0){
            return;
        }
        if(this.animationName === this._lastAnimatedName){
            return;
        }
        const animatedSp = this._animatedSprites.get(this.animationName);
        if(animatedSp == undefined){
            log(`Warning SpriteAnimated -> _animatedSprites[${this.animationName}] == undefined`);
            return;
        }
        const lastAnimated = this._animatedSprites.get(this._lastAnimatedName);
        animatedSp.onLoop = ()=>{
            this.emit(ComponentEvent.LOOP,this);
        }
        animatedSp.onComplete = ()=>{
            this.emit(ComponentEvent.COMPLETE,this);
        }
        if(animatedSp.parent == undefined){
            setTimeout(() => {
                //绘制会闪烁，与下一帧渲染有关，先临时解决，设置setTimeout
                this.container.addChild(animatedSp);
            }, 0);
            
        }
        
        if(lastAnimated && lastAnimated.parent){
            lastAnimated.stop();
            lastAnimated.parent.removeChild(lastAnimated);
        }
        this._lastAnimatedName = this.animationName;

        this._curFrameNumber = 0;
        this.emit(ComponentEvent.CHANGE,this,this.animationName);


        this.attribSystem();
        this.playSystem();
    }

    protected playSystem(){
        const animatedSp = this._animatedSprites.get(this.animationName);
        if(animatedSp){
            if(this.playing){
                animatedSp.gotoAndPlay(this._curFrameNumber);
            }else{
                animatedSp.gotoAndStop(this._curFrameNumber);
            }
        }
    }

    protected attribSystem(){
        const animatedSp = this._animatedSprites.get(this.animationName);
        if(animatedSp){
            animatedSp.loop = this.loop;
            animatedSp.animationSpeed = this.animationSpeed;
            animatedSp.anchor.set(this.anchorX,this.anchorY);
        }
    }
  
}