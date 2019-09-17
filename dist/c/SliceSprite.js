import UIBase from "../UIBase";
/**
 * 动态宽高的图片,9切
 * Event: sourceComplete
 */
export default class SliceSprite extends UIBase {
    /**
     * 构造函数，如果不设置horizontalSlice，verticalSlice。 按设置的BorderWidth进行9切
     *
     * @see https://docs.cocos.com/creator/manual/zh/ui/sliced-sprite.html
     */
    constructor() {
        super();
        this._leftWidth = 0;
        this._topHeight = 0;
        this._rightWidth = 0;
        this._bottomHeight = 0;
        /** 边框 */
        this.bw = 0;
        this.vs = true;
        this.hs = true;
    }
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    get source() {
        return this._source;
    }
    set source(value) {
        if (value === undefined) {
            return;
        }
        if (value === this._source) {
            return;
        }
        this._source = value;
        if (value instanceof PIXI.Texture) {
            this._texture = value;
            this.createSlice();
            this.emit(SliceSprite.SourceCompleteEvent, value.frame, this);
        }
        else {
            if (this._texture) {
                this._texture.removeAllListeners();
            }
            this._texture = PIXI.Texture.from(value);
            if (this._texture.width > 1 && this._texture.height > 1) {
                if (this._texture) {
                    this.createSlice();
                    this.emit(SliceSprite.SourceCompleteEvent, this._texture.frame, this);
                }
            }
            else {
                this._texture.once("update", () => {
                    if (this._texture) {
                        this.createSlice();
                        this.emit(SliceSprite.SourceCompleteEvent, this._texture.frame, this);
                    }
                }, this);
            }
        }
    }
    /**
     * 边角宽度，要9切的范围
    */
    set borderWidth(value) {
        this.bw = value;
        this._topHeight = value;
        this._leftWidth = value;
        this._rightWidth = value;
        this._bottomHeight = value;
        this.drawSlicePlane();
    }
    get borderWidth() {
        return this.bw;
    }
    /**
     * 获取设置距离左边宽度
     */
    get leftWidth() {
        return this._leftWidth;
    }
    set leftWidth(value) {
        this._leftWidth = value;
        this.drawSlicePlane();
    }
    /**
     * 获取设置距离顶部宽度
     */
    get topHeight() {
        return this._topHeight;
    }
    set topHeight(value) {
        this._topHeight = value;
        this.drawSlicePlane();
    }
    /**
     * 获取设置距离右边宽度
     */
    get rightWidth() {
        return this._rightWidth;
    }
    set rightWidth(value) {
        this._rightWidth = value;
        this.drawSlicePlane();
    }
    /**
     * 获取设置距离底部宽度
     */
    get bottomHeight() {
        return this._bottomHeight;
    }
    set bottomHeight(value) {
        this._bottomHeight = value;
        this.drawSlicePlane();
    }
    /**
     * 是否水平切
    */
    set horizontalSlice(value) {
        this.hs = value;
        this.setting.minWidth = this.bw * 2;
        this.drawSlicePlane();
    }
    get horizontalSlice() {
        return this.hs;
    }
    /**
      * 是否垂直切
     */
    set verticalSlice(value) {
        this.vs = value;
        this.setting.minHeight = this.bw * 2;
        this.drawSlicePlane();
    }
    get verticalSlice() {
        return this.vs;
    }
    createSlice() {
        if (this._texture == null) {
            return;
        }
        this.container.removeChildren();
        this._nineSlice = new PIXI.NineSlicePlane(this._texture);
        this.drawSlicePlane();
        //跳过编译器
        this.container.addChild(this._nineSlice);
        this.dalayDraw = true;
    }
    drawSlicePlane() {
        if (this._nineSlice === undefined) {
            return;
        }
        const nineSlicePlane = this._nineSlice;
        if (this.vs && this.hs) {
            //默认
            nineSlicePlane.topHeight = this._topHeight;
            nineSlicePlane.bottomHeight = this._bottomHeight;
            nineSlicePlane.leftWidth = this._leftWidth;
            nineSlicePlane.rightWidth = this._rightWidth;
        }
        else if (this.hs) {
            nineSlicePlane.leftWidth = this._leftWidth;
            nineSlicePlane.rightWidth = this._rightWidth;
        }
        else { //vs
            nineSlicePlane.topHeight = this._topHeight;
            nineSlicePlane.bottomHeight = this._bottomHeight;
        }
    }
    update() {
        const nineSlicePlane = this._nineSlice;
        if (nineSlicePlane === undefined) {
            return;
        }
        if (nineSlicePlane) {
            nineSlicePlane.width = this._width;
            nineSlicePlane.height = this._height;
            if (!isNaN(this.tint)) {
                nineSlicePlane.tint = this.tint;
            }
            if (!isNaN(this.blendMode)) {
                nineSlicePlane.blendMode = this.blendMode;
            }
        }
    }
}
/** 图片加载完成事件 */
SliceSprite.SourceCompleteEvent = "sourceCompleteEvent";
//# sourceMappingURL=SliceSprite.js.map