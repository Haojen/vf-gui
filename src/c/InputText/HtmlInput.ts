import { KeyEvent } from "../../interaction/InteractionEvent";

/**
 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
 */
export default class HtmlInput extends PIXI.utils.EventEmitter{
    public constructor(multiline:boolean){
        super();
        console.log("创建HtmlInput");
        this._domInput = this.addDom(multiline);
        this.visible = false;
        document.body.appendChild(this._domInput);
    }

    private _domInput: HTMLInputElement|HTMLTextAreaElement;
    private _selection = [0, 0];
    private _restrictRegex:RegExp|undefined;
    private _restrict_value = '';
    
    public get domInput(){
        return this._domInput;
    }
    public set visible(value:boolean){
        this._domInput.style.display = value ? 'block' : 'none'
    }
    public get visible(){
        if(this._domInput.style.display === 'block')
            return true;
        return false;
    }
    
    public get value(): string {
        return this._domInput.value;
    }
    public set value(value: string) {
        this._domInput.value = value;
    }

    public set placeholder(value:string){
        this._domInput.placeholder = value;
    }

    public set disabled(value:boolean){
        this._domInput.disabled = value;
    }

    public get maxlength(){
        return this._domInput.maxLength;
    }

    public set maxlength(value:number){
        this._domInput.maxLength = value;
    }

    /* 输入郑泽斌表达式 */
    public get restrict() {
        return this._restrictRegex;
    }
    public set restrict(regex) {
        if(regex === undefined){
            return;
        }
        if (regex instanceof RegExp) {
            let str = regex.toString().slice(1, -1);

            if (str.charAt(0) !== '^')
                 str = '^' + str;

            if (str.charAt(str.length - 1) !== '$')
                str = str + '$';

            regex = new RegExp(str);
        } else {
            regex = new RegExp('^[' + regex + ']*$');
        }
        this._restrictRegex = regex;
    }

    public setStyle(style:InputStyle){  
        for (let key in style) {
            this._domInput.style[key as any] = style[key];
        }  
        //this._domInput.setAttribute("style", stylestr);
    }

    public setStyleValue(key:TAny,value:TAny){
        this._domInput.style[key] = value;
    }

    public select(){
        this._domInput.select(); 
    }
    
    /** 测量，需要对象添加到body中 */
    public getDOMInputBounds() {

        let org_transform = this._domInput.style.transform;
        let org_display = this._domInput.style.display;
        this._domInput.style.transform = '';
        this._domInput.style.display = 'block';
        let bounds = this._domInput.getBoundingClientRect();
        this._domInput.style.transform = org_transform;
        this._domInput.style.display = org_display;

        return bounds;
    }

    public updatePostion(top:string|number,left:string|number,transform:string,opacity?:string|number){
        this._domInput.style.top = top + 'px'
        this._domInput.style.left = left + 'px'
        this._domInput.style.transform = transform;
        if(opacity)
            this._domInput.style.opacity = opacity.toString();
    }

    private addDom(multiline:boolean){
        
        if (multiline) {
            this._domInput = document.createElement('textarea')
            this._domInput.style.resize = 'none';
        } else {
            this._domInput = document.createElement('input')
            this._domInput.type = 'text';
        }
        this.addEvent();
        document.body.appendChild(this._domInput);
        return this._domInput;
    }

    private removeDom(){
        if(this._domInput){ 
            document.body.removeChild(this._domInput);
        }
    }

    public release(){
        this.removeDom();
        this.removeEvent();
        this.removeAllListeners();
    }



    
    private _onInputKeyDownBind:TAny;
    private _onInputInputBind:TAny;
    private _onInputKeyUpBind:TAny;
    private _onFocusedBind:TAny;
    private _onBlurredBind:TAny;

    private addEvent(){
        if(this._onInputKeyDownBind){
            return;
        }
        this._onInputKeyDownBind = this._onInputKeyDown.bind(this);
        this._onInputInputBind = this._onInputInput.bind(this);
        this._onInputKeyUpBind = this._onInputKeyUp.bind(this);
        this._onFocusedBind = this._onFocused.bind(this);
        this._onBlurredBind = this._onBlurred.bind(this);
        this._domInput.addEventListener('keydown', this._onInputKeyDownBind,{passive:false});
        this._domInput.addEventListener('input',this._onInputInputBind,{passive:false} );
        this._domInput.addEventListener('keyup', this._onInputKeyUpBind,{passive:false});
        this._domInput.addEventListener('focus', this._onFocusedBind,{passive:false});
        this._domInput.addEventListener('blur', this._onBlurredBind,{passive:false} );
    }
    private removeEvent(){
        if(this._onInputKeyDownBind){
            this._domInput.removeEventListener('keydown', this._onInputKeyDownBind );
            this._domInput.removeEventListener('input', this._onInputInputBind );
            this._domInput.removeEventListener('keyup', this._onInputKeyUpBind);
            this._domInput.removeEventListener('focus', this._onFocusedBind);
            this._domInput.removeEventListener('blur', this._onBlurredBind );
            this._onInputKeyDownBind = undefined;
            this._onInputInputBind = undefined;
            this._onInputKeyUpBind = undefined;
            this._onFocusedBind = undefined;
            this._onBlurredBind = undefined;
        }
    }
    private _applyRestriction() {
        if(this._restrictRegex){
            if (this._restrictRegex.test(this.value)) {
                this._restrict_value = this.value;
            } else {
                this.value = this._restrict_value;
                this._domInput.setSelectionRange(
                    this._selection[0],
                    this._selection[1]
                )
            }
        }
    }

    private _onInputKeyDown(e:KeyboardEvent){
        this._selection = [
            this._domInput.selectionStart || 0,
            this._domInput.selectionEnd || 0
        ]
        this.emit(KeyEvent.keydown,this,e.keyCode);
        //e.preventDefault();
    }

    private _onInputInput(e: KeyboardEvent){
        if((e as TAny).data != null){
            if (this._restrictRegex)
            this._applyRestriction();
        }
        this.emit(KeyEvent.input, this.value)
        e.preventDefault();
    }

    private _onInputKeyUp(e: KeyboardEvent){
        this.emit(KeyEvent.keyup, this.value)
        e.preventDefault();
    }

    private _onFocused(e: KeyboardEvent){
        this.emit('focus')
        e.preventDefault();
    }
    
    private _onBlurred(e: KeyboardEvent){
        this.emit('blur')
        e.preventDefault();
    }

    public focus(){

        document.body.removeChild(this._domInput);
        document.body.appendChild(this._domInput); 
        this._domInput.focus();
        
    }
    public blur(){
        this._domInput.blur();
    }

}
