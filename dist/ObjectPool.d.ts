/** 对象池*/
declare class ObjectPool {
    constructor();
    /**
     * 作为对象池的词典dict
     */
    private objPoolDict;
    /**
     * 向对象池中放入对象，以便重复利用
     */
    push<T extends Lifecycle, S>(keyClass: S, oldObj: T): void;
    /**
     * 从对象池中取出需要的对象
     * @return 取出的相应对象
     *
     */
    pop<T>(keyClass: T): TAny;
}
/**
 * 对象池实例
 */
export declare const objectPoolShared: ObjectPool;
export {};
