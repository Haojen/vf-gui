import * as pixivfui from "./UI";

// //注入常规兼容方法
// if(!Array.from){
//     Array.from = function (el: unknown[]) {
//         return Array.apply(this, el);
//     }
// }
// String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
//     return this.lastIndexOf(word, pos || 0) === 0;
// });

window.vfui = pixivfui;
export default pixivfui;
// declare namespace vfui{
//     export * from "src/UI";
// }
