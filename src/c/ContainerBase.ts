/** 容器扩展类，后续便于做延时渲染 */
export class ContainerBase extends PIXI.Container{
    public constructor(){
        super();
    }

    public isEmitRender = false;

    public render(renderer: PIXI.Renderer): void{
        super.render(renderer);
        if(this.isEmitRender){
            this.emit("renderChange",renderer);
        }
    }
}