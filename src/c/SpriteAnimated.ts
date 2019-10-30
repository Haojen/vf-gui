import {UIBase} from "../core/UIBase";
import { log, getTexture } from "../core/Utils";
import { BaseProps } from "../layout/BaseProps";
import { ComponentEvent } from "../interaction/Index";



/** 
 * 按钮自定义字段
 */
class SpriteAnimatedProps extends BaseProps{

    public constructor(){
        super();
    }
    /**
     * 要播放的动作名
     */
    animationName = "default";
    /**
     * 序列图路径，或序列图数组
     */
    src: PIXI.Spritesheet|PIXI.Texture[]|undefined;
    /**
     * 动画速度
     */
    animationSpeed = 0.1;
    /** 
     * 是的循环
     */
    loop = false;
    /** 
     * 是否播放中
     */
    playing = false;
    /**
     * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
     */
    anchorX?: number;
    /**
     * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
     */
    anchorY?: number;
}


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

    protected initProps(){
        // let props = this.props; 
    }

    /** 子类可以重写 */
    public get props(): SpriteAnimatedProps{

        if(this._props){
            return this._props;
        }

        this._props = new SpriteAnimatedProps().proxyData;
        this.initProps();

        return this._props;
    }

    protected _props?: TAny;   

    protected _src: PIXI.Spritesheet|PIXI.Texture[]|undefined;

    private _animatedSprites: Map<string,PIXI.AnimatedSprite>;

    private _lastAnimatedName = "";

    private _curFrameNumber = 0;
   
    /** 跳转到第N帧并播放 */
    public gotoAndPlay(frameNumber: number){
        this._curFrameNumber = frameNumber;    
        this.props.playing = true;
    }

    /** 跳转到第N帧并停止 */
    public gotoAndStop(frameNumber: number){

        this._curFrameNumber = frameNumber;
        this.props.playing = false;
    }

    /** 停止 */
    public stop(){
        this._curFrameNumber = 0;
        this.props.playing = false;
    }

    /** 播放 */
    public play(){
        this._curFrameNumber = 0;
        this.props.playing = true;
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

    public update(){
        const {props,_animatedSprites} = this;
        if(!props.dirty.dirty){
            return;
        }
        props.dirty.dirty = false;

        let animatedSp = _animatedSprites.get(this._lastAnimatedName);
        if(this._lastAnimatedName !== props.animationName){
            if(animatedSp && animatedSp.parent){
                animatedSp.stop();
                animatedSp.parent.removeChild(animatedSp);
            }
            this._lastAnimatedName = props.animationName;
        } 

        if(props.src!=undefined && props.src != this._src){
            this._src = props.src;
            if(Array.isArray(props.src)){
                let textures: PIXI.Texture[] = [];
                if(typeof props.src[0] === "number"){
                    props.src.forEach(value=>{
                        textures.push(getTexture(value));
                    });
                }else{
                    textures = props.src;
                }
                this.addAnimated("default",textures);
            }else{
                for(const key in props.src.animations){
                    this.addAnimated(key,props.src.animations[key]);
                }
            }
        }


        animatedSp = _animatedSprites.get(props.animationName);
        if(animatedSp == undefined){
            log(`Warning SpriteAnimated -> _animatedSprites[${props.animationName}] == undefined`);
        }else{
            if(animatedSp.parent == undefined){
                animatedSp.onLoop = ()=>{
                    this.emit(ComponentEvent.LOOP,this);
                }
                animatedSp.onComplete = ()=>{
                    this.emit(ComponentEvent.COMPLETE,this);
                }
                this._curFrameNumber = 0;
                animatedSp.anchor.set(this.props.anchorX,this.props.anchorY);
                this.container.addChild(animatedSp);
                this.emit(ComponentEvent.CHANGE,this);
            }
            animatedSp.loop = props.loop;
            animatedSp.animationSpeed = props.animationSpeed;

            if(this.props.playing){
                animatedSp.gotoAndPlay(this._curFrameNumber);
            }else{
                animatedSp.gotoAndStop(this._curFrameNumber);
            }
        }
    }

    public release(){
        super.release();
        this._animatedSprites.forEach(element => {
            if(element.parent){
                element.parent.removeChild(element);
            }
            element.removeAllListeners();
            element.destroy();
        });
        this._src = undefined;
        this.props.src = undefined;
    }
    
}