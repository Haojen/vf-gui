
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestPixi{

    public constructor(){}
    
    public load(){
        new TestApplication(this,this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){

        // let c = new PIXI.Container();
        // c.width = 100;
        // c.height = 100;
        // app.stage.addChild(c);
        // console.log(c.width,c.height);

        let c = new vfui.Container();
        uiStage.addChild(c);
        let s = new vfui.Sprite();
        s.source = "assets/sprite.png";
        c.addChild(s);

        // let m = new vfui.Rect();
        // m.drawRoundedRect(0,0,300,300,0);
        // c.addChild(m);

        // s.container.mask = m.graphics;

        let d = new vfui.Interaction.DragEvent(s);

        // let r = new PIXI.Rectangle();
        // /** 本地位图 */
        // let sp = PIXI.Sprite.from("assets/sprite.png");
        // c.addChild(sp);
        // let sp2 = PIXI.Sprite.from("assets/sprite.png");
        // sp2.y = 620
        // c.addChild(sp2);

        // setTimeout(() => {
        //     console.log(c.getLocalBounds(r));
        //     console.log(r);
        // }, 2000);
        
    }
    
}

