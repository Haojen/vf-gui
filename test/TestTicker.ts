
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestTicker{

    public constructor(){
        
    }
    
    public load(){
        new TestApplication(this,this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){
        /** 本地位图 */
        let sp = new vfui.Sprite();
        sp.source = "assets/sprite.png"; //本地文件路径
        sp.x = 300;
        sp.y = 300;
        sp.width = 100;
        sp.height = 100;
        sp.anchorX = 0.5;
        sp.anchorY = 0.5;
        uiStage.addChild(sp);

        this.update = (delta)=>{
            console.log(delta);//两帧间隔毫秒
            sp.rotation +=0.01;
        }
        if(this.update){
            vfui.TickerShared.addUpdateEvent(this.update,this);
        }
        
        //两秒后卸载当前跳
        // setTimeout(() => {
        //     if(this.update)
        //         vfui.TickerShared.removeUpdateEvent(this.update,this);
        // }, 2000);

        //两秒后关闭整个心跳，包含缓动组件等所有
        // setTimeout(() => {
        //     if(this.update)
        //     vfui.TickerShared.disabled = true;
        // }, 2000);
    }

    private update:((n:number)=>void)|undefined;
}
