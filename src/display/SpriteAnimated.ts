import {DisplayObject} from "../core/DisplayObject";
import { log, getTexture, getSheet } from "../utils/Utils";
import { ComponentEvent } from "../interaction/Index";

/**
 * 序列图动画
 * 
 * 支持使用texturepacker导出以及处理轴点
 * 
 * @example let spriteAnimated = new gui.SpriteAnimated();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestSpriteAnimated
 */
export class SpriteAnimated extends DisplayObject{
    public constructor(){
        super();
        this._animatedSprites = new Map();
    }


    private _animatedSprites: Map<string,PIXI.AnimatedSprite>;
    private _lastAnimatedName = "";
    private _curFrameNumber = 0;
    private _setTimeoutId = -1;

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
        this.animatedNameSystem();
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
        if(value === undefined){
            this.releaseAnimate();
        }else{
            this.srcSystem();
        }
        
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
        this.attribSystem();
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
        this.attribSystem()
    }

    private _playCount = 0;
    /** 
     * 循环次数
     */
    private _loopCount = 0;
    public get loopCount() {
        return this._loopCount;
    }
    public set loopCount(value) {
        this._loopCount = value;
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
        this.attribSystem();
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
        this.attribSystem();
    }
   
    /** 跳转到第N帧并播放 */
    public gotoAndPlay(frameNumber: number){
        this._curFrameNumber = frameNumber;    
        this._playing = true;
        this.playSystem();
    }

    /** 跳转到第N帧并停止 */
    public gotoAndStop(frameNumber: number){

        this._curFrameNumber = frameNumber;
        this._playing = false;
        this.playSystem();
    }

    /** 停止 */
    public stop(){
        this._playCount = 0;
        this._curFrameNumber = 0;
        this._playing = false;
        this.playSystem();
    }

    /** 播放 */
    public play(){
        this._playCount = 0;
        this._curFrameNumber = 0;
        this._playing = true;
        this.playSystem();
    }

    public get autoPlay() {
        return this._playing;
    }
    public set autoPlay(value) {
        this._playing = value;
    }
    
    public set isPlay(value: boolean){
        if(value){
            this.play();
        }else{
            this.stop();
        }
    }

    /** 
     * 添加动画 
     */
    public addAnimated(animationName: string,textures: PIXI.Texture[]){
        const sp = this._animatedSprites.get(animationName);
        if(sp){
            if(sp.parent)
                sp.parent.removeChild(sp);
            sp.removeAllListeners();
            sp.destroy();
        }
        this._animatedSprites.set(animationName,new PIXI.AnimatedSprite(textures));
    }

    public release(){
        if(this._setTimeoutId){
            clearTimeout(this._setTimeoutId);
        }
        super.release();
        this.releaseAnimate();
        this.src = undefined;
    }

    protected releaseAnimate(){
        this._animatedSprites.forEach(element => {
            if(element.parent){
                element.parent.removeChild(element)
            }
            element.removeAllListeners();
            element.destroy();
        });
        this._animatedSprites.clear();
    }

    protected srcSystem(){

        this.releaseAnimate();
        const src = getSheet(this.src);
        if(src){
            if(Array.isArray(src)){
                const textures: PIXI.Texture[] = [];
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
            this._playCount++;
            if(this._loopCount!==0 && this._playCount>=this._loopCount){
                this.stop();
            }
        }
        animatedSp.onComplete = ()=>{
            this.emit(ComponentEvent.COMPLETE,this);
        }
        if(animatedSp.parent == undefined){
            clearTimeout(this._setTimeoutId);
            this._setTimeoutId = setTimeout(() => {
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