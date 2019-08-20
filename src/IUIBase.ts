/** 严禁外部使用，声明 */
interface TAny{
    [propName: string]: any;
}

interface ArrayConstructor {
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    from<T>(arrayLike: ArrayLike<T>): T[];
}

interface String{
    startsWith(searchString: string,position?: number): boolean;
}

interface TUIBase{
    //[propName: string]: any;
    blur?: Function;
    focus?: Function;
}

interface TCheckBox{
    checkGroup: string;
    checked: boolean;
    value: string;
}

interface Color{
    r: number;
    g: number;
    b: number;
    a?: number;
}

