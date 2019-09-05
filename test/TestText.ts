
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestText {

    public constructor() { }

    public load() {
        new TestApplication(this, this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {
        /** 文本组件 */
        let basicText = new vfui.Text();
        basicText.label = 'Basic text in vfui-ui';
        basicText.style.fill = "#FFF";
        basicText.x = 50;
        basicText.y = 100;
        uiStage.addChild(basicText);

        //自定义样式
        let style = new vfui.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 600,
        });

        let richText = new vfui.Text();
        richText.label = '包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件';
        richText.style = style;
        richText.style.breakWords = true;//中文换行特殊处理
        richText.x = 50;
        richText.y = 250;
        uiStage.addChild(richText);

    }

}

