import gui from "../src/vf-gui";

export default class TestFollowLine {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        let messageList:string[] = [];

        let followLineTop = new gui.FollowLine();
        followLineTop.x = 100;
        followLineTop.y = 50;
        followLineTop.width = 600;
        followLineTop.height = 300;
        followLineTop.style.backgroundColor = 0xffffff;
        followLineTop.role = gui.Enum.FollowLineEnum.Role.teacher;
        uiStage.addChild(followLineTop);

        let followLineDown = new gui.FollowLine();
        followLineDown.x = 100;
        followLineDown.y = 400;
        followLineDown.width = 600;
        followLineDown.height = 300;
        followLineDown.style.backgroundColor = 0xffffff;
        followLineDown.role = gui.Enum.FollowLineEnum.Role.student;
        uiStage.addChild(followLineDown);

        let slider = new gui.Slider();
        slider.vertical = false;
        slider.thumb = "assets/skin/Slider/thumb.png";
        slider.track = "assets/skin/Slider/track.png";
        slider.tracklight = "assets/skin/Slider/tracklight.png";
        slider.width = 600;
        slider.height = 10;
        slider.x = 100;
        slider.y = 730;
        slider.value = 0; 
        slider.maxValue = messageList.length;
        uiStage.addChild(slider);
        slider.on(gui.Interaction.ComponentEvent.CHANGE, (slider:gui.CheckBox,curValue: number) => {
            followLineDown.clear();
            followLineTop.clear();
            for(let i=0;i<curValue;i++){
                if(messageList[i]){
                    followLineDown.setData(messageList[i]);
                    followLineTop.setData(messageList[i]);
                }
            }
        });

        followLineTop.on(gui.Interaction.ComponentEvent.COMPLETE,(display:gui.FollowLine,data:string)=>{
            messageList.push(data);
            slider.maxValue = messageList.length;
            followLineDown.setData(data);
        });

        followLineDown.on(gui.Interaction.ComponentEvent.COMPLETE,(display:gui.FollowLine,data:string)=>{
            messageList.push(data);
            slider.maxValue = messageList.length;
            followLineTop.setData(data);
        });

        let eraseBtn = new gui.Button();
        eraseBtn.x = 100
        eraseBtn.y = 15;
        eraseBtn.text = '擦除 false';
        uiStage.addChild(eraseBtn);
        let isErasing = true;
        eraseBtn.on(gui.Interaction.TouchMouseEvent.onClick,()=>{
            followLineTop.isErasing = isErasing;
            followLineDown.isErasing = isErasing;
            eraseBtn.text = '擦除 ' + isErasing;
            isErasing = !isErasing;

        });

        let restorBtn = new gui.Button();
        restorBtn.x = 200
        restorBtn.y = 15;
        restorBtn.text = '重置';
        uiStage.addChild(restorBtn);
        restorBtn.on(gui.Interaction.TouchMouseEvent.onClick,()=>{
            followLineTop.reset();

        });


    }
}
