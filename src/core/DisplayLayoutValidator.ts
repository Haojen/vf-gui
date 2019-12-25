import { DisplayLayoutAbstract } from "./DisplayLayoutAbstract";
import tickerShared  from "./Ticker";

/**
 * @private
 * 列表项
 */
class DepthBin {
    public map: { [key: number]: boolean } = {};
    public items: DisplayLayoutAbstract[] = [];
    public length: number = 0;

    public insert(client: DisplayLayoutAbstract): void {
        const hashCode = client.uuid;
        if (this.map[hashCode]) {
            return;
        }
        this.map[hashCode] = true;
        this.length++;
        this.items.push(client);
    }

    public pop() {
        const client = this.items.pop();//使用pop会比shift有更高的性能，避免索引整体重置。
        if (client) {
            this.length--;
            if (this.length === 0) {
                this.map = {};//清空所有key防止内存泄露
            }
            else {
                this.map[client.uuid] = false;
            }
        }
        return client;
    }

    public remove(client: DisplayLayoutAbstract): void {
        const index = this.items.indexOf(client);
        if (index >= 0) {
            this.items.splice(index, 1);
            this.length--;
            if (this.length === 0) {
                this.map = {};//清空所有key防止内存泄露
            }
            else {
                this.map[client.uuid] = false;
            }
        }
    }
}
/**
 * @private
 * 显示列表嵌套深度排序队列
 */
class DepthQueue {
    /**
     * 深度队列
     */
    private depthBins: { [key: number]: DepthBin } = {};

    /**
     * 最小深度
     */
    private minDepth: number = 0;

    /**
     * 最大深度
     */
    private maxDepth: number = -1;

    /** 
     * 移除所有
     */
    public removeAll(){
        let depthBins = this.depthBins;
        for(let key in depthBins){
            let item:DepthBin = depthBins[key];
            item.items = [];
            item.map = {};
            item.length = 0;
        }
        this.minDepth = 0;
        this.maxDepth = -1;
    }

    /**
     * 插入一个元素
     */
    public insert(client: DisplayLayoutAbstract): void {
        const depth = client.$nestLevel;
        if (this.maxDepth < this.minDepth) {
            this.minDepth = this.maxDepth = depth;
        }
        else {
            if (depth < this.minDepth)
                this.minDepth = depth;
            if (depth > this.maxDepth)
                this.maxDepth = depth;
        }

        let bin = this.depthBins[depth];

        if (!bin) {
            bin = this.depthBins[depth] = new DepthBin();
        }
        bin.insert(client);
    }

    /**
     * 从队列尾弹出深度最大的一个对象
     */
    public pop(){
        let client: DisplayLayoutAbstract|undefined;

        const minDepth = this.minDepth;
        if (minDepth <= this.maxDepth) {
            let bin = this.depthBins[this.maxDepth];
            while (!bin || bin.length === 0) {
                this.maxDepth--;
                if (this.maxDepth < minDepth)
                    return undefined;
                bin = this.depthBins[this.maxDepth];
            }

            client = bin.pop();

            while (!bin || bin.length == 0) {
                this.maxDepth--;
                if (this.maxDepth < minDepth)
                    break;
                bin = this.depthBins[this.maxDepth];
            }

        }

        return client;
    }

    /**
     * 从队列首弹出深度最小的一个对象
     */
    public shift() {
        let client: DisplayLayoutAbstract|undefined;

        const maxDepth = this.maxDepth;
        if (this.minDepth <= maxDepth) {
            let bin = this.depthBins[this.minDepth];
            while (!bin || bin.length === 0) {
                this.minDepth++;
                if (this.minDepth > maxDepth)
                    return undefined;
                bin = this.depthBins[this.minDepth];
            }

            client = bin.pop();

            while (!bin || bin.length == 0) {
                this.minDepth++;
                if (this.minDepth > maxDepth)
                    break;
                bin = this.depthBins[this.minDepth];
            }
        }

        return client;
    }

    /**
     * 移除大于等于指定组件层级的元素中最大的元素
     */
    public removeLargestChild(client: DisplayLayoutAbstract) {
        const hashCode = client.uuid;
        const nestLevel = client.$nestLevel;
        let max = this.maxDepth;
        const min = nestLevel;

        while (min <= max) {
            const bin = this.depthBins[max];
            if (bin && bin.length > 0) {
                if (max === nestLevel) {
                    if (bin.map[hashCode]) {
                        bin.remove(client);
                        return client;
                    }
                }else if((client as TAny)["isContainer"]) {

                    const items = bin.items;
                    const length = bin.length;
                    for (let i = 0; i < length; i++) {
                        const value = items[i] as TAny;
                        if ((client as TAny).contains(value)) {
                            bin.remove(value);
                            return value;
                        }
                    }
                }
                else {
                    break;
                }
                max--;
            }
            else {
                if (max == this.maxDepth) {
                    this.maxDepth--;
                }
                max--;
                if (max < min)
                    break;
            }
        }

        return undefined;
    }

    /**
     * 移除大于等于指定组件层级的元素中最小的元素
     */
    public removeSmallestChild(client: DisplayLayoutAbstract) {
        const nestLevel = client.$nestLevel;
        let min = nestLevel;
        const max = this.maxDepth;
        const hashCode = client.uuid;
        while (min <= max) {
            const bin = this.depthBins[min];
            if (bin && bin.length > 0) {
                if (min === nestLevel) {
                    if (bin.map[hashCode]) {
                        bin.remove(client);
                        return client;
                    }
                }
                else if ((client as TAny)["isContainer"]) {
                    const items = bin.items;
                    const length = bin.length;
                    for (let i = 0; i < length; i++) {
                        const value = items[i] as TAny;
                        if ((client as TAny).contains(value)) {
                            bin.remove(value);
                            return value;
                        }
                    }
                }
                else {
                    break;
                }

                min++;
            }
            else {
                if (min == this.minDepth)
                    this.minDepth++;
                min++;
                if (min > max)
                    break;
            }
        }

        return undefined;
    }

    /**
     * 队列是否为空
     */
    public isEmpty(): boolean {
        return this.minDepth > this.maxDepth;
    }
}



/**
 * @private
 * 失效验证管理器
 */
class UIValidator extends PIXI.utils.EventEmitter {
    /**
     * @private
     * 创建一个Validator对象
     */
    public constructor() {
        super();
        
    }

    /**
     * @private
     */
    private targetLevel = Infinity;

    /**
     * @private
     */
    private invalidatePropertiesFlag = false;

    /**
     * @private
     */
    private invalidateClientPropertiesFlag = false;

    /**
     * @private
     */
    private invalidatePropertiesQueue = new DepthQueue();

    /**
     * @private
     * 标记组件属性失效
     */
    public invalidateProperties(target: DisplayLayoutAbstract): void {
        if (!this.invalidatePropertiesFlag) {
            this.invalidatePropertiesFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        if (this.targetLevel <= target.$nestLevel)
            this.invalidateClientPropertiesFlag = true;
        this.invalidatePropertiesQueue.insert(target);
    }

    /**
     * @private
     * 验证失效的属性
     */
    private validateProperties(): void {
        const queue = this.invalidatePropertiesQueue;
        let target = queue.shift();
        while (target) {
            if (target.parent) {
                target.validateProperties();
            }
            target = queue.shift();
        }
        if (queue.isEmpty())
            this.invalidatePropertiesFlag = false;
    }

    /**
     * @private
     */
    private invalidateSizeFlag: boolean = false;

    /**
     * @private
     */
    private invalidateClientSizeFlag: boolean = false;

    /**
     * @private
     */
    private invalidateSizeQueue = new DepthQueue();

    /**
     * @private
     * 标记需要重新测量尺寸
     */
    public invalidateSize(target: DisplayLayoutAbstract): void {
        if (!this.invalidateSizeFlag) {
            this.invalidateSizeFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        if (this.targetLevel <= target.$nestLevel)
            this.invalidateClientSizeFlag = true;
        this.invalidateSizeQueue.insert(target);
    }

    /**
     * @private
     * 测量尺寸
     */
    private validateSize(): void {
        const queue = this.invalidateSizeQueue;
        let target = queue.pop();
        while (target) {
            if (target.parent) {
                target.validateSize();
            }
            target = queue.pop();
        }
        if (queue.isEmpty())
            this.invalidateSizeFlag = false;
    }


    /**
     * @private
     */
    private invalidateDisplayListFlag: boolean = false;

    /**
     * @private
     */
    private invalidateDisplayListQueue = new DepthQueue();

    /**
     * @private
     * 标记需要重新布局
     */
    public invalidateDisplayList(client: DisplayLayoutAbstract): void {
        if (!this.invalidateDisplayListFlag) {
            this.invalidateDisplayListFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        this.invalidateDisplayListQueue.insert(client);
    }

    /**
     * @private
     * 重新布局
     */
    private validateDisplayList(): void {
        const queue = this.invalidateDisplayListQueue;
        let client = queue.shift();
        while (client) {
            if (client.parent) {
                client.validateDisplayList();
            }
            client = queue.shift();
        }
        if (queue.isEmpty())
            this.invalidateDisplayListFlag = false;
    }

    /**
     * @private
     * 是否已经添加了事件监听
     */
    private listenersAttached: boolean = false;

    /**
     * @private
     * 添加事件监听
     */
    private attachListeners(): void {
        tickerShared.addUpdateEvent(this.doPhasedInstantiationCallBack,this);
        this.listenersAttached = true;
    }

    /**
     * @private
     * 执行属性应用
     */
    private doPhasedInstantiationCallBack(): void {
        tickerShared.removeUpdateEvent(this.doPhasedInstantiationCallBack,this);
        this.doPhasedInstantiation();
    }

    /**
     * @private
     */
    private doPhasedInstantiation(): void {
        if (this.invalidatePropertiesFlag) {
            this.validateProperties();
        }
        if (this.invalidateSizeFlag) {
            this.validateSize();
        }

        if (this.invalidateDisplayListFlag) {
            this.validateDisplayList();
        }

        if (this.invalidatePropertiesFlag ||
            this.invalidateSizeFlag ||
            this.invalidateDisplayListFlag) {
            this.attachListeners();
        }
        else {
            this.listenersAttached = false;
        }
    }

    /**
     * @private
     * 使大于等于指定组件层级的元素立即应用属性
     * @param target 要立即应用属性的组件
     */
    public validateClient(target: DisplayLayoutAbstract): void {

        let obj: DisplayLayoutAbstract|undefined;
        let done = false;
        const oldTargetLevel = this.targetLevel;

        if (this.targetLevel === Infinity)
            this.targetLevel = target.$nestLevel;

        const propertiesQueue = this.invalidatePropertiesQueue;
        const sizeQueue = this.invalidateSizeQueue;
        const displayListQueue = this.invalidateDisplayListQueue;
        while (!done) {
            done = true;

            obj = propertiesQueue.removeSmallestChild(target);
            while (obj) {
                if (obj.parent) {
                    obj.validateProperties();
                }
                obj = propertiesQueue.removeSmallestChild(target);
            }

            if (propertiesQueue.isEmpty()) {
                this.invalidatePropertiesFlag = false;
            }
            this.invalidateClientPropertiesFlag = false;

            obj = sizeQueue.removeLargestChild(target);
            while (obj) {
                if (obj.parent) {
                    obj.validateSize();
                }
                if (this.invalidateClientPropertiesFlag) {
                    obj = (propertiesQueue.removeSmallestChild(target));
                    if (obj) {
                        propertiesQueue.insert(obj);
                        done = false;
                        break;
                    }
                }

                obj = sizeQueue.removeLargestChild(target);
            }

            if (sizeQueue.isEmpty()) {
                this.invalidateSizeFlag = false;
            }
            this.invalidateClientPropertiesFlag = false;
            this.invalidateClientSizeFlag = false;

            obj = displayListQueue.removeSmallestChild(target);
            while (obj) {
                if (obj.parent) {
                    obj.validateDisplayList();
                }
                if (this.invalidateClientPropertiesFlag) {
                    obj = propertiesQueue.removeSmallestChild(target);
                    if (obj) {
                        propertiesQueue.insert(obj);
                        done = false;
                        break;
                    }
                }

                if (this.invalidateClientSizeFlag) {
                    obj = sizeQueue.removeLargestChild(target);
                    if (obj) {
                        sizeQueue.insert(obj);
                        done = false;
                        break;
                    }
                }

                obj = displayListQueue.removeSmallestChild(target);
            }


            if (displayListQueue.isEmpty()) {
                this.invalidateDisplayListFlag = false;
            }
        }

        if (oldTargetLevel === Infinity) {
            this.targetLevel = Infinity;
        }
    }


    public removeDepthQueueAll(){
        this.invalidatePropertiesQueue.removeAll();
        this.invalidateDisplayListQueue.removeAll();
        this.invalidateSizeQueue.removeAll();
        this.listenersAttached = false;

    }

}


const validatorShared = new UIValidator();

export default validatorShared;