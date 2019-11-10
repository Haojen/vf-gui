/**
 * 工具类
 */

/**
 * 组件获取资源 - 源路径,外部可以重写本方法
 */
export let _getSourcePath: Function;

/** 日志输出 */
export function log(message?: string | number | object, ...optionalParams: string[] | number[] | object[]) {
    console.log(message, ...optionalParams);
}

export function setSourcePath(params: (path: TAny,cls?: TAny) => {}) {
    _getSourcePath = params;
}

export function getTexture(src: TAny){
    if(_getSourcePath){
        src = _getSourcePath(src);
    }
    if(src instanceof PIXI.Texture){
        return src;
    }
    return PIXI.Texture.from(src);
}

export function getSound(src: TAny){
    if(_getSourcePath){
        src = _getSourcePath(src);
    }
    if(src instanceof PIXI.sound.Sound){
        return src;
    }
    return PIXI.sound.Sound.from(src);
}

/**
 * 快速设置矩形
 * @param sourcr 
 * @param x 
 * @param y 
 * @param w 
 * @param h 
 */
export function setRectangle(source: PIXI.Rectangle, x: number, y: number, w: number, h: number) {
    source.x = x;
    source.y = y;
    source.width = w;
    source.height = h;
}
/** 获取当前运行时时间 */
export function now() {
    if (performance !== undefined && performance.now !== undefined) {
        // This must be bound, because directly assigning this function
        // leads to an invocation exception in Chrome.
        return performance.now.bind(performance)();
        // Use Date.now if it is available.
    } else {
        const offset = performance && performance.timing && performance.timing.navigationStart ? performance.timing.navigationStart : Date.now()
        return Date.now() - offset;
    }
}

/**
 * 深度拷贝对象
 * @param source 对象元
 */
export function deepCopy(source: TAny) {
    if (source === undefined || typeof source !== 'object') {
        return source;
    } else if (Array.isArray(source)) {
        return [].concat(source as []);
    } else if (typeof source === 'object') {
        const target: { [key: string]: TAny } = {};
        for (const prop in source) {
            target[prop] = deepCopy(source[prop]);
        }
        return target;
    }
    return source;
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
    if(hex.length ==4){
        return "00" + hex;
    }
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
export function rgbToNumber(r: number, g: number, b: number) {
    return r * 65536 + g * 256 + b;
}

/**
 * rgb字符串形式转换
 * @param color rgb(255,255,255)
 */
export function rgbStrToNumber(color: string) {
    const colors = color.substring(4, color.length - 1).split(",");
    return rgbToNumber(parseInt(colors[0]), parseInt(colors[1]), parseInt(colors[2]));
}
/**
 * 10进制转RGB
 * @param c 数
 */
export function numberToRgb(c: number) {
    return {
        r: Math.floor(c / (256 * 256)),
        g: Math.floor(c / 256) % 256,
        b: c % 256,
    };
}

/**
 * hex 转 RGB，
 * 
 * 如hex字符串: "#ffffff"->255,255,255
 * 
 * 如16进制数字: 0xffffff->255,255,255
 * @param hex 
 */
export function hexToRgb(hex?: string | number) {
    if (hex === undefined)
        hex = 0xffffff;

    if (typeof (hex) == "number") {
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
    } : { r: 255, g: 255, b: 255 };
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


/** 获取全局唯一数 */
export function uid() {
    return PIXI.utils.uid();
}

/** 获取URL参数 */
export function getQueryVariable(variable: string) {
    const params = new URLSearchParams(location.search);
    if (params.has(variable)) {
        return params.get(variable);
    }
    return undefined;
}

export function  isDeltaIdentity(m: PIXI.Matrix): boolean {
    return (m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1);
}



export function formatRelative(value: number | string | undefined, total: number): number {
    if (value == undefined) {
        return NaN;
    }
    if (typeof value === "number") {
        return value;
    }
    const str = value;
    const index = str.indexOf("%");
    if (index == -1) {
        return +str;
    }
    const percent = +str.substring(0, index);
    return percent * 0.01 * total;
}
