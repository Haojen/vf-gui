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
    private addEvent(){
        if(this.isAddEvent){
            return;
        }
        this.isAddEvent = true;
        document.addEventListener("keydown", this.keyDownEvent.bind(this), false);
        document.addEventListener("keyup", this.keyUpEvent.bind(this), false);
        document.addEventListener('paste', this.pasteEvent.bind(this), false);
        document.addEventListener('copy', this.copyEvent.bind(this), false);
        document.addEventListener('cut', this.cutEvent.bind(this), false);
    }
    private removeEvent(){
        
        document.removeEventListener("keydown", this.keyDownEvent.bind(this));
        document.removeEventListener("keyup", this.keyUpEvent.bind(this));
        document.removeEventListener('paste', this.pasteEvent.bind(this));
        document.removeEventListener('copy', this.copyEvent.bind(this));
        document.removeEventListener('cut', this.cutEvent.bind(this));

        this.isAddEvent = false;
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
            this.obj.emit(KeyEvent.enter.toString(), this.obj);
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.backspace) {
            this.obj.emit(KeyEvent.backspace.toString(), this.obj);
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.delete) {
            this.obj.emit(KeyEvent.delete.toString(), this.obj);
            e.preventDefault();
            return;
        }

        if (e.which === KeyEvent.left) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.left.toString(), this.obj);
            }else{
                this.obj.emit(KeyEvent.shiftLeft.toString(), this.obj);
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.right) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.right.toString(), this.obj);
            }else{
                this.obj.emit(KeyEvent.shiftRight.toString(), this.obj);
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.top) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.top.toString(), this.obj);
            }else{
                this.obj.emit(KeyEvent.shiftTop.toString(), this.obj);
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.down) {
            if(this.shiftDown){
                this.obj.emit(KeyEvent.down.toString(), this.obj);
            }else{
                this.obj.emit(KeyEvent.shiftDown.toString(), this.obj);
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.ctrlA) {
            if(this.ctrlDown){
                this.obj.emit(KeyEvent.ctrlA.toString(), this.obj);
            }
            e.preventDefault();
            return;
        }
        if (e.which === KeyEvent.ctrlZ) { 
            if(this.ctrlDown){
                this.obj.emit(KeyEvent.ctrlZ.toString(), this.obj);
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