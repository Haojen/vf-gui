/** 对象池*/
class ObjectPool {
    constructor() {
        /**
         * 作为对象池的词典dict
         */
        this.objPoolDict = new Map();
    }
    /**
     * 向对象池中放入对象，以便重复利用
     */
    push(keyClass, oldObj) {
        if (oldObj === undefined) {
            return;
        }
        let objs = this.objPoolDict.get(keyClass);
        if (objs === undefined) {
            objs = [];
            this.objPoolDict.set(keyClass, objs);
        }
        if (objs.indexOf(oldObj) === -1) {
            oldObj.release();
            objs.push(oldObj);
        }
    }
    /**
     * 从对象池中取出需要的对象
     * @return 取出的相应对象
     *
     */
    pop(keyClass) {
        const objs = this.objPoolDict.get(keyClass);
        if (objs !== undefined && objs.length > 0) {
            return objs.pop();
        }
        return new keyClass();
    }
}
/**
 * 对象池实例
 */
export const objectPoolShared = new ObjectPool();
//# sourceMappingURL=ObjectPool.js.map