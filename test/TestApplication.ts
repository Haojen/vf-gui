import gui from "../src/vf-gui";
import updateViewSize from "./WebPlayerSize";

export default class TestApplication {

    public constructor(thisObj: any, callback: (app: PIXI.Application, uiStage: gui.Stage) => void) {

        this.app = new PIXI.Application({ 
            width: window.innerWidth, 
            height: window.innerHeight,
            antialias:true,
            forceCanvas:false,
            resolution: window.devicePixelRatio,
            forceFXAA:true
        });
        updateViewSize(this.app,window.devicePixelRatio,PIXI.utils.isWebGLSupported(),'noScale');      
        this.uiStage = new gui.Stage(this.app.view.width, this.app.view.height,this.app);
        this.app.stage.addChild(this.uiStage.container);
        document.body.appendChild(this.app.view);
        this.thisObj = thisObj;
        this.callback = callback;
        this.initTest();
        
    }
    
    private uiStage: gui.Stage;
    private app: PIXI.Application;
    private thisObj: any;
    private callback: (app: PIXI.Application, uiStage: gui.Stage) => void;

    private initTest() {
        this.resize();
        this.app.ticker.maxFPS = 60;
        this.app.ticker.add(this.updata, this);
        this.callback.call(this.thisObj, this.app, this.uiStage);
        window.addEventListener("resize", () => {
            this.resize();
        });
    }

    private resize() {
        this.app.resize();
        this.uiStage.resize();
    }

    private updata(deltaTime: number) {
        gui.TickerShared.update(deltaTime,this.app.ticker.lastTime,this.app.ticker.elapsedMS);
    }
}