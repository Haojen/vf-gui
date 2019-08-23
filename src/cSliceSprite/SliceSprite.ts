import UIBase from "../UIBase";
/**
 * 动态宽高的图片,9切
 */
export class SliceSprite extends UIBase{
    /**
     * 构造函数，如果不设置horizontalSlice，verticalSlice。 按设置的BorderWidth进行9切
     *
     * @class
     * @memberof PIXI.UI
     * @param Texture {PIXI.Texture} the texture for this SliceSprite
     * @param BorderWidth {Number} 边角宽度，要9切的范围
     * @param horizontalSlice {Boolean} 是否水平切，上下切
     * @param verticalSlice {Boolean} 是否垂直切，左右切
     * @param [tile=false] {Boolean} tile or streach
     * 
     * @see https://docs.cocos.com/creator/manual/zh/ui/sliced-sprite.html
     */
    public constructor(texture: PIXI.Texture, borderWidth: number, horizontalSlice?: boolean, verticalSlice?: boolean, tile?: boolean){
        super(texture.width, texture.height);
        
        this.bw = borderWidth || 5;
        this.vs = typeof verticalSlice !== "undefined" ? verticalSlice : true;
        this.hs = typeof horizontalSlice !== "undefined" ? horizontalSlice : true;
        this.t = texture.baseTexture;
        this.f = texture.frame;
        this.tile = tile ? tile : false;
        if (this.hs) this.setting.minWidth = borderWidth * 2;
        if (this.vs) this.setting.minHeight = borderWidth * 2;
    }


    private ftl: PIXI.Rectangle|undefined;
    private ftr: PIXI.Rectangle|undefined;
    private fbl: PIXI.Rectangle|undefined;
    private fbr: PIXI.Rectangle|undefined;
    private ft: PIXI.Rectangle|undefined;
    private fb: PIXI.Rectangle|undefined;
    private fl: PIXI.Rectangle|undefined;
    private fr: PIXI.Rectangle|undefined;
    private ff: PIXI.Rectangle|undefined;

    private stl: PIXI.Sprite|undefined;
    private str: PIXI.Sprite|undefined;
    private sbl: PIXI.Sprite|undefined;
    private sbr: PIXI.Sprite|undefined;

    private st: PIXI.TilingSprite|PIXI.Sprite|undefined;;
    private sb: PIXI.TilingSprite|PIXI.Sprite|undefined;;
    private sl: PIXI.TilingSprite|PIXI.Sprite|undefined;;
    private sr: PIXI.TilingSprite|PIXI.Sprite|undefined;;
    private sf: PIXI.TilingSprite|PIXI.Sprite|undefined;
    /** 边框 */
    private bw: number;
    private vs: boolean;
    private hs: boolean;
    private t: PIXI.BaseTexture;
    private f: PIXI.Rectangle;
    private tile: boolean;

    protected initialize() {
        super.initialize();
        const f = this.f;
        const bw = this.bw;
        const t = this.t;
        //get frames
        if (this.vs && this.hs) {
            this.ftl = new PIXI.Rectangle(f.x, f.y, bw, bw);
            this.ftr = new PIXI.Rectangle(f.x + f.width - bw, f.y, bw, bw);
            this.fbl = new PIXI.Rectangle(f.x, f.y + f.height - bw, bw, bw);
            this.fbr = new PIXI.Rectangle(f.x + f.width - bw, f.y + f.height - bw, bw, bw);
            this.ft = new PIXI.Rectangle(f.x + bw, f.y, f.width - bw * 2, bw);
            this.fb = new PIXI.Rectangle(f.x + bw, f.y + f.height - bw, f.width - bw * 2, bw);
            this.fl = new PIXI.Rectangle(f.x, f.y + bw, bw, f.height - bw * 2);
            this.fr = new PIXI.Rectangle(f.x + f.width - bw, f.y + bw, bw, f.height - bw * 2);
            this.ff = new PIXI.Rectangle(f.x + bw, f.y + bw, f.width - bw * 2, f.height - bw * 2);
        }
        else if (this.hs) {
            this.fl = new PIXI.Rectangle(f.x, f.y, bw, f.height);
            this.fr = new PIXI.Rectangle(f.x + f.width - bw, f.y, bw, f.height);
            this.ff = new PIXI.Rectangle(f.x + bw, f.y, f.width - bw * 2, f.height);
        }
        else { //vs
            this.ft = new PIXI.Rectangle(f.x, f.y, f.width, bw);
            this.fb = new PIXI.Rectangle(f.x, f.y + f.height - bw, f.width, bw);
            this.ff = new PIXI.Rectangle(f.x, f.y + bw, f.width, f.height - bw * 2);
        }

        //TODO: swap frames if rotation



        //make sprites
        //跳过编译器
        const stl: PIXI.Sprite = this.stl as PIXI.Sprite;
        const str: PIXI.Sprite = this.str as PIXI.Sprite;
        const sbl: PIXI.Sprite = this.sbl as PIXI.Sprite;
        const sbr: PIXI.Sprite = this.sbr as PIXI.Sprite;
        let sl: PIXI.Sprite = this.sl as PIXI.Sprite;
        let sr: PIXI.Sprite = this.sr as PIXI.Sprite;
        let st: PIXI.Sprite = this.st as PIXI.Sprite;
        let sb: PIXI.Sprite = this.sb as PIXI.Sprite;
        let sf: PIXI.Sprite = this.sf as PIXI.Sprite;
        //make sprites
        sf = this.tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.ff)) : new PIXI.Sprite(new PIXI.Texture(t, this.ff));
        this.container.addChildAt(sf, 0);
        if (this.vs && this.hs) {
            this.stl = new PIXI.Sprite(new PIXI.Texture(t, this.ftl));
            this.str = new PIXI.Sprite(new PIXI.Texture(t, this.ftr));
            this.sbl = new PIXI.Sprite(new PIXI.Texture(t, this.fbl));
            this.sbr = new PIXI.Sprite(new PIXI.Texture(t, this.fbr));
            this.container.addChildAt(this.stl, 0);
            this.container.addChildAt(this.str, 0);
            this.container.addChildAt(this.sbl, 0);
            this.container.addChildAt(this.sbr, 0);

        }

        if (this.hs) {
            sl = this.tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fl)) : new PIXI.Sprite(new PIXI.Texture(t, this.fl));
            sr = this.tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fr)) : new PIXI.Sprite(new PIXI.Texture(t, this.fr));
            this.container.addChildAt(sl, 0);
            this.container.addChildAt(sr, 0);
        }
        if (this.vs) {
            st = this.tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.ft)) : new PIXI.Sprite(new PIXI.Texture(t, this.ft));
            sb = this.tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fb)) : new PIXI.Sprite(new PIXI.Texture(t, this.fb));
            this.container.addChildAt(st, 0);
            this.container.addChildAt(sb, 0);
        }
        if(sl && sr)
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

    public update(){
        if (!this.initialized) return;
        const bw = this.bw;
        if (this.vs && this.hs) {
            if(this.str && this.sbr && this.sr && this.sbl && this.sf && this.st && this.sb && this.sl){
                this.str.x = this.sbr.x = this.sr.x = this._width - bw;
                this.sbl.y = this.sbr.y = this.sb.y = this._height - bw;
                this.sf.width = this.st.width = this.sb.width = this._width - bw * 2;
                this.sf.height = this.sl.height = this.sr.height = this._height - bw * 2;
            }

        }
        else if (this.hs) {
            if(this.sr && this.sl && this.sf ){
                this.sr.x = this._width - bw;
                this.sl.height = this.sr.height = this.sf.height = this._height;
                this.sf.width = this._width - bw * 2;
            }

        }
        else { //vs
            if(this.sb && this.st && this.sf ){
                this.sb.y = this._height - bw;
                this.st.width = this.sb.width = this.sf.width = this._width;
                this.sf.height = this._height - bw * 2;
            }

        }

        if (!isNaN(this.tint)) {
            if(this.sf )
                this.sf.tint = this.tint;
            if (this.vs && this.stl && this.str && this.sbl && this.sbr) 
                this.stl.tint = this.str.tint = this.sbl.tint = this.sbr.tint = this.tint;
            if (this.hs && this.sl && this.sr) 
                this.sl.tint = this.sr.tint = this.tint;
            if (this.vs && this.st && this.sb) 
                this.st.tint = this.sb.tint = this.tint;
        }

        if (!isNaN(this.blendMode)) {
            if(this.sf )
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