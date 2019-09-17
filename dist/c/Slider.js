import UIBase from "../UIBase";
import * as Utils from "../Utils";
import SliceSprite from "./SliceSprite";
import * as tween from "./Tween/index";
import DragEvent from "../Interaction/DragEvent";
/**
 * UI 滑动条
 */
export default class Slider extends UIBase {
    constructor(trackBorderWidth = 0, thumbBorderWidth = 0, tracklightBorderWidth = 0) {
        super();
        /**
         * 当前值
         */
        this._amt = 0;
        /**
         * 小数的保留位，0不保留
         * @default 0
         */
        this._decimals = 0;
        /**
         * 滑块方向
         */
        this._vertical = false;
        this._sourceTrack = "";
        this._sourceTracklight = "";
        this._sourceThumb = "";
        this._thumbDrag = new DragEvent(this);
        this._trackDrag = new DragEvent(this);
        this._startValue = 0;
        this._maxPosition = 0;
        this._localMousePosition = new PIXI.Point();
        this._lastChange = 0;
        this._lastChanging = 0;
        this._minValue = 0;
        this._maxValue = 100;
        /** 是否可以绘制布局，设置本值并不会触发绘制，只是标记*/
        this._isUpdateLayout = true;
        this._track = new SliceSprite();
        this._track.borderWidth = trackBorderWidth;
        this._thumb = new SliceSprite();
        this._thumb.borderWidth = thumbBorderWidth;
        this._thumb.pivot = 0.5;
        this._thumb.container.buttonMode = true;
        this._tracklight = new SliceSprite();
        this._tracklight.borderWidth = tracklightBorderWidth;
        this.addChild(this._track);
        this.addChild(this._tracklight);
        this.addChild(this._thumb);
        this._thumbDrag.onDragPress = this.onPress;
        this._thumbDrag.onDragStart = this.onDragStart;
        this._thumbDrag.onDragMove = this.onDragMove;
        this._thumbDrag.onDragEnd = this.onDragEnd;
        this._trackDrag.onDragPress = this.onPress;
        this._trackDrag.onDragStart = this.onDragStart;
        this._trackDrag.onDragMove = this.onDragMove;
        this._trackDrag.onDragEnd = this.onDragEnd;
    }
    /**
     * 背景
     */
    get sourceTrack() {
        return this._sourceTrack;
    }
    set sourceTrack(value) {
        this._sourceTrack = value;
        this._track.source = value;
    }
    /**
     * 进度填充
     */
    get sourceTracklight() {
        return this._sourceTracklight;
    }
    set sourceTracklight(value) {
        this._sourceTracklight = value;
        this._tracklight.source = value;
    }
    /**
     * 拖拽手柄
     */
    get sourceThumb() {
        return this._sourceThumb;
    }
    set sourceThumb(value) {
        this._sourceThumb = value;
        this._thumb.visible = false;
        this._thumb.off(SliceSprite.SourceCompleteEvent, this.onThumbLoadComplete, this);
        this._thumb.once(SliceSprite.SourceCompleteEvent, this.onThumbLoadComplete, this);
        this._thumb.source = value;
    }
    //rectangle:PIXI.Rectangle,source?:SliceSprite
    onThumbLoadComplete(rectangle, source) {
        source.width = rectangle.width;
        source.height = rectangle.height;
        source.visible = true;
        this.update();
    }
    /**
     * 是否垂直
     * @default false
     */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = value;
        this._isUpdateLayout = true;
        this.update();
    }
    /**
     * 最小值
     * @default 0
     */
    get minValue() {
        return this._minValue;
    }
    set minValue(value) {
        this._minValue = value;
        this.update();
    }
    /**
     * 最大值
     * @default 100
     */
    get maxValue() {
        return this._maxValue;
    }
    set maxValue(value) {
        this._maxValue = value;
        this.update();
    }
    /**
     * 当前值
     */
    get value() {
        return Utils.Round(Utils.Lerp(this._minValue, this._maxValue, this._amt), this._decimals);
    }
    set value(value) {
        this._amt = (Math.max(this._minValue, Math.min(this._maxValue, value)) - this._minValue) / (this._maxValue - this._minValue);
        this.update();
        this.triggerValueChange();
        this.triggerValueChanging();
    }
    updateLayout() {
        if (!this._isUpdateLayout) {
            return;
        }
        this._track.widthPet = "100%";
        this._track.heightPct = "100%";
        if (this.vertical) {
            this._thumb.horizontalAlign = 2 /* center */;
            this._thumb.verticalAlign = undefined;
            this._tracklight.horizontalAlign = 2 /* center */;
            this._tracklight.verticalAlign = undefined;
            this._tracklight.widthPet = "100%";
        }
        else {
            this._thumb.verticalAlign = 2 /* middle */;
            this._thumb.horizontalAlign = undefined;
            this._tracklight.verticalAlign = 2 /* middle */;
            this._tracklight.horizontalAlign = undefined;
            this._tracklight.heightPct = "100%";
        }
        this._isUpdateLayout = false;
    }
    update(soft) {
        this.updateLayout();
        let handleSize;
        let val;
        if (this._thumb) {
            if (this.vertical) {
                handleSize = this._thumb._height || this._thumb.container.height;
                val = ((this._height - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    tween.Tween.to(this._thumb, { top: val }, 300).easing(tween.Easing.Linear.None).start();
                    tween.Tween.to(this._tracklight, { height: val }, 300).easing(tween.Easing.Linear.None).start();
                }
                else {
                    this._thumb.top = val;
                    this._tracklight.height = val;
                }
            }
            else {
                handleSize = this._thumb._width || this._thumb.container.width;
                val = ((this._width - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    tween.Tween.to(this._thumb, { left: val }, 300).easing(tween.Easing.Linear.None).start();
                    tween.Tween.to(this._tracklight, { width: val }, 300).easing(tween.Easing.Linear.None).start();
                }
                else {
                    this._thumb.left = val;
                    this._tracklight.width = val;
                }
            }
        }
    }
    onPress(event, isPressed, dragEvent) {
        event.stopPropagation();
        if (this._trackDrag == dragEvent && this._trackDrag.id == event.data.identifier) {
            if (isPressed) {
                this.updatePositionToMouse(event.data.global, true);
            }
        }
    }
    onDragStart(event) {
        if (this._thumb && this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this._startValue = this._amt;
            this._maxPosition = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
        }
    }
    onDragMove(event, offset) {
        if (this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.vertical ? offset.y : offset.x) / this._maxPosition)));
            this.triggerValueChanging();
            this.update();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.updatePositionToMouse(event.data.global, false);
        }
    }
    onDragEnd(event) {
        if (this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this.triggerValueChange();
            this.update();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.triggerValueChange();
        }
    }
    updatePositionToMouse(mousePosition, soft) {
        if (this._track) {
            this._track.container.toLocal(mousePosition, undefined, this._localMousePosition, true);
        }
        if (this._thumb) {
            const newPos = this.vertical ? this._localMousePosition.y - this._thumb._height * 0.5 : this._localMousePosition.x - this._thumb._width * 0.5;
            const maxPos = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
            this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
            this.update(soft);
            this.triggerValueChanging();
        }
    }
    triggerValueChange() {
        this.emit("change", this.value, this._lastChange);
        if (this._lastChange != this.value) {
            this._lastChange = this.value;
        }
    }
    triggerValueChanging() {
        this.emit("changing", this.value, this._lastChanging);
        if (this._lastChanging != this.value) {
            this._lastChanging = this.value;
        }
    }
}
/**
 * 滑动条值发生改变后
 */
Slider.ChangeEvent = "change";
/**
 * 滑动条值发生改变时
 */
Slider.ChangingEvent = "changing";
//# sourceMappingURL=Slider.js.map