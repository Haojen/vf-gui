/// <reference types="pixi.js" />
import UIBase from "./UIBase";
/**
 * UI的舞台对象，展示所有UI组件
 *
 * @class
 * @extends PIXI.UI.Container
 * @memberof PIXI.UI
 * @param width {Number} 舞台宽度
 * @param height {Number} 舞台高度
 * @since 1.0.0
 */
export default class Stage extends PIXI.Container {
    constructor(width: number, height: number);
    /**
     * 最小宽度
     * @default
     */
    minWidth: number;
    /**
     * 最小高度
     * @default
     */
    minHeight: number;
    /**
     * 节点列表
     */
    UIChildren: UIBase[];
    /**
     * 自引用
     */
    stage: Stage;
    /**
     * 是否开启交互功能
     * @default
     */
    interactive: boolean;
    /**
     * 可交互区域
     */
    hitArea: PIXI.Rectangle;
    /**
     * 是否初始化
     * @default
     */
    initialized: boolean;
    _width: number;
    width: number;
    _height: number;
    height: number;
    /** 添加显示对象，需集成UIBASE */
    addChild<T>(...UIObject: T[]): T;
    addChildAt<T>(item: T, index: number): T & UIBase;
    removeChild<T>(...UIObject: T[]): T;
    resize(width?: number, height?: number): void;
    /** 没有功能实现，内部编辑器 */
    updatesettings(): void;
    /** 没有功能实现，内部编辑器 */
    container: PIXI.Container;
}
