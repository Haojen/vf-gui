
import vfui from "../src/vfui";

export default  class TestAnimatedSprite {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        const loader = PIXI.Loader.shared;
        let bool = false;
        loader.add("role",'assets/1_role_sheet.json').load((loader: PIXI.Loader, resources: any) => {

            let mc = new vfui.AnimatedSprite();
            mc.animationSpeed = 60;
            mc.source = resources["role"].spritesheet;
            mc.animationName = "1_role1-sheet";
            mc.autoPlay = false;
            //mc.gotoAndPlay(0);
            //mc.loop = false;
            uiStage.addChild(mc);

            let ck = new vfui.Interaction.ClickEvent(mc);
            ck.onClick = ()=>{
                bool = !bool;
                if(bool){
                    mc.gotoAndStop(1);
                }else{
                    mc.gotoAndStop(0);
                }
                
            }
        });

        

    }
}
