import UIBase from "../UIBase";
import { Container } from "../cContainer/Container";
import { Point } from "pixi.js";
import * as Ticker from "../Ticker";
import * as Utils from "../Utils";
import DragEvent from "../Interaction/DragEvent";
import MouseScrollEvent from "../Interaction/MouseScrollEvent";
/**
 * 可滚动的容器
 */
export class ScrollingContainer extends Container {
    public constructor() {
        super();

        this.container.addChild(this.mask);
        this.container.addChild(this.innerContainer);
        this.container.mask = this.mask;
    }
    /**
     * 遮罩
     */
    private mask = new PIXI.Graphics();
    /**
     * 内容容器
     * @private
     */
    public innerContainer = new PIXI.Container();
    /**
     * 内容的宽高
     */
    private innerBounds = new PIXI.Rectangle();
    /** 
     * 是否启用水平滚动 
     * @default false
     */
    private _scrollX = false;
    public get scrollX() {
        return this._scrollX;
    }
    public set scrollX(value) {
        this._scrollX = value;
        this.initScrolling();
    }
    /**
     * 是否启用垂直滚动
     * @default false
     */
    private _scrollY = false;
    public get scrollY() {
        return this._scrollY;
    }
    public set scrollY(value) {
        this._scrollY = value;
        this.initScrolling();
    }
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
     * 预留
     * how much can be scrolled past content dimensions
     */
    private overflowY = 0;
    /**
     * 预留
     * how much can be scrolled past content dimensions
     */
    private overflowX = 0;
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
     * @private
     */
    public _scrollBars: ScrollBar[] = [];
    /**
     * 临时方案，设置时间间隔，跳转容器宽高
     */
    private boundCached = performance.now() - 1000;

    private _lastWidth = 0;
    private _lastHeight = 0;

    protected initialize() {
        super.initialize();
    }

    public update() {
        super.update();
        if (this._lastWidth != this._width || this._lastHeight != this._height) {
            const of = this.expandMask;
            this.mask.clear();
            this.mask.lineStyle(0);
            this.mask.beginFill(0xFFFFFF, 1);
            if (this.radius === 0) {

                //this.mask.drawRect(0, 0, this._width, this._height);
                //this.mask.drawRect(-of, -of, this._width + of, this.height + of);
                //this.mask.moveTo(-of, -of);
                //this.mask.lineTo(this._width + of, -of);
                //this.mask.lineTo(this._width + of, this._height + of);
                //this.mask.lineTo(-of, this._height + of);
                this.mask.drawRect(-of, -of, this._width + of, this._height + of);
            }
            else {
                this.mask.drawRoundedRect(-of, -of, this._width + of, this.height + of, this.radius);
            }
            this.mask.endFill();
            this._lastWidth = this._width;
            this._lastHeight = this._height;
        }


        if (this.setScrollPosition) {
            this.setScrollPosition();
        }
    }

    public addChild(...uiObject: UIBase[]) {
        super.addChild(...uiObject);
        this.getInnerBounds(true); //make sure bounds is updated instantly when a child is added
        return uiObject;
    }

    protected updateScrollBars() {
        for (let i = 0; i < this._scrollBars.length; i++) {
            this._scrollBars[i].alignToContainer();
        }
    }

    protected getInnerBounds(force?: boolean) {
        //this is a temporary fix, because we cant rely on innercontainer height if the children is positioned > 0 y.
        if (force || performance.now() - this.boundCached > 1000) {
            this.innerContainer.getLocalBounds(this.innerBounds);
            this.innerContainer.getLocalBounds(this.innerBounds);
            this.innerBounds.height = this.innerBounds.y + this.innerContainer.height;
            this.innerBounds.width = this.innerBounds.x + this.innerContainer.width;
            this.boundCached = performance.now();
        }

        return this.innerBounds;
    }

    private containerStart = new PIXI.Point();
    private targetPosition = new PIXI.Point();
    private lastPosition = new PIXI.Point();
    private Position = new PIXI.Point();
    private Speed = new PIXI.Point();
    private stop = false;

    protected initScrolling() {

        if (this.dragEvent) {
            this.dragEvent.remove();
            this.dragEvent = undefined;
        }
        //Drag scroll
        if (this.dragScrolling) {
            this.dragEvent = new DragEvent(this);
            this.dragEvent.onDragStart = (e) => {
                if (!this.scrolling) {
                    
                    this.containerStart.copyFrom(this.innerContainer.position);
                    this.Position.copyFrom(this.innerContainer.position);
                    this.scrolling = true;
                    this.setScrollPosition();
                    this.emit("dragStart", e);
                }
            };

            this.dragEvent.onDragMove = (e: PIXI.interaction.InteractionEvent, offset: Point) => {
                if (this.scrollX)
                    this.targetPosition.x = this.containerStart.x + offset.x;
                if (this.scrollY)
                    this.targetPosition.y = this.containerStart.y + offset.y;
            };

            this.dragEvent.onDragEnd = (e: PIXI.interaction.InteractionEvent) => {
                if (this.scrolling) {
                    this.scrolling = false;
                    this.emit("dragEnd", e);
                }
            };
        }
        //Mouse scroll
        const scrollSpeed = new PIXI.Point();
        const scroll = new MouseScrollEvent(this, true);
        scroll.onMouseScroll = () => {
            this.setScrollPosition(scrollSpeed);
        };
        this.updateScrollBars();
    }

    public forcePctPosition(direction: "x" | "y", pct: number) {
        const bounds = this.getInnerBounds();

        if (this.scrollX && direction == "x") {
            this.innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.scrollY && direction == "y") {
            this.innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this.Position[direction] = this.targetPosition[direction] = this.innerContainer.position[direction];
    }

    protected focusPosition(pos: PIXI.Point) {
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

        this.lastPosition.copyFrom(this.innerContainer.position);
        this.targetPosition.copyFrom(this.innerContainer.position);
        this.Position.copyFrom(this.innerContainer.position);
        this.updateScrollBars();
    }

    protected setScrollPosition(speed?: PIXI.Point) {
        if (speed) {
            this.Speed = speed;
        }

        if (!this.animating) {
            this.animating = true;
            this.lastPosition.copyFrom(this.innerContainer.position);
            this.targetPosition.copyFrom(this.innerContainer.position);
            Ticker.shared.addUpdateEvent(this.updateScrollPosition, this);
        }
    }

    protected updateScrollPosition(delta: number) {
        this.stop = true;
        if (this.scrollX) this.updateDirection("x", delta);
        if (this.scrollY) this.updateDirection("y", delta);
        if (stop) {
            this.animating = false;
        }
    }

    protected updateDirection(direction: "x" | "y", delta: number) {
        const bounds = this.getInnerBounds();

        let min;
        if (direction == "y")
            min = Math.round(Math.min(0, this._height - bounds.height));
        else
            min = Math.round(Math.min(0, this._width - bounds.width));

        if (!this.scrolling && Math.round(this.Speed[direction]) !== 0) {
            this.targetPosition[direction] += this.Speed[direction];
            this.Speed[direction] = Utils.Lerp(this.Speed[direction], 0, (5 + 2.5 / Math.max(this.softness, 0.01)) * delta);

            if (this.targetPosition[direction] > 0) {
                this.targetPosition[direction] = 0;

            }
            else if (this.targetPosition[direction] < min) {
                this.targetPosition[direction] = min;

            }
        }

        if (!this.scrolling && Math.round(this.Speed[direction]) === 0 && (this.innerContainer[direction] > 0 || this.innerContainer[direction] < min)) {
            const target = this.Position[direction] > 0 ? 0 : min;
            this.Position[direction] = Utils.Lerp(this.Position[direction], target, (40 - (30 * this.softness)) * delta);
            this.stop = false;
        }
        else if (this.scrolling || Math.round(this.Speed[direction]) !== 0) {

            if (this.scrolling) {
                this.Speed[direction] = this.Position[direction] - this.lastPosition[direction];
                this.lastPosition.copyFrom(this.Position);
            }
            if (this.targetPosition[direction] > 0) {
                this.Speed[direction] = 0;
                this.Position[direction] = 100 * this.softness * (1 - Math.exp(this.targetPosition[direction] / -200));
            }
            else if (this.targetPosition[direction] < min) {
                this.Speed[direction] = 0;
                this.Position[direction] = min - (100 * this.softness * (1 - Math.exp((min - this.targetPosition[direction]) / -200)));
            }
            else {
                this.Position[direction] = this.targetPosition[direction];
            }
            this.stop = false;
        }

        this.innerContainer.position[direction] = Math.round(this.Position[direction]);

        this.updateScrollBars();

    }

}