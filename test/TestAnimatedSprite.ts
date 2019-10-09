import vfui from "../src/pixi-vfui";

export default  
class TestAnimatedSprite {

  public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
      this.onLoad(app,uiStage)
  }

  private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

      const loader = PIXI.Loader.shared;
      let bool = false;
      
      
      loader.add("role",'assets/1_role2/1_role2.json').load((loader: PIXI.Loader, resources: any) => {

          let spritesheet = resources["role"].spritesheet;
          let textures = [spritesheet.textures["1_role2-sheet1.png"],spritesheet.textures["1_role2-sheet2.png"]];
          let mc = new vfui.SpriteAnimated();
          mc.animationSpeed = 0.1;
          mc.source = spritesheet; //方式一,sheet对象
          //mc.source =textures; //方式二,位图数组,当为位图数组时，animationName设置无效
          mc.animationName = "1";
          mc.autoPlay = true;

          mc.x = 200;
          mc.y = 500;
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