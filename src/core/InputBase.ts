import {UIBase} from "./UIBase";
import { ClickEvent,InteractionEvent,InputController, TouchMouseEvent } from "../interaction/Index";
import { Stage } from "./Stage";
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
export class InputBase extends UIBase{
    public constructor(){
        super();
        //this.container.interactive = true;
        this.container.interactiveChildren = false;

        this.on(TouchMouseEvent.onMove,this.onMove,this);
        this.on(TouchMouseEvent.onHover,this.onHover,this);
        this.on(TouchMouseEvent.onPress,this.onPress,this);
        this.on(TouchMouseEvent.onClick,this.onClick,this);

    }

    protected _clickEvent = new ClickEvent(this,true);;
    protected currentState: "up"|"move"|"down"|"disabled" = "up";
    protected _tabIndex: undefined|number;
    protected _tabGroup: undefined|string;

    protected _focused = false;
    protected _useTab = true;
    protected _usePrev = true;
    protected _useNext = true;
    protected _down = false;

    protected onMove() {
        if(this._down){
            return;
        }
        this.currentState = "move";
    }
    //e: InteractionEvent,thisObj: UIBase,over: boolean
    protected onHover(){
        this.currentState = "up";
       
    }
    protected onPress(e: InteractionEvent,thisObj: UIBase,isPress: boolean){
        this._down = isPress;  
        if(isPress){
            this.focus();
            this.currentState = "down";
        }else{
            this.currentState = "up";
        }
            
    }
    protected onClick(){
        //this.currentState = "up";
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
        if (this.currentState!== "down"){
            this.blur();
        }    
    }

    private keyDownEventBind: TAny;
    protected _bindEvents() {
        if (Stage.Ins) {
            Stage.Ins.on("pointerdown", this.documentMouseDown,this);
            this.keyDownEventBind = this.keyDownEvent.bind(this);
            document.addEventListener("keydown", this.keyDownEventBind);
        }
    }

    protected _clearEvents(){
        if (Stage.Ins) {
            Stage.Ins.off("pointerdown", this.documentMouseDown,this);
            document.removeEventListener("keydown", this.keyDownEventBind);
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

    public release() {
        super.release();
        this.off(TouchMouseEvent.onMove,this.onMove,this);
        this.off(TouchMouseEvent.onHover,this.onHover,this);
        this.off(TouchMouseEvent.onPress,this.onPress,this);
        this.off(TouchMouseEvent.onClick,this.onClick,this);
        if(this.keyDownEventBind)
            document.removeEventListener("keydown", this.keyDownEventBind);
        if(this.documentMouseDown && Stage.Ins)
            Stage.Ins.off("pointerdown", this.documentMouseDown,this);
    }

    public setTabIndex(index: number|undefined,group: string|undefined){
        this._tabIndex = index;
        this._tabGroup = group;
        if(index!==undefined && group!==undefined){
            InputController.registrer(this,index,group)
        }
    }
}