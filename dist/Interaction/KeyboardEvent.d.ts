import UIBase from '../UIBase';
declare class KeyboardSelectEvent {
    /**
     * document的键盘事件
    */
    constructor();
    private obj;
    private ctrlDown;
    private shiftDown;
    private shiftKey;
    private ctrlKey;
    private cmdKey;
    private isAddEvent;
    private keyDownEventBind;
    private keyUpEventBind;
    private pasteEventBind;
    private copyEventBind;
    private cutEventBind;
    private addEvent;
    private removeEvent;
    protected keyDownEvent(e: KeyboardEvent): void;
    protected keyUpEvent(e: KeyboardEvent): void;
    protected copyEvent(e: ClipboardEvent): void;
    protected cutEvent(e: ClipboardEvent): void;
    protected pasteEvent(e: ClipboardEvent): void;
    focus(obj: UIBase): void;
    blur(): void;
}
/**
 * KeyboardSelectEvent 的实例
 */
export declare const keyboardShared: KeyboardSelectEvent;
export {};
