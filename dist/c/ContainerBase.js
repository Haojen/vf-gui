/** 容器扩展类，后续便于做延时渲染 */
export default class ContainerBase extends PIXI.Container {
    constructor() {
        super();
        this.isEmitRender = false;
    }
    render(renderer) {
        super.render(renderer);
        if (this.isEmitRender) {
            this.emit("render", renderer);
        }
    }
}
//# sourceMappingURL=ContainerBase.js.map