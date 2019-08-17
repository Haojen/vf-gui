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

/** 严禁外部使用，声明 */
interface TAny{
    [propName: string]: any;
}
