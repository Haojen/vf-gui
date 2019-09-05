
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestCheckBox {

    public constructor() {

    }

    public load() {
        new TestApplication(this, this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {
        /** UI组件 复选框 */
        let checkbox = this.getNewCheckBox(uiStage);
        checkbox.value = "1";
        //checkbox.checkGroup = "a1";
        let checkbox2 = this.getNewCheckBox(uiStage);
        checkbox2.value = "2";
        //checkbox2.checkGroup = "a1";
        checkbox2.x = 130;
        let checkbox3 = this.getNewCheckBox(uiStage);
        checkbox3.value = "3";
        //checkbox3.checkGroup = "a1";
        checkbox3.x = 160;

        //单选
        let radio = this.getNewRadio(uiStage);
        radio.value = "r1";
        radio.checkGroup = "a1";

        let radio2 = this.getNewRadio(uiStage);
        radio2.value = "r2";
        radio2.x = 130;
        radio2.checkGroup = "a1";

        let radio3 = this.getNewRadio(uiStage);
        radio3.value = "r3";
        radio3.x = 160;
        radio3.checkGroup = "a1";

    }
    private getNewRadio(uiStage: vfui.Stage) {
        let radio = new vfui.CheckBox();
        radio.x = 100;
        radio.y = 150;
        radio.width = 23;
        radio.height = 23;
        radio.sourceUp = "assets/skin/Radio/radio_up.png";
        radio.sourceDown = "assets/skin/Radio/radio_down.png";
        radio.sourceMove = radio.sourceDown;
        radio.sourceMark = "assets/skin/Radio/radio_mark.png";
        radio.on(vfui.Interaction.TouchEvent.onClick, this.onClickChecBox, this);
        uiStage.addChild(radio);
        return radio;
    }

    private getNewCheckBox(uiStage: vfui.Stage) {
        let checkbox = new vfui.CheckBox();
        checkbox.x = 100;
        checkbox.y = 100;
        checkbox.width = 23;
        checkbox.height = 23;
        checkbox.sourceUp = "assets/skin/CheckBox/checkbox_up.png";
        checkbox.sourceDown = "assets/skin/CheckBox/checkbox_down.png";
        checkbox.sourceMove = checkbox.sourceDown;
        checkbox.sourceMark = "assets/skin/CheckBox/checkbox_mark.png";
        checkbox.on(vfui.Interaction.TouchEvent.onClick, this.onClickChecBox, this);
        uiStage.addChild(checkbox);
        return checkbox;
    }

    private onClickChecBox(e: vfui.Interaction.InteractionEvent, checkBox: vfui.CheckBox) {
        console.log("->", checkBox.value);
    }
}
