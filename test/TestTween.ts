import vfui from "../src/index";
import TestApplication from "./TestApplication"

/// <reference
export default class TestTween{

    public constructor(){}
    

    public load(){
        new TestApplication(this,this.onLoad)
    }


    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){
        
        let t = new vfui.Text("点击方块，进行缓动演示");
        t.style.fill = "#FFFFFF";
        t.y = 50;
        uiStage.addChild(t);
        /** 常规缓动 */
        let r = new vfui.Rect();
        r.y = 100;
        r.drawRoundedRect(0,0,100,100,5,0xffffff);
        uiStage.addChild(r);
        let rc = new vfui.Interaction.ClickEvent(r);
        rc.onClick = e=>{
            console.log("click1");
            vfui.tween.Tween.to(r,{width:500},{duration:2000})
            .easing(vfui.tween.Easing.Cubic.In)
            .on(vfui.tween.utils.EVENT_UPDATE,(width:number)=>{console.log(width)})
            .on(vfui.tween.utils.EVENT_COMPLETE,()=>{r.width = 100;})
            .start();
        }

        /** 目标缓动 */
        let r2 = new vfui.Rect();
        r2.y = 220;
        r2.drawRoundedRect(0,0,100,100,5,0xffffff);
        uiStage.addChild(r2);
        let rc2 = new vfui.Interaction.ClickEvent(r2);
        rc2.onClick = e=>{
            console.log("click2");
            // vfui.tween.Tween.to(r2,{x:200,tint:'#FFFFFF'},{duration:2000})
            // .easing(vfui.tween.Easing.Cubic.In)
            // .on(vfui.tween.utils.EVENT_UPDATE,(x:number,tint:number)=>{console.log(tint)})
            // .on(vfui.tween.utils.EVENT_COMPLETE,()=>{r2.width = 100;})
            // .start();

            // new vfui.tween.Tween(r2, {width:100})
            // .to({width:500}, 2000)
            // .easing(vfui.tween.Easing.Elastic.InOut)
            // .start();

            // new vfui.tween.Tween(r2, {x:0,backgroundColor:'#FFF'})
            // .to({x:200,backgroundColor:'#0cf'}, 2000)
            // .easing(vfui.tween.Easing.Elastic.InOut)
            // .start();
        }


        let r3 = new vfui.Rect();
        r3.y = 340;
        r3.drawRoundedRect(0,0,100,100,5,0xffffff);
        uiStage.addChild(r3);

        //vfui.tween.Tween.to(r3,1000,{ x: 100, y: 100 }).start();

        // new vfui.tween.Tween(r3,null)
        // .to({ x: 100, y: 100 }, 10000)
        // .on('update', ({ x, y }:{x:number,y:number}) => {
        //     //console.log(`The values is x: ${x} and y: ${y}`);
        //   })
        // .start();
        //console.log(vfui.TWEEN);

    }
}  