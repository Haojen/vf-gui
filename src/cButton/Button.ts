import { InputBase } from "../InputBase";
import { Sprite } from "../cSprite/Sprite";
import { SliceSprite } from "../cSliceSprite/SliceSprite";
import { VerticalAlignEnum, HorizontalAlignEnum } from "../Enum/AlignEnum";
import { Text } from "../cText/Text";
import { ClickEvent } from "../Interaction/ClickEvent";
import { interaction } from "pixi.js";

/*
 * Features:
 * Button, radio button (checkgroups)
 *
 * Methods:
 * blur()
 * focus()
 *
 * Properties:
 * label: get/set Button value
 *
 * Events:
 * "hover"          param: [bool]isHover (hover/leave)
 * "press"          param: [bool]isPressed (pointerdown/pointerup)
 * "click"
 * "blur"
 * "focus"
 * "focusChanged"   param: [bool]isFocussed
 *
 */

/**
 * UI 按钮显 示对象
 *
 * @class
 * @extends PIXI.UI.InputBase
 * @memberof PIXI.UI
 * @param [options.isSliceSprite=null] {SliceSprite|Sprite} 设置图片类型true为SliceSprite,false为Sprite
 * @param [options.tabIndex=0] {Number} input tab index
 * @param [options.tabGroup=0] {Number|String} input tab group
 * @param [options.width=100h] {Number|String} width
 * @param [options.height=20] {Number|String} height
 */
export class Button extends InputBase{
    /**
     * 按钮构造函数 
     * 
     * option.isSliceSprite 设置图片类型true为SliceSprite,false为Sprite
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,isSliceSprite:false
     */
    public constructor(option = {width:100,height:20,tabIndex:0,tabGroup:0,isSliceSprite:false}){  
        super(option.width,option.height,option.tabIndex,option.tabGroup.toString());
        
        if(option.isSliceSprite){
            this._background = new SliceSprite();
        }else{
            this._background = new Sprite();
        }
        this.init();
        this.addChild(this._background);
        this.container.buttonMode = true;
        this._clickEvent.onHover = this.onHover;
        this._clickEvent.onPress = this.onPress;
        this._clickEvent.onClick = this.onClick;
    }

    private _isHover = false;
    private _background: SliceSprite|Sprite;
    private _uiText: Text|undefined;
    private _clickEvent = new ClickEvent(this);
    /**
     * 组件的当前视图状态 。 后续扩展
     */
    private _currentState: "up"|"move"|"down"|"enabled" = "up";
    private _sourceUp: SliceSprite|Sprite|undefined;
    private _sourceMove: SliceSprite|Sprite|undefined;
    private _sourceDown: SliceSprite|Sprite|undefined;

    private init(){
        this._background.widthPet = "100%";
        this._background.heightPct = "100%";
        this._background.pivot = 0.5;
        this._background.verticalAlign = VerticalAlignEnum.middle
        this._background.horizontalAlign = HorizontalAlignEnum.center;
    }
    protected initialize() {
        super.initialize();
        this.container.interactiveChildren = false;

        const self = this;
        //lazy to make sure all children is initialized (trying to get the bedst hitArea possible)
        setTimeout(function () {
            const bounds = self.container.getLocalBounds();
            self.container.hitArea = new PIXI.Rectangle(bounds.x < 0 ? bounds.x : 0, bounds.y < 0 ? bounds.y : 0, Math.max(bounds.x + bounds.width + (bounds.x < 0 ? -bounds.x : 0), self._width), Math.max(bounds.y + bounds.height + (bounds.y < 0 ? -bounds.y : 0), self._height));
        }, 20);
    }
    /**
     * 获取或设置文本内容
     */
    public get label(): string{
        if(this._uiText){
            return this._uiText.label;
        }
        return "";
    }
    public set label(value: string){
        if(value){
            if (this._uiText === undefined) {
                this._uiText = new Text(value)
                this._uiText.verticalAlign = VerticalAlignEnum.middle
                this._uiText.horizontalAlign = HorizontalAlignEnum.center;
                this.addChild(this._uiText);
            }
            this._uiText.label = value;
        }
    }

    private onHover(e: interaction.InteractionEvent,over: boolean){
        this._isHover = over;
        this.emit("hover", over);
    }
    private onPress(e: interaction.InteractionEvent,isPressed: boolean){
        if (isPressed) {
            this.focus();
            e.data.originalEvent.preventDefault();
        }
        this.emit("press", isPressed);
    }
    private onClick(){
        this.click();
    }
    private click  () {
        this.emit("click");
    }
}