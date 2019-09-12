import vfui from "../src/index";
import TestApplication from "./TestApplication";

export default vfui;

class Index{
    public static  init(){
        let type = "TestContainer";
        let param = vfui.Utils.getQueryVariable("type");
        if(param){
            type = param;
        }
        new TestApplication(this,(app: PIXI.Application, uiStage: vfui.Stage) => {
            import(`./${type}`).then(value=>{
                new value.default(app,uiStage);
            }); 
        });
    }
}


Index.init();



