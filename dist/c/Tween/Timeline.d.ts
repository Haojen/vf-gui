import Tween from './Tween';
/**
 * 将序列的所有元素随机排序。
 * @param a 序列数组
 */
export declare const shuffle: (a: number[]) => number[];
/**
 * 时间轴主类
 *
 * It works same as `Tween` instance, using `.repeat`, `.restart` or `etc` works like a `Tween`, so please see `Tween` class for methods
 * @constructor
 * @class
 * @namespace tween.Timeline
 * @param {Object=} params Default params for new tweens
 * @example let tl = new Timeline({delay:200})
 * @extends Tween
 */
export default class Timeline extends Tween {
}
