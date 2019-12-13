/**
 * 特定属性改变时,通常为了去系统事件区分，UI组件的事件名为大写
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
 * 5. FollowLine 完成一次划线
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
 * 组件被添加前
 */
export const ADD = "add";
/**
 * 组件被添加时
 */
export const ADDED = "added";

/**
 * 组件被移除时
 */
export const REMOVEED = "removed";
/**
 * 组件大小改变后
 */
export const RESIZE = "RESIZE";
/**
 * 组件位置移动
 */
export const MOVE = "MOVE";
/**
 * 组件创建完成后
 */
export const CREATION_COMPLETE = "CREATION_COMPLETE";


/**
 * 组件拖动开始之前
 */
export const DRAG_START_BEFORE = "DRAG_START_BEFORE";
/**
 * 组件拖动开始时
 */
export const DRAG_START = "DRAG_START";

/**
 * 组件拖动结束之前
 */
export const DRAG_END_BEFORE = "DRAG_END_BEFORE";
/**
 * 组件拖动结束时 （如果绑定接收容器并拖动到接收容器中，不会触发此事件）
 */
export const DRAG_END = "DRAG_END";
/**
 * 组件拖动中
 */
export const DRAG_MOVE = "DRAG_MOVE";

/**
 * 组件拖动到接收目标中之前
 */
export const DRAG_TARGET_BEFORE = "DRAG_TARGET_BEFORE";
/**
 * 组件拖动到接收目标中
 */
export const DRAG_TARGET = "DRAG_TARGET";

/**
 * 有拖拽物掉落到此容器时触发
 */
export const DROP_TARGET = "DROP_TARGET";

