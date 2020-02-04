import gui from "../src/vf-gui";

export default class TestCircle {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }


    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        /** 绘制矩形 */
        const circle = new gui.Circle();
        circle.style.left = 100;
        circle.style.top = 120;
        circle.color = 0xffffff;
        circle.lineColor = 0xff00cc;
        circle.lineWidth = 1;
        circle.radius = 100; //半径
        uiStage.addChild(circle);

        /** 绘制透明矩形 */
        const circle1 = new gui.Circle();
        circle1.style.left = 100;
        circle1.style.top = 350;
        //circle1.color = undefined;
        circle1.lineColor = 0xff00cc;
        circle1.lineWidth = 1;
        circle1.radius = 50; 
        uiStage.addChild(circle1);


        const click = new gui.Interaction.ClickEvent(circle,true);
        circle.on(gui.Interaction.TouchMouseEvent.onUp,this.onClick,this);
        circle.on(gui.Interaction.TouchMouseEvent.onDown,this.onClick,this);
        circle.on(gui.Interaction.TouchMouseEvent.onPress,this.onClick,this);
        circle.on(gui.Interaction.TouchMouseEvent.onMove,this.onClick,this);
        circle.on(gui.Interaction.TouchMouseEvent.onHover,this.onClick,this);
        circle.on(gui.Interaction.TouchMouseEvent.onClick,this.onClick,this);
    }

    private onClick(e: gui.Interaction.InteractionEvent){
        console.log(e.type);
    }

}

