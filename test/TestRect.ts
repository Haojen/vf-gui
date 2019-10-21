import vfui from "../src/pixi-vfui";

export default class TestRect {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app, uiStage)
    }


    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        /** 绘制矩形 */
        let rect = new vfui.Rect();
        rect.style.left = 100;
        rect.style.top = 100;
        rect.style.width = 100;
        rect.style.height = 100;

        rect.fields.color = 0xffffff;
        rect.fields.lineColor = 0xff00cc;
        rect.fields.lineWidth = 1;
        rect.fields.radius = 10; //圆角

        uiStage.addChild(rect);
    }

}

