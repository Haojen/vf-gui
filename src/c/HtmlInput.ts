import InteractionEvent from "../Interaction/InteractionEvent";

/**
 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
 */
class HtmlInput extends PIXI.utils.EventEmitter{
    public constructor(){
        super();
        console.log("创建HtmlInput");
        this._domInput = document.createElement("INPUT") as HTMLInputElement;
        this.init();
    }

    private _domInput: HTMLInputElement;
    // /** 选中的索引 */
    // private _selection = [0,0];
    // /** 输入正则表达式限制 */
    // private _restrict_regex:RegExp|undefined;

    // private _substituted = false
    public init(){
        
        this._domInput.setAttribute("type", "text");
        this._domInput.setAttribute("id", "_pui_tempInput");
        this._domInput.setAttribute("style", "position:fixed; left:-10px; top:-10px; width:0px; height: 0px;");
        document.body.appendChild(this._domInput);
    }

    private isAddEvent = false;
    private addEvent(){
        if(this.isAddEvent){
            return;
        }
        this.isAddEvent = true;
        // this._domInput.addEventListener('keydown', this.onInputKeyDown.bind(this));
        this._domInput.addEventListener('input', this.onInputInput.bind(this));
        // this._domInput.addEventListener('keyup', this.onInputKeyUp.bind(this));
        // this._domInput.addEventListener('focus', this.onFocused.bind(this));
        // this._domInput.addEventListener('blur', this.onBlurred.bind(this));
    }
    private removeEvent(){
        // this._domInput.removeEventListener('keydown', this.onInputKeyDown.bind(this));
        this._domInput.removeEventListener('input', this.onInputInput.bind(this));
        // this._domInput.removeEventListener('keyup', this.onInputKeyUp.bind(this));
        // this._domInput.removeEventListener('focus', this.onFocused.bind(this));
        // this._domInput.removeEventListener('blur', this.onBlurred.bind(this));
        this.isAddEvent = false;
    }

    // private onInputKeyDown(e:KeyboardEvent){
    // 	this._selection = [
    // 		this._domInput.selectionStart || 0,
    // 		this._domInput.selectionEnd || 0
    //     ]   
    //     this.emit(KeyEvent.keydown,this,e.keyCode);
    // }

    private onInputInput(e: Event){
        // this.applyRestriction()

        // if(this._substituted)
        // 	this.updateSubstitution()

        this.emit('input',this.value);
        e.preventDefault();
    }
    // private applyRestriction(){
    //     if(this._restrict_regex == undefined){
    //         return;
    //     }
    // 	if(this._restrict_regex.test(this.text)){
    // 		this._restrict_value = this.text;
    // 	}else{
    // 		this.text = this._restrict_value
    // 		this._domInput.setSelectionRange(
    // 			this._selection[0],
    // 			this._selection[1]
    // 		)
    // 	}
    // }
    // private updateSubstitution(){
    // 	if(this.state==='FOCUSED'){
    // 		this._dom_visible = true
    // 		this._surrogate.visible = this.text.length===0
    // 	}else{
    // 		this._dom_visible = false
    // 		this._surrogate.visible = true
    // 	}
    // 	this._updateDOMInput()
    // 	this._updateSurrogate()
    // }
    
    public get value(): string {
        return this._domInput.value;
    }
    public set value(value: string) {
        this._domInput.value = value;
    }

    public focus(){
        this._domInput.focus();
    }
    public blur(){
        this._domInput.blur();
    }

    public set style(stylestr: string){
        this._domInput.setAttribute("style", stylestr);
    }

    public addInputEvent(fn: (e: InteractionEvent) => void,thisObj: TAny){
        this.on("input",fn,thisObj);
    }
    public removeInputEvent(fn: (e: InteractionEvent) => void,thisObj: TAny){
        this.off("input",fn,thisObj);
    }
    public addBlurEvent(fn: (e: InteractionEvent) => void,thisObj: TAny){
        this.on("blur",fn,thisObj);
    }
    public removeBlurEvent(fn: (e: InteractionEvent) => void,thisObj: TAny){
        this.off("blur",fn,thisObj)
    }
}

/**
 * HtmlInput 的实例
 */
export const htmlInputShared = new HtmlInput();