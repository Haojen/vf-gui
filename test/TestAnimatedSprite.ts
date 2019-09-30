
import vfui from "../src/vfui";

export default  class TestAnimatedSprite {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        const loader = PIXI.Loader.shared;
        let bool = false;
        
        
        loader.add("role",'assets/1_role2/1_role2.json').load((loader: PIXI.Loader, resources: any) => {

            let mc = new vfui.AnimatedSprite();
            mc.animationSpeed = 60;
            mc.source = resources["role"].spritesheet;
            mc.animationName = "0";
            mc.autoPlay = false;
            //mc.gotoAndPlay(0);
            //mc.loop = false;
            uiStage.addChild(mc);

            let ck = new vfui.Interaction.ClickEvent(mc);
            ck.onClick = ()=>{
                bool = !bool;
                if(bool){
                    mc.animationName = "1";
                    mc.play();
                }else{
                    mc.animationName = "0";
                    mc.play();
                }
                
            }
        });

        

    }
}
