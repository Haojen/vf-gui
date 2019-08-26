
import vfui from "../src/index";

export default class TestApplication{

    public constructor(thisObj:any,callback:(app:PIXI.Application,uiStage:vfui.Stage)=>void){
        this.app = new PIXI.Application();
        this.uiStage = new vfui.Stage(window.innerWidth, window.innerHeight); 
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
        this.app.ticker.add(this.updata,this)
        PIXI.loader.add('uisprites.json').load(() => {
            this.callback.call(this.thisObj,this.app,this.uiStage)
        });        
    }

    private resize(){
        this.app.resize();
        this.uiStage.resize(window.innerWidth * devicePixelRatio, window.innerHeight * devicePixelRatio);
        this.app.resizeTo.addEventListener("resize", () => {
            this.resize();
        });
    }

    private updata(...params: any[]){
        vfui.TickerShared.update(params[0]);
    }
}