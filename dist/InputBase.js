import UIBase from "./UIBase";
import * as InputController from "./Interaction/InputController";
/**
 * 输入对象的基础类
 *
 * base object for all Input type objects
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {number} 宽度
 * @param height {number} 高度
 * @param tabIndex {(PIXI.UI.SliceSprite|PIXI.UI.Sprite)} will be used as background for input
 */
export default class InputBase extends UIBase {
    constructor(width, height, tabIndex, tabGroup) {
        super(width, height);
        this._focused = false;
        this._useTab = true;
        this._usePrev = true;
        this._useNext = true;
        this.__down = false;
        this.container.interactive = true;
        InputController.registrer(this, tabIndex, tabGroup);
        this.container.on("pointerdown", this.onPointer, this);
        this.container.on("pointerup", this.onPointer, this);
        this.container.on("pointerupoutside", this.onPointer, this);
    }
    onPointer(e) {
        switch (e.type) {
            case "pointerdown":
                this.focus();
                this.__down = true;
                break;
            case "pointerup":
                this.__down = false;
                break;
            case "pointerupoutside":
                this.__down = false;
                break;
        }
    }
    keyDownEvent(event) {
        const e = event;
        if (e.which === 9) {
            if (this._useTab) {
                InputController.fireTab();
                e.preventDefault();
            }
        }
        else if (e.which === 38) {
            if (this._usePrev) {
                InputController.firePrev();
                e.preventDefault();
            }
        }
        else if (e.which === 40) {
            if (this._useNext) {
                InputController.fireNext();
                e.preventDefault();
            }
        }
    }
    documentMouseDown() {
        if (!this.__down)
            this.blur();
    }
    _bindEvents() {
        if (this.stage) {
            this.stage.on("pointerdown", this.documentMouseDown, this);
            this.keyDownEventBind = this.keyDownEvent.bind(this);
            document.addEventListener("keydown", this.keyDownEventBind);
        }
    }
    _clearEvents() {
        if (this.stage) {
            this.stage.off("pointerdown", this.documentMouseDown, this);
            document.removeEventListener("keydown", this.keyDownEventBind);
        }
    }
    focus() {
        if (!this._focused) {
            this._focused = true;
            this._bindEvents();
            InputController.set(this);
            this.emit("focusChanged", true);
            this.emit("focus");
        }
    }
    blur() {
        if (this._focused) {
            InputController.clear();
            this._focused = false;
            this._clearEvents();
            this.emit("focusChanged", false);
            this.emit("blur");
        }
    }
}
//# sourceMappingURL=InputBase.js.map