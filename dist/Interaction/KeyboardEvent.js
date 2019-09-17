class KeyboardSelectEvent {
    /**
     * document的键盘事件
    */
    constructor() {
        this.ctrlDown = false;
        this.shiftDown = false;
        this.shiftKey = 16;
        this.ctrlKey = 17;
        this.cmdKey = 91;
        this.isAddEvent = false;
    }
    addEvent() {
        if (this.isAddEvent) {
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
    removeEvent() {
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
    keyDownEvent(e) {
        if (this.obj == undefined) {
            return;
        }
        if (e.which === this.ctrlKey || e.which === this.cmdKey)
            this.ctrlDown = true;
        if (e.which === this.shiftKey)
            this.shiftDown = true;
        this.obj.emit("keydown" /* keydown */, e, this.obj);
        if (e.defaultPrevented)
            return;
        if (e.which === 13 /* enter */) {
            this.obj.emit(13 /* enter */.toString(), this.obj, 13 /* enter */.toString());
            e.preventDefault();
            return;
        }
        if (e.which === 8 /* backspace */) {
            this.obj.emit(8 /* backspace */.toString(), this.obj, 8 /* backspace */.toString());
            e.preventDefault();
            return;
        }
        if (e.which === 46 /* delete */) {
            this.obj.emit(46 /* delete */.toString(), this.obj, 46 /* delete */.toString());
            e.preventDefault();
            return;
        }
        if (e.which === 37 /* left */) {
            if (this.shiftDown) {
                this.obj.emit(37 /* left */.toString(), this.obj, 37 /* left */.toString());
            }
            else {
                this.obj.emit("shift37" /* shiftLeft */.toString(), this.obj, "shift37" /* shiftLeft */.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === 39 /* right */) {
            if (this.shiftDown) {
                this.obj.emit(39 /* right */.toString(), this.obj, 39 /* right */.toString());
            }
            else {
                this.obj.emit("shift39" /* shiftRight */.toString(), this.obj, "shift39" /* shiftRight */.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === 38 /* top */) {
            if (this.shiftDown) {
                this.obj.emit(38 /* top */.toString(), this.obj, 38 /* top */.toString());
            }
            else {
                this.obj.emit("shift38" /* shiftTop */.toString(), this.obj, "shift38" /* shiftTop */.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === 40 /* down */) {
            if (this.shiftDown) {
                this.obj.emit(40 /* down */.toString(), this.obj, 40 /* down */.toString());
            }
            else {
                this.obj.emit("shift40" /* shiftDown */.toString(), this.obj, "shift40" /* shiftDown */.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === 65 /* ctrlA */) {
            if (this.ctrlDown) {
                this.obj.emit(65 /* ctrlA */.toString(), this.obj, 65 /* ctrlA */.toString());
            }
            e.preventDefault();
            return;
        }
        if (e.which === 90 /* ctrlZ */) {
            if (this.ctrlDown) {
                this.obj.emit(90 /* ctrlZ */.toString(), this.obj, 90 /* ctrlZ */.toString());
            }
            e.preventDefault();
            return;
        }
    }
    keyUpEvent(e) {
        if (this.obj == undefined) {
            return;
        }
        if (e.which == this.ctrlKey || e.which == this.cmdKey)
            this.ctrlDown = false;
        if (e.which === this.shiftKey)
            this.shiftDown = false;
        this.obj.emit("keyup" /* keyup */, e, this.obj);
        if (e.defaultPrevented)
            return;
    }
    copyEvent(e) {
        if (this.obj == undefined) {
            return;
        }
        this.obj.emit("copy" /* copy */, e, this.obj);
        if (e.defaultPrevented)
            return;
        const clipboardData = e.clipboardData || window.clipboardData;
        this.obj.emit("copy" /* copy */, e, this.obj, clipboardData);
        e.preventDefault();
    }
    cutEvent(e) {
        if (this.obj == undefined) {
            return;
        }
        this.obj.emit("cut" /* cut */, e, this.obj);
        if (e.defaultPrevented)
            return;
        const clipboardData = e.clipboardData || window.clipboardData;
        this.obj.emit("cut" /* cut */, e, this.obj, clipboardData);
        e.preventDefault();
    }
    pasteEvent(e) {
        if (this.obj == undefined) {
            return;
        }
        this.obj.emit("paste" /* paste */, e, this.obj);
        if (e.defaultPrevented)
            return;
        const clipboardData = e.clipboardData || window.clipboardData;
        this.obj.emit("paste" /* paste */, e, this.obj, clipboardData);
        e.preventDefault();
    }
    focus(obj) {
        this.addEvent();
        this.obj = obj;
    }
    blur() {
        this.removeEvent();
        this.obj = undefined;
    }
}
/**
 * KeyboardSelectEvent 的实例
 */
export const keyboardShared = new KeyboardSelectEvent();
//# sourceMappingURL=KeyboardEvent.js.map