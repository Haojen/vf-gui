import gui from "../src/vf-gui";

export default class TestFollowLine {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        let followLineTop = new gui.FollowLine();
        followLineTop.x = 100;
        followLineTop.y = 50;
        followLineTop.width = 600;
        followLineTop.height = 300;
        followLineTop.style.backgroundColor = 0xffffff;
        followLineTop.role = 1;
        uiStage.addChild(followLineTop);

        let followLineDown = new gui.FollowLine();
        followLineDown.x = 100;
        followLineDown.y = 400;
        followLineDown.width = 600;
        followLineDown.height = 300;
        followLineDown.style.backgroundColor = 0xffffff;
        followLineDown.role = 2;
        uiStage.addChild(followLineDown);

        followLineTop.on(gui.Interaction.ComponentEvent.COMPLETE,(display:gui.FollowLine,data:string)=>{
            followLineDown.setData(data);
        });

        followLineDown.on(gui.Interaction.ComponentEvent.COMPLETE,(display:gui.FollowLine,data:string)=>{
            followLineTop.setData(data);
        });

        let eraseBtn = new gui.Button();
        eraseBtn.x = eraseBtn.y = 15;
        eraseBtn.text = '擦除 false';
        uiStage.addChild(eraseBtn);
        let isErasing = true;
        eraseBtn.on(gui.Interaction.TouchMouseEvent.onClick,()=>{
            followLineTop.isErasing = isErasing;
            followLineDown.isErasing = isErasing;
            eraseBtn.text = '擦除 ' + isErasing;
            isErasing = !isErasing;

        });

    }
}
