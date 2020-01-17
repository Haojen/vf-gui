import gui from "../src/vf-gui";

export default class TestRect {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }


    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        /** 绘制矩形 */
        const rect = new gui.Rect();
        rect.style.left = 100;
        rect.style.top = 100;
        rect.style.width = 100;
        rect.style.height = 100;
        rect.color = 0xffffff;
        rect.lineColor = 0xff00cc;
        rect.lineWidth = 1;
        rect.radius = 10; //圆角
        uiStage.addChild(rect);

        /** 绘制透明矩形 */
        const rect1 = new gui.Rect();
        rect1.style.left = 100;
        rect1.style.top = 250;
        rect1.style.width = 100;
        rect1.style.height = 100;
        //rect1.color = undefined;
        rect1.lineColor = 0xff00cc;
        rect1.lineWidth = 1;
        rect1.radius = 40; //圆角，最大值为 width/2
        uiStage.addChild(rect1);


        const click = new gui.Interaction.ClickEvent(rect,true);
        rect.on(gui.Interaction.TouchMouseEvent.onUp,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onDown,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onPress,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onMove,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onHover,this.onClick,this);
        rect.on(gui.Interaction.TouchMouseEvent.onClick,this.onClick,this);
    }

    private onClick(e: gui.Interaction.InteractionEvent){
        console.log(e.type);
    }

}

