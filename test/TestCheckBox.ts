import vfui from "../src/pixi-vfui";

export default class TestCheckBox {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        /** 复选框 */
        let checkbox = this.getNewCheckBox(uiStage);
        checkbox.props.value = "1";

        let checkbox2 = this.getNewCheckBox(uiStage);
        checkbox2.props.value = "2";
        checkbox2.style.left = 130;

        let checkbox3 = this.getNewCheckBox(uiStage);
        checkbox3.props.value = "3";
        checkbox3.style.left = 160;

        //单选,通过设置分组区分
        let radio = this.getNewRadio(uiStage);
        radio.value = "r1";
        radio.checkGroup = "a1";

        let radio2 = this.getNewRadio(uiStage);
        radio2.value = "r2";
        radio2.style.left = 130;
        radio2.checkGroup = "a1";

        let radio3 = this.getNewRadio(uiStage);
        radio3.value = "r3";
        radio3.style.left = 160;
        radio3.checkGroup = "a1";

    }


    private getNewCheckBox(uiStage: vfui.Stage) {
        let checkbox = new vfui.CheckBox();
        checkbox.style.top = 100;
        checkbox.style.left = 100;
        checkbox.style.width = 23;
        checkbox.style.height = 23;
        checkbox.props.up = "assets/skin/CheckBox/unselect.png";
        checkbox.props.down = "assets/skin/CheckBox/unselect.png";
        checkbox.props.move ="assets/skin/CheckBox/unselect.png";
        checkbox.props.disabled = "assets/skin/CheckBox/unselect.png";
        checkbox.props.upAndSelected = "assets/skin/CheckBox/select_up.png";
        checkbox.props.downAndSelected = "assets/skin/CheckBox/select_down.png";
        checkbox.props.moveAndSelected = "assets/skin/CheckBox/select_down.png";
        checkbox.props.disabledAndSelected = "assets/skin/CheckBox/select_disabled.png";
        checkbox.on(vfui.Interaction.ComponentEvent.CHANGE,this.onChange,this);
        uiStage.addChild(checkbox);
        return checkbox;
    }


    private getNewRadio(uiStage: vfui.Stage) {
        let radio = new vfui.CheckBox();
        radio.style.top = 150;
        radio.style.left = 100;
        radio.style.width = 22;
        radio.style.height = 22;
        radio.props.up = "assets/skin/Radio/unselect.png";
        radio.props.down = "assets/skin/Radio/unselect.png";
        radio.props.move ="assets/skin/Radio/unselect.png";
        radio.props.disabled = "assets/skin/Radio/unselect.png";
        radio.props.upAndSelected = "assets/skin/Radio/select_up.png";
        radio.props.downAndSelected = "assets/skin/Radio/select_down.png";
        radio.props.moveAndSelected = "assets/skin/Radio/select_down.png";
        radio.props.disabledAndSelected = "assets/skin/Radio/select_disabled.png";
        radio.on(vfui.Interaction.ComponentEvent.CHANGE,this.onChange,this);
        uiStage.addChild(radio);
        return radio;
    }

    private onChange(checkBox: vfui.CheckBox) {
        console.log("->", checkBox.value,checkBox.checked);
    }
}
