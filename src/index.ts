import { log } from "./Utils";

//注入常规兼容方法
if(!Array.from){
    Array.from = function (el: unknown[]) {
        return Array.apply(this, el);
    }
}
String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
    return this.lastIndexOf(word, pos || 0) === 0;
});

log(1,2,3,4,5,6,7);
