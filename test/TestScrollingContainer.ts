import vfui from "../src/pixi-vfui";

export default class TestScrollingContainer {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        /** 滚动容器 水平拖动 */
        let scX = this.addSc(uiStage, 50, 40, "水平拖动");
        scX.props.scrollX = true;

        /** 滚动容器 垂直拖动 */
        let scY = this.addSc(uiStage, 50, 260, "垂直拖动");
        scY.props.scrollY = true;

        /** 滚动容器 垂直水平拖动 */
        let scXY = this.addSc(uiStage, 50, 480, "任意拖动");
        scXY.props.scrollX = true;
        scXY.props.scrollY = true;
    }

    private addSc(uiStage: vfui.Stage, x: number, y: number, label: string) {

        
        let sc = new vfui.ScrollingContainer();
        sc.style.left = x;
        sc.style.top = y;
        sc.style.width = 300;
        sc.style.height = 200;
        sc.props.expandMask = 2;
        sc.props.softness = 0.2;
        uiStage.addChild(sc);

        let title = new vfui.Label(label);
        title.props.color = 0xffcc00;
        sc.addChild(title);

        for(let i=0;i<5;i++){
            let sp = new vfui.Image();
            sp.style.top = i * 620;
            sp.props.src = "assets/sprite.png";
            sc.addChild(sp);
        }
        return sc;
    }
}

