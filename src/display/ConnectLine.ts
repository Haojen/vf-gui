import { DisplayObject } from "../core/DisplayObject";
import { ComponentEvent } from "../interaction/Index";
import { pointPlus, pointDistance, getDisplayObject } from "../utils/Utils";
import { Tween } from "../tween/Tween";

type LinePostion = 'leftTop' | 'centerTop' | 'rightTop' |
'leftCenter' | 'center' | 'rightCenter' |
'leftBottom' | 'centerBottom' | 'rightBottom' | number[];


export const play = Symbol("play");
/**
 * 连线组件
 * 
 * 
 * @example let connectLine = new gui.ConnectLine();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/TestConnectLine
 */
export class ConnectLine extends DisplayObject {

    public constructor() {
        super();
        this.line = new PIXI.Graphics();
        this.container.addChild(this.line);

    }

    private readonly line: PIXI.Graphics;
    private _lastStartPos: {x: number; y: number} = {x: NaN, y: NaN};
    private _lastEndPos: {x: number; y: number} = {x: NaN, y: NaN};

    private _play: 1|2 = 1;
    /**
     *  触发画线操作
     * 
     *  属性 play = 1 触发画线，线条从source->target.
     *  属性 play = 2 触发画线，线条从target->source.
     */
    public get play() {
        return this._play;
    }
    public set play(value) {
        this.$values[play] = true;
        this._play = value;
        this.invalidateDisplayList();
    }

    private _autoPlay = true;
    /**
     *  默认 autoPlay = true
     * 
     *  autoPlay = true时，组件在设置source,target,sourcePostion,targetPostion后自动触发画线，线条从source->target.
     * 
     *  autoPlay = false时，设置source,target,sourcePostion,targetPostion后不会触发画线，需调用 play.
     */
    public get autoPlay() {
        return this._autoPlay;
    }
    public set autoPlay(value) {
        this._autoPlay = value;
    }

    private _source?: DisplayObject;
    /**
     * 设置源显示对象
     */
    public get source() {
        return this._source;
    }
    public set source(value) {
        if (this._source === getDisplayObject(value,this)) {
            return;
        }      
        this._source = getDisplayObject(value,this);
        this.invalidateDisplayList();
    }

    private _sourcePostion: LinePostion = [0, 0];
    /**
     * 设置源显示对象位置
     */
    public get sourcePostion() {
        return this._sourcePostion;
    }
    public set sourcePostion(value) {
        if (this._sourcePostion === value) {
            return;
        }
        this._sourcePostion = value;
        this.invalidateDisplayList();
    }

    private _target?: DisplayObject;
    /**
     * 设置目标显示对象
     */
    public get target() {
        return this._target;
    }
    public set target(value) {
        if (this._target === getDisplayObject(value,this)) {
            return;
        }
        this._target = getDisplayObject(value,this);
        this.invalidateDisplayList();
    }

    private _targetPostion: LinePostion = [0, 0];
    /**
     * 设置目标显示对象位置
     */
    public get targetPostion() {
        return this._targetPostion;
    }
    public set targetPostion(value) {
        if (this._targetPostion === value) {
            return;
        }
        this._targetPostion = value;
        this.invalidateDisplayList();
    }

    /**
     * 线条颜色
     */
    private _lineColor = 0;
    public get lineColor() {
        return this._lineColor;
    }
    public set lineColor(value) {
        if (this._lineColor === value) {
            return;
        }
        this._lineColor = value;
        this.invalidateProperties();
    }
    /**
     * 线条粗细
     */
    private _lineWidth = 1;
    public get lineWidth() {
        return this._lineWidth;
    }
    public set lineWidth(value) {
        if (this._lineWidth === value) {
            return;
        }
        this._lineWidth = value;
        this.invalidateProperties();
        this.invalidateDisplayList();
    }

    private _isAnimation = false;
    /**
     * 线条位置改变时，是否有动画
     */
    public get isAnimation() {
        return this._isAnimation;
    }
    public set isAnimation(value) {
        if (this._isAnimation === value) {
            return;
        }
        this._isAnimation = value;
    }


    protected commitProperties(): void {
        this.line.lineStyle(this.lineWidth, this.lineColor, this.alpha);
    }

    private getLocalPos(_linePostion: LinePostion, display?: DisplayObject) {
        let pos: { x: number; y: number } = {x: 0, y: 0};

        if (display) {
            if(display.container.position.x === 0 && display.container.position.y === 0){
                display.validateNow();
            }
            const startPos = this.container.parent.toLocal(display.container.position, display.container.parent);
            switch (_linePostion) {
                case 'leftTop':
                    pos = pointPlus(startPos,{x: 0, y: 0});
                    break;
                case 'leftCenter':
                    pos = pointPlus(startPos,{x: 0, y: display.height >> 1});
                    break;
                case 'leftBottom':
                    pos = pointPlus(startPos,{x: 0, y: display.height});
                    break;
                case 'centerTop':
                    pos = pointPlus(startPos,{x: display.width >> 1, y: 0});
                    break;
                case 'center':
                    pos = pointPlus(startPos,{x: display.width >> 1, y: display.height >> 1});
                    break;
                case 'centerBottom':
                    pos = pointPlus(startPos,{x: display.width >> 1, y: display.height});
                    break;
                case 'rightTop':
                    pos = pointPlus(startPos,{x: display.width, y: 0});
                    break;
                case "rightCenter":
                    pos = pointPlus(startPos,{x: display.width, y: display.height >> 1});
                    break;
                case 'rightBottom':
                    pos = pointPlus(startPos,{x: display.width, y: display.height});
                    break;
                default:
                    pos.x = startPos.x + _linePostion[0];
                    pos.y = startPos.y + _linePostion[1];
            }
        } else {
            if (Array.isArray(_linePostion)) {
                pos.x = _linePostion[0];
                pos.y = _linePostion[1];
            }
        }

        return pos;
    }

    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {

        const { _source, _target, _sourcePostion, _targetPostion, _lastStartPos, _lastEndPos, line} = this;
        const startPos = this.getLocalPos(_sourcePostion, _source);
        const endPos = this.getLocalPos(_targetPostion, _target);
        if (_lastStartPos.x !== startPos.x ||
             _lastStartPos.y !== startPos.y ||
             _lastEndPos.x !== endPos.x ||
             _lastEndPos.y !== endPos.y) {

            this._lastStartPos =  startPos; 
            this._lastEndPos =  endPos; 
            if(this._autoPlay){
                this.animation();
            }     
        }
        if(this.$values[play] === true && !this._autoPlay) {
            this.$values[play] = false;
            this.animation();
        }   
        //super.updateDisplayList(unscaledWidth, unscaledHeight);     
    }

    private animation(){
        const yoyo = this._play;
        const line = this.line;
        const startPos = yoyo === 1 ? this._lastStartPos : this._lastEndPos;
        const endPos = yoyo === 1 ? this._lastEndPos : this._lastStartPos;

        line.removeChildren();

        if(!this.isAnimation){
            line.moveTo(startPos.x,startPos.y);
            line.lineTo(endPos.x, endPos.y);
            this.emit(ComponentEvent.COMPLETE,this);
            return;
        }

        const distance = pointDistance(startPos,endPos);
        const lastPos = {x:startPos.x,y:startPos.y};
        const from =  {dt:0};
        const to =  {dt:distance};
        const tw = new Tween(from)
            .to(to,500)
            .on(Tween.Event.update, (obj: TAny) => {
                const dt =  Math.ceil(obj.dt);
                const x = (dt*(endPos.x-startPos.x))/distance + startPos.x;
                const y = (dt*(endPos.y-startPos.y))/distance + startPos.y;
                line.moveTo(lastPos.x, lastPos.y);
                line.lineTo(x, y);
                lastPos.x = x;
                lastPos.y = y;
            })
            .once(Tween.Event.complete, (obj: TAny) => {
                tw.removeAllListeners();
                tw.release();
                this.emit(ComponentEvent.COMPLETE,this);
            })
            .start();
    }

    public set isClear(value: boolean){
        this.clear();
    }

    public clear(){
        const line = this.line;
        line.clear();
        this.commitProperties();
    }

    public release() {
        super.release();
        this._source = undefined;
        this._target = undefined;
        const line = this.line;
        line.clear();
        if (line.parent) {
            line.parent.removeChild(line).destroy();
        }
        this.offAll(ComponentEvent.CHANGE);
    }
}