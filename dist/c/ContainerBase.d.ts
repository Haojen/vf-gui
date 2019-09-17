/// <reference types="pixi.js" />
/** 容器扩展类，后续便于做延时渲染 */
export default class ContainerBase extends PIXI.Container {
    constructor();
    isEmitRender: boolean;
    render(renderer: PIXI.Renderer): void;
}
