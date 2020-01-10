import {DisplayObject} from "../../core/DisplayObject";
import { ClickEvent,InteractionEvent,InputController, TouchMouseEvent, ComponentEvent } from "../../interaction/Index";

/**
 * 输入对象的基础类
 */
export class InputBase extends DisplayObject{
    public constructor(){
        super();
        //this.container.interactive = true;
        this.container.interactiveChildren = false;

        this.on(TouchMouseEvent.onMove,this.onMove,this);
        this.on(TouchMouseEvent.onHover,this.onHover,this);
        this.on(TouchMouseEvent.onPress,this.onPress,this);
        this.on(TouchMouseEvent.onClick,this.onClick,this);

    }

    protected clickEvent = new ClickEvent(this,true);;
    private _currentState: "up" | "move" | "down" | "disabled" = "up";
    protected get currentState(): "up" | "move" | "down" | "disabled" {
        return this._currentState;
    }
    protected set currentState(value: "up" | "move" | "down" | "disabled") {
        if(this._currentState == value){
            return;
        }
        this._currentState = value;
        this.emit(ComponentEvent.STATE_CHANGE,this,value);
    }
    protected _tabIndex: undefined|number;
    protected _tabGroup: undefined|string;

    protected _focused = false;
    protected _useTab = true;
    protected _usePrev = true;
    protected _useNext = true;
    protected _down = false;

    private _clickSound?: string;
    public get clickSound() {
        return this._clickSound;
    }
    public set clickSound(value) {
        if(this._clickSound === value){
            return;
        }
        this._clickSound = value;
    }

    /** 
     * 状态皮肤，
     */
    public up?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    public down?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    public move?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 状态皮肤，
     */
    public disabled?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 选中状态皮肤，
     */
    public upAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 选中状态皮肤，
     */
    public downAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 选中状态皮肤，
     */
    public moveAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    /** 
     * 选中状态皮肤，
     */
    public disabledAndSelected?: string | number | PIXI.Texture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;

    protected onMove() {

        if(this._down){
            return;
        }
        this.currentState = "move";
    }
    
    //e: InteractionEvent,thisObj: DisplayObject,over: boolean
    protected onHover(){
        this.currentState = "up";
       
    }

    protected onPress(e: InteractionEvent,thisObj: DisplayObject,isPress: boolean){
        this._down = isPress;  
        if(isPress){
            this.focus();
            this.currentState = "down";
        }else{
            this.currentState = "up";
        }
            
    }

    protected onClick(){
        if(this._clickSound){
            this.emit(ComponentEvent.PLAY_AUDIO, {name:this._clickSound,mode:'effect'});
            console.log("aaa");
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
        if (this.currentState!== "down"){
            this.blur();
        }    
    }

    private keyDownEventBind: TAny;
    protected _bindEvents() {
        if (this.stage) {
            this.stage.on("pointerdown", this.documentMouseDown,this);
            this.keyDownEventBind = this.keyDownEvent.bind(this);
            document.addEventListener("keydown", this.keyDownEventBind);
        }
    }

    protected _clearEvents(){
        if (this.stage) {
            this.stage.off("pointerdown", this.documentMouseDown,this);
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
        if(this.documentMouseDown && this.stage)
            this.stage.off("pointerdown", this.documentMouseDown,this);
    }

    public setTabIndex(index: number|undefined,group: string|undefined){
        this._tabIndex = index;
        this._tabGroup = group;
        if(index!==undefined && group!==undefined){
            InputController.registrer(this,index,group)
        }
    }
}