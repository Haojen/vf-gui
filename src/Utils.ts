
/** 日志输出 */
export function log(message?: string|number|object, ...optionalParams: string[]|number[]|object[]){
    if(optionalParams){
        if(optionalParams.length>5)
            throw "console.log params>5";
        if(optionalParams.length==1){
            console.log(message,optionalParams[0]);
        }else if(optionalParams.length==2){
            console.log(message,optionalParams[0],optionalParams[1]);
        }else if(optionalParams.length==3){
            console.log(message,optionalParams[0],optionalParams[1],optionalParams[2]);
        }else if(optionalParams.length==4){
            console.log(message,optionalParams[0],optionalParams[1],optionalParams[2],optionalParams[3]);
        }else if(optionalParams.length==5){
            console.log(message,optionalParams[0],optionalParams[1],optionalParams[2],optionalParams[3],optionalParams[4]);
        }
    }else{
        console.log(message);
    }
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

