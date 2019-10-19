import vfui from "../src/pixi-vfui";

export default class TestImage {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        
        let img1 = new vfui.Image();
        img1.style.left =  100;
        img1.style.top = 100;
        img1.style.width = 380;
        img1.style.height = 160;
        img1.fields.src = "assets/mask/bg2.png";
        uiStage.addChild(img1);

        /** 容器中填充内容与遮罩 */
        let container = new vfui.Container();
        container.name = "7";
        container.style.left =  100;
        container.style.top = 100;
        container.style.backgroundColor = 0xffffff;
        container.style.maskImage = "assets/mask/clear1.png";
        container.style.maskSize = [0,0];
        container.style.maskPosition = [-100,-100];
        uiStage.addChild(container);

        let img2 = new vfui.Image();
        img2.style.width = 380;
        img2.style.height = 160;
        img2.fields.src = "assets/mask/bg.jpg";
        container.addChild(img2);

        /** 样式宽高为0时，适配原始图片宽高 */
        let img3 = new vfui.Image();
        img3.style.left = 100;
        img3.style.top = 350;
        img3.style.width = 0;
        img3.style.height = 0;
        img3.fields.src = "assets/mask/bg.jpg";
        img3.fields.tint = 0xffcc00;//填充颜色
        uiStage.addChild(img3);

        let count = 0;
        vfui.TickerShared.addUpdateEvent(() => {

            if(count == 700){
                count = 0;
            }
            if (container.style.maskSize && container.style.maskSize[0]<1200) {
                container.style.maskSize = [count,count];
            }
            count++;
        }, this);
    }
}
