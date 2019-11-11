import {shared as TickerShared} from "./Ticker";
import { UILayout } from "./UILayout";
import { UIBase } from "./UIBase";

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
export class Stage extends UILayout{

    public constructor(width: number, height: number) {
        super(); 
        this.width = width;
        this.height = height;
        this.setActualSize(width,height);
        this.stage = this;
        this.container.name = "Stage";
        this.container.hitArea = new PIXI.Rectangle(0, 0, width, height);
        this.container.interactive = true;
        this.container.interactiveChildren = true;
        Stage._stage = this;
        this.initialized = true;
        this.$nestLevel = 1;
    }
    

    private static _stage: Stage;
    public static get Ins(){
        return Stage._stage;
    }
    
    public releaseAll(){
        for(let i=0;i<this.uiChildren.length;i++){
            const ui = this.uiChildren[i] as UIBase;
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
        TickerShared.removeAllListeners();
    }

    /**  
     * 舞台引用
     */
    public stage: Stage | undefined;
    
    
    public resize(): void {
        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
        this.updateChildren();
    }

}