import vfui from "../src/pixi-vfui";

export default class TestImage {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        //灰色
        let img1 = new vfui.Image();
        img1.style.left =  100;
        img1.style.top = 100;
        img1.style.width = 380;
        img1.style.height = 160;
        img1.src = "assets/mask/bg2.png";
        uiStage.addChild(img1);

        //彩色
        let img2 = new vfui.Image();
        img2.style.left =  100;
        img2.style.top = 100;
        img2.style.width = 380;
        img2.style.height = 160;
        img2.style.maskImage = "assets/mask/clear1.png";
        img2.style.maskSize = [100,100];
        img2.style.maskPosition = [-70,-70];
        img2.src = "assets/mask/bg.jpg";
        uiStage.addChild(img2);

        /** 样式宽高为0时，适配原始图片宽高 */
        let img3 = new vfui.Image();
        img3.x = 100;
        img3.y = 350;
        img3.width = 0;
        img3.height = 0;
        img3.src = "assets/mask/bg.jpg";
        img3.tint = 0xffcc00;//填充颜色
        //img3.visible = false;
        uiStage.addChild(img3);

        let count = 0;
        vfui.TickerShared.addUpdateEvent(() => {

            if(count == 700){
                count = 0;
            }
            if (img2.style.maskSize && img2.style.maskSize[0]<1200) {
                img2.style.maskSize = [count,count];
            }
            count++;
        }, this);
    }
}
