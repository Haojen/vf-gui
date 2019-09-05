/** 严禁外部使用，声明 */

declare type TAny = any

interface Window{
    readonly clipboardData: DataTransfer | null;
    vfui: any;
    
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
interface InputStyle extends CSSStyleDeclaration{
    multiline?:boolean;
}
interface CheckBox{
    uuid: string;
    checkGroup: string|undefined;
    checked: boolean;
    value: string|undefined;
}

interface ScrollBar{
    alignToContainer: () => void;
}

interface Color{
    r: number;
    g: number;
    b: number;
    a?: number;
}

