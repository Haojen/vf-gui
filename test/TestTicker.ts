import gui from "../src/vf-gui";

export default class TestTicker {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {
       
        //添加心跳
        gui.TickerShared.addUpdateEvent(this.update, this);

        //两秒后卸载当前跳
        // setTimeout(() => {
        //     if(this.update)
        //         gui.TickerShared.removeUpdateEvent(this.update,this);
        // }, 2000);

        //两秒后关闭整个心跳，包含缓动组件等所有
        // setTimeout(() => {
        //     if(this.update)
        //     gui.TickerShared.disabled = true;
        // }, 2000);
    }

    private update(n: number){

    }
}
