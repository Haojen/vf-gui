
import vfui from "../src/index";

export default class TestApplication{

    public constructor(thisObj:any,callback:(app:PIXI.Application,uiStage:vfui.Stage)=>void){
        this.app = new PIXI.Application({width:1024,height:768});
        this.uiStage = new vfui.Stage(this.app.view.width, this.app.view.height); 
        this.app.stage.addChild(this.uiStage);
        document.body.appendChild(this.app.view);
        this.thisObj = thisObj;
        this.callback = callback;
        this.initTest();
    }

    private uiStage:vfui.Stage;
    private app:PIXI.Application;
    private thisObj:any;
    private callback:(app:PIXI.Application,uiStage:vfui.Stage)=>void;

    private initTest(){
        this.resize();
        this.app.ticker.add(this.updata,this);
        const loader = PIXI.Loader.shared;
        loader.add('assets/uisprites.json').load((loader:PIXI.Loader, resources:object) => {
            this.callback.call(this.thisObj,this.app,this.uiStage)
        });        
    }

    private resize(){
        this.app.resize();
        this.uiStage.resize(this.app.view.width * devicePixelRatio, this.app.view.height * devicePixelRatio);
        window.addEventListener("resize",  () => {
            this.resize();
        });
    }

    private updata(...params: any[]){
        vfui.TickerShared.update(params[0]);
    }
}