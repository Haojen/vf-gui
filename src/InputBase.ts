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
export default class InputBase extends UIBase{
    public constructor(width: number, height: number, tabIndex: number, tabGroup: string){
        super(width,height);
        this.container.interactive = true;
        InputController.registrer(this, tabIndex, tabGroup);
        this.container.on("pointerdown",this.onPointer,this);
        this.container.on("pointerup",this.onPointer,this);
        this.container.on("pointerupoutside",this.onPointer,this);
    }
    protected _focused = false;
    private _useTab = true;
    private _usePrev = true;
    private _useNext = true;
    private __down = false;

    protected onPointer(e: PIXI.interaction.InteractionEvent){
        switch(e.type){
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

    protected keyDownEvent (event: WheelEvent|Event) {
        const e = event as WheelEvent;
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

    protected documentMouseDown(){
        if (!this.__down)
            this.blur();
    }

    protected _bindEvents() {
        if (this.stage) {
            this.stage.on("pointerdown", this.documentMouseDown,this);
            document.addEventListener("keydown", this.keyDownEvent.bind(this));
        }
    }

    protected _clearEvents(){
        if (this.stage) {
            this.stage.off("pointerdown", this.documentMouseDown,this);
            document.removeEventListener("keydown", this.keyDownEvent.bind(this));
        }
    }

    public focus(){
        if (!this._focused) {
            this._focused = true;
            this._bindEvents();
            InputController.set(this);
            this.emit("focusChanged", true);
            this.emit("focus");

        }
    }

    public blur(){
        if (this._focused) {
            InputController.clear();
            this._focused = false;
            this._clearEvents();
            this.emit("focusChanged", false);
            this.emit("blur");

        }
    }

}