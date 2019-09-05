import { UIBase } from "../UI";
import { KeyEvent } from "./InteractionEvent";


class KeyboardSelectEvent {

    /**
     * document的键盘事件
    */
    public constructor() {

    }

    private obj: UIBase|undefined;
    private ctrlDown = false;
    private shiftDown = false;
    private shiftKey = 16;
    private ctrlKey = 17;
    private cmdKey = 91;

    private isAddEvent = false;

    private keyDownEventBind:TAny;
    private keyUpEventBind:TAny;
    private pasteEventBind:TAny;
    private copyEventBind:TAny;
    private cutEventBind:TAny;

    private addEvent(){
        if(this.isAddEvent){
            return;
        }
        this.isAddEvent = true;
        this.keyDownEventBind = this.keyDownEvent.bind(this);
        this.keyUpEventBind = this.keyUpEvent.bind(this);
        this.pasteEventBind = this.pasteEvent.bind(this);
        this.copyEventBind = this.copyEvent.bind(this);
        this.cutEventBind = this.cutEvent.bind(this);

        document.addEventListener("keydown", this.keyDownEventBind, { passive: false });
        document.addEventListener("keyup", this.keyUpEventBind, { passive: false });
        document.addEventListener('paste', this.pasteEventBind, { passive: false });
        document.addEventListener('copy', this.copyEventBind, { passive: false });
        document.addEventListener('cut', this.cutEventBind, { passive: false });
    }
    private removeEvent(){
        
        document.removeEventListener("keydown", this.keyDownEventBind);
        document.removeEventListener("keyup", this.keyUpEventBind);
        document.removeEventListener('paste', this.pasteEventBind);
        document.removeEventListener('copy', this.copyEventBind);
        document.removeEventListener('cut', this.cutEventBind);

        this.isAddEvent = false;

        this.keyDownEventBind = undefined;
        this.keyUpEventBind = undefined;
        this.pasteEventBind = undefined;
        this.copyEventBind = undefined;
        this.cutEventBind = undefined;
    }

    protected keyDownEvent(e: KeyboardEvent) {
        if(this.obj == undefined){
            return;
        }
        if (e.which === this.ctrlKey || e.which === this.cmdKey) 
            this.ctrlDown = true;
        if (e.which === this.shiftKey) 
            this.shiftDown = true;

        
        this.obj.emit(KeyEvent.keydown, e,this.obj);

        if (e.defaultPrevented)
            return;

        if (e.which === KeyEvent.enter) {
            this.obj.emit(KeyEvent.enter.toString(), this.obj,KeyEvent.enter.toString());
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.backspace) {
            this.obj.emit(KeyEvent.backspace.toString(), this.obj,KeyEvent.backspace.toString());
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.delete) {
            this.obj.emit(KeyEvent.delete.toString(), this.obj,KeyEvent.delete.toString());
            e.preventDefault();
            return;
        }

        if (e.which === KeyEvent.left) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.left.toString(), this.obj,KeyEvent.left.toString(),);
            }else{
                this.obj.emit(KeyEvent.shiftLeft.toString(), this.obj,KeyEvent.shiftLeft.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.right) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.right.toString(), this.obj,KeyEvent.right.toString());
            }else{
                this.obj.emit(KeyEvent.shiftRight.toString(), this.obj,KeyEvent.shiftRight.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.top) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.top.toString(), this.obj,KeyEvent.top.toString());
            }else{
                this.obj.emit(KeyEvent.shiftTop.toString(), this.obj,KeyEvent.shiftTop.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.down) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.down.toString(), this.obj,KeyEvent.down.toString());
            }else{
                this.obj.emit(KeyEvent.shiftDown.toString(), this.obj,KeyEvent.shiftDown.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.ctrlA) {
            if(this.ctrlDown){
                this.obj.emit(KeyEvent.ctrlA.toString(), this.obj,KeyEvent.ctrlA.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.ctrlZ) { 
            if(this.ctrlDown){
                this.obj.emit(KeyEvent.ctrlZ.toString(), this.obj,KeyEvent.ctrlZ.toString());
            }
            e.preventDefault();
            return;
        }
    }

    protected keyUpEvent(e: KeyboardEvent) {
        if(this.obj == undefined){
            return;
        }
        if (e.which == this.ctrlKey || e.which == this.cmdKey) 
            this.ctrlDown = false;
        if (e.which === this.shiftKey) 
            this.shiftDown = false;

        this.obj.emit(KeyEvent.keyup, e,this.obj);

        if (e.defaultPrevented)
            return;
    }

    protected copyEvent(e: ClipboardEvent) {
        if(this.obj == undefined){
            return;
        }
        this.obj.emit(KeyEvent.copy, e,this.obj);

        if (e.defaultPrevented)
            return;
        const clipboardData = e.clipboardData || window.clipboardData;
        this.obj.emit(KeyEvent.copy, e,this.obj,clipboardData);
        e.preventDefault();
    }
    protected cutEvent(e: ClipboardEvent) {
        if(this.obj == undefined){
            return;
        }    
        this.obj.emit(KeyEvent.cut, e,this.obj);
        if (e.defaultPrevented)
            return;
        const clipboardData = e.clipboardData || window.clipboardData;
        this.obj.emit(KeyEvent.cut, e,this.obj,clipboardData);
        e.preventDefault();
    }

    protected pasteEvent(e: ClipboardEvent) {
        if(this.obj == undefined){
            return;
        }
        
        this.obj.emit(KeyEvent.paste, e,this.obj);
        if (e.defaultPrevented)
            return;
        const clipboardData = e.clipboardData || window.clipboardData;
        this.obj.emit(KeyEvent.paste, e,this.obj,clipboardData);
        e.preventDefault();
    }

    public focus(obj: UIBase){
        this.addEvent();
        this.obj = obj;
    }

    public blur(){
        this.removeEvent();
        this.obj = undefined;
    }

}

/**
 * KeyboardSelectEvent 的实例
 */
export const keyboardShared = new KeyboardSelectEvent();