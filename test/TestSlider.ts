import vfui from "../src/pixi-vfui";

export default class TestSlider {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        /** 水平滑动条 vertical = false */
        let slider = new vfui.Slider();
        slider.props.vertical = false;
        slider.props.thumb = "assets/skin/Slider/thumb.png";
        slider.props.track = "assets/skin/Slider/track.png";
        slider.props.tracklight = "assets/skin/Slider/tracklight.png";
        slider.style.width = 300;
        slider.style.height = 10;
        slider.style.top = 50;
        slider.style.left = 50;
        slider.props.value = 50; 
        uiStage.addChild(slider);


        /** 垂直滑动条 vertical = true */
        let slider2 = new vfui.Slider();
        slider2.props.vertical = true;
        slider2.props.thumb = "assets/skin/Slider/thumb.png";
        slider2.props.track = "assets/skin/Slider/track.png";
        slider2.props.tracklight = "assets/skin/Slider/tracklight.png";
        slider2.style.width = 10;
        slider2.style.height = 300;
        slider2.style.top = 100;
        slider2.style.left = 50;
        uiStage.addChild(slider2);
        slider2.props.value = 50;


        let changeText = new vfui.Label("slider");
        changeText.style.top= 100;
        changeText.style.left = 150;
        changeText.props.color = 0xff00cc;
        uiStage.addChild(changeText);

        let changingText = new vfui.Label("slider2");
        changingText.style.top = 150;
        changingText.style.left = 150;
        changingText.props.color = 0xff00cc;
        uiStage.addChild(changingText);


        slider.on(vfui.Interaction.ComponentEvent.CHANGE, (slider:vfui.CheckBox,curValue: number) => {
            changeText.props.text = "change:" + curValue;
        });
        slider.on(vfui.Interaction.ComponentEvent.CHANGEING, (slider:vfui.CheckBox,curValue: number) => {
            changingText.props.text = "changing:" + curValue;
        })

        slider2.on(vfui.Interaction.ComponentEvent.CHANGE, (slider:vfui.CheckBox,curValue: number) => {
            changeText.props.text = "change:" + curValue;
        });
        slider2.on(vfui.Interaction.ComponentEvent.CHANGEING, (slider:vfui.CheckBox,curValue: number) => {
            changingText.props.text = "changing:" + curValue;
        });


    }

}

