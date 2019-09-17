import InputBase from "./InputBase";
import ClickEvent from "./Interaction/ClickEvent";
import SliceSprite from "./c/SliceSprite";
/**
 * UI 按钮显 示对象
 *
 * @class
 * @extends PIXI.UI.InputBase
 * @memberof PIXI.UI
 * @param [options.tabIndex=0] {Number} input tab index
 * @param [options.tabGroup=0] {Number|String} input tab group
 * @param [options.width=100h] {Number|String} width
 * @param [options.height=20] {Number|String} height
 */
export default class InputSkinBase extends InputBase {
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    constructor(width, height, tabIndex, tabGroup) {
        super(width, height, tabIndex, tabGroup);
        this._isHover = false;
        this._background = new SliceSprite();
        this._clickEvent = new ClickEvent(this, true);
        /**
         * 组件的当前视图状态 。 后续扩展
         */
        this._currentState = "Up";
        this._background.widthPet = "100%";
        this._background.heightPct = "100%";
        this._background.pivot = 0.5;
        this._background.verticalAlign = 2 /* middle */;
        this._background.horizontalAlign = 2 /* center */;
        this._background.borderWidth = 10;
        this.addChild(this._background);
        this.on("move" /* onMove */, this.onMove, this);
        this.on("hover" /* onHover */, this.onHover, this);
        this.on("press" /* onPress */, this.onPress, this);
        this.on("click" /* onClick */, this.onClick, this);
    }
    onHover(e, thisObj, over) {
        this._isHover = over;
        this.currentState = "Up";
    }
    onPress(e, thisObj, isPress) {
        if (isPress)
            this.currentState = "Down";
        else
            this.currentState = "Up";
    }
    onClick() {
        //this.currentState = "Down";
    }
    onMove() {
        this.currentState = "Move";
    }
    get currentState() {
        return this._currentState;
    }
    set currentState(value) {
        if (value === this._currentState) {
            return;
        }
        this._currentState = value;
        this.update();
    }
    get sourceUp() {
        return this._sourceUp;
    }
    set sourceUp(value) {
        if (value == this._sourceUp) {
            return;
        }
        this._sourceUp = value;
        this.update();
    }
    get sourceMove() {
        return this._sourceMove;
    }
    set sourceMove(value) {
        if (value == this._sourceMove) {
            return;
        }
        this._sourceMove = value;
        this.update();
    }
    get sourceDown() {
        return this._sourceDown;
    }
    set sourceDown(value) {
        if (value == this._sourceDown) {
            return;
        }
        this._sourceDown = value;
        this.update();
    }
    focus() {
        if (!this._focused) {
            super.focus();
        }
    }
    blur() {
        if (this._focused) {
            super.blur();
        }
    }
    updateHitArea() {
        const bounds = this.container.getLocalBounds();
        this.container.hitArea = new PIXI.Rectangle(bounds.x < 0 ? bounds.x : 0, bounds.y < 0 ? bounds.y : 0, Math.max(bounds.x + bounds.width + (bounds.x < 0 ? -bounds.x : 0), this.width), Math.max(bounds.y + bounds.height + (bounds.y < 0 ? -bounds.y : 0), this.height));
    }
    update() {
        const thisObj = this;
        this._background.width = this.width;
        this._background.height = this.height;
        this._background.source = thisObj["_source" + this.currentState];
        this.updateHitArea();
    }
}
//# sourceMappingURL=InputSkinBase.js.map