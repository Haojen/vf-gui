import UIBase from "../UIBase";
import Container from "./Container";
import { Point } from "pixi.js";
import * as Ticker from "../Ticker";
import * as Utils from "../Utils";
import DragEvent from "../Interaction/DragEvent";
import MouseScrollEvent from "../Interaction/MouseScrollEvent";
import InteractionEvent from "../Interaction/InteractionEvent";
import { now } from "../Utils";
import Rect from "./Rect";

/**
 * 可滚动的容器
 */
export default class ScrollingContainer extends Container {
    public constructor() {
        super();
        this._maskRect.y = 0;
        this.addChild(this._maskRect);
        this.container.addChild(this.innerContainer);
        this.container.name = "ScrollingContainer.container";
        this.innerContainer.name = "ScrollingContainer.innerContainer";
        this.mask = this._maskRect.graphics;
    }
    /**
     * 滑动条值发生改变后
     */
    public static readonly ChangeEvent= "change";
    /**
     * 滑动条值发生改变后
     */
    public static readonly ReSizeEvent= "resize";
    /**
     * 遮罩
     */
    private _maskRect = new Rect();
    /**
     * 内容容器
     * @private
     */
    public innerContainer = new PIXI.Container();
    /**
     * 内容的宽高
     */
    public innerBounds = new PIXI.Rectangle();

    /**
     * 是否启动拖拽滚动
     * @default true
     */
    public dragScrolling = true;
    /** 
     * 拖动处理类
     */
    private dragEvent: DragEvent | undefined;
    /**
     * 鼠标滚动
     */
    private mouseScrollEvent: MouseScrollEvent | undefined;
    /**
     * 滚动的阻力或柔度 (0-1) 
     * @default 0.5
     */
    public softness = 0.5;
    /** 
     * 滚动条的圆角半径 设置0时，滚动条为直角长方形
     * @default 0
     */
    public radius = 0;
    /**
     * 遮罩的扩充范围
     */
    public expandMask = 0;
    /** 
     * 是否开启滚动动画 
     * @default false
     */
    public animating = false;
    /**
     * 是否滚动中
     */
    private scrolling = false;
    /**
     * 临时方案，设置时间间隔，跳转容器宽高
     */
    private _boundCached = now() - 1000;

    private _lastWidth = 0;
    private _lastHeight = 0;
    private _scrollX = false;
    private _scrollY = false;
    private _isInitScrolling = false;
    /** 
     * 是否启用水平滚动 
     * @default false
     */
    public get scrollX() {
        return this._scrollX;
    }
    public set scrollX(value) {
        this._scrollX = value;
    }

    /**
     * 是否启用垂直滚动
     * @default false
     */
    public get scrollY() {
        return this._scrollY;
    }
    public set scrollY(value) {
        this._scrollY = value;
    }

    public update() {
        if (this._lastWidth != this._width || this._lastHeight != this._height) {
            const _of = this.expandMask;
            this._maskRect.drawRoundedRect(_of, -_of, this._width + _of, this._height + _of, this.radius,0xFFFFFF);
            this._lastWidth = this._width;
            this._lastHeight = this._height;
        }

        this.setScrollPosition();
    }

    protected setScrollPosition(speed?: PIXI.Point) {
        if (speed) {
            this._Speed = speed;
        }

        if (!this.animating) {
            this.animating = true;
            this._lastPosition.copyFrom(this.innerContainer.position);
            this._targetPosition.copyFrom(this.innerContainer.position);
            this.updateScrollPosition(0);
        }
    }

    public addChild(uiObject: UIBase) {
        super.addChild(uiObject);
        if(uiObject != this._maskRect){
            this.innerContainer.addChild(uiObject.container);
        } 
        this.getInnerBounds(true); //make sure bounds is updated instantly when a child is added
        return uiObject;
    }


    protected getInnerBounds(force?: boolean) {

        //this is a temporary fix, because we cant rely on innercontainer height if the children is positioned > 0 y.
        if (force || now() - this._boundCached > 1000) {
            this.innerContainer.getLocalBounds(this.innerBounds);
            this.innerBounds.height = this.innerBounds.y + this.innerContainer.height;
            this.innerBounds.width = this.innerBounds.x + this.innerContainer.width;
            this._boundCached = now();
        }
        return this.innerBounds;
    }

    private _containerStart = new PIXI.Point();
    private _targetPosition = new PIXI.Point();
    private _lastPosition = new PIXI.Point();
    private _Position = new PIXI.Point();
    private _Speed = new PIXI.Point();
    private _stop = false;

    protected initialize(){
        super.initialize();
        this.initScrolling();
    }
    protected initScrolling() {

        this._isInitScrolling = true;
        if (this.dragEvent) {
            this.dragEvent.remove();
            this.dragEvent = undefined;
        }
        //Drag scroll
        if (this.dragScrolling) {
            this.dragEvent = new DragEvent(this);
            this.dragEvent.onDragStart = () => {
                if (!this.scrolling) {
                    this._containerStart.copyFrom(this.innerContainer.position);
                    this._Position.copyFrom(this.innerContainer.position);
                    this.scrolling = true;
                    this.setScrollPosition();
                    Ticker.shared.addUpdateEvent(this.updateScrollPosition, this);
                }
            };

            this.dragEvent.onDragMove = (e: InteractionEvent, offset: Point) => {
                if (this.scrollX)
                    this._targetPosition.x = this._containerStart.x + offset.x;
                if (this.scrollY)
                    this._targetPosition.y = this._containerStart.y + offset.y;
            };

            this.dragEvent.onDragEnd = () => {
                if (this.scrolling) {
                    this.scrolling = false;
                    Ticker.shared.removeUpdateEvent(this.updateScrollPosition, this);
                }
            };
        }
        //Mouse scroll
        if(this.mouseScrollEvent ){
            this.mouseScrollEvent.remove();
            this.mouseScrollEvent = undefined;
        }
        const scrollSpeed = new PIXI.Point();
        this.mouseScrollEvent = new MouseScrollEvent(this, true);
        this.mouseScrollEvent.onMouseScroll = (e: WheelEvent,delta) => {
            scrollSpeed.set(-delta.x * 0.2, -delta.y * 0.2);
            this.setScrollPosition(scrollSpeed);
        };
        this.updateScrollBars();
    }

    protected updateScrollBars() {
        this.emit(ScrollingContainer.ChangeEvent,this)
    }


    /**
     * 百分比设置位置
     * @param direction 方向
     * @param pct 百分比0-1
     */
    public forcePctPosition(direction: "x" | "y", pct: number) {
        const bounds = this.getInnerBounds();
        if (this.scrollX && direction == "x") {
            this.innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.scrollY && direction == "y") {
            this.innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this._Position[direction] = this._targetPosition[direction] = this.innerContainer.position[direction];
    }

    /** 根据焦点设置位置 */
    public focusPosition(pos: PIXI.Point) {
        const bounds = this.getInnerBounds();

        let dif;
        if (this.scrollX) {
            const x = Math.max(0, (Math.min(bounds.width, pos.x)));
            if (x + this.innerContainer.x > this._width) {
                dif = x - this._width;
                this.innerContainer.x = -dif;
            }
            else if (x + this.innerContainer.x < 0) {
                dif = x + this.innerContainer.x;
                this.innerContainer.x -= dif;
            }
        }

        if (this.scrollY) {
            const y = Math.max(0, (Math.min(bounds.height, pos.y)));

            if (y + this.innerContainer.y > this._height) {
                dif = y - this._height;
                this.innerContainer.y = -dif;
            }
            else if (y + this.innerContainer.y < 0) {
                dif = y + this.innerContainer.y;
                this.innerContainer.y -= dif;
            }
        }

        this._lastPosition.copyFrom(this.innerContainer.position);
        this._targetPosition.copyFrom(this.innerContainer.position);
        this._Position.copyFrom(this.innerContainer.position);
        this.updateScrollBars();
    }


    protected updateScrollPosition(delta: number) {
        this._stop = true;
        if (this.scrollX) this.updateDirection("x", delta);
        if (this.scrollY) this.updateDirection("y", delta);
        if (stop) {
            this.animating = false;
        }
    }

    protected updateDirection(direction: "x" | "y", delta: number) {
        delta = delta * 0.001;

        const bounds = this.getInnerBounds();

        let min: number;
        if (direction == "y")
            min = Math.round(Math.min(0, this._height - bounds.height));
        else
            min = Math.round(Math.min(0, this._width - bounds.width));

        if (!this.scrolling && Math.round(this._Speed[direction]) !== 0) {

            this._targetPosition[direction] += this._Speed[direction];
            this._Speed[direction] = Utils.Lerp(this._Speed[direction], 0, (5 + 2.5 / Math.max(this.softness, 0.01)) * delta);

            if (this._targetPosition[direction] > 0) {
                this._targetPosition[direction] = 0;

            }
            else if (this._targetPosition[direction] < min) {
                this._targetPosition[direction] = min;

            }
        }
        
        if (!this.scrolling && Math.round(this._Speed[direction]) === 0 && (this.innerContainer[direction] > 0 || this.innerContainer[direction] < min)) {
            const target = this._Position[direction] > 0 ? 0 : min;
            this._Position[direction] = Utils.Lerp(this._Position[direction], target, (40 - (30 * this.softness)) * delta);
            this._stop = false;
        }
        else if (this.scrolling || Math.round(this._Speed[direction]) !== 0) {

            if (this.scrolling) {
                this._Speed[direction] = this._Position[direction] - this._lastPosition[direction];
                this._lastPosition.copyFrom(this._Position);
            }
            if (this._targetPosition[direction] > 0) {
                this._Speed[direction] = 0;
                this._Position[direction] = 100 * this.softness * (1 - Math.exp(this._targetPosition[direction] / -200));
            }
            else if (this._targetPosition[direction] < min) {
                this._Speed[direction] = 0;
                this._Position[direction] = min - (100 * this.softness * (1 - Math.exp((min - this._targetPosition[direction]) / -200)));
            }
            else {
                this._Position[direction] = this._targetPosition[direction];
            }
            this._stop = false;
        }

        this.innerContainer.position[direction] = Math.round(this._Position[direction]);

        this.updateScrollBars();
    }

}