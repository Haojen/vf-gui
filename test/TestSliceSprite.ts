import vfui from "./index";

export default class TestSliceSprite {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let borderWidth = 100;
        /** 9切图，设置边距100，可观察左边纹理 */
        let sp = new vfui.SliceSprite();
        //sp.horizontalSlice = true;
        //sp.verticalSlice = false;
        sp.source = "assets/sprite_book.jpeg"; //本地文件路径
        sp.x = 0;
        sp.y = 0;
        sp.width = 631;
        sp.height = 343;
        sp.borderWidth = borderWidth;
        uiStage.addChild(sp);

        //双向拉伸
        let g = new vfui.Rect();
        g.x = sp.x + borderWidth;
        g.y = sp.x + borderWidth;
        console.log(g.x, g.y);
        g.drawRoundedRect(0, 0, sp.width - borderWidth * 2, sp.height - borderWidth * 2, 0, 0x0000ff);
        g.alpha = 0.6;
        uiStage.addChild(g);

        //点击遮罩区域，进行图像宽高调整
        let s = 1.1;
        let click = new vfui.Interaction.ClickEvent(g);
        click.onClick = () => {
            console.log("onClick");
            sp.width = sp.width * s;
            sp.height = sp.height * s;
            g.drawRoundedRect(0, 0, sp.width - borderWidth * 2, sp.height - borderWidth * 2, 0, 0x0000ff);
            s += 0.1;
        }
    }

}

