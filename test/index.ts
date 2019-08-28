import vfui from "../src/index";



let type = "TestContainer";
let param = vfui.Utils.getQueryVariable("type");
if(param){
    type = param;
}
import(`./${type}`).then(value=>{
    new value.default().load();
});
