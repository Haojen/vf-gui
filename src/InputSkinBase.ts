import InputBase from "./InputBase";
import { VerticalAlignEnum, HorizontalAlignEnum } from "./Enum/AlignEnum";
import ClickEvent from "./Interaction/ClickEvent";
import InteractionEvent, { TouchMouseEvent } from "./Interaction/InteractionEvent";
import SliceSprite from "./c/SliceSprite";
import { UIBase } from "./UI";

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
export default class InputSkinBase extends InputBase{
    /**
     * 按钮构造函数 
     * 
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    public constructor(width: number, height: number, tabIndex: number, tabGroup: string){  
        super(width,height,tabIndex,tabGroup);
        this._background.widthPet = "100%";
        this._background.heightPct = "100%";
        this._background.pivot = 0.5;
        this._background.verticalAlign = VerticalAlignEnum.middle
        this._background.horizontalAlign = HorizontalAlignEnum.center;
        this._background.borderWidth = 10;
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
    protected onPress(){
        this.currentState = "Down";
    }
    protected onClick(){
        this.currentState = "Down";
    }
    protected onMove() {
        this.currentState = "Move";
    }
   


    protected _isHover = false;
    protected _background = new SliceSprite();
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
        this._sourceUp = value;
        this.update();
    }
    protected _sourceMove: string|undefined;
    public get sourceMove() {
        return this._sourceMove;
    }
    public set sourceMove(value: string|undefined) {
        this._sourceMove = value;
        this.update();
    }
    protected _sourceDown: string|undefined;
    public get sourceDown() {
        return this._sourceDown;
    }
    public set sourceDown(value: string|undefined) {
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
        const source: string = thisObj["_source"+this.currentState];
        if(source && this._background.source!==source){
            this._background.width = this.width;
            this._background.height = this.height;
            this._background.source = source;
            this.updateHitArea();
            
        }
        
    }
}