
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestContainer{

    public constructor(){
        
    }
    
    public load(){
        new TestApplication(this,this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){
        /** UI组件的 容器 */
        let container = new vfui.Container();
        container.x = 300;
        container.y = 300;
        let rect = new vfui.Rect();
        rect.drawRoundedRect(0,0,50,50,10);
        container.addChild(rect);
        uiStage.addChild(container);

        let container2 = new vfui.Container();
        container2.x = -25;
        container2.y = -25;
        let rect2 = new vfui.Rect();
        rect2.drawRoundedRect(0,0,100,100,10,0x00ffff);
        container2.addChild(rect2);
        container.addChildAt(container2,0);
    }
}
