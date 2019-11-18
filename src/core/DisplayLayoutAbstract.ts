import * as UIKeys from "./DisplayLayoutKeys";
import validatorShared from "./DisplayLayoutValidator";
import { ComponentEvent } from "../interaction/Index";
import { formatRelative } from "../utils/Utils";
import { DisplayObjectAbstract } from "./DisplayObjectAbstract";

export const $tempLocalBounds = new PIXI.Rectangle();
/**
 * UI 布局的基础属性类
 */
export class DisplayLayoutAbstract extends DisplayObjectAbstract {

    public constructor() {
        super()
        this.initializeUIValues();
    }

    public isContainer = false;

    /**
     * @private
     */
    public $values: TAny = {};

    public includeInLayout = true;
    /**
     * @private
     * 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
     */
    protected initializeUIValues(): void {
        this.$values = {
            [UIKeys.invalidatePropertiesFlag]: true,
            [UIKeys.invalidateSizeFlag]: true,
            [UIKeys.invalidateDisplayListFlag]: true,
            [UIKeys.left]: NaN,
            [UIKeys.right]: NaN,
            [UIKeys.top]: NaN,
            [UIKeys.bottom]: NaN,
            [UIKeys.horizontalCenter]: NaN,
            [UIKeys.verticalCenter]: NaN,
            [UIKeys.percentWidth]: NaN,
            [UIKeys.percentHeight]: NaN,
            [UIKeys.explicitWidth]: NaN,
            [UIKeys.explicitHeight]: NaN,
            [UIKeys.width]: 0,
            [UIKeys.height]: 0,
            [UIKeys.minWidth]: 0,
            [UIKeys.maxWidth]: 100000,
            [UIKeys.minHeight]: 0,
            [UIKeys.maxHeight]: 100000,
            [UIKeys.measuredWidth]: 0,
            [UIKeys.measuredHeight]: 0,
            [UIKeys.oldPreferWidth]: NaN,
            [UIKeys.oldPreferHeight]: NaN,
            [UIKeys.x]: 0,
            [UIKeys.y]: 0,
            [UIKeys.oldX]: 0,
            [UIKeys.oldY]: 0,
            [UIKeys.oldWidth]: 0,
            [UIKeys.oldHeight]: 0,
            [UIKeys.scaleX]: 1,
            [UIKeys.scaleY]: 1,
            [UIKeys.pivotX]: 0,
            [UIKeys.pivotY]: 0,
            [UIKeys.rotation]: 0,
            [UIKeys.skewX]: 0,
            [UIKeys.skewY]: 0,
            [UIKeys.zIndex]: NaN, 
        };
    }

    /**
     * @private
     * 检查属性失效标记并应用
     */
    protected checkInvalidateFlag(): void {
        const values = this.$values;
        if (values[UIKeys.invalidatePropertiesFlag]) {
            validatorShared.invalidateProperties(this);
        }
        if (values[UIKeys.invalidateSizeFlag]) {
            validatorShared.invalidateSize(this);
        }
        if (values[UIKeys.invalidateDisplayListFlag]) {
            validatorShared.invalidateDisplayList(this);
        }
        this.validateSize();
    }

    /**
     * @private
     * 验证组件的属性
     */
    public validateProperties(): void {
        const values = this.$values;
        if (values[UIKeys.invalidatePropertiesFlag]) {
            this.commitProperties();
            values[UIKeys.invalidatePropertiesFlag] = false;
        }
    }

    /**
     * @private
     * 验证组件的尺寸
     */
    public validateSize(recursive?: boolean): void {

        if (recursive) {
            const children = this.uiChildren;
            if (children) {
                const length = children.length;
                for (let i = 0; i < length; i++) {
                    const child = children[i] as DisplayLayoutAbstract;
                    child.validateSize(true);
                }
            }
        }
        const values = this.$values;
        if (values[UIKeys.invalidateSizeFlag]) {
            const changed = this.measureSizes();
            if (changed) {
                this.invalidateDisplayList();
                this.invalidateParentLayout();
            }
            if(this.parent == undefined){
                return;
            }
            values[UIKeys.invalidateSizeFlag] = false;
        }
    }
    /**
     * @private
     * 验证子项的位置和大小，并绘制其他可视内容
     */
    public validateDisplayList(): void {
        if(this.parent == undefined){
            return;
        }
        const values = this.$values;

        if (values[UIKeys.invalidateDisplayListFlag]) {
            this.updateSize();
            this.updateDisplayList(values[UIKeys.width], values[UIKeys.height]);
            values[UIKeys.invalidateDisplayListFlag] = false;
        }
    }
    /**
     * @private
     * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
     */
    protected commitProperties(): void {

    }
    /**
     * @private
     * 测量组件尺寸
     */
    protected measure(): void {
        this.container.getLocalBounds($tempLocalBounds);
        this.setMeasuredSize($tempLocalBounds.width,$tempLocalBounds.height);
    }

    /**
     * @private
     * 测量组件尺寸，返回尺寸是否发生变化
     */
    private measureSizes(): boolean {
        let changed = false;
        const values = this.$values;
        if (!values[UIKeys.invalidateSizeFlag])
            return changed;

        this.measure();
        const parentWidth = this.parent?this.parent.width:1;
        const parentHeight = this.parent?this.parent.height:1;
        const maxWidth = formatRelative(values[UIKeys.maxWidth],parentWidth);
        const maxHeight = formatRelative(values[UIKeys.maxHeight],parentHeight);
        const minWidth = formatRelative(values[UIKeys.minWidth],parentWidth);
        const minHeight = formatRelative(values[UIKeys.minHeight],parentHeight);

        

        //显示设置宽高，会忽略最大与最小值
        if (isNaN(values[UIKeys.explicitWidth]) || isNaN(values[UIKeys.explicitHeight])) {

            if(!isNaN(values[UIKeys.percentWidth])){
                values[UIKeys.measuredWidth] =Math.ceil(values[UIKeys.percentWidth]*parentWidth);
            }
            if(!isNaN(values[UIKeys.percentHeight])){
                values[UIKeys.measuredHeight] = Math.ceil(values[UIKeys.percentHeight]*parentHeight);
            }
 
            if (values[UIKeys.measuredWidth] < minWidth) {
                values[UIKeys.measuredWidth] = minWidth;
            }
            if (values[UIKeys.measuredWidth] > maxWidth) {
                values[UIKeys.measuredWidth] = maxWidth;
            }
            if (values[UIKeys.measuredHeight] < minHeight) {
                values[UIKeys.measuredHeight] = minHeight;
            }
            if (values[UIKeys.measuredHeight] > maxHeight) {
                values[UIKeys.measuredHeight] = maxHeight
            }
        }else{
            if (values[UIKeys.explicitWidth] < minWidth) {
                values[UIKeys.explicitWidth] = minWidth;
            }
            if (values[UIKeys.explicitWidth] > maxWidth) {
                values[UIKeys.explicitWidth] = maxWidth;
            }
            if (values[UIKeys.explicitHeight] < minHeight) {
                values[UIKeys.explicitHeight] = minHeight;
            }
            if (values[UIKeys.explicitHeight] > maxHeight) {
                values[UIKeys.explicitHeight] = maxHeight
            }
        }
        const preferredW = this.getPreferredUWidth();
        const preferredH = this.getPreferredUHeight();
        if (preferredW !== values[UIKeys.oldPreferWidth] ||
            preferredH !== values[UIKeys.oldPreferHeight]) {
            values[UIKeys.oldPreferWidth] = preferredW;
            values[UIKeys.oldPreferHeight] = preferredH;
            changed = true;
        }
        return changed;
    }
    /**
     * @private
     * 设置测量结果。
     * @param width 测量宽度
     * @param height 测量高度
     */
    public setMeasuredSize(width: number, height: number): void {
        const values = this.$values;
        values[UIKeys.measuredWidth] = Math.ceil(+width || 0);
        values[UIKeys.measuredHeight] = Math.ceil(+height || 0);
    }
    /**
     * @private
     *
     * @returns
     */
    protected getPreferredUWidth(): number {
        const values = this.$values;
        return isNaN(values[UIKeys.explicitWidth]) ?
            values[UIKeys.measuredWidth] : values[UIKeys.explicitWidth];
    }

    /**
     * @private
     */
    protected getPreferredUHeight(): number {
        const values = this.$values;
        return isNaN(values[UIKeys.explicitHeight]) ?
            values[UIKeys.measuredHeight] : values[UIKeys.explicitHeight];
    }
    /**
     * @private
     * 获取组件的首选尺寸,常用于父级的measure()方法中
     * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
     */
    public getPreferredBounds(bounds: PIXI.Rectangle) {
        this.measureSizes();
        bounds.width = this.getPreferredUWidth();
        bounds.height = this.getPreferredUHeight();
        bounds.x = this.$values[UIKeys.x];
        bounds.y = this.$values[UIKeys.y];
        return bounds;
    }

    /**
    * @private
    * 标记提交过需要延迟应用的属性，以便在稍后屏幕更新期间调用该组件的 commitProperties() 方法。
    *
    * 例如，要更改文本颜色和大小，如果在更改颜色后立即进行更新，然后在设置大小后再更新大小，就有些浪费。
    * 同时更改两个属性后再使用新的大小和颜色一次性呈示文本，效率会更高。<p/>
    *
    * 通常，子类应覆盖 commitProperties() 方法，而不是覆盖此方法。
     */
    public invalidateProperties(): void {
        const values = this.$values;
        if (!values[UIKeys.invalidatePropertiesFlag]) {
            values[UIKeys.invalidatePropertiesFlag] = true;
            validatorShared.invalidateProperties(this);

        }
    }

    /**
    * @private
    * 标记提交过需要验证组件尺寸，以便在稍后屏幕更新期间调用该组件的 measure(),updatesize() 方法。
    */
    public invalidateSize(): void {
        const values = this.$values;
        if (!values[UIKeys.invalidateSizeFlag]) {
            values[UIKeys.invalidateSizeFlag] = true;
            validatorShared.invalidateSize(this);
        }
    }
    /**
    * @private
    * 标记需要验证显示列表，以便在稍后屏幕更新期间调用该组件的 updateDisplayList() 方法。
    */
    public invalidateDisplayList(): void {
        const values = this.$values;
        if (!values[UIKeys.invalidateDisplayListFlag]) {
            values[UIKeys.invalidateDisplayListFlag] = true;
            validatorShared.invalidateDisplayList(this);
        }
    }
    /**
     * @private
     * 标记父级容器的尺寸和显示列表为失效
     */
    protected invalidateParentLayout(): void {
        const parent = this.parent;
        if (!parent){
            return;
        } 
        if (parent instanceof DisplayLayoutAbstract) {
            parent.invalidateSize();
            parent.invalidateDisplayList();
        }
    }
    /**
     * @private
     * 设置组件的布局位置
     */
    public setPosition(x: number, y: number): void {
        const values = this.$values;
        values[UIKeys.x] = x;
        values[UIKeys.y] = y;
        this.updateTransform(); 
        this.emit(ComponentEvent.MOVE,this);
        
    }
    
    /**
     * @private
     * 设置组件的宽高。此方法不同于直接设置width,height属性，
     * 不会影响显式标记尺寸属性
     */
    public setActualSize(w: number, h: number): void {
        let change = false;
        const values = this.$values;
               
        if (values[UIKeys.width] !== w) {
            values[UIKeys.oldWidth] = values[UIKeys.width] ;
            values[UIKeys.width] = w;
            change = true;
        }
        if (values[UIKeys.height] !== h) {
            values[UIKeys.oldHeight] = values[UIKeys.height] ;
            values[UIKeys.height] = h;
            change = true;
        }

        if (change) {
            this.invalidateDisplayList();
            this.emit(ComponentEvent.RESIZE, this);
        }
    }

    /**
     * @private
     * 更新最终的组件宽高
     */
    private updateSize(): void {
        let unscaledWidth = 0;
        let unscaledHeight = 0;
        const values = this.$values;

        if (!isNaN(values[UIKeys.explicitWidth])) {
            unscaledWidth = values[UIKeys.explicitWidth];
        }
        else if(!isNaN(values[UIKeys.measuredWidth])){
            unscaledWidth = values[UIKeys.measuredWidth];
        }

        if (!isNaN(values[UIKeys.explicitHeight])) {
            unscaledHeight = values[UIKeys.explicitHeight];
        }
        else if (!isNaN(values[UIKeys.measuredHeight])){
            unscaledHeight = values[UIKeys.measuredHeight];
        }

        this.setActualSize(unscaledWidth,unscaledHeight);
    }

    public updateTransform(){
        this.container.setTransform(this.x + this.pivotX,this.y + this.pivotY,this.scaleX,this.scaleY,this.rotation*(Math.PI/180),this.skewX,this.skewY,this.pivotX,this.pivotY);
    }
    /**
     * 更新显示列表,子类重写，实现布局
     */
    protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {

    }

    /**
     * @private
     * 立即应用组件及其子项的所有属性
     */
    public validateNow(): void {
        if (this.parent)
            validatorShared.validateClient(this);
    }

    /**
     * @private
    * 验证并更新此对象的属性和布局，如果需要的话重绘对象。
    *
    * 通常只有当脚本执行完毕后，才会处理要求进行大量计算的处理属性。<p/>
    *
    * 例如，对 width 属性的设置可能会延迟，因为此设置需要重新计算这些对象的子项或父项的宽度。
    * 如果脚本多次设置了 width 属性，则延迟处理可防止进行多次处理。此方法允许您手动覆盖此行为。
     */
    public validateSizeNow(): void {
        this.validateSize(true);
        this.updateSize();
    }

    /**
     * @private
     * 距父级容器离左边距离
     */
    public get left(): TAny {
        return this.$values[UIKeys.left];
    }

    public set left(value: TAny) {
        if (!value || typeof value == "number") {
            value = +value;
        }
        else {
            value = value.toString().trim();
        }

        const values = this.$values;
        if (values[UIKeys.left] === value)
            return;
        values[UIKeys.left] = value;
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 距父级容器右边距离
     */
    public get right(): TAny {
        return this.$values[UIKeys.right];
    }

    public set right(value: TAny) {
        if (!value || typeof value == "number") {
            value = +value;
        }
        else {
            value = value.toString().trim();
        }
        const values = this.$values;
        if (values[UIKeys.right] === value)
            return;
        values[UIKeys.right] = value;
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 距父级容器顶部距离
     */
    public get top(): TAny {
        return this.$values[UIKeys.top];
    }

    public set top(value: TAny) {
        if (!value || typeof value == "number") {
            value = +value;
        }
        else {
            value = value.toString().trim();
        }
        const values = this.$values;
        if (values[UIKeys.top] === value)
            return;
        values[UIKeys.top] = value;
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 距父级容器底部距离
     */
    public get bottom(): TAny {
        return this.$values[UIKeys.bottom];
    }

    public set bottom(value: TAny) {
        if (!value || typeof value == "number") {
            value = +value;
        }
        else {
            value = value.toString().trim();
        }
        const values = this.$values;
        if (values[UIKeys.bottom] == value)
            return;
        values[UIKeys.bottom] = value;
        this.invalidateParentLayout();
    }


    /**
     * @private
     * 在父级容器中距水平中心位置的距离
     */
    public get horizontalCenter(): TAny {
        return this.$values[UIKeys.horizontalCenter];
    }

    public set horizontalCenter(value: TAny) {
        if (!value || typeof value == "number") {
            value = +value;
        }
        else {
            value = value.toString().trim();
        }
        const values = this.$values;
        if (values[UIKeys.horizontalCenter] === value)
            return;
        values[UIKeys.horizontalCenter] = value;
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 在父级容器中距竖直中心位置的距离
     */
    public get verticalCenter(): TAny {
        return this.$values[UIKeys.verticalCenter];
    }

    public set verticalCenter(value: TAny) {
        if (!value || typeof value == "number") {
            value = +value;
        }
        else {
            value = value.toString().trim();
        }
        const values = this.$values;
        if (values[UIKeys.verticalCenter] === value)
            return;
        values[UIKeys.verticalCenter] = value;
        this.invalidateParentLayout();
    }


    /**
     * @private
     * 相对父级容器宽度的百分比
     */
    public get percentWidth(): number {
        return this.$values[UIKeys.percentWidth];
    }

    public set percentWidth(value: number) {
        value = +value;
        const values = this.$values;
        if (values[UIKeys.percentWidth] === value)
            return;
        values[UIKeys.percentWidth] = value;
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 相对父级容器高度的百分比
     */
    public get percentHeight(): number {
        return this.$values[UIKeys.percentHeight];
    }

    public set percentHeight(value: number) {
        value = +value;
        const values = this.$values;
        if (values[UIKeys.percentHeight] === value)
            return;
        values[UIKeys.percentHeight] = value;
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 外部显式指定的宽度
     */
    public get explicitWidth(): number {
        return this.$values[UIKeys.explicitWidth];
    }

    /**
     * @private
     * 外部显式指定的高度
     */
    public get explicitHeight(): number {
        return this.$values[UIKeys.explicitHeight];
    }

    public get _width(): number {
        return this.$values[UIKeys.explicitWidth];
    }
    public get _height(): number {
        return this.$values[UIKeys.explicitHeight];
    }

    /**
     * @private
     * 组件宽度设置为undefined将使用组件的measure()方法自动计算尺寸
     */
    public get width(): number {
        //this.measureSizes();//不可以调用测量，有性能消耗，后期优化
        return this.getPreferredUWidth();
    }

    /**
     * @private
     *
     * @param value
     */
    public set width(value: number) {
        value = +value;
        const values = this.$values;
        if (value < 0 || values[UIKeys.width] === value && values[UIKeys.explicitWidth] === value)
            return;
        values[UIKeys.explicitWidth] = value;
        if ( isNaN(value))
            this.invalidateSize();
        this.invalidateProperties();
        this.invalidateDisplayList();
        this.invalidateParentLayout();
    }


    /**
     * @private
     * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
     */
    public get height(): number {
        //this.validateSizeNow();
        //this.measureSizes();//不可以调用测量，有性能消耗，后期优化
        return this.getPreferredUHeight();
    }

    /**
     * @private
     *
     * @param value
     */
    public set height(value: number) {
        value = +value;
        const values = this.$values;
        if (value < 0 || values[UIKeys.height] === value && values[UIKeys.explicitHeight] === value)
            return;
        values[UIKeys.explicitHeight] = value;
        if (isNaN(value))
            this.invalidateSize();
        this.invalidateProperties();
        this.invalidateDisplayList();
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
     */
    public get minWidth(): number {
        return this.$values[UIKeys.minWidth];
    }

    public set minWidth(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (value < 0 || values[UIKeys.minWidth] === value) {
            return;
        }
        values[UIKeys.minWidth] = value;
        this.invalidateSize();
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 组件的最大高度。同时影响测量和自动布局的尺寸。
     */
    public get maxWidth(): number {
        return this.$values[UIKeys.maxWidth];
    }

    public set maxWidth(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (value < 0 || values[UIKeys.maxWidth] === value) {
            return;
        }
        values[UIKeys.maxWidth] = value;
        this.invalidateSize();
        this.invalidateParentLayout();
    }

    /**
     * @private
     * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
     */
    public get minHeight(): number {
        return this.$values[UIKeys.minHeight];
    }

    public set minHeight(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (value < 0 || values[UIKeys.minHeight] === value) {
            return;
        }
        values[UIKeys.minHeight] = value;
        this.invalidateSize();
        this.invalidateParentLayout();
    }


    /**
     * @private
     * 组件的最大高度,同时影响测量和自动布局的尺寸。
     */
    public get maxHeight(): number {
        return this.$values[UIKeys.maxHeight];
    }

    public set maxHeight(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (value < 0 || values[UIKeys.maxHeight] === value) {
            return;
        }
        values[UIKeys.maxHeight] = value;
        this.invalidateSize();
        this.invalidateParentLayout();
    }

    public get scaleX() {
        return this.$values[UIKeys.scaleX];
    }

    public set scaleX(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.scaleX] === value) {
            return;
        }
        if (value !== this.container.scale.x) {
            values[UIKeys.scaleX] = value;
            this.invalidateProperties();
            this.invalidateSize();
            this.invalidateDisplayList();
            this.invalidateParentLayout();
        }
    }

    public get scaleY() {
        return this.$values[UIKeys.scaleY];
    }

    public set scaleY(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.scaleY] === value) {
            return;
        }
        if (value !== this.container.scale.y) {
            values[UIKeys.scaleY] = value;
            this.invalidateProperties();
            this.invalidateSize();
            this.invalidateDisplayList();
            this.invalidateParentLayout();
        }
    }


    public get x() {
        return this.$values[UIKeys.x];
    }
    public set x(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.x] === value) {
            return;
        }
        values[UIKeys.x] = value;
        if (this.container.x !== value) {
            this.container.x = value;
            this.invalidateParentLayout();
        }
    }

    public get y() {
        return this.$values[UIKeys.y];
    }

    public set y(value: number) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.y] === value) {
            return;
        }
        values[UIKeys.y] = value;
        if (value !== this.container.y) {
            this.container.y = value;
            this.invalidateParentLayout();
        }
    }


    public get skewX() {
        return this.$values[UIKeys.skewX];
    }
    public set skewX(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.skewX] === value) {
            return;
        }
        values[UIKeys.skewX] = value;
        this.invalidateDisplayList();
    }

    public get skewY() {
        return this.$values[UIKeys.skewY];
    }
    public set skewY(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.skewY] === value) {
            return;
        }
        values[UIKeys.skewY] = value;
        this.invalidateDisplayList();
    }

    public get pivotX() {
        return this.$values[UIKeys.pivotX];
    }
    public set pivotX(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.pivotX] === value) {
            return;
        }
        values[UIKeys.pivotX] = value;
        this.invalidateDisplayList();
    }

    public get pivotY() {
        return this.$values[UIKeys.pivotY];
    }
    public set pivotY(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.pivotY] === value) {
            return;
        }
        values[UIKeys.pivotY] = value;
        this.invalidateDisplayList();
    }

    public get rotation() {
        return this.$values[UIKeys.rotation];
    }
    public set rotation(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.rotation] === value) {
            return;
        }
        values[UIKeys.rotation] = value;
        this.invalidateDisplayList();
    }

    /**
     *  =不可用= 设置索引层级，每次父级变化时，会排序 （未实现）
     */
    public get zIndex(){
        return this.$values[UIKeys.zIndex];
    }
    public set zIndex(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.zIndex] === value) {
            return;
        }
        values[UIKeys.zIndex] = value;
        this.invalidateParentLayout();
    }


}