/**
 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
 */
export default class HtmlInput extends PIXI.utils.EventEmitter {
    constructor(multiline) {
        super();
        this._selection = [0, 0];
        this._restrict_value = '';
        console.log("创建HtmlInput");
        this._domInput = this.addDom(multiline);
        this.visible = false;
        document.body.appendChild(this._domInput);
    }
    get domInput() {
        return this._domInput;
    }
    set visible(value) {
        this._domInput.style.display = value ? 'block' : 'none';
    }
    get visible() {
        if (this._domInput.style.display === 'block')
            return true;
        return false;
    }
    get value() {
        return this._domInput.value;
    }
    set value(value) {
        this._domInput.value = value;
    }
    set placeholder(value) {
        this._domInput.placeholder = value;
    }
    set disabled(value) {
        this._domInput.disabled = value;
    }
    /* 输入郑泽斌表达式 */
    get restrict() {
        return this._restrictRegex;
    }
    set restrict(regex) {
        if (regex instanceof RegExp) {
            let str = regex.toString().slice(1, -1);
            if (str.charAt(0) !== '^')
                str = '^' + str;
            if (str.charAt(str.length - 1) !== '$')
                str = str + '$';
            regex = new RegExp(str);
        }
        else {
            regex = new RegExp('^[' + regex + ']*$');
        }
        this._restrictRegex = regex;
    }
    setStyle(style) {
        for (let key in style) {
            this._domInput.style[key] = style[key];
        }
        //this._domInput.setAttribute("style", stylestr);
    }
    setStyleValue(key, value) {
        this._domInput.style[key] = value;
    }
    setAttribute(key, value) {
        this._domInput.setAttribute(key, value);
    }
    select() {
        this._domInput.select();
    }
    /** 测量，需要对象添加到body中 */
    getDOMInputBounds() {
        let org_transform = this._domInput.style.transform;
        let org_display = this._domInput.style.display;
        this._domInput.style.transform = '';
        this._domInput.style.display = 'block';
        let bounds = this._domInput.getBoundingClientRect();
        this._domInput.style.transform = org_transform;
        this._domInput.style.display = org_display;
        return bounds;
    }
    updatePostion(top, left, transform, opacity) {
        this._domInput.style.top = top + 'px';
        this._domInput.style.left = left + 'px';
        this._domInput.style.transform = transform;
        if (opacity)
            this._domInput.style.opacity = opacity.toString();
    }
    addDom(multiline) {
        if (multiline) {
            this._domInput = document.createElement('textarea');
            this._domInput.style.resize = 'none';
        }
        else {
            this._domInput = document.createElement('input');
            this._domInput.type = 'text';
        }
        this.addEvent();
        document.body.appendChild(this._domInput);
        return this._domInput;
    }
    removeDom() {
        if (this._domInput) {
            document.body.removeChild(this._domInput);
        }
    }
    destroy() {
        this.removeDom();
        this.removeEvent();
        this.removeAllListeners();
    }
    addEvent() {
        if (this._onInputKeyDownBind) {
            return;
        }
        this._onInputKeyDownBind = this._onInputKeyDown.bind(this);
        this._onInputInputBind = this._onInputInput.bind(this);
        this._onInputKeyUpBind = this._onInputKeyUp.bind(this);
        this._onFocusedBind = this._onFocused.bind(this);
        this._onBlurredBind = this._onBlurred.bind(this);
        this._domInput.addEventListener('keydown', this._onInputKeyDownBind, { passive: false });
        this._domInput.addEventListener('input', this._onInputInputBind, { passive: false });
        this._domInput.addEventListener('keyup', this._onInputKeyUpBind, { passive: false });
        this._domInput.addEventListener('focus', this._onFocusedBind, { passive: false });
        this._domInput.addEventListener('blur', this._onBlurredBind, { passive: false });
    }
    removeEvent() {
        if (this._onInputKeyDownBind) {
            this._domInput.removeEventListener('keydown', this._onInputKeyDownBind);
            this._domInput.removeEventListener('input', this._onInputInputBind);
            this._domInput.removeEventListener('keyup', this._onInputKeyUpBind);
            this._domInput.removeEventListener('focus', this._onFocusedBind);
            this._domInput.removeEventListener('blur', this._onBlurredBind);
            this._onInputKeyDownBind = undefined;
            this._onInputInputBind = undefined;
            this._onInputKeyUpBind = undefined;
            this._onFocusedBind = undefined;
            this._onBlurredBind = undefined;
        }
    }
    _applyRestriction() {
        if (this._restrictRegex) {
            if (this._restrictRegex.test(this.value)) {
                this._restrict_value = this.value;
            }
            else {
                this.value = this._restrict_value;
                this._domInput.setSelectionRange(this._selection[0], this._selection[1]);
            }
        }
    }
    _onInputKeyDown(e) {
        this._selection = [
            this._domInput.selectionStart || 0,
            this._domInput.selectionEnd || 0
        ];
        this.emit("keydown" /* keydown */, this, e.keyCode);
        //e.preventDefault();
    }
    _onInputInput(e) {
        if (this._restrictRegex)
            this._applyRestriction();
        this.emit("input" /* input */, this.value);
        e.preventDefault();
    }
    _onInputKeyUp(e) {
        this.emit("keyup" /* keyup */, this.value);
        e.preventDefault();
    }
    _onFocused(e) {
        this.emit('focus');
        e.preventDefault();
    }
    _onBlurred(e) {
        this.emit('blur');
        e.preventDefault();
    }
    focus() {
        document.body.removeChild(this._domInput);
        document.body.appendChild(this._domInput);
        this._domInput.focus();
    }
    blur() {
        this._domInput.blur();
    }
}
//# sourceMappingURL=HtmlInput.js.map