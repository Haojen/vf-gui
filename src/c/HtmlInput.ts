import InteractionEvent, { KeyEvent } from "../Interaction/InteractionEvent";

/**
 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
 */
class HtmlInput extends PIXI.utils.EventEmitter{
    public constructor(){
        super();
        console.log("创建HtmlInput");
        this._dom_input = document.createElement("INPUT") as HTMLInputElement;
        this.init();
    }

    private _dom_input:HTMLInputElement;
    // /** 选中的索引 */
    // private _selection = [0,0];
    // /** 输入正则表达式限制 */
    // private _restrict_regex:RegExp|undefined;

    // private _substituted = false
    public init(){
        
        this._dom_input.setAttribute("type", "text");
        this._dom_input.setAttribute("id", "_pui_tempInput");
        this._dom_input.setAttribute("style", "position:fixed; left:-10px; top:-10px; width:0px; height: 0px;");
        document.body.appendChild(this._dom_input);
    }

    private isAddEvent = false;
    private addEvent(){
        if(this.isAddEvent){
            return;
        }
        this.isAddEvent = true;
		// this._dom_input.addEventListener('keydown', this.onInputKeyDown.bind(this));
		this._dom_input.addEventListener('input', this.onInputInput.bind(this));
		// this._dom_input.addEventListener('keyup', this.onInputKeyUp.bind(this));
		// this._dom_input.addEventListener('focus', this.onFocused.bind(this));
		// this._dom_input.addEventListener('blur', this.onBlurred.bind(this));
    }
    private removeEvent(){
		// this._dom_input.removeEventListener('keydown', this.onInputKeyDown.bind(this));
		this._dom_input.removeEventListener('input', this.onInputInput.bind(this));
		// this._dom_input.removeEventListener('keyup', this.onInputKeyUp.bind(this));
		// this._dom_input.removeEventListener('focus', this.onFocused.bind(this));
		// this._dom_input.removeEventListener('blur', this.onBlurred.bind(this));
        this.isAddEvent = false;
    }

    // private onInputKeyDown(e:KeyboardEvent){
	// 	this._selection = [
	// 		this._dom_input.selectionStart || 0,
	// 		this._dom_input.selectionEnd || 0
    //     ]   
    //     this.emit(KeyEvent.keydown,this,e.keyCode);
	// }

    private onInputInput(e:Event){
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
	// 		this._dom_input.setSelectionRange(
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
        return this._dom_input.value;
    }
    public set value(value: string) {
        this._dom_input.value = value;
    }

    public focus(){
        this._dom_input.focus();
    }
    public blur(){
        this._dom_input.blur();
    }

    public set style(stylestr:string){
        this._dom_input.setAttribute("style", stylestr);
    }

    public addInputEvent(fn:(e:InteractionEvent)=>void,thisObj:TAny){
        this.on("input",fn,thisObj);
    }
    public removeInputEvent(fn:(e:InteractionEvent)=>void,thisObj:TAny){
        this.off("input",fn,thisObj);
    }
    public addBlurEvent(fn:(e:InteractionEvent)=>void,thisObj:TAny){
        this.on("blur",fn,thisObj);
    }
    public removeBlurEvent(fn:(e:InteractionEvent)=>void,thisObj:TAny){
        this.off("blur",fn,thisObj)
    }
}

/**
 * HtmlInput 的实例
 */
export const htmlInputShared = new HtmlInput();