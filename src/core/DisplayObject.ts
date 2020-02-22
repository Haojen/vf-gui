import { GroupController  } from "../interaction/Index";
import { DisplayLayoutAbstract } from "./DisplayLayoutAbstract";
import { CSSStyle} from "../layout/CSSStyle";
import { updateDisplayLayout } from "../layout/CSSLayout";
import { UIBaseDrag } from "./plugs/UIBaseDrag";
import { deepCopy } from "../utils/Utils";
import { UIClick } from "./plugs/UIClick";
import { OutlineFilter } from '@pixi/filter-outline'
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
     * 背景(内部使用)
     */
    public $background?: PIXI.Graphics;
    /**
     * 遮罩，设置遮罩后，组件内部的索引位置可能产生变化
     */
    public $mask?: PIXI.Graphics | PIXI.Sprite | DisplayObject;
    /**
     * 插件列表
     */
    public plugs = new Map<string,Lifecycle>();
    /**
     * 拖动限制门槛,小于设置的数不执行拖动,防止点击与滚动
     */
    public dragThreshold = 0;
    /** 模糊 */
    private blurFilter?: PIXI.filters.BlurFilter;
    /** 拖动时，事件流是否继续传输 */
    public dragStopPropagation = true;
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

    /** 是否开启鼠标或触摸点击，开启后，接收TouchMouseEvent */
    public get isClick(){
        let click = this.plugs.get(UIClick.key) as UIClick;
        if(click){
            return true;
        }
        return false;
    }

    public set isClick(value: boolean){
        let click = this.plugs.get(UIClick.key) as UIClick;
        if(value){
            if(!click){
                new UIClick(this);
            }
        }else{
            if(click){
                click.release();
            }
        }
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
     * 设置Blur XY的模糊强度
     *
     * 参数类型为number时，设置 blurX = blurY = value
     *
     */
    public set filterBlur(value: number){
        const container = this.container;
        if(this.blurFilter === undefined){
            this.blurFilter  =  new PIXI.filters.BlurFilter(8,1,1);
            container.filters = [ this.blurFilter ];
        }
        this.blurFilter.blur = value;

    }
    public get filterBlur() {
        return this.blurFilter ? this.blurFilter.blur : 0;
    }

    /**
     * 设置灰度
     *
     * 参数类型为 number, 接收一个百分比值，然后再将其转换为小数
     */
    private grayscaleFilter?: PIXI.filters.ColorMatrixFilter;
    private grayscaleFilterValue: number = 0;
    public set filterGrayscale(value: number) {
        const container = this.container;
        if(this.grayscaleFilter === undefined){
            this.grayscaleFilter  =  new PIXI.filters.ColorMatrixFilter();
            container.filters = [ this.grayscaleFilter ];
        }

        this.grayscaleFilterValue = value / 100;
        this.grayscaleFilter.greyscale(this.grayscaleFilterValue, false);
    }

    public get filterGrayscale() {
        return this.grayscaleFilterValue * 100;
    }

    /**
     * 给图片的透明区域增加一个边框
     *
     * 参数类型为 字符串, 如：outline(10, 0xFF0000), 其中 10 代表边框宽度，为 0 时不显示，0xFF0000 为颜色值
     */
    private outlineFilter?: OutlineFilter;
    public set filterOutline(value: string | undefined) {
        if (!value) return;

        const container = this.container;
        value = value.substring(value.indexOf('(') + 1, value.indexOf(')'))
        const parsedValue: [number, number] = value.split(',') as any;

        if(this.outlineFilter === undefined){
            this.outlineFilter = new OutlineFilter(0, 0xffffff, 1);
            container.filters = [ this.outlineFilter ];
        }

        this.outlineFilter.color = parsedValue[1];
        this.outlineFilter.thickness = parsedValue[0];
    }

    public get filterOutline() {
        if (!this.outlineFilter) return;
        
        const color = this.outlineFilter.color;
        const thickness = this.outlineFilter.thickness;
        return `outline(${thickness},${color})`;
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

        const {container,$mask,$background} = this;

        if(this._style){
            this._style.release();
            this._style = undefined;
        }

        if($mask){
            container.mask = null;
            if($mask instanceof DisplayObject){
                $mask.release();
            }else{
                $mask.parent && $mask.parent.removeChild($mask).destroy();
            }
            this.$mask = undefined;
        }

        if($background && $background.parent){
            $background.parent.removeChild($background).destroy();
            this.$background = undefined;
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

        while(this.uiChildren.length>0){
           if(this.uiChildren[0].uiChildren.length>0){
                (this.uiChildren[0].uiChildren[0] as DisplayObject).releaseAll();
           }
           (this.uiChildren[0] as DisplayObject).releaseAll();
        }

        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
    }
}
