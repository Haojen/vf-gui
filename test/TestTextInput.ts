
import vfui from "../src/index";
import TestApplication from "./TestApplication"

export default class TestTextInput{

    public constructor(){}
    
    public load(){
        new TestApplication(this,this.onLoad)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage){
        /** 文本组件 */
        
        let r = new vfui.Rect();
        r.drawRoundedRect(0,0,200,100,10);
        r.x = 0;
        r.y = 210;
        uiStage.addChild(r);
        let style = new vfui.TextStyle({
            fontFamily: 'Calibri' ,
            fontSize: 20,
            fill: '#000000',
            padding: 6
        });
        let textInput2 = new vfui.TextInput({ width: 100, height: 20, tabIndex: 2, tabGroup: 0 },style);
        textInput2.y = 210;
        textInput2.width = 200;
        textInput2.height = 100;
        textInput2.sourceUp = "assets/skin/Button/button_up.png";
        textInput2.sourceDown = textInput2.sourceUp;
        textInput2.sourceMove = textInput2.sourceUp;
        // textInput2.on("focusChanged", function (focus) {
        //     textInput2.background.alpha = focus ? 0.4 : 0.2;
        // });
        uiStage.addChild(textInput2);
        
    }
    
}

