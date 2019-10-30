import vfui from "../src/pixi-vfui";

export default class TestSound {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let sound = new vfui.Sound();
        sound.style.width = 100;
        sound.style.height =100;
        sound.props.up = "./assets/skin/Sound/up.png";
        sound.props.down = "./assets/skin/Sound/down.png";
        sound.props.move = "./assets/skin/Sound/move.png";
        sound.props.src = "./assets/test.mp3";
        sound.play();
        uiStage.addChild(sound);
    }

}

