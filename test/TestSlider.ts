
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestSlider{

    public constructor(){}
    
    public load(){
        new TestApplication(this,this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){


        let changeText = new vfui.Text("",new vfui.TextStyle({fill:"#00ffcc"}));
        changeText.x = 50;
        changeText.y = 100;
        uiStage.addChild(changeText);

        let changingText = new vfui.Text("",new vfui.TextStyle({fill:"#00ffcc"}));
        changingText.x = 50;
        changingText.y = 150;
        uiStage.addChild(changingText);

        /** 水平滑动条 vertical = false */
        let slider = new vfui.Slider();
        slider.sourceThumb = "assets/skin/Slider/thumb.png";
        slider.sourceTrack = "assets/skin/Slider/track.png";
        slider.sourceTracklight= "assets/skin/Slider/tracklight.png";
        slider.width = 300;
        slider.height = 10;
        slider.x = 50;
        slider.y = 50;
        slider.vertical = false; 
        slider.value = 50;
        slider.on(vfui.Slider.ChangeEvent,(curValue:number)=>{
            changeText.label = "change:" + curValue;
        });
        slider.on(vfui.Slider.ChangingEvent,(curValue:number)=>{
            changingText.label = "changing:" + curValue;
        })
        slider.value = 50; //初始化时，如果希望改变value触发事件，请放置在添加事件后
        uiStage.addChild(slider);


        /** 垂直滑动条 vertical = false */
        let slider2 = new vfui.Slider();
        slider2.sourceThumb = "assets/skin/Slider/thumb.png";
        slider2.sourceTrack = "assets/skin/Slider/track.png";
        slider2.sourceTracklight= "assets/skin/Slider/tracklight.png";
        slider2.width = 10;
        slider2.height = 300;
        slider2.x = 20;
        slider2.y = 50;
        slider2.vertical = true;
        slider2.on(vfui.Slider.ChangeEvent,(curValue:number)=>{
            changeText.label = "change:" + curValue;
        });
        slider2.on(vfui.Slider.ChangingEvent,(curValue:number)=>{
            changingText.label = "changing:" + curValue;
        });
        slider2.value = 50;
        uiStage.addChild(slider2);

        //vfui.tween.Tween.to(slider2,{value:100},4000).delay(1000).stop();

    }
    
}

