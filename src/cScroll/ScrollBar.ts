import { Slider } from "../cSlider/Slider";
import { ScrollingContainer } from "./ScrollingContainer";
import Tween from "../cTween/Tween";

/**
 * UI 滚动条容器
 */
export class ScrollBar extends Slider{
    public constructor(){
        super();
    }

    private _scrollingContainer: ScrollingContainer | undefined;
    public get scrollingContainer(): ScrollingContainer | undefined {
        return this._scrollingContainer;
    }
    public set scrollingContainer(value: ScrollingContainer | undefined) {
        if(value == undefined && this._scrollingContainer){
            const index = this._scrollingContainer._scrollBars.indexOf(this);
            if(index!==-1){
                this._scrollingContainer._scrollBars.splice(index,1);
            }
            this._scrollingContainer = undefined;
            return;
        }
        this._scrollingContainer = value;
        if(this._scrollingContainer){
            this._scrollingContainer._scrollBars.push(this);
        }
        
    }
    private autohide = false;
    private _hidden = false;

    protected initialize () {
        super.initialize();
        this._onValueChanging = () => {
            if(this.scrollingContainer){
                const sizeAmt = this.scrollingContainer._height / this.scrollingContainer.innerContainer.height || 0.001;
                if (sizeAmt < 1)
                    this.scrollingContainer.forcePctPosition(this.vertical ? "y" : "x", this._amt);
            }
        }
    }

    public alignToContainer() {
        if(this.scrollingContainer){
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
            const handle = this.handle as TAny;
            if (sizeAmt >= 1) {
                size = self["_" + widthORheight];
                handle[topORleft] = size * 0.5;
                this.toggleHidden(true);
            }
            else {
                size = self["_" + widthORheight] * sizeAmt;
                if (this._amt > 1) size -= (self["_" + widthORheight] - size) * (this._amt - 1);
                else if (this._amt < 0) size -= (self["_" + widthORheight] - size) * -this._amt;
                if (this._amt < 0) newPos = size * 0.5;
                else if (this._amt > 1) newPos = self["_" + widthORheight] - size * 0.5;
                else newPos = (_posAmt * scrollingContainer["_" + widthORheight]) + (size * 0.5);
                handle[topORleft] = newPos;
                this.toggleHidden(false);
            }
            handle[widthORheight] = size;
        }
    }
    
    public toggleHidden(hidden: boolean) {
        if (this.autohide) {
            if (hidden && !this._hidden) {
                Tween.to(this, 0.2, { alpha: 0 });
                this._hidden = true;
            }
            else if (!hidden && this._hidden) {
                Tween.to(this, 0.2, { alpha: 1 });
                this._hidden = false;
            }
        }
    }
}