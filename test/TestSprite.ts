import vfui from "../src/pixi-vfui";

export default class TestSprite {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {
        /** 本地位图 */
        let sp = new vfui.Sprite();
        sp.source = "assets/sprite.png"; //本地文件路径
        sp.width = 0;//宽高为0的情况下
        sp.height = 0;
        sp.maxWidth = 100;
        sp.maxHeight = 100;
        uiStage.addChild(sp);
        //网络位图
        let sp1 = new vfui.Sprite();
        sp1.source = "https://file.vipkid-inc.com/api/file/view?fileId=859ebe85e12e42e19939f71793c3a2e3&systemCode=PORTAL&privateKey=380FB669BFF76642E947A90950B88C58&fileName=%E5%B0%8F%E5%8D%9A%E9%A5%AE%E6%96%99-%E9%A2%84%E8%A7%88%E5%9B%BE.png"; //HTTP
        sp1.width = 100;
        sp1.height = 100;
        sp1.y = 110;
        uiStage.addChild(sp1);
        //标签位图(需要可跨域)
        let img = new Image(100, 100);
        img.src = "assets/sprite.png";
        img.onload = () => {
            let sp2 = new vfui.Sprite();
            sp2.source = img; //HTTP
            sp2.width = 100;
            sp2.height = 100;
            sp2.y = 220;
            uiStage.addChild(sp2);
        }

    }

}

