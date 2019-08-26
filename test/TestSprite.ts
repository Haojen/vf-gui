
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestSprite{

    public constructor(){}
    
    public load(){
        new TestApplication(this,this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){
        /** 普通位图 */
        let sp = new vfui.Sprite();
        sp.source = "assets/sprite.png";
        sp.width = 100;
        sp.height = 100;
        uiStage.addChild(sp);

        // let count = 0;
        // vfui.TickerShared.addUpdateEvent((delta:number)=>{
        //     count += delta;
        //     if(count>50){
        //         count= 0;
        //         rect.rotation += 0.1;
        //     } 
        // },this)
    }
    
}

