import vfui from "../src/vfui";

export default class TestTimeLine {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app, uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let sp2 = new vfui.Sprite();

        //标签位图(需要可跨域)
        let img = new Image(100, 100);
        img.src = "assets/sprite.png";
        img.onload = () => {

            sp2.source = img; //HTTP
            sp2.width = 100;
            sp2.height = 100;
            sp2.y = 10;
            uiStage.addChild(sp2);

            let tl = new vfui.tween.Timeline();
            tl.setDefault(sp2, 3000, 30);

            tl.addProperty("x", 200, 30);
            tl.addProperty("y", 10, 10);
            tl.addProperty("y", 20, 20);
            tl.addProperty("y", 30, 30);
            tl.addProperty("y", 40, 40);
            tl.addProperty("y", 50, 50);
            tl.addProperty("y", 60, 60);
            tl.addProperty("y", 70, 70);
            tl.addProperty("y", 80, 80);
            tl.addProperty("y", 90, 90);

            let ck = new vfui.Interaction.ClickEvent(sp2);
            ck.onClick = () => {
                tl.load();
                console.log("start");
            }

            let gotoAndStop40 = new vfui.Text("gotoAndStop(40)");
            gotoAndStop40.y = 200;
            gotoAndStop40.style.fill = 0xffffff;
            uiStage.addChild(gotoAndStop40);
            let gotoAndPlay40 = new vfui.Text("gotoAndPlay(40)");
            gotoAndPlay40.y = 230;
            gotoAndPlay40.style.fill = 0xffffff;
            uiStage.addChild(gotoAndPlay40);

            let gotoAndStop40CK = new vfui.Interaction.ClickEvent(gotoAndStop40);
            gotoAndStop40CK.onClick = () => {
                tl.gotoAndStop(40);
            }

            let gotoAndPlay40CK = new vfui.Interaction.ClickEvent(gotoAndPlay40);
            gotoAndPlay40CK.onClick = () => {
                tl.gotoAndPlay(40);
                console.log("start");
            }

        }

    }

}

