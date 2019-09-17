import Tween from './Tween';
let _id = 0;
/**
 * 将序列的所有元素随机排序。
 * @param a 序列数组
 */
export const shuffle = (a) => {
    let j;
    let x;
    let i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
};
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
//# sourceMappingURL=Timeline.js.map