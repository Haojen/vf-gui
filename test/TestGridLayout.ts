import gui from "../src/vf-gui";

export default class TestGridLayout {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {


        /**
         * grid 模式下，不可设置子节点的style属性中的{left,top,right，bottom,width,height} 等
         * 
         * 可设置子节点的width,height属性
         */

         /** 红色 设置固定行列 */
        let red =  new gui.Container();
        red.name = "red"
        red.style.display = "grid";
        red.style.gridTemplateColumns = [100,50,100];
        red.style.gridTemplateRows = [100,50,100];
        red.style.gridColumnGap = 10;
        red.style.gridRowGap = 10;
        red.style.justifyContent = "flex-start";
        red.style.alignContent = "flex-start";
        //red.style.width = 700;
        //red.style.height = 600;
        uiStage.addChild(red);
        this.addContent(red,0xf44336);

         /** 红色 设置重复的行列 */
         let yellow =  new gui.Container();
         yellow.name = "yellow"
         yellow.style.display = "grid";
         yellow.style.gridTemplateColumns =  ["repeat",5,30];
         yellow.style.gridTemplateRows = ["repeat",100,50];
         yellow.style.gridColumnGap = 0;
         yellow.style.gridRowGap = 0;
         yellow.style.justifyContent = "center";
         yellow.style.alignContent = "center";
         //yellow.style.width = 700;
         //yellow.style.height = 600;
         uiStage.addChild(yellow);
         this.addContent(yellow,0xffeb3b);
         
         window.setInterval(()=>{
            this.addContent(yellow,0xffeb3b,1);
         },1000)

        /** 紫色 */
        let purple =  new gui.Container();
        purple.name = "purple";
        purple.style.display = "grid";

        purple.style.gridTemplateColumns = [100];
        purple.style.gridTemplateRows = ["repeat",100,70];
        purple.style.gridColumnGap = 15;
        purple.style.gridRowGap = 15;
        purple.style.justifyContent = "flex-end";
        purple.style.alignContent = "flex-end";

        //purple.style.width = 700;
        //purple.style.height = 600;
        uiStage.addChild(purple);
        this.addContent(purple,0x9c27b0);
    }

    private addContent(parent:gui.DisplayObject,color:number,len=9){
        let childContainer:gui.Container;
        for(let i=1;i<=len;i++){
            /** 单背景色 */
            childContainer = new gui.Container();
            childContainer.name = i.toString() + "_" + color;
            //childContainer.width = 50;
            //childContainer.height = 50;
            childContainer.style.backgroundColor = color;
            parent.addChild(childContainer);

            let label = new gui.Label();
            label.style.justifyContent = "center";
            label.style.alignContent = "center";
            label.text = i.toString();
            childContainer.addChild(label);
        }
    }
}
