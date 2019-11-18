var vfgui =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vf-gui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** 工具类 */
const Utils = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
exports.Utils = Utils;
/** UI舞台，最顶级的层 展示所有UI组件 */
const Stage_1 = __webpack_require__(/*! ./core/Stage */ "./src/core/Stage.ts");
exports.Stage = Stage_1.Stage;
/** UI基础显示对象，一般不会直接使用，只作为类型推断 */
const DisplayObject_1 = __webpack_require__(/*! ./core/DisplayObject */ "./src/core/DisplayObject.ts");
exports.DisplayObject = DisplayObject_1.DisplayObject;
/** 心跳，需要在初始化完成后，启动心跳更新 */
const Ticker_1 = __webpack_require__(/*! ./core/Ticker */ "./src/core/Ticker.ts");
exports.TickerShared = Ticker_1.shared;
/**
 * 基础容器
 *
 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
 *
 * @example let container = new gui.Container();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestContainer
 */
const Container_1 = __webpack_require__(/*! ./display/Container */ "./src/display/Container.ts");
exports.Container = Container_1.Container;
/**
 * 滚动容器
 *
 * @example let scrollingContainer = new gui.ScrollingContainer();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
 */
const ScrollingContainer_1 = __webpack_require__(/*! ./display/ScrollingContainer */ "./src/display/ScrollingContainer.ts");
exports.ScrollingContainer = ScrollingContainer_1.ScrollingContainer;
/**
 * 图片
 *
 * @example let image = new gui.Image();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestImage
 */
const Image_1 = __webpack_require__(/*! ./display/Image */ "./src/display/Image.ts");
exports.Image = Image_1.Image;
/**
 * 序列图动画
 *
 * 支持使用texturepacker导出以及处理轴点
 *
 * @example let spriteAnimated = new gui.SpriteAnimated();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSpriteAnimated
 */
const SpriteAnimated_1 = __webpack_require__(/*! ./display/SpriteAnimated */ "./src/display/SpriteAnimated.ts");
exports.SpriteAnimated = SpriteAnimated_1.SpriteAnimated;
/**
 * 文本
 *
 * 中文换行特殊处理 xxxx.style.breakWords = true;
 *
 * 文本没有宽高，自适应
 *
 * @example let label = new gui.Label();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestLabel
 */
const Label_1 = __webpack_require__(/*! ./display/Label */ "./src/display/Label.ts");
exports.Label = Label_1.Label;
/**
 * 文本输入
 *
 * @example let textInput = new gui.TextInput(true|false);//单行或多行
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTextInput
 */
const TextInput_1 = __webpack_require__(/*! ./display/TextInput */ "./src/display/TextInput.ts");
exports.TextInput = TextInput_1.TextInput;
/**
 * 滑动条/进度条
 *
 * @example let slider = new gui.Slider();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSlider
 */
const Slider_1 = __webpack_require__(/*! ./display/Slider */ "./src/display/Slider.ts");
exports.Slider = Slider_1.Slider;
/**
 * 按钮
 *
 * @example let button = new gui.Button();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestButton
 */
const Button_1 = __webpack_require__(/*! ./display/Button */ "./src/display/Button.ts");
exports.Button = Button_1.Button;
/**
 * 单选\复选框
 *
 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
 *
 * @example let checkBox = new gui.CheckBox();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestCheckBox
 */
const CheckBox_1 = __webpack_require__(/*! ./display/CheckBox */ "./src/display/CheckBox.ts");
exports.CheckBox = CheckBox_1.CheckBox;
/**
 * 绘制矩形或圆角矩形
 *
 * @example let rect = new gui.Rect();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
 */
const Rect_1 = __webpack_require__(/*! ./display/Rect */ "./src/display/Rect.ts");
exports.Rect = Rect_1.Rect;
/**
 * 矢量绘制
 *
 * @example let graphics = new gui.Graphics();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
const Graphics_1 = __webpack_require__(/*! ./display/Graphics */ "./src/display/Graphics.ts");
exports.Graphics = Graphics_1.Graphics;
/**
 * 音频播放组件
 *
 * @example let sound = new gui.Sound();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSound
 */
const Sound_1 = __webpack_require__(/*! ./display/Sound */ "./src/display/Sound.ts");
exports.Sound = Sound_1.Sound;
/**
 * 完整的缓动曲线列表
 *
 * @example gui.Easing.Linear.None;
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
 */
const Easing_1 = __webpack_require__(/*! ./tween/Easing */ "./src/tween/Easing.ts");
exports.Easing = Easing_1.Easing;
/**
 * 缓动动画
 *
 * @example let tween = new gui.Tween(myObject).to({width:'300px'}, 2000).start()
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
 */
const Tween_1 = __webpack_require__(/*! ./tween/Tween */ "./src/tween/Tween.ts");
exports.Tween = Tween_1.Tween;
/**
 * 基于帧的时间轴控制类
 *
 * @example let timeline = new gui.Timeline();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
const Timeline_1 = __webpack_require__(/*! ./tween/Timeline */ "./src/tween/Timeline.ts");
exports.Timeline = Timeline_1.Timeline;
/**
 * 事件绑定类，非继承于inputbase的组件是没有任何交互事件，需单独绑定
 */
const Interaction = __webpack_require__(/*! ./interaction/Index */ "./src/interaction/Index.ts");
exports.Interaction = Interaction;
/**
 * 事件名
 */
const Event = __webpack_require__(/*! ./event/Index */ "./src/event/Index.ts");
exports.Event = Event;


/***/ }),

/***/ "./src/core/ContainerBase.ts":
/*!***********************************!*\
  !*** ./src/core/ContainerBase.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** 容器扩展类，后续便于做延时渲染 */
class ContainerBase extends PIXI.Container {
    constructor() {
        super();
        this.isEmitRender = false;
    }
    render(renderer) {
        if (this.isEmitRender) {
            this.emit("renderChange", renderer);
        }
        super.render(renderer);
    }
}
exports.ContainerBase = ContainerBase;


/***/ }),

/***/ "./src/core/DisplayLayoutAbstract.ts":
/*!*******************************************!*\
  !*** ./src/core/DisplayLayoutAbstract.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIKeys = __webpack_require__(/*! ./DisplayLayoutKeys */ "./src/core/DisplayLayoutKeys.ts");
const DisplayLayoutValidator_1 = __webpack_require__(/*! ./DisplayLayoutValidator */ "./src/core/DisplayLayoutValidator.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const DisplayObjectAbstract_1 = __webpack_require__(/*! ./DisplayObjectAbstract */ "./src/core/DisplayObjectAbstract.ts");
exports.$tempLocalBounds = new PIXI.Rectangle();
/**
 * UI 布局的基础属性类
 */
class DisplayLayoutAbstract extends DisplayObjectAbstract_1.DisplayObjectAbstract {
    constructor() {
        super();
        this.isContainer = false;
        /**
         * @private
         */
        this.$values = {};
        this.includeInLayout = true;
        this.initializeUIValues();
    }
    /**
     * @private
     * 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
     */
    initializeUIValues() {
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
    checkInvalidateFlag() {
        const values = this.$values;
        if (values[UIKeys.invalidatePropertiesFlag]) {
            DisplayLayoutValidator_1.default.invalidateProperties(this);
        }
        if (values[UIKeys.invalidateSizeFlag]) {
            DisplayLayoutValidator_1.default.invalidateSize(this);
        }
        if (values[UIKeys.invalidateDisplayListFlag]) {
            DisplayLayoutValidator_1.default.invalidateDisplayList(this);
        }
        this.validateSize();
    }
    /**
     * @private
     * 验证组件的属性
     */
    validateProperties() {
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
    validateSize(recursive) {
        if (recursive) {
            const children = this.uiChildren;
            if (children) {
                const length = children.length;
                for (let i = 0; i < length; i++) {
                    const child = children[i];
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
            if (this.parent == undefined) {
                return;
            }
            values[UIKeys.invalidateSizeFlag] = false;
        }
    }
    /**
     * @private
     * 验证子项的位置和大小，并绘制其他可视内容
     */
    validateDisplayList() {
        if (this.parent == undefined) {
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
    commitProperties() {
    }
    /**
     * @private
     * 测量组件尺寸
     */
    measure() {
        this.container.getLocalBounds(exports.$tempLocalBounds);
        this.setMeasuredSize(exports.$tempLocalBounds.width, exports.$tempLocalBounds.height);
    }
    /**
     * @private
     * 测量组件尺寸，返回尺寸是否发生变化
     */
    measureSizes() {
        let changed = false;
        const values = this.$values;
        if (!values[UIKeys.invalidateSizeFlag])
            return changed;
        this.measure();
        const parentWidth = this.parent ? this.parent.width : 1;
        const parentHeight = this.parent ? this.parent.height : 1;
        const maxWidth = Utils_1.formatRelative(values[UIKeys.maxWidth], parentWidth);
        const maxHeight = Utils_1.formatRelative(values[UIKeys.maxHeight], parentHeight);
        const minWidth = Utils_1.formatRelative(values[UIKeys.minWidth], parentWidth);
        const minHeight = Utils_1.formatRelative(values[UIKeys.minHeight], parentHeight);
        //显示设置宽高，会忽略最大与最小值
        if (isNaN(values[UIKeys.explicitWidth]) || isNaN(values[UIKeys.explicitHeight])) {
            if (!isNaN(values[UIKeys.percentWidth])) {
                values[UIKeys.measuredWidth] = Math.ceil(values[UIKeys.percentWidth] * parentWidth);
            }
            if (!isNaN(values[UIKeys.percentHeight])) {
                values[UIKeys.measuredHeight] = Math.ceil(values[UIKeys.percentHeight] * parentHeight);
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
                values[UIKeys.measuredHeight] = maxHeight;
            }
        }
        else {
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
                values[UIKeys.explicitHeight] = maxHeight;
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
    setMeasuredSize(width, height) {
        const values = this.$values;
        values[UIKeys.measuredWidth] = Math.ceil(+width || 0);
        values[UIKeys.measuredHeight] = Math.ceil(+height || 0);
    }
    /**
     * @private
     *
     * @returns
     */
    getPreferredUWidth() {
        const values = this.$values;
        return isNaN(values[UIKeys.explicitWidth]) ?
            values[UIKeys.measuredWidth] : values[UIKeys.explicitWidth];
    }
    /**
     * @private
     */
    getPreferredUHeight() {
        const values = this.$values;
        return isNaN(values[UIKeys.explicitHeight]) ?
            values[UIKeys.measuredHeight] : values[UIKeys.explicitHeight];
    }
    /**
     * @private
     * 获取组件的首选尺寸,常用于父级的measure()方法中
     * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
     */
    getPreferredBounds(bounds) {
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
    invalidateProperties() {
        const values = this.$values;
        if (!values[UIKeys.invalidatePropertiesFlag]) {
            values[UIKeys.invalidatePropertiesFlag] = true;
            DisplayLayoutValidator_1.default.invalidateProperties(this);
        }
    }
    /**
    * @private
    * 标记提交过需要验证组件尺寸，以便在稍后屏幕更新期间调用该组件的 measure(),updatesize() 方法。
    */
    invalidateSize() {
        const values = this.$values;
        if (!values[UIKeys.invalidateSizeFlag]) {
            values[UIKeys.invalidateSizeFlag] = true;
            DisplayLayoutValidator_1.default.invalidateSize(this);
        }
    }
    /**
    * @private
    * 标记需要验证显示列表，以便在稍后屏幕更新期间调用该组件的 updateDisplayList() 方法。
    */
    invalidateDisplayList() {
        const values = this.$values;
        if (!values[UIKeys.invalidateDisplayListFlag]) {
            values[UIKeys.invalidateDisplayListFlag] = true;
            DisplayLayoutValidator_1.default.invalidateDisplayList(this);
        }
    }
    /**
     * @private
     * 标记父级容器的尺寸和显示列表为失效
     */
    invalidateParentLayout() {
        const parent = this.parent;
        if (!parent) {
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
    setPosition(x, y) {
        const values = this.$values;
        values[UIKeys.x] = x;
        values[UIKeys.y] = y;
        this.updateTransform();
        this.emit(Index_1.ComponentEvent.MOVE, this);
    }
    /**
     * @private
     * 设置组件的宽高。此方法不同于直接设置width,height属性，
     * 不会影响显式标记尺寸属性
     */
    setActualSize(w, h) {
        let change = false;
        const values = this.$values;
        if (values[UIKeys.width] !== w) {
            values[UIKeys.oldWidth] = values[UIKeys.width];
            values[UIKeys.width] = w;
            change = true;
        }
        if (values[UIKeys.height] !== h) {
            values[UIKeys.oldHeight] = values[UIKeys.height];
            values[UIKeys.height] = h;
            change = true;
        }
        if (change) {
            this.invalidateDisplayList();
            this.emit(Index_1.ComponentEvent.RESIZE, this);
        }
    }
    /**
     * @private
     * 更新最终的组件宽高
     */
    updateSize() {
        let unscaledWidth = 0;
        let unscaledHeight = 0;
        const values = this.$values;
        if (!isNaN(values[UIKeys.explicitWidth])) {
            unscaledWidth = values[UIKeys.explicitWidth];
        }
        else if (!isNaN(values[UIKeys.measuredWidth])) {
            unscaledWidth = values[UIKeys.measuredWidth];
        }
        if (!isNaN(values[UIKeys.explicitHeight])) {
            unscaledHeight = values[UIKeys.explicitHeight];
        }
        else if (!isNaN(values[UIKeys.measuredHeight])) {
            unscaledHeight = values[UIKeys.measuredHeight];
        }
        this.setActualSize(unscaledWidth, unscaledHeight);
    }
    updateTransform() {
        this.container.setTransform(this.x + this.pivotX, this.y + this.pivotY, this.scaleX, this.scaleY, this.rotation * (Math.PI / 180), this.skewX, this.skewY, this.pivotX, this.pivotY);
    }
    /**
     * 更新显示列表,子类重写，实现布局
     */
    updateDisplayList(unscaledWidth, unscaledHeight) {
    }
    /**
     * @private
     * 立即应用组件及其子项的所有属性
     */
    validateNow() {
        if (this.parent)
            DisplayLayoutValidator_1.default.validateClient(this);
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
    validateSizeNow() {
        this.validateSize(true);
        this.updateSize();
    }
    /**
     * @private
     * 距父级容器离左边距离
     */
    get left() {
        return this.$values[UIKeys.left];
    }
    set left(value) {
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
    get right() {
        return this.$values[UIKeys.right];
    }
    set right(value) {
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
    get top() {
        return this.$values[UIKeys.top];
    }
    set top(value) {
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
    get bottom() {
        return this.$values[UIKeys.bottom];
    }
    set bottom(value) {
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
    get horizontalCenter() {
        return this.$values[UIKeys.horizontalCenter];
    }
    set horizontalCenter(value) {
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
    get verticalCenter() {
        return this.$values[UIKeys.verticalCenter];
    }
    set verticalCenter(value) {
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
    get percentWidth() {
        return this.$values[UIKeys.percentWidth];
    }
    set percentWidth(value) {
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
    get percentHeight() {
        return this.$values[UIKeys.percentHeight];
    }
    set percentHeight(value) {
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
    get explicitWidth() {
        return this.$values[UIKeys.explicitWidth];
    }
    /**
     * @private
     * 外部显式指定的高度
     */
    get explicitHeight() {
        return this.$values[UIKeys.explicitHeight];
    }
    get _width() {
        return this.$values[UIKeys.explicitWidth];
    }
    get _height() {
        return this.$values[UIKeys.explicitHeight];
    }
    /**
     * @private
     * 组件宽度设置为undefined将使用组件的measure()方法自动计算尺寸
     */
    get width() {
        //this.measureSizes();//不可以调用测量，有性能消耗，后期优化
        return this.getPreferredUWidth();
    }
    /**
     * @private
     *
     * @param value
     */
    set width(value) {
        value = +value;
        const values = this.$values;
        if (value < 0 || values[UIKeys.width] === value && values[UIKeys.explicitWidth] === value)
            return;
        values[UIKeys.explicitWidth] = value;
        if (isNaN(value))
            this.invalidateSize();
        this.invalidateProperties();
        this.invalidateDisplayList();
        this.invalidateParentLayout();
    }
    /**
     * @private
     * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
     */
    get height() {
        //this.validateSizeNow();
        //this.measureSizes();//不可以调用测量，有性能消耗，后期优化
        return this.getPreferredUHeight();
    }
    /**
     * @private
     *
     * @param value
     */
    set height(value) {
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
    get minWidth() {
        return this.$values[UIKeys.minWidth];
    }
    set minWidth(value) {
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
    get maxWidth() {
        return this.$values[UIKeys.maxWidth];
    }
    set maxWidth(value) {
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
    get minHeight() {
        return this.$values[UIKeys.minHeight];
    }
    set minHeight(value) {
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
    get maxHeight() {
        return this.$values[UIKeys.maxHeight];
    }
    set maxHeight(value) {
        value = +value || 0;
        const values = this.$values;
        if (value < 0 || values[UIKeys.maxHeight] === value) {
            return;
        }
        values[UIKeys.maxHeight] = value;
        this.invalidateSize();
        this.invalidateParentLayout();
    }
    get scaleX() {
        return this.$values[UIKeys.scaleX];
    }
    set scaleX(value) {
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
    get scaleY() {
        return this.$values[UIKeys.scaleY];
    }
    set scaleY(value) {
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
    get x() {
        return this.$values[UIKeys.x];
    }
    set x(value) {
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
    get y() {
        return this.$values[UIKeys.y];
    }
    set y(value) {
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
    get skewX() {
        return this.$values[UIKeys.skewX];
    }
    set skewX(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.skewX] === value) {
            return;
        }
        values[UIKeys.skewX] = value;
        this.invalidateDisplayList();
    }
    get skewY() {
        return this.$values[UIKeys.skewY];
    }
    set skewY(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.skewY] === value) {
            return;
        }
        values[UIKeys.skewY] = value;
        this.invalidateDisplayList();
    }
    get pivotX() {
        return this.$values[UIKeys.pivotX];
    }
    set pivotX(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.pivotX] === value) {
            return;
        }
        values[UIKeys.pivotX] = value;
        this.invalidateDisplayList();
    }
    get pivotY() {
        return this.$values[UIKeys.pivotY];
    }
    set pivotY(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.pivotY] === value) {
            return;
        }
        values[UIKeys.pivotY] = value;
        this.invalidateDisplayList();
    }
    get rotation() {
        return this.$values[UIKeys.rotation];
    }
    set rotation(value) {
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
    get zIndex() {
        return this.$values[UIKeys.zIndex];
    }
    set zIndex(value) {
        value = +value || 0;
        const values = this.$values;
        if (values[UIKeys.zIndex] === value) {
            return;
        }
        values[UIKeys.zIndex] = value;
        this.invalidateParentLayout();
    }
}
exports.DisplayLayoutAbstract = DisplayLayoutAbstract;


/***/ }),

/***/ "./src/core/DisplayLayoutKeys.ts":
/*!***************************************!*\
  !*** ./src/core/DisplayLayoutKeys.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//states
/** 标记属性失效 */
exports.invalidatePropertiesFlag = Symbol("invalidatePropertiesFlag");
/** 标记大小失效 */
exports.invalidateSizeFlag = Symbol("invalidateSizeFlag");
/** 标记显示失效 */
exports.invalidateDisplayListFlag = Symbol("invalidateDisplayListFlag");
//Properties
exports.explicitWidth = Symbol("explicitWidth");
exports.explicitHeight = Symbol("explicitHeight");
exports.width = Symbol("width");
exports.height = Symbol("height");
exports.minWidth = Symbol("minWidth");
exports.maxWidth = Symbol("maxWidth");
exports.minHeight = Symbol("minHeight");
exports.maxHeight = Symbol("maxHeight");
exports.percentWidth = Symbol("percentWidth");
exports.percentHeight = Symbol("percentHeight");
exports.scaleX = Symbol("scaleX");
exports.scaleY = Symbol("scaleY");
exports.x = Symbol("x");
exports.y = Symbol("y");
exports.skewX = Symbol("skewX");
exports.skewY = Symbol("skewY");
exports.pivotX = Symbol("pivotX");
exports.pivotY = Symbol("pivotY");
exports.rotation = Symbol("rotation");
exports.zIndex = Symbol("zIndex");
exports.measuredWidth = Symbol("measuredWidth");
exports.measuredHeight = Symbol("measuredHeight");
exports.oldPreferWidth = Symbol("oldPreferWidth");
exports.oldPreferHeight = Symbol("oldPreferHeight");
exports.oldX = Symbol("oldX");
exports.oldY = Symbol("oldY");
exports.oldWidth = Symbol("oldWidth");
exports.oldHeight = Symbol("oldHeight");
//Styles
exports.left = Symbol("left");
exports.right = Symbol("right");
exports.top = Symbol("top");
exports.bottom = Symbol("bottom");
exports.horizontalCenter = Symbol("horizontalCenter");
exports.verticalCenter = Symbol("verticalCenter");


/***/ }),

/***/ "./src/core/DisplayLayoutValidator.ts":
/*!********************************************!*\
  !*** ./src/core/DisplayLayoutValidator.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Ticker_1 = __webpack_require__(/*! ./Ticker */ "./src/core/Ticker.ts");
/**
 * @private
 * 列表项
 */
class DepthBin {
    constructor() {
        this.map = {};
        this.items = [];
        this.length = 0;
    }
    insert(client) {
        const hashCode = client.uuid;
        if (this.map[hashCode]) {
            return;
        }
        this.map[hashCode] = true;
        this.length++;
        this.items.push(client);
    }
    pop() {
        const client = this.items.pop(); //使用pop会比shift有更高的性能，避免索引整体重置。
        if (client) {
            this.length--;
            if (this.length === 0) {
                this.map = {}; //清空所有key防止内存泄露
            }
            else {
                this.map[client.uuid] = false;
            }
        }
        return client;
    }
    remove(client) {
        const index = this.items.indexOf(client);
        if (index >= 0) {
            this.items.splice(index, 1);
            this.length--;
            if (this.length === 0) {
                this.map = {}; //清空所有key防止内存泄露
            }
            else {
                this.map[client.uuid] = false;
            }
        }
    }
}
/**
 * @private
 * 显示列表嵌套深度排序队列
 */
class DepthQueue {
    constructor() {
        /**
         * 深度队列
         */
        this.depthBins = {};
        /**
         * 最小深度
         */
        this.minDepth = 0;
        /**
         * 最大深度
         */
        this.maxDepth = -1;
    }
    /**
     * 插入一个元素
     */
    insert(client) {
        const depth = client.$nestLevel;
        if (this.maxDepth < this.minDepth) {
            this.minDepth = this.maxDepth = depth;
        }
        else {
            if (depth < this.minDepth)
                this.minDepth = depth;
            if (depth > this.maxDepth)
                this.maxDepth = depth;
        }
        let bin = this.depthBins[depth];
        if (!bin) {
            bin = this.depthBins[depth] = new DepthBin();
        }
        bin.insert(client);
    }
    /**
     * 从队列尾弹出深度最大的一个对象
     */
    pop() {
        let client;
        const minDepth = this.minDepth;
        if (minDepth <= this.maxDepth) {
            let bin = this.depthBins[this.maxDepth];
            while (!bin || bin.length === 0) {
                this.maxDepth--;
                if (this.maxDepth < minDepth)
                    return undefined;
                bin = this.depthBins[this.maxDepth];
            }
            client = bin.pop();
            while (!bin || bin.length == 0) {
                this.maxDepth--;
                if (this.maxDepth < minDepth)
                    break;
                bin = this.depthBins[this.maxDepth];
            }
        }
        return client;
    }
    /**
     * 从队列首弹出深度最小的一个对象
     */
    shift() {
        let client;
        const maxDepth = this.maxDepth;
        if (this.minDepth <= maxDepth) {
            let bin = this.depthBins[this.minDepth];
            while (!bin || bin.length === 0) {
                this.minDepth++;
                if (this.minDepth > maxDepth)
                    return undefined;
                bin = this.depthBins[this.minDepth];
            }
            client = bin.pop();
            while (!bin || bin.length == 0) {
                this.minDepth++;
                if (this.minDepth > maxDepth)
                    break;
                bin = this.depthBins[this.minDepth];
            }
        }
        return client;
    }
    /**
     * 移除大于等于指定组件层级的元素中最大的元素
     */
    removeLargestChild(client) {
        const hashCode = client.uuid;
        const nestLevel = client.$nestLevel;
        let max = this.maxDepth;
        const min = nestLevel;
        while (min <= max) {
            const bin = this.depthBins[max];
            if (bin && bin.length > 0) {
                if (max === nestLevel) {
                    if (bin.map[hashCode]) {
                        bin.remove(client);
                        return client;
                    }
                }
                else if (client["isContainer"]) {
                    const items = bin.items;
                    const length = bin.length;
                    for (let i = 0; i < length; i++) {
                        const value = items[i];
                        if (client.contains(value)) {
                            bin.remove(value);
                            return value;
                        }
                    }
                }
                else {
                    break;
                }
                max--;
            }
            else {
                if (max == this.maxDepth) {
                    this.maxDepth--;
                }
                max--;
                if (max < min)
                    break;
            }
        }
        return undefined;
    }
    /**
     * 移除大于等于指定组件层级的元素中最小的元素
     */
    removeSmallestChild(client) {
        const nestLevel = client.$nestLevel;
        let min = nestLevel;
        const max = this.maxDepth;
        const hashCode = client.uuid;
        while (min <= max) {
            const bin = this.depthBins[min];
            if (bin && bin.length > 0) {
                if (min === nestLevel) {
                    if (bin.map[hashCode]) {
                        bin.remove(client);
                        return client;
                    }
                }
                else if (client["isContainer"]) {
                    const items = bin.items;
                    const length = bin.length;
                    for (let i = 0; i < length; i++) {
                        const value = items[i];
                        if (client.contains(value)) {
                            bin.remove(value);
                            return value;
                        }
                    }
                }
                else {
                    break;
                }
                min++;
            }
            else {
                if (min == this.minDepth)
                    this.minDepth++;
                min++;
                if (min > max)
                    break;
            }
        }
        return undefined;
    }
    /**
     * 队列是否为空
     */
    isEmpty() {
        return this.minDepth > this.maxDepth;
    }
}
/**
 * @private
 * 失效验证管理器
 */
class UIValidator extends PIXI.utils.EventEmitter {
    /**
     * @private
     * 创建一个Validator对象
     */
    constructor() {
        super();
        /**
         * @private
         */
        this.targetLevel = Infinity;
        /**
         * @private
         */
        this.invalidatePropertiesFlag = false;
        /**
         * @private
         */
        this.invalidateClientPropertiesFlag = false;
        /**
         * @private
         */
        this.invalidatePropertiesQueue = new DepthQueue();
        /**
         * @private
         */
        this.invalidateSizeFlag = false;
        /**
         * @private
         */
        this.invalidateClientSizeFlag = false;
        /**
         * @private
         */
        this.invalidateSizeQueue = new DepthQueue();
        /**
         * @private
         */
        this.invalidateDisplayListFlag = false;
        /**
         * @private
         */
        this.invalidateDisplayListQueue = new DepthQueue();
        /**
         * @private
         * 是否已经添加了事件监听
         */
        this.listenersAttached = false;
    }
    /**
     * @private
     * 标记组件属性失效
     */
    invalidateProperties(target) {
        if (!this.invalidatePropertiesFlag) {
            this.invalidatePropertiesFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        if (this.targetLevel <= target.$nestLevel)
            this.invalidateClientPropertiesFlag = true;
        this.invalidatePropertiesQueue.insert(target);
    }
    /**
     * @private
     * 验证失效的属性
     */
    validateProperties() {
        const queue = this.invalidatePropertiesQueue;
        let target = queue.shift();
        while (target) {
            if (target.parent) {
                target.validateProperties();
            }
            target = queue.shift();
        }
        if (queue.isEmpty())
            this.invalidatePropertiesFlag = false;
    }
    /**
     * @private
     * 标记需要重新测量尺寸
     */
    invalidateSize(target) {
        if (!this.invalidateSizeFlag) {
            this.invalidateSizeFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        if (this.targetLevel <= target.$nestLevel)
            this.invalidateClientSizeFlag = true;
        this.invalidateSizeQueue.insert(target);
    }
    /**
     * @private
     * 测量尺寸
     */
    validateSize() {
        const queue = this.invalidateSizeQueue;
        let target = queue.pop();
        while (target) {
            if (target.parent) {
                target.validateSize();
            }
            target = queue.pop();
        }
        if (queue.isEmpty())
            this.invalidateSizeFlag = false;
    }
    /**
     * @private
     * 标记需要重新布局
     */
    invalidateDisplayList(client) {
        if (!this.invalidateDisplayListFlag) {
            this.invalidateDisplayListFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        this.invalidateDisplayListQueue.insert(client);
    }
    /**
     * @private
     * 重新布局
     */
    validateDisplayList() {
        const queue = this.invalidateDisplayListQueue;
        let client = queue.shift();
        while (client) {
            if (client.parent) {
                client.validateDisplayList();
            }
            client = queue.shift();
        }
        if (queue.isEmpty())
            this.invalidateDisplayListFlag = false;
    }
    /**
     * @private
     * 添加事件监听
     */
    attachListeners() {
        Ticker_1.default.addUpdateEvent(this.doPhasedInstantiationCallBack, this);
        this.listenersAttached = true;
    }
    /**
     * @private
     * 执行属性应用
     */
    doPhasedInstantiationCallBack() {
        Ticker_1.default.removeUpdateEvent(this.doPhasedInstantiationCallBack, this);
        this.doPhasedInstantiation();
    }
    /**
     * @private
     */
    doPhasedInstantiation() {
        if (this.invalidatePropertiesFlag) {
            this.validateProperties();
        }
        if (this.invalidateSizeFlag) {
            this.validateSize();
        }
        if (this.invalidateDisplayListFlag) {
            this.validateDisplayList();
        }
        if (this.invalidatePropertiesFlag ||
            this.invalidateSizeFlag ||
            this.invalidateDisplayListFlag) {
            this.attachListeners();
        }
        else {
            this.listenersAttached = false;
        }
    }
    /**
     * @private
     * 使大于等于指定组件层级的元素立即应用属性
     * @param target 要立即应用属性的组件
     */
    validateClient(target) {
        let obj;
        let done = false;
        const oldTargetLevel = this.targetLevel;
        if (this.targetLevel === Infinity)
            this.targetLevel = target.$nestLevel;
        const propertiesQueue = this.invalidatePropertiesQueue;
        const sizeQueue = this.invalidateSizeQueue;
        const displayListQueue = this.invalidateDisplayListQueue;
        while (!done) {
            done = true;
            obj = propertiesQueue.removeSmallestChild(target);
            while (obj) {
                if (obj.parent) {
                    obj.validateProperties();
                }
                obj = propertiesQueue.removeSmallestChild(target);
            }
            if (propertiesQueue.isEmpty()) {
                this.invalidatePropertiesFlag = false;
            }
            this.invalidateClientPropertiesFlag = false;
            obj = sizeQueue.removeLargestChild(target);
            while (obj) {
                if (obj.parent) {
                    obj.validateSize();
                }
                if (this.invalidateClientPropertiesFlag) {
                    obj = (propertiesQueue.removeSmallestChild(target));
                    if (obj) {
                        propertiesQueue.insert(obj);
                        done = false;
                        break;
                    }
                }
                obj = sizeQueue.removeLargestChild(target);
            }
            if (sizeQueue.isEmpty()) {
                this.invalidateSizeFlag = false;
            }
            this.invalidateClientPropertiesFlag = false;
            this.invalidateClientSizeFlag = false;
            obj = displayListQueue.removeSmallestChild(target);
            while (obj) {
                if (obj.parent) {
                    obj.validateDisplayList();
                }
                if (this.invalidateClientPropertiesFlag) {
                    obj = propertiesQueue.removeSmallestChild(target);
                    if (obj) {
                        propertiesQueue.insert(obj);
                        done = false;
                        break;
                    }
                }
                if (this.invalidateClientSizeFlag) {
                    obj = sizeQueue.removeLargestChild(target);
                    if (obj) {
                        sizeQueue.insert(obj);
                        done = false;
                        break;
                    }
                }
                obj = displayListQueue.removeSmallestChild(target);
            }
            if (displayListQueue.isEmpty()) {
                this.invalidateDisplayListFlag = false;
            }
        }
        if (oldTargetLevel === Infinity) {
            this.targetLevel = Infinity;
        }
    }
}
const validatorShared = new UIValidator();
exports.default = validatorShared;


/***/ }),

/***/ "./src/core/DisplayObject.ts":
/*!***********************************!*\
  !*** ./src/core/DisplayObject.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const DisplayLayoutAbstract_1 = __webpack_require__(/*! ./DisplayLayoutAbstract */ "./src/core/DisplayLayoutAbstract.ts");
const CSSStyle_1 = __webpack_require__(/*! ../layout/CSSStyle */ "./src/layout/CSSStyle.ts");
const CSSLayout_1 = __webpack_require__(/*! ../layout/CSSLayout */ "./src/layout/CSSLayout.ts");
const UIBaseDrag_1 = __webpack_require__(/*! ./plugs/UIBaseDrag */ "./src/core/plugs/UIBaseDrag.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @since 1.0.0
 */
class DisplayObject extends DisplayLayoutAbstract_1.DisplayLayoutAbstract {
    /**
     * 构造函数
     */
    constructor() {
        super();
        /**
         * 插件列表
         */
        this.plugs = new Map();
        /**
         * 拖动限制门槛,小于设置的数不执行拖动,防止点击与滚动
         */
        this.dragThreshold = 0;
        /**
        *  在不同分辨率下保持像素稳定
        * @default
        */
        this.pixelPerfect = true;
        /**
         * 动态属性，避免其他类注入
         */
        this.attach = {};
        this.container.name = this.constructor.name;
    }
    /**
     * 设置拖动
     */
    get dragOption() {
        if (this.plugs.has(UIBaseDrag_1.UIBaseDrag.key)) {
            return this.plugs.get(UIBaseDrag_1.UIBaseDrag.key);
        }
        return new UIBaseDrag_1.UIBaseDrag(this);
    }
    set dragOption(value) {
        const dragOption = this.dragOption;
        Utils_1.deepCopy(value, dragOption);
    }
    get groupName() {
        return this._groupName;
    }
    set groupName(value) {
        if (value === undefined) {
            Index_1.GroupController.unRegistrerGroup(this);
        }
        if (this._groupName == value) {
            return;
        }
        this._groupName = value;
        Index_1.GroupController.registrerGroup(this);
    }
    /**
     * 透明度
     */
    get alpha() {
        return this.container.alpha;
    }
    set alpha(value) {
        this.container.alpha = value;
    }
    get tint() {
        return this._tint;
    }
    set tint(value) {
        if (value === this._blendMode) {
            return;
        }
        this._tint = value;
        this.container.children.forEach(childrenItem => {
            if (childrenItem["tint"]) {
                childrenItem["tint"] = value;
            }
        });
    }
    get blendMode() {
        return this._blendMode;
    }
    set blendMode(value) {
        if (value === this._blendMode) {
            return;
        }
        this._blendMode = value;
        this.container.children.forEach(childrenItem => {
            if (childrenItem instanceof PIXI.Sprite) {
                childrenItem.blendMode = value || PIXI.BLEND_MODES.NORMAL;
            }
        });
    }
    /**
     * 获取样式
     */
    get style() {
        if (this._style == undefined) {
            this._style = new CSSStyle_1.CSSStyle(this);
        }
        return this._style;
    }
    set style(value) {
        const style = this.style;
        Utils_1.deepCopy(value, style);
        this.invalidateParentLayout();
    }
    /**
     * 更新显示列表,子类重写，实现布局
     */
    updateDisplayList(unscaledWidth, unscaledHeight) {
        if (this._style && this._style.display !== "none") {
            //console.log("displayStyle",unscaledWidth,unscaledHeight,this.left,this.right,this.x,this.y);
            CSSLayout_1.updateDisplayLayout(this, unscaledWidth, unscaledHeight);
        }
        else {
            //console.log("display",this.x + this.pivotX,this.y + this.pivotY,this.scaleX,this.scaleY,this.rotation*(Math.PI/180),this.skewX,this.skewY,this.pivotX,this.pivotY);
            this.updateTransform();
        }
    }
    load() {
        this.initializeUIValues();
        super.load();
    }
    release() {
        const { container, mask, background } = this;
        if (this._style) {
            this._style.release();
            this._style = undefined;
        }
        if (mask) {
            container.mask = null;
            if (mask instanceof DisplayObject) {
                mask.release();
            }
            else {
                mask.parent && mask.parent.removeChild(mask).destroy();
            }
            this.mask = undefined;
        }
        if (background && background.parent) {
            background.parent.removeChild(background).destroy();
            this.background = undefined;
        }
        this.plugs.forEach(value => {
            value.release();
        });
        Index_1.GroupController.unRegistrerGroup(this);
        super.release();
    }
    releaseAll() {
        this.offAll();
        this.release();
        for (let i = 0; i < this.uiChildren.length; i++) {
            const ui = this.uiChildren[i];
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
    }
}
exports.DisplayObject = DisplayObject;


/***/ }),

/***/ "./src/core/DisplayObjectAbstract.ts":
/*!*******************************************!*\
  !*** ./src/core/DisplayObjectAbstract.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ContainerBase_1 = __webpack_require__(/*! ./ContainerBase */ "./src/core/ContainerBase.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/**
 *
 */
class DisplayObjectAbstract extends PIXI.utils.EventEmitter {
    constructor() {
        super();
        /**
         * 自定义组价名
         */
        this.name = "";
        /**
         * @private
         * 这个对象在显示列表中的嵌套深度，舞台为1，它的子项为2，子项的子项为3，以此类推。当对象不在显示列表中时此属性值为0.
         */
        this.$nestLevel = 0;
        /**
         * 是否初始化
         * @default
         */
        this.initialized = false;
        /**
         * 节点列表
         */
        this.uiChildren = [];
        this._interactive = true;
        this._interactiveChildren = true;
        this._enabled = true;
        /**
         * 是否可见
         */
        this._visible = true;
        this.uuid = Utils_1.uid();
        this.container = new ContainerBase_1.ContainerBase();
        this.container.on("added", this.$onAddStage, this);
        this.container.on("removed", this.$onRemoveStage, this);
    }
    /** 添加显示对象，需集成Core */
    addChild(item) {
        if (this.container.children.length !== this.uiChildren.length) {
            return this.addChildAt(item, this.container.children.length);
        }
        else {
            return this.addChildAt(item, this.uiChildren.length);
        }
    }
    addChildAt(item, index) {
        if (item.parent) {
            item.parent.removeChild(item);
        }
        item.parent = this;
        item.$nestLevel = this.$nestLevel + 1;
        this.uiChildren.splice(index, 0, item);
        if (!item.initialized) {
            item.initialized = true;
            item.$onInit();
        }
        index = Math.min(index, this.container.children.length);
        this.emit(Index_1.ComponentEvent.ADD, this);
        this.container.addChildAt(item.container, index);
        return item;
    }
    getChildAt(index) {
        return this.uiChildren[index] || undefined;
    }
    /**
     * 移除已添加的UI组件
     * @param UIObject 要移除的UI组件
     */
    removeChild(item) {
        const index = this.uiChildren.indexOf(item);
        return this.removeChildAt(index);
    }
    removeChildAt(index) {
        index = Math.max(0, index);
        index = Math.min(this.uiChildren.length, index);
        const item = this.uiChildren[index];
        if (item) {
            item.container.parent.removeChild(item.container);
            this.uiChildren.splice(index, 1);
            item.parent = undefined;
        }
        return item;
    }
    removeChildren(beginIndex, endIndex) {
        const start = beginIndex ? beginIndex : 0;
        const end = endIndex ? endIndex : this.uiChildren.length;
        for (let i = start; i < end; i++) {
            this.removeChild(this.uiChildren[i]);
        }
    }
    /**
     * 是否绘制显示对象，如果false不进行绘制，不过仍然会进行相关的更新计算。
     * 只影响父级的递归调用。
     */
    set renderable(value) {
        this.container.renderable = value;
    }
    get renderable() {
        return this.container.renderable;
    }
    /**
     * 缓存当前的显示对象，如果移除缓存，设置false即可
     * 在设置这个值时，请确保你的纹理位图已经加载
     */
    set cacheAsBitmap(value) {
        this.container.cacheAsBitmap = value;
    }
    get cacheAsBitmap() {
        return this.container.cacheAsBitmap;
    }
    /**
     * 对象是否可以接收事件
     */
    set interactive(value) {
        this._interactive = value;
        if (!this._enabled) {
            return;
        }
        this.container.interactive = value;
    }
    get interactive() {
        return this.container.interactive;
    }
    /**
     * 子对象是否可以接收事件，设置false后，会绕过HitTest方法的递归
     */
    set interactiveChildren(value) {
        this._interactiveChildren = value;
        if (!this._enabled) {
            return;
        }
        this.container.interactiveChildren = value;
    }
    get interactiveChildren() {
        return this.container.interactiveChildren;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        this.container.interactive = value;
        this.container.interactiveChildren = value;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (this._visible === value) {
            return;
        }
        this._visible = value;
        this.container.visible = value;
    }
    /** 清除全部事件 */
    offAll(event) {
        return this.removeAllListeners(event);
    }
    get stage() {
        if (this.$stage == undefined) {
            this.$stage = Utils_1.getStage(this);
        }
        return this.$stage;
    }
    checkInvalidateFlag() {
    }
    load() {
        this.$onLoad();
    }
    release() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.$stage = undefined;
        this.$onRelease();
    }
    $onInit() {
        this.emit(Index_1.ComponentEvent.CREATION_COMPLETE, this);
    }
    $onLoad() { }
    $onRelease() { }
    $onAddStage() {
        this.checkInvalidateFlag();
        this.emit(Index_1.ComponentEvent.ADDED, this);
    }
    $onRemoveStage() {
        this.checkInvalidateFlag();
        this.parent = undefined;
        this.emit(Index_1.ComponentEvent.REMOVEED, this);
    }
}
exports.DisplayObjectAbstract = DisplayObjectAbstract;


/***/ }),

/***/ "./src/core/Stage.ts":
/*!***************************!*\
  !*** ./src/core/Stage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Ticker_1 = __webpack_require__(/*! ./Ticker */ "./src/core/Ticker.ts");
const DisplayLayoutAbstract_1 = __webpack_require__(/*! ./DisplayLayoutAbstract */ "./src/core/DisplayLayoutAbstract.ts");
/**
 * UI的舞台对象，展示所有UI组件
 *
 * @class
 * @param width {Number} 舞台宽度
 * @param height {Number} 舞台高度
 */
class Stage extends DisplayLayoutAbstract_1.DisplayLayoutAbstract {
    constructor(width, height, app) {
        super();
        this.width = width;
        this.height = height;
        this.setActualSize(width, height);
        this.container.name = "Stage";
        this.container.hitArea = new PIXI.Rectangle(0, 0, width, height);
        this.container.interactive = true;
        this.container.interactiveChildren = true;
        this.initialized = true;
        this.$nestLevel = 1;
        this.app = app;
    }
    release() {
        super.release();
    }
    releaseAll() {
        for (let i = 0; i < this.uiChildren.length; i++) {
            const ui = this.uiChildren[i];
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
        Ticker_1.shared.removeAllListeners();
    }
    resize() {
        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
        //this.updateChildren();
    }
}
exports.Stage = Stage;


/***/ }),

/***/ "./src/core/Ticker.ts":
/*!****************************!*\
  !*** ./src/core/Ticker.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tween = __webpack_require__(/*! ../tween/private/index */ "./src/tween/private/index.ts");
/**
 * 心跳，需要UI库初始化后，进行实例调用注册
 */
class Ticker extends PIXI.utils.EventEmitter {
    /**
     * 心跳构造函数
     * @param autoStart 是否自动开启心跳，默认false
     */
    constructor(autoStart) {
        super();
        this._disabled = true;
        if (autoStart) {
            this.disabled = false;
        }
    }
    /** 是否关闭心跳.默认false不关闭,关闭后，缓动等组件也将关闭 */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value == this._disabled) {
            return;
        }
        this._disabled = value;
    }
    update(deltaTime, lastTime, elapsedMS) {
        if (this._disabled) {
            return;
        }
        tween.update(elapsedMS);
        this.emit("update", deltaTime, lastTime, elapsedMS);
    }
    /**
     * 增加更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    addUpdateEvent(fn, context) {
        return this.on("update", fn, context);
    }
    /**
     * 移除更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    removeUpdateEvent(fn, context) {
        return this.removeListener("update", fn, context);
    }
}
/**
 * Ticker 的实例
 */
exports.shared = new Ticker(true);
exports.tickerShared = exports.shared;
exports.default = exports.tickerShared;


/***/ }),

/***/ "./src/core/plugs/UIBaseDrag.ts":
/*!**************************************!*\
  !*** ./src/core/plugs/UIBaseDrag.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = __webpack_require__(/*! ../../interaction/Index */ "./src/interaction/Index.ts");
const DisplayObjectAbstract_1 = __webpack_require__(/*! ../DisplayObjectAbstract */ "./src/core/DisplayObjectAbstract.ts");
const Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.ts");
/**
 *  组件的拖拽操作
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestDrop
 */
class UIBaseDrag {
    /**
     * 构造函数
     */
    constructor(target) {
        /**
         * 可拖动初始化
         *  @default
         */
        this.dragInitialized = false;
        /**
         * 可被掉落初始化
         * @default
        */
        this.dropInitialized = false;
        /**
         * 位置
         *
         */
        this._dragPosition = new PIXI.Point();
        /**
         * 是否拖动中
         * @default
         */
        this.dragging = false;
        /**
         * 是否设置边界
         * @default false
         */
        this.dragBoundary = false;
        /**
         * 是否启用回弹，在移动到非接收方时，回弹到原始位置
         */
        this.dragBounces = false;
        this.target = target;
        this.target.plugs.set(UIBaseDrag.key, this);
    }
    /**
     * 当前拖动组件的事件ID，用于处理DragDropController中多组件的选定
     */
    get dragDropEventId() {
        if (this.target) {
            return this.target.attach.dragDropEventId;
        }
    }
    /**
     * 是否开启拖动
     * @default false
     */
    set draggable(value) {
        if (value)
            this.initDraggable();
        else
            this.clearDraggable();
    }
    get dragRestrictAxis() {
        return this._dragRestrictAxis;
    }
    set dragRestrictAxis(value) {
        this._dragRestrictAxis = value;
        if (this.drag) {
            this.drag.dragRestrictAxis = this._dragRestrictAxis;
        }
    }
    /**
     * 拖动分组
     */
    get dragGroup() {
        if (this.target) {
            return this.target.attach.dragGroup;
        }
        return "";
    }
    set dragGroup(value) {
        if (this.target)
            this.target.attach.dragGroup = value;
    }
    get dragContainer() {
        return this._dragContainer;
    }
    set dragContainer(value) {
        this._dragContainer = Utils_1.getDisplayObject(value);
    }
    /**
     * 是否开启拖动掉落接收
     */
    set droppable(value) {
        if (value)
            this.initDroppable();
        else
            this.clearDroppable();
    }
    get droppableReparent() {
        return this._droppableReparent;
    }
    set droppableReparent(value) {
        this._droppableReparent = Utils_1.getDisplayObject(value);
        ;
    }
    clearDraggable() {
        if (this.dragInitialized) {
            this.dragInitialized = false;
            this.drag && this.drag.stopEvent();
        }
    }
    initDraggable() {
        if (this.target == undefined) {
            return;
        }
        if (!this.dragInitialized) {
            this.dragInitialized = true;
            const containerStart = new PIXI.Point();
            const stageOffset = new PIXI.Point();
            this._containerStart = containerStart;
            this._dragPosition.set(0, 0);
            this.drag = new Index_1.DragEvent(this.target);
            this.drag.dragRestrictAxis = this._dragRestrictAxis;
            this.drag.onDragStart = (e) => {
                if (this.target == undefined) {
                    return;
                }
                let target = this.target;
                this.$targetParent = target.parent;
                if (this._dragContainer == undefined && !this.dragBoundary) {
                    this._dragContainer = this.target.stage;
                }
                const added = Index_1.DragDropController.add(target, e);
                if (!this.dragging && added) {
                    target.emit(Index_1.ComponentEvent.DRAG_START_BEFORE, target, e);
                    this.dragging = true;
                    target.interactive = false;
                    containerStart.copyFrom(target.container.position);
                    if (this._dragContainer) {
                        let c;
                        if (this._dragContainer instanceof DisplayObjectAbstract_1.DisplayObjectAbstract) {
                            c = this._dragContainer;
                        }
                        if (c && target.parent) {
                            //_this.container._recursivePostUpdateTransform();
                            stageOffset.set(c.container.worldTransform.tx - target.parent.container.worldTransform.tx, c.container.worldTransform.ty - target.parent.container.worldTransform.ty);
                            c.addChild(target);
                        }
                    }
                    else {
                        stageOffset.set(0);
                    }
                    target.emit(Index_1.ComponentEvent.DRAG_START, target, e);
                }
            };
            this.drag.onDragMove = (e, offset) => {
                if (this.target == undefined) {
                    return;
                }
                let target = this.target;
                if (this.dragging) {
                    let x = containerStart.x + offset.x - stageOffset.x;
                    let y = containerStart.y + offset.y - stageOffset.y;
                    if (this.dragRestrictAxis == "x") {
                        this._dragPosition.set(x, containerStart.y - stageOffset.y);
                    }
                    else if (this.dragRestrictAxis == "y") {
                        this._dragPosition.set(containerStart.x - stageOffset.x, y);
                    }
                    else {
                        this._dragPosition.set(x, y);
                    }
                    if (this.dragBoundary && target.parent) {
                        this._dragPosition.x = Math.max(0, this._dragPosition.x);
                        this._dragPosition.x = Math.min(this._dragPosition.x, target.parent.width - target.width);
                        this._dragPosition.y = Math.max(0, this._dragPosition.y);
                        this._dragPosition.y = Math.min(this._dragPosition.y, target.parent.height - target.height);
                    }
                    target.setPosition(this._dragPosition.x, this._dragPosition.y);
                    target.emit(Index_1.ComponentEvent.DRAG_MOVE, target, e);
                }
            };
            this.drag.onDragEnd = (e) => {
                if (this.dragging) {
                    this.dragging = false;
                    //如果没有可被放置掉落的容器，0秒后返回原容器
                    setTimeout(() => {
                        if (this.target == undefined) {
                            return;
                        }
                        //dragBounces
                        let target = this.target;
                        let parent = this.$targetParent;
                        target.interactive = true;
                        const item = Index_1.DragDropController.getItem(target);
                        target.emit(Index_1.ComponentEvent.DRAG_END_BEFORE, target, e);
                        if (item && parent) {
                            if (target.parent !== parent && target.parent) {
                                parent.container.toLocal(target.container.position, target.container.parent, this._dragPosition);
                                parent.addChild(target);
                                target.x = this._dragPosition.x;
                                target.y = this._dragPosition.y;
                            }
                            if (this.dragBounces && this._containerStart) {
                                target.x = this._containerStart.x;
                                target.y = this._containerStart.y;
                            }
                        }
                        target.emit(Index_1.ComponentEvent.DRAG_END, target, e);
                    }, 0);
                }
            };
        }
    }
    clearDroppable() {
        if (this.target == undefined) {
            return;
        }
        let target = this.target;
        if (this.dropInitialized) {
            this.dropInitialized = false;
            target.container.off("mouseup" /* mouseup */, this.onDrop, this);
            target.container.off("touchend" /* touchend */, this.onDrop, this);
        }
    }
    initDroppable() {
        if (this.target == undefined) {
            return;
        }
        let target = this.target;
        if (!this.dropInitialized) {
            this.dropInitialized = true;
            const container = target.container;
            //self = this;
            container.interactive = true;
            container.on("mouseup" /* mouseup */, this.onDrop, this);
            container.on("touchend" /* touchend */, this.onDrop, this);
        }
    }
    onDrop(e) {
        if (this.target == undefined) {
            return;
        }
        let target = this.target;
        const item = Index_1.DragDropController.getEventItem(e, this.dropGroup);
        if (item && item.dragOption.dragging) {
            item.dragOption.dragging = false;
            item.interactive = true;
            const parent = item.dragOption.droppableReparent !== undefined ? item.dragOption.droppableReparent : target;
            if (parent) {
                parent.container.toLocal(item.container.position, item.container.parent, this._dragPosition);
                item.x = this._dragPosition.x;
                item.y = this._dragPosition.y;
                if (parent != item.parent) {
                    parent.addChild(item);
                    parent.emit(Index_1.ComponentEvent.DROP_TARGET, parent, item, e);
                }
                item.dragOption.$targetParent = parent;
            }
            item.emit(Index_1.ComponentEvent.DRAG_TARGET, item, e);
        }
    }
    load() {
    }
    release() {
        this.clearDraggable();
        this.clearDroppable();
        if (this.target) {
            this.target.plugs.delete(UIBaseDrag.key);
            this.target = undefined;
            this.$targetParent = undefined;
            this.dragContainer = undefined;
        }
    }
}
UIBaseDrag.key = "UIBaseDrag";
exports.UIBaseDrag = UIBaseDrag;


/***/ }),

/***/ "./src/display/Button.ts":
/*!*******************************!*\
  !*** ./src/display/Button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Label_1 = __webpack_require__(/*! ./Label */ "./src/display/Label.ts");
const Image_1 = __webpack_require__(/*! ./Image */ "./src/display/Image.ts");
const InputBase_1 = __webpack_require__(/*! ./private/InputBase */ "./src/display/private/InputBase.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 按钮
 *
 * @example let button = new gui.Button();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestButton
 */
class Button extends InputBase_1.InputBase {
    constructor() {
        super();
        this._selectedStr = "";
        this._oldState = "";
        /** 状态展示 */
        this.img = new Image_1.Image();
        /** 文字展示 */
        this.label = new Label_1.Label();
        this._text = "";
        this.container.buttonMode = true;
        this.img.fillMode = "scale";
        this.img.scale9Grid = [3, 3, 3, 3];
        this.addChild(this.img);
        this.label.sprite.style.fontSize = 18;
        this.addChild(this.label);
        this.on(Index_1.ComponentEvent.STATE_CHANGE, this.onStateChange, this);
    }
    /**
     * 设置按钮的文本内容
     */
    get text() {
        return this.label.text;
    }
    set text(value) {
        this._text = value;
        this.invalidateDisplayList();
    }
    updateDisplayList(unscaledWidth, unscaledHeight) {
        super.updateDisplayList(unscaledWidth, unscaledHeight);
        this.container.hitArea = new PIXI.Rectangle(0, 0, unscaledWidth, unscaledHeight);
        const img = this.img;
        img.width = unscaledWidth;
        img.height = unscaledHeight;
        if (this.label.width !== unscaledWidth)
            this.label.width = unscaledWidth;
        if (this.label.height !== unscaledHeight)
            this.label.height = unscaledHeight;
        if (this.label.text !== this._text) {
            this.label.text = this._text;
        }
        this.onStateChange(this, this.currentState);
    }
    release() {
        super.release();
        this.offAll(Index_1.ComponentEvent.STATE_CHANGE);
        this.img.release();
        this.label.release();
    }
    onStateChange(label, state) {
        if (this._oldState == state) {
            return;
        }
        this._oldState = state;
        this.img.src = this[state + this._selectedStr];
    }
}
exports.Button = Button;


/***/ }),

/***/ "./src/display/CheckBox.ts":
/*!*********************************!*\
  !*** ./src/display/CheckBox.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Button_1 = __webpack_require__(/*! ./Button */ "./src/display/Button.ts");
/**
 * 单选\复选框
 *
 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
 *
 * @example let checkBox = new gui.CheckBox();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestCheckBox
 */
class CheckBox extends Button_1.Button {
    constructor() {
        super();
        /**
         * 设置值
         */
        this._value = "";
        /**
         * 设置是否选中
         * */
        this._checked = false;
    }
    /**
     * 获取或设置当前选中的值
     */
    get selectedValue() {
        if (this.checkGroup) {
            return Index_1.InputController.getCheckGroupSelectedValue(this.checkGroup);
        }
        return undefined;
    }
    /**
     * 设置分组名
     */
    get checkGroup() {
        return this._groupName;
    }
    set checkGroup(value) {
        if (value === undefined) {
            Index_1.InputController.unRegistrerCheckGroup(this);
        }
        if (this._groupName == value) {
            return;
        }
        this._groupName = value; //需要在registrerCheckGroup之前
        Index_1.InputController.registrerCheckGroup(this);
    }
    /**
     * 获取设置默认值
     */
    get value() {
        return this._value;
    }
    set value(value) {
        if (value === this._value) {
            return;
        }
        this._value = value;
    }
    /**
     * 设置是否选中
     * @default false
     */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        if (value !== this._checked) {
            if (this.checkGroup)
                Index_1.InputController.updateCheckGroupSelected(this);
            this._oldState = "";
            if (value) {
                this._selectedStr = "AndSelected";
            }
            else {
                this._selectedStr = "";
            }
            this._checked = value;
            this.emit(Index_1.ComponentEvent.CHANGE, this);
            this.onStateChange(this, this.currentState);
        }
    }
    onClick() {
        super.onClick();
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    }
    onLabelChange(label) {
        label.style.left = this.width;
        label.style.top = this.height - label.height >> 1;
    }
}
exports.CheckBox = CheckBox;


/***/ }),

/***/ "./src/display/Container.ts":
/*!**********************************!*\
  !*** ./src/display/Container.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
/**
 * 基础容器
 *
 * 设置checkGroup后，进行分组。 分组后，可理解为复选框。
 *
 * @example let container = new gui.Container();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestContainer
 */
class Container extends DisplayObject_1.DisplayObject {
    constructor() {
        super();
        this.isContainer = true;
    }
    /**
     * 确定指定显示对象是 DisplayObjectContainer 实例的子项或该实例本身。搜索包括整个显示列表（其中包括此 DisplayObjectContainer 实例）。
     * 孙项、曾孙项等，每项都返回 true。
     * @param child 要测试的子对象。
     * @returns 如果 child 对象是 DisplayObjectContainer 的子项或容器本身，则为 true；否则为 false。
     */
    contains(child) {
        while (child) {
            if (child == this) {
                return true;
            }
            if (child.parent instanceof DisplayObject_1.DisplayObject) {
                child = child.parent;
            }
            return false;
        }
        return false;
    }
}
exports.Container = Container;


/***/ }),

/***/ "./src/display/Graphics.ts":
/*!*********************************!*\
  !*** ./src/display/Graphics.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
/**
 * 矢量绘制
 *
 * @example let graphics = new gui.Graphics();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
class Graphics extends DisplayObject_1.DisplayObject {
    constructor(geometry) {
        super();
        this.graphics = new PIXI.Graphics(geometry);
        this.container.addChild(this.graphics);
    }
}
exports.Graphics = Graphics;


/***/ }),

/***/ "./src/display/Image.ts":
/*!******************************!*\
  !*** ./src/display/Image.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 图片
 *
 * @example let image = new gui.Image();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestImage
 */
class Image extends DisplayObject_1.DisplayObject {
    constructor() {
        super();
        /**
         * 填充模式
         * 设置scale后，可设置scale9Grid进行调整缩放区域
         */
        this._fillMode = "no-repeat";
    }
    get src() {
        return this._src;
    }
    set src(value) {
        this._src = value;
        this.srcSystem();
    }
    get scale9Grid() {
        return this._scale9Grid;
    }
    set scale9Grid(value) {
        this._scale9Grid = value;
        this.scale9GridSystem();
    }
    get fillMode() {
        return this._fillMode;
    }
    set fillMode(value) {
        this._fillMode = value;
        this._source = undefined;
        this.srcSystem();
    }
    get anchorX() {
        return this._anchorX;
    }
    set anchorX(value) {
        this._anchorX = value;
        this.anchorSystem();
    }
    get anchorY() {
        return this._anchorY;
    }
    set anchorY(value) {
        this._anchorY = value;
        this.anchorSystem();
    }
    release() {
        super.release();
        this.offAll(Index_1.ComponentEvent.COMPLETE);
        if (this._sprite && this._sprite.parent) {
            this._sprite.parent.removeChild(this._sprite).destroy();
        }
    }
    updateDisplayList(unscaledWidth, unscaledHeight) {
        if (this._sprite) {
            super.updateDisplayList(unscaledWidth, unscaledHeight);
            this.scale9GridSystem();
            this._sprite.width = unscaledWidth;
            this._sprite.height = unscaledHeight;
            this.anchorSystem();
        }
    }
    srcSystem() {
        const { container, src } = this;
        if (src === undefined && this._sprite && this._sprite.parent) {
            container.removeChild(this._sprite);
            this._sprite.destroy();
        }
        if (this._texture) {
            this._texture.removeAllListeners();
        }
        if (src !== this._source) {
            this._source = src;
            const texture = this._texture = Utils_1.getTexture(src);
            if (texture.frame.width > 1 && texture.frame.height > 1) {
                this.setMeasuredSize(texture.frame.width, texture.frame.height);
            }
            texture.once("update", () => {
                this.setMeasuredSize(texture.frame.width, texture.frame.height);
                this.invalidateDisplayList();
                this.emit(Index_1.ComponentEvent.COMPLETE, this);
            }, this);
            let sprite = this._sprite;
            if (!PIXI.utils.isWebGLSupported()) {
                sprite = PIXI.Sprite.from(texture);
            }
            else {
                if (this.fillMode === "no-repeat") {
                    if (sprite instanceof PIXI.Sprite) {
                        sprite.texture = texture;
                    }
                    else {
                        sprite = new PIXI.Sprite(texture);
                    }
                }
                else if (this.fillMode === "repeat") {
                    if (sprite instanceof PIXI.TilingSprite) {
                        sprite.texture = texture;
                    }
                    else {
                        sprite = new PIXI.TilingSprite(texture);
                    }
                }
                else if (this.fillMode === "scale") {
                    if (sprite instanceof PIXI.NineSlicePlane) {
                        sprite.texture = texture;
                    }
                    else {
                        sprite = new PIXI.NineSlicePlane(texture);
                    }
                }
            }
            if (sprite && sprite.parent == undefined) {
                this._sprite = container.addChild(sprite);
            }
            this.invalidateDisplayList();
        }
    }
    scale9GridSystem() {
        if (this._sprite === undefined || this.scale9Grid === undefined) {
            return;
        }
        const sprite = this._sprite;
        const scale9Grid = this.scale9Grid;
        if (sprite instanceof PIXI.TilingSprite) {
            sprite.tileScale.set(scale9Grid[0], scale9Grid[1]);
            sprite.tilePosition.set(scale9Grid[2], scale9Grid[3]);
        }
        else if (sprite instanceof PIXI.NineSlicePlane) {
            if (scale9Grid[0] !== undefined) {
                sprite.leftWidth = scale9Grid[0];
            }
            if (scale9Grid[1] !== undefined) {
                sprite.rightWidth = scale9Grid[1];
            }
            if (scale9Grid[2] !== undefined) {
                sprite.topHeight = scale9Grid[2];
            }
            if (scale9Grid[3] !== undefined) {
                sprite.bottomHeight = scale9Grid[3];
            }
        }
    }
    anchorSystem() {
        if (this._sprite === undefined) {
            return;
        }
        const sprite = this._sprite;
        if (this.anchorX) {
            sprite.x = -Math.floor(sprite.width * this.anchorX);
        }
        if (this.anchorY) {
            sprite.y = -Math.floor(sprite.height * this.anchorY);
        }
    }
}
exports.Image = Image;


/***/ }),

/***/ "./src/display/Label.ts":
/*!******************************!*\
  !*** ./src/display/Label.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const UIKeys = __webpack_require__(/*! ../core/DisplayLayoutKeys */ "./src/core/DisplayLayoutKeys.ts");
/**
 * 文本
 *
 * 中文换行特殊处理 xxxx.style.breakWords = true;
 *
 * 文本没有宽高，自适应
 *
 * @example let label = new gui.Label();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestLabel
 */
class Label extends DisplayObject_1.DisplayObject {
    constructor(text = "") {
        super();
        this.sprite = new PIXI.Text(text, { breakWords: true, fill: "#ffffff" });
        this.container.addChild(this.sprite);
    }
    /**
     * 文本内容
     */
    get text() {
        return this.sprite.text;
    }
    set text(value) {
        this.sprite.text = value;
        this.invalidateSize();
        this.invalidateDisplayList();
        this.emit(Index_1.ComponentEvent.CHANGE, this);
    }
    set fontCssStyle(value) {
        if (value.color) {
            value.fill = value.color;
        }
        value.breakWords = true;
        this.sprite.style = value;
        this.invalidateSize();
        this.invalidateDisplayList();
    }
    updateDisplayList(unscaledWidth, unscaledHeight) {
        super.updateDisplayList(unscaledWidth, unscaledHeight);
        const values = this.$values;
        if (!isNaN(values[UIKeys.explicitWidth])) {
            this.sprite.x = values[UIKeys.explicitWidth] - this.sprite.width >> 1;
        }
        if (!isNaN(values[UIKeys.explicitHeight])) {
            this.sprite.y = values[UIKeys.explicitHeight] - this.sprite.height >> 1;
        }
    }
    release() {
        super.release();
        const sprite = this.sprite;
        if (sprite && sprite.parent) {
            sprite.parent.removeChild(sprite).destroy();
        }
        this.offAll(Index_1.ComponentEvent.CHANGE);
    }
}
exports.Label = Label;


/***/ }),

/***/ "./src/display/Rect.ts":
/*!*****************************!*\
  !*** ./src/display/Rect.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
/**
 * 绘制矩形或圆角矩形
 *
 * @example let rect = new gui.Rect();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
 */
class Rect extends DisplayObject_1.DisplayObject {
    constructor() {
        super();
        /**
         * 圆角
         */
        this._radius = 0;
        /**
         * 线条颜色
         */
        this._lineColor = 0;
        /**
         * 线条粗细
         */
        this._lineWidth = 0;
        /**
         * 颜色
         */
        this._color = 0;
        this.graphics = new PIXI.Graphics();
        this.container.addChild(this.graphics);
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
        this.invalidateDisplayList();
    }
    get lineColor() {
        return this._lineColor;
    }
    set lineColor(value) {
        this._lineColor = value;
        this.invalidateDisplayList();
    }
    get lineWidth() {
        return this._lineWidth;
    }
    set lineWidth(value) {
        this._lineWidth = value;
        this.invalidateDisplayList();
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
        this.invalidateDisplayList();
    }
    get anchorX() {
        return this._anchorX;
    }
    set anchorX(value) {
        this._anchorX = value;
        this.invalidateDisplayList();
    }
    get anchorY() {
        return this._anchorY;
    }
    set anchorY(value) {
        this._anchorY = value;
        this.invalidateDisplayList();
    }
    drawRoundedRect() {
        const graphics = this.graphics;
        graphics.clear();
        graphics.lineStyle(this._lineWidth, this._lineColor);
        graphics.beginFill(this._color);
        graphics.drawRoundedRect(this._anchorX ? -this._anchorX * this.width : 0, this._anchorY ? -this._anchorY * this.height : 0, this.width, this.height, this._radius);
        graphics.endFill();
    }
    release() {
        super.release();
        this.graphics.parent.removeChild(this.graphics).destroy();
    }
    updateDisplayList(unscaledWidth, unscaledHeight) {
        this.drawRoundedRect();
        super.updateDisplayList(unscaledWidth, unscaledHeight);
    }
}
exports.Rect = Rect;


/***/ }),

/***/ "./src/display/ScrollingContainer.ts":
/*!*******************************************!*\
  !*** ./src/display/ScrollingContainer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __webpack_require__(/*! ./Container */ "./src/display/Container.ts");
const Ticker = __webpack_require__(/*! ../core/Ticker */ "./src/core/Ticker.ts");
const Utils = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const DragEvent_1 = __webpack_require__(/*! ../interaction/DragEvent */ "./src/interaction/DragEvent.ts");
const MouseScrollEvent_1 = __webpack_require__(/*! ../interaction/MouseScrollEvent */ "./src/interaction/MouseScrollEvent.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const ContainerBase_1 = __webpack_require__(/*! ../core/ContainerBase */ "./src/core/ContainerBase.ts");
/**
 * 可滚动的容器
 *
 * @example let scrollingContainer = new gui.ScrollingContainer();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
 */
class ScrollingContainer extends Container_1.Container {
    constructor() {
        super();
        /**
         * 是否启动拖拽滚动
         * @default true
         */
        this._dragScrolling = true;
        /**
         * 滚动的阻力或柔度 (0-1)
         * @default 0.5
         */
        this.softness = 0.5;
        /**
         * 滚动条的圆角半径 设置0时，滚动条为直角长方形
         * @default 0
         */
        this.radius = 0;
        /**
         * 遮罩的扩充范围
         */
        this.expandMask = 0;
        /**
         * 是否开启滚动动画
         * @default false
         */
        this.animating = false;
        /**
         * 是否启用水平滚动
         * @default false
         */
        this.scrollX = false;
        /**
         * 是否滚动中
         */
        this.scrollY = false;
        /**
         * 内容容器
         * @private
         */
        this._innerContainer = new ContainerBase_1.ContainerBase();
        /**
         * 内容的宽高
         */
        this.innerBounds = new PIXI.Rectangle();
        /**
         * 拖动处理类
         */
        this.dragEvent = new DragEvent_1.DragEvent(this);
        /**
         * 鼠标滚动
         */
        this.mouseScrollEvent = new MouseScrollEvent_1.MouseScrollEvent(this, true);
        /**
         * 是否滚动中
         */
        this.scrolling = false;
        /**
         * 临时方案，设置时间间隔，跳转容器宽高
         */
        this._boundCached = Utils_1.now() - 1000;
        this._lastWidth = 0;
        this._lastHeight = 0;
        this._isInitScrolling = false;
        this._containerStart = new PIXI.Point();
        this._targetPosition = new PIXI.Point();
        this._lastPosition = new PIXI.Point();
        this._Position = new PIXI.Point();
        this._Speed = new PIXI.Point();
        this._stop = false;
        this.container.addChild(this._innerContainer);
        this.container.name = "ScrollingContainer";
        this._innerContainer.name = "innerContainer";
        const _graphics = new PIXI.Graphics();
        _graphics.clear();
        _graphics.beginFill(0xffcc00);
        _graphics.drawRoundedRect(0, 0, 200, 200, 0);
        _graphics.endFill();
        this.style.maskImage = _graphics;
        this.dragEvent.onDragStart = () => {
            if (!this.scrolling) {
                this._containerStart.copyFrom(this._innerContainer.position);
                this._Position.copyFrom(this._innerContainer.position);
                this.scrolling = true;
                this.setScrollPosition();
                Ticker.shared.addUpdateEvent(this.updateScrollPosition, this);
            }
        };
        this.dragEvent.onDragMove = (e, offset) => {
            if (this.scrollX)
                this._targetPosition.x = this._containerStart.x + offset.x;
            if (this.scrollY)
                this._targetPosition.y = this._containerStart.y + offset.y;
        };
        this.dragEvent.onDragEnd = () => {
            if (this.scrolling) {
                this.scrolling = false;
                Ticker.shared.removeUpdateEvent(this.updateScrollPosition, this);
            }
        };
        const scrollSpeed = new PIXI.Point();
        this.mouseScrollEvent.onMouseScroll = (e, delta) => {
            scrollSpeed.set(-delta.x * 0.2, -delta.y * 0.2);
            this.setScrollPosition(scrollSpeed);
        };
    }
    get dragScrolling() {
        return this._dragScrolling;
    }
    set dragScrolling(value) {
        this._dragScrolling = value;
        //Drag scroll and Mouse scroll
        if (value) {
            this.mouseScrollEvent.startEvent();
            this.dragEvent.startEvent();
        }
        else {
            this.mouseScrollEvent.stopEvent();
            this.dragEvent.stopEvent();
        }
    }
    updateDisplayList(unscaledWidth, unscaledHeight) {
        if (this._lastWidth != unscaledWidth || this._lastHeight != unscaledHeight) {
            super.updateDisplayList(unscaledWidth, unscaledHeight);
            const _of = this.expandMask;
            this.style.maskPosition = [_of, _of];
            this._lastWidth = unscaledWidth;
            this._lastHeight = unscaledHeight;
            this.style.maskSize = [unscaledWidth, unscaledHeight];
            this.setScrollPosition();
        }
    }
    setScrollPosition(speed) {
        if (speed) {
            this._Speed = speed;
        }
        if (!this.animating) {
            this.animating = true;
            this._lastPosition.copyFrom(this._innerContainer.position);
            this._targetPosition.copyFrom(this._innerContainer.position);
            this.updateScrollPosition(0);
        }
    }
    addChildAt(item, index) {
        if (item.parent) {
            item.parent.removeChild(item);
        }
        item.parent = this;
        index = Math.min(this._innerContainer.children.length, index);
        this._innerContainer.addChildAt(item.container, index);
        this.uiChildren.splice(index, 0, item);
        this.getInnerBounds(true);
        return item;
    }
    getInnerBounds(force) {
        //this is a temporary fix, because we cant rely on innercontainer height if the children is positioned > 0 y.
        if (force || Utils_1.now() - this._boundCached > 1000) {
            this._innerContainer.getLocalBounds(this.innerBounds);
            this.innerBounds.height = this.innerBounds.y + this._innerContainer.height;
            this.innerBounds.width = this.innerBounds.x + this._innerContainer.width;
            this._boundCached = Utils_1.now();
        }
        return this.innerBounds;
    }
    $onInit() {
        super.$onInit();
        this.initScrolling();
    }
    initScrolling() {
        this._isInitScrolling = true;
        this.updateScrollBars();
    }
    updateScrollBars() {
        this.emit(Index_1.ComponentEvent.CHANGE, this);
    }
    /**
     * 百分比设置位置
     * @param direction 方向
     * @param pct 百分比0-1
     */
    forcePctPosition(direction, pct) {
        const bounds = this.getInnerBounds();
        if (this.scrollX && direction == "x") {
            this._innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.scrollY && direction == "y") {
            this._innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this._Position[direction] = this._targetPosition[direction] = this._innerContainer.position[direction];
    }
    /** 根据焦点设置位置 */
    focusPosition(pos) {
        const bounds = this.getInnerBounds();
        let dif;
        if (this.scrollX) {
            const x = Math.max(0, (Math.min(bounds.width, pos.x)));
            if (x + this._innerContainer.x > this._width) {
                dif = x - this._width;
                this._innerContainer.x = -dif;
            }
            else if (x + this._innerContainer.x < 0) {
                dif = x + this._innerContainer.x;
                this._innerContainer.x -= dif;
            }
        }
        if (this.scrollY) {
            const y = Math.max(0, (Math.min(bounds.height, pos.y)));
            if (y + this._innerContainer.y > this._height) {
                dif = y - this._height;
                this._innerContainer.y = -dif;
            }
            else if (y + this._innerContainer.y < 0) {
                dif = y + this._innerContainer.y;
                this._innerContainer.y -= dif;
            }
        }
        this._lastPosition.copyFrom(this._innerContainer.position);
        this._targetPosition.copyFrom(this._innerContainer.position);
        this._Position.copyFrom(this._innerContainer.position);
        this.updateScrollBars();
    }
    updateScrollPosition(delta) {
        this._stop = true;
        if (this.scrollX)
            this.updateDirection("x", delta);
        if (this.scrollY)
            this.updateDirection("y", delta);
        if (stop) {
            this.animating = false;
        }
    }
    updateDirection(direction, delta) {
        delta = delta * 0.001;
        const bounds = this.getInnerBounds();
        let min;
        if (direction == "y")
            min = Math.round(Math.min(0, this._height - bounds.height));
        else
            min = Math.round(Math.min(0, this._width - bounds.width));
        if (!this.scrolling && Math.round(this._Speed[direction]) !== 0) {
            this._targetPosition[direction] += this._Speed[direction];
            this._Speed[direction] = Utils.Lerp(this._Speed[direction], 0, (5 + 2.5 / Math.max(this.softness, 0.01)) * delta);
            if (this._targetPosition[direction] > 0) {
                this._targetPosition[direction] = 0;
            }
            else if (this._targetPosition[direction] < min) {
                this._targetPosition[direction] = min;
            }
        }
        if (!this.scrolling && Math.round(this._Speed[direction]) === 0 && (this._innerContainer[direction] > 0 || this._innerContainer[direction] < min)) {
            const target = this._Position[direction] > 0 ? 0 : min;
            this._Position[direction] = Utils.Lerp(this._Position[direction], target, (40 - (30 * this.softness)) * delta);
            this._stop = false;
        }
        else if (this.scrolling || Math.round(this._Speed[direction]) !== 0) {
            if (this.scrolling) {
                this._Speed[direction] = this._Position[direction] - this._lastPosition[direction];
                this._lastPosition.copyFrom(this._Position);
            }
            if (this._targetPosition[direction] > 0) {
                this._Speed[direction] = 0;
                this._Position[direction] = 100 * this.softness * (1 - Math.exp(this._targetPosition[direction] / -200));
            }
            else if (this._targetPosition[direction] < min) {
                this._Speed[direction] = 0;
                this._Position[direction] = min - (100 * this.softness * (1 - Math.exp((min - this._targetPosition[direction]) / -200)));
            }
            else {
                this._Position[direction] = this._targetPosition[direction];
            }
            this._stop = false;
        }
        this._innerContainer.position[direction] = Math.round(this._Position[direction]);
        this.updateScrollBars();
    }
}
exports.ScrollingContainer = ScrollingContainer;


/***/ }),

/***/ "./src/display/Slider.ts":
/*!*******************************!*\
  !*** ./src/display/Slider.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
const Image_1 = __webpack_require__(/*! ./Image */ "./src/display/Image.ts");
const Utils = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Tween_1 = __webpack_require__(/*! ../tween/Tween */ "./src/tween/Tween.ts");
const Easing_1 = __webpack_require__(/*! ../tween/Easing */ "./src/tween/Easing.ts");
/**
 * 滑动条/进度条
 *
 * @example let slider = new gui.Slider();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSlider
 */
class Slider extends DisplayObject_1.DisplayObject {
    constructor() {
        super();
        /**
         * 当前值
         */
        this._amt = 0;
        /**
         * 小数的保留位，0不保留
         * @default 0
         */
        this._decimals = 0;
        this._startValue = 0;
        this._maxPosition = 0;
        this._localMousePosition = new PIXI.Point();
        this._lastChange = 0;
        this._lastChanging = 0;
        this._thumbDrag = new Index_1.DragEvent(this);
        this._trackDrag = new Index_1.DragEvent(this);
        /** 状态展示 */
        this.trackImg = new Image_1.Image();
        this.thumbImg = new Image_1.Image();
        this.tracklightImg = new Image_1.Image();
        this._value = 0;
        /**
         * 最小值
         */
        this._minValue = 0;
        /**
         * 最大值
         */
        this._maxValue = 100;
        /**
         * 是否垂直,滑块方向
         */
        this._vertical = false;
        this.isExcValueSystem = false;
        this._thumbDrag.onDragPress = this.onPress;
        this._thumbDrag.onDragStart = this.onDragStart;
        this._thumbDrag.onDragMove = this.onDragMove;
        this._thumbDrag.onDragEnd = this.onDragEnd;
        this._trackDrag.onDragPress = this.onPress;
        this._trackDrag.onDragStart = this.onDragStart;
        this._trackDrag.onDragMove = this.onDragMove;
        this._trackDrag.onDragEnd = this.onDragEnd;
        this.thumbImg.container.name = "thumbImg";
        this.thumbImg.anchorX = 0.5;
        this.thumbImg.anchorY = 0.5;
        this.thumbImg.on(Index_1.ComponentEvent.COMPLETE, this.onImgload, this);
        this.trackImg.container.name = "trackImg";
        this.trackImg.fillMode = "scale";
        this.trackImg.scale9Grid = [2, 2, 2, 2];
        this.trackImg.style.width = "100%";
        this.trackImg.style.height = "100%";
        this.trackImg.on(Index_1.ComponentEvent.COMPLETE, this.onImgload, this);
        this.tracklightImg.container.name = "tracklightImg";
        this.tracklightImg.fillMode = "scale";
        this.tracklightImg.scale9Grid = [2, 2, 2, 2];
        this.addChild(this.trackImg);
        this.addChild(this.tracklightImg);
        this.addChild(this.thumbImg);
    }
    /**
     * 当前值
     */
    get value() {
        return Utils.Round(Utils.Lerp(this.minValue, this.maxValue, this._amt), this._decimals);
    }
    set value(value) {
        this._value = value;
        this.valueSystem();
    }
    valueSystem() {
        this._amt = (Math.max(this.minValue, Math.min(this.maxValue, this._value)) - this.minValue) / (this.maxValue - this.minValue);
        this.updatePosition();
        this.triggerValueChange();
        this.triggerValueChanging();
    }
    get minValue() {
        return this._minValue;
    }
    set minValue(value) {
        this._minValue = value;
    }
    get maxValue() {
        return this._maxValue;
    }
    set maxValue(value) {
        this._maxValue = value;
    }
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = value;
        this.updateLayout();
    }
    get track() {
        return this._track;
    }
    set track(value) {
        if (value !== this._track) {
            this._track = value;
            this.trackImg.src = value;
        }
    }
    get thumb() {
        return this._thumb;
    }
    set thumb(value) {
        if (value !== this._thumb) {
            this._thumb = value;
            this.thumbImg.src = value;
        }
    }
    get tracklight() {
        return this._tracklight;
    }
    set tracklight(value) {
        if (value !== this._tracklight) {
            this._tracklight = value;
            this.tracklightImg.src = value;
        }
    }
    setActualSize(w, h) {
        super.setActualSize(w, h);
        if (this.trackImg.width !== w) {
            this.trackImg.width = w;
        }
        if (this.trackImg.height !== w) {
            this.trackImg.height = h;
        }
        if (!this.isExcValueSystem) {
            this.valueSystem();
            this.isExcValueSystem = true;
        }
    }
    release() {
        super.release();
        this.trackImg.release();
        this.thumbImg.release();
        this.tracklightImg.release();
    }
    onImgload() {
        this.updateLayout();
    }
    updateLayout() {
        const thumbImg = this.thumbImg;
        const tracklightImg = this.tracklightImg;
        if (this.vertical) {
            //thumbImg.style.top =this._amt; 
            thumbImg.x = this._width >> 1;
            tracklightImg.width = this._width;
            //tracklightImg.style.height = this._amt * this.height;
        }
        else {
            thumbImg.y = this._height >> 1;
            //thumbImg.style.left = this._amt; 
            tracklightImg.height = this._height;
            //tracklightImg.style.width =  this._amt * this.width;
        }
    }
    updatePosition(soft) {
        let val = 0;
        const thumbImg = this.thumbImg;
        const tracklightImg = this.tracklightImg;
        if (this.vertical) {
            val = this._height * this._amt;
            if (soft) {
                Tween_1.Tween.to({ y: thumbImg.y, height: tracklightImg.height }, { y: val, height: val }, 300).easing(Easing_1.Easing.Linear.None)
                    .on(Tween_1.Tween.Event.update, (obj) => {
                    thumbImg.y = obj.y;
                    tracklightImg.height = obj.height;
                }).start();
            }
            else {
                thumbImg.y = val;
                tracklightImg.height = val;
            }
        }
        else {
            val = this._width * this._amt;
            if (soft) {
                Tween_1.Tween.to({ x: thumbImg.x, width: tracklightImg.width }, { x: val, width: val }, 300).easing(Easing_1.Easing.Linear.None)
                    .on(Tween_1.Tween.Event.update, (obj) => {
                    thumbImg.x = obj.x;
                    tracklightImg.width = obj.width;
                }).start();
            }
            else {
                thumbImg.x = val;
                tracklightImg.width = val;
            }
        }
    }
    onPress(event, isPressed, dragEvent) {
        event.stopPropagation();
        if (this._trackDrag == dragEvent && this._trackDrag.id == event.data.identifier) {
            if (isPressed) {
                this.updatePositionToMouse(event.data.global, true);
            }
        }
    }
    onDragStart(event) {
        if (this._thumbDrag.id == event.data.identifier) {
            this._startValue = this._amt;
            this._maxPosition = this.vertical ? this._height : this._width;
        }
    }
    onDragMove(event, offset) {
        if (this._thumbDrag.id == event.data.identifier) {
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.vertical ? offset.y : offset.x) / this._maxPosition)));
            this.triggerValueChanging();
            this.updatePosition();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.updatePositionToMouse(event.data.global, false);
        }
    }
    onDragEnd(event) {
        if (this._thumbDrag.id == event.data.identifier) {
            this.triggerValueChange();
            this.updatePosition();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.triggerValueChange();
        }
    }
    updatePositionToMouse(mousePosition, soft) {
        this.trackImg.container.toLocal(mousePosition, undefined, this._localMousePosition, true);
        const newPos = this.vertical ? this._localMousePosition.y : this._localMousePosition.x;
        const maxPos = this.vertical ? this._height : this._width;
        this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
        this.updatePosition(soft);
        this.triggerValueChanging();
    }
    triggerValueChange() {
        const value = this.value;
        this.emit(Index_1.ComponentEvent.CHANGE, this, value, this._lastChange);
        if (this._lastChange != value) {
            this._lastChange = value;
        }
    }
    triggerValueChanging() {
        const value = this.value;
        this.emit(Index_1.ComponentEvent.CHANGEING, this, value, this._lastChanging);
        if (this._lastChanging != value) {
            this._lastChanging = value;
        }
    }
}
exports.Slider = Slider;


/***/ }),

/***/ "./src/display/Sound.ts":
/*!******************************!*\
  !*** ./src/display/Sound.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const SpriteAnimated_1 = __webpack_require__(/*! ./SpriteAnimated */ "./src/display/SpriteAnimated.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const InputBase_1 = __webpack_require__(/*! ./private/InputBase */ "./src/display/private/InputBase.ts");
exports.$sounds = new Map();
/**
 * 音频播放组件
 *
 * @example let sound = new gui.Sound();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSound
 */
class Sound extends InputBase_1.InputBase {
    constructor() {
        super();
        /**
         * 状态展示
         */
        this.spriteAnimated = new SpriteAnimated_1.SpriteAnimated();
        /**
         * 是否自动播放
         * @default false
         */
        this.autoPlay = false;
        this._speed = 1;
        this._volume = 100;
        this._loop = false;
        this._curProgress = 0;
        this._playing = false;
        const sp = this.spriteAnimated;
        sp.loop = true;
        this.addChild(sp);
    }
    get sheetSkin() {
        return this._sheetSkin;
    }
    set sheetSkin(value) {
        this._sheetSkin = value;
        this.spriteAnimated.src = value;
    }
    get duration() {
        if (this._sound) {
            return this._sound.duration;
        }
        return 0;
    }
    /**
     * 音频源
     */
    get src() {
        return this._src;
    }
    set src(src) {
        if (src === this.src) {
            return;
        }
        this.releaseSound();
        this._src = src;
        if (src) {
            const sound = this._sound = Utils_1.getSound(src);
            sound.loop = this.loop;
            sound.volume = this.volume;
            sound.speed = this.speed;
            if (this.autoPlay) {
                this.play();
            }
            else {
                this.stop();
            }
        }
    }
    /**
     * 设置播放速度
     */
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
        if (this._sound) {
            this._sound.speed = value;
        }
    }
    /**
     * 音量
     * @default 100
     */
    get volume() {
        return this._volume;
    }
    set volume(value) {
        this._volume = value;
        if (this._sound) {
            this._sound.volume = value;
        }
    }
    /**
     * 是否循环
     * @default false
     */
    get loop() {
        return this._loop;
    }
    set loop(value) {
        this._loop = value;
        if (this._sound) {
            this._sound.loop = value;
        }
    }
    get isPlaying() {
        if (this._sound) {
            return this._sound.isPlaying;
        }
        return false;
    }
    play(start = 0, end) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._sound && this._sound.isPlaying) {
                return;
            }
            const uiObjects = Index_1.GroupController.getGroup(this.groupName);
            if (uiObjects) {
                for (const key in uiObjects) {
                    if (uiObjects[key] instanceof Sound) {
                        uiObjects[key].stop();
                    }
                }
            }
            if (this._mediaInstance) {
                this._mediaInstance.off('progress', this.onProgress, this);
                this._mediaInstance.off('end', this.onEnd, this);
            }
            if (this._sound) {
                const sound = this._mediaInstance = yield this._sound.play({
                    start: start,
                    end: end
                });
                sound.on('progress', this.onProgress, this);
                sound.on('end', this.onEnd, this);
            }
            this._playing = true;
            if (this._sheetSkin) {
                this.spriteAnimated.animationName = "play";
                this.spriteAnimated.play();
            }
        });
    }
    stop() {
        if (this._sound) {
            this._sound.stop();
        }
        this._playing = false;
        if (this._sheetSkin) {
            this.spriteAnimated.animationName = "stop";
            this.spriteAnimated.stop();
        }
    }
    /**
     * 恢复播放
     */
    resume() {
        this.play(this._curProgress);
    }
    /**
     * 暂停播放
     */
    pause() {
        if (this._mediaInstance && this._sound) {
            this._curProgress = this._mediaInstance.progress * this._sound.duration;
        }
        this.stop();
    }
    update(_style) {
        this.container.hitArea = new PIXI.Rectangle(0, 0, this._width, this._height);
    }
    release() {
        super.release();
        this.releaseSound();
        this.offAll();
        this.spriteAnimated.release();
    }
    releaseSound() {
        if (this._mediaInstance) {
            this._mediaInstance.off('progress', this.onProgress, this);
            this._mediaInstance.off('end', this.onEnd, this);
        }
        if (this._sound) {
            this.removeAllListeners();
            this._sound.stop();
            this._sound.destroy();
            this._sound = undefined;
        }
    }
    onProgress(progress, duration) {
        this._curProgress = progress * duration;
        if (this.listenerCount(Index_1.ComponentEvent.CHANGEING) > 0) {
            this.emit(Index_1.ComponentEvent.CHANGEING, this, this._curProgress);
        }
    }
    onEnd() {
        if (this.loop) {
            this.emit(Index_1.ComponentEvent.LOOP, this);
        }
        else {
            this.emit(Index_1.ComponentEvent.COMPLETE, this);
        }
    }
    onClick() {
        if (this.isPlaying) {
            this.stop();
        }
        else {
            this.play();
        }
    }
}
exports.Sound = Sound;


/***/ }),

/***/ "./src/display/SpriteAnimated.ts":
/*!***************************************!*\
  !*** ./src/display/SpriteAnimated.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 序列图动画
 *
 * 支持使用texturepacker导出以及处理轴点
 *
 * @example let spriteAnimated = new gui.SpriteAnimated();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSpriteAnimated
 */
class SpriteAnimated extends DisplayObject_1.DisplayObject {
    constructor() {
        super();
        this._lastAnimatedName = "";
        this._curFrameNumber = 0;
        /**
         * 要播放的动作名
         */
        this._animationName = "default";
        /**
         * 动画速度
         */
        this._animationSpeed = 0.1;
        /**
         * 是的循环
         */
        this._loop = false;
        /**
         * 是否播放中
         */
        this._playing = false;
        /**
         * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
         */
        this._anchorX = 0;
        /**
         * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
         */
        this._anchorY = 0;
        this._animatedSprites = new Map();
    }
    get animationName() {
        return this._animationName;
    }
    set animationName(value) {
        if (this._animationName == value) {
            return;
        }
        this._animationName = value;
        this.animatedNameSystem();
    }
    get src() {
        return this._src;
    }
    set src(value) {
        this._src = value;
        this.srcSystem();
    }
    get animationSpeed() {
        return this._animationSpeed;
    }
    set animationSpeed(value) {
        this._animationSpeed = value;
        this.attribSystem();
    }
    get loop() {
        return this._loop;
    }
    set loop(value) {
        this._loop = value;
        this.attribSystem();
    }
    get playing() {
        return this._playing;
    }
    get anchorX() {
        return this._anchorX;
    }
    set anchorX(value) {
        this._anchorX = value;
        this.attribSystem();
    }
    get anchorY() {
        return this._anchorY;
    }
    set anchorY(value) {
        this._anchorY = value;
        this.attribSystem();
    }
    /** 跳转到第N帧并播放 */
    gotoAndPlay(frameNumber) {
        this._curFrameNumber = frameNumber;
        this._playing = true;
        this.playSystem();
    }
    /** 跳转到第N帧并停止 */
    gotoAndStop(frameNumber) {
        this._curFrameNumber = frameNumber;
        this._playing = false;
        this.playSystem();
    }
    /** 停止 */
    stop() {
        this._curFrameNumber = 0;
        this._playing = false;
        this.playSystem();
    }
    /** 播放 */
    play() {
        this._curFrameNumber = 0;
        this._playing = true;
        this.playSystem();
    }
    /**
     * 添加动画
     */
    addAnimated(animationName, textures) {
        const sp = this._animatedSprites.get(animationName);
        if (sp && sp.parent) {
            sp.parent.removeChild(sp);
            sp.removeAllListeners();
            sp.destroy();
        }
        this._animatedSprites.set(animationName, new PIXI.AnimatedSprite(textures));
    }
    release() {
        super.release();
        this.releaseAnimate();
        this.src = undefined;
    }
    releaseAnimate() {
        this._animatedSprites.forEach(element => {
            element.stop();
            element.removeAllListeners();
            if (element.parent) {
                element.parent.removeChild(element).destroy();
            }
        });
    }
    srcSystem() {
        this.releaseAnimate();
        const src = this.src;
        if (src) {
            if (Array.isArray(src)) {
                const textures = [];
                src.forEach(value => {
                    textures.push(Utils_1.getTexture(value));
                });
                this.addAnimated("default", textures);
            }
            else {
                for (const key in src.animations) {
                    this.addAnimated(key, src.animations[key]);
                }
            }
            this.animatedNameSystem();
        }
    }
    animatedNameSystem() {
        if (this._animatedSprites.size == 0) {
            return;
        }
        if (this.animationName === this._lastAnimatedName) {
            return;
        }
        const animatedSp = this._animatedSprites.get(this.animationName);
        if (animatedSp == undefined) {
            Utils_1.log(`Warning SpriteAnimated -> _animatedSprites[${this.animationName}] == undefined`);
            return;
        }
        const lastAnimated = this._animatedSprites.get(this._lastAnimatedName);
        animatedSp.onLoop = () => {
            this.emit(Index_1.ComponentEvent.LOOP, this);
        };
        animatedSp.onComplete = () => {
            this.emit(Index_1.ComponentEvent.COMPLETE, this);
        };
        if (animatedSp.parent == undefined) {
            setTimeout(() => {
                //绘制会闪烁，与下一帧渲染有关，先临时解决，设置setTimeout
                this.container.addChild(animatedSp);
            }, 0);
        }
        if (lastAnimated && lastAnimated.parent) {
            lastAnimated.stop();
            lastAnimated.parent.removeChild(lastAnimated);
        }
        this._lastAnimatedName = this.animationName;
        this._curFrameNumber = 0;
        this.emit(Index_1.ComponentEvent.CHANGE, this, this.animationName);
        this.attribSystem();
        this.playSystem();
    }
    playSystem() {
        const animatedSp = this._animatedSprites.get(this.animationName);
        if (animatedSp) {
            if (this.playing) {
                animatedSp.gotoAndPlay(this._curFrameNumber);
            }
            else {
                animatedSp.gotoAndStop(this._curFrameNumber);
            }
        }
    }
    attribSystem() {
        const animatedSp = this._animatedSprites.get(this.animationName);
        if (animatedSp) {
            animatedSp.loop = this.loop;
            animatedSp.animationSpeed = this.animationSpeed;
            animatedSp.anchor.set(this.anchorX, this.anchorY);
        }
    }
}
exports.SpriteAnimated = SpriteAnimated;


/***/ }),

/***/ "./src/display/TextInput.ts":
/*!**********************************!*\
  !*** ./src/display/TextInput.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlInput_1 = __webpack_require__(/*! ./private/HtmlInput */ "./src/display/private/HtmlInput.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const InputBase_1 = __webpack_require__(/*! ./private/InputBase */ "./src/display/private/InputBase.ts");
const Image_1 = __webpack_require__(/*! ./Image */ "./src/display/Image.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 文本输入
 *
 * @example let textInput = new gui.TextInput(true|false);//单行或多行
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTextInput
 */
class TextInput extends InputBase_1.InputBase {
    constructor(multiline = false) {
        super();
        this._oldState = "";
        this._resolution = 1;
        this._previous = {};
        /**
         * 预览文字的样式
         */
        this.placeholderColor = 0xa9a9a9;
        this._domVisible = true;
        this.state = 'DEFAULT';
        /**
         * 预览文字
         */
        this._placeholder = '';
        /**
         * 设置最大可输入
         */
        this._maxLength = 99999;
        /**
         * 状态展示
        */
        this.img = new Image_1.Image();
        this._inputStyle = Object.assign({
            position: 'absolute',
            background: 'none',
            border: 'none',
            outline: 'none',
            transformOrigin: '0 0',
            padding: '5px 8px',
            color: '#26272e',
            lineHeight: '1',
            fontSize: "25px"
        }, {
            multiline: multiline
        });
        this.htmlInputShared = new HtmlInput_1.default(this._inputStyle.multiline);
        this.htmlInputShared.setStyle(this._inputStyle);
        this.htmlInputShared.on("input" /* input */, this._onInputInput, this);
        this.htmlInputShared.on('focus', this._onFocused, this);
        this.htmlInputShared.on('blur', this._onBlurred, this);
        this.img.fillMode = "scale";
        this.img.scale9Grid = [3, 3, 3, 3];
        this.addChild(this.img);
        this._textHitbox = new PIXI.Graphics();
        this._textHitbox.name = "_textHitbox";
        this._textHitbox.alpha = 0;
        this._textHitbox.interactive = true;
        this._textHitbox.cursor = 'text';
        this._textHitbox.on('pointerdown', this._ontextFocus, this);
        this.container.addChild(this._textHitbox);
        this._textMask = new PIXI.Graphics();
        this._textMask.name = "_textMask";
        this.container.addChild(this._textMask);
        this._text = new PIXI.Text('', {});
        this._text.name = "_text";
        this._text.visible = false;
        this.container.addChild(this._text);
        this._text.mask = this._textMask;
        this._domVisible = false;
        this.container.interactiveChildren = true;
        this.on(Index_1.ComponentEvent.STATE_CHANGE, this.onStateChange, this);
        this.container.isEmitRender = false;
        this.container.on("renderChange", this.updateSystem, this);
    }
    /**
     * 设置文本
     */
    get text() {
        return this._text.text;
    }
    set text(value) {
        this._text.text = value;
        this.container.isEmitRender = true;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.container.isEmitRender = true;
    }
    get maxLength() {
        return this._maxLength;
    }
    set maxLength(value) {
        this._maxLength = value;
        this.container.isEmitRender = true;
    }
    get restrict() {
        return this._restrict;
    }
    set restrict(value) {
        this._restrict = value;
        this.container.isEmitRender = true;
    }
    // GETTERS & SETTERS
    updateSystem(renderer) {
        if (renderer === undefined) {
            return;
        }
        const { htmlInputShared } = this;
        htmlInputShared.maxlength = this.maxLength;
        htmlInputShared.placeholder = this.placeholder;
        htmlInputShared.disabled = !this.enabled;
        htmlInputShared.restrict = this.restrict;
        this.setInputStyle("fontFamily", this.style.fontFamily);
        this.setInputStyle("fontSize", this.style.fontSize);
        this.setInputStyle("color", this.style.color);
        this.setInputStyle("width", this._width + "px");
        this.setInputStyle("height", this._height + "px");
        this.render(renderer);
        this.onStateChange(this, this.currentState);
        this.container.isEmitRender = false;
    }
    /**
     * 设置焦点
     */
    focus() {
        this.htmlInputShared.focus();
    }
    /**
     * 失去焦点
     */
    blur() {
        this.htmlInputShared.blur();
    }
    /**
     * 设置css style样式
     * @param key 健
     * @param value 值
     */
    setInputStyle(key, value) {
        if (key === "fontSize") {
            value = value + "px";
        }
        if (key === "color") {
            value = "#" + Utils_1.componentToHex(value);
        }
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key, value);
    }
    onStateChange(ui, state) {
        if (this._oldState == state) {
            return;
        }
        if (!this.enabled) {
            this.currentState = "disabled";
        }
        this._oldState = state;
        const img = this.img;
        img.src = this[state];
    }
    // SETUP
    _onInputInput() {
        this._updateSubstitution();
    }
    _onFocused() {
        this._setState('FOCUSED');
    }
    _onBlurred() {
        this._setState('DEFAULT');
    }
    _setState(state) {
        this.state = state;
        this._updateSubstitution();
    }
    _updateSubstitution() {
        if (this.state === 'FOCUSED') {
            this._domVisible = true;
            this._text.visible = false;
        }
        else {
            this._domVisible = false;
            this._text.visible = true;
        }
        this._updateDOMInput();
        this._updatetext();
    }
    // RENDER & UPDATE
    // for pixi v5
    render(renderer) {
        this._renderInternal(renderer);
    }
    _renderInternal(renderer) {
        this._resolution = renderer.resolution;
        this._lastRenderer = renderer;
        this._canvasBounds = this._getCanvasBounds();
        if (this._needsUpdate()) {
            this._updateSubstitution();
        }
    }
    _updateDOMInput() {
        if (!this._canvasBounds)
            return;
        const cb = this._canvasBounds;
        const transform = this._pixiMatrixToCSS(this._getDOMRelativeWorldTransform());
        this.htmlInputShared.updatePostion(cb.top, cb.left, transform, this.container.worldAlpha);
        this.htmlInputShared.visible = this.container.worldVisible && this._domVisible;
        this._previous.canvasBounds = this._canvasBounds;
        this._previous.worldTransform = this.container.worldTransform.clone();
        this._previous.worldAlpha = this.container.worldAlpha;
        this._previous.worldVisible = this.container.worldVisible;
    }
    // STATE COMPAIRSON (FOR PERFORMANCE BENEFITS)
    _needsUpdate() {
        return (!this._comparePixiMatrices(this.container.worldTransform, this._previous.worldTransform)
            || !this._compareClientRects(this._canvasBounds, this._previous.canvasBounds)
            || this.container.worldAlpha != this._previous.worldAlpha
            || this.container.worldVisible != this._previous.worldVisible);
    }
    _updatetext() {
        const padding = this._derivetextPadding();
        const inputBounds = this.htmlInputShared.getDOMInputBounds();
        this._text.style = this._derivetextStyle();
        this._text.style.padding = Math.max(...padding);
        this._text.y = this._inputStyle.multiline ? padding[0] : (inputBounds.height - this._text.height) / 2;
        this._text.x = padding[3];
        if (this._inputStyle.multiline) {
            this._text.style.wordWrap = true;
            this._text.style.wordWrapWidth = inputBounds.width;
            this._text.style.breakWords = true;
        }
        this._text.text = this._derivetextText();
        this._textHitbox.clear();
        this._textHitbox.beginFill(0);
        this._textHitbox.drawRect(0, 0, inputBounds.width, inputBounds.height);
        this._textHitbox.endFill();
        this._textHitbox.interactive = this.enabled;
        this._textMask.clear();
        this._textMask.beginFill(0);
        this._textMask.drawRect(padding[3], 0, inputBounds.width - padding[3] - padding[1], inputBounds.height);
        this._textMask.endFill();
        this.img.width = inputBounds.width;
        this.img.height = inputBounds.height;
    }
    _ontextFocus() {
        this.htmlInputShared.visible = true;
        //sometimes the input is not being focused by the mouseclick
        setTimeout(this._ensureFocus.bind(this), 10);
    }
    _ensureFocus() {
        if (!this._hasFocus())
            this.focus();
    }
    _derivetextStyle() {
        const style = new PIXI.TextStyle();
        for (const key in this._inputStyle) {
            switch (key) {
                case 'color':
                    style.fill = this._inputStyle.color;
                    break;
                case 'fontFamily':
                case 'fontSize':
                case 'fontWeight':
                case 'fontVariant':
                case 'fontStyle':
                    style[key] = this._inputStyle[key];
                    break;
                case 'letterSpacing':
                    style.letterSpacing = parseFloat(this._inputStyle.letterSpacing);
                    break;
            }
        }
        if (this._inputStyle.multiline) {
            style.lineHeight = parseFloat(style.fontSize);
            style.wordWrap = true;
            style.wordWrapWidth = this.htmlInputShared.getDOMInputBounds().width;
        }
        if (this.htmlInputShared.value.length === 0)
            style.fill = this.placeholderColor;
        return style;
    }
    _derivetextPadding() {
        const indent = this._inputStyle.textIndent ? parseFloat(this._inputStyle.textIndent) : 0;
        if (this._inputStyle.padding && this._inputStyle.padding.length > 0) {
            const components = this._inputStyle.padding.trim().split(' ');
            if (components.length == 1) {
                const padding = parseFloat(components[0]);
                return [padding, padding, padding, padding + indent];
            }
            else if (components.length == 2) {
                const paddingV = parseFloat(components[0]);
                const paddingH = parseFloat(components[1]);
                return [paddingV, paddingH, paddingV, paddingH + indent];
            }
            else if (components.length == 4) {
                const padding = components.map(component => {
                    return parseFloat(component);
                });
                padding[3] += indent;
                return padding;
            }
        }
        return [0, 0, 0, indent];
    }
    _derivetextText() {
        return this.htmlInputShared.value.length === 0 ? this.placeholder : this.htmlInputShared.value;
    }
    // private _updateFontMetrics() {
    //     const style = this._derivetextStyle();
    //     const font = style.toFontString();
    //     this._fontMetrics = PIXI.TextMetrics.measureFont(font);
    // }
    // HELPER FUNCTIONS
    _hasFocus() {
        return document.activeElement === this.htmlInputShared.domInput;
    }
    _getCanvasBounds() {
        if (this._lastRenderer) {
            const rect = this._lastRenderer.view.getBoundingClientRect();
            const bounds = { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
            bounds.left += window.scrollX;
            bounds.top += window.scrollY;
            return bounds;
        }
        return undefined;
    }
    _getDOMRelativeWorldTransform() {
        if (this._lastRenderer) {
            const canvasBounds = this._lastRenderer.view.getBoundingClientRect();
            const matrix = this.container.worldTransform.clone();
            matrix.scale(this._resolution, this._resolution);
            matrix.scale(canvasBounds.width / this._lastRenderer.width, canvasBounds.height / this._lastRenderer.height);
            return matrix;
        }
    }
    _pixiMatrixToCSS(m) {
        return 'matrix(' + [m.a, m.b, m.c, m.d, m.tx, m.ty].join(',') + ')';
    }
    _comparePixiMatrices(m1, m2) {
        if (!m1 || !m2)
            return false;
        return (m1.a == m2.a
            && m1.b == m2.b
            && m1.c == m2.c
            && m1.d == m2.d
            && m1.tx == m2.tx
            && m1.ty == m2.ty);
    }
    _compareClientRects(r1, r2) {
        if (!r1 || !r2)
            return false;
        return (r1.left == r2.left
            && r1.top == r2.top
            && r1.width == r2.width
            && r1.height == r2.height);
    }
    release() {
        super.release();
        this.container.removeChild(this._text);
        this.container.removeChild(this._textHitbox);
        this.img.release();
        this._text.destroy();
        this._textHitbox && this._textHitbox.destroy();
        this.htmlInputShared.release();
        this.container.off("renderChange", this.updateSystem, this);
        this.offAll(Index_1.ComponentEvent.STATE_CHANGE);
    }
}
exports.TextInput = TextInput;


/***/ }),

/***/ "./src/display/private/HtmlInput.ts":
/*!******************************************!*\
  !*** ./src/display/private/HtmlInput.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
 */
class HtmlInput extends PIXI.utils.EventEmitter {
    constructor(multiline) {
        super();
        this._selection = [0, 0];
        this._restrict_value = '';
        console.log("创建HtmlInput");
        this._domInput = this.addDom(multiline);
        this.visible = false;
        document.body.appendChild(this._domInput);
    }
    get domInput() {
        return this._domInput;
    }
    set visible(value) {
        this._domInput.style.display = value ? 'block' : 'none';
    }
    get visible() {
        if (this._domInput.style.display === 'block')
            return true;
        return false;
    }
    get value() {
        return this._domInput.value;
    }
    set value(value) {
        this._domInput.value = value;
    }
    set placeholder(value) {
        this._domInput.placeholder = value;
    }
    set disabled(value) {
        this._domInput.disabled = value;
    }
    get maxlength() {
        return this._domInput.maxLength;
    }
    set maxlength(value) {
        this._domInput.maxLength = value;
    }
    /* 输入郑泽斌表达式 */
    get restrict() {
        return this._restrictRegex;
    }
    set restrict(regex) {
        if (regex === undefined) {
            return;
        }
        if (regex instanceof RegExp) {
            let str = regex.toString().slice(1, -1);
            if (str.charAt(0) !== '^')
                str = '^' + str;
            if (str.charAt(str.length - 1) !== '$')
                str = str + '$';
            regex = new RegExp(str);
        }
        else {
            regex = new RegExp('^[' + regex + ']*$');
        }
        this._restrictRegex = regex;
    }
    setStyle(style) {
        for (let key in style) {
            this._domInput.style[key] = style[key];
        }
        //this._domInput.setAttribute("style", stylestr);
    }
    setStyleValue(key, value) {
        this._domInput.style[key] = value;
    }
    select() {
        this._domInput.select();
    }
    /** 测量，需要对象添加到body中 */
    getDOMInputBounds() {
        let org_transform = this._domInput.style.transform;
        let org_display = this._domInput.style.display;
        this._domInput.style.transform = '';
        this._domInput.style.display = 'block';
        let bounds = this._domInput.getBoundingClientRect();
        this._domInput.style.transform = org_transform;
        this._domInput.style.display = org_display;
        return bounds;
    }
    updatePostion(top, left, transform, opacity) {
        this._domInput.style.top = top + 'px';
        this._domInput.style.left = left + 'px';
        this._domInput.style.transform = transform;
        if (opacity)
            this._domInput.style.opacity = opacity.toString();
    }
    addDom(multiline) {
        if (multiline) {
            this._domInput = document.createElement('textarea');
            this._domInput.style.resize = 'none';
        }
        else {
            this._domInput = document.createElement('input');
            this._domInput.type = 'text';
        }
        this.addEvent();
        document.body.appendChild(this._domInput);
        return this._domInput;
    }
    removeDom() {
        if (this._domInput) {
            document.body.removeChild(this._domInput);
        }
    }
    release() {
        this.removeDom();
        this.removeEvent();
        this.removeAllListeners();
    }
    addEvent() {
        if (this._onInputKeyDownBind) {
            return;
        }
        this._onInputKeyDownBind = this._onInputKeyDown.bind(this);
        this._onInputInputBind = this._onInputInput.bind(this);
        this._onInputKeyUpBind = this._onInputKeyUp.bind(this);
        this._onFocusedBind = this._onFocused.bind(this);
        this._onBlurredBind = this._onBlurred.bind(this);
        this._domInput.addEventListener('keydown', this._onInputKeyDownBind, { passive: false });
        this._domInput.addEventListener('input', this._onInputInputBind, { passive: false });
        this._domInput.addEventListener('keyup', this._onInputKeyUpBind, { passive: false });
        this._domInput.addEventListener('focus', this._onFocusedBind, { passive: false });
        this._domInput.addEventListener('blur', this._onBlurredBind, { passive: false });
    }
    removeEvent() {
        if (this._onInputKeyDownBind) {
            this._domInput.removeEventListener('keydown', this._onInputKeyDownBind);
            this._domInput.removeEventListener('input', this._onInputInputBind);
            this._domInput.removeEventListener('keyup', this._onInputKeyUpBind);
            this._domInput.removeEventListener('focus', this._onFocusedBind);
            this._domInput.removeEventListener('blur', this._onBlurredBind);
            this._onInputKeyDownBind = undefined;
            this._onInputInputBind = undefined;
            this._onInputKeyUpBind = undefined;
            this._onFocusedBind = undefined;
            this._onBlurredBind = undefined;
        }
    }
    _applyRestriction() {
        if (this._restrictRegex) {
            if (this._restrictRegex.test(this.value)) {
                this._restrict_value = this.value;
            }
            else {
                this.value = this._restrict_value;
                this._domInput.setSelectionRange(this._selection[0], this._selection[1]);
            }
        }
    }
    _onInputKeyDown(e) {
        this._selection = [
            this._domInput.selectionStart || 0,
            this._domInput.selectionEnd || 0
        ];
        this.emit("keydown" /* keydown */, this, e.keyCode);
        //e.preventDefault();
    }
    _onInputInput(e) {
        if (e.data != null) {
            if (this._restrictRegex)
                this._applyRestriction();
        }
        this.emit("input" /* input */, this.value);
        e.preventDefault();
    }
    _onInputKeyUp(e) {
        this.emit("keyup" /* keyup */, this.value);
        e.preventDefault();
    }
    _onFocused(e) {
        this.emit('focus');
        e.preventDefault();
    }
    _onBlurred(e) {
        this.emit('blur');
        e.preventDefault();
    }
    focus() {
        document.body.removeChild(this._domInput);
        document.body.appendChild(this._domInput);
        this._domInput.focus();
    }
    blur() {
        this._domInput.blur();
    }
}
exports.default = HtmlInput;


/***/ }),

/***/ "./src/display/private/InputBase.ts":
/*!******************************************!*\
  !*** ./src/display/private/InputBase.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = __webpack_require__(/*! ../../core/DisplayObject */ "./src/core/DisplayObject.ts");
const Index_1 = __webpack_require__(/*! ../../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 输入对象的基础类
 */
class InputBase extends DisplayObject_1.DisplayObject {
    constructor() {
        super();
        this.clickEvent = new Index_1.ClickEvent(this, true);
        this._currentState = "up";
        this._focused = false;
        this._useTab = true;
        this._usePrev = true;
        this._useNext = true;
        this._down = false;
        //this.container.interactive = true;
        this.container.interactiveChildren = false;
        this.on(Index_1.TouchMouseEvent.onMove, this.onMove, this);
        this.on(Index_1.TouchMouseEvent.onHover, this.onHover, this);
        this.on(Index_1.TouchMouseEvent.onPress, this.onPress, this);
        this.on(Index_1.TouchMouseEvent.onClick, this.onClick, this);
    }
    ;
    get currentState() {
        return this._currentState;
    }
    set currentState(value) {
        if (this._currentState == value) {
            return;
        }
        this._currentState = value;
        this.emit(Index_1.ComponentEvent.STATE_CHANGE, this, value);
    }
    onMove() {
        if (this._down) {
            return;
        }
        this.currentState = "move";
    }
    //e: InteractionEvent,thisObj: DisplayObject,over: boolean
    onHover() {
        this.currentState = "up";
    }
    onPress(e, thisObj, isPress) {
        this._down = isPress;
        if (isPress) {
            this.focus();
            this.currentState = "down";
        }
        else {
            this.currentState = "up";
        }
    }
    onClick() {
        //this.currentState = "up";
    }
    keyDownEvent(event) {
        const e = event;
        if (e.which === 9) {
            if (this._useTab) {
                Index_1.InputController.fireTab();
                e.preventDefault();
            }
        }
        else if (e.which === 38) {
            if (this._usePrev) {
                Index_1.InputController.firePrev();
                e.preventDefault();
            }
        }
        else if (e.which === 40) {
            if (this._useNext) {
                Index_1.InputController.fireNext();
                e.preventDefault();
            }
        }
    }
    documentMouseDown() {
        if (this.currentState !== "down") {
            this.blur();
        }
    }
    _bindEvents() {
        if (this.stage) {
            this.stage.on("pointerdown", this.documentMouseDown, this);
            this.keyDownEventBind = this.keyDownEvent.bind(this);
            document.addEventListener("keydown", this.keyDownEventBind);
        }
    }
    _clearEvents() {
        if (this.stage) {
            this.stage.off("pointerdown", this.documentMouseDown, this);
            document.removeEventListener("keydown", this.keyDownEventBind);
        }
    }
    focus() {
        if (!this._focused) {
            this._focused = true;
            this._bindEvents();
            Index_1.InputController.set(this);
            this.emit("focusChanged", true);
            this.emit("focus");
        }
    }
    blur() {
        if (this._focused) {
            Index_1.InputController.clear();
            this._focused = false;
            this._clearEvents();
            this.emit("focusChanged", false);
            this.emit("blur");
        }
    }
    release() {
        super.release();
        this.off(Index_1.TouchMouseEvent.onMove, this.onMove, this);
        this.off(Index_1.TouchMouseEvent.onHover, this.onHover, this);
        this.off(Index_1.TouchMouseEvent.onPress, this.onPress, this);
        this.off(Index_1.TouchMouseEvent.onClick, this.onClick, this);
        if (this.keyDownEventBind)
            document.removeEventListener("keydown", this.keyDownEventBind);
        if (this.documentMouseDown && this.stage)
            this.stage.off("pointerdown", this.documentMouseDown, this);
    }
    setTabIndex(index, group) {
        this._tabIndex = index;
        this._tabGroup = group;
        if (index !== undefined && group !== undefined) {
            Index_1.InputController.registrer(this, index, group);
        }
    }
}
exports.InputBase = InputBase;


/***/ }),

/***/ "./src/event/ComponentEvent.ts":
/*!*************************************!*\
  !*** ./src/event/ComponentEvent.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 特定属性改变时,通常为了去系统事件区分，UI组件的事件名为大写
 * 1. CheckBox 的 checked 改变时
 * 2. Label 的 text 改变时
 * 3. SpriteAnimated 的 animationName 改变时
 * 4. Button 文字改变
 * 5. ScrollingContainer 拖动改变时
 * 6. Slider 滑动改变后
 * 7. SpriteAnimated 动画改变后
 */
exports.CHANGE = "CHANGE";
/**
 * 状态改变中
 *
 * slider 滑动时
 */
exports.CHANGEING = "CHANGEING";
/**
 * 状态切换完成时
 *
 * 1. SpriteAnimated 每次播放完时，触发(loop = false时)
 * 2. Image 图片加载完成时
 * 3. Slider 滑动完成
 * 4. Timeline  每次播放完时，触发(loop = false时)
 */
exports.COMPLETE = "COMPLETE";
/**
 * 状态发生改变时
 */
exports.STATE_CHANGE = "STATE_CHANGE";
/**
 * 状态切换完成时
 *
 * SpriteAnimated 每次播放完时，，触发(loop = true时)
 */
exports.LOOP = "LOOP";
/**
 * 组件被添加前
 */
exports.ADD = "add";
/**
 * 组件被添加时
 */
exports.ADDED = "added";
/**
 * 组件被移除时
 */
exports.REMOVEED = "removed";
/**
 * 组件大小改变后
 */
exports.RESIZE = "RESIZE";
/**
 * 组件位置移动
 */
exports.MOVE = "MOVE";
/**
 * 组件创建完成后
 */
exports.CREATION_COMPLETE = "CREATION_COMPLETE";
/**
 * 组件拖动开始之前
 */
exports.DRAG_START_BEFORE = "DRAG_START_BEFORE";
/**
 * 组件拖动开始时
 */
exports.DRAG_START = "DRAG_START";
/**
 * 组件拖动结束之前
 */
exports.DRAG_END_BEFORE = "DRAG_END_BEFORE";
/**
 * 组件拖动结束时 （如果绑定接收容器并拖动到接收容器中，不会触发此事件）
 */
exports.DRAG_END = "DRAG_END";
/**
 * 组件拖动中
 */
exports.DRAG_MOVE = "DRAG_MOVE";
/**
 * 组件拖动到接收目标中之前
 */
exports.DRAG_TARGET_BEFORE = "DRAG_TARGET_BEFORE";
/**
 * 组件拖动到接收目标中
 */
exports.DRAG_TARGET = "DRAG_TARGET";
/**
 * 有拖拽物掉落到此容器时触发
 */
exports.DROP_TARGET = "DROP_TARGET";


/***/ }),

/***/ "./src/event/Index.ts":
/*!****************************!*\
  !*** ./src/event/Index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEvent = __webpack_require__(/*! ./ComponentEvent */ "./src/event/ComponentEvent.ts");
exports.ComponentEvent = ComponentEvent;
const InteractionEvent_1 = __webpack_require__(/*! ./InteractionEvent */ "./src/event/InteractionEvent.ts");
exports.InteractionEvent = InteractionEvent_1.InteractionEvent;
//import {KeyEvent} from "./KeyEvent";
const TouchMouseEvent_1 = __webpack_require__(/*! ./TouchMouseEvent */ "./src/event/TouchMouseEvent.ts");
exports.TouchMouseEvent = TouchMouseEvent_1.TouchMouseEvent;
const TweenEvent_1 = __webpack_require__(/*! ./TweenEvent */ "./src/event/TweenEvent.ts");
exports.TweenEvent = TweenEvent_1.TweenEvent;


/***/ }),

/***/ "./src/event/InteractionEvent.ts":
/*!***************************************!*\
  !*** ./src/event/InteractionEvent.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件的基础类
 *
 * 触摸或鼠标操作事件 可查看 -> TouchEventEnum.TouchEnum
 *
 * import InteractionEvent from "../interaction/InteractionEvent",
 */
class InteractionEvent extends PIXI.interaction.InteractionEvent {
    constructor() {
        super();
    }
}
exports.InteractionEvent = InteractionEvent;


/***/ }),

/***/ "./src/event/TouchMouseEvent.ts":
/*!**************************************!*\
  !*** ./src/event/TouchMouseEvent.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 对外，封装的点击触摸事件
 *
 * import InteractionEvent,{Mouse} from "../interaction/InteractionEvent",
 */
exports.TouchMouseEvent = {
    /**
     * 移出
     *
     * (e: InteractionEvent,thisObj:DisplayObject,over: boolean)=>{}
     */
    onHover: "hover",
    /**
     * 按下
     *
     * (e: InteractionEvent,thisObj:DisplayObject, isPressed: boolean)=>void
     */
    onPress: "press",
    /**
     * 按下
     */
    onDown: "down",
    /**
     * 弹起
     */
    onUp: "up",
    /**
     * 点击
     *
     * (e: InteractionEvent,thisObj:DisplayObject)=>void
     */
    onClick: "click",
    /**
     * 移动
     *
     * (e: InteractionEvent,thisObj:DisplayObject)=>void
     */
    onMove: "move",
};


/***/ }),

/***/ "./src/event/TweenEvent.ts":
/*!*********************************!*\
  !*** ./src/event/TweenEvent.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 缓动事件
 */
exports.TweenEvent = {
    /**
     *
     */
    Callback: 'Callback',
    /**
     * 每次改变
     */
    update: 'update',
    /**
     * 完成
     */
    complete: 'complete',
    /**
     * 开始时
     */
    start: 'start',
    /**
     * 每次重复时
     */
    repeat: 'repeat',
    /**
     * 反向时
     */
    reverse: 'reverse',
    /**
     * 暂停时
     */
    pause: 'pause',
    /**
     * 播放时
     */
    play: 'play',
    /**
     * 重新开始时
     */
    restart: 'restart',
    /**
     * 停止时
     */
    stop: 'stop'
};


/***/ }),

/***/ "./src/interaction/ClickEvent.ts":
/*!***************************************!*\
  !*** ./src/interaction/ClickEvent.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TouchMouseEvent_1 = __webpack_require__(/*! ../event/TouchMouseEvent */ "./src/event/TouchMouseEvent.ts");
/**
 * 点击触摸相关的事件处理订阅类,UI组件内部可以创建此类实现点击相关操作
 *
 *  可侦听事件:
 * ```
 *  {InteractionEvent}.TouchEvent.onHover
 *  {InteractionEvent}.TouchEvent.onPress
 *  {InteractionEvent}.TouchEvent.onClick
 *  {InteractionEvent}.TouchEvent.onMove
 * ```
 *  可赋值方法:
 * ```
 *  onHover: ((e: InteractionEvent,thisOBj:DisplayObject,over: boolean) => void) | undefined
 *  onPress: ((e: InteractionEvent,thisOBj:DisplayObject, isPressed: boolean) => void) | undefined;
 *  onClick: ((e: InteractionEvent,thisOBj:DisplayObject) => void) | undefined
 *  onMove: ((e: InteractionEvent,thisOBj:DisplayObject) => void) | undefined
 * ```
 *
 * @example 可查看 `TestSliceSprite` 示例
 *
 * @since 1.0.0
 */
class ClickEvent {
    /**
     * ClickEvent 构造函数
     * @param obj 调用的显示对象
     * @param isOpenEmitEvent 是否开启事件派发，默认false，开启后，父类可以监听InteractionEvent下的TouchEvent
     * @param includeHover 是否监听鼠标移上与移出，默认true
     * @param rightMouseButton 是否开启鼠标右键点击，默认false
     * @param doubleClick 是否开启鼠标双击,默认false
     */
    constructor(obj, isOpenEmitEvent, includeHover, rightMouseButton, doubleClick) {
        this.id = 0;
        /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | gui.Interaction.TouchEvent */
        this.isOpenEmitEvent = false;
        this.offset = new PIXI.Point();
        this.movementX = 0;
        this.movementY = 0;
        this.ishover = false;
        this.mouse = new PIXI.Point();
        this.bound = false;
        this.right = false;
        this.hover = true;
        this.double = false;
        this.time = 0;
        this.eventnameMousedown = "mousedown" /* mousedown */;
        this.eventnameMouseup = "mouseup" /* mouseup */;
        this.eventnameMouseupoutside = "mouseupoutside" /* mouseupoutside */;
        this.isStop = true;
        this.obj = obj;
        if (isOpenEmitEvent !== undefined) {
            this.isOpenEmitEvent = isOpenEmitEvent;
        }
        if (includeHover !== undefined) {
            this.right = includeHover;
        }
        if (rightMouseButton !== undefined) {
            this.hover = rightMouseButton;
        }
        if (doubleClick !== undefined) {
            this.double = doubleClick;
        }
        if (this.right) {
            this.eventnameMousedown = "rightdown" /* mouseRightDown */;
            this.eventnameMouseup = "rightup" /* mouseRightup */;
            this.eventnameMouseupoutside = "rightupoutside" /* mouseRightupoutside */;
        }
        obj.interactive = true;
        this.startEvent();
    }
    startEvent() {
        if (this.isStop) {
            this.obj.container.on(this.eventnameMousedown, this._onMouseDown, this);
            if (!this.right)
                this.obj.container.on("touchstart" /* touchstart */, this._onMouseDown, this);
            if (this.hover) {
                this.obj.container.on("mouseover" /* mouseover */, this._onMouseOver, this);
                this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
            }
            this.isStop = false;
        }
    }
    /** 清除拖动 */
    stopEvent() {
        if (this.bound) {
            this.obj.container.off(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.off(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.off("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.off("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = false;
        }
        this.obj.container.off(this.eventnameMousedown, this._onMouseDown, this);
        if (!this.right)
            this.obj.container.off("touchstart" /* touchstart */, this._onMouseDown, this);
        if (this.hover) {
            this.obj.container.off("mouseover" /* mouseover */, this._onMouseOver, this);
            this.obj.container.off("mouseout" /* mouseout */, this._onMouseOut, this);
            this.obj.container.off("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.off("touchmove" /* touchmove */, this._onMouseMove, this);
        }
        this.isStop = true;
    }
    _onMouseDown(e) {
        this.mouse.copyFrom(e.data.global);
        this.id = e.data.identifier;
        this.onPress && this.onPress.call(this.obj, e, this.obj, true), this.obj;
        this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onPress, e, true);
        if (this.obj.listenerCount(TouchMouseEvent_1.TouchMouseEvent.onDown) > 0) {
            this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onDown, e);
        }
        if (!this.bound) {
            this.obj.container.on(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.on(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.on("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.on("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = true;
        }
        if (this.double) {
            const now = performance.now();
            if (now - this.time < 210) {
                this.onClick && this.onClick.call(this.obj, e, this.obj);
                this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onClick, e);
            }
            else {
                this.time = now;
            }
        }
        e.data.originalEvent.preventDefault();
    }
    emitTouchEvent(event, e, ...args) {
        if (this.isOpenEmitEvent) {
            e.type = event.toString();
            this.obj.emit(e.type, e, this.obj, ...args);
        }
    }
    _mouseUpAll(e) {
        if (e.data.identifier !== this.id)
            return;
        this.offset.set(e.data.global.x - this.mouse.x, e.data.global.y - this.mouse.y);
        if (this.bound) {
            this.obj.container.off(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.off(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.off("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.off("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = false;
        }
        this.onPress && this.onPress.call(this.obj, e, this.obj, false);
        if (this.obj.listenerCount(TouchMouseEvent_1.TouchMouseEvent.onUp) > 0) {
            this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onUp, e);
        }
        this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onPress, e, false);
    }
    _onMouseUp(e) {
        if (e.data.identifier !== this.id)
            return;
        this._mouseUpAll(e);
        //prevent clicks with scrolling/dragging objects
        if (this.obj.dragThreshold) {
            this.movementX = Math.abs(this.offset.x);
            this.movementY = Math.abs(this.offset.y);
            if (Math.max(this.movementX, this.movementY) > this.obj.dragThreshold)
                return;
        }
        if (!this.double) {
            this.onClick && this.onClick.call(this.obj, e, this.obj);
            this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onClick, e, false);
        }
    }
    _onMouseUpOutside(e) {
        if (e.data.identifier !== this.id)
            return;
        this._mouseUpAll(e);
    }
    _onMouseOver(e) {
        if (!this.ishover) {
            this.ishover = true;
            this.obj.container.on("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.on("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, true);
            this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onHover, e, true);
        }
    }
    _onMouseOut(e) {
        if (this.ishover) {
            this.ishover = false;
            this.obj.container.off("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.off("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, false);
            this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onHover, e, false);
        }
    }
    _onMouseMove(e) {
        this.onMove && this.onMove.call(this.obj, e, this.obj);
        this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onMove, e);
    }
    remove() {
        this.stopEvent();
        this.onPress = undefined;
        this.onHover = undefined;
        this.onClick = undefined;
        this.onMove = undefined;
        this.obj.container.interactive = false;
    }
}
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ "./src/interaction/DragDropController.ts":
/*!***********************************************!*\
  !*** ./src/interaction/DragDropController.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 记录当前正在拖动的UI组件列表
 * @private
 */
exports._items = [];
/**
 * 添加拖动组件到控制器
 * @param item 要添加的UI组件
 * @param e 传送的事件
 * @returns true|false
 * @since 1.0.0
 */
function add(item, e) {
    item.attach.dragDropEventId = e.data.identifier;
    if (exports._items.indexOf(item) === -1) {
        exports._items.push(item);
        return true;
    }
    return false;
}
exports.add = add;
/**
 * 获取正在拖动组件
 * @param item 要获取的UI组件
 * @returns flase | item
 */
function getItem(item) {
    let index;
    for (let i = 0; i < exports._items.length; i++) {
        if (exports._items[i] === item) {
            index = i;
            break;
        }
    }
    if (index !== undefined) {
        exports._items.splice(index, 1);
        return item;
    }
    else {
        return false;
    }
}
exports.getItem = getItem;
/**
 * 根据事件对象与分组名获取拖动项
 * @param e 事件对象
 * @param group 分组名
 */
function getEventItem(e, group) {
    let item = null, index;
    const id = e.data.identifier;
    for (let i = 0; i < exports._items.length; i++) {
        if (exports._items[i].attach.dragDropEventId === id) {
            if (group !== exports._items[i].attach.dragGroup && exports._items[i].attach.dragGroup !== "") {
                return false;
            }
            item = exports._items[i];
            index = i;
            break;
        }
    }
    if (index !== undefined) {
        exports._items.splice(index, 1);
        return item;
    }
    else {
        return false;
    }
}
exports.getEventItem = getEventItem;


/***/ }),

/***/ "./src/interaction/DragEvent.ts":
/*!**************************************!*\
  !*** ./src/interaction/DragEvent.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 多拽相关的事件处理类
 *
 *  可侦听事件:
 * ```
 *  {InteractionEvent}.DraggableEvent.onDragPress
 *  {InteractionEvent}.DraggableEvent.onDragStart
 *  {InteractionEvent}.DraggableEvent.onDragMove
 *  {InteractionEvent}.DraggableEvent.onDragEnd
 * ```
 *  可赋值方法:
 * ```
 * onPress: ((e: InteractionEvent, isPressed: boolean,dragObj?: DragEvent) => void) | undefined;
 * onDragEnd: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
 * onDragMove: ((e: InteractionEvent, offset: PIXI.Point,dragObj?: DragEvent) => void) | undefined
 * onDragStart: ((e: InteractionEvent,dragObj?: DragEvent) => void) | undefined
 * ```
 *
 * @example 可查看 `Slider` 源码
 *
 * @since 1.0.0
 */
class DragEvent {
    constructor(obj) {
        this.id = 0;
        this.offset = new PIXI.Point();
        this.movementX = 0;
        this.movementY = 0;
        this.bound = false;
        this.start = new PIXI.Point();
        this.mouse = new PIXI.Point();
        this.cancel = false;
        this.dragging = false;
        this.isStop = true;
        this.obj = obj;
        obj.interactive = true;
        this.startEvent();
    }
    startEvent() {
        if (this.isStop) {
            this.obj.container.on("mousedown" /* mousedown */, this._onDragStart, this);
            this.obj.container.on("touchstart" /* touchstart */, this._onDragStart, this);
            this.isStop = false;
        }
    }
    _onDragStart(e) {
        this.id = e.data.identifier;
        this.onDragPress && this.onDragPress.call(this.obj, e, true, this);
        if (!this.bound && this.obj.parent && this.obj.stage) {
            const stage = this.obj.stage.container;
            this.start.copyFrom(e.data.global);
            stage.on("mousemove" /* mousemove */, this._onDragMove, this);
            stage.on("touchmove" /* touchmove */, this._onDragMove, this);
            stage.on("mouseup" /* mouseup */, this._onDragEnd, this);
            stage.on("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            stage.on("touchend" /* touchend */, this._onDragEnd, this);
            stage.on("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            stage.on("touchcancel" /* touchcancel */, this._onDragEnd, this);
            this.bound = true;
        }
        e.data.originalEvent.preventDefault();
    }
    _onDragMove(e) {
        if (e.data.identifier !== this.id)
            return;
        this.mouse.copyFrom(e.data.global);
        this.offset.set(this.mouse.x - this.start.x, this.mouse.y - this.start.y);
        if (!this.dragging) {
            this.movementX = Math.abs(this.offset.x);
            this.movementY = Math.abs(this.offset.y);
            if (this.movementX === 0 && this.movementY === 0 || Math.max(this.movementX, this.movementY) < this.obj.dragThreshold)
                return; //thresshold
            if (this.dragRestrictAxis !== undefined) {
                this.cancel = false;
                if (this.dragRestrictAxis == "x" && this.movementY > this.movementX)
                    this.cancel = true;
                else if (this.dragRestrictAxis == "y" && this.movementY <= this.movementX)
                    this.cancel = true;
                if (this.cancel) {
                    this._onDragEnd(e);
                    return;
                }
            }
            this.onDragStart && this.onDragStart.call(this.obj, e, this);
            this.dragging = true;
        }
        this.onDragMove && this.onDragMove.call(this.obj, e, this.offset, this);
    }
    _onDragEnd(e) {
        if (e.data.identifier !== this.id)
            return;
        if (this.bound && this.obj.stage) {
            const stage = this.obj.stage.container;
            stage.off("mousemove" /* mousemove */, this._onDragMove, this);
            stage.off("touchmove" /* touchmove */, this._onDragMove, this);
            stage.off("mouseup" /* mouseup */, this._onDragEnd, this);
            stage.off("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            stage.off("touchend" /* touchend */, this._onDragEnd, this);
            stage.off("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            stage.off("touchcancel" /* touchcancel */, this._onDragEnd, this);
            this.dragging = false;
            this.bound = false;
            this.onDragEnd && this.onDragEnd.call(this.obj, e, this);
            this.onDragPress && this.onDragPress.call(this.obj, e, false, this);
        }
    }
    /** 清除拖动 */
    stopEvent() {
        if (this.bound && this.obj.stage) {
            const stage = this.obj.stage.container;
            stage.off("mousemove" /* mousemove */, this._onDragMove, this);
            stage.off("touchmove" /* touchmove */, this._onDragMove, this);
            stage.off("mouseup" /* mouseup */, this._onDragEnd, this);
            stage.off("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            stage.off("touchend" /* touchend */, this._onDragEnd, this);
            stage.off("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            this.bound = false;
        }
        this.obj.container.off("mousedown" /* mousedown */, this._onDragStart, this);
        this.obj.container.off("touchstart" /* touchstart */, this._onDragStart, this);
        this.isStop = true;
    }
    remove() {
        this.stopEvent();
        this.onDragPress = undefined;
        this.onDragEnd = undefined;
        this.onDragMove = undefined;
        this.onDragStart = undefined;
        this.obj.interactive = false;
    }
}
exports.DragEvent = DragEvent;


/***/ }),

/***/ "./src/interaction/GroupController.ts":
/*!********************************************!*\
  !*** ./src/interaction/GroupController.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @private
 */
exports._GroupObject = new Map();
/**
 * 注册分组，
 */
function registrerGroup(ui) {
    if (ui.groupName) {
        let group = exports._GroupObject.get(ui.groupName);
        if (!group) {
            group = {};
            exports._GroupObject.set(ui.groupName, group);
        }
        group[ui.uuid] = ui;
    }
}
exports.registrerGroup = registrerGroup;
/**
 * 注销指定分组或指定分组的子项
 */
function unRegistrerGroup(ui) {
    if (ui.groupName) {
        const group = exports._GroupObject.get(ui.groupName);
        if (group) {
            delete group[ui.uuid];
        }
        let isKey = false;
        for (const key in group) {
            isKey = true;
            break;
        }
        if (isKey) {
            exports._GroupObject.delete(ui.groupName);
        }
    }
}
exports.unRegistrerGroup = unRegistrerGroup;
/** 设置选中 */
function getGroup(name) {
    if (name == undefined) {
        return undefined;
    }
    return exports._GroupObject.get(name);
}
exports.getGroup = getGroup;


/***/ }),

/***/ "./src/interaction/Index.ts":
/*!**********************************!*\
  !*** ./src/interaction/Index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./src/interaction/ClickEvent.ts");
exports.ClickEvent = ClickEvent_1.ClickEvent;
const DragDropController = __webpack_require__(/*! ./DragDropController */ "./src/interaction/DragDropController.ts");
exports.DragDropController = DragDropController;
const DragEvent_1 = __webpack_require__(/*! ./DragEvent */ "./src/interaction/DragEvent.ts");
exports.DragEvent = DragEvent_1.DragEvent;
const InputController = __webpack_require__(/*! ./InputController */ "./src/interaction/InputController.ts");
exports.InputController = InputController;
const MouseScrollEvent_1 = __webpack_require__(/*! ./MouseScrollEvent */ "./src/interaction/MouseScrollEvent.ts");
exports.MouseScrollEvent = MouseScrollEvent_1.MouseScrollEvent;
const InteractionEvent_1 = __webpack_require__(/*! ../event/InteractionEvent */ "./src/event/InteractionEvent.ts");
exports.InteractionEvent = InteractionEvent_1.InteractionEvent;
const TouchMouseEvent_1 = __webpack_require__(/*! ../event/TouchMouseEvent */ "./src/event/TouchMouseEvent.ts");
exports.TouchMouseEvent = TouchMouseEvent_1.TouchMouseEvent;
const ComponentEvent = __webpack_require__(/*! ../event/ComponentEvent */ "./src/event/ComponentEvent.ts");
exports.ComponentEvent = ComponentEvent;
const GroupController = __webpack_require__(/*! ./GroupController */ "./src/interaction/GroupController.ts");
exports.GroupController = GroupController;


/***/ }),

/***/ "./src/interaction/InputController.ts":
/*!********************************************!*\
  !*** ./src/interaction/InputController.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 记录当前正在拖动的UI组件列表
 * @private
 */
let _currentItem;
/**
 *
 * @private
 */
exports.tabGroups = {};
/**
 *
 * @private
 */
exports._checkGroupObject = {
    groups: {},
    values: {}
};
/**
 * 注册组件
 * @param item
 * @param tabIndex 切换位置
 * @param tabGroup 分组名
 * @returns 依据tabIndex返回是否需要排序 0，-1，1
 */
function registrer(item, tabIndex, tabGroup) {
    const groupName = tabGroup || "default";
    let items = exports.tabGroups[groupName];
    if (!items)
        items = exports.tabGroups[groupName] = [];
    const i = items.indexOf(item);
    if (i === -1) {
        item.attach._tabIndex = tabIndex !== undefined ? tabIndex : -1;
        item.attach._tabGroup = items;
        items.push(item);
        items.sort(function (a, b) {
            if (a.attach._tabIndex < b.attach._tabIndex)
                return -1;
            if (a.attach._tabIndex > b.attach._tabIndex)
                return 1;
            return 0;
        });
    }
}
exports.registrer = registrer;
/** 失去焦点时 */
function blur() {
    const obj = _currentItem;
    if (obj) {
        if (obj.blur && typeof obj.blur == "function") {
            obj.blur();
        }
    }
}
exports.blur = blur;
/** 设置当前输入组件 */
function set(item) {
    blur();
    _currentItem = item;
}
exports.set = set;
/** 清楚当前设置的组件 */
function clear() {
    _currentItem = undefined;
}
exports.clear = clear;
/** 一般再按下键盘tab健执行 焦点获取与设置 */
function fireTab() {
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup;
        let i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length)
            i = 0;
        const obj = _tabGroup[i];
        if (obj.focus)
            obj.focus();
    }
}
exports.fireTab = fireTab;
/** 一般再按下键盘向下箭头执行 焦点获取与设置 */
function fireNext() {
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup;
        let i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length)
            i = _tabGroup.length - 1;
        const obj = _tabGroup[i];
        if (obj.focus)
            obj.focus();
    }
}
exports.fireNext = fireNext;
/** 一般再按下键盘向上箭头执行 焦点获取与设置 */
function firePrev() {
    if (_currentItem) {
        const _tabGroup = _currentItem.attach._tabGroup;
        let i = _tabGroup.indexOf(_currentItem) - 1;
        if (i < 0)
            i = 0;
        const obj = _tabGroup[i];
        if (obj.focus)
            obj.focus();
    }
}
exports.firePrev = firePrev;
/**
 * 注册分组，一般用于checkBox组件的分组操作
 *
 *  ==== 目前没有实现卸载，如果无限制创建checkbox并设置分组可能引发泄露 ====
 *
 * checkGroups = [key]:{["value"]:cb}
 */
function registrerCheckGroup(cb) {
    const name = cb.checkGroup;
    if (name) {
        let group = exports._checkGroupObject.groups[name];
        if (!group)
            group = exports._checkGroupObject.groups[name] = {};
        group[cb.uuid.toString()] = cb;
        if (cb.checked)
            exports._checkGroupObject.values[name] = cb.uuid.toString();
    }
}
exports.registrerCheckGroup = registrerCheckGroup;
/**
 * 注销指定分组或指定分组的子项
 * @param cb CheckBox
 */
function unRegistrerCheckGroup(cb) {
    if (cb.checkGroup && exports._checkGroupObject.groups[cb.checkGroup]) {
        delete exports._checkGroupObject.groups[cb.checkGroup][cb.uuid.toString()];
        let isKey = false;
        for (const key in exports._checkGroupObject.groups[cb.checkGroup]) {
            if (key)
                isKey = true;
            break;
        }
        if (!isKey) {
            delete exports._checkGroupObject.groups[name];
        }
        if (cb.checked)
            exports._checkGroupObject.values[name] = undefined;
    }
}
exports.unRegistrerCheckGroup = unRegistrerCheckGroup;
/** 更新分组中选中的checkbox组件  */
function updateCheckGroupSelected(cb) {
    if (cb.checkGroup) {
        const group = exports._checkGroupObject.groups[cb.checkGroup];
        for (const val in group) {
            const b = group[val];
            if (b !== cb)
                b.checked = false;
        }
        exports._checkGroupObject.values[cb.checkGroup] = cb.uuid.toString();
    }
}
exports.updateCheckGroupSelected = updateCheckGroupSelected;
/** 获取分组中选中的checkbox值 */
function getCheckGroupSelectedValue(name) {
    const uuid = exports._checkGroupObject.values[name];
    if (uuid) {
        const cb = exports._checkGroupObject.groups[name][uuid.toString()];
        return cb.value;
    }
    return undefined;
}
exports.getCheckGroupSelectedValue = getCheckGroupSelectedValue;
/** 设置选中 */
function setCheckGroupSelectedValue(name, uuid) {
    const group = exports._checkGroupObject.groups[name];
    if (group) {
        const cb = group[uuid];
        if (cb) {
            cb.checked = true;
        }
    }
}
exports.setCheckGroupSelectedValue = setCheckGroupSelectedValue;


/***/ }),

/***/ "./src/interaction/MouseScrollEvent.ts":
/*!*********************************************!*\
  !*** ./src/interaction/MouseScrollEvent.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/**
 * 鼠标滑轮事件
 *
 *  可侦听事件(未实现):
 * ```
 *  {InteractionEvent}.MouseScroll.xxxxxx.
 * ```
 *  可赋值方法:
 * ```
 * oonMouseScroll: ((e: WheelEvent,delta: PIXI.Point) => void) | undefined
 * ```
 *
 * @example 可查看 `Slider` 源码
 *
 * @since 1.0.0
 */
class MouseScrollEvent {
    /**
     *
     * @param obj 需要绑定的对象
     * @param preventDefault 是否组织系统默认的事件触发
     */
    constructor(obj, preventDefault) {
        this.id = 0;
        this.delta = new PIXI.Point();
        this.isStop = true;
        this.obj = obj;
        this.preventDefault = preventDefault;
        obj.container.interactive = true;
        this.startEvent();
    }
    startEvent() {
        if (this.isStop) {
            this.obj.container.on("mouseover" /* mouseover */, this._onHover, this);
            this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
            this.isStop = false;
        }
    }
    _onMouseScroll(_e) {
        _e;
        const e = _e;
        if (this.preventDefault)
            e.preventDefault();
        if (typeof e.deltaX !== "undefined")
            this.delta.set(e.deltaX, e.deltaY);
        else //Firefox{}
            this.delta.set(e.axis == 1 ? e.detail * 60 : 0, e.axis == 2 ? e.detail * 60 : 0);
        this.onMouseScroll && this.onMouseScroll.call(this.obj, e, this.delta);
    }
    //e?: interaction.InteractionEvent
    _onHover() {
        if (this.mouseScrllBind === undefined) {
            this.id = Utils_1.uid();
            this.mouseScrllBind = this._onMouseScroll.bind(this);
            document.addEventListener("mousewheel", this.mouseScrllBind, { passive: false });
            document.addEventListener("DOMMouseScroll", this.mouseScrllBind, { passive: false });
        }
    }
    //e?: interaction.InteractionEvent
    _onMouseOut() {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
    }
    stopEvent() {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
        this.obj.container.removeListener('mouseover', this._onHover, this);
        this.obj.container.removeListener('mouseout', this._onMouseOut, this);
        this.isStop = true;
    }
    remove() {
        this.stopEvent();
    }
}
exports.MouseScrollEvent = MouseScrollEvent;


/***/ }),

/***/ "./src/layout/CSSBasicLayout.ts":
/*!**************************************!*\
  !*** ./src/layout/CSSBasicLayout.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIKeys = __webpack_require__(/*! ../core/DisplayLayoutKeys */ "./src/core/DisplayLayoutKeys.ts");
exports.$tempRectangle = new PIXI.Rectangle();
/**
 * 布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸
 */
function formatRelative(value, total) {
    if (value == undefined) {
        return NaN;
    }
    if (typeof value === "number") {
        return value;
    }
    const str = value;
    const index = str.indexOf("%");
    if (index == -1) {
        return +str;
    }
    const percent = +str.substring(0, index);
    return percent * 0.01 * total;
}
exports.formatRelative = formatRelative;
/**
 * @private
 * 一个工具方法，使用BasicLayout规则布局目标对象。
 */
function updateBasicDisplayList(target, unscaledWidth, unscaledHeight) {
    if (!target)
        return;
    //console.log(target.container.name);
    const values = target.$values;
    const parentWidth = target.parent ? target.parent.$values[UIKeys.width] : 1;
    const parentHeight = target.parent ? target.parent.$values[UIKeys.height] : 1;
    const hCenter = formatRelative(values[UIKeys.horizontalCenter], parentWidth * 0.5);
    const vCenter = formatRelative(values[UIKeys.verticalCenter], parentHeight * 0.5);
    const left = formatRelative(values[UIKeys.left], parentWidth || 1);
    const right = formatRelative(values[UIKeys.right], parentWidth);
    const top = formatRelative(values[UIKeys.top], parentHeight || 1);
    const bottom = formatRelative(values[UIKeys.bottom], parentHeight);
    let childWidth = unscaledWidth;
    let childHeight = unscaledHeight;
    if (!isNaN(left) && !isNaN(right)) {
        childWidth = parentWidth - right - left;
    }
    if (!isNaN(top) && !isNaN(bottom)) {
        childHeight = parentHeight - bottom - top;
    }
    target.setMeasuredSize(childWidth, childHeight);
    target.setActualSize(childWidth, childHeight);
    let childX = NaN;
    let childY = NaN;
    if (!isNaN(hCenter))
        childX = Math.round((parentWidth - childWidth) / 2 + hCenter);
    else if (!isNaN(left))
        childX = left;
    else if (!isNaN(right))
        childX = parentWidth - childWidth - right;
    else
        childX = target.x;
    if (!isNaN(vCenter))
        childY = Math.round((parentHeight - childHeight) / 2 + vCenter);
    else if (!isNaN(top))
        childY = top;
    else if (!isNaN(bottom))
        childY = parentHeight - childHeight - bottom;
    else
        childY = target.y;
    target.setPosition(childX, childY);
}
exports.updateBasicDisplayList = updateBasicDisplayList;


/***/ }),

/***/ "./src/layout/CSSGridLayout.ts":
/*!*************************************!*\
  !*** ./src/layout/CSSGridLayout.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const CSSBasicLayout_1 = __webpack_require__(/*! ./CSSBasicLayout */ "./src/layout/CSSBasicLayout.ts");
function getColumnRowValue(gridTemplate, parentValue) {
    const list = [];
    let isInfinity = false;
    if (gridTemplate) {
        if (gridTemplate[0] === "repeat") {
            if (gridTemplate[1] === Infinity) {
                isInfinity = true;
                list.push(Utils_1.formatRelative(0, parentValue));
            }
            else {
                for (let i = 0; i < gridTemplate[1]; i++) {
                    list.push(Utils_1.formatRelative(gridTemplate[2], parentValue));
                }
            }
        }
        else {
            for (let i = 0; i < gridTemplate.length; i++) {
                list.push(Utils_1.formatRelative(gridTemplate[i], parentValue));
            }
        }
    }
    return { list, isInfinity };
}
/**
 *  更新网格布局
 *
 * 单位目前只支持数值或百分比：100 ，”100%“
 *
 *  网格布局中，子容器的位置与宽高可能失效
 *
 * 关于grid布局的词汇表
 *
 * 格网 https://developer.mozilla.org/zh-CN/docs/Glossary/Grid
 *
 * 网格行 gridTemplateRows https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns
 *
 * 网格列 gridTemplateColumns https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows
 *
 * 网格行间距 gridRowGap   https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row-gap
 *
 * 网格列间距 gridColumnGap  https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column-gap
 *
 * 网格轴 （未实现） 支持居中方式为：justifyContent，alignContent
 *
 * 网格线（未实现） https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines
 *
 * 网格面积（未实现）https://developer.mozilla.org/zh-CN/docs/Glossary/Grid_Areas
 */
function updateGridLayout(target) {
    if (target.parent == undefined) {
        return CSSBasicLayout_1.$tempRectangle;
    }
    if (target.style == undefined) {
        return CSSBasicLayout_1.$tempRectangle;
    }
    let rowHeightTotal = 0;
    let columnWidthTotal = 0;
    const style = target.style;
    const gridColumnGap = style.gridColumnGap || 0;
    const gridRowGap = style.gridRowGap || 0;
    const column = getColumnRowValue(style.gridTemplateColumns, target.parent.width);
    const row = getColumnRowValue(style.gridTemplateRows, target.parent.height);
    let child;
    let cloumnIndex = 0;
    let rowIndex = 0;
    let cloumnWidth = 0;
    let rowHeight = 0;
    let widthTotal = 0;
    for (let i = 0; i < target.uiChildren.length; i++) {
        child = target.uiChildren[i];
        if (child.style.justifyContent || child.style.alignContent) {
            continue;
        }
        if (column.isInfinity) {
            cloumnWidth = column.list[0] || 0;
        }
        else {
            cloumnWidth = column.list[cloumnIndex] || 0;
        }
        if (row.isInfinity) {
            rowHeight = row.list[0] || 0;
        }
        else {
            rowHeight = row.list[rowIndex] || 0;
        }
        child.width = child.explicitWidth || cloumnWidth;
        child.height = child.explicitHeight || rowHeight;
        child.x = widthTotal;
        child.y = rowHeightTotal;
        widthTotal += cloumnWidth + gridColumnGap;
        cloumnIndex++;
        if (widthTotal > columnWidthTotal) {
            columnWidthTotal = widthTotal;
        }
        if (cloumnIndex >= column.list.length) {
            cloumnIndex = 0;
            widthTotal = 0;
            if (rowHeight !== 0) {
                rowHeightTotal += (rowHeight + gridRowGap);
            }
            else {
                rowHeightTotal += (child.height + gridRowGap);
            }
            if (!column.isInfinity)
                rowIndex++;
        }
    }
    columnWidthTotal = Math.max(target.width, columnWidthTotal - gridColumnGap);
    rowHeightTotal = Math.max(target.height, rowHeightTotal - gridRowGap);
    target.width = columnWidthTotal;
    target.height = rowHeightTotal;
    CSSBasicLayout_1.$tempRectangle.width = columnWidthTotal;
    CSSBasicLayout_1.$tempRectangle.height = rowHeightTotal;
    return CSSBasicLayout_1.$tempRectangle;
}
exports.updateGridLayout = updateGridLayout;


/***/ }),

/***/ "./src/layout/CSSLayout.ts":
/*!*********************************!*\
  !*** ./src/layout/CSSLayout.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CSSGridLayout_1 = __webpack_require__(/*! ./CSSGridLayout */ "./src/layout/CSSGridLayout.ts");
const CSSBasicLayout_1 = __webpack_require__(/*! ./CSSBasicLayout */ "./src/layout/CSSBasicLayout.ts");
exports.$TempRectangle = new PIXI.Rectangle();
function updateDisplayAlign(target, parentWidth, parentHeight, marginTop = 0, marginLeft = 0) {
    if (target.style == undefined) {
        return;
    }
    if (target.style.justifyContent == undefined && target.style.alignContent == undefined) {
        return;
    }
    let startX = 0;
    let startY = 0;
    const bounds = target.getPreferredBounds(exports.$TempRectangle);
    switch (target.style.justifyContent) {
        case "center":
            startX = parentWidth - bounds.width >> 1;
            break;
        case "flex-start":
            startX = marginLeft;
            break;
        case "flex-end":
            startX = parentWidth - bounds.width - (marginLeft);
            break;
    }
    switch (target.style.alignContent) {
        case "center":
            startY = parentHeight - bounds.height >> 1;
            break;
        case "flex-start":
            startY = marginTop;
            break;
        case "flex-end":
            startY = parentHeight - bounds.height - (marginTop);
            break;
    }
    if (startX !== 0)
        target.x = startX;
    if (startY !== 0)
        target.y = startY;
}
/**
 * 调整目标的元素的大小并定位这些元素。
 */
function updateDisplayLayout(target, unscaledWidth, unscaledHeight) {
    if (target.style == undefined) {
        return;
    }
    if (target.style.display === "block") {
        const pos = CSSBasicLayout_1.updateBasicDisplayList(target, unscaledWidth, unscaledHeight);
        //console.log(pos);
    }
    else if (target.style.display === "grid") {
        const size = CSSGridLayout_1.updateGridLayout(target);
        CSSBasicLayout_1.updateBasicDisplayList(target, size.width, size.height);
    }
    if (target.parent) {
        updateDisplayAlign(target, target.parent.width, target.parent.height, target.style.gridRowGap, target.style.gridColumnGap);
    }
    if (target.isContainer) {
        const bounds = target.getPreferredBounds(exports.$TempRectangle);
        let child;
        for (let i = 0; i < target.uiChildren.length; i++) {
            child = target.uiChildren[i];
            updateDisplayAlign(child, bounds.width, bounds.height, child.style.gridRowGap, child.style.gridColumnGap);
        }
    }
}
exports.updateDisplayLayout = updateDisplayLayout;


/***/ }),

/***/ "./src/layout/CSSSSystem.ts":
/*!**********************************!*\
  !*** ./src/layout/CSSSSystem.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
/** ===================== background  ===================== */
function backgroundColor(target) {
    if (target.style == undefined) {
        return;
    }
    if (target.style.backgroundColor == undefined && target.background == undefined) {
        return;
    }
    if (target.background === undefined) {
        target.background = new PIXI.Graphics();
        target.background.name = "background";
        target.container.addChildAt(target.background, 0);
    }
}
exports.backgroundColor = backgroundColor;
function backgroundPositionSize(target) {
    if (target.style == undefined) {
        return;
    }
    if (target.background && target.background.children.length > 0) {
        const sprite = target.background.getChildAt(0);
        const style = target.style;
        if (sprite instanceof PIXI.TilingSprite) {
            sprite.tilePosition.set(style.backgroundPositionX || 0, style.backgroundPositionY || 0);
        }
        else {
            if (style.backgroundSize) {
                sprite.width = style.backgroundSize[0];
                sprite.height = style.backgroundSize[1];
            }
            sprite.position.set(style.backgroundPositionX || 0, style.backgroundPositionY || 0);
        }
    }
}
exports.backgroundPositionSize = backgroundPositionSize;
function backgroundRepeat(target) {
    if (target.style == undefined) {
        return;
    }
    const style = target.style;
    if (style.backgroundImage && target.background) {
        target.background.removeChildren();
        let backgroundImage;
        if (style.backgroundImage instanceof PIXI.Texture) {
            backgroundImage = style.backgroundImage;
        }
        else if (typeof style.backgroundImage === "string") {
            backgroundImage = Utils_1.getTexture(style.backgroundImage);
        }
        if (backgroundImage) {
            let sprite;
            if (style.backgroundRepeat === undefined) {
                style.backgroundRepeat = "no-repeat";
            }
            if (style.backgroundRepeat === "repeat") {
                sprite = new PIXI.TilingSprite(backgroundImage);
            }
            else {
                sprite = new PIXI.Sprite(backgroundImage);
            }
            target.background.addChild(sprite);
            const maskGraphics = new PIXI.Graphics();
            target.background.addChild(maskGraphics);
            target.background.mask = maskGraphics;
        }
    }
}
exports.backgroundRepeat = backgroundRepeat;
function backgroundImage(target) {
    if (target.background === undefined) {
        target.background = new PIXI.Graphics();
        target.background.name = "background";
        target.container.addChildAt(target.background, 0);
    }
    backgroundRepeat(target);
    backgroundPositionSize(target);
}
exports.backgroundImage = backgroundImage;
/** ===================== mask  ===================== */
function maskPosition(target) {
    if (target.style == undefined) {
        return;
    }
    if (target.mask) {
        const style = target.style;
        if (style.maskPosition === undefined) {
            return;
        }
        if (target.mask instanceof DisplayObject_1.DisplayObject) {
            target.mask.x = style.maskPosition[0];
            target.mask.y = style.maskPosition[1];
        }
        else {
            target.mask.position.set(style.maskPosition[0], style.maskPosition[1]);
        }
    }
}
exports.maskPosition = maskPosition;
function maskSize(target) {
    if (target.style == undefined) {
        return;
    }
    if (target.mask) {
        const style = target.style;
        if (style.maskSize === undefined) {
            return;
        }
        target.mask.width = style.maskSize[0];
        target.mask.height = style.maskSize[1];
        if (!(target.mask instanceof DisplayObject_1.DisplayObject))
            target.mask.updateTransform();
    }
}
exports.maskSize = maskSize;
function maskImage(target) {
    if (target.style == undefined) {
        return;
    }
    target.container.mask = null;
    if (target.mask && target.mask.parent) {
        if (target.mask instanceof DisplayObject_1.DisplayObject) {
            target.removeChild(target.mask);
        }
        else {
            target.mask.parent.removeChild(target.mask);
        }
    }
    for (let i = 0; i < target.uiChildren.length; i++) {
        if (target.uiChildren[i].name == "maskImage") {
            target.removeChild(target.uiChildren[i]);
            break;
        }
    }
    target.mask = undefined;
    const style = target.style;
    const container = target.container;
    if (style.maskImage instanceof PIXI.Graphics) {
        target.mask = style.maskImage;
        container.mask = target.mask;
        container.addChild(target.mask);
    }
    else if (style.maskImage instanceof DisplayObject_1.DisplayObject) {
        //后期组件完成后补充，矢量与位图组件
        target.mask = style.maskImage;
        target.mask.name = "maskImage";
        target.mask.container.name = "maskImage";
        container.mask = target.mask.container || null;
        target.addChild(target.mask);
    }
    else {
        target.mask = PIXI.Sprite.from(Utils_1.getTexture(style.maskImage));
        container.mask = target.mask;
        container.addChild(target.mask);
    }
    maskSize(target);
    maskPosition(target);
}
exports.maskImage = maskImage;
/** ===================== font  ===================== */
function updateFontStyle(target, key, value) {
    if (target.setInputStyle) {
        target.setInputStyle(key, value);
    }
    else {
        target.sprite.style[key] = value;
    }
}
exports.updateFontStyle = updateFontStyle;
function color(target, key, value) {
    if (target.setInputStyle) {
        target.setInputStyle(key, value);
    }
    else {
        target.sprite.style.fill = value;
    }
}
exports.color = color;


/***/ }),

/***/ "./src/layout/CSSStyle.ts":
/*!********************************!*\
  !*** ./src/layout/CSSStyle.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CSSFunction = __webpack_require__(/*! ./CSSSSystem */ "./src/layout/CSSSSystem.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
function formatRelative(value) {
    if (value == undefined) {
        return { percent: NaN, value: NaN };
    }
    if (typeof value === "number") {
        return { percent: NaN, value: value };
    }
    const str = value;
    const index = str.indexOf("%");
    if (index == -1) {
        return { percent: NaN, value: +str };
    }
    const percent = +str.substring(0, index);
    return { percent: Math.min(percent * 0.01, 1), value: NaN };
}
/**
 * 组件样式表
 */
class CSSStyle {
    constructor(target) {
        /**
         * 规定元素的显示类型。布局模式
         *
         * grid 模式下，子节点会忽略left,top,right，bottom,width,height等
         *
         * none 模式下，忽略style
         * */
        this._display = "block";
        /**
         * 规定元素的定位类型。
         * */
        this._position = "absolute";
        /**
         * 设置 backgroundImage 后，设置是否及如何重复背景图像。
         * repeat重复
         * no-repeat不重复，
         */
        this._backgroundRepeat = "no-repeat";
        /**
         * 文本颜色，16进制
         * */
        this._color = 0xfffff0;
        /**
         * 是否自动换行
         * */
        this._wordWrap = false;
        /**
         * 多行文本(wordWrap = true) - 对齐方式
         * */
        this._textAlign = "left";
        /** 字体大小 */
        this._fontSize = 22;
        /** 字体样式 */
        this._fontStyle = "normal";
        /**  字体变形，普通或小写  */
        this._fontVariant = "normal";
        /** 字体粗细 */
        this._fontWeight = "normal";
        /** 描边的笔触粗细值 */
        this._strokeThickness = 0;
        /** 是否设置投影 */
        this._dropShadow = false;
        /** 投影的alpha值 */
        this._dropShadowAlpha = false;
        /** 是否设置投影 */
        this._dropShadowAngle = 0; //Math.PI / 6;
        /** 投影的模糊半径 */
        this._dropShadowBlur = 0;
        /** 投影填充颜色值 */
        this._dropShadowColor = 0x000000;
        /** 投影深度 */
        this._dropShadowDistance = 5;
        /** 中文换行 */
        this._breakWords = true;
        this.parent = target;
        target.on(Index_1.ComponentEvent.RESIZE, this.onResize, this);
    }
    release() {
        this.parent.off(Index_1.ComponentEvent.RESIZE, this.onResize, this);
    }
    get display() {
        return this._display;
    }
    set display(value) {
        this._display = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    get justifyContent() {
        return this._justifyContent;
    }
    set justifyContent(value) {
        this._justifyContent = value;
    }
    get alignContent() {
        return this._alignContent;
    }
    set alignContent(value) {
        this._alignContent = value;
    }
    get gridTemplateColumns() {
        return this._gridTemplateColumns;
    }
    set gridTemplateColumns(value) {
        this._gridTemplateColumns = value;
    }
    get gridColumnGap() {
        return this._gridColumnGap;
    }
    set gridColumnGap(value) {
        this._gridColumnGap = value;
    }
    get gridTemplateRows() {
        return this._gridTemplateRows;
    }
    set gridTemplateRows(value) {
        this._gridTemplateRows = value;
    }
    get gridRowGap() {
        return this._gridRowGap;
    }
    set gridRowGap(value) {
        this._gridRowGap = value;
    }
    /**
     * 表示显示对象的宽度，以像素为单位。
     * */
    get width() {
        return this.parent.width;
    }
    set width(value) {
        const relative = formatRelative(value);
        this.parent.width = relative.value;
        this.parent.percentWidth = relative.percent;
    }
    /**
     * 表示显示对象的高度，以像素为单位。
     * */
    get height() {
        return this.parent.height;
    }
    set height(value) {
        const relative = formatRelative(value);
        this.parent.height = relative.value;
        this.parent.percentHeight = relative.percent;
    }
    /**
     * 设置元素的最小宽度。
     */
    get minWidth() {
        return this.parent.minWidth;
    }
    set minWidth(value) {
        this.parent.minWidth = value;
    }
    /**
     * 设置元素的最大宽度。
     */
    get maxWidth() {
        return this.parent.maxWidth;
    }
    set maxWidth(value) {
        this.parent.maxWidth = value;
    }
    /**
     * 设置元素的最小高度。
     */
    get maxHeight() {
        return this.parent.maxHeight;
    }
    set maxHeight(value) {
        this.parent.maxHeight = value;
    }
    /**
     * 设置元素的最大高度。
     * */
    get minHeight() {
        return this.parent.minHeight;
    }
    set minHeight(value) {
        this.parent.minHeight = value;
    }
    /**
     * 设置定位元素左外边距边界与其容器左边界之间的偏移。
     * */
    get left() {
        return this.parent.left;
    }
    set left(value) {
        this.parent.left = value;
    }
    /**
     * 设置定位元素的上外边距边界与其容器上边界之间的偏移。
     * */
    get top() {
        return this.parent.top;
    }
    set top(value) {
        this.parent.top = value;
    }
    /**
     * 设置定位元素右外边距边界与其容器右边界之间的偏移。
     * */
    get right() {
        return this.parent.right;
    }
    set right(value) {
        this.parent.right = value;
    }
    /**
     * 设置定位元素下外边距边界与其容器下边界之间的偏移。
     * */
    get bottom() {
        return this.parent.bottom;
    }
    set bottom(value) {
        this.parent.bottom = value;
    }
    /**
     * 缩放
     * */
    get scaleX() {
        return this.parent.scaleX;
    }
    set scaleX(value) {
        this.parent.scaleX = value;
    }
    /**
     * 缩放
     * */
    get scaleY() {
        return this.parent.scaleY;
    }
    set scaleY(value) {
        this.parent.scaleY = value;
    }
    /**
     * 设置元素水平拉伸扭曲（角度）。
     * */
    get skewX() {
        return this.parent.skewX;
    }
    set skewX(value) {
        this.parent.skewX = value;
    }
    /**
     * 设置元素垂直拉伸扭曲（角度）。
     * */
    get skewY() {
        return this.parent.skewY;
    }
    set skewY(value) {
        this.parent.skewY = value;
    }
    /**
     * 设置元素旋转 （角度）
    */
    get rotate() {
        return this.parent.rotation;
    }
    set rotate(value) {
        this.parent.rotation = value;
    }
    /**
     * 设置元素旋转 （角度）
    */
    get rotation() {
        return this.parent.rotation;
    }
    set rotation(value) {
        this.parent.rotation = value;
    }
    /**
     * 轴点 像素值
     */
    get pivotX() {
        return this.parent.pivotX;
    }
    set pivotX(value) {
        this.parent.pivotX = value;
    }
    /**
     * 轴点 像素值
     */
    get pivotY() {
        return this.parent.pivotY;
    }
    set pivotY(value) {
        this.parent.pivotY = value;
    }
    /**
      * 调整元素的色调，取消设置0xFFFFFF
      */
    get tint() {
        return this.parent.tint;
    }
    set tint(value) {
        this.parent.tint = value;
    }
    /**
     * 表示指定对象的 Alpha 透明度值。有效值为0（完全透明）～ 1（完全不透明）。
     * */
    get alpha() {
        return this.parent.alpha;
    }
    set alpha(value) {
        this.parent.alpha = value;
    }
    /**
     * 显示对象是否可见
     * */
    get visible() {
        return this.parent.visible;
    }
    set visible(value) {
        this.parent.visible = value;
    }
    get visibility() {
        return this.parent.visible ? "visible" : "hidden";
    }
    set visibility(value) {
        this.visible = value === "hidden" ? false : true;
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    set backgroundColor(value) {
        if (value === this.backgroundColor) {
            return;
        }
        this._backgroundColor = value;
        CSSFunction.backgroundColor(this.parent);
    }
    get backgroundImage() {
        return this._backgroundImage;
    }
    set backgroundImage(value) {
        this._backgroundImage = value;
        CSSFunction.backgroundImage(this.parent);
    }
    get backgroundPositionX() {
        return this._backgroundPositionX;
    }
    set backgroundPositionX(value) {
        this._backgroundPositionX = value;
        CSSFunction.backgroundPositionSize(this.parent);
    }
    get backgroundPositionY() {
        return this._backgroundPositionY;
    }
    set backgroundPositionY(value) {
        this._backgroundPositionY = value;
        CSSFunction.backgroundPositionSize(this.parent);
    }
    get backgroundSize() {
        return this._backgroundSize;
    }
    set backgroundSize(value) {
        this._backgroundSize = value;
        CSSFunction.backgroundPositionSize(this.parent);
    }
    get backgroundRepeat() {
        return this._backgroundRepeat;
    }
    set backgroundRepeat(value) {
        this._backgroundRepeat = value;
        CSSFunction.backgroundRepeat(this.parent);
    }
    get maskImage() {
        return this._maskImage;
    }
    set maskImage(value) {
        this._maskImage = value;
        CSSFunction.maskImage(this.parent);
    }
    get maskPosition() {
        return this._maskPosition;
    }
    set maskPosition(value) {
        this._maskPosition = value;
        CSSFunction.maskPosition(this.parent);
    }
    get maskSize() {
        return this._maskSize;
    }
    set maskSize(value) {
        this._maskSize = value;
        CSSFunction.maskSize(this.parent);
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
        CSSFunction.color(this.parent, "color", value);
    }
    get letterSpacing() {
        return this._letterSpacing;
    }
    set letterSpacing(value) {
        this._letterSpacing = value;
        CSSFunction.updateFontStyle(this.parent, "letterSpacing", value);
    }
    get wordWrap() {
        return this._wordWrap;
    }
    set wordWrap(value) {
        this._wordWrap = value;
        CSSFunction.updateFontStyle(this.parent, "wordWrap", value);
    }
    get wordWrapWidth() {
        return this._wordWrapWidth;
    }
    set wordWrapWidth(value) {
        this._wordWrapWidth = value;
        CSSFunction.updateFontStyle(this.parent, "wordWrapWidth", value);
    }
    get textAlign() {
        return this._textAlign;
    }
    set textAlign(value) {
        this._textAlign = value;
        CSSFunction.updateFontStyle(this.parent, "textAlign", value);
        CSSFunction.updateFontStyle(this.parent, "align", value);
    }
    get lineHeight() {
        return this._lineHeight;
    }
    set lineHeight(value) {
        this._lineHeight = value;
        CSSFunction.updateFontStyle(this.parent, "lineHeight", value);
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value) {
        this._fontFamily = value;
        CSSFunction.updateFontStyle(this.parent, "fontFamily", value);
    }
    get fontSize() {
        return this._fontSize;
    }
    set fontSize(value) {
        this._fontSize = value;
        CSSFunction.updateFontStyle(this.parent, "fontSize", value);
    }
    get fontStyle() {
        return this._fontStyle;
    }
    set fontStyle(value) {
        this._fontStyle = value;
        CSSFunction.updateFontStyle(this.parent, "fontStyle", value);
    }
    get fontVariant() {
        return this._fontVariant;
    }
    set fontVariant(value) {
        this._fontVariant = value;
        CSSFunction.updateFontStyle(this.parent, "fontVariant", value);
    }
    get fontWeight() {
        return this._fontWeight;
    }
    set fontWeight(value) {
        this._fontWeight = value;
        CSSFunction.updateFontStyle(this.parent, "fontWeight", value);
    }
    get padding() {
        return this._padding;
    }
    set padding(value) {
        this._padding = value;
        CSSFunction.updateFontStyle(this.parent, "padding", value);
    }
    get stroke() {
        return this._stroke;
    }
    set stroke(value) {
        this._stroke = value;
        CSSFunction.updateFontStyle(this.parent, "stroke", value);
    }
    get strokeThickness() {
        return this._strokeThickness;
    }
    set strokeThickness(value) {
        this._strokeThickness = value;
        CSSFunction.updateFontStyle(this.parent, "strokeThickness", value);
    }
    get dropShadow() {
        return this._dropShadow;
    }
    set dropShadow(value) {
        this._dropShadow = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadow", value);
    }
    get dropShadowAlpha() {
        return this._dropShadowAlpha;
    }
    set dropShadowAlpha(value) {
        this._dropShadowAlpha = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowAlpha", value);
    }
    get dropShadowAngle() {
        return this._dropShadowAngle;
    }
    set dropShadowAngle(value) {
        this._dropShadowAngle = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowAngle", value);
    }
    get dropShadowBlur() {
        return this._dropShadowBlur;
    }
    set dropShadowBlur(value) {
        this._dropShadowBlur = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowBlur", value);
    }
    get dropShadowColor() {
        return this._dropShadowColor;
    }
    set dropShadowColor(value) {
        this._dropShadowColor = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowColor", value);
    }
    get dropShadowDistance() {
        return this._dropShadowDistance;
    }
    set dropShadowDistance(value) {
        this._dropShadowDistance = value;
        CSSFunction.updateFontStyle(this.parent, "dropShadowDistance", value);
    }
    get breakWords() {
        return this._breakWords;
    }
    set breakWords(value) {
        this._breakWords = value;
        CSSFunction.updateFontStyle(this.parent, "breakWords", value);
    }
    onResize() {
        const target = this.parent;
        if (target.width == 0 || target.height == 0) {
            return;
        }
        if (this.backgroundColor && target.background) {
            const background = target.background;
            //console.log("onResize backgroundColor",background.width , target.width ,background.height ,target.height)
            background.clear();
            background.beginFill(this.backgroundColor);
            background.drawRoundedRect(0, 0, target.width, target.height, 0);
            background.endFill();
        }
        if (target.background && target.background.mask) {
            //console.log("onResize backgroundColor mask",this.backgroundColor)
            const mask = target.background.mask;
            mask.clear();
            mask.beginFill(this.backgroundColor);
            mask.drawRoundedRect(0, 0, target.width, target.height, 0);
            mask.endFill();
        }
    }
}
exports.CSSStyle = CSSStyle;
/*
CSS3.0 所有样式属性

    background: string | null;
    backgroundAttachment: string | null;
    backgroundClip: string | null;
    // backgroundColor: string | null;
    // backgroundImage: string | null;
    backgroundOrigin: string | null;
    backgroundPosition: string | null;
    // backgroundPositionX: string | null;
    // backgroundPositionY: string | null;
    backgroundRepeat: string | null;
    // backgroundSize: string | null;


    alignContent: string;
    alignItems: string;
    alignSelf: string;
    alignmentBaseline: string | null;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    backfaceVisibility: string | null;

    baselineShift: string | null;
    border: string | null;
    borderBottom: string | null;
    borderBottomColor: string | null;
    borderBottomLeftRadius: string | null;
    borderBottomRightRadius: string | null;
    borderBottomStyle: string | null;
    borderBottomWidth: string | null;
    borderCollapse: string | null;
    borderColor: string | null;
    borderImage: string | null;
    borderImageOutset: string | null;
    borderImageRepeat: string | null;
    borderImageSlice: string | null;
    borderImageSource: string | null;
    borderImageWidth: string | null;
    borderLeft: string | null;
    borderLeftColor: string | null;
    borderLeftStyle: string | null;
    borderLeftWidth: string | null;
    borderRadius: string | null;
    borderRight: string | null;
    borderRightColor: string | null;
    borderRightStyle: string | null;
    borderRightWidth: string | null;
    borderSpacing: string | null;
    borderStyle: string | null;
    borderTop: string | null;
    borderTopColor: string | null;
    borderTopLeftRadius: string | null;
    borderTopRightRadius: string | null;
    borderTopStyle: string | null;
    borderTopWidth: string | null;
    borderWidth: string | null;
    // bottom: string | null;
    boxShadow: string | null;
    boxSizing: string;
    breakAfter: string | null;
    breakBefore: string | null;
    breakInside: string | null;
    captionSide: string | null;
    caretColor: string;
    clear: string | null;
    clip: string;
    clipPath: string;
    clipRule: string;
    // color: string | null;
    colorInterpolationFilters: string;
    columnCount: string;
    columnFill: string;
    columnGap: string;
    columnRule: string;
    columnRuleColor: string;
    columnRuleStyle: string;
    columnRuleWidth: string;
    columnSpan: string;
    columnWidth: string;
    columns: string;
    content: string | null;
    counterIncrement: string | null;
    counterReset: string | null;
    cssFloat: string | null;
    cssText: string;
    cursor: string;
    direction: string;
    // display: string | null;
    dominantBaseline: string | null;
    emptyCells: string | null;
    enableBackground: string | null;
    fill: string | null;
    fillOpacity: string | null;
    fillRule: string | null;
    filter: string;
    flex: string | null;
    flexBasis: string | null;
    flexDirection: string | null;
    flexFlow: string | null;
    flexGrow: string | null;
    flexShrink: string | null;
    flexWrap: string | null;
    floodColor: string;
    floodOpacity: string;
    font: string;
    // fontFamily: string;
    fontFeatureSettings: string;
    fontKerning: string;
    // fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    // fontStyle: string;
    fontSynthesis: string;
    // fontVariant: string;
    fontVariantCaps: string;
    fontVariantEastAsian: string;
    fontVariantLigatures: string;
    fontVariantNumeric: string;
    fontVariantPosition: string;
    // fontWeight: string;
    gap: string;
    glyphOrientationHorizontal: string | null;
    glyphOrientationVertical: string;
    grid: string | null;
    gridArea: string | null;
    gridAutoColumns: string | null;
    gridAutoFlow: string | null;
    gridAutoRows: string | null;
    gridColumn: string | null;
    gridColumnEnd: string | null;
    gridColumnGap: string;
    gridColumnStart: string | null;
    gridGap: string;
    gridRow: string | null;
    gridRowEnd: string | null;
    gridRowGap: string;
    gridRowStart: string | null;
    gridTemplate: string | null;
    gridTemplateAreas: string | null;
    gridTemplateColumns: string | null;
    gridTemplateRows: string | null;
    // height: string | null;
    hyphens: string;
    imageOrientation: string;
    imageRendering: string;
    imeMode: string | null;
    justifyContent: string;
    justifyItems: string;
    justifySelf: string;
    kerning: string | null;
    layoutGrid: string | null;
    layoutGridChar: string | null;
    layoutGridLine: string | null;
    layoutGridMode: string | null;
    layoutGridType: string | null;
    // left: string | null;
    readonly length: number;
    // letterSpacing: string;
    lightingColor: string;
    lineBreak: string;
    // lineHeight: string | null;
    listStyle: string | null;
    listStyleImage: string | null;
    listStylePosition: string | null;
    listStyleType: string | null;

    margin: string | null;
    marginBottom: string | null;
    marginLeft: string | null;
    marginRight: string | null;
    marginTop: string | null;

    marker: string | null;
    markerEnd: string | null;
    markerMid: string | null;
    markerStart: string | null;
    mask: string;
    maskComposite: string;
    maskImage: string;
    maskPosition: string;
    maskRepeat: string;
    maskSize: string;
    maskType: string;

    // maxHeight: string | null;
    // maxWidth: string | null;
    // minHeight: string | null;
    // minWidth: string | null;

    objectFit: string;
    objectPosition: string;
    opacity: string | null;
    order: string | null;
    orphans: string | null;
    outline: string;
    outlineColor: string;
    outlineOffset: string;
    outlineStyle: string;
    outlineWidth: string;

    overflow: string;
    overflowAnchor: string;
    overflowWrap: string;
    overflowX: string;
    overflowY: string;

    padding: string | null;
    paddingBottom: string | null;
    paddingLeft: string | null;
    paddingRight: string | null;
    paddingTop: string | null;

    pageBreakAfter: string | null;
    pageBreakBefore: string | null;
    pageBreakInside: string | null;
    readonly parentRule: CSSRule;
    penAction: string | null;
    perspective: string | null;
    perspectiveOrigin: string | null;
    placeContent: string;
    placeItems: string;
    placeSelf: string;
    pointerEvents: string | null;
    // position: string | null;
    quotes: string | null;
    resize: string;
    // right: string | null;
    rotate: string | null;
    rowGap: string;
    rubyAlign: string | null;
    rubyOverhang: string | null;
    rubyPosition: string | null;
    // scale: string | null;
    scrollBehavior: string;
    stopColor: string | null;
    stopOpacity: string | null;

    stroke: string | null;
    strokeDasharray: string | null;
    strokeDashoffset: string | null;
    strokeLinecap: string | null;
    strokeLinejoin: string | null;
    strokeMiterlimit: string | null;
    strokeOpacity: string | null;
    strokeWidth: string | null;

    tabSize: string;
    tableLayout: string | null;
    // textAlign: string;
    textAlignLast: string;
    textAnchor: string | null;
    textCombineUpright: string;
    textDecoration: string;
    textDecorationColor: string;
    textDecorationLine: string;
    textDecorationStyle: string;
    textEmphasis: string;
    textEmphasisColor: string;
    textEmphasisPosition: string;
    textEmphasisStyle: string;
    textIndent: string;
    textJustify: string;
    textKashida: string | null;
    textKashidaSpace: string | null;
    textOrientation: string;
    textOverflow: string;
    textShadow: string;
    textTransform: string;
    textUnderlinePosition: string;
    // top: string | null;
    touchAction: string;
    transform: string;
    transformBox: string;
    transformOrigin: string;
    transformStyle: string | null;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    translate: string | null;
    unicodeBidi: string;
    userSelect: string;
    verticalAlign: string | null;
    visibility: string | null;

    whiteSpace: string;
    widows: string | null;
    // width: string | null;
    willChange: string;
    wordBreak: string;
    wordSpacing: string;
    // wordWrap: string;
    writingMode: string;
    // zIndex: string | null;
    zoom: string | null;
    */ 


/***/ }),

/***/ "./src/tween/Easing.ts":
/*!*****************************!*\
  !*** ./src/tween/Easing.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 完整的缓动曲线列表
 *
 * @example gui.Easing.Linear.None;
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
 */
exports.Easing = {
    Linear: {
        None(k) {
            return k;
        }
    },
    Quadratic: {
        In(k) {
            return Math.pow(k, 2);
        },
        Out(k) {
            return k * (2 - k);
        },
        InOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 2);
            }
            return -0.5 * (--k * (k - 2) - 1);
        }
    },
    Cubic: {
        In(k) {
            return Math.pow(k, 3);
        },
        Out(k) {
            return --k * k * k + 1;
        },
        InOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 3);
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        }
    },
    Quartic: {
        In(k) {
            return Math.pow(k, 4);
        },
        Out(k) {
            return 1 - --k * k * k * k;
        },
        InOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 4);
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        }
    },
    Quintic: {
        In(k) {
            return Math.pow(k, 5);
        },
        Out(k) {
            return --k * k * k * k * k + 1;
        },
        InOut(k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 5);
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        }
    },
    Sinusoidal: {
        In(k) {
            return 1 - Math.cos((k * Math.PI) / 2);
        },
        Out(k) {
            return Math.sin((k * Math.PI) / 2);
        },
        InOut(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
    },
    Exponential: {
        In(k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        Out(k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut(k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        }
    },
    Circular: {
        In(k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out(k) {
            return Math.sqrt(1 - --k * k);
        },
        InOut(k) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
    },
    Elastic: {
        In(k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        },
        Out(k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        },
        InOut(k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            k *= 2;
            if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        }
    },
    Back: {
        In(k) {
            const s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        Out(k) {
            const s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut(k) {
            const s = 1.70158 * 1.525;
            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        }
    },
    Bounce: {
        In(k) {
            return 1 - exports.Easing.Bounce.Out(1 - k);
        },
        Out(k) {
            const x = 2.75;
            const y = 7.5625;
            if (k < 1 / x) {
                return y * k * k;
            }
            else if (k < 2 / x) {
                return y * (k -= 1.5 / x) * k + 0.75;
            }
            else if (k < 2.5 / x) {
                return y * (k -= 2.25 / x) * k + 0.9375;
            }
            else {
                return y * (k -= 2.625 / x) * k + 0.984375;
            }
        },
        InOut(k) {
            if (k < 0.5) {
                return exports.Easing.Bounce.In(k * 2) * 0.5;
            }
            return exports.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        }
    },
    Stepped: {
        steps: (steps) => (k) => ((k * steps) | 0) / steps
    }
};


/***/ }),

/***/ "./src/tween/Timeline.ts":
/*!*******************************!*\
  !*** ./src/tween/Timeline.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Ticker_1 = __webpack_require__(/*! ../core/Ticker */ "./src/core/Ticker.ts");
const ObjectPool_1 = __webpack_require__(/*! ../utils/ObjectPool */ "./src/utils/ObjectPool.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Easing_1 = __webpack_require__(/*! ./Easing */ "./src/tween/Easing.ts");
/**
 * @private
 */
class Node {
    constructor(node) {
        this.default = 0;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.startFrame = 0;
        this.endFrame = 0;
        this.prevTime = 0;
        this.parent = node;
    }
    release() {
        this.parent = undefined;
        this.easing = undefined;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.endFrame = 0;
        this.prevTime = 0;
    }
    load() { }
    destroy() { }
}
/**
 * 基于帧的时间轴控制类
 *
 * @example let timeline = new gui.Timeline();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
class Timeline extends PIXI.utils.EventEmitter {
    constructor() {
        super();
        this.id = -1;
        this._frames = new Array();
        this._frameCount = 0;
        this._elapsedMS = 16.66; //1000/60
        this._prevTime = 0;
        this._isStop = false;
        this._lastNode = new Map();
        this._isSetDefault = false;
        this.loop = false;
    }
    setDefault(object, _duration, fps) {
        this._object = object;
        this._elapsedMS = 1000 / fps;
        const frameCount = Math.round(_duration / this._elapsedMS);
        this._frameCount = frameCount;
        const frames = this._frames;
        while (frames && frames.length > frameCount) {
            frames.pop();
        }
        let i = frames.length === 0 ? 0 : frames.length;
        for (i; i <= frameCount; i++) {
            if (frames[i] === undefined)
                frames[i] = new Map();
        }
        this._isSetDefault = true;
        return this;
    }
    addProperty(property, value, endFrame, easing) {
        if (endFrame > this._frameCount) {
            throw "Error Timeline.addProperty overflow frame";
        }
        const parentNode = this._lastNode.get(property);
        const node = ObjectPool_1.objectPoolShared.pop(Node);
        if (parentNode === undefined) {
            node.parent = undefined;
        }
        else {
            node.parent = parentNode;
        }
        node.startFrame = node.parent === undefined ? 0 : (node.parent.endFrame + 1);
        node.end = value;
        node.start = node.parent === undefined ? (this._object[property] || 0) : node.parent.end;
        node.default = this._object[property] || 0;
        if (easing) {
            node.easing = easing;
        }
        else {
            node.easing = Easing_1.Easing.Linear.None;
        }
        node.duration = (endFrame - node.startFrame) * this._elapsedMS;
        node.endFrame = endFrame;
        this._lastNode.set(property, node);
        for (let i = node.startFrame; i <= endFrame; i++) {
            this._frames[i].set(property, node);
        }
        return this;
    }
    stop() {
        this._isStop = true;
    }
    play() {
        this._isStop = false;
    }
    gotoAndPlay(frame) {
        this.goto(frame, false);
    }
    gotoAndStop(frame) {
        this.goto(frame, true);
    }
    seekLastNode(value, frame) {
        if (value.parent === undefined) {
            return value;
        }
        if (value.endFrame > frame) {
            this.seekLastNode(value.parent, frame);
        }
        return value;
    }
    goto(frame, isStop) {
        const { _lastNode, _frames } = this;
        _lastNode.forEach((value, key) => {
            const node = this.seekLastNode(value, frame);
            node.prevTime = node.duration;
            this.updateobject(key, node);
        }, this);
        this._prevTime = frame * this._elapsedMS;
        for (let i = frame; i < _frames.length; i++) {
            _frames[i].forEach((value, key) => {
                if (i == frame) {
                    value.prevTime = (frame - value.startFrame) * this._elapsedMS;
                    this.updateobject(key, value);
                }
                else {
                    value.prevTime = 0;
                }
            }, this);
        }
        this._isStop = isStop;
        if (!this._isStop) {
            this.load();
        }
    }
    update(a, b, elapsedMS = 0) {
        if (this._isStop) {
            return;
        }
        let _prevTime = this._prevTime;
        const { _frames, _frameCount, _elapsedMS } = this;
        const curFrame = Math.round(_prevTime / _elapsedMS);
        if (curFrame >= _frameCount) {
            if (this.loop) {
                this.emit(Index_1.ComponentEvent.LOOP, this);
                this.goto(1, false);
                return;
            }
            this._isStop = true;
            this.emit(Index_1.ComponentEvent.COMPLETE, this);
        }
        if (_frames[curFrame] == undefined) {
            this._isStop = true;
            return;
        }
        _prevTime += elapsedMS;
        _frames[curFrame].forEach((value, key) => {
            if (value.start !== value.end) {
                value.prevTime += elapsedMS;
                this.updateobject(key, value);
            }
        }, this);
        this._prevTime = _prevTime;
        return true;
    }
    updateobject(key, node) {
        let elapsed;
        if (!node.duration) {
            elapsed = 1;
        }
        else {
            elapsed = node.prevTime / node.duration;
            elapsed = elapsed > 1 ? 1 : elapsed;
        }
        const value = node.easing(elapsed);
        const start = node.start;
        const end = node.end;
        if (typeof end === 'number') {
            switch (key) {
                case "x":
                case "y":
                case "angle":
                    this._object[key] = node.default + Math.floor(start + (end - start) * value);
                    break;
                case "scaleX":
                case "scaleY":
                case "rotation":
                    this._object[key] = node.default * Math.floor(start + (end - start) * value);
                    break;
                default:
                    this._object[key] = Math.floor(start + (end - start) * value);
            }
        }
        else if (typeof end === 'boolean') {
            this._object[key] = end;
        }
        if (elapsed === 1) {
            return true;
        }
        return false;
    }
    load() {
        if (!this._isSetDefault) {
            throw "Error Timeline.load undefined default";
        }
        Ticker_1.shared.removeUpdateEvent(this.update, this);
        Ticker_1.shared.addUpdateEvent(this.update, this);
    }
    release() {
        Ticker_1.shared.removeUpdateEvent(this.update, this);
        this._frames.forEach(map => {
            map.forEach((value) => {
                ObjectPool_1.objectPoolShared.push(Node, value);
            });
            map.clear();
        });
        this.id = -1;
        this._object = undefined;
        this._frameCount = 0;
        this._elapsedMS = 16.666666666666; //1000/60
        this._prevTime = 0;
        this._isStop = false;
        this._isSetDefault = false;
        this.loop = false;
        this._lastNode.clear();
    }
}
exports.Timeline = Timeline;


/***/ }),

/***/ "./src/tween/Tween.ts":
/*!****************************!*\
  !*** ./src/tween/Tween.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const Easing_1 = __webpack_require__(/*! ./Easing */ "./src/tween/Easing.ts");
const Interpolation_1 = __webpack_require__(/*! ./private/Interpolation */ "./src/tween/private/Interpolation.ts");
const core_1 = __webpack_require__(/*! ./private/core */ "./src/tween/private/core.ts");
const constants_1 = __webpack_require__(/*! ./private/constants */ "./src/tween/private/constants.ts");
const TweenEvent_1 = __webpack_require__(/*! ../event/TweenEvent */ "./src/event/TweenEvent.ts");
const defaultEasing = Easing_1.Easing.Linear.None;
/**
 * 缓动动画
 *
 * @example let tween = new gui.Tween(myObject).to({width:'300px'}, 2000).start()
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
 */
class Tween extends PIXI.utils.EventEmitter {
    constructor(object) {
        super();
        this._valuesEnd = null;
        this._duration = 1000;
        this._easingFunction = defaultEasing;
        this._easingReverse = defaultEasing;
        this._startTime = 0;
        this._delayTime = 0;
        this._repeat = 0;
        this._initRepeat = 0;
        this._isPlaying = false;
        this._yoyo = false;
        this._reversed = false;
        this._onStartCallbackFired = false;
        this._isFinite = true;
        this._prevTime = 0;
        this._rendered = false;
        this._reverseDelayTime = 0;
        /** 附加数据 */
        this.data = {};
        this.id = Utils_1.uid();
        this.object = object;
        this._valuesStart = Array.isArray(object) ? [] : {};
        this._interpolationFunction = Interpolation_1.Interpolation.Linear;
        return this;
    }
    /**
     * Easier way to call the Tween
     * @param {object} object - Initial value
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.fromTo(myObject, {x:0}, {x:200},1000)
     * @memberof gui.Tween
     * @static
     */
    static fromTo(object, to, duration) {
        const tween = new Tween(object).to(to, duration);
        return tween;
    }
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {TAny} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, 1000)
     * @memberof gui.Tween
     * @static
     */
    static to(object, to, duration) {
        return Tween.fromTo(object, to, duration);
    }
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {TAny} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, 1000)
     * @memberof gui.Tween
     * @static
     */
    static from(object, from, duration) {
        return Tween.fromTo(object, from, duration);
    }
    /**
     * 是否在播放中
     * @return {boolean}
     * @example tween.isPlaying()
     * @memberof gui.Tween
     */
    get isPlaying() {
        return this._isPlaying;
    }
    /**
     * 是否开始播放
     * @return {boolean}
     * @example tween.isStarted()
     * @memberof gui.Tween
     */
    get isStarted() {
        return this._onStartCallbackFired;
    }
    /**
     * 获取动画的开始时间
     */
    get startTime() {
        return this._startTime;
    }
    /**
     * 获取动画的开始时间
     */
    set startTime(value) {
        this._startTime = value;
    }
    /**
     * 设置缓动时长
     * @param {number} amount 持续的毫秒值
     * @example tween.duration(2000)
     * @memberof gui.Tween
     * @deprecated 不推荐使用这个方法，内部使用
     * @private
     */
    set duration(amount) {
        this._duration = typeof amount === 'function' ? amount(this._duration) : amount;
    }
    get duration() {
        return this._duration;
    }
    /**
     * 逆向缓动
     * @example tween.reverse()
     * @param {boolean=} state 是否逆向
     * @memberof gui.Tween
     */
    reverse(state) {
        const { _reversed } = this;
        this._reversed = state !== undefined ? state : !_reversed;
        return this;
    }
    /**
     * 当前动画是否逆转
     * @return {boolean}
     * @example tween.reversed() true逆向中
     * @memberof gui.Tween
     */
    reversed() {
        return this._reversed;
    }
    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof gui.Tween
     */
    pause() {
        if (!this._isPlaying) {
            return this;
        }
        this._isPlaying = false;
        core_1.remove(this);
        return this.emit(TweenEvent_1.TweenEvent.pause, this.object);
    }
    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof gui.Tween
     */
    play() {
        if (this._isPlaying) {
            return this;
        }
        this._isPlaying = true;
        this._startTime = 0;
        core_1.add(this);
        return this.emit(TweenEvent_1.TweenEvent.play, this.object);
    }
    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new gui.Tween({x:0}).to({x:100}, 2000)
     * @memberof gui.Tween
     */
    to(properties, duration = 1000) {
        this._valuesEnd = properties;
        this._duration = duration;
        return this;
    }
    render() {
        if (this._rendered) {
            return this;
        }
        const { _valuesStart, _valuesEnd, object } = this;
        if (!_valuesStart.processed) {
            for (const property in _valuesEnd) {
                const start = object && object[property] && Utils_1.deepCopy(object[property]);
                _valuesStart[property] = start || 0;
                constants_1.decompose(property, object, _valuesStart, _valuesEnd);
            }
            _valuesStart.processed = true;
        }
        this._rendered = true;
        return this;
    }
    /**
     * 开始执行缓动
     * @param {number|string} time 要开始的时间，延迟值
     * @example tween.start()
     * @memberof gui.Tween
     */
    start(time) {
        this._startTime = time !== undefined ? time : 0;
        this._startTime += this._delayTime;
        this._prevTime = 0;
        this._onStartCallbackFired = false;
        this._rendered = false;
        this._isPlaying = true;
        core_1.add(this);
        return this;
    }
    /**
     * 停止缓动
     * @example tween.stop()
     * @memberof gui.Tween
     */
    stop() {
        const { _isPlaying, _isFinite, object, _duration, _initRepeat, _yoyo, _reversed } = this;
        if (!_isPlaying) {
            return this;
        }
        const atStart = _isFinite ? (_initRepeat + 1) % 2 === 1 : !_reversed;
        this._reversed = false;
        if (_yoyo && atStart) {
            this._prevTime = _duration;
        }
        else {
            this._prevTime = 0;
        }
        this.update(0);
        this._isPlaying = false;
        core_1.remove(this);
        return this.emit(TweenEvent_1.TweenEvent.stop, object);
    }
    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof gui.Tween
     */
    delay(amount) {
        this._delayTime = amount;
        return this;
    }
    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof gui.Tween
     */
    repeat(amount) {
        this._repeat = !this._duration ? 0 : amount;
        this._initRepeat = this._repeat;
        this._isFinite = isFinite(amount);
        return this;
    }
    /**
     * 设置每个重复执行过程的延迟时间，毫秒
     * @param {number} amount 延迟值
     * @example tween.reverseDelay(500)
     * @memberof gui.Tween
     */
    reverseDelay(amount) {
        this._reverseDelayTime = amount;
        return this;
    }
    /**
     * 是否在重复执行中启用反向动画
     * @param {boolean} state true启动
     * @param {Function=} _easingReverse 反向时的Easing function
     * @example tween.yoyo(true)
     * @memberof gui.Tween
     */
    yoyo(state, _easingReverse) {
        this._yoyo = typeof state === 'function' ? state(this._yoyo) : state === null ? this._yoyo : state;
        if (!state) {
            this._reversed = false;
        }
        if (_easingReverse) {
            this._easingReverse = _easingReverse;
        }
        else {
            this._easingReverse = this._easingFunction;
        }
        return this;
    }
    /**
     * 设置缓动函数
     * @param {Function} _easingFunction 缓动函数的公式，如果设置yoyo的第二个值会应用于逆向缓动
     * @example tween.easing(Easing.Elastic.InOut)
     * @memberof gui.Tween
     */
    easing(_easingFunction) {
        this._easingFunction = _easingFunction;
        return this;
    }
    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof gui.Tween
     */
    interpolation(_interpolationFunction) {
        if (typeof _interpolationFunction === 'function') {
            this._interpolationFunction = _interpolationFunction;
        }
        return this;
    }
    /**
     * 更新动画到指定时间点，进行播放
     * @param time
     */
    gotoAndPlay(time) {
        this._prevTime = time;
        this.update(0);
    }
    /**
     * 更新动画到指定时间点，停止播放
     * @param time
     */
    gotoAndStop(time) {
        this._prevTime = time;
        this.update(0);
        this.pause();
    }
    /**
     * 更新动画到指定时间点，停止播放
     * @param time
     */
    gotoAndEnd() {
        this._prevTime = this._duration;
        this.update(0);
    }
    /**
     * 更新函数，通过给定的 `time` 设置目标属性变化
    * @param {number=} elapsedMS 帧间隔
    * @param {Boolean=} preserve 完成后，防止删除动画对象
     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
     * @example tween.update(100)
     * @memberof gui.Tween
     */
    update(elapsedMS, preserve, forceTime) {
        const { _onStartCallbackFired, _easingFunction, _easingReverse, _delayTime, _reverseDelayTime, _yoyo, _reversed, _startTime, _duration, _valuesStart, _valuesEnd, object, _isFinite, _isPlaying } = this;
        if (!_isPlaying || (_startTime > 0 && !forceTime)) {
            this._startTime -= elapsedMS;
            this._startTime = Math.max(0, this._startTime);
            return true;
        }
        let elapsed;
        let property;
        let _repeat = this._repeat;
        if (!_duration) {
            elapsed = 1;
            _repeat = 0;
        }
        else {
            this._prevTime += elapsedMS;
            if (elapsedMS > constants_1.TOO_LONG_FRAME_MS && core_1.isRunning() && core_1.isLagSmoothing()) {
                this._prevTime -= constants_1.FRAME_MS;
            }
            elapsed = (this._prevTime) / _duration;
            elapsed = elapsed > 1 ? 1 : elapsed;
            elapsed = _reversed ? 1 - elapsed : elapsed;
        }
        if (!_onStartCallbackFired) {
            if (!this._rendered) {
                this.render();
                this._rendered = true;
            }
            this.emit(TweenEvent_1.TweenEvent.start, object);
            this._onStartCallbackFired = true;
        }
        const currentEasing = _reversed ? _easingReverse || _easingFunction : _easingFunction;
        for (property in _valuesEnd) {
            const start = _valuesStart[property];
            const end = _valuesEnd[property];
            const value = currentEasing[property] ? currentEasing[property](elapsed) : typeof currentEasing === 'function' ? currentEasing(elapsed) : defaultEasing(elapsed);
            if (typeof end === 'number') {
                object[property] = start + (end - start) * value;
            }
            else if (typeof end === 'boolean') {
                object[property] = end;
                elapsed = _reversed ? 0 : 1;
            }
            else { //颜色
                constants_1.recompose(property, object, _valuesStart, _valuesEnd, value, elapsed);
            }
            // else if (Array.isArray(end) && !(end as TAny).isString && !Array.isArray(start)) {
            //     const _interpolationFunctionCall = _interpolationFunction[property]
            //     ? _interpolationFunction[property] : typeof _interpolationFunction === 'function' ? _interpolationFunction : Interpolation.Linear;
            //     object[property] = _interpolationFunctionCall(end, value, object[property]);
            // } 
        }
        this.emit(TweenEvent_1.TweenEvent.update, object, elapsed, elapsedMS);
        if (elapsed === 1 || (_reversed && elapsed === 0)) {
            this._prevTime = 0;
            if (_repeat > 0 && _duration > 0) {
                if (_isFinite) {
                    this._repeat--;
                }
                if (_yoyo) {
                    this._reversed = !_reversed;
                }
                this.emit(_yoyo && !_reversed ? TweenEvent_1.TweenEvent.reverse : TweenEvent_1.TweenEvent.repeat, object);
                if (_reversed && _reverseDelayTime) {
                    this._startTime = _reverseDelayTime;
                }
                else {
                    this._startTime = _delayTime;
                }
                return true;
            }
            else {
                if (!preserve) {
                    this._isPlaying = false;
                    core_1.remove(this);
                }
                this.emit(TweenEvent_1.TweenEvent.complete, object);
                this._repeat = this._initRepeat;
                return false;
            }
        }
        return true;
    }
}
Tween.core = { add: core_1.add, get: core_1.get, getAll: core_1.getAll, remove: core_1.remove, removeAll: core_1.removeAll, removeDisplay: core_1.removeDisplay, update: core_1.update };
Tween.Event = TweenEvent_1.TweenEvent;
exports.Tween = Tween;


/***/ }),

/***/ "./src/tween/private/Interpolation.ts":
/*!********************************************!*\
  !*** ./src/tween/private/Interpolation.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "./src/tween/private/constants.ts");
/**
 * 差值计算列表
 * @namespace TWEEN.Interpolation
 * @example
 *
 * let bezier = gui.tween.Interpolation.Bezier
 * new gui.tween.Tween({x:0}).to({x:[0, 4, 8, 12, 15, 20, 30, 40, 20, 40, 10, 50]}, 1000).interpolation(bezier).start()
 * @memberof gui.tween
 */
exports.Interpolation = {
    Linear(v, k, value) {
        const m = v.length - 1;
        const f = m * k;
        const i = Math.floor(f);
        const fn = exports.Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f, value);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f, value);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i, value);
    },
    Bezier(v, k, value) {
        let b = exports.Interpolation.Utils.Reset(value);
        let n = v.length - 1;
        let pw = Math.pow;
        let fn = exports.Interpolation.Utils.Bernstein;
        let isBArray = Array.isArray(b);
        for (let i = 0; i <= n; i++) {
            if (typeof b === 'number') {
                b += pw(1 - k, n - i) * pw(k, i) * v[i] * fn(n, i);
            }
            else if (isBArray) {
                for (let p = 0, len = b.length; p < len; p++) {
                    if (typeof b[p] === 'number') {
                        b[p] += pw(1 - k, n - i) * pw(k, i) * v[i][p] * fn(n, i);
                    }
                    else {
                        b[p] = v[i][p];
                    }
                }
            }
            else if (typeof b === 'object') {
                for (let p in b) {
                    if (typeof b[p] === 'number') {
                        b[p] += pw(1 - k, n - i) * pw(k, i) * v[i][p] * fn(n, i);
                    }
                    else {
                        b[p] = v[i][p];
                    }
                }
            }
            else if (typeof b === 'string') {
                let STRING_BUFFER = '';
                let idx = Math.round(n * k);
                let vCurr = v[idx];
                for (let ks = 1, len = vCurr.length; ks < len; ks++) {
                    STRING_BUFFER += vCurr[ks];
                }
                return STRING_BUFFER;
            }
        }
        return b;
    },
    CatmullRom(v, k, value) {
        const m = v.length - 1;
        let f = m * k;
        let i = Math.floor(f);
        const fn = exports.Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i, value);
        }
        else {
            if (k < 0) {
                return fn(v[1], v[1], v[0], v[0], -k, value);
            }
            if (k > 1) {
                return fn(v[m - 1], v[m - 1], v[m], v[m], (k | 0) - k, value);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i, value);
        }
    },
    Utils: {
        Linear(p0, p1, t, v) {
            if (p0 === p1 || typeof p0 === 'string') {
                // Quick return for performance reason
                if (p1.length && p1.splice && p1.isString) {
                    p1 = '';
                    for (let i = 0, len = p0.length; i < len; i++) {
                        p1 += p0[i];
                    }
                }
                return p1;
            }
            else if (typeof p0 === 'number') {
                return typeof p0 === 'function' ? p0(t) : p0 + (p1 - p0) * t;
            }
            else if (typeof p0 === 'object') {
                if (p0.length !== undefined) {
                    const isForceStringProp = typeof p0[0] === 'string' || p0.isString;
                    if (isForceStringProp || p0[0] === constants_1.STRING_PROP) {
                        let STRING_BUFFER = '';
                        for (let i = isForceStringProp ? 0 : 1, len = p0.length; i < len; i++) {
                            let currentValue = t === 0 ? p0[i] : t === 1 ? p1[i] : typeof p0[i] === 'number' ? p0[i] + (p1[i] - p0[i]) * t : p1[i];
                            if ((t > 0 && t < 1 && constants_1.isRGBColor(p0, i)) || constants_1.isRGBColor(p0, i, constants_1.RGBA)) {
                                currentValue |= 0;
                            }
                            STRING_BUFFER += currentValue;
                        }
                        return STRING_BUFFER;
                    }
                    else if (v && v.length && v.splice) {
                        for (let p = 0, len = v.length; p < len; p++) {
                            v[p] = exports.Interpolation.Utils.Linear(p0[p], p1[p], t, v[p]);
                        }
                    }
                }
                else {
                    for (const p in v) {
                        v[p] = exports.Interpolation.Utils.Linear(p0[p], p1[p], t, v[p]);
                    }
                }
                return v;
            }
        },
        Reset(value) {
            if (Array.isArray(value)) {
                for (let i = 0, len = value.length; i < len; i++) {
                    value[i] = exports.Interpolation.Utils.Reset(value[i]);
                }
                return value;
            }
            else if (typeof value === 'object') {
                for (let i in value) {
                    value[i] = exports.Interpolation.Utils.Reset(value[i]);
                }
                return value;
            }
            else if (typeof value === 'number') {
                return 0;
            }
            return value;
        },
        Bernstein(n, i) {
            const fc = exports.Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            const a = [1];
            return (n) => {
                let s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (let i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom(p0, p1, p2, p3, t, v) {
            if (typeof p0 === 'string') {
                return p1;
            }
            else if (typeof p0 === 'number') {
                const v0 = (p2 - p0) * 0.5;
                const v1 = (p3 - p1) * 0.5;
                const t2 = t * t;
                const t3 = t * t2;
                return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            }
            else if (typeof p0 === 'object') {
                if (p0.length !== undefined) {
                    if (p0[0] === constants_1.STRING_PROP) {
                        let STRING_BUFFER = '';
                        for (let i = 1, len = p0.length; i < len; i++) {
                            let currentValue = typeof p0[i] === 'number' ? exports.Interpolation.Utils.CatmullRom(p0[i], p1[i], p2[i], p3[i], t) : p3[i];
                            if (constants_1.isRGBColor(p0, i) || constants_1.isRGBColor(p0, i, constants_1.RGBA)) {
                                currentValue |= 0;
                            }
                            STRING_BUFFER += currentValue;
                        }
                        return STRING_BUFFER;
                    }
                    for (let p = 0, len = v.length; p < len; p++) {
                        v[p] = exports.Interpolation.Utils.CatmullRom(p0[p], p1[p], p2[p], p3[p], t, v[p]);
                    }
                }
                else {
                    for (const p in v) {
                        v[p] = exports.Interpolation.Utils.CatmullRom(p0[p], p1[p], p2[p], p3[p], t, v[p]);
                    }
                }
                return v;
            }
        }
    }
};


/***/ }),

/***/ "./src/tween/private/constants.ts":
/*!****************************************!*\
  !*** ./src/tween/private/constants.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.ts");
/**
 * 卡帧后的平滑处理帧率
 */
exports.FRAME_MS = 50 / 3;
/**
 * 平滑处理允许的触发时间
 */
exports.TOO_LONG_FRAME_MS = 250;
/**
 * 链式补间动画的key前缀
 */
exports.CHAINED_TWEENS = '_chainedTweens';
// For String tweening stuffs
exports.STRING_PROP = 'STRING_PROP';
// Also RegExp's for string tweening
exports.NUM_REGEX = /\s+|([A-Za-z?().,{}:""[\]#%]+)|([-+]=+)?([-+]+)?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]=?\d+)?/g;
const isNaNForST = (v) => isNaN(+v) || ((v[0] === '+' || v[0] === '-') && v[1] === '=') || v === '' || v === ' ';
const hexColor = /^#([0-9a-f]{6}|[0-9a-f]{3})$/gi;
const hex2rgbext = (all, ...hex) => {
    let rgb = Utils_1.hexToRgb(all);
    return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
};
function decomposeString(fromValue) {
    if (fromValue && fromValue.splice && fromValue.isString) {
        return fromValue;
    }
    if (typeof fromValue !== 'string') {
        return fromValue;
    }
    if (fromValue.charAt(1) === '=') {
        return fromValue;
    }
    const hex = fromValue.replace(hexColor, hex2rgbext).match(exports.NUM_REGEX);
    let value;
    if (hex) {
        value = hex.map((v) => (isNaNForST(v) ? v : +v));
    }
    value.isString = true;
    return value;
}
exports.decomposeString = decomposeString;
// Decompose value, now for only `string` that required
function decompose(prop, obj, from, to) {
    const fromValue = from[prop];
    const toValue = to[prop];
    if (fromValue === toValue) {
        return true;
    }
    else if (Array.isArray(fromValue) && Array.isArray(toValue) && fromValue.length === toValue.length) {
        for (let i = 0, len = toValue.length; i < len; i++) {
            const a = fromValue[i];
            const b = toValue[i];
            if (a === b || (typeof a === 'number' && typeof b === 'number')) {
                continue;
            }
            else {
                decompose(i, obj[prop], fromValue, toValue);
            }
        }
    }
    if (typeof fromValue === 'number' && typeof toValue === 'number') {
        //
    }
    else if (fromValue && fromValue.splice && fromValue.isString && toValue && toValue.splice && toValue.isString) {
        //
    }
    else if (typeof fromValue === 'string' && Array.isArray(toValue)) {
        const fromValue1 = decomposeString(fromValue);
        const toValues = toValue.map(decomposeString);
        from[prop] = fromValue1;
        to[prop] = toValues;
        return true;
    }
    else if (typeof fromValue === 'string' || typeof toValue === 'string') {
        let fromValue1 = Array.isArray(fromValue) && fromValue[0] === exports.STRING_PROP ? fromValue : decomposeString(fromValue);
        let toValue1 = Array.isArray(toValue) && toValue[0] === exports.STRING_PROP ? toValue : decomposeString(toValue);
        if (fromValue1 === undefined) {
            return;
        }
        let i = 1;
        while (i < fromValue1.length) {
            if (fromValue1[i] === toValue1[i] && typeof fromValue1[i - 1] === 'string') {
                fromValue1.splice(i - 1, 2, fromValue1[i - 1] + fromValue1[i]);
                toValue1.splice(i - 1, 2, toValue1[i - 1] + toValue1[i]);
            }
            else {
                i++;
            }
        }
        i = 0;
        if (fromValue1[0] === exports.STRING_PROP) {
            fromValue1.shift();
        }
        if (toValue1[0] === exports.STRING_PROP) {
            toValue1.shift();
        }
        from[prop] = fromValue1;
        to[prop] = toValue1;
        return true;
    }
    else if (typeof fromValue === 'object' && typeof toValue === 'object') {
        if (Array.isArray(fromValue) && !fromValue.isString) {
            return fromValue.map((v, i) => decompose(i, obj[prop], fromValue, toValue));
        }
        else {
            for (let prop2 in toValue) {
                decompose(prop2, obj[prop], fromValue, toValue);
            }
        }
        return true;
    }
    return false;
}
exports.decompose = decompose;
// Recompose value
exports.RGB = 'rgb(';
exports.RGBA = 'rgba(';
function isRGBColor(v, i, r = exports.RGB) {
    return typeof v[i] === 'number' && (v[i - 1] === r || v[i - 3] === r || v[i - 5] === r);
}
exports.isRGBColor = isRGBColor;
function recompose(prop, obj, from, to, t, originalT, stringBuffer) {
    const fromValue = stringBuffer ? from : from[prop];
    let toValue = stringBuffer ? to : to[prop];
    if (toValue === undefined) {
        return fromValue;
    }
    if (fromValue === undefined || typeof fromValue === 'string' || fromValue === toValue) {
        return toValue;
    }
    else if (typeof fromValue === 'object' && typeof toValue === 'object') {
        if (!fromValue || !toValue) {
            return obj[prop];
        }
        if (typeof fromValue === 'object' &&
            !!fromValue &&
            fromValue.isString &&
            toValue &&
            toValue.splice &&
            toValue.isString) {
            let STRING_BUFFER = '';
            for (let i = 0, len = fromValue.length; i < len; i++) {
                if (fromValue[i] !== toValue[i] || typeof fromValue[i] !== 'number' || typeof toValue[i] === 'number') {
                    const isRelative = typeof fromValue[i] === 'number' && typeof toValue[i] === 'string' && toValue[i][1] === '=';
                    let currentValue = typeof fromValue[i] !== 'number'
                        ? fromValue[i]
                        : isRelative
                            ? fromValue[i] + parseFloat(toValue[i][0] + toValue[i].substr(2)) * t
                            : fromValue[i] + (toValue[i] - fromValue[i]) * t;
                    if (isRGBColor(fromValue, i) || isRGBColor(fromValue, i, exports.RGBA)) {
                        currentValue |= 0;
                    }
                    STRING_BUFFER += currentValue;
                    if (isRelative && originalT === 1) {
                        fromValue[i] = fromValue[i] + parseFloat(toValue[i][0] + toValue[i].substr(2));
                    }
                }
                else {
                    STRING_BUFFER += fromValue[i];
                }
            }
            if (!stringBuffer) {
                obj[prop] = STRING_BUFFER;
            }
            return STRING_BUFFER;
        }
        else if (Array.isArray(fromValue) && fromValue[0] !== exports.STRING_PROP) {
            for (let i = 0, len = fromValue.length; i < len; i++) {
                if (fromValue[i] === toValue[i] || typeof obj[prop] === 'string') {
                    continue;
                }
                recompose(i, obj[prop], fromValue, toValue, t, originalT);
            }
        }
        else if (typeof fromValue === 'object' && !!fromValue && !fromValue.isString) {
            for (let i in fromValue) {
                if (fromValue[i] === toValue[i]) {
                    continue;
                }
                recompose(i, obj[prop], fromValue, toValue, t, originalT);
            }
        }
    }
    else if (typeof fromValue === 'number') {
        const isRelative = typeof toValue === 'string';
        obj[prop] = isRelative
            ? fromValue + parseFloat(toValue[0] + toValue.substr(2)) * t
            : fromValue + (toValue - fromValue) * t;
        if (isRelative && originalT === 1) {
            from[prop] = obj[prop];
        }
    }
    else if (typeof toValue === 'function') {
        obj[prop] = toValue(t);
    }
    return obj[prop];
}
exports.recompose = recompose;
// Dot notation => Object structure converter
// example
// {'scale.x.y.z':'VALUE'} => {scale:{x:{y:{z:'VALUE'}}}}
// Only works for 3-level parsing, after 3-level, parsing dot-notation not works as it's not affects
const propRegExp = /([.[])/g;
const replaceBrace = /\]/g;
const propExtract = function (obj, property) {
    const value = obj[property];
    const props = property.replace(replaceBrace, '').split(propRegExp);
    const propsLastIndex = props.length - 1;
    let lastArr = Array.isArray(obj);
    let lastObj = typeof obj === 'object' && !lastArr;
    if (lastObj) {
        obj[property] = null;
        delete obj[property];
    }
    else if (lastArr) {
        obj.splice(property, 1);
    }
    return props.reduce((nested, prop, index) => {
        if (lastArr) {
            if (prop !== '.' && prop !== '[') {
                prop *= 1;
            }
        }
        let nextProp = props[index + 1];
        let nextIsArray = nextProp === '[';
        if (prop === '.' || prop === '[') {
            if (prop === '.') {
                lastObj = true;
                lastArr = false;
            }
            else if (prop === '[') {
                lastObj = false;
                lastArr = true;
            }
            return nested;
        }
        else if (nested[prop] === undefined) {
            if (lastArr || lastObj) {
                nested[prop] = index === propsLastIndex ? value : lastArr || nextIsArray ? [] : lastObj ? {} : null;
                lastObj = lastArr = false;
                return nested[prop];
            }
        }
        else if (nested[prop] !== undefined) {
            if (index === propsLastIndex) {
                nested[prop] = value;
            }
            return nested[prop];
        }
        return nested;
    }, obj);
};
exports.SET_NESTED = function (nested) {
    if (typeof nested === 'object' && !!nested) {
        for (let prop in nested) {
            if (prop.indexOf('.') !== -1 || prop.indexOf('[') !== -1) {
                propExtract(nested, prop);
            }
            else if (typeof nested[prop] === 'object' && !!nested[prop]) {
                let nested2 = nested[prop];
                for (let prop2 in nested2) {
                    if (prop2.indexOf('.') !== -1 || prop2.indexOf('[') !== -1) {
                        propExtract(nested2, prop2);
                    }
                    else if (typeof nested2[prop2] === 'object' && !!nested2[prop2]) {
                        let nested3 = nested2[prop2];
                        for (let prop3 in nested3) {
                            if (prop3.indexOf('.') !== -1 || prop3.indexOf('[') !== -1) {
                                propExtract(nested3, prop3);
                            }
                        }
                    }
                }
            }
        }
    }
    return nested;
};


/***/ }),

/***/ "./src/tween/private/core.ts":
/*!***********************************!*\
  !*** ./src/tween/private/core.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 缓动列表
 * @private
 */
const _tweens = [];
/**
 * 是否运行中
 */
let isStarted = false;
/**
 * 空帧标识
 */
let emptyFrame = 0;
/**
 * 空帧后最大间隔帧率
 */
let powerModeThrottle = 120;
/**
 * 是否开启卡针后平滑处理
 */
let handleLag = true;
/**
 * 插件存储器
 * @namespace tween.Plugins
 * @memberof gui.tween
 * @example
 * let num = Plugins.num = function (node, start, end) {
  * return t => start + (end - start) * t
  * }
  *
  * @static
  */
exports.Plugins = {};
/**
 * 添加对象到缓动列表
 * @param {Tween} tween Tween 实例
 * @memberof gui.tween
 * @example
 * let tween = new gui.tween.Tween({x:0})
 * tween.to({x:200}, 1000)
 * gui.tween.add(tween)
 */
function add(tween) {
    let i = _tweens.indexOf(tween);
    if (i > -1) {
        _tweens.splice(i, 1);
    }
    _tweens.push(tween);
    emptyFrame = 0;
    isStarted = true;
}
exports.add = add;
/**
 * 没有缓动后，设置运行多少帧后，停止
 * @param {number} frameCount=120 删除所有动画后，要运行的剩余帧
 * @memberof gui.tween
 * @example
 * gui.tween.FrameThrottle(60)
 */
function FrameThrottle(frameCount = 120) {
    powerModeThrottle = frameCount * 1.05;
}
exports.FrameThrottle = FrameThrottle;
/**
 * 延时处理，针对插件、canvas、dom
 * @param {number} state=true 是否平滑处理
 * @memberof gui.tween
 * @example
 * gui.tween.ToggleLagSmoothing(false)
 */
function ToggleLagSmoothing(_state = true) {
    handleLag = _state;
}
exports.ToggleLagSmoothing = ToggleLagSmoothing;
/**
 * 获得所有缓动对象
 * @memberof gui.tween
 * gui.tween.getAll()
 */
function getAll() {
    return _tweens;
}
exports.getAll = getAll;
/**
 * 移除所有动画对象
 * @example  gui.tween.removeAll()
 * @memberof gui.tween
 */
function removeAll() {
    _tweens.length = 0;
    isStarted = false;
}
exports.removeAll = removeAll;
/**
 * 获取对象
 * @param {Tween} tween 缓动对象实例
 * @return {Tween} 返回对象或null
 * @memberof gui.tween
 * @example
 * gui.tween.get(tween)
 */
function get(tween) {
    for (let i = 0; i < _tweens.length; i++) {
        if (tween === _tweens[i]) {
            return _tweens[i];
        }
    }
    return null;
}
exports.get = get;
function removeDisplay(uuid) {
    for (let i = 0; i < _tweens.length; i++) {
        if (_tweens[i].object.uuid && uuid === _tweens[i].object.uuid) {
            _tweens[i].stop();
            remove(_tweens[i]);
            return;
        }
    }
    return;
}
exports.removeDisplay = removeDisplay;
/**
 * 从缓动列表移除对象
 * @param {Tween} tween Tween instance
 * @memberof gui.tween
 * @example
 * gui.tween.remove(tween)
 */
function remove(tween) {
    const i = _tweens.indexOf(tween);
    if (i !== -1) {
        _tweens.splice(i, 1);
    }
    if (_tweens.length === 0) {
        isStarted = false;
    }
}
exports.remove = remove;
/**
 * 按给定时间更新缓动
 * @param {number=} time 时间戳
 * @param {Boolean=} preserve 完成后，防止删除动画对象
 * @memberof gui.tween
 * @example
 * gui.tween.update(500)
 */
function update(time, preserve = false) {
    if (!isStarted) {
        return false;
    }
    if (emptyFrame >= powerModeThrottle && handleLag) {
        console.log("mptyFrame >= powerModeThrottle && handleLag");
        isStarted = false;
        emptyFrame = 0;
        return false;
    }
    if (!_tweens.length) {
        emptyFrame++;
    }
    let i = 0;
    let length = _tweens.length;
    while (i < length) {
        _tweens[i++].update(time, preserve);
        if (length > _tweens.length) {
            // The tween has been removed, keep same index
            i--;
        }
        length = _tweens.length;
    }
    return true;
}
exports.update = update;
/**
 * 是否正在运行中
 * @return {Boolean} 只要还有缓动在运行，返回true
 * @memberof gui.tween
 * @example gui.tween.isRunning()
 */
function isRunning() {
    return isStarted;
}
exports.isRunning = isRunning;
/**
 * 返回是否开启延迟平滑状态
 * @return {Boolean}
 * @memberof gui.tween
 * @example gui.tween.isRunning()
 */
function isLagSmoothing() {
    return handleLag;
}
exports.isLagSmoothing = isLagSmoothing;


/***/ }),

/***/ "./src/tween/private/index.ts":
/*!************************************!*\
  !*** ./src/tween/private/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! ./core */ "./src/tween/private/core.ts");
exports.add = core_1.add;
exports.get = core_1.get;
exports.getAll = core_1.getAll;
exports.isRunning = core_1.isRunning;
exports.FrameThrottle = core_1.FrameThrottle;
exports.ToggleLagSmoothing = core_1.ToggleLagSmoothing;
exports.Plugins = core_1.Plugins;
exports.remove = core_1.remove;
exports.removeAll = core_1.removeAll;
exports.removeDisplay = core_1.removeDisplay;
exports.update = core_1.update;
const Interpolation_1 = __webpack_require__(/*! ./Interpolation */ "./src/tween/private/Interpolation.ts");
exports.Interpolation = Interpolation_1.Interpolation;
const utils = __webpack_require__(/*! ./constants */ "./src/tween/private/constants.ts");
exports.utils = utils;
const TweenEvent_1 = __webpack_require__(/*! ../../event/TweenEvent */ "./src/event/TweenEvent.ts");
exports.TweenEvent = TweenEvent_1.TweenEvent;
const Timeline_1 = __webpack_require__(/*! ../Timeline */ "./src/tween/Timeline.ts");
exports.Timeline = Timeline_1.Timeline;


/***/ }),

/***/ "./src/utils/ObjectPool.ts":
/*!*********************************!*\
  !*** ./src/utils/ObjectPool.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** 对象池*/
class ObjectPool {
    constructor() {
        /**
         * 作为对象池的词典dict
         */
        this.objPoolDict = new Map();
    }
    /**
     * 向对象池中放入对象，以便重复利用
     */
    push(keyClass, oldObj) {
        if (oldObj === undefined) {
            return;
        }
        let objs = this.objPoolDict.get(keyClass);
        if (objs === undefined) {
            objs = [];
            this.objPoolDict.set(keyClass, objs);
        }
        if (objs.indexOf(oldObj) === -1) {
            oldObj.release();
            objs.push(oldObj);
        }
    }
    /**
     * 从对象池中取出需要的对象
     * @return 取出的相应对象
     *
     */
    pop(keyClass) {
        const objs = this.objPoolDict.get(keyClass);
        if (objs !== undefined && objs.length > 0) {
            return objs.pop();
        }
        return new keyClass();
    }
}
/**
 * 对象池实例
 */
exports.objectPoolShared = new ObjectPool();


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Stage_1 = __webpack_require__(/*! ../core/Stage */ "./src/core/Stage.ts");
/**
 * 工具类
 */
/** 日志输出 */
function log(message, ...optionalParams) {
    console.log(message, ...optionalParams);
}
exports.log = log;
function setSourcePath(params) {
    exports.$getSourcePath = params;
}
exports.setSourcePath = setSourcePath;
function setDisplayObjectPath(params) {
    exports.$getUIDisplayObjectPath = params;
}
exports.setDisplayObjectPath = setDisplayObjectPath;
function getTexture(src) {
    if (exports.$getSourcePath) {
        src = exports.$getSourcePath(src);
    }
    if (src instanceof PIXI.Texture) {
        return src;
    }
    return PIXI.Texture.from(src);
}
exports.getTexture = getTexture;
function getSound(src) {
    if (exports.$getSourcePath) {
        src = exports.$getSourcePath(src);
    }
    if (src instanceof PIXI.sound.Sound) {
        return src;
    }
    return PIXI.sound.Sound.from(src);
}
exports.getSound = getSound;
function getDisplayObject(src) {
    if (exports.$getUIDisplayObjectPath) {
        src = exports.$getUIDisplayObjectPath(src);
    }
    return src;
}
exports.getDisplayObject = getDisplayObject;
/**
 * 递归获取舞台，组件必须已经添加到舞台
 * @param DisplayObject
 */
function getStage(target) {
    if (target.$stage) {
        return target.$stage;
    }
    if (target.parent instanceof Stage_1.Stage) {
        return target.parent;
    }
    if (target.parent) {
        return getStage(target.parent);
    }
    return undefined;
}
exports.getStage = getStage;
/**
 * 快速设置矩形
 * @param sourcr
 * @param x
 * @param y
 * @param w
 * @param h
 */
function setRectangle(source, x, y, w, h) {
    source.x = x;
    source.y = y;
    source.width = w;
    source.height = h;
}
exports.setRectangle = setRectangle;
/** 获取当前运行时时间 */
function now() {
    if (performance !== undefined && performance.now !== undefined) {
        // This must be bound, because directly assigning this function
        // leads to an invocation exception in Chrome.
        return performance.now.bind(performance)();
        // Use Date.now if it is available.
    }
    else {
        const offset = performance && performance.timing && performance.timing.navigationStart ? performance.timing.navigationStart : Date.now();
        return Date.now() - offset;
    }
}
exports.now = now;
/**
 * 深度拷贝对象
 * @param source 对象元
 */
function deepCopy(source, target) {
    if (source === undefined || typeof source !== 'object') {
        return source;
    }
    else if (Array.isArray(source)) {
        return [].concat(source);
    }
    else if (typeof source === 'object') {
        const tempTarget = target || {};
        for (const prop in source) {
            tempTarget[prop] = deepCopy(source[prop], tempTarget[prop]);
        }
        return tempTarget;
    }
    return source;
}
exports.deepCopy = deepCopy;
/**
 * helper function to convert string hex to int or default
 *
 * 16进制转int，颜色转换
 * @param str 要转换的值，如#FFFFFF,0xFFFFFF
 * @param def 转换失败的返回值
 */
function hexToInt(str, def) {
    if (typeof str === 'number')
        return str;
    const result = parseInt(str.replace('#', '0x'));
    if (isNaN(result))
        return def;
    return result;
}
exports.hexToInt = hexToInt;
//helper function to convert hex to rgba
/**
 *
 * @param hex 16进制字符窜 如 #FFFFFF ，不能省略三位写法
 * @param alpha 透明度
 * @returns "rgba(255,255,255,1)" || false
 */
function hexToRgba(hex, alpha) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + alpha + ")" : false;
}
exports.hexToRgba = hexToRgba;
/**
 * 转换为16位字符串，不够2位的补0，如 “01”
 * @param c 要转换的数字
 */
function componentToHex(c) {
    const hex = c.toString(16);
    if (hex.length == 4) {
        return "00" + hex;
    }
    return hex.length == 1 ? "0" + hex : hex;
}
exports.componentToHex = componentToHex;
/**
 * RGB转16进制
 * @param r 红 0-255
 * @param g 绿 0-255
 * @param b 蓝 0-255
 */
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
exports.rgbToHex = rgbToHex;
/**
 * RGB转number
 * @param r 红 0-255
 * @param g 绿 0-255
 * @param b 蓝 0-255
 */
function rgbToNumber(r, g, b) {
    return r * 65536 + g * 256 + b;
}
exports.rgbToNumber = rgbToNumber;
/**
 * rgb字符串形式转换
 * @param color rgb(255,255,255)
 */
function rgbStrToNumber(color) {
    const colors = color.substring(4, color.length - 1).split(",");
    return rgbToNumber(parseInt(colors[0]), parseInt(colors[1]), parseInt(colors[2]));
}
exports.rgbStrToNumber = rgbStrToNumber;
/**
 * 10进制转RGB
 * @param c 数
 */
function numberToRgb(c) {
    return {
        r: Math.floor(c / (256 * 256)),
        g: Math.floor(c / 256) % 256,
        b: c % 256,
    };
}
exports.numberToRgb = numberToRgb;
/**
 * hex 转 RGB，
 *
 * 如hex字符串: "#ffffff"->255,255,255
 *
 * 如16进制数字: 0xffffff->255,255,255
 * @param hex
 */
function hexToRgb(hex) {
    if (hex === undefined)
        hex = 0xffffff;
    if (typeof (hex) == "number") {
        return numberToRgb(hex);
    }
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 255, g: 255, b: 255 };
}
exports.hexToRgb = hexToRgb;
/**
 * 根据amt计算当前的位置start-stop，两数差值
 * @param start 开始数值
 * @param stop  结束的数值
 * @param amt 0-1 用时 >1为1，小于0为0
 */
function Lerp(start, stop, amt) {
    if (amt > 1)
        amt = 1;
    else if (amt < 0)
        amt = 0;
    return start + (stop - start) * amt;
}
exports.Lerp = Lerp;
/**
 * 四舍五入保留指定位数的小数
 * @param num 取舍的数
 * @param decimals 保留小数位
 */
function Round(num, decimals) {
    const pow = Math.pow(10, decimals);
    return Math.round(num * pow) / pow;
}
exports.Round = Round;
/** 获取全局唯一数 */
function uid() {
    return PIXI.utils.uid();
}
exports.uid = uid;
/** 获取URL参数 */
function getQueryVariable(variable) {
    const params = new URLSearchParams(location.search);
    if (params.has(variable)) {
        return params.get(variable);
    }
    return undefined;
}
exports.getQueryVariable = getQueryVariable;
function isDeltaIdentity(m) {
    return (m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1);
}
exports.isDeltaIdentity = isDeltaIdentity;
function formatRelative(value, total) {
    if (value == undefined) {
        return NaN;
    }
    if (typeof value === "number") {
        return value;
    }
    const str = value;
    const index = str.indexOf("%");
    if (index == -1) {
        return +str;
    }
    const percent = +str.substring(0, index);
    return percent * 0.01 * total;
}
exports.formatRelative = formatRelative;


/***/ }),

/***/ "./src/vf-gui.ts":
/*!***********************!*\
  !*** ./src/vf-gui.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vfgui = __webpack_require__(/*! ./UI */ "./src/UI.ts");
// //注入常规兼容方法
// if(!Array.from){
//     Array.from = function (el: unknown[]) {
//         return Array.apply(this, el);
//     }
// }
// String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
//     return this.lastIndexOf(word, pos0.7.0.0.7.0.0.7.0) ==0.7.0.0.7.0.0.7.0;
// });
window.gui = vfgui;
window.gui.version = "0.7.0";
exports.default = vfgui;
// declare namespace gui{
//     export * from "src/UI";
// }


/***/ })

/******/ });
//# sourceMappingURL=vf-gui.js.map