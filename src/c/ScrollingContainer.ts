import {UIBase} from "../core/UIBase";
import {Container} from "./Container";
import * as Ticker from "../core/Ticker";
import * as Utils from "../core/Utils";
import {DragEvent} from "../interaction/DragEvent";
import {MouseScrollEvent} from "../interaction/MouseScrollEvent";
import {InteractionEvent} from "../interaction/InteractionEvent";
import { now } from "../core/Utils";
import { ComponentEvent } from "../interaction/Index";
import { ContainerBase } from "./ContainerBase";
import { CSSStyle } from "../layout/CSSStyle";


/**
 * 可滚动的容器
 */
export class ScrollingContainer extends Container {
    public constructor() {
        super();
        this._childrenStartIndex = 0;
        this.container.addChild(this._innerContainer);
        this.container.name = "ScrollingContainer";
        this._innerContainer.name = "innerContainer";

        const _graphics = new PIXI.Graphics();
        _graphics.clear();
        _graphics.beginFill(0xffcc00);   
        _graphics.drawRoundedRect(0,0,200,200,0);
        _graphics.endFill();
        this.style.maskImage =_graphics;   

        this.dragEvent.onDragStart = () => {
            if (!this.scrolling) {
                this._containerStart.copyFrom(this._innerContainer.position);
                this._Position.copyFrom(this._innerContainer.position);
                this.scrolling = true;
                this.setScrollPosition();
                Ticker.shared.addUpdateEvent(this.updateScrollPosition, this);
            }
        };

        this.dragEvent.onDragMove = (e: InteractionEvent, offset: PIXI.Point) => {
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

        const scrollSpeed = new PIXI.Point();
        this.mouseScrollEvent.onMouseScroll = (e: WheelEvent,delta: PIXI.Point) => {
            scrollSpeed.set(-delta.x * 0.2, -delta.y * 0.2);
            this.setScrollPosition(scrollSpeed);
        };

    }
   /**
     * 是否启动拖拽滚动
     * @default true
     */
    private _dragScrolling = true;
    public get dragScrolling() {
        return this._dragScrolling;
    }
    public set dragScrolling(value) {
        this._dragScrolling = value;
        //Drag scroll and Mouse scroll
        if (value) {
            this.mouseScrollEvent.startEvent();
            this.dragEvent.startEvent();
        }else{
            this.mouseScrollEvent.stopEvent();
            this.dragEvent.stopEvent();
        }
    }
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
     * 是否启用水平滚动 
     * @default false
     */
    public scrollX = false;
    /**
     * 是否滚动中
     */
    public scrollY = false;
    
    /**
     * 内容容器
     * @private
     */
    private _innerContainer = new ContainerBase();
    /**
     * 内容的宽高
     */
    public innerBounds = new PIXI.Rectangle();
    /** 
     * 拖动处理类
     */
    private dragEvent = new DragEvent(this);
    /**
     * 鼠标滚动
     */
    private mouseScrollEvent = new MouseScrollEvent(this,true);
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

    private _isInitScrolling = false;

    private _containerStart = new PIXI.Point();
    private _targetPosition = new PIXI.Point();
    private _lastPosition = new PIXI.Point();
    private _Position = new PIXI.Point();
    private _Speed = new PIXI.Point();
    private _stop = false;

    public update(_style: CSSStyle) {
        super.update(_style);
        if (this._lastWidth != this._width || this._lastHeight != this._height) {
            const _of = this.expandMask;
            this.style.maskPosition = [_of,_of];
            this.style.maskSize = [ this._width,this._height];
            this._lastWidth = this._width;
            this._lastHeight = this._height;
            this.setScrollPosition();
        }
        
    }

    protected setScrollPosition(speed?: PIXI.Point) {
        if (speed) {
            this._Speed = speed;
        }

        if (!this.animating) {
            this.animating = true;
            this._lastPosition.copyFrom(this._innerContainer.position);
            this._targetPosition.copyFrom(this._innerContainer.position);
            this.updateScrollPosition(0);
        }
    }


    public addChildAt(item: UIBase, index: number) {

        if (item.parent) {
            item.parent.removeChild(item);
        }

        item.parent = this as TAny;    
        this._innerContainer.addChildAt(item.container, index);
        this.uiChildren.splice(index, 0, item);
        this.updatesettings(true, true);
        this.getInnerBounds(true);
        this.emit(ComponentEvent.ADDED,this);
        return item;
    }

    protected getInnerBounds(force?: boolean) {

        //this is a temporary fix, because we cant rely on innercontainer height if the children is positioned > 0 y.
        if (force || now() - this._boundCached > 1000) {
            this._innerContainer.getLocalBounds(this.innerBounds);
            this.innerBounds.height = this.innerBounds.y + this._innerContainer.height;
            this.innerBounds.width = this.innerBounds.x + this._innerContainer.width;
            this._boundCached = now();
        }
        return this.innerBounds;
    }



    protected initialize(){
        super.initialize();
        this.initScrolling();
    }
    protected initScrolling() {

        this._isInitScrolling = true;

        this.updateScrollBars();
    }

    protected updateScrollBars() {
        this.emit(ComponentEvent.CHANGE,this)
    }


    /**
     * 百分比设置位置
     * @param direction 方向
     * @param pct 百分比0-1
     */
    public forcePctPosition(direction: "x" | "y", pct: number) {
        const bounds = this.getInnerBounds();
        if (this.scrollX && direction == "x") {
            this._innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.scrollY && direction == "y") {
            this._innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this._Position[direction] = this._targetPosition[direction] = this._innerContainer.position[direction];
    }

    /** 根据焦点设置位置 */
    public focusPosition(pos: PIXI.Point) {
        const bounds = this.getInnerBounds();

        let dif;
        if (this.scrollX) {
            const x = Math.max(0, (Math.min(bounds.width, pos.x)));
            if (x + this._innerContainer.x > this._width) {
                dif = x - this._width;
                this._innerContainer.x = -dif;
            }
            else if (x + this._innerContainer.x < 0) {
                dif = x + this._innerContainer.x;
                this._innerContainer.x -= dif;
            }
        }

        if (this.scrollY) {
            const y = Math.max(0, (Math.min(bounds.height, pos.y)));

            if (y + this._innerContainer.y > this._height) {
                dif = y - this._height;
                this._innerContainer.y = -dif;
            }
            else if (y + this._innerContainer.y < 0) {
                dif = y + this._innerContainer.y;
                this._innerContainer.y -= dif;
            }
        }

        this._lastPosition.copyFrom(this._innerContainer.position);
        this._targetPosition.copyFrom(this._innerContainer.position);
        this._Position.copyFrom(this._innerContainer.position);
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
        
        if (!this.scrolling && Math.round(this._Speed[direction]) === 0 && (this._innerContainer[direction] > 0 || this._innerContainer[direction] < min)) {
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

        this._innerContainer.position[direction] = Math.round(this._Position[direction]);

        this.updateScrollBars();
    }

}