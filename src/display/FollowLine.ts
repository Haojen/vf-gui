import { DisplayObject } from "../core/DisplayObject";
import { InteractionEvent, TouchMouseEvent, ClickEvent, ComponentEvent } from "../interaction/Index";
import { pointDistance, pointSub, pointSignAngle } from "../utils/Utils";
import { FollowLineEnum } from "../enum/Index";

const tempLocalBounds = new PIXI.Rectangle();

/** 验证是否触发的距离 */
const POS_DISTANCE: number = 7;
/** 优化曲率，小于这个弧度视为直线，把当前点优化掉 */
const MAX_ARC: number = 0.09; // 5度

/** 点数字转换成字符的数位 */
const DIGIT: number = 90;
/** 字符列表 ascii */
const NUMBER_TO_STR: string = "$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}";

/** 压缩比例，有损压缩 */
const COMPRESS_RATE: number = 2;

/** 最大宽度 */
const MAX_WIDTH = 1500;

/** 为了把点都变成正数所用 */
const POSITIVE: number = MAX_WIDTH / 2;

/** 线条最大数量 */
const MAX_LINES = 100;

const TeacherDrawColor = 0xcd0032;
const StudentDrawColor = 0x3200cd;

/** 将一个x，y坐标转换成3个字符，宽高不能超过MAX_WIDTH */
function getStrFromPos(x: number, y: number) {
    x = Math.min(Math.max(0, x), MAX_WIDTH);
    y = Math.min(Math.max(0, y), MAX_WIDTH);

    // 有损压缩
    let compX = Math.floor(x / COMPRESS_RATE);
    let compY = Math.floor(y / COMPRESS_RATE);

    let n1 = compX % DIGIT;
    let n2 = compY % DIGIT;
    let n3 = Math.floor(compX / DIGIT) * 10 + Math.floor(compY / DIGIT);

    return NUMBER_TO_STR[n1] + NUMBER_TO_STR[n2] + NUMBER_TO_STR[n3];
}

/** 将字符串转换成坐标数字列表 */
function getVecListFromStr(str: string, from: number, to: number): number[] {
    let list = [];
    for (let index = from; index < to; index += 3) {
        let n1 = str.charCodeAt(index) - 36;
        let n2 = str.charCodeAt(index + 1) - 36;
        let n3 = str.charCodeAt(index + 2) - 36;

        let n12 = Math.floor(n3 / 10);
        let n22 = n3 % 10;

        let compX = n1 + n12 * DIGIT;
        let compY = n2 + n22 * DIGIT;

        let realX = compX * COMPRESS_RATE;
        let realY = compY * COMPRESS_RATE;

        list.push(realX);
        list.push(realY);
    }
    return list;
}


/**
 * 跟随鼠标或触摸绘制线条
 * 
 * @example let graphics = new gui.FollowLine();
 * 
 * @namespace gui
 * 
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
export class FollowLine extends DisplayObject {

    public constructor(bindDisplay?:DisplayObject) {
        super();
        this._lastPos = new PIXI.Point();
        this._mouseOffset = new PIXI.Point();
        this._lines = new Map();
        this.container.interactiveChildren = false;
        if(bindDisplay){
            this.clickEvent = new ClickEvent(bindDisplay, true);
        }else{
            this.clickEvent = new ClickEvent(this, true);
        }
        this.clickEvent.isOpenLocalPoint = true;
    }
    protected clickEvent:ClickEvent;
    /** 线条 */
    private _lines: Map<string, PIXI.Graphics>;
    /** 要删除的线，复制品 */
    private _eraseLine?: PIXI.Graphics;
    /** 触摸的ID */
    private _touchId = -1;
    /** 位置缓存，记录画线时候每一个点，最后画完优化 */
    private _posCache: PIXI.Point[] = [];
    /** 保存已画线的key */
    private _lineKeys: string[] = [];
    /** 鼠标坐标 */
    private _mouseOffset: PIXI.Point;
    /** 开始偏移量 */
    private startOffset = new PIXI.Point();
    /** 上次点击坐标 */
    private _lastPos: PIXI.Point;
    /**
     * 由老师触发的划线索引
     */
    private _curLineIndex = 0;
    /**
     * 需要处理的消息列表
     */
    private _messageCache: string[] = [];

    /** 是否擦除中 */
    private _isErasing = false;
    public get isErasing() {
        return this._isErasing;
    }
    public set isErasing(value) {
        if(this._isErasing === value){
            return;
        }
        this._isErasing = value;
        if (value) {
            this.clickEvent.getTarget().container.cursor  = "grab";
        } else {
            this.clickEvent.getTarget().container.cursor  = "auto";
        }
    }
    /** 角色状态 */
    private _role: FollowLineEnum.Role = FollowLineEnum.Role.teacher;
    public get role() {
        return this._role;
    }
    public set role(value) {
        this._role = value;
    }

    /**
     * @private
     * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
     */
    protected commitProperties(): void {
        this.onMessage();
        this.getCurLineByPos();
    }
    /**
     * 更新显示列表,子类重写，实现布局
     */
    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
        super.updateDisplayList(unscaledWidth, unscaledHeight);
        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
    }

    $onInit() {
        //由于绑定的可能非当前显示对象，所以此处不可以使用this.on("xxxx")
        this.clickEvent.getTarget().on(TouchMouseEvent.onPress, this.onPress, this);
        this.clickEvent.getTarget().on(TouchMouseEvent.onMove, this.onMove, this);
    }


    $onRelease() {
        this.clickEvent.getTarget().off(TouchMouseEvent.onPress, this.onPress, this);
        this.clickEvent.getTarget().off(TouchMouseEvent.onMove, this.onMove, this);
        this.clickEvent.remove();
        this.clear();
    }

    private onMessage() {
        let { _messageCache } = this;
        if (_messageCache.length > 0) {
            let message: string;
            let data: string;
            let role: string;
            let operate: FollowLineEnum.Operate;
            let lineId: string;
            while (_messageCache.length > 0) {
                message = _messageCache.pop() as string;
                operate = message.charAt(0) as FollowLineEnum.Operate;
                let messageIndex = message.indexOf('|');
                role = message.charAt(1);
                lineId = message.substr(2, messageIndex - 2);
                switch (operate) {
                    case FollowLineEnum.Operate.add:
                        data = message.substr(messageIndex + 1);
                        this.drawLine(lineId, data, 0, data.length, role);
                        break;
                    case FollowLineEnum.Operate.remove:
                        this.removeLine(role + lineId);
                        break;
                    case FollowLineEnum.Operate.clear:
                        this.clear();
                        break;
                }
            }
        }
    }


    private onPress(e: InteractionEvent, thisObj: DisplayObject, isPress: boolean) {
        e.stopPropagation();
        if (isPress) {
            if (this.parent === undefined) return;

            if (this._isErasing) return;

            if (this._touchId !== -1) return;

            this._touchId = e.data.identifier;
            let curLocal = this.container.toLocal(e.local,thisObj.container);
            this.startOffset.set(Math.floor(e.local.x - curLocal.x),Math.floor(e.local.y - curLocal.y));
            this._lastPos.copyFrom(curLocal);
            this._posCache = [this._lastPos.clone()];
            this._curLineIndex++;

        } else {

            // 清除操作
            if (this._isErasing && this._eraseLine) {
                let name = this._eraseLine.name;
                this.removeLine(name);
                this.emitMsg(FollowLineEnum.Operate.remove, name.charAt(0) as FollowLineEnum.Role, name.substr(1));
                this._eraseLine = undefined;
                return;
            }

            if (this._touchId === -1 || this._touchId != e.data.identifier) return;

            this._touchId = -1;

            if (this._posCache.length == 1) { //划线失败
                console.log('gui -> 移动距离过短，画线失败 >' + POS_DISTANCE);
                this._curLineIndex--;
                this._posCache.pop();
                return;
            }
            this.emitMsg(FollowLineEnum.Operate.add, this.role, this._curLineIndex.toString(),this.getDataStrByPosCache());
        }
    }



    private onMove(e: InteractionEvent) {
        e.stopPropagation();
        this._mouseOffset.set(Math.floor(e.local.x) - this.startOffset.x,Math.floor(e.local.y) - this.startOffset.y);
        
        if (this._isErasing) {
            if (this._role == FollowLineEnum.Role.teacher) {
                this.invalidateProperties();
            }
            return;
        }


        if (this._touchId === -1 || !this._lastPos || this._touchId != e.data.identifier) return;

        let { _lastPos, _posCache } = this;

        let len = pointDistance(_lastPos,this._mouseOffset);

        if (len < POS_DISTANCE) {
            return;
        }

        let brush = this.getGraphics(this._curLineIndex.toString(), this.role);
        brush.moveTo(_lastPos.x, _lastPos.y);
        brush.lineTo(this._mouseOffset.x,this._mouseOffset.y);
        _lastPos.copyFrom(this._mouseOffset);
        _posCache.push(_lastPos.clone());

    }

    /**
     * 发送操作事件
     * @param operate   1添加 2删除 3重置
     * @param role  Role
     * @param lineIndex 线段 ID
     */
    private emitMsg(operate: FollowLineEnum.Operate, role: FollowLineEnum.Role, lineId: string,data = '') {
        let dataStr = operate + role + lineId + '|' + data;
        this.emit(ComponentEvent.COMPLETE, this, dataStr);
    }

    /**
     * 
     * @param name (name = role + lineId)
     * @param role 
     */
    private getGraphics(name: string, role: string): PIXI.Graphics {
        let key = role + name;
        if (this._lines.has(key)) {
            return this._lines.get(key) as PIXI.Graphics;
        }
        if (this._lines.size > MAX_LINES) {
            this.removeLine(this._lineKeys.shift() as string);
        }
        let graphics = new PIXI.Graphics();
        graphics.interactive = false;
        graphics.interactiveChildren = false;
        graphics.name = key;
        this.container.addChild(graphics);
        this._lineKeys.push(key);
        this._lines.set(key, graphics);
        if (role == FollowLineEnum.Role.teacher) {
            graphics.lineStyle(3, TeacherDrawColor);
        } else {
            graphics.lineStyle(3, StudentDrawColor);
        }
        return graphics;
    }

    private getCurLineByPos() {


        let { _lines, _mouseOffset } = this;

        if (this._eraseLine) {
            this._eraseLine.tint = 0xFFFFFF;
            this._eraseLine = undefined;
        }

        if (!this.isErasing) {
            return;
        }

        let lastDistance = 10000;

        _lines.forEach(value => {
            value.getLocalBounds(tempLocalBounds);
            if (tempLocalBounds.contains(_mouseOffset.x, _mouseOffset.y)) {
                let distance = pointDistance(_mouseOffset, { x: tempLocalBounds.x + tempLocalBounds.width * 0.5, y: tempLocalBounds.y + tempLocalBounds.height * 0.5 });
                if (distance < lastDistance) {
                    lastDistance = distance;
                    this._eraseLine = value;
                }

            }
        });

        if (this._eraseLine) {
            (this._eraseLine as PIXI.Graphics).tint = 0x000000;
        }

    }

    private getDataStrByPosCache() {


        let { _posCache } = this;
        if(_posCache.length == 0){
            return;
        }
        // 稀疏位置点，通过曲率
        let finalX = [_posCache[0].x];
        let finalY = [_posCache[0].y];

        let lastLastPos = _posCache[0];
        let lastPos = _posCache[1];

        let sumAngle = 0;

        for (let index = 2; index < _posCache.length; index++) {
            const pos = _posCache[index];
            let pos1 = pointSub(lastPos, lastLastPos);
            let pos2 = pointSub(pos, lastPos);
            let angle = pointSignAngle(pos1, pos2);

            if (angle > MAX_ARC || angle < -MAX_ARC || sumAngle > MAX_ARC || sumAngle < -MAX_ARC) {
                finalX.push(lastPos.x);
                finalY.push(lastPos.y);
                sumAngle = 0;
            } else {
                sumAngle += angle;
            }

            lastLastPos = lastPos;
            lastPos = pos;
        }

        finalX.push(_posCache[_posCache.length - 1].x);
        finalY.push(_posCache[_posCache.length - 1].y);

        let finalStrList = [];
        for (let index = 0; index < finalX.length; index++) {
            const x = finalX[index] + POSITIVE;
            const y = finalY[index] + POSITIVE;
            let str = getStrFromPos(x, y);

            finalStrList.push(str);
        }

        let finalStr = finalStrList.join('');
        return finalStr;
    }

    private drawLine(drawId: string, data: string, from: number, to: number, role: string) {
        let graphics = this.getGraphics(drawId, role);
        let posList = getVecListFromStr(data, from, to);
        this.draw(graphics, posList);
    }

    private draw(graphics: PIXI.Graphics, posList: number[]) {
        let lastX = posList[0] - POSITIVE;
        let lastY = posList[1] - POSITIVE;
        graphics.moveTo(lastX, lastY);

        // 利用贝塞尔将线平滑化
        let realList = [];
        for (let index = 2; index < posList.length; index += 2) {
            const x = posList[index] - POSITIVE;
            const y = posList[index + 1] - POSITIVE;

            let halfX = lastX + (x - lastX) * 0.5;
            let halfY = lastY + (y - lastY) * 0.5;

            realList.push(halfX, halfY, x, y);

            lastX = x;
            lastY = y;
        }

        graphics.lineTo(realList[0], realList[1]);
        for (let index = 2; index < realList.length - 2; index += 4) {
            const cx = realList[index];
            const cy = realList[index + 1];
            const x = realList[index + 2];
            const y = realList[index + 3];
            graphics.quadraticCurveTo(cx, cy, x, y);
        }

        graphics.lineTo(realList[realList.length - 2], realList[realList.length - 1]);
    }

    private removeLine(key: string) {
        let delKeyIndex = this._lineKeys.indexOf(key);
        if (delKeyIndex !== -1) {
            this._lineKeys.splice(delKeyIndex, 1);
        }
        let line = this._lines.get(key);
        if (line) {
            this._lines.delete(key);
            if (line.parent) {
                line.parent.removeChild(line);
                line.destroy();
            }
        }

    }

    public clear() {
        this._lines.forEach((value: PIXI.Graphics, key: string) => {
            if (value.parent) {
                value.parent.removeChild(value).destroy();
            }
        });
        this._lines.clear();
        this._curLineIndex = 0;
        this._posCache = [];
        this._lineKeys = [];
    }

    public setData(data: string | string[]) {
        if(typeof data === 'string'){
            this._messageCache.push(data);
        }else{
            this._messageCache = this._messageCache.concat(data);
        }
        
        this.invalidateProperties();
    }

    public reset(): any {
        this.emitMsg(FollowLineEnum.Operate.clear, this.role, "");
        this.clear();
    }


}