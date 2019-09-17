/// <reference types="pixi.js" />
import Slider from "./Slider";
import ScrollingContainer from "./ScrollingContainer";
import SliceSprite from "./SliceSprite";
/**
 * UI 带有滚动条的容器
 */
export default class ScrollBar extends Slider {
    constructor(trackBorderWidth?: number, thumbBorderWidth?: number, tracklightBorderWidth?: number);
    /**
     * 是的自动隐藏滚动条
     */
    autohide: boolean;
    private _scrollingContainer;
    private _hidden;
    protected toggleHidden(hidden: boolean): void;
    protected onThumbLoadComplete(rectangle: PIXI.Rectangle, source: SliceSprite): void;
    protected triggerValueChanging(): void;
    scrollingContainer: ScrollingContainer | undefined;
    protected alignToContainer(): void;
}
