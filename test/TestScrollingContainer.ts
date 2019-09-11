import vfui from "./index";

export default class TestScrollingContainer {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let t = new vfui.Text("滚动容器 1水平，2垂直，3任意", new vfui.TextStyle({ fill: 0x00ffcc }));
        t.x = 50;
        uiStage.addChild(t);

        /** 滚动容器 水平拖动 */
        let sc1 = this.addSc(uiStage, 50, 40, "水平拖动");
        sc1.scrollX = true;

        /** 滚动容器 垂直拖动 */
        let sc2 = this.addSc(uiStage, 50, 260, "垂直拖动");
        sc2.scrollY = true;

        /** 滚动容器 垂直水平拖动 */
        let sc3 = this.addSc(uiStage, 50, 480, "任意拖动");
        sc3.scrollX = true;
        sc3.scrollY = true;
    }

    private addSc(uiStage: vfui.Stage, x: number, y: number, label: string) {
        let sc = new vfui.ScrollingContainer();
        sc.x = x;
        sc.y = y;
        //sc.scrollX = false;
        //sc.scrollY = false;
        //sc.dragScrolling = false;
        sc.expandMask = 2;
        sc.softness = 0.2;
        sc.width = 300;
        sc.height = 200;


        for (let i = 0; i < 10; ++i) {
            this.addSp(sc, i);
        }


        let t = new vfui.Text(label, new vfui.TextStyle({ fill: 0x00ffcc }));
        t.y = 0;
        sc.addChild(t);

        let rect = new vfui.Rect();
        rect.drawRoundedRect(-5, -5, 310, 210, 1);
        rect.x = x;
        rect.y = y;
        uiStage.addChild(rect);
        uiStage.addChild(sc);
        return sc;
    }

    private addSp(sc: vfui.ScrollingContainer, i: number) {

        let sp = new vfui.Sprite();
        sp.source = "assets/sprite.png";
        sp.y = i * 620;
        sc.addChild(sp);

    }

}

