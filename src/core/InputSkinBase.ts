import {InputBase} from "./InputBase";
import { VerticalAlignEnum, HorizontalAlignEnum } from "../enum/AlignEnum";
import {ClickEvent} from "../interaction/ClickEvent";
import {InteractionEvent,TouchMouseEvent} from "../interaction/InteractionEvent";
import {Image} from "../c/Image";
import {UIBase} from './UIBase';

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
export class InputSkinBase extends InputBase{
    /**
     * 按钮构造函数 
     * 
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    public constructor(width: number, height: number, tabIndex: number, tabGroup: string){  
        super(width,height,tabIndex,tabGroup);
        let _background = this._background;
        _background.backgroundRepeat = "nineSlice";
        _background.widthPet = "100%";
        _background.heightPct = "100%";
        _background.pivot = 0.5;
        _background.verticalAlign = VerticalAlignEnum.middle
        _background.horizontalAlign = HorizontalAlignEnum.center;
        _background.borderWidth = 10;
        this.addChild(this._background);
        this.on(TouchMouseEvent.onMove,this.onMove,this);
        this.on(TouchMouseEvent.onHover,this.onHover,this);
        this.on(TouchMouseEvent.onPress,this.onPress,this);
        this.on(TouchMouseEvent.onClick,this.onClick,this);
    }

    protected onHover(e: InteractionEvent,thisObj: UIBase,over: boolean){
        this._isHover = over;
        this.currentState = "Up";
       
    }
    protected onPress(e: InteractionEvent,thisObj: UIBase,isPress: boolean){     
        if(isPress)
            this.currentState = "Down";
        else
            this.currentState = "Up";
    }
    protected onClick(){
        //this.currentState = "Down";
    }
    protected onMove() {
        this.currentState = "Move";
    }
   


    protected _isHover = false;
    protected _background = new Image();
    protected _clickEvent = new ClickEvent(this,true);
    /**
     * 组件的当前视图状态 。 后续扩展
     */
    protected _currentState: "Up" | "Move" | "Down" = "Up";
    public get currentState(): "Up" | "Move" | "Down"  {
        return this._currentState;
    }
    public set currentState(value: "Up" | "Move" | "Down") {
        if(value===this._currentState){
            return;
        }
        this._currentState = value;
        this.update();
    }

    protected _sourceUp: string|undefined;
    public get sourceUp() {
        return this._sourceUp;
    }
    public set sourceUp(value: string|undefined) {
        if(value == this._sourceUp){
            return;
        }
        this._sourceUp = value;
        this.update();
    }
    protected _sourceMove: string|undefined;
    public get sourceMove() {
        return this._sourceMove;
    }
    public set sourceMove(value: string|undefined) {
        if(value == this._sourceMove){
            return;
        }
        this._sourceMove = value;
        this.update();
    }
    protected _sourceDown: string|undefined;
    public get sourceDown() {
        return this._sourceDown;
    }
    public set sourceDown(value: string|undefined) {
        if(value == this._sourceDown){
            return;
        }
        this._sourceDown = value;
        this.update();
    }

    public focus() {
        if (!this._focused) {
            super.focus();
        }
    }
    public blur() {
        if (this._focused) {
            super.blur();
        }
    }

    public updateHitArea(){
        const bounds = this.container.getLocalBounds();
        
        this.container.hitArea = new PIXI.Rectangle(bounds.x < 0 ? bounds.x : 0, bounds.y < 0 ? bounds.y : 0, Math.max(bounds.x + bounds.width + (bounds.x < 0 ? -bounds.x : 0), this.width), Math.max(bounds.y + bounds.height + (bounds.y < 0 ? -bounds.y : 0), this.height));
    }

    public update(){
        const thisObj: TAny = this;
        this._background.width = this.width;
        this._background.height = this.height;
        this._background.source = thisObj["_source"+this.currentState];
        this.updateHitArea();
        
    }
}