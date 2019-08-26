
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestContainer{

    public constructor(){
        
    }
    
    public Load(){
        let test = new TestApplication(this,this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){
        let container = new vfui.Container(100,100);
        uiStage.addChild(container);
    }
}
