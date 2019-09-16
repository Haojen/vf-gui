import Slider from "./Slider";
import ScrollingContainer from "./ScrollingContainer";
import * as tween from "./Tween/index";
import SliceSprite from "./SliceSprite";

/**
 * UI 带有滚动条的容器
 */
export default class ScrollBar extends Slider {
    public constructor(trackBorderWidth = 0, thumbBorderWidth = 0, tracklightBorderWidth = 0) {
        super(trackBorderWidth, thumbBorderWidth, tracklightBorderWidth);
    }

    /**
     * 是的自动隐藏滚动条
     */
    public autohide = false;
    private _scrollingContainer: ScrollingContainer | undefined;
    private _hidden = false;

    protected toggleHidden(hidden: boolean) {
        if (this.autohide) {
            if (hidden && !this._hidden) {
                tween.Tween.to(this, { alpha: 0 }, 200).start();
                this._hidden = true;
            }
            else if (!hidden && this._hidden) {
                tween.Tween.to(this, { alpha: 1 }, 200).start();
                this._hidden = false;
            }
        }
    }

    protected onThumbLoadComplete(rectangle: PIXI.Rectangle,source: SliceSprite){
        super.onThumbLoadComplete(rectangle,source);
        this.alignToContainer();
    }

    protected triggerValueChanging() {
        super.triggerValueChanging();
        if (this.scrollingContainer) {
            const sizeAmt = this.scrollingContainer._height / this.scrollingContainer.innerContainer.height || 0.001;
            if (sizeAmt < 1)
                this.scrollingContainer.forcePctPosition(this.vertical ? "y" : "x", this._amt);
        }
    }

    public get scrollingContainer(): ScrollingContainer | undefined {
        return this._scrollingContainer;
    }
    public set scrollingContainer(value: ScrollingContainer | undefined) {
        if (this._scrollingContainer) {
            this._scrollingContainer.off(ScrollingContainer.ChangeEvent, this.alignToContainer, this);
            this._scrollingContainer.off(ScrollingContainer.ReSizeEvent,this.alignToContainer,this);
        }
        if (value == undefined) {
            this._scrollingContainer = undefined;
            return;
        }
        this._scrollingContainer = value;
        this._scrollingContainer.on(ScrollingContainer.ChangeEvent, this.alignToContainer, this);
        this._scrollingContainer.on(ScrollingContainer.ReSizeEvent,this.alignToContainer,this);
        
    }

    protected alignToContainer() {
        if (this.scrollingContainer) {
            let newPos;
            let size;
            const xORy = this.vertical ? "y" : "x";
            const widthORheight = this.vertical ? "height" : "width";
            const topORleft = this.vertical ? "top" : "left";
            const scrollingContainer = this.scrollingContainer as TAny;
            const innerContainer = this.scrollingContainer.innerContainer as TAny;

            const _posAmt = !innerContainer[widthORheight] ? 0 : -(innerContainer[xORy] / innerContainer[widthORheight]);
            const sizeAmt = !innerContainer[widthORheight] ? 1 : scrollingContainer["_" + widthORheight] / innerContainer[widthORheight];
            //update amt
            const diff = innerContainer[widthORheight] - scrollingContainer["_" + widthORheight];
            this._amt = !scrollingContainer["_" + widthORheight] || !diff ? 0 : -(innerContainer[xORy] / diff);
            const self = this as TAny;
            const _thumb = this._thumb as TAny;
            if (sizeAmt >= 1) {
                size = self["_" + widthORheight];
                _thumb[topORleft] = size * 0.5;
                this.toggleHidden(true);
            }
            else {
                size = self["_" + widthORheight] * sizeAmt;
                if (this._amt > 1) {
                    size -= (self["_" + widthORheight] - size) * (this._amt - 1);
                }
                else if (this._amt < 0) {
                    size -= (self["_" + widthORheight] - size) * -this._amt;
                }
                if (this._amt < 0) {
                    newPos = size * 0.5;
                }
                else if (this._amt > 1) {
                    newPos = self["_" + widthORheight] - size * 0.5;
                }
                else {
                    newPos = (_posAmt * self["_" + widthORheight]) + (size * 0.5);
                }
                _thumb[topORleft] = newPos;
                this.toggleHidden(false);
            }
            _thumb[widthORheight] = size;


        }
    }

}