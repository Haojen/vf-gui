import { setRectangle, log } from "../Utils";
import UIBase from "../UIBase";
import Sprite from "./Sprite";
/**
 * 动态宽高的图片,9切
 */
export default class SliceSprite extends UIBase {
    /**
     * 构造函数，如果不设置horizontalSlice，verticalSlice。 按设置的BorderWidth进行9切
     * 
     * @see https://docs.cocos.com/creator/manual/zh/ui/sliced-sprite.html
     */
    public constructor() {
        super();
    }

    protected _texture: PIXI.Texture|undefined;
    protected _source: number | string | PIXI.Texture |HTMLImageElement| HTMLCanvasElement | HTMLVideoElement|undefined;
    /** 
     * 获取或设置显示源 
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     * 
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    public get source(): number | string | PIXI.Texture | HTMLImageElement |HTMLCanvasElement | HTMLVideoElement|undefined {
        return this._source;
    }
    public set source(value: number | string | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement|undefined) {
        if(value === undefined){
            return;
        }
        if(value === this._source){
            return;
        }
        this._source = value;
        if(value instanceof  PIXI.Texture){
            this.t= value.baseTexture;
            this.f = value.frame;
        }else{
            if(this._texture){
                this._texture.removeAllListeners();
            }
            this._texture = PIXI.Texture.from(value);
            this._texture.once("update",()=>{
                if(this._texture){
                    this.t = this._texture.baseTexture;
                    this.f = this._texture.frame;
                    if(!this.height){
                        this.height = this.t.height;
                    }
                    if(!this.width){
                        this.width = this.t.width;
                    } 
                    this.updatesettings(true);           
                }
            },this);

        }
    }

    /** 
     * 边角宽度，要9切的范围
    */
    public set borderWidth(value: number) {
        this.bw = value;
        this.updatesettings(true);
    }
    public get borderWidth() {
        return this.bw;
    }
    /** 
     * 是否水平切，上下切
    */
    public set horizontalSlice(value: boolean) {
        this.hs = value;
        this.setting.minWidth = this.bw * 2;
        this.updatesettings(true);
    }
    public get horizontalSlice() {
        return this.hs;
    }
    /** 
      * 是否垂直切，左右切
     */
    public set verticalSlice(value: boolean) {
        this.vs = value;
        this.setting.minHeight = this.bw * 2;
        this.updatesettings(true);
    }
    public get verticalSlice() {
        return this.vs;
    }
    /** 
      * 是否垂直切，左右切
     */
    public set tile(value: boolean) {
        this._tile = value;
        this.updatesettings(true);
    }
    public get tile() {
        return this.tile;
    }
    private ftl= new PIXI.Rectangle;
    private ftr= new PIXI.Rectangle;
    private fbl= new PIXI.Rectangle;
    private fbr= new PIXI.Rectangle;
    private ft= new PIXI.Rectangle;
    private fb= new PIXI.Rectangle;
    private fl= new PIXI.Rectangle;
    private fr= new PIXI.Rectangle;
    private ff= new PIXI.Rectangle;

    private stl=new PIXI.Sprite();
    private str=new PIXI.Sprite();
    private sbl=new PIXI.Sprite();
    private sbr=new PIXI.Sprite();

    private st: PIXI.TilingSprite | PIXI.Sprite | undefined;;
    private sb: PIXI.TilingSprite | PIXI.Sprite | undefined;;
    private sl: PIXI.TilingSprite | PIXI.Sprite | undefined;;
    private sr: PIXI.TilingSprite | PIXI.Sprite | undefined;;
    private sf: PIXI.TilingSprite | PIXI.Sprite | undefined;
    /** 边框 */
    private bw = 0;
    private vs = true;
    private hs = true;
    private _tile = false;
    private t: PIXI.BaseTexture | undefined;
    private f: PIXI.Rectangle | undefined;

    protected updateLayer(){
        
        const f = this.f;
        const bw = this.bw;
        const t = this.t;
        if(t === undefined){
            log("SliceSprite.init.t = undefined ");
            return;
        }
        if(f === undefined){
            log("SliceSprite.init.f = undefined ");
            return;
        }
        //get frames
        if (this.vs && this.hs) {
            
            setRectangle(this.ftl,f.x, f.y, bw, bw);
            setRectangle(this.ftr,f.x + f.width - bw, f.y, bw, bw);
            setRectangle(this.fbl,f.x, f.y + f.height - bw, bw, bw);
            setRectangle(this.fbr,f.x + f.width - bw, f.y + f.height - bw, bw, bw);
            setRectangle(this.ft,f.x + bw, f.y, f.width - bw * 2, bw);
            setRectangle(this.fb,f.x + bw, f.y + f.height - bw, f.width - bw * 2, bw);
            setRectangle(this.fl,f.x, f.y + bw, bw, f.height - bw * 2);
            setRectangle(this.fr,f.x + f.width - bw, f.y + bw, bw, f.height - bw * 2);
            setRectangle(this.ff,f.x + bw, f.y + bw, f.width - bw * 2, f.height - bw * 2);
        }
        else if (this.hs) {
            setRectangle(this.fl,f.x, f.y, bw, f.height);
            setRectangle(this.fr,f.x + f.width - bw, f.y, bw, f.height);
            setRectangle(this.ff,f.x + bw, f.y, f.width - bw * 2, f.height);
        }
        else { //vs
            setRectangle(this.ft,f.x, f.y, f.width, bw);
            setRectangle(this.fb,f.x, f.y + f.height - bw, f.width, bw);
            setRectangle(this.ff,f.x, f.y + bw, f.width, f.height - bw * 2);
        }

        //TODO: swap frames if rotation

        //make sprites
        //跳过编译器
        this.container.removeChildren();
        const stl = this.stl;
        const str = this.str;
        const sbl = this.sbl;
        const sbr = this.sbr;
        let sl = this.sl as PIXI.Sprite;
        let sr = this.sr as PIXI.Sprite;
        let st = this.st as PIXI.Sprite;
        let sb = this.sb as PIXI.Sprite;
        let sf = this.sf as PIXI.Sprite;
        //make sprites
        sf = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.ff)) : new PIXI.Sprite(new PIXI.Texture(t, this.ff));
        this.container.addChildAt(sf, 0);
        if (this.vs && this.hs) {
            this.stl.texture = new PIXI.Texture(t, this.ftl);
            this.str.texture = new PIXI.Texture(t, this.ftr);
            this.sbl.texture = new PIXI.Texture(t, this.fbl);
            this.sbr.texture = new PIXI.Texture(t, this.fbr);

            this.container.addChildAt(this.stl, 0);
            this.container.addChildAt(this.str, 0);
            this.container.addChildAt(this.sbl, 0);
            this.container.addChildAt(this.sbr, 0);
        }

        if (this.hs) {
            sl = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fl)) : new PIXI.Sprite(new PIXI.Texture(t, this.fl));
            sr = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fr)) : new PIXI.Sprite(new PIXI.Texture(t, this.fr));
            this.container.addChildAt(sl, 0);
            this.container.addChildAt(sr, 0);
        }
        if (this.vs) {
            st = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.ft)) : new PIXI.Sprite(new PIXI.Texture(t, this.ft));
            sb = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fb)) : new PIXI.Sprite(new PIXI.Texture(t, this.fb));
            this.container.addChildAt(st, 0);
            this.container.addChildAt(sb, 0);
        }
        if (sl && sr)
            //set constant position and sizes
            if (this.vs && this.hs) st.x = sb.x = sl.y = sr.y = stl.width = str.width = sbl.width = sbr.width = stl.height = str.height = sbl.height = sbr.height = bw;
        if (this.hs) sf.x = sl.width = sr.width = bw;
        if (this.vs) sf.y = st.height = sb.height = bw;

        this.stl = stl;
        this.str = str;
        this.sbl = sbl;
        this.sbr = sbr;
        this.sl = sl;
        this.sr = sr;
        this.st = st;
        this.sb = sb;
        this.sf = sf;
    }

    public update() {
        if(this.t === undefined || this.t.width ===0 || this.t.height ===0 ){
            return;
        }
        console.log("r1esou2rce1",this.t); 
        console.log("r1esou2rce1",this.f); 
        console.log("wh",this.t.width,this.t.height);
        this.updateLayer();
        const bw = this.bw;
        if (this.vs && this.hs) {
            if (this.str && this.sbr && this.sr && this.sbl && this.sf && this.st && this.sb && this.sl) {
                this.str.x = this.sbr.x = this.sr.x = this._width - bw;
                this.sbl.y = this.sbr.y = this.sb.y = this._height - bw;
                this.sf.width = this.st.width = this.sb.width = this._width - bw * 2;
                this.sf.height = this.sl.height = this.sr.height = this._height - bw * 2;
            }

        }
        else if (this.hs) {
            if (this.sr && this.sl && this.sf) {
                this.sr.x = this._width - bw;
                this.sl.height = this.sr.height = this.sf.height = this._height;
                this.sf.width = this._width - bw * 2;
            }

        }
        else { //vs
            if (this.sb && this.st && this.sf) {
                this.sb.y = this._height - bw;
                this.st.width = this.sb.width = this.sf.width = this._width;
                this.sf.height = this._height - bw * 2;
            }

        }

        if (!isNaN(this.tint)) {
            if (this.sf)
                this.sf.tint = this.tint;
            if (this.vs && this.stl && this.str && this.sbl && this.sbr)
                this.stl.tint = this.str.tint = this.sbl.tint = this.sbr.tint = this.tint;
            if (this.hs && this.sl && this.sr)
                this.sl.tint = this.sr.tint = this.tint;
            if (this.vs && this.st && this.sb)
                this.st.tint = this.sb.tint = this.tint;
        }

        if (!isNaN(this.blendMode)) {
            if (this.sf)
                this.sf.blendMode = this.blendMode;
            if (this.vs && this.hs && this.stl && this.str && this.sbl && this.sbr)
                this.stl.blendMode = this.str.blendMode = this.sbl.blendMode = this.sbr.blendMode = this.blendMode;
            if (this.hs && this.sl && this.sr)
                this.sl.blendMode = this.sr.blendMode = this.blendMode;
            if (this.vs && this.st && this.sb)
                this.st.blendMode = this.sb.blendMode = this.blendMode;
        }
    }

}