import vfui from "../src/pixi-vfui";

export default class TestImage {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let img = new vfui.Image();
        img.source = "assets/pc.png";
        //"no-repeat" | "repeat" | "nineSlice" 默认 "no-repeat";
        img.width = 100;
        img.height = 100;
        img.y = 0;
        uiStage.addChild(img);

        let img2 = new vfui.Image();
        img2.source = "assets/pc.png";
        //"no-repeat" | "repeat" | "nineSlice" 默认 "no-repeat";
        img2.backgroundRepeat = "repeat";
        img2.width = 1000;
        img2.height = 200;
        img2.y = 120;
        img2.leftWidth = 100;
        img2.topHeight = 100;
        uiStage.addChild(img2);

        let img3 = new vfui.Image();
        img3.source = "assets/skin/ToggleSwitch/on.png";
        //"no-repeat" | "repeat" | "nineSlice" 默认 "no-repeat";
        img3.backgroundRepeat = "nineSlice";
        img3.width = 1000;
        img3.height = 27;
        img3.y = 400;
        img3.leftWidth =  img3.rightWidth = 10;
        uiStage.addChild(img3);

        let count = 0;
        vfui.TickerShared.addUpdateEvent(() => {
            count += 0.005;
            //位置
            img2.leftWidth += 1;
            img2.topHeight += 1;
        }, this);
    }
}
