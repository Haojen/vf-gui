
/** 日志输出 */
export function log(message?: string|number|object, ... optionalParams: string[]|number[]|object[]){
    console.log(message,... optionalParams);
}

/**
 * helper function to convert string hex to int or default
 * 
 * 16进制转int，颜色转换
 * @param str 要转换的值，如#FFFFFF,0xFFFFFF
 * @param def 转换失败的返回值
 */
export function hexToInt(str: string, def: number) {
    if (typeof str === 'number')
        return str;

    const result = parseInt(str.replace('#', '0x'));

    if (isNaN(result)) return def;
    return result;
}

//helper function to convert hex to rgba
/**
 * 
 * @param hex 16进制字符窜 如 #FFFFFF ，不能省略三位写法
 * @param alpha 透明度
 * @returns "rgba(255,255,255,1)" || false
 */
export function hexToRgba(hex: string, alpha: number) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + alpha + ")" : false;
}
/**
 * 转换为16位字符串，不够2位的补0，如 “01”
 * @param c 要转换的数字
 */
export function componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
/**
 * RGB转16进制
 * @param r 红 0-255
 * @param g 绿 0-255
 * @param b 蓝 0-255
 */
export function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * RGB转number
 * @param r 红 0-255
 * @param g 绿 0-255
 * @param b 蓝 0-255
 */
export function rgbToNumber (r: number, g: number, b: number) {
    return r * 65536 + g * 256 + b;
}
/**
 * 10进制转RGB
 * @param c 数
 */
export function numberToRgb (c: number) {
    return {
        r: Math.floor(c / (256 * 256)),
        g: Math.floor(c / 256) % 256,
        b: c % 256,
    };
}

/**
 * hex 转 RGB，
 * 
 * 如: #ffffff->255,255,255
 * 
 * 如: 0xffffff->255,255,255
 * @param hex 
 */
export function hexToRgb (hex?: string|number) {
    if (hex === undefined)
        hex = 0xffffff;

    if(typeof(hex) == "number"){
        return numberToRgb(hex);
    }

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {r:255,g:255,b:255};
}
/**
 * 根据amt计算当前的位置start-stop，两数差值
 * @param start 开始数值
 * @param stop  结束的数值
 * @param amt 0-1 用时 >1为1，小于0为0
 */
export function Lerp(start: number, stop: number, amt: number) {
    if (amt > 1) amt = 1;
    else if (amt < 0) amt = 0;
    return start + (stop - start) * amt;
}

/**
 * 四舍五入保留指定位数的小数
 * @param num 取舍的数
 * @param decimals 保留小数位
 */
export function Round(num: number, decimals: number) {
    const pow = Math.pow(10, decimals);
    return Math.round(num * pow) / pow;
}

/**
 * @parivate
 */
export let _token = 1;
/** 获取全局唯一数 */
export function token(){
    return (++_token).toString();
}