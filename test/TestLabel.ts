import vfui from "../src/pixi-vfui";

export default class TestLabel {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        /** 基础文本展示 */
        let basicText = new vfui.Label();
        basicText.style.left = 100;
        basicText.style.top = 100;
        basicText.fields.text = "Basic text in vfui-ui 33434"
        basicText.fields.color = "#FFF";
        uiStage.addChild(basicText);

        /** 手动换行文本展示 "\n" */
        let nText = new vfui.Label();
        nText.style.left = 100;
        nText.style.top = 200;
        nText.fields.text = "你好，\n世界！"
        nText.fields.color =[0xffffff,0xffcc00];
        uiStage.addChild(nText);

        /** 高级样式文本,换行的宽度为 fields.wordWrapWidth = 600; */
        let richText = new vfui.Label();
        richText.style.left = 100
        richText.style.top = 300;
        richText.fields = this.getFields();
        richText.fields.text = '包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件';
        uiStage.addChild(richText);

    }

    private getFields(){
        // //自定义样式
        let fields = new vfui.LabelFields();
        fields.fontFamily = 'Arial';
        fields.fontSize=   36;
        fields.fontStyle = 'italic';
        fields.fontWeight = 'bold';
        fields.color =   [0xffffff, 0x00ff99]; // gradient

        fields.stroke = 0x4a1850;
        fields.strokeThickness = 5;

        fields.dropShadow = true;
        fields.dropShadowColor = 0x000000;
        fields.dropShadowBlur = 4;
        fields.dropShadowAngle = Math.PI / 6;
        fields.dropShadowDistance = 6;
        fields.wordWrap = true;
        fields.wordWrapWidth = 600;

        return fields;
    }

}

