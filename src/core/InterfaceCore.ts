declare type TAny = any;

interface Window{
    readonly clipboardData: DataTransfer | null;
    gui: any;
    module: any;
    require:any;
    exports:any;
}

declare interface ObjectConstructor {
    assign(...objects: Record<string, any>[]): Record<string, any>;
}

interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    from<T>(arrayLike: ArrayLike<T>): T[];
}

interface String{
    startsWith(searchString: string,position?: number): boolean;
}

interface TInputBase{
    //[propName: string]: any;
    blur?: Function;
    focus?: Function;
}

interface InputStyle{
    [propName: string]: any;
    fontFamily: string;
    fontSize?: string;
    fontWeight?: string;
    fontVariant: "normal"|"small-caps"|"inherit";
    color: '#000000';
    padding: string;
    multiline: boolean;
    fontStyle: "normal"|"italic"|"oblique"|"inherit";
    letterSpacing: number;
    textIndent: string;

    position: 'absolute';
    background: 'none';
    border: 'none';
    outline: 'none';
    transformOrigin: '0 0';
    lineHeight: '1';
}


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