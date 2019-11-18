import { GroupController  } from "../interaction/Index";
import { DisplayLayoutAbstract } from "./DisplayLayoutAbstract";
import { CSSStyle} from "../layout/CSSStyle";
import { updateDisplayLayout } from "../layout/CSSLayout";
import { UIBaseDrag } from "./plugs/UIBaseDrag";
import { deepCopy } from "../utils/Utils";

/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @since 1.0.0
 */
export class DisplayObject extends DisplayLayoutAbstract implements Lifecycle {
    /**
     * 构造函数
     */
    public constructor() {
        super();
        this.container.name = (this.constructor as TAny).name;
    }

    /** 
     * 背景 
     */
    public background?: PIXI.Graphics;
    /** 
     * 遮罩，设置遮罩后，组件内部的索引位置可能产生变化 
     */
    public mask?: PIXI.Graphics | PIXI.Sprite | DisplayObject;
    /**
     * 插件列表
     */
    public plugs = new Map<string,Lifecycle>();
    /**
     * 拖动限制门槛,小于设置的数不执行拖动,防止点击与滚动
     */
    public dragThreshold = 0;
    
    /** 
     * 设置拖动
     */
    public get dragOption(){
        if(this.plugs.has(UIBaseDrag.key)){
            return this.plugs.get(UIBaseDrag.key) as UIBaseDrag
        }
        return new UIBaseDrag(this);
    }
    public set dragOption(value: UIBaseDrag){
        const dragOption = this.dragOption;
        deepCopy(value,dragOption);
    }
    /**
     * 分组
     */
    protected _groupName?: string;
    public get groupName() {
        return this._groupName;
    }
    public set groupName(value) {
  
        if(value === undefined){     
            GroupController.unRegistrerGroup(this);
        }
        if(this._groupName == value){
            return;
        }
        this._groupName = value;
        GroupController.registrerGroup(this);
    }

        
    /**
     * 透明度
     */
    public get alpha() {
        return this.container.alpha;
    }
    public set alpha(value) {
        this.container.alpha = value;
    }


    /** 色调 */
    private _tint: number | undefined;
    public get tint(): number | undefined {
        return this._tint;
    }
    public set tint(value: number | undefined) {
        if(value === this._blendMode){
            return;
        }
        this._tint = value;
        this.container.children.forEach(childrenItem=>{
            if((childrenItem as TAny)["tint"]){
                (childrenItem as TAny)["tint"] = value;
            }
        });
    }

    /* 混合模式 */
    private _blendMode: PIXI.BLEND_MODES | undefined;
    public get blendMode(): PIXI.BLEND_MODES | undefined {
        return this._blendMode;
    }
    public set blendMode(value: PIXI.BLEND_MODES | undefined) {
        if(value === this._blendMode){
            return;
        }
        this._blendMode = value;
        this.container.children.forEach(childrenItem=>{
            if(childrenItem instanceof PIXI.Sprite){
                childrenItem.blendMode = value || PIXI.BLEND_MODES.NORMAL;
            }
        });
    }
  
    /** 
     * 私有样式代理 
     * */
    protected _style?: CSSStyle;
    /**
    *  在不同分辨率下保持像素稳定 
    * @default
    */
    public pixelPerfect = true;
    /** 
     * 动态属性，避免其他类注入 
     */
    public attach: { [key: string]: object | number | string | Function } = {};
    /** 
     * 获取样式 
     */
    public get style(): CSSStyle{
        if(this._style == undefined){
            this._style = new CSSStyle(this);
        }
        return this._style;
    }

    public set style(value: CSSStyle){
        const style = this.style;
        deepCopy(value,style);
        this.invalidateParentLayout();
    }

    /**
     * 更新显示列表,子类重写，实现布局
     */
    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
        
        if(this._style && this._style.display!=="none"){
            //console.log("displayStyle",unscaledWidth,unscaledHeight,this.left,this.right,this.x,this.y);
            updateDisplayLayout(this,unscaledWidth,unscaledHeight);
        }else{
            //console.log("display",this.x + this.pivotX,this.y + this.pivotY,this.scaleX,this.scaleY,this.rotation*(Math.PI/180),this.skewX,this.skewY,this.pivotX,this.pivotY);
            this.updateTransform();    
        }
    }

    public load(){
        this.initializeUIValues();
        super.load();
    }

    public release() {
        
        const {container,mask,background} = this;

        if(this._style){
            this._style.release();
            this._style = undefined;
        }  

        if(mask){
            container.mask = null;
            if(mask instanceof DisplayObject){
                mask.release();
            }else{
                mask.parent && mask.parent.removeChild(mask).destroy();
            }
            this.mask = undefined;
        }

        if(background && background.parent){
            background.parent.removeChild(background).destroy();
            this.background = undefined;
        }

        this.plugs.forEach(value=>{
            value.release();  
        });

        GroupController.unRegistrerGroup(this);

        super.release();
    }

    public releaseAll(){
        
        this.offAll();
        this.release();
        for(let i=0;i<this.uiChildren.length;i++){
            const ui = this.uiChildren[i] as DisplayObject;
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
    }
}