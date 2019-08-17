
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

