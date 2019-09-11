import vfui from "./index";

export default class TestTextInput {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        /** 文本输入组件 */
        let textInput1 = new vfui.TextInput({multiline:false});
        textInput1.top = 10;
        textInput1.width = 300;
        textInput1.height = 30;
        textInput1.fontSize = 24;//"32px"
        textInput1.fill = "#00ffcc";
        textInput1.fontFamily = "微软雅黑";
        textInput1.placeholder = "单行输入文本...";
        //textInput2.disabled = true;
        uiStage.addChild(textInput1);

        let textInput2 = new vfui.TextInput({multiline:true});
        textInput2.top = 100;
        textInput2.width = 300;
        textInput2.height = 100;
        textInput2.fontSize = 24;//"32px"
        textInput2.fill = "red";
        textInput2.fontFamily = "微软雅黑";
        textInput2.placeholder = "多行输入...";
        //textInput2.disabled = true;
        uiStage.addChild(textInput2);

    }
}

