
interface Lifecycle{
    load():void
    /**
     * 释放，回收
     */
    release():void
    /**
     * 释放，彻底释放
     * @param destroyWebGL 释放WEBGL资源，与本地资源，可能破坏其他显示对象
     */
    destroy(destroyWebGL?:boolean):void
}
/**
 * 生命周期的接口
 */
interface LifecycleHook{
    /**
     * 初始化完成，只执行一次
     */
    onInit():void
    /**
     * 加载完成
     */
    onLoad():void;
    /**
     * 回收，释放
     */
    onRelease():void;
    /**
     * 添加到舞台
     */
    onAddStage():void;
    /**
     * 移出舞台
     */
    onRemoveStage():void;
    /**
     * 显示对象初始化完成，只执行一次
     */
    onViewInit():void
    /**
     * 释放指令
     */
    onDestroy():void

    
}