import { UIBase } from "../core/UIBase";
import { getSound, getTexture } from "../core/Utils";
import { BaseProps } from "../layout/BaseProps";
import { CSSStyle } from "../layout/CSSStyle";
import { SpriteAnimated } from "./SpriteAnimated";
import { InputBaseProp, InputBase } from "../core/InputBase";
import { GroupController } from "../interaction/Index";
export const $sounds = new Map<string,PIXI.sound.Sound>();
// isLoaded: boolean;
//         isPlaying: boolean;
//         autoPlay: boolean;
//         singleInstance: boolean;
//         preload: boolean;
//         url: string;
//         options: Options;
//         media: IMedia;
//         static from(source: string | Options | ArrayBuffer | HTMLAudioElement): Sound;
//         constructor(media: IMedia, options: Options);
//         readonly context: IMediaContext;
//         pause(): Sound;
//         resume(): Sound;
//         paused: boolean;
//         speed: number;
//         filters: Filter[];
//         addSprites(alias: string, data: SoundSpriteData): SoundSprite;
//         addSprites(sprites: {
//             [id: string]: SoundSpriteData;
//         }): SoundSprites;
//         destroy(): void;
//         removeSprites(alias?: string): Sound;
//         readonly isPlayable: boolean;
//         stop(): Sound;
//         play(alias: string, callback?: CompleteCallback): IMediaInstance | Promise<IMediaInstance>;
//         play(source?: string | PlayOptions | CompleteCallback,
//              callback?: CompleteCallback): IMediaInstance | Promise<IMediaInstance>;
//         refresh(): void;
//         refreshPaused(): void;
//         volume: number;
//         muted: boolean;
//         loop: boolean;
//         readonly instances: IMediaInstance[];
//         readonly sprites: SoundSprites;
//         readonly duration: number;
//         autoPlayStart(): IMediaInstance;


const updatepropsProxyHandler = {
    set(target: SoundProps, key: string, value: TAny) {
        if ((target as TAny)[key] === value) {
            return true;
        }
        target.dirty.dirty = true;
        switch (key) {
            case "src":
                target.dirty.src = true;
                break;
            case "autoPlay":
            case "volume":
            case "loop":
                target.dirty.volume = true;
                break;
            default:
                target.dirty.skin = true;

        }
        (target as TAny)[key] = value;
        return true;
    }
}

/** 对象的自有字段 */
class SoundProps extends InputBaseProp {

    public constructor() {
        super(updatepropsProxyHandler);
    }
    public dirty = { dirty: false, src: false, volume: false,skin:false };
    /**
     * 音频
     */
    src: number | string | PIXI.sound.Options | ArrayBuffer | HTMLAudioElement | undefined;
    /**
     * 是否自动播放
     */
    autoPlay = false;
    /**
     * 音量
     */
    volume = 100;
    /**
     * 是否循环
     */
    loop = false;
    /** 
     * 播放中或其他行进中的状态，可以使序列图数组
     */
    playingAnimated?: string | number | PIXI.Texture | string[] | number[] | PIXI.Texture[];
    /**
     * 状态展示
     */
    readonly spriteAnimated = new SpriteAnimated();
}

/**
 * 音频组件
 * 状态目前只有
 */
export class Sound extends InputBase {

    /** 图片加载完成事件 */
    public static readonly onload = "onload";


    public constructor() {
        super();
    }

    protected _props?: TAny;
    protected _sound: PIXI.sound.Sound | undefined;
    protected _mediaInstance:PIXI.sound.IMediaInstance | undefined;
    protected _source: number | string | PIXI.sound.Options | ArrayBuffer | HTMLAudioElement | undefined;
    protected _oldState = "";
    protected _playing = false;

    protected initProps() {
        let props = this.props;
        props.spriteAnimated.props.loop = true;
        // props.spriteAnimated.props.anchorX = 0.5;
        // props.spriteAnimated.props.anchorY = 0.5;
        this.addChild(props.spriteAnimated);
    }

    /** 子类可以重写 */
    public get props(): SoundProps {

        if (this._props) {
            return this._props;
        }

        this._props = new SoundProps().proxyData;
        this.initProps();

        return this._props;
    }
    
    public async play(){
        let uiObjects = GroupController.getGroup(this.groupName);
        if(uiObjects){
            for(let key in uiObjects){
                if(uiObjects[key] instanceof Sound){
                    (uiObjects[key] as Sound).stop();
                }
                
            }
        }
        if(this._mediaInstance){
            this._mediaInstance.off('progress',this.progress,this);
            this._mediaInstance.off('end',this.progress,this);
        }
        if(this._sound){
            let sound = await this._sound.play();
            sound.on('progress',this.progress,this);
            sound.on('end',this.end,this);
        }
        this._playing = true;
    }

    public stop(){
        if(this._sound){
            this._sound.stop();
        }
        this._playing = false;
    }

    /**
     * 恢复播放
     */
    public resume(){
        if(this._sound){
            this._sound.resume();
        }
    }

    /**
     * 暂停播放
     */
    public pause(){
        if(this._sound){
            this._sound.pause();
        }
    }

    public update(_style: CSSStyle) {

        const props = this.props;
        if (props.dirty.dirty) {
            props.dirty.dirty = false;
            let sound = this._sound;

            if (props.dirty.src) {
                props.dirty.volume = false;
                if (props.src === undefined) {
                    this.releaseSound();
                    return;
                }

                if (props.src && props.src !== this._source) {
                    this._source = props.src;
                    sound = this._sound = getSound(props.src);
                    sound.loop = props.loop;
                    sound.volume = props.volume;
                    sound.autoPlay = props.autoPlay;
                    if(props.autoPlay || this._playing){
                        console.log(sound.loop,sound.autoPlay,sound.volume);
                        this.play();
                    }else{
                        this.stop();
                    }
                }
            }

            if (props.dirty.volume) {
                props.dirty.volume = false;
                if (sound) {
                    sound.loop = props.loop;
                    sound.volume = props.volume;
                    sound.autoPlay = props.autoPlay;
                }
            }
            this.container.hitArea = new PIXI.Rectangle(0, 0, this._width, this._height);
        }

        
        if (this.currentState !== this._oldState) {
            this._oldState = this.currentState;
            props.spriteAnimated.style.width = this._width;
            props.spriteAnimated.style.height = this._height;
            let src = (props as TAny)[this.currentState];
            if(src!=undefined){
                if(Array.isArray(src)){
                    let textures:PIXI.Texture[] = [];
                    src.forEach(value=>{
                        textures.push(getTexture(value));
                    })
                    props.spriteAnimated.props.src = textures;
                }else{
                    props.spriteAnimated.props.src = [getTexture(src)];
                }
            }
        }


    }

    private progress(rogress:number, duratio:number) {
        console.log(rogress,duratio);
    }
    private end() {
        console.log("end");
    }

    public release() {
        super.release();
        this.releaseSound();
        this.props.spriteAnimated.release();
    }

    private releaseSound() {
        if(this._mediaInstance){
            this._mediaInstance.off('progress',this.progress,this);
            this._mediaInstance.off('end',this.progress,this);
        }
        if (this._sound) {
            this.removeAllListeners();
            this._sound.stop();
            this._sound.destroy();
            this._sound = undefined;
        }
    }

}