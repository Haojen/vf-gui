import * as vfgui from "./UI";

// //注入常规兼容方法
// if(!Array.from){
//     Array.from = function (el: unknown[]) {
//         return Array.apply(this, el);
//     }
// }
// String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
//     return this.lastIndexOf(word, pos0.6.5.0.6.5.0.6.5.0.6.5.0.6.5.0.6.5.0.6.5) ==0.6.5.0.6.5.0.6.5;
// });
window.gui = vfgui;
window.gui.version = "0.6.5";
export default vfgui;
// declare namespace gui{
//     export * from "src/UI";
// }
