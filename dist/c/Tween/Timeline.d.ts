declare class Node {
    constructor(node?: Node);
    parent: Node | undefined;
    start: TAny;
    end: TAny;
    easing: TAny;
    duration: number;
    startFrame: number;
    endFrame: number;
    prevTime: number;
    release(): void;
    load(): void;
    destroy(): void;
}
/**
 * 时间轴主类
 *
 * @constructor
 * @class
 * @namespace tween.Timeline
 * @param {Object=} params 默认参数
 * @example let tl = new Timeline({delay:200})
 * @extends Tween
 */
export default class Timeline implements Lifecycle {
    constructor();
    id: number;
    private _object;
    private _frames;
    private _frameCount;
    private _elapsedMS;
    private _prevTime;
    private _duration;
    private _isStop;
    private _lastNode;
    private _isSetDefault;
    setDefault(object: TAny, _duration: number, fps: number): this;
    addProperty(property: string, value: number | string | boolean, endFrame: number, easing?: TAny): this;
    stop(): void;
    play(): void;
    gotoAndPlay(frame: number): void;
    gotoAndStop(frame: number): void;
    private seekLastNode;
    private goto;
    update(a: number, b?: number, elapsedMS?: number): true | undefined;
    updateobject(key: string, node: Node): boolean;
    load(): void;
    release(): void;
    destroy(destroyWebGL?: boolean): void;
}
export {};
