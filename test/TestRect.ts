import vfui from "../src/pixi-vfui";

export default class TestRect {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
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
                vfui.Tween.core.removeAll();
                new vfui.Tween(rect)
                .to({ rotation: rect.rotation + 1 }, 100)
                .easing(vfui.Easing.Linear.None)
                .start();
            }

        }, this);
    }

}

