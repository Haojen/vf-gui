import gui from "../src/vf-gui";

export default class TestAlign {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        let container = new gui.Container();
        container.width = 800;

        let titleBg = new gui.Image();
        titleBg.src = 'assets/titleBg.png';
        
        let titleBgcontainer = new gui.Container();
        //titleBgcontainer.style.justifyContent = "center";
        titleBgcontainer.addChild(titleBg);

        let btnbg = new gui.Image();
        btnbg.src = 'assets/btnbg.png';

        let btnbgcontainer = new gui.Container();
        btnbgcontainer.name = "btnbgcontainer";
        btnbgcontainer.style.justifyContent = "center";
        btnbgcontainer.addChild(btnbg);

        container.addChild(titleBgcontainer);
        container.addChild(btnbgcontainer);
        uiStage.addChild(container);
    }
}
