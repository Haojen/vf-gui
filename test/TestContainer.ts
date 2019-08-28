
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
        container.x = 100;
        container.y = 100;
        uiStage.addChild(container);
        let rect = new vfui.Rect();
        rect.drawRoundedRect(0,0,50,50,10);
        container.addChild(rect);
        
        /** 坐标别名 */
        let container2 = new vfui.Container();
        container2.top = 150;
        container2.left = 150 ;
        uiStage.addChild(container2);
        let rect2 = new vfui.Rect();
        rect2.drawRoundedRect(0,0,50,50,10,0x00ffff);
        container2.addChild(rect2);

       /** 锚点布局 */
       let container3 = new vfui.Container();
       container3.anchorTop = 200;
       container3.anchorLeft = 100 ;
       uiStage.addChild(container3);
       let rect3 = new vfui.Rect();
       rect3.drawRoundedRect(0,0,50,50,10,0x00ffff);
       container3.addChild(rect3);
       
       /** 百分比 */
       let container4 = new vfui.Container();
       container4.topPct = "20%";
       container4.leftPct = "5%" ;
       uiStage.addChild(container4);
       let rect4 = new vfui.Rect();
       rect4.drawRoundedRect(0,0,50,50,10,0x00ffff);
       container4.addChild(rect4);    
    }
}
