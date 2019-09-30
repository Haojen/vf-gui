/**
 * 工具类
 */
/// <reference types="pixi.js" />
/**
 * 组件获取资源 - 源路径,外部可以重写本方法
 */
export declare let _getSourcePath: Function;
/** 日志输出 */
export declare function log(message?: string | number | object, ...optionalParams: string[] | number[] | object[]): void;
export declare function setSourcePath(params: (path: TAny, cls?: TAny) => {}): void;
/**
 * 快速设置矩形
 * @param sourcr
 * @param x
 * @param y
 * @param w
 * @param h
 */
export declare function setRectangle(source: PIXI.Rectangle, x: number, y: number, w: number, h: number): void;
/** 获取当前运行时时间 */
export declare function now(): number;
/**
 * 深度拷贝对象
 * @param source 对象元
 */
export declare function deepCopy(source: TAny): any;
/**
 * helper function to convert string hex to int or default
 *
 * 16进制转int，颜色转换
 * @param str 要转换的值，如#FFFFFF,0xFFFFFF
 * @param def 转换失败的返回值
 */
export declare function hexToInt(str: string, def: number): number;
/**
 *
 * @param hex 16进制字符窜 如 #FFFFFF ，不能省略三位写法
 * @param alpha 透明度
 * @returns "rgba(255,255,255,1)" || false
 */
export declare function hexToRgba(hex: string, alpha: number): string | false;
/**
 * 转换为16位字符串，不够2位的补0，如 “01”
 * @param c 要转换的数字
 */
export declare function componentToHex(c: number): string;
/**
 * RGB转16进制
 * @param r 红 0-255
 * @param g 绿 0-255
 * @param b 蓝 0-255
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * RGB转number
 * @param r 红 0-255
 * @param g 绿 0-255
 * @param b 蓝 0-255
 */
export declare function rgbToNumber(r: number, g: number, b: number): number;
/**
 * rgb字符串形式转换
 * @param color rgb(255,255,255)
 */
export declare function rgbStrToNumber(color: string): number;
/**
 * 10进制转RGB
 * @param c 数
 */
export declare function numberToRgb(c: number): {
    r: number;
    g: number;
    b: number;
};
/**
 * hex 转 RGB，
 *
 * 如hex字符串: "#ffffff"->255,255,255
 *
 * 如16进制数字: 0xffffff->255,255,255
 * @param hex
 */
export declare function hexToRgb(hex?: string | number): {
    r: number;
    g: number;
    b: number;
};
/**
 * 根据amt计算当前的位置start-stop，两数差值
 * @param start 开始数值
 * @param stop  结束的数值
 * @param amt 0-1 用时 >1为1，小于0为0
 */
export declare function Lerp(start: number, stop: number, amt: number): number;
/**
 * 四舍五入保留指定位数的小数
 * @param num 取舍的数
 * @param decimals 保留小数位
 */
export declare function Round(num: number, decimals: number): number;
/** 获取全局唯一数 */
export declare function uid(): string;
/** 获取URL参数 */
export declare function getQueryVariable(variable: string): string | null | undefined;
