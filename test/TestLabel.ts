import gui from "../src/vf-gui";

export default class TestLabel {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        /** 基础文本展示 */
        let basicText = new gui.Label();
        basicText.style.left = 100;
        basicText.style.top = 100;
        basicText.style.color = 0xffffff;
        basicText.text = "Basic text in vf-gui 33434"
        uiStage.addChild(basicText);

        /** 手动换行文本展示 "\n" */
        let nText = new gui.Label();
        nText.style.left = 100;
        nText.style.top = 200;
        nText.style.color =[0xffffff,0xffcc00];
        nText.text = "你好，\n世界！"
        uiStage.addChild(nText);

        /** 高级样式文本,换行的宽度为 fields.wordWrapWidth = 600; */
        let richText = new gui.Label();
        richText.style.left = 100
        richText.style.top = 300;
        richText.fontCssStyle = this.getFontCssStyle();
        richText.text = '包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件';
        uiStage.addChild(richText);

        /** 限定宽度 */
        let wText = new gui.Label();
        wText.style.left = 100;
        wText.style.top = 500;
        wText.style.color =[0xffffff,0xffcc00];
        wText.style.width = 500;
        wText.style.textAlign = "right";
        wText.text = "我限定了宽度与位置"
        uiStage.addChild(wText);
    }

    private getFontCssStyle(){
        // //自定义样式
        let fields = {} as any;
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

