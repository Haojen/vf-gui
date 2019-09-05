
import vfui from "../src/index";
import TestApplication from "./TestApplication"
import { Utils } from "../src/UI";

export default class TestRect {

    public constructor() { }

    public load() {
        new TestApplication(this, this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {
        /** 绘制矩形 */
        let rect = new vfui.Rect();
        rect.x = 200;
        rect.y = 200;
        // 方法绘制 - 高效
        //rect.drawRoundedRect(rx,ry,width,height,radius,fill); //绘制内部
        // 属性绘制 - 低效
        rect.rx = 0;//绘制的起始坐标
        rect.ry = 0;
        rect.width = 160;
        rect.height = 160;
        rect.radius = 0;
        rect.fill = 0x0000ff;
        uiStage.addChild(rect);

        let count = 0;
        vfui.TickerShared.addUpdateEvent((delta: number) => {
            count += delta;
            if (count > 50) {
                count = 0;
                rect.rotation += 0.1;
            }
        }, this)
    }

}

