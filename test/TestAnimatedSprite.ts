
import vfui from "../src/vfui";

export default  class TestAnimatedSprite {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        const loader = PIXI.Loader.shared;
        let bool = false;
        loader.add("1_role1-sheet",'assets/1_role_sheet.json').load((loader: PIXI.Loader, resources: object) => {

            let sheet = loader.resources["1_role1-sheet"].spritesheet;

            let mc = new vfui.AnimatedSprite(sheet.animations["1_role1-sheet"]);
            mc.animationSpeed = 60;
            mc.play();
            uiStage.addChild(mc);

            let ck = new vfui.Interaction.ClickEvent(mc);
            ck.onClick = ()=>{
                bool = !bool;
                if(bool){
                    mc.gotoAndStop(0);
                }else{
                    mc.gotoAndStop(1);
                }
                
            }
        });

        

    }
}
