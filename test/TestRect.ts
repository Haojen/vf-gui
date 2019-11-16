import gui from "../src/vf-gui";

export default class TestRect {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }


    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        /** 绘制矩形 */
        let rect = new gui.Rect();
        rect.style.left = 100;
        rect.style.top = 100;
        rect.style.width = 100;
        rect.style.height = 100;

        rect.color = 0xffffff;
        rect.lineColor = 0xff00cc;
        rect.lineWidth = 1;
        rect.radius = 10; //圆角

        uiStage.addChild(rect);

        let click = new gui.Interaction.ClickEvent(rect,true);
        rect.on(gui.Interaction.TouchMouseEvent.onUp,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onDown,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onPress,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onMove,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onHover,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onClick,this.onClick,this);
    }

    private onClick(e:gui.Interaction.InteractionEvent){
        console.log(e.type);
    }

}

