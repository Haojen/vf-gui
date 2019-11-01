/**
 * 特定属性改变时
 * 1. CheckBox 的 checked 改变时
 * 2. Label 的 text 改变时
 * 3. SpriteAnimated 的 animationName 改变时
 * 4. Button 文字改变
 * 5. ScrollingContainer 拖动改变时
 * 6. Slider 滑动改变后
 * 7. SpriteAnimated 动画改变后
 */
export const CHANGE = "CHANGE";

/**
 * 状态改变中
 * 
 * slider 滑动时
 */
export const CHANGEING = "CHANGEING";

/**
 * 状态切换完成时
 * 
 * 1. SpriteAnimated 每次播放完时，触发(loop = false时)
 * 2. Image 图片加载完成时
 * 3. Slider 滑动完成
 * 4. Timeline  每次播放完时，触发(loop = false时)
 */
export const COMPLETE = "COMPLETE";

/**
 * 状态发生改变时
 */
export const STATE_CHANGE= "STATE_CHANGE";

/**
 * 状态切换完成时
 * 
 * SpriteAnimated 每次播放完时，，触发(loop = true时)
 */
export const LOOP = "LOOP";

/**
 * 容器被添加在到父级时触发
 */
export const ADDED = "ADDED";

/**
 * 容器被从父级移除时触发
 */
export const REMOVEED = "REMOVEED";