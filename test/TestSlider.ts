
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestSlider{

    public constructor(){}
    
    public load(){
        new TestApplication(this,this.onLoad)
    }
    // {
    //     track: new PIXI.UI.SliceSprite(solidBox, 7),
    //     handle: new PIXI.UI.SliceSprite(solidBox, 7),
    //     fill: new PIXI.UI.SliceSprite(solidBox, 7),
    //     value: 200,
    //     minValue: 0,
    //     maxValue: 100,
    //     decimals: 1,
    //     onValueChanging: function (val) {
    //         text.value = val + "";
    //     }
    // }
    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){
        /** 本地位图 */
        // let slider = new vfui.Slider();

        // //other settings
        // slider.horizontalAlign = "center";
        // slider.verticalAlign = "middle";
        // slider.handle.width = 30;
        // slider.handle.height = 30;
        // slider.handle.tint = 0xb7bcae;
        // slider.fill.tint = 0xb4f154;
        // slider.track.tint = 0xe4e7de;
        // slider.width = "90%";

        // slider.handle.addChild(text);
        // uiStage.addChild(slider);

    }
    
}

