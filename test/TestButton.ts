import gui from "../src/vf-gui";

export default class TestButton {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {
        /** UI组件 按钮 */
        let button1 = new gui.Button;
        button1.style.left = 100;
        button1.style.top = 100;
        button1.style.width = 100;
        button1.style.height = 50;
        button1.text = "点我试试";
        button1.up = "assets/skin/Button/button_up.png";
        button1.down = "assets/skin/Button/button_down.png";
        button1.move = "assets/skin/Button/button_move.png";
        //button1.clickSound = "aaaa"; 绑定音效，只可以vf使用，绑定json资源id

        button1.on(gui.Interaction.TouchMouseEvent.onClick, this.onClick, this);
        button1.on(gui.Interaction.TouchMouseEvent.onPress, this.onPress, this);
        button1.on(gui.Interaction.TouchMouseEvent.onHover, this.onHover, this);

        uiStage.addChild(button1);

        /** 设置文字颜色 */
        let button2 = new gui.Button;
        button2.style.left = 100;
        button2.style.top = 200;
        button2.style.width = 100;
        button2.style.height = 50;
        button2.text = "按钮颜色";
        button2.label.style.color = [0x00ffff,0xff00cc];
        button2.up = "assets/skin/Button/button_up.png";
        button2.down = "assets/skin/Button/button_down.png";
        button2.move = "assets/skin/Button/button_move.png";
        uiStage.addChild(button2);

        /** 设置背景图样式 */
        let button3 = new gui.Button;
        button3.style.left = 100;
        button3.style.top = 300;
        button3.style.width = 100;
        button3.style.height = 50;
        button3.up = "assets/skin/Button/button_up.png";
        button3.down = "assets/skin/Button/button_down.png";
        button3.move = "assets/skin/Button/button_move.png";
        button3.img.fillMode = "repeat";
        button3.img.scale9Grid = [1,1,0,0];
        uiStage.addChild(button3);

    }


    private onClick(e: gui.Interaction.InteractionEvent, button: gui.Button) {
        button.text = "点击" + (e as any).type;
    }

    private onPress(e: gui.Interaction.InteractionEvent, button: gui.Button, isPress: any) {
        if (isPress)
            button.text = "按下" + (e as any).type;
        else
            button.text = "弹起" + (e as any).type;

        console.log("onPress", isPress);
    }
    private onHover(e: gui.Interaction.InteractionEvent, button: gui.Button, over: boolean) {
        console.log("onHover", over);
        if (over)
            button.text = "移入" + (e as any).type;
        else
            button.text = "移出" + (e as any).type;
    }
}
