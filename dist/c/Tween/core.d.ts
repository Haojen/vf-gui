import Tween from './Tween';
/**
 * 插件存储器
 * @namespace tween.Plugins
 * @memberof vfui.tween
 * @example
 * let num = Plugins.num = function (node, start, end) {
  * return t => start + (end - start) * t
  * }
  *
  * @static
  */
export declare const Plugins: TAny;
/**
 * 添加对象到缓动列表
 * @param {Tween} tween Tween 实例
 * @memberof vfui.tween
 * @example
 * let tween = new vfui.tween.Tween({x:0})
 * tween.to({x:200}, 1000)
 * vfui.tween.add(tween)
 */
export declare function add(tween: Tween): void;
/**
 * 没有缓动后，设置运行多少帧后，停止
 * @param {number} frameCount=120 删除所有动画后，要运行的剩余帧
 * @memberof vfui.tween
 * @example
 * vfui.tween.FrameThrottle(60)
 */
export declare function FrameThrottle(frameCount?: number): void;
/**
 * 延时处理，针对插件、canvas、dom
 * @param {number} state=true 是否平滑处理
 * @memberof vfui.tween
 * @example
 * vfui.tween.ToggleLagSmoothing(false)
 */
export declare function ToggleLagSmoothing(_state?: boolean): void;
/**
 * 获得所有缓动对象
 * @memberof vfui.tween
 * vfui.tween.getAll()
 */
export declare function getAll(): Tween[];
/**
 * 移除所有动画对象
 * @example  vfui.tween.removeAll()
 * @memberof vfui.tween
 */
export declare function removeAll(): void;
/**
 * 获取对象
 * @param {Tween} tween 缓动对象实例
 * @return {Tween} 返回对象或null
 * @memberof vfui.tween
 * @example
 * vfui.tween.get(tween)
 */
export declare function get(tween: Tween): Tween | null;
export declare function removeDisplay(uuid: string): void;
/**
 * 从缓动列表移除对象
 * @param {Tween} tween Tween instance
 * @memberof vfui.tween
 * @example
 * vfui.tween.remove(tween)
 */
export declare function remove(tween: Tween): void;
/**
 * 按给定时间更新缓动
 * @param {number=} time 时间戳
 * @param {Boolean=} preserve 完成后，防止删除动画对象
 * @memberof vfui.tween
 * @example
 * vfui.tween.update(500)
 */
export declare function update(time: number, preserve?: boolean): boolean;
/**
 * 是否正在运行中
 * @return {Boolean} 只要还有缓动在运行，返回true
 * @memberof vfui.tween
 * @example vfui.tween.isRunning()
 */
export declare function isRunning(): boolean;
/**
 * 返回是否开启延迟平滑状态
 * @return {Boolean}
 * @memberof vfui.tween
 * @example vfui.tween.isRunning()
 */
export declare function isLagSmoothing(): boolean;
