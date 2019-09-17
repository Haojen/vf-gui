/**
 * 卡帧后的平滑处理帧率
 */
export declare const FRAME_MS: number;
/**
 * 平滑处理允许的触发时间
 */
export declare const TOO_LONG_FRAME_MS = 250;
/**
 * 链式补间动画的key前缀
 */
export declare const CHAINED_TWEENS = "_chainedTweens";
export declare const STRING_PROP = "STRING_PROP";
export declare const NUM_REGEX: RegExp;
export declare function decomposeString(fromValue: string | any): any;
export declare function decompose(prop: any, obj: any, from: any, to: any): any;
export declare const RGB = "rgb(";
export declare const RGBA = "rgba(";
export declare function isRGBColor(v: any, i: number, r?: string): boolean;
export declare function recompose(prop: any, obj: any, from: any, to: any, t: any, originalT: any, stringBuffer?: any): any;
export declare const SET_NESTED: (nested: any) => any;
