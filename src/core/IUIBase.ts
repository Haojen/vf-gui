declare type TAny = any;

interface Window{
    readonly clipboardData: DataTransfer | null;
    gui: any;
    
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

interface TUIBase{
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

interface ScrollBar{
    alignToContainer: () => void;
}

interface Color{
    r: number;
    g: number;
    b: number;
    a?: number;
}
