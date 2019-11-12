
interface Lifecycle{

    /**
     * 组件加载，暂时可能用不到
     */
    load(): void;
    /**
     * 释放，回收
     */
    release(): void;
}
/**
 * 生命周期的接口
 */
interface LifecycleHook{
    /**
     * 显示对象初始化完成，只执行一次,子类重写，不可外部调用
     */
    $onInit(): void;
    /**
     * 加载完成，不可外部调用
     */
    $onLoad(): void;
    /**
     * 回收，释放完成，不可外部调用
     */
    $onRelease(): void;
    /**
     * 添加到舞台后，不可外部调用
     */
    $onAddStage(): void;
    /**
     * 移出舞台后，不可外部调用
     */
    $onRemoveStage(): void;
}