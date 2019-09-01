import vfui from "../src/index";
import TestApplication from "./TestApplication"
import { Utils } from "../src/UI";

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
        r.y = 150;
        r.x = 70;
        r.drawRoundedRect(-50,-50,100,100,5,0xffcc00);

        uiStage.addChild(r);
        let rc = new vfui.Interaction.ClickEvent(r);
        rc.onClick = e=>{
            console.log("click1");
            const tween1 = new vfui.tween.Tween(r)
            .to({ x: 200  }, 2000)
            .repeat(Infinity)
            .easing(vfui.tween.Easing.Elastic.InOut)
            .yoyo(true)
            .start();

          const tween2 = new vfui.tween.Tween(r)
            .to({ angle: 90 }, 2000)
            .repeat(Infinity)
            .easing(vfui.tween.Easing.Quadratic.InOut)
            .yoyo(true)
            .start();
        }

        /** 目标缓动 */
        let r2 = new vfui.Rect();
        r2.y = 280;
        r2.x = 70;
        r2.drawRoundedRect(-50,-50,100,100,5,0xffcc00);
        uiStage.addChild(r2);
        let rc2 = new vfui.Interaction.ClickEvent(r2);
        rc2.onClick = e=>{
            console.log("click2");
            new vfui.tween.Tween({color:"#"+r2.fill.toString(16),x:70})
            .to({color:"#00ccff",x:200}, 2000)
            .easing(vfui.tween.Easing.Elastic.InOut)
            .on(vfui.tween.TweenEvent.update,(obj:any)=>{
                console.log(obj.x,obj.color)
                r2.fill = Utils.rgbStrToNumber(obj.color) ;
                r2.x = obj.x;
            })
            .start();
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