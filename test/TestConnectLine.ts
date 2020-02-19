import gui from "../src/vf-gui";

export default class TestConnectLine {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        // =========  示例1，自定义坐标 ============== //

        let connectLine1 = new gui.ConnectLine;
        connectLine1.isAnimation = true;
        connectLine1.sourcePostion = [50,30]; // 设置源坐标
        connectLine1.targetPostion = [400,30];// 设置目标坐标
        connectLine1.lineColor = 0xffffff; // 线条颜色
        connectLine1.lineWidth = 2;// 线条宽度
        uiStage.addChild(connectLine1);

        // =========  示例2，手动触发画线 ============== //

        let connectLine2 = new gui.ConnectLine;
        connectLine2.isAnimation = true;
        connectLine2.sourcePostion = [50,80]; 
        connectLine2.targetPostion = [400,80];
        connectLine2.lineColor = 0xffff00; 
        connectLine2.lineWidth = 2;
        connectLine2.autoPlay = false; // 是否自动播放 ，默认自动播放
        uiStage.addChild(connectLine2);
        setTimeout(() => { // 3秒后触发画线
            connectLine2.play = 2; // 在非自动播放模式下，触发播放画线，1（source -> target），2倒序播放（target -> source)
        }, 3000);
    

        // =========  示例3，绑定到容器 ============== //
        const container = new gui.Container();
        container.x = 50;
        container.y = 160;
        uiStage.addChild(container);

        const rect1 = this.getNewRect(container);
        const rect2 = this.getNewRect(container,400,0);

        let connectLine3 = new gui.ConnectLine;
        connectLine3.isAnimation = true;
        connectLine3.source = rect1;
        connectLine3.sourcePostion = 'center';//绑定容器的中心点
        connectLine3.target = rect2;
        connectLine3.targetPostion = 'center';//绑定容器的中心点
        connectLine3.lineColor = 0xff00cc;
        connectLine3.lineWidth = 2;
        uiStage.addChild(connectLine3);

        // =========  示例4 点击矩形进行连线 ============== //
        const e4_rect1 = this.getNewRect(container,0,240);
        const e4_rect2 = this.getNewRect(container,200,320);

        const e4_line1 = this.getNewConnectLine(container,e4_rect1,e4_rect2);

        e4_rect1.on(gui.Interaction.TouchMouseEvent.onClick,()=>{
            e4_line1.clear();
            e4_line1.play = 2;
        });
        e4_rect2.on(gui.Interaction.TouchMouseEvent.onClick,()=>{
            e4_line1.clear();
            e4_line1.play = 1;
        });
    }

    private getNewRect(parent:gui.DisplayObject,x = 0, y = 0){
        const rect = new gui.Rect();
        rect.isClick = true;
        rect.x = x;
        rect.y = y;
        rect.width = 100;
        rect.height = 100;
        rect.color = 0xffffff;
        rect.lineColor = 0xff00cc;
        rect.lineWidth = 1;
        parent.addChild(rect);
        return rect;
    }

    private getNewConnectLine(parent:gui.DisplayObject,source: any,target: any){
        let connectLine = new gui.ConnectLine;
        connectLine.isAnimation = true;
        connectLine.source = source;
        connectLine.sourcePostion = 'center';//绑定容器的中心点
        connectLine.target = target;
        connectLine.targetPostion = 'center';//绑定容器的中心点
        connectLine.lineColor = 0xff00cc;
        connectLine.lineWidth = 2;
        connectLine.autoPlay = false; // 是否自动播放 ，默认自动播放
        parent.addChild(connectLine);
        return connectLine;
    }

}
