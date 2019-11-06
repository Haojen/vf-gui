import gui from "../src/vf-gui";

export default class TestScrollingContainer {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        /** 滚动容器 水平拖动 */
        let scX = this.addSc(uiStage, 50, 40, "水平拖动");
        scX.scrollX = true;
        scX.dragScrolling = true;//是否启用拖动滚动

        /** 滚动容器 垂直拖动 */
        let scY = this.addSc(uiStage, 50, 260, "垂直拖动");
        scY.scrollY = true;

        /** 滚动容器 垂直水平拖动 */
        let scXY = this.addSc(uiStage, 50, 480, "任意拖动");
        scXY.scrollX = true;
        scXY.scrollY = true;
    }

    private addSc(uiStage: gui.Stage, x: number, y: number, label: string) {

        
        let sc = new gui.ScrollingContainer();
        sc.style.left = x;
        sc.style.top = y;
        sc.style.width = 300;
        sc.style.height = 200;
        sc.expandMask = 2;
        sc.softness = 0.2;
        uiStage.addChild(sc);

        let title = new gui.Label(label);
        title.style.color = 0xffcc00;
        sc.addChild(title);

        for(let i=0;i<5;i++){
            let sp = new gui.Image();
            sp.style.top = i * 620;
            sp.src = "assets/sprite.png";
            sc.addChild(sp);
        }
        return sc;
    }
}

