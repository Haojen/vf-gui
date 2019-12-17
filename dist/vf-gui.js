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
var Utils = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
exports.Utils = Utils;
/** UI舞台，最顶级的层 展示所有UI组件 */
var Stage_1 = __webpack_require__(/*! ./core/Stage */ "./src/core/Stage.ts");
exports.Stage = Stage_1.Stage;
/** UI基础显示对象，一般不会直接使用，只作为类型推断 */
var DisplayObject_1 = __webpack_require__(/*! ./core/DisplayObject */ "./src/core/DisplayObject.ts");
exports.DisplayObject = DisplayObject_1.DisplayObject;
/** 心跳，需要在初始化完成后，启动心跳更新 */
var Ticker_1 = __webpack_require__(/*! ./core/Ticker */ "./src/core/Ticker.ts");
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
var Container_1 = __webpack_require__(/*! ./display/Container */ "./src/display/Container.ts");
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
var ScrollingContainer_1 = __webpack_require__(/*! ./display/ScrollingContainer */ "./src/display/ScrollingContainer.ts");
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
var Image_1 = __webpack_require__(/*! ./display/Image */ "./src/display/Image.ts");
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
var SpriteAnimated_1 = __webpack_require__(/*! ./display/SpriteAnimated */ "./src/display/SpriteAnimated.ts");
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
var Label_1 = __webpack_require__(/*! ./display/Label */ "./src/display/Label.ts");
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
var TextInput_1 = __webpack_require__(/*! ./display/TextInput */ "./src/display/TextInput.ts");
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
var Slider_1 = __webpack_require__(/*! ./display/Slider */ "./src/display/Slider.ts");
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
var Button_1 = __webpack_require__(/*! ./display/Button */ "./src/display/Button.ts");
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
var CheckBox_1 = __webpack_require__(/*! ./display/CheckBox */ "./src/display/CheckBox.ts");
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
var Rect_1 = __webpack_require__(/*! ./display/Rect */ "./src/display/Rect.ts");
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
var Graphics_1 = __webpack_require__(/*! ./display/Graphics */ "./src/display/Graphics.ts");
exports.Graphics = Graphics_1.Graphics;
/**
 * 跟随划线（鼠标或触摸按下时）
 *
 * @example let graphics = new gui.FollowLine();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
var FollowLine_1 = __webpack_require__(/*! ./display/FollowLine */ "./src/display/FollowLine.ts");
exports.FollowLine = FollowLine_1.FollowLine;
/**
 * 音频播放组件
 *
 * @example let sound = new gui.Sound();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSound
 */
var Sound_1 = __webpack_require__(/*! ./display/Sound */ "./src/display/Sound.ts");
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
var Easing_1 = __webpack_require__(/*! ./tween/Easing */ "./src/tween/Easing.ts");
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
var Tween_1 = __webpack_require__(/*! ./tween/Tween */ "./src/tween/Tween.ts");
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
var Timeline_1 = __webpack_require__(/*! ./tween/Timeline */ "./src/tween/Timeline.ts");
exports.Timeline = Timeline_1.Timeline;
/**
 * 事件绑定类，非继承于inputbase的组件是没有任何交互事件，需单独绑定
 */
var Interaction = __webpack_require__(/*! ./interaction/Index */ "./src/interaction/Index.ts");
exports.Interaction = Interaction;
/**
 * 事件名
 */
var Event = __webpack_require__(/*! ./event/Index */ "./src/event/Index.ts");
exports.Event = Event;
/**
 * 枚举
 */
var Enum = __webpack_require__(/*! ./enum/Index */ "./src/enum/Index.ts");
exports.Enum = Enum;


/***/ }),

/***/ "./src/core/ContainerBase.ts":
/*!***********************************!*\
  !*** ./src/core/ContainerBase.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** 容器扩展类，后续便于做延时渲染 */
var ContainerBase = /** @class */ (function (_super) {
    __extends(ContainerBase, _super);
    function ContainerBase() {
        var _this = _super.call(this) || this;
        _this.isEmitRender = false;
        return _this;
    }
    ContainerBase.prototype.render = function (renderer) {
        if (this.isEmitRender) {
            this.emit("renderChange", renderer);
        }
        _super.prototype.render.call(this, renderer);
    };
    return ContainerBase;
}(PIXI.Container));
exports.ContainerBase = ContainerBase;


/***/ }),

/***/ "./src/core/DisplayLayoutAbstract.ts":
/*!*******************************************!*\
  !*** ./src/core/DisplayLayoutAbstract.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UIKeys = __webpack_require__(/*! ./DisplayLayoutKeys */ "./src/core/DisplayLayoutKeys.ts");
var DisplayLayoutValidator_1 = __webpack_require__(/*! ./DisplayLayoutValidator */ "./src/core/DisplayLayoutValidator.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var DisplayObjectAbstract_1 = __webpack_require__(/*! ./DisplayObjectAbstract */ "./src/core/DisplayObjectAbstract.ts");
exports.$tempLocalBounds = new PIXI.Rectangle();
/**
 * UI 布局的基础属性类
 */
var DisplayLayoutAbstract = /** @class */ (function (_super) {
    __extends(DisplayLayoutAbstract, _super);
    function DisplayLayoutAbstract() {
        var _this = _super.call(this) || this;
        _this.isContainer = false;
        /**
         * @private
         */
        _this.$values = {};
        _this.includeInLayout = true;
        _this.initializeUIValues();
        return _this;
    }
    /**
     * @private
     * 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
     */
    DisplayLayoutAbstract.prototype.initializeUIValues = function () {
        var _a;
        this.$values = (_a = {},
            _a[UIKeys.invalidatePropertiesFlag] = true,
            _a[UIKeys.invalidateSizeFlag] = true,
            _a[UIKeys.invalidateDisplayListFlag] = true,
            _a[UIKeys.left] = NaN,
            _a[UIKeys.right] = NaN,
            _a[UIKeys.top] = NaN,
            _a[UIKeys.bottom] = NaN,
            _a[UIKeys.horizontalCenter] = NaN,
            _a[UIKeys.verticalCenter] = NaN,
            _a[UIKeys.percentWidth] = NaN,
            _a[UIKeys.percentHeight] = NaN,
            _a[UIKeys.explicitWidth] = NaN,
            _a[UIKeys.explicitHeight] = NaN,
            _a[UIKeys.width] = 0,
            _a[UIKeys.height] = 0,
            _a[UIKeys.minWidth] = 0,
            _a[UIKeys.maxWidth] = 100000,
            _a[UIKeys.minHeight] = 0,
            _a[UIKeys.maxHeight] = 100000,
            _a[UIKeys.measuredWidth] = 0,
            _a[UIKeys.measuredHeight] = 0,
            _a[UIKeys.oldPreferWidth] = NaN,
            _a[UIKeys.oldPreferHeight] = NaN,
            _a[UIKeys.x] = 0,
            _a[UIKeys.y] = 0,
            _a[UIKeys.oldX] = 0,
            _a[UIKeys.oldY] = 0,
            _a[UIKeys.oldWidth] = 0,
            _a[UIKeys.oldHeight] = 0,
            _a[UIKeys.scaleX] = 1,
            _a[UIKeys.scaleY] = 1,
            _a[UIKeys.pivotX] = 0,
            _a[UIKeys.pivotY] = 0,
            _a[UIKeys.rotation] = 0,
            _a[UIKeys.skewX] = 0,
            _a[UIKeys.skewY] = 0,
            _a[UIKeys.zIndex] = NaN,
            _a);
    };
    /**
     * @private
     * 检查属性失效标记并应用
     */
    DisplayLayoutAbstract.prototype.checkInvalidateFlag = function () {
        var values = this.$values;
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
    };
    /**
     * @private
     * 验证组件的属性
     */
    DisplayLayoutAbstract.prototype.validateProperties = function () {
        var values = this.$values;
        if (values[UIKeys.invalidatePropertiesFlag]) {
            this.commitProperties();
            values[UIKeys.invalidatePropertiesFlag] = false;
        }
    };
    /**
     * @private
     * 验证组件的尺寸
     */
    DisplayLayoutAbstract.prototype.validateSize = function (recursive) {
        if (recursive) {
            var children = this.uiChildren;
            if (children) {
                var length_1 = children.length;
                for (var i = 0; i < length_1; i++) {
                    var child = children[i];
                    child.validateSize(true);
                }
            }
        }
        var values = this.$values;
        if (values[UIKeys.invalidateSizeFlag]) {
            var changed = this.measureSizes();
            if (changed) {
                this.invalidateDisplayList();
                this.invalidateParentLayout();
            }
            if (this.parent == undefined) {
                return;
            }
            values[UIKeys.invalidateSizeFlag] = false;
        }
    };
    /**
     * @private
     * 验证子项的位置和大小，并绘制其他可视内容
     */
    DisplayLayoutAbstract.prototype.validateDisplayList = function () {
        if (this.parent == undefined) {
            return;
        }
        var values = this.$values;
        if (values[UIKeys.invalidateDisplayListFlag]) {
            this.updateSize();
            this.updateDisplayList(values[UIKeys.width], values[UIKeys.height]);
            values[UIKeys.invalidateDisplayListFlag] = false;
        }
    };
    /**
     * @private
     * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
     */
    DisplayLayoutAbstract.prototype.commitProperties = function () {
    };
    /**
     * @private
     * 测量组件尺寸
     */
    DisplayLayoutAbstract.prototype.measure = function () {
        this.container.getLocalBounds(exports.$tempLocalBounds);
        this.setMeasuredSize(exports.$tempLocalBounds.width, exports.$tempLocalBounds.height);
    };
    /**
     * @private
     * 测量组件尺寸，返回尺寸是否发生变化
     */
    DisplayLayoutAbstract.prototype.measureSizes = function () {
        var changed = false;
        var values = this.$values;
        if (!values[UIKeys.invalidateSizeFlag])
            return changed;
        this.measure();
        var parentWidth = this.parent ? this.parent.width : 1;
        var parentHeight = this.parent ? this.parent.height : 1;
        var maxWidth = Utils_1.formatRelative(values[UIKeys.maxWidth], parentWidth);
        var maxHeight = Utils_1.formatRelative(values[UIKeys.maxHeight], parentHeight);
        var minWidth = Utils_1.formatRelative(values[UIKeys.minWidth], parentWidth);
        var minHeight = Utils_1.formatRelative(values[UIKeys.minHeight], parentHeight);
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
        var preferredW = this.getPreferredUWidth();
        var preferredH = this.getPreferredUHeight();
        if (preferredW !== values[UIKeys.oldPreferWidth] ||
            preferredH !== values[UIKeys.oldPreferHeight]) {
            values[UIKeys.oldPreferWidth] = preferredW;
            values[UIKeys.oldPreferHeight] = preferredH;
            changed = true;
        }
        return changed;
    };
    /**
     * @private
     * 设置测量结果。
     * @param width 测量宽度
     * @param height 测量高度
     */
    DisplayLayoutAbstract.prototype.setMeasuredSize = function (width, height) {
        var values = this.$values;
        values[UIKeys.measuredWidth] = Math.ceil(+width || 0);
        values[UIKeys.measuredHeight] = Math.ceil(+height || 0);
    };
    /**
     * @private
     *
     * @returns
     */
    DisplayLayoutAbstract.prototype.getPreferredUWidth = function () {
        var values = this.$values;
        return isNaN(values[UIKeys.explicitWidth]) ?
            values[UIKeys.measuredWidth] : values[UIKeys.explicitWidth];
    };
    /**
     * @private
     */
    DisplayLayoutAbstract.prototype.getPreferredUHeight = function () {
        var values = this.$values;
        return isNaN(values[UIKeys.explicitHeight]) ?
            values[UIKeys.measuredHeight] : values[UIKeys.explicitHeight];
    };
    /**
     * @private
     * 获取组件的首选尺寸,常用于父级的measure()方法中
     * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
     */
    DisplayLayoutAbstract.prototype.getPreferredBounds = function (bounds) {
        this.measureSizes();
        bounds.width = this.getPreferredUWidth();
        bounds.height = this.getPreferredUHeight();
        bounds.x = this.$values[UIKeys.x];
        bounds.y = this.$values[UIKeys.y];
        return bounds;
    };
    /**
    * @private
    * 标记提交过需要延迟应用的属性，以便在稍后屏幕更新期间调用该组件的 commitProperties() 方法。
    *
    * 例如，要更改文本颜色和大小，如果在更改颜色后立即进行更新，然后在设置大小后再更新大小，就有些浪费。
    * 同时更改两个属性后再使用新的大小和颜色一次性呈示文本，效率会更高。<p/>
    *
    * 通常，子类应覆盖 commitProperties() 方法，而不是覆盖此方法。
     */
    DisplayLayoutAbstract.prototype.invalidateProperties = function () {
        var values = this.$values;
        if (!values[UIKeys.invalidatePropertiesFlag]) {
            values[UIKeys.invalidatePropertiesFlag] = true;
            DisplayLayoutValidator_1.default.invalidateProperties(this);
        }
    };
    /**
    * @private
    * 标记提交过需要验证组件尺寸，以便在稍后屏幕更新期间调用该组件的 measure(),updatesize() 方法。
    */
    DisplayLayoutAbstract.prototype.invalidateSize = function () {
        var values = this.$values;
        if (!values[UIKeys.invalidateSizeFlag]) {
            values[UIKeys.invalidateSizeFlag] = true;
            DisplayLayoutValidator_1.default.invalidateSize(this);
        }
    };
    /**
    * @private
    * 标记需要验证显示列表，以便在稍后屏幕更新期间调用该组件的 updateDisplayList() 方法。
    */
    DisplayLayoutAbstract.prototype.invalidateDisplayList = function () {
        var values = this.$values;
        if (!values[UIKeys.invalidateDisplayListFlag]) {
            values[UIKeys.invalidateDisplayListFlag] = true;
            DisplayLayoutValidator_1.default.invalidateDisplayList(this);
        }
    };
    /**
     * @private
     * 标记父级容器的尺寸和显示列表为失效
     */
    DisplayLayoutAbstract.prototype.invalidateParentLayout = function () {
        var parent = this.parent;
        if (!parent) {
            return;
        }
        if (parent instanceof DisplayLayoutAbstract) {
            parent.invalidateSize();
            parent.invalidateDisplayList();
        }
    };
    /**
     * @private
     * 设置组件的布局位置
     */
    DisplayLayoutAbstract.prototype.setPosition = function (x, y) {
        var values = this.$values;
        values[UIKeys.x] = x;
        values[UIKeys.y] = y;
        this.updateTransform();
        this.emit(Index_1.ComponentEvent.MOVE, this);
    };
    /**
     * @private
     * 设置组件的宽高。此方法不同于直接设置width,height属性，
     * 不会影响显式标记尺寸属性
     */
    DisplayLayoutAbstract.prototype.setActualSize = function (w, h) {
        var change = false;
        var values = this.$values;
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
    };
    /**
     * @private
     * 更新最终的组件宽高
     */
    DisplayLayoutAbstract.prototype.updateSize = function () {
        var unscaledWidth = 0;
        var unscaledHeight = 0;
        var values = this.$values;
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
    };
    DisplayLayoutAbstract.prototype.updateTransform = function () {
        this.container.setTransform(this.x + this.pivotX, this.y + this.pivotY, this.scaleX, this.scaleY, this.rotation * (Math.PI / 180), this.skewX, this.skewY, this.pivotX, this.pivotY);
    };
    /**
     * 更新显示列表,子类重写，实现布局
     */
    DisplayLayoutAbstract.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
    };
    /**
     * @private
     * 立即应用组件及其子项的所有属性
     */
    DisplayLayoutAbstract.prototype.validateNow = function () {
        if (this.parent)
            DisplayLayoutValidator_1.default.validateClient(this);
    };
    /**
     * @private
    * 验证并更新此对象的属性和布局，如果需要的话重绘对象。
    *
    * 通常只有当脚本执行完毕后，才会处理要求进行大量计算的处理属性。<p/>
    *
    * 例如，对 width 属性的设置可能会延迟，因为此设置需要重新计算这些对象的子项或父项的宽度。
    * 如果脚本多次设置了 width 属性，则延迟处理可防止进行多次处理。此方法允许您手动覆盖此行为。
     */
    DisplayLayoutAbstract.prototype.validateSizeNow = function () {
        this.validateSize(true);
        this.updateSize();
    };
    Object.defineProperty(DisplayLayoutAbstract.prototype, "left", {
        /**
         * @private
         * 距父级容器离左边距离
         */
        get: function () {
            return this.$values[UIKeys.left];
        },
        set: function (value) {
            if (!value || typeof value == "number") {
                value = +value;
            }
            else {
                value = value.toString().trim();
            }
            var values = this.$values;
            if (values[UIKeys.left] === value)
                return;
            values[UIKeys.left] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "right", {
        /**
         * @private
         * 距父级容器右边距离
         */
        get: function () {
            return this.$values[UIKeys.right];
        },
        set: function (value) {
            if (!value || typeof value == "number") {
                value = +value;
            }
            else {
                value = value.toString().trim();
            }
            var values = this.$values;
            if (values[UIKeys.right] === value)
                return;
            values[UIKeys.right] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "top", {
        /**
         * @private
         * 距父级容器顶部距离
         */
        get: function () {
            return this.$values[UIKeys.top];
        },
        set: function (value) {
            if (!value || typeof value == "number") {
                value = +value;
            }
            else {
                value = value.toString().trim();
            }
            var values = this.$values;
            if (values[UIKeys.top] === value)
                return;
            values[UIKeys.top] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "bottom", {
        /**
         * @private
         * 距父级容器底部距离
         */
        get: function () {
            return this.$values[UIKeys.bottom];
        },
        set: function (value) {
            if (!value || typeof value == "number") {
                value = +value;
            }
            else {
                value = value.toString().trim();
            }
            var values = this.$values;
            if (values[UIKeys.bottom] == value)
                return;
            values[UIKeys.bottom] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "horizontalCenter", {
        /**
         * @private
         * 在父级容器中距水平中心位置的距离
         */
        get: function () {
            return this.$values[UIKeys.horizontalCenter];
        },
        set: function (value) {
            if (!value || typeof value == "number") {
                value = +value;
            }
            else {
                value = value.toString().trim();
            }
            var values = this.$values;
            if (values[UIKeys.horizontalCenter] === value)
                return;
            values[UIKeys.horizontalCenter] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "verticalCenter", {
        /**
         * @private
         * 在父级容器中距竖直中心位置的距离
         */
        get: function () {
            return this.$values[UIKeys.verticalCenter];
        },
        set: function (value) {
            if (!value || typeof value == "number") {
                value = +value;
            }
            else {
                value = value.toString().trim();
            }
            var values = this.$values;
            if (values[UIKeys.verticalCenter] === value)
                return;
            values[UIKeys.verticalCenter] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "percentWidth", {
        /**
         * @private
         * 相对父级容器宽度的百分比
         */
        get: function () {
            return this.$values[UIKeys.percentWidth];
        },
        set: function (value) {
            value = +value;
            var values = this.$values;
            if (values[UIKeys.percentWidth] === value)
                return;
            values[UIKeys.percentWidth] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "percentHeight", {
        /**
         * @private
         * 相对父级容器高度的百分比
         */
        get: function () {
            return this.$values[UIKeys.percentHeight];
        },
        set: function (value) {
            value = +value;
            var values = this.$values;
            if (values[UIKeys.percentHeight] === value)
                return;
            values[UIKeys.percentHeight] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "explicitWidth", {
        /**
         * @private
         * 外部显式指定的宽度
         */
        get: function () {
            return this.$values[UIKeys.explicitWidth];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "explicitHeight", {
        /**
         * @private
         * 外部显式指定的高度
         */
        get: function () {
            return this.$values[UIKeys.explicitHeight];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "_width", {
        get: function () {
            return this.$values[UIKeys.explicitWidth];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "_height", {
        get: function () {
            return this.$values[UIKeys.explicitHeight];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "width", {
        /**
         * @private
         * 组件宽度设置为undefined将使用组件的measure()方法自动计算尺寸
         */
        get: function () {
            //this.measureSizes();//不可以调用测量，有性能消耗，后期优化
            return this.getPreferredUWidth();
        },
        /**
         * @private
         *
         * @param value
         */
        set: function (value) {
            value = +value;
            var values = this.$values;
            if (value < 0 || values[UIKeys.width] === value && values[UIKeys.explicitWidth] === value)
                return;
            values[UIKeys.explicitWidth] = value;
            if (isNaN(value))
                this.invalidateSize();
            this.invalidateProperties();
            this.invalidateDisplayList();
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "height", {
        /**
         * @private
         * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         */
        get: function () {
            //this.validateSizeNow();
            //this.measureSizes();//不可以调用测量，有性能消耗，后期优化
            return this.getPreferredUHeight();
        },
        /**
         * @private
         *
         * @param value
         */
        set: function (value) {
            value = +value;
            var values = this.$values;
            if (value < 0 || values[UIKeys.height] === value && values[UIKeys.explicitHeight] === value)
                return;
            values[UIKeys.explicitHeight] = value;
            if (isNaN(value))
                this.invalidateSize();
            this.invalidateProperties();
            this.invalidateDisplayList();
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "minWidth", {
        /**
         * @private
         * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
         */
        get: function () {
            return this.$values[UIKeys.minWidth];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (value < 0 || values[UIKeys.minWidth] === value) {
                return;
            }
            values[UIKeys.minWidth] = value;
            this.invalidateSize();
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "maxWidth", {
        /**
         * @private
         * 组件的最大高度。同时影响测量和自动布局的尺寸。
         */
        get: function () {
            return this.$values[UIKeys.maxWidth];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (value < 0 || values[UIKeys.maxWidth] === value) {
                return;
            }
            values[UIKeys.maxWidth] = value;
            this.invalidateSize();
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "minHeight", {
        /**
         * @private
         * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
         */
        get: function () {
            return this.$values[UIKeys.minHeight];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (value < 0 || values[UIKeys.minHeight] === value) {
                return;
            }
            values[UIKeys.minHeight] = value;
            this.invalidateSize();
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "maxHeight", {
        /**
         * @private
         * 组件的最大高度,同时影响测量和自动布局的尺寸。
         */
        get: function () {
            return this.$values[UIKeys.maxHeight];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (value < 0 || values[UIKeys.maxHeight] === value) {
                return;
            }
            values[UIKeys.maxHeight] = value;
            this.invalidateSize();
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "scaleX", {
        get: function () {
            return this.$values[UIKeys.scaleX];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "scaleY", {
        get: function () {
            return this.$values[UIKeys.scaleY];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "x", {
        get: function () {
            return this.$values[UIKeys.x];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.x] === value) {
                return;
            }
            values[UIKeys.x] = value;
            if (this.container.x !== value) {
                this.container.x = value;
                this.invalidateParentLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "y", {
        get: function () {
            return this.$values[UIKeys.y];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.y] === value) {
                return;
            }
            values[UIKeys.y] = value;
            if (value !== this.container.y) {
                this.container.y = value;
                this.invalidateParentLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "skewX", {
        get: function () {
            return this.$values[UIKeys.skewX];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.skewX] === value) {
                return;
            }
            values[UIKeys.skewX] = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "skewY", {
        get: function () {
            return this.$values[UIKeys.skewY];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.skewY] === value) {
                return;
            }
            values[UIKeys.skewY] = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "pivotX", {
        get: function () {
            return this.$values[UIKeys.pivotX];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.pivotX] === value) {
                return;
            }
            values[UIKeys.pivotX] = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "pivotY", {
        get: function () {
            return this.$values[UIKeys.pivotY];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.pivotY] === value) {
                return;
            }
            values[UIKeys.pivotY] = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "rotation", {
        get: function () {
            return this.$values[UIKeys.rotation];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.rotation] === value) {
                return;
            }
            values[UIKeys.rotation] = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayLayoutAbstract.prototype, "zIndex", {
        /**
         *  =不可用= 设置索引层级，每次父级变化时，会排序 （未实现）
         */
        get: function () {
            return this.$values[UIKeys.zIndex];
        },
        set: function (value) {
            value = +value || 0;
            var values = this.$values;
            if (values[UIKeys.zIndex] === value) {
                return;
            }
            values[UIKeys.zIndex] = value;
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    return DisplayLayoutAbstract;
}(DisplayObjectAbstract_1.DisplayObjectAbstract));
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Ticker_1 = __webpack_require__(/*! ./Ticker */ "./src/core/Ticker.ts");
/**
 * @private
 * 列表项
 */
var DepthBin = /** @class */ (function () {
    function DepthBin() {
        this.map = {};
        this.items = [];
        this.length = 0;
    }
    DepthBin.prototype.insert = function (client) {
        var hashCode = client.uuid;
        if (this.map[hashCode]) {
            return;
        }
        this.map[hashCode] = true;
        this.length++;
        this.items.push(client);
    };
    DepthBin.prototype.pop = function () {
        var client = this.items.pop(); //使用pop会比shift有更高的性能，避免索引整体重置。
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
    };
    DepthBin.prototype.remove = function (client) {
        var index = this.items.indexOf(client);
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
    };
    return DepthBin;
}());
/**
 * @private
 * 显示列表嵌套深度排序队列
 */
var DepthQueue = /** @class */ (function () {
    function DepthQueue() {
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
     * 移除所有
     */
    DepthQueue.prototype.removeAll = function () {
        var depthBins = this.depthBins;
        for (var key in depthBins) {
            var item = depthBins[key];
            item.items = [];
            item.map = {};
            item.length = 0;
        }
        this.minDepth = 0;
        this.maxDepth = -1;
    };
    /**
     * 插入一个元素
     */
    DepthQueue.prototype.insert = function (client) {
        var depth = client.$nestLevel;
        if (this.maxDepth < this.minDepth) {
            this.minDepth = this.maxDepth = depth;
        }
        else {
            if (depth < this.minDepth)
                this.minDepth = depth;
            if (depth > this.maxDepth)
                this.maxDepth = depth;
        }
        var bin = this.depthBins[depth];
        if (!bin) {
            bin = this.depthBins[depth] = new DepthBin();
        }
        bin.insert(client);
    };
    /**
     * 从队列尾弹出深度最大的一个对象
     */
    DepthQueue.prototype.pop = function () {
        var client;
        var minDepth = this.minDepth;
        if (minDepth <= this.maxDepth) {
            var bin = this.depthBins[this.maxDepth];
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
    };
    /**
     * 从队列首弹出深度最小的一个对象
     */
    DepthQueue.prototype.shift = function () {
        var client;
        var maxDepth = this.maxDepth;
        if (this.minDepth <= maxDepth) {
            var bin = this.depthBins[this.minDepth];
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
    };
    /**
     * 移除大于等于指定组件层级的元素中最大的元素
     */
    DepthQueue.prototype.removeLargestChild = function (client) {
        var hashCode = client.uuid;
        var nestLevel = client.$nestLevel;
        var max = this.maxDepth;
        var min = nestLevel;
        while (min <= max) {
            var bin = this.depthBins[max];
            if (bin && bin.length > 0) {
                if (max === nestLevel) {
                    if (bin.map[hashCode]) {
                        bin.remove(client);
                        return client;
                    }
                }
                else if (client["isContainer"]) {
                    var items = bin.items;
                    var length_1 = bin.length;
                    for (var i = 0; i < length_1; i++) {
                        var value = items[i];
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
    };
    /**
     * 移除大于等于指定组件层级的元素中最小的元素
     */
    DepthQueue.prototype.removeSmallestChild = function (client) {
        var nestLevel = client.$nestLevel;
        var min = nestLevel;
        var max = this.maxDepth;
        var hashCode = client.uuid;
        while (min <= max) {
            var bin = this.depthBins[min];
            if (bin && bin.length > 0) {
                if (min === nestLevel) {
                    if (bin.map[hashCode]) {
                        bin.remove(client);
                        return client;
                    }
                }
                else if (client["isContainer"]) {
                    var items = bin.items;
                    var length_2 = bin.length;
                    for (var i = 0; i < length_2; i++) {
                        var value = items[i];
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
    };
    /**
     * 队列是否为空
     */
    DepthQueue.prototype.isEmpty = function () {
        return this.minDepth > this.maxDepth;
    };
    return DepthQueue;
}());
/**
 * @private
 * 失效验证管理器
 */
var UIValidator = /** @class */ (function (_super) {
    __extends(UIValidator, _super);
    /**
     * @private
     * 创建一个Validator对象
     */
    function UIValidator() {
        var _this = _super.call(this) || this;
        /**
         * @private
         */
        _this.targetLevel = Infinity;
        /**
         * @private
         */
        _this.invalidatePropertiesFlag = false;
        /**
         * @private
         */
        _this.invalidateClientPropertiesFlag = false;
        /**
         * @private
         */
        _this.invalidatePropertiesQueue = new DepthQueue();
        /**
         * @private
         */
        _this.invalidateSizeFlag = false;
        /**
         * @private
         */
        _this.invalidateClientSizeFlag = false;
        /**
         * @private
         */
        _this.invalidateSizeQueue = new DepthQueue();
        /**
         * @private
         */
        _this.invalidateDisplayListFlag = false;
        /**
         * @private
         */
        _this.invalidateDisplayListQueue = new DepthQueue();
        /**
         * @private
         * 是否已经添加了事件监听
         */
        _this.listenersAttached = false;
        return _this;
    }
    /**
     * @private
     * 标记组件属性失效
     */
    UIValidator.prototype.invalidateProperties = function (target) {
        if (!this.invalidatePropertiesFlag) {
            this.invalidatePropertiesFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        if (this.targetLevel <= target.$nestLevel)
            this.invalidateClientPropertiesFlag = true;
        this.invalidatePropertiesQueue.insert(target);
    };
    /**
     * @private
     * 验证失效的属性
     */
    UIValidator.prototype.validateProperties = function () {
        var queue = this.invalidatePropertiesQueue;
        var target = queue.shift();
        while (target) {
            if (target.parent) {
                target.validateProperties();
            }
            target = queue.shift();
        }
        if (queue.isEmpty())
            this.invalidatePropertiesFlag = false;
    };
    /**
     * @private
     * 标记需要重新测量尺寸
     */
    UIValidator.prototype.invalidateSize = function (target) {
        if (!this.invalidateSizeFlag) {
            this.invalidateSizeFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        if (this.targetLevel <= target.$nestLevel)
            this.invalidateClientSizeFlag = true;
        this.invalidateSizeQueue.insert(target);
    };
    /**
     * @private
     * 测量尺寸
     */
    UIValidator.prototype.validateSize = function () {
        var queue = this.invalidateSizeQueue;
        var target = queue.pop();
        while (target) {
            if (target.parent) {
                target.validateSize();
            }
            target = queue.pop();
        }
        if (queue.isEmpty())
            this.invalidateSizeFlag = false;
    };
    /**
     * @private
     * 标记需要重新布局
     */
    UIValidator.prototype.invalidateDisplayList = function (client) {
        if (!this.invalidateDisplayListFlag) {
            this.invalidateDisplayListFlag = true;
            if (!this.listenersAttached)
                this.attachListeners();
        }
        this.invalidateDisplayListQueue.insert(client);
    };
    /**
     * @private
     * 重新布局
     */
    UIValidator.prototype.validateDisplayList = function () {
        var queue = this.invalidateDisplayListQueue;
        var client = queue.shift();
        while (client) {
            if (client.parent) {
                client.validateDisplayList();
            }
            client = queue.shift();
        }
        if (queue.isEmpty())
            this.invalidateDisplayListFlag = false;
    };
    /**
     * @private
     * 添加事件监听
     */
    UIValidator.prototype.attachListeners = function () {
        Ticker_1.default.addUpdateEvent(this.doPhasedInstantiationCallBack, this);
        this.listenersAttached = true;
    };
    /**
     * @private
     * 执行属性应用
     */
    UIValidator.prototype.doPhasedInstantiationCallBack = function () {
        Ticker_1.default.removeUpdateEvent(this.doPhasedInstantiationCallBack, this);
        this.doPhasedInstantiation();
    };
    /**
     * @private
     */
    UIValidator.prototype.doPhasedInstantiation = function () {
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
    };
    /**
     * @private
     * 使大于等于指定组件层级的元素立即应用属性
     * @param target 要立即应用属性的组件
     */
    UIValidator.prototype.validateClient = function (target) {
        var obj;
        var done = false;
        var oldTargetLevel = this.targetLevel;
        if (this.targetLevel === Infinity)
            this.targetLevel = target.$nestLevel;
        var propertiesQueue = this.invalidatePropertiesQueue;
        var sizeQueue = this.invalidateSizeQueue;
        var displayListQueue = this.invalidateDisplayListQueue;
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
    };
    UIValidator.prototype.removeDepthQueueAll = function () {
        this.invalidatePropertiesQueue.removeAll();
        this.invalidateDisplayListQueue.removeAll();
        this.invalidateSizeQueue.removeAll();
    };
    return UIValidator;
}(PIXI.utils.EventEmitter));
var validatorShared = new UIValidator();
exports.default = validatorShared;


/***/ }),

/***/ "./src/core/DisplayObject.ts":
/*!***********************************!*\
  !*** ./src/core/DisplayObject.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var DisplayLayoutAbstract_1 = __webpack_require__(/*! ./DisplayLayoutAbstract */ "./src/core/DisplayLayoutAbstract.ts");
var CSSStyle_1 = __webpack_require__(/*! ../layout/CSSStyle */ "./src/layout/CSSStyle.ts");
var CSSLayout_1 = __webpack_require__(/*! ../layout/CSSLayout */ "./src/layout/CSSLayout.ts");
var UIBaseDrag_1 = __webpack_require__(/*! ./plugs/UIBaseDrag */ "./src/core/plugs/UIBaseDrag.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var UIClick_1 = __webpack_require__(/*! ./plugs/UIClick */ "./src/core/plugs/UIClick.ts");
/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @since 1.0.0
 */
var DisplayObject = /** @class */ (function (_super) {
    __extends(DisplayObject, _super);
    /**
     * 构造函数
     */
    function DisplayObject() {
        var _this = _super.call(this) || this;
        /**
         * 插件列表
         */
        _this.plugs = new Map();
        /**
         * 拖动限制门槛,小于设置的数不执行拖动,防止点击与滚动
         */
        _this.dragThreshold = 0;
        /**
        *  在不同分辨率下保持像素稳定
        * @default
        */
        _this.pixelPerfect = true;
        /**
         * 动态属性，避免其他类注入
         */
        _this.attach = {};
        _this.container.name = _this.constructor.name;
        return _this;
    }
    Object.defineProperty(DisplayObject.prototype, "dragOption", {
        /**
         * 设置拖动
         */
        get: function () {
            if (this.plugs.has(UIBaseDrag_1.UIBaseDrag.key)) {
                return this.plugs.get(UIBaseDrag_1.UIBaseDrag.key);
            }
            return new UIBaseDrag_1.UIBaseDrag(this);
        },
        set: function (value) {
            var dragOption = this.dragOption;
            Utils_1.deepCopy(value, dragOption);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "isClick", {
        /** 是否开启鼠标或触摸点击，开启后，接收TouchMouseEvent */
        get: function () {
            var click = this.plugs.get(UIClick_1.UIClick.key);
            if (click) {
                return true;
            }
            return false;
        },
        set: function (value) {
            var click = this.plugs.get(UIClick_1.UIClick.key);
            if (value) {
                if (!click) {
                    new UIClick_1.UIClick(this);
                }
            }
            else {
                if (click) {
                    click.release();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "groupName", {
        get: function () {
            return this._groupName;
        },
        set: function (value) {
            if (value === undefined) {
                Index_1.GroupController.unRegistrerGroup(this);
            }
            if (this._groupName == value) {
                return;
            }
            this._groupName = value;
            Index_1.GroupController.registrerGroup(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "alpha", {
        /**
         * 透明度
         */
        get: function () {
            return this.container.alpha;
        },
        set: function (value) {
            this.container.alpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "tint", {
        get: function () {
            return this._tint;
        },
        set: function (value) {
            if (value === this._blendMode) {
                return;
            }
            this._tint = value;
            this.container.children.forEach(function (childrenItem) {
                if (childrenItem["tint"]) {
                    childrenItem["tint"] = value;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "blendMode", {
        get: function () {
            return this._blendMode;
        },
        set: function (value) {
            if (value === this._blendMode) {
                return;
            }
            this._blendMode = value;
            this.container.children.forEach(function (childrenItem) {
                if (childrenItem instanceof PIXI.Sprite) {
                    childrenItem.blendMode = value || PIXI.BLEND_MODES.NORMAL;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "filterBlur", {
        get: function () {
            return this.blurFilter ? this.blurFilter.blur : 0;
        },
        /**
         * 设置Blur XY的模糊强度
         *
         * 参数类型为number时，设置 blurX = blurY = value
         *
         */
        set: function (value) {
            var container = this.container;
            if (this.blurFilter === undefined) {
                this.blurFilter = new PIXI.filters.BlurFilter(8, 1, 1);
                container.filters = [this.blurFilter];
            }
            this.blurFilter.blur = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObject.prototype, "style", {
        /**
         * 获取样式
         */
        get: function () {
            if (this._style == undefined) {
                this._style = new CSSStyle_1.CSSStyle(this);
            }
            return this._style;
        },
        set: function (value) {
            var style = this.style;
            Utils_1.deepCopy(value, style);
            this.invalidateParentLayout();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 更新显示列表,子类重写，实现布局
     */
    DisplayObject.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        if (this._style && this._style.display !== "none") {
            //console.log("displayStyle",unscaledWidth,unscaledHeight,this.left,this.right,this.x,this.y);
            CSSLayout_1.updateDisplayLayout(this, unscaledWidth, unscaledHeight);
        }
        else {
            //console.log("display",this.x + this.pivotX,this.y + this.pivotY,this.scaleX,this.scaleY,this.rotation*(Math.PI/180),this.skewX,this.skewY,this.pivotX,this.pivotY);
            this.updateTransform();
        }
    };
    DisplayObject.prototype.load = function () {
        this.initializeUIValues();
        _super.prototype.load.call(this);
    };
    DisplayObject.prototype.release = function () {
        var _a = this, container = _a.container, $mask = _a.$mask, $background = _a.$background;
        if (this._style) {
            this._style.release();
            this._style = undefined;
        }
        if ($mask) {
            container.mask = null;
            if ($mask instanceof DisplayObject) {
                $mask.release();
            }
            else {
                $mask.parent && $mask.parent.removeChild($mask).destroy();
            }
            this.$mask = undefined;
        }
        if ($background && $background.parent) {
            $background.parent.removeChild($background).destroy();
            this.$background = undefined;
        }
        this.plugs.forEach(function (value) {
            value.release();
        });
        Index_1.GroupController.unRegistrerGroup(this);
        _super.prototype.release.call(this);
    };
    DisplayObject.prototype.releaseAll = function () {
        this.offAll();
        this.release();
        while (this.uiChildren.length > 0) {
            if (this.uiChildren[0].uiChildren.length > 0) {
                this.uiChildren[0].uiChildren[0].releaseAll();
            }
            this.uiChildren[0].releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
    };
    return DisplayObject;
}(DisplayLayoutAbstract_1.DisplayLayoutAbstract));
exports.DisplayObject = DisplayObject;


/***/ }),

/***/ "./src/core/DisplayObjectAbstract.ts":
/*!*******************************************!*\
  !*** ./src/core/DisplayObjectAbstract.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerBase_1 = __webpack_require__(/*! ./ContainerBase */ "./src/core/ContainerBase.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/**
 *
 */
var DisplayObjectAbstract = /** @class */ (function (_super) {
    __extends(DisplayObjectAbstract, _super);
    function DisplayObjectAbstract() {
        var _this = _super.call(this) || this;
        /**
         * 自定义组价名
         */
        _this.name = "";
        /**
         * @private
         * 这个对象在显示列表中的嵌套深度，舞台为1，它的子项为2，子项的子项为3，以此类推。当对象不在显示列表中时此属性值为0.
         */
        _this.$nestLevel = 0;
        /**
         * 是否初始化
         * @default
         */
        _this.initialized = false;
        /**
         * 节点列表
         */
        _this.uiChildren = [];
        _this._interactive = true;
        _this._interactiveChildren = true;
        _this._enabled = true;
        /**
         * 是否可见
         */
        _this._visible = true;
        _this.uuid = Utils_1.uid();
        _this.container = new ContainerBase_1.ContainerBase();
        _this.container.on("added", _this.$onAddStage, _this);
        _this.container.on("removed", _this.$onRemoveStage, _this);
        return _this;
    }
    /** 添加显示对象，需集成Core */
    DisplayObjectAbstract.prototype.addChild = function (item) {
        if (this.container.children.length !== this.uiChildren.length) {
            return this.addChildAt(item, this.container.children.length);
        }
        else {
            return this.addChildAt(item, this.uiChildren.length);
        }
    };
    DisplayObjectAbstract.prototype.addChildAt = function (item, index) {
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
    };
    DisplayObjectAbstract.prototype.getChildAt = function (index) {
        return this.uiChildren[index] || undefined;
    };
    /**
     * 移除已添加的UI组件
     * @param UIObject 要移除的UI组件
     */
    DisplayObjectAbstract.prototype.removeChild = function (item) {
        var index = this.uiChildren.indexOf(item);
        return this.removeChildAt(index);
    };
    DisplayObjectAbstract.prototype.removeChildAt = function (index) {
        index = Math.max(0, index);
        index = Math.min(this.uiChildren.length, index);
        var item = this.uiChildren[index];
        if (item) {
            item.container.parent.removeChild(item.container);
            this.uiChildren.splice(index, 1);
            item.parent = undefined;
        }
        return item;
    };
    DisplayObjectAbstract.prototype.removeChildren = function (beginIndex, endIndex) {
        var start = beginIndex ? beginIndex : 0;
        var end = endIndex ? endIndex : this.uiChildren.length;
        for (var i = start; i < end; i++) {
            this.removeChild(this.uiChildren[i]);
        }
    };
    Object.defineProperty(DisplayObjectAbstract.prototype, "renderable", {
        get: function () {
            return this.container.renderable;
        },
        /**
         * 是否绘制显示对象，如果false不进行绘制，不过仍然会进行相关的更新计算。
         * 只影响父级的递归调用。
         */
        set: function (value) {
            this.container.renderable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObjectAbstract.prototype, "cacheAsBitmap", {
        get: function () {
            return this.container.cacheAsBitmap;
        },
        /**
         * 缓存当前的显示对象，如果移除缓存，设置false即可
         * 在设置这个值时，请确保你的纹理位图已经加载
         */
        set: function (value) {
            this.container.cacheAsBitmap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObjectAbstract.prototype, "interactive", {
        get: function () {
            return this.container.interactive;
        },
        /**
         * 对象是否可以接收事件
         */
        set: function (value) {
            this._interactive = value;
            if (!this._enabled) {
                return;
            }
            this.container.interactive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObjectAbstract.prototype, "interactiveChildren", {
        get: function () {
            return this.container.interactiveChildren;
        },
        /**
         * 子对象是否可以接收事件，设置false后，会绕过HitTest方法的递归
         */
        set: function (value) {
            this._interactiveChildren = value;
            if (!this._enabled) {
                return;
            }
            this.container.interactiveChildren = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObjectAbstract.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (this._enabled === value) {
                return;
            }
            this._enabled = value;
            this.container.interactive = value;
            this.container.interactiveChildren = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisplayObjectAbstract.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (this._visible === value) {
                return;
            }
            this._visible = value;
            this.container.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    /** 清除全部事件 */
    DisplayObjectAbstract.prototype.offAll = function (event) {
        return this.removeAllListeners(event);
    };
    Object.defineProperty(DisplayObjectAbstract.prototype, "stage", {
        get: function () {
            if (this.$stage == undefined) {
                this.$stage = Utils_1.getStage(this);
            }
            return this.$stage;
        },
        enumerable: true,
        configurable: true
    });
    DisplayObjectAbstract.prototype.checkInvalidateFlag = function () {
    };
    DisplayObjectAbstract.prototype.load = function () {
        this.$onLoad();
    };
    DisplayObjectAbstract.prototype.release = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.$onRelease();
        this.$stage = undefined;
    };
    DisplayObjectAbstract.prototype.$onInit = function () {
        this.emit(Index_1.ComponentEvent.CREATION_COMPLETE, this);
    };
    DisplayObjectAbstract.prototype.$onLoad = function () { };
    DisplayObjectAbstract.prototype.$onRelease = function () { };
    DisplayObjectAbstract.prototype.$onAddStage = function () {
        this.checkInvalidateFlag();
        this.emit(Index_1.ComponentEvent.ADDED, this);
    };
    DisplayObjectAbstract.prototype.$onRemoveStage = function () {
        this.checkInvalidateFlag();
        this.parent = undefined;
        this.emit(Index_1.ComponentEvent.REMOVEED, this);
    };
    return DisplayObjectAbstract;
}(PIXI.utils.EventEmitter));
exports.DisplayObjectAbstract = DisplayObjectAbstract;


/***/ }),

/***/ "./src/core/Stage.ts":
/*!***************************!*\
  !*** ./src/core/Stage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Ticker_1 = __webpack_require__(/*! ./Ticker */ "./src/core/Ticker.ts");
var DisplayLayoutAbstract_1 = __webpack_require__(/*! ./DisplayLayoutAbstract */ "./src/core/DisplayLayoutAbstract.ts");
var DisplayLayoutValidator_1 = __webpack_require__(/*! ./DisplayLayoutValidator */ "./src/core/DisplayLayoutValidator.ts");
/**
 * UI的舞台对象，展示所有UI组件
 *
 * @class
 * @param width {Number} 舞台宽度
 * @param height {Number} 舞台高度
 */
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage(width, height, app) {
        var _this = _super.call(this) || this;
        _this._stageWidth = 0; //调整缩放后的值
        _this._stageHeight = 0; //调整缩放后的值
        _this.width = width;
        _this.height = height;
        _this._stageWidth = width;
        _this._stageWidth = height;
        _this.setActualSize(width, height);
        _this.container.name = "Stage";
        _this.container.hitArea = new PIXI.Rectangle(0, 0, width, height);
        _this.container.interactive = true;
        _this.container.interactiveChildren = true;
        _this.initialized = true;
        _this.$nestLevel = 1;
        _this.app = app;
        return _this;
    }
    Object.defineProperty(Stage.prototype, "stageWidth", {
        get: function () {
            return this._stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage.prototype, "stageHeight", {
        get: function () {
            return this._stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage.prototype, "scaleX", {
        get: function () {
            return this.container.scale.x;
        },
        set: function (value) {
            this.container.scale.x = value;
            this._stageWidth = value * this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage.prototype, "scaleY", {
        get: function () {
            return this.container.scale.y;
        },
        set: function (value) {
            this.container.scale.y = value;
            this._stageHeight = value * this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage.prototype, "Scale", {
        set: function (value) {
            this.container.scale.copyFrom(value);
            this._stageWidth = value.x * this.width;
            this._stageHeight = value.y * this.height;
        },
        enumerable: true,
        configurable: true
    });
    Stage.prototype.release = function () {
        _super.prototype.release.call(this);
    };
    Stage.prototype.releaseAll = function () {
        for (var i = 0; i < this.uiChildren.length; i++) {
            var ui = this.uiChildren[i];
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
        Ticker_1.shared.removeAllListeners();
        DisplayLayoutValidator_1.default.removeAllListeners();
        DisplayLayoutValidator_1.default.removeDepthQueueAll();
    };
    Stage.prototype.resize = function () {
        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
        //this.updateChildren();
    };
    return Stage;
}(DisplayLayoutAbstract_1.DisplayLayoutAbstract));
exports.Stage = Stage;


/***/ }),

/***/ "./src/core/Ticker.ts":
/*!****************************!*\
  !*** ./src/core/Ticker.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tween = __webpack_require__(/*! ../tween/private/index */ "./src/tween/private/index.ts");
/**
 * 心跳，需要UI库初始化后，进行实例调用注册
 */
var Ticker = /** @class */ (function (_super) {
    __extends(Ticker, _super);
    /**
     * 心跳构造函数
     * @param autoStart 是否自动开启心跳，默认false
     */
    function Ticker(autoStart) {
        var _this = _super.call(this) || this;
        _this._disabled = true;
        if (autoStart) {
            _this.disabled = false;
        }
        return _this;
    }
    Object.defineProperty(Ticker.prototype, "disabled", {
        /** 是否关闭心跳.默认false不关闭,关闭后，缓动等组件也将关闭 */
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (value == this._disabled) {
                return;
            }
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Ticker.prototype.update = function (deltaTime, lastTime, elapsedMS) {
        if (this._disabled) {
            return;
        }
        tween.update(elapsedMS);
        this.emit("update", deltaTime, lastTime, elapsedMS);
    };
    /**
     * 增加更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    Ticker.prototype.addUpdateEvent = function (fn, context) {
        return this.on("update", fn, context);
    };
    /**
     * 移除更新监听器
     * @param fn 被调用的函数
     * @param context 当前域
     */
    Ticker.prototype.removeUpdateEvent = function (fn, context) {
        return this.removeListener("update", fn, context);
    };
    return Ticker;
}(PIXI.utils.EventEmitter));
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
var Index_1 = __webpack_require__(/*! ../../interaction/Index */ "./src/interaction/Index.ts");
var DisplayObjectAbstract_1 = __webpack_require__(/*! ../DisplayObjectAbstract */ "./src/core/DisplayObjectAbstract.ts");
var Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.ts");
/**
 *  组件的拖拽操作
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestDrop
 */
var UIBaseDrag = /** @class */ (function () {
    /**
     * 构造函数
     */
    function UIBaseDrag(target) {
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
    Object.defineProperty(UIBaseDrag.prototype, "dragDropEventId", {
        /**
         * 当前拖动组件的事件ID，用于处理DragDropController中多组件的选定
         */
        get: function () {
            if (this.target) {
                return this.target.attach.dragDropEventId;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBaseDrag.prototype, "draggable", {
        /**
         * 是否开启拖动
         * @default false
         */
        set: function (value) {
            if (value)
                this.initDraggable();
            else
                this.clearDraggable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBaseDrag.prototype, "dragRestrictAxis", {
        get: function () {
            return this._dragRestrictAxis;
        },
        set: function (value) {
            this._dragRestrictAxis = value;
            if (this.drag) {
                this.drag.dragRestrictAxis = this._dragRestrictAxis;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBaseDrag.prototype, "dragGroup", {
        /**
         * 拖动分组
         */
        get: function () {
            if (this.target) {
                return this.target.attach.dragGroup;
            }
            return "";
        },
        set: function (value) {
            if (this.target)
                this.target.attach.dragGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBaseDrag.prototype, "dragContainer", {
        get: function () {
            return this._dragContainer;
        },
        set: function (value) {
            this._dragContainer = Utils_1.getDisplayObject(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBaseDrag.prototype, "droppable", {
        /**
         * 是否开启拖动掉落接收
         */
        set: function (value) {
            if (value)
                this.initDroppable();
            else
                this.clearDroppable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBaseDrag.prototype, "droppableReparent", {
        get: function () {
            return this._droppableReparent;
        },
        set: function (value) {
            this._droppableReparent = Utils_1.getDisplayObject(value);
            ;
        },
        enumerable: true,
        configurable: true
    });
    UIBaseDrag.prototype.clearDraggable = function () {
        if (this.dragInitialized) {
            this.dragInitialized = false;
            this.drag && this.drag.stopEvent();
        }
    };
    UIBaseDrag.prototype.initDraggable = function () {
        var _this = this;
        if (this.target == undefined) {
            return;
        }
        if (!this.dragInitialized) {
            this.dragInitialized = true;
            var containerStart_1 = new PIXI.Point();
            var stageOffset_1 = new PIXI.Point();
            this._containerStart = containerStart_1;
            this._dragPosition.set(0, 0);
            this.drag = new Index_1.DragEvent(this.target);
            this.drag.dragRestrictAxis = this._dragRestrictAxis;
            this.drag.onDragStart = function (e) {
                if (_this.target == undefined) {
                    return;
                }
                var target = _this.target;
                _this.$targetParent = target.parent;
                if (_this._dragContainer == undefined && !_this.dragBoundary) {
                    _this._dragContainer = _this.target.stage;
                }
                var added = Index_1.DragDropController.add(target, e);
                if (!_this.dragging && added) {
                    target.emit(Index_1.ComponentEvent.DRAG_START_BEFORE, target, e);
                    _this.dragging = true;
                    target.interactive = false;
                    containerStart_1.copyFrom(target.container.position);
                    if (_this._dragContainer) {
                        var c = void 0;
                        if (_this._dragContainer instanceof DisplayObjectAbstract_1.DisplayObjectAbstract) {
                            c = _this._dragContainer;
                        }
                        if (c && target.parent) {
                            //_this.container._recursivePostUpdateTransform();
                            stageOffset_1.set(c.container.worldTransform.tx - target.parent.container.worldTransform.tx, c.container.worldTransform.ty - target.parent.container.worldTransform.ty);
                            c.addChild(target);
                            stageOffset_1.set(stageOffset_1.x / target.parent.scaleX, stageOffset_1.y / target.parent.scaleY);
                        }
                    }
                    else {
                        stageOffset_1.set(0);
                    }
                    target.emit(Index_1.ComponentEvent.DRAG_START, target, e);
                }
            };
            this.drag.onDragMove = function (e, offset) {
                if (_this.target == undefined) {
                    return;
                }
                var target = _this.target;
                if (_this.dragging && target.stage) {
                    var x = containerStart_1.x + (offset.x / target.stage.scaleX) - stageOffset_1.x;
                    var y = containerStart_1.y + (offset.y / target.stage.scaleY) - stageOffset_1.y;
                    if (_this.dragRestrictAxis == "x") {
                        _this._dragPosition.set(x, containerStart_1.y - stageOffset_1.y);
                    }
                    else if (_this.dragRestrictAxis == "y") {
                        _this._dragPosition.set(containerStart_1.x - stageOffset_1.x, y);
                    }
                    else {
                        _this._dragPosition.set(x, y);
                    }
                    if (_this.dragBoundary && target.parent) {
                        _this._dragPosition.x = Math.max(0, _this._dragPosition.x);
                        _this._dragPosition.x = Math.min(_this._dragPosition.x, target.parent.width - target.width);
                        _this._dragPosition.y = Math.max(0, _this._dragPosition.y);
                        _this._dragPosition.y = Math.min(_this._dragPosition.y, target.parent.height - target.height);
                    }
                    target.setPosition(_this._dragPosition.x, _this._dragPosition.y);
                    target.emit(Index_1.ComponentEvent.DRAG_MOVE, target, e);
                }
            };
            this.drag.onDragEnd = function (e) {
                if (_this.dragging) {
                    _this.dragging = false;
                    //如果没有可被放置掉落的容器，0秒后返回原容器
                    setTimeout(function () {
                        if (_this.target == undefined) {
                            return;
                        }
                        //dragBounces
                        var target = _this.target;
                        var parent = _this.$targetParent;
                        target.interactive = true;
                        var item = Index_1.DragDropController.getItem(target);
                        target.emit(Index_1.ComponentEvent.DRAG_END_BEFORE, target, e);
                        if (item && parent) {
                            if (target.parent !== parent && target.parent) {
                                parent.container.toLocal(target.container.position, target.container.parent, _this._dragPosition);
                                parent.addChild(target);
                                target.x = _this._dragPosition.x;
                                target.y = _this._dragPosition.y;
                            }
                            if (_this.dragBounces && _this._containerStart) {
                                target.x = _this._containerStart.x;
                                target.y = _this._containerStart.y;
                            }
                        }
                        target.emit(Index_1.ComponentEvent.DRAG_END, target, e);
                    }, 0);
                }
            };
        }
    };
    UIBaseDrag.prototype.clearDroppable = function () {
        if (this.target == undefined) {
            return;
        }
        var target = this.target;
        if (this.dropInitialized) {
            this.dropInitialized = false;
            target.container.off("mouseup" /* mouseup */, this.onDrop, this);
            target.container.off("touchend" /* touchend */, this.onDrop, this);
        }
    };
    UIBaseDrag.prototype.initDroppable = function () {
        if (this.target == undefined) {
            return;
        }
        var target = this.target;
        if (!this.dropInitialized) {
            this.dropInitialized = true;
            var container = target.container;
            //self = this;
            container.interactive = true;
            container.on("mouseup" /* mouseup */, this.onDrop, this);
            container.on("touchend" /* touchend */, this.onDrop, this);
        }
    };
    UIBaseDrag.prototype.onDrop = function (e) {
        if (this.target == undefined) {
            return;
        }
        var target = this.target;
        var item = Index_1.DragDropController.getEventItem(e, this.dropGroup);
        if (item && item.dragOption.dragging) {
            item.dragOption.dragging = false;
            item.interactive = true;
            var parent_1 = item.dragOption.droppableReparent !== undefined ? item.dragOption.droppableReparent : target;
            if (parent_1) {
                parent_1.container.toLocal(item.container.position, item.container.parent, this._dragPosition);
                item.x = this._dragPosition.x;
                item.y = this._dragPosition.y;
                if (parent_1 != item.parent) {
                    parent_1.addChild(item);
                    parent_1.emit(Index_1.ComponentEvent.DROP_TARGET, parent_1, item, e);
                }
                item.dragOption.$targetParent = parent_1;
            }
            item.emit(Index_1.ComponentEvent.DRAG_TARGET, item, e);
        }
    };
    UIBaseDrag.prototype.load = function () {
    };
    UIBaseDrag.prototype.release = function () {
        this.clearDraggable();
        this.clearDroppable();
        if (this.target) {
            this.target.plugs.delete(UIBaseDrag.key);
            this.target = undefined;
            this.$targetParent = undefined;
            this.dragContainer = undefined;
        }
    };
    UIBaseDrag.key = "UIBaseDrag";
    return UIBaseDrag;
}());
exports.UIBaseDrag = UIBaseDrag;


/***/ }),

/***/ "./src/core/plugs/UIClick.ts":
/*!***********************************!*\
  !*** ./src/core/plugs/UIClick.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Index_1 = __webpack_require__(/*! ../../interaction/Index */ "./src/interaction/Index.ts");
/**
 *  组件的单击操作
 *
 */
var UIClick = /** @class */ (function () {
    /**
     * 构造函数
     */
    function UIClick(target) {
        this._target = target;
        this._target.plugs.set(UIClick.key, this);
        this._clickEvent = new Index_1.ClickEvent(target, true);
        ;
    }
    UIClick.prototype.load = function () {
    };
    UIClick.prototype.release = function () {
        this._clickEvent.remove();
        if (this._target) {
            this._target.plugs.delete(UIClick.key);
            this._target = undefined;
        }
    };
    UIClick.key = "UIClick";
    return UIClick;
}());
exports.UIClick = UIClick;


/***/ }),

/***/ "./src/display/Button.ts":
/*!*******************************!*\
  !*** ./src/display/Button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Label_1 = __webpack_require__(/*! ./Label */ "./src/display/Label.ts");
var Image_1 = __webpack_require__(/*! ./Image */ "./src/display/Image.ts");
var InputBase_1 = __webpack_require__(/*! ./private/InputBase */ "./src/display/private/InputBase.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 按钮
 *
 * @example let button = new gui.Button();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestButton
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this._selectedStr = "";
        _this._oldState = "";
        /** 状态展示 */
        _this.img = new Image_1.Image();
        /** 文字展示 */
        _this.label = new Label_1.Label();
        _this._text = "";
        _this.container.buttonMode = true;
        _this.img.fillMode = "scale";
        _this.img.scale9Grid = [3, 3, 3, 3];
        _this.addChild(_this.img);
        _this.label.sprite.style.fontSize = 18;
        _this.addChild(_this.label);
        _this.on(Index_1.ComponentEvent.STATE_CHANGE, _this.onStateChange, _this);
        return _this;
    }
    Object.defineProperty(Button.prototype, "text", {
        /**
         * 设置按钮的文本内容
         */
        get: function () {
            return this.label.text;
        },
        set: function (value) {
            this._text = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
        this.container.hitArea = new PIXI.Rectangle(0, 0, unscaledWidth, unscaledHeight);
        var img = this.img;
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
    };
    Button.prototype.release = function () {
        _super.prototype.release.call(this);
        this.offAll(Index_1.ComponentEvent.STATE_CHANGE);
        this.img.release();
        this.label.release();
    };
    Button.prototype.onStateChange = function (label, state) {
        if (this._oldState == state) {
            return;
        }
        this._oldState = state;
        this.img.src = this[state + this._selectedStr];
    };
    return Button;
}(InputBase_1.InputBase));
exports.Button = Button;


/***/ }),

/***/ "./src/display/CheckBox.ts":
/*!*********************************!*\
  !*** ./src/display/CheckBox.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var Button_1 = __webpack_require__(/*! ./Button */ "./src/display/Button.ts");
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
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        var _this = _super.call(this) || this;
        /**
         * 设置值
         */
        _this._value = "";
        /**
         * 设置是否选中
         * */
        _this._checked = false;
        return _this;
    }
    Object.defineProperty(CheckBox.prototype, "selectedValue", {
        /**
         * 获取或设置当前选中的值
         */
        get: function () {
            if (this.checkGroup) {
                return Index_1.InputController.getCheckGroupSelectedValue(this.checkGroup);
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "checkGroup", {
        /**
         * 设置分组名
         */
        get: function () {
            return this._groupName;
        },
        set: function (value) {
            if (value === undefined) {
                Index_1.InputController.unRegistrerCheckGroup(this);
            }
            if (this._groupName == value) {
                return;
            }
            this._groupName = value; //需要在registrerCheckGroup之前
            Index_1.InputController.registrerCheckGroup(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "value", {
        /**
         * 获取设置默认值
         */
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value === this._value) {
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "checked", {
        /**
         * 设置是否选中
         * @default false
         */
        get: function () {
            return this._checked;
        },
        set: function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    CheckBox.prototype.onClick = function () {
        _super.prototype.onClick.call(this);
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    };
    CheckBox.prototype.onLabelChange = function (label) {
        label.style.left = this.width;
        label.style.top = this.height - label.height >> 1;
    };
    return CheckBox;
}(Button_1.Button));
exports.CheckBox = CheckBox;


/***/ }),

/***/ "./src/display/Container.ts":
/*!**********************************!*\
  !*** ./src/display/Container.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
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
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super.call(this) || this;
        _this.isContainer = true;
        return _this;
    }
    /**
     * 确定指定显示对象是 DisplayObjectContainer 实例的子项或该实例本身。搜索包括整个显示列表（其中包括此 DisplayObjectContainer 实例）。
     * 孙项、曾孙项等，每项都返回 true。
     * @param child 要测试的子对象。
     * @returns 如果 child 对象是 DisplayObjectContainer 的子项或容器本身，则为 true；否则为 false。
     */
    Container.prototype.contains = function (child) {
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
    };
    return Container;
}(DisplayObject_1.DisplayObject));
exports.Container = Container;


/***/ }),

/***/ "./src/display/FollowLine.ts":
/*!***********************************!*\
  !*** ./src/display/FollowLine.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var tempLocalBounds = new PIXI.Rectangle();
/** 验证是否触发的距离 */
var POS_DISTANCE = 7;
/** 优化曲率，小于这个弧度视为直线，把当前点优化掉 */
var MAX_ARC = 0.09; // 5度
/** 点数字转换成字符的数位 */
var DIGIT = 90;
/** 字符列表 ascii */
var NUMBER_TO_STR = "$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}";
/** 压缩比例，有损压缩 */
var COMPRESS_RATE = 2;
/** 最大宽度 */
var MAX_WIDTH = 1500;
/** 为了把点都变成正数所用 */
var POSITIVE = MAX_WIDTH / 2;
/** 线条最大数量 */
var MAX_LINES = 100;
var TeacherDrawColor = 0xcd0032;
var StudentDrawColor = 0x3200cd;
/** 将一个x，y坐标转换成3个字符，宽高不能超过MAX_WIDTH */
function getStrFromPos(x, y) {
    x = Math.min(Math.max(0, x), MAX_WIDTH);
    y = Math.min(Math.max(0, y), MAX_WIDTH);
    // 有损压缩
    var compX = Math.floor(x / COMPRESS_RATE);
    var compY = Math.floor(y / COMPRESS_RATE);
    var n1 = compX % DIGIT;
    var n2 = compY % DIGIT;
    var n3 = Math.floor(compX / DIGIT) * 10 + Math.floor(compY / DIGIT);
    return NUMBER_TO_STR[n1] + NUMBER_TO_STR[n2] + NUMBER_TO_STR[n3];
}
/** 将字符串转换成坐标数字列表 */
function getVecListFromStr(str, from, to) {
    var list = [];
    for (var index = from; index < to; index += 3) {
        var n1 = str.charCodeAt(index) - 36;
        var n2 = str.charCodeAt(index + 1) - 36;
        var n3 = str.charCodeAt(index + 2) - 36;
        var n12 = Math.floor(n3 / 10);
        var n22 = n3 % 10;
        var compX = n1 + n12 * DIGIT;
        var compY = n2 + n22 * DIGIT;
        var realX = compX * COMPRESS_RATE;
        var realY = compY * COMPRESS_RATE;
        list.push(realX);
        list.push(realY);
    }
    return list;
}
/**
 * 跟随鼠标或触摸绘制线条
 *
 * @example let graphics = new gui.FollowLine();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
var FollowLine = /** @class */ (function (_super) {
    __extends(FollowLine, _super);
    function FollowLine(bindDisplay) {
        var _this = _super.call(this) || this;
        /** 触摸的ID */
        _this._touchId = -1;
        /** 位置缓存，记录画线时候每一个点，最后画完优化 */
        _this._posCache = [];
        /** 保存已画线的key */
        _this._lineKeys = [];
        /** 开始偏移量 */
        _this.startOffset = new PIXI.Point();
        /**
         * 由老师触发的划线索引
         */
        _this._curLineIndex = 0;
        /**
         * 需要处理的消息列表
         */
        _this._messageCache = [];
        /**
         * 线条颜色
         */
        _this._lineColor = 0x000000;
        /**
         * 是否暂停，一些特殊情况，如拖拽时，可暂停
         */
        _this._isPause = false;
        /** 是否擦除中 */
        _this._isErasing = false;
        /** 角色状态 */
        _this._role = "T" /* teacher */;
        _this._lastPos = new PIXI.Point();
        _this._mouseOffset = new PIXI.Point();
        _this._lines = new Map();
        _this.container.interactiveChildren = false;
        if (bindDisplay) {
            _this.clickEvent = new Index_1.ClickEvent(bindDisplay, true);
        }
        else {
            _this.clickEvent = new Index_1.ClickEvent(_this, true);
        }
        _this.clickEvent.isOpenLocalPoint = true;
        return _this;
    }
    Object.defineProperty(FollowLine.prototype, "lineColor", {
        get: function () {
            return this._lineColor;
        },
        set: function (value) {
            this._lineColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FollowLine.prototype, "isPause", {
        get: function () {
            return this._isPause;
        },
        set: function (value) {
            this._isPause = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FollowLine.prototype, "isErasing", {
        get: function () {
            return this._isErasing;
        },
        set: function (value) {
            if (this._isErasing === value) {
                return;
            }
            this._isErasing = value;
            if (value) {
                this.clickEvent.getTarget().container.cursor = "grab";
            }
            else {
                this.clickEvent.getTarget().container.cursor = "auto";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FollowLine.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
            if (value == "T" /* teacher */) {
                this._lineColor = TeacherDrawColor;
            }
            else {
                this._lineColor = StudentDrawColor;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
     */
    FollowLine.prototype.commitProperties = function () {
        this.onMessage();
        this.getCurLineByPos();
    };
    /**
     * 更新显示列表,子类重写，实现布局
     */
    FollowLine.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
    };
    FollowLine.prototype.$onInit = function () {
        //由于绑定的可能非当前显示对象，所以此处不可以使用this.on("xxxx")
        this.clickEvent.getTarget().on(Index_1.TouchMouseEvent.onPress, this.onPress, this);
        this.clickEvent.getTarget().on(Index_1.TouchMouseEvent.onMove, this.onMove, this);
    };
    FollowLine.prototype.$onRelease = function () {
        this.clickEvent.getTarget().off(Index_1.TouchMouseEvent.onPress, this.onPress, this);
        this.clickEvent.getTarget().off(Index_1.TouchMouseEvent.onMove, this.onMove, this);
        this.clickEvent.remove();
        this.clear();
    };
    FollowLine.prototype.onMessage = function () {
        var _messageCache = this._messageCache;
        if (_messageCache.length > 0) {
            var message = void 0;
            var data = void 0;
            var role = void 0;
            var operate = void 0;
            var lineId = void 0;
            while (_messageCache.length > 0) {
                message = _messageCache.pop();
                operate = message.charAt(0);
                var messageIndex = message.indexOf('|');
                role = message.charAt(1);
                lineId = message.substr(2, messageIndex - 2);
                switch (operate) {
                    case "1" /* add */:
                        data = message.substr(messageIndex + 1);
                        this.drawLine(lineId, data, 0, data.length, role);
                        break;
                    case "2" /* remove */:
                        this.removeLine(role + lineId);
                        break;
                    case "3" /* clear */:
                        this.clear();
                        break;
                }
            }
        }
    };
    FollowLine.prototype.onPress = function (e, thisObj, isPress) {
        if (this._isPause) {
            return;
        }
        e.stopPropagation();
        if (isPress) {
            if (this.parent === undefined)
                return;
            if (this._isErasing)
                return;
            if (this._touchId !== -1)
                return;
            this._touchId = e.data.identifier;
            var curLocal = this.container.toLocal(e.local, thisObj.container);
            this.startOffset.set(Math.floor(e.local.x - curLocal.x), Math.floor(e.local.y - curLocal.y));
            this._lastPos.copyFrom(curLocal);
            this._posCache = [this._lastPos.clone()];
            this._curLineIndex++;
        }
        else {
            // 清除操作
            if (this._isErasing && this._eraseLine) {
                var name_1 = this._eraseLine.name;
                this.removeLine(name_1);
                this.emitMsg("2" /* remove */, name_1.charAt(0), name_1.substr(1));
                this._eraseLine = undefined;
                return;
            }
            if (this._touchId === -1 || this._touchId != e.data.identifier)
                return;
            this._touchId = -1;
            if (this._posCache.length == 1) { //划线失败
                console.log('gui -> 移动距离过短，画线失败 >' + POS_DISTANCE);
                this._curLineIndex--;
                this._posCache.pop();
                return;
            }
            this.emitMsg("1" /* add */, this.role, this._curLineIndex.toString(), this.getDataStrByPosCache());
        }
    };
    FollowLine.prototype.onMove = function (e) {
        e.stopPropagation();
        this._mouseOffset.set(Math.floor(e.local.x) - this.startOffset.x, Math.floor(e.local.y) - this.startOffset.y);
        if (this._isErasing) {
            if (this._role == "T" /* teacher */) {
                this.invalidateProperties();
            }
            return;
        }
        if (this._touchId === -1 || !this._lastPos || this._touchId != e.data.identifier)
            return;
        var _a = this, _lastPos = _a._lastPos, _posCache = _a._posCache;
        var len = Utils_1.pointDistance(_lastPos, this._mouseOffset);
        if (len < POS_DISTANCE) {
            return;
        }
        var brush = this.getGraphics(this._curLineIndex.toString(), this.role);
        brush.moveTo(_lastPos.x, _lastPos.y);
        brush.lineTo(this._mouseOffset.x, this._mouseOffset.y);
        _lastPos.copyFrom(this._mouseOffset);
        _posCache.push(_lastPos.clone());
    };
    /**
     * 发送操作事件
     * @param operate   1添加 2删除 3重置
     * @param role  Role
     * @param lineIndex 线段 ID
     */
    FollowLine.prototype.emitMsg = function (operate, role, lineId, data) {
        if (data === void 0) { data = ''; }
        var dataStr = operate + role + lineId + '|' + data;
        this.emit(Index_1.ComponentEvent.COMPLETE, this, dataStr);
    };
    /**
     *
     * @param name (name = role + lineId)
     * @param role
     */
    FollowLine.prototype.getGraphics = function (name, role) {
        var key = role + name;
        if (this._lines.has(key)) {
            return this._lines.get(key);
        }
        if (this._lines.size > MAX_LINES) {
            this.removeLine(this._lineKeys.shift());
        }
        var graphics = new PIXI.Graphics();
        graphics.interactive = false;
        graphics.interactiveChildren = false;
        graphics.name = key;
        this.container.addChild(graphics);
        this._lineKeys.push(key);
        this._lines.set(key, graphics);
        graphics.lineStyle(3, this._lineColor);
        return graphics;
    };
    FollowLine.prototype.getCurLineByPos = function () {
        var _this = this;
        var _a = this, _lines = _a._lines, _mouseOffset = _a._mouseOffset;
        if (this._eraseLine) {
            this._eraseLine.tint = 0xFFFFFF;
            this._eraseLine = undefined;
        }
        if (!this.isErasing) {
            return;
        }
        var lastDistance = 10000;
        _lines.forEach(function (value) {
            value.getLocalBounds(tempLocalBounds);
            if (tempLocalBounds.contains(_mouseOffset.x, _mouseOffset.y)) {
                var distance = Utils_1.pointDistance(_mouseOffset, { x: tempLocalBounds.x + tempLocalBounds.width * 0.5, y: tempLocalBounds.y + tempLocalBounds.height * 0.5 });
                if (distance < lastDistance) {
                    lastDistance = distance;
                    _this._eraseLine = value;
                }
            }
        });
        if (this._eraseLine) {
            this._eraseLine.tint = 0x000000;
        }
    };
    FollowLine.prototype.getDataStrByPosCache = function () {
        var _posCache = this._posCache;
        if (_posCache.length == 0) {
            return;
        }
        // 稀疏位置点，通过曲率
        var finalX = [_posCache[0].x];
        var finalY = [_posCache[0].y];
        var lastLastPos = _posCache[0];
        var lastPos = _posCache[1];
        var sumAngle = 0;
        for (var index = 2; index < _posCache.length; index++) {
            var pos = _posCache[index];
            var pos1 = Utils_1.pointSub(lastPos, lastLastPos);
            var pos2 = Utils_1.pointSub(pos, lastPos);
            var angle = Utils_1.pointSignAngle(pos1, pos2);
            if (angle > MAX_ARC || angle < -MAX_ARC || sumAngle > MAX_ARC || sumAngle < -MAX_ARC) {
                finalX.push(lastPos.x);
                finalY.push(lastPos.y);
                sumAngle = 0;
            }
            else {
                sumAngle += angle;
            }
            lastLastPos = lastPos;
            lastPos = pos;
        }
        finalX.push(_posCache[_posCache.length - 1].x);
        finalY.push(_posCache[_posCache.length - 1].y);
        var finalStrList = [];
        for (var index = 0; index < finalX.length; index++) {
            var x = finalX[index] + POSITIVE;
            var y = finalY[index] + POSITIVE;
            var str = getStrFromPos(x, y);
            finalStrList.push(str);
        }
        var finalStr = finalStrList.join('');
        return finalStr;
    };
    FollowLine.prototype.drawLine = function (drawId, data, from, to, role) {
        var graphics = this.getGraphics(drawId, role);
        var posList = getVecListFromStr(data, from, to);
        this.draw(graphics, posList);
    };
    FollowLine.prototype.draw = function (graphics, posList) {
        var lastX = posList[0] - POSITIVE;
        var lastY = posList[1] - POSITIVE;
        graphics.moveTo(lastX, lastY);
        // 利用贝塞尔将线平滑化
        var realList = [];
        for (var index = 2; index < posList.length; index += 2) {
            var x = posList[index] - POSITIVE;
            var y = posList[index + 1] - POSITIVE;
            var halfX = lastX + (x - lastX) * 0.5;
            var halfY = lastY + (y - lastY) * 0.5;
            realList.push(halfX, halfY, x, y);
            lastX = x;
            lastY = y;
        }
        graphics.lineTo(realList[0], realList[1]);
        for (var index = 2; index < realList.length - 2; index += 4) {
            var cx = realList[index];
            var cy = realList[index + 1];
            var x = realList[index + 2];
            var y = realList[index + 3];
            graphics.quadraticCurveTo(cx, cy, x, y);
        }
        graphics.lineTo(realList[realList.length - 2], realList[realList.length - 1]);
    };
    FollowLine.prototype.removeLine = function (key) {
        var delKeyIndex = this._lineKeys.indexOf(key);
        if (delKeyIndex !== -1) {
            this._lineKeys.splice(delKeyIndex, 1);
        }
        var line = this._lines.get(key);
        if (line) {
            this._lines.delete(key);
            if (line.parent) {
                line.parent.removeChild(line);
                line.destroy();
            }
        }
    };
    FollowLine.prototype.clear = function () {
        this._lines.forEach(function (value, key) {
            if (value.parent) {
                value.parent.removeChild(value).destroy();
            }
        });
        this._lines.clear();
        this._curLineIndex = 0;
        this._posCache = [];
        this._lineKeys = [];
    };
    FollowLine.prototype.setData = function (data) {
        if (typeof data === 'string') {
            this._messageCache.push(data);
        }
        else {
            this._messageCache = this._messageCache.concat(data);
        }
        this.invalidateProperties();
    };
    FollowLine.prototype.reset = function () {
        this.emitMsg("3" /* clear */, this.role, "");
        this.clear();
    };
    return FollowLine;
}(DisplayObject_1.DisplayObject));
exports.FollowLine = FollowLine;


/***/ }),

/***/ "./src/display/Graphics.ts":
/*!*********************************!*\
  !*** ./src/display/Graphics.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
/**
 * 矢量绘制
 *
 * @example let graphics = new gui.Graphics();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
var Graphics = /** @class */ (function (_super) {
    __extends(Graphics, _super);
    function Graphics(geometry) {
        var _this = _super.call(this) || this;
        _this.graphics = new PIXI.Graphics(geometry);
        _this.container.addChild(_this.graphics);
        return _this;
    }
    return Graphics;
}(DisplayObject_1.DisplayObject));
exports.Graphics = Graphics;


/***/ }),

/***/ "./src/display/Image.ts":
/*!******************************!*\
  !*** ./src/display/Image.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 图片
 *
 * @example let image = new gui.Image();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestImage
 */
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super.call(this) || this;
        /**
         * 填充模式
         * 设置scale后，可设置scale9Grid进行调整缩放区域
         */
        _this._fillMode = "no-repeat";
        return _this;
    }
    /** 可以支持遮罩的组件 */
    Image.prototype.maskSprite = function () {
        return this._sprite;
    };
    Object.defineProperty(Image.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            this._src = value;
            this.srcSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "scale9Grid", {
        get: function () {
            return this._scale9Grid;
        },
        set: function (value) {
            this._scale9Grid = value;
            this.scale9GridSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "fillMode", {
        get: function () {
            return this._fillMode;
        },
        set: function (value) {
            this._fillMode = value;
            this._source = undefined;
            this.srcSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "anchorX", {
        get: function () {
            return this._anchorX;
        },
        set: function (value) {
            this._anchorX = value;
            this.anchorSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "anchorY", {
        get: function () {
            return this._anchorY;
        },
        set: function (value) {
            this._anchorY = value;
            this.anchorSystem();
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.release = function () {
        _super.prototype.release.call(this);
        this.offAll(Index_1.ComponentEvent.COMPLETE);
        if (this._sprite && this._sprite.parent) {
            this._sprite.parent.removeChild(this._sprite).destroy();
        }
    };
    /**
     * @private
     * 测量组件尺寸
     */
    Image.prototype.measure = function () {
    };
    Image.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        if (unscaledWidth === 0 && unscaledHeight === 0) {
            return;
        }
        if (this._sprite) {
            _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
            this.scale9GridSystem();
            this._sprite.width = unscaledWidth;
            this._sprite.height = unscaledHeight;
            this.anchorSystem();
        }
    };
    Image.prototype.srcSystem = function () {
        var _this = this;
        var _a = this, container = _a.container, src = _a.src;
        if (src === undefined && this._sprite && this._sprite.parent) {
            container.removeChild(this._sprite);
            this._sprite.destroy();
        }
        if (this._texture) {
            this._texture.removeAllListeners();
        }
        if (src !== this._source) {
            this._source = src;
            var texture_1 = this._texture = Utils_1.getTexture(src);
            if (texture_1 === undefined) {
                return;
            }
            if (texture_1.frame.width > 1 && texture_1.frame.height > 1) {
                this.setMeasuredSize(texture_1.frame.width, texture_1.frame.height);
            }
            var invalidateDisplayList_1 = false;
            texture_1.once("update", function () {
                invalidateDisplayList_1 = true;
                _this.setMeasuredSize(texture_1.frame.width, texture_1.frame.height);
                _this.invalidateSize();
                _this.emit(Index_1.ComponentEvent.COMPLETE, _this);
            }, this);
            var sprite = this._sprite;
            if (!PIXI.utils.isWebGLSupported()) {
                sprite = PIXI.Sprite.from(texture_1);
            }
            else {
                if (this.fillMode === "no-repeat") {
                    if (sprite instanceof PIXI.Sprite) {
                        sprite.texture = texture_1;
                    }
                    else {
                        sprite = new PIXI.Sprite(texture_1);
                    }
                }
                else if (this.fillMode === "repeat") {
                    if (sprite instanceof PIXI.TilingSprite) {
                        sprite.texture = texture_1;
                    }
                    else {
                        sprite = new PIXI.TilingSprite(texture_1);
                    }
                }
                else if (this.fillMode === "scale") {
                    if (sprite instanceof PIXI.NineSlicePlane) {
                        sprite.texture = texture_1;
                    }
                    else {
                        sprite = new PIXI.NineSlicePlane(texture_1);
                    }
                }
            }
            if (sprite && sprite.parent == undefined) {
                this._sprite = container.addChild(sprite);
            }
            if (!invalidateDisplayList_1) {
                this.invalidateDisplayList();
                this.invalidateParentLayout();
            }
        }
    };
    Image.prototype.scale9GridSystem = function () {
        if (this._sprite === undefined || this.scale9Grid === undefined) {
            return;
        }
        var sprite = this._sprite;
        var scale9Grid = this.scale9Grid;
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
    };
    Image.prototype.anchorSystem = function () {
        if (this._sprite === undefined) {
            return;
        }
        var sprite = this._sprite;
        if (this.anchorX) {
            sprite.x = -Math.floor(sprite.width * this.anchorX);
        }
        if (this.anchorY) {
            sprite.y = -Math.floor(sprite.height * this.anchorY);
        }
    };
    return Image;
}(DisplayObject_1.DisplayObject));
exports.Image = Image;


/***/ }),

/***/ "./src/display/Label.ts":
/*!******************************!*\
  !*** ./src/display/Label.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var UIKeys = __webpack_require__(/*! ../core/DisplayLayoutKeys */ "./src/core/DisplayLayoutKeys.ts");
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
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(text) {
        if (text === void 0) { text = ""; }
        var _this = _super.call(this) || this;
        _this.sprite = new PIXI.Text(text, { breakWords: true, fill: "#ffffff" });
        _this.container.addChild(_this.sprite);
        return _this;
    }
    Object.defineProperty(Label.prototype, "text", {
        /**
         * 文本内容
         */
        get: function () {
            return this.sprite.text;
        },
        set: function (value) {
            this.sprite.text = value;
            this.invalidateSize();
            this.invalidateDisplayList();
            this.emit(Index_1.ComponentEvent.CHANGE, this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "fontCssStyle", {
        set: function (value) {
            if (value.color) {
                value.fill = value.color;
            }
            value.breakWords = true;
            this.sprite.style = value;
            this.invalidateSize();
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Label.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
        var values = this.$values;
        if (!isNaN(values[UIKeys.explicitWidth])) {
            switch (this.style.textAlign) {
                case "left":
                    this.sprite.x = 0;
                    break;
                case "right":
                    this.sprite.x = values[UIKeys.explicitWidth] - this.sprite.width;
                    break;
                case "center":
                    this.sprite.x = values[UIKeys.explicitWidth] - this.sprite.width >> 1;
                    break;
            }
        }
        if (!isNaN(values[UIKeys.explicitHeight])) {
            this.sprite.y = values[UIKeys.explicitHeight] - this.sprite.height >> 1;
        }
    };
    Label.prototype.release = function () {
        _super.prototype.release.call(this);
        var sprite = this.sprite;
        if (sprite && sprite.parent) {
            sprite.parent.removeChild(sprite).destroy();
        }
        this.offAll(Index_1.ComponentEvent.CHANGE);
    };
    return Label;
}(DisplayObject_1.DisplayObject));
exports.Label = Label;


/***/ }),

/***/ "./src/display/Rect.ts":
/*!*****************************!*\
  !*** ./src/display/Rect.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
/**
 * 绘制矩形或圆角矩形
 *
 * @example let rect = new gui.Rect();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
 */
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super.call(this) || this;
        /**
         * 圆角
         */
        _this._radius = 0;
        /**
         * 线条颜色
         */
        _this._lineColor = 0;
        /**
         * 线条粗细
         */
        _this._lineWidth = 0;
        /**
         * 颜色
         */
        _this._color = 0;
        _this.graphics = new PIXI.Graphics();
        _this.container.addChild(_this.graphics);
        return _this;
    }
    /** 可以支持遮罩的组件 */
    Rect.prototype.maskSprite = function () {
        return this.graphics;
    };
    Object.defineProperty(Rect.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "lineColor", {
        get: function () {
            return this._lineColor;
        },
        set: function (value) {
            this._lineColor = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "lineWidth", {
        get: function () {
            return this._lineWidth;
        },
        set: function (value) {
            this._lineWidth = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "anchorX", {
        get: function () {
            return this._anchorX;
        },
        set: function (value) {
            this._anchorX = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "anchorY", {
        get: function () {
            return this._anchorY;
        },
        set: function (value) {
            this._anchorY = value;
            this.invalidateDisplayList();
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.drawRoundedRect = function () {
        var graphics = this.graphics;
        graphics.clear();
        graphics.lineStyle(this._lineWidth, this._lineColor);
        graphics.beginFill(this._color);
        graphics.drawRoundedRect(this._anchorX ? -this._anchorX * this.width : 0, this._anchorY ? -this._anchorY * this.height : 0, this.width, this.height, this._radius);
        graphics.endFill();
    };
    Rect.prototype.release = function () {
        _super.prototype.release.call(this);
        if (this.graphics.parent) {
            this.graphics.parent.removeChild(this.graphics).destroy();
        }
    };
    Rect.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        this.drawRoundedRect();
        _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
    };
    return Rect;
}(DisplayObject_1.DisplayObject));
exports.Rect = Rect;


/***/ }),

/***/ "./src/display/ScrollingContainer.ts":
/*!*******************************************!*\
  !*** ./src/display/ScrollingContainer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __webpack_require__(/*! ./Container */ "./src/display/Container.ts");
var Ticker = __webpack_require__(/*! ../core/Ticker */ "./src/core/Ticker.ts");
var Utils = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var DragEvent_1 = __webpack_require__(/*! ../interaction/DragEvent */ "./src/interaction/DragEvent.ts");
var MouseScrollEvent_1 = __webpack_require__(/*! ../interaction/MouseScrollEvent */ "./src/interaction/MouseScrollEvent.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var ContainerBase_1 = __webpack_require__(/*! ../core/ContainerBase */ "./src/core/ContainerBase.ts");
/**
 * 可滚动的容器
 *
 * @example let scrollingContainer = new gui.ScrollingContainer();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestRect
 */
var ScrollingContainer = /** @class */ (function (_super) {
    __extends(ScrollingContainer, _super);
    function ScrollingContainer() {
        var _this = _super.call(this) || this;
        /**
         * 是否启动拖拽滚动
         * @default true
         */
        _this._dragScrolling = true;
        /**
         * 滚动的阻力或柔度 (0-1)
         * @default 0.5
         */
        _this.softness = 0.5;
        /**
         * 滚动条的圆角半径 设置0时，滚动条为直角长方形
         * @default 0
         */
        _this.radius = 0;
        /**
         * 遮罩的扩充范围
         */
        _this.expandMask = 0;
        /**
         * 是否开启滚动动画
         * @default false
         */
        _this.animating = false;
        /**
         * 是否启用水平滚动
         * @default false
         */
        _this.scrollX = false;
        /**
         * 是否滚动中
         */
        _this.scrollY = false;
        /**
         * 内容容器
         * @private
         */
        _this._innerContainer = new ContainerBase_1.ContainerBase();
        /**
         * 内容的宽高
         */
        _this.innerBounds = new PIXI.Rectangle();
        /**
         * 拖动处理类
         */
        _this.dragEvent = new DragEvent_1.DragEvent(_this);
        /**
         * 鼠标滚动
         */
        _this.mouseScrollEvent = new MouseScrollEvent_1.MouseScrollEvent(_this, true);
        /**
         * 是否滚动中
         */
        _this.scrolling = false;
        /**
         * 临时方案，设置时间间隔，跳转容器宽高
         */
        _this._boundCached = Utils_1.now() - 1000;
        _this._lastWidth = 0;
        _this._lastHeight = 0;
        _this._isInitScrolling = false;
        _this._containerStart = new PIXI.Point();
        _this._targetPosition = new PIXI.Point();
        _this._lastPosition = new PIXI.Point();
        _this._Position = new PIXI.Point();
        _this._Speed = new PIXI.Point();
        _this._stop = false;
        _this.container.addChild(_this._innerContainer);
        _this.container.name = "ScrollingContainer";
        _this._innerContainer.name = "innerContainer";
        var _graphics = new PIXI.Graphics();
        _graphics.clear();
        _graphics.beginFill(0xffcc00);
        _graphics.drawRoundedRect(0, 0, 200, 200, 0);
        _graphics.endFill();
        _this.style.maskImage = _graphics;
        _this.dragEvent.onDragStart = function () {
            if (!_this.scrolling) {
                _this._containerStart.copyFrom(_this._innerContainer.position);
                _this._Position.copyFrom(_this._innerContainer.position);
                _this.scrolling = true;
                _this.setScrollPosition();
                Ticker.shared.addUpdateEvent(_this.updateScrollPosition, _this);
            }
        };
        _this.dragEvent.onDragMove = function (e, offset) {
            if (_this.scrollX)
                _this._targetPosition.x = _this._containerStart.x + offset.x;
            if (_this.scrollY)
                _this._targetPosition.y = _this._containerStart.y + offset.y;
        };
        _this.dragEvent.onDragEnd = function () {
            if (_this.scrolling) {
                _this.scrolling = false;
                Ticker.shared.removeUpdateEvent(_this.updateScrollPosition, _this);
            }
        };
        var scrollSpeed = new PIXI.Point();
        _this.mouseScrollEvent.onMouseScroll = function (e, delta) {
            scrollSpeed.set(-delta.x * 0.2, -delta.y * 0.2);
            _this.setScrollPosition(scrollSpeed);
        };
        return _this;
    }
    Object.defineProperty(ScrollingContainer.prototype, "dragScrolling", {
        get: function () {
            return this._dragScrolling;
        },
        set: function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    ScrollingContainer.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
        if (this._lastWidth != unscaledWidth || this._lastHeight != unscaledHeight) {
            _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
            var _of = this.expandMask;
            this.style.maskPosition = [_of, _of];
            this._lastWidth = unscaledWidth;
            this._lastHeight = unscaledHeight;
            this.style.maskSize = [unscaledWidth, unscaledHeight];
            this.setScrollPosition();
        }
    };
    ScrollingContainer.prototype.setScrollPosition = function (speed) {
        if (speed) {
            this._Speed = speed;
        }
        if (!this.animating) {
            this.animating = true;
            this._lastPosition.copyFrom(this._innerContainer.position);
            this._targetPosition.copyFrom(this._innerContainer.position);
            this.updateScrollPosition(0);
        }
    };
    ScrollingContainer.prototype.addChildAt = function (item, index) {
        if (item.parent) {
            item.parent.removeChild(item);
        }
        item.parent = this;
        index = Math.min(this._innerContainer.children.length, index);
        this._innerContainer.addChildAt(item.container, index);
        this.uiChildren.splice(index, 0, item);
        this.getInnerBounds(true);
        return item;
    };
    ScrollingContainer.prototype.getInnerBounds = function (force) {
        //this is a temporary fix, because we cant rely on innercontainer height if the children is positioned > 0 y.
        if (force || Utils_1.now() - this._boundCached > 1000) {
            this._innerContainer.getLocalBounds(this.innerBounds);
            this.innerBounds.height = this.innerBounds.y + this._innerContainer.height;
            this.innerBounds.width = this.innerBounds.x + this._innerContainer.width;
            this._boundCached = Utils_1.now();
        }
        return this.innerBounds;
    };
    ScrollingContainer.prototype.$onInit = function () {
        _super.prototype.$onInit.call(this);
        this.initScrolling();
    };
    ScrollingContainer.prototype.initScrolling = function () {
        this._isInitScrolling = true;
        this.updateScrollBars();
    };
    ScrollingContainer.prototype.updateScrollBars = function () {
        this.emit(Index_1.ComponentEvent.CHANGE, this);
    };
    /**
     * 百分比设置位置
     * @param direction 方向
     * @param pct 百分比0-1
     */
    ScrollingContainer.prototype.forcePctPosition = function (direction, pct) {
        var bounds = this.getInnerBounds();
        if (this.scrollX && direction == "x") {
            this._innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.scrollY && direction == "y") {
            this._innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this._Position[direction] = this._targetPosition[direction] = this._innerContainer.position[direction];
    };
    /** 根据焦点设置位置 */
    ScrollingContainer.prototype.focusPosition = function (pos) {
        var bounds = this.getInnerBounds();
        var dif;
        if (this.scrollX) {
            var x = Math.max(0, (Math.min(bounds.width, pos.x)));
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
            var y = Math.max(0, (Math.min(bounds.height, pos.y)));
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
    };
    ScrollingContainer.prototype.updateScrollPosition = function (delta) {
        this._stop = true;
        if (this.scrollX)
            this.updateDirection("x", delta);
        if (this.scrollY)
            this.updateDirection("y", delta);
        if (stop) {
            this.animating = false;
        }
    };
    ScrollingContainer.prototype.updateDirection = function (direction, delta) {
        delta = delta * 0.001;
        var bounds = this.getInnerBounds();
        var min;
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
            var target = this._Position[direction] > 0 ? 0 : min;
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
    };
    return ScrollingContainer;
}(Container_1.Container));
exports.ScrollingContainer = ScrollingContainer;


/***/ }),

/***/ "./src/display/Slider.ts":
/*!*******************************!*\
  !*** ./src/display/Slider.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
var Image_1 = __webpack_require__(/*! ./Image */ "./src/display/Image.ts");
var Utils = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var Tween_1 = __webpack_require__(/*! ../tween/Tween */ "./src/tween/Tween.ts");
var Easing_1 = __webpack_require__(/*! ../tween/Easing */ "./src/tween/Easing.ts");
/**
 * 滑动条/进度条
 *
 * @example let slider = new gui.Slider();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestSlider
 */
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super.call(this) || this;
        /**
         * 当前值
         */
        _this._amt = 0;
        /**
         * 小数的保留位，0不保留
         * @default 0
         */
        _this._decimals = 0;
        _this._startValue = 0;
        _this._maxPosition = 0;
        _this._localMousePosition = new PIXI.Point();
        _this._lastChange = 0;
        _this._lastChanging = 0;
        _this._thumbDrag = new Index_1.DragEvent(_this);
        _this._trackDrag = new Index_1.DragEvent(_this);
        /** 状态展示 */
        _this.trackImg = new Image_1.Image();
        _this.thumbImg = new Image_1.Image();
        _this.tracklightImg = new Image_1.Image();
        _this._value = 0;
        /**
         * 最小值
         */
        _this._minValue = 0;
        /**
         * 最大值
         */
        _this._maxValue = 100;
        /**
         * 是否垂直,滑块方向
         */
        _this._vertical = false;
        _this.isExcValueSystem = false;
        _this._thumbDrag.onDragPress = _this.onPress;
        _this._thumbDrag.onDragStart = _this.onDragStart;
        _this._thumbDrag.onDragMove = _this.onDragMove;
        _this._thumbDrag.onDragEnd = _this.onDragEnd;
        _this._trackDrag.onDragPress = _this.onPress;
        _this._trackDrag.onDragStart = _this.onDragStart;
        _this._trackDrag.onDragMove = _this.onDragMove;
        _this._trackDrag.onDragEnd = _this.onDragEnd;
        _this.thumbImg.container.name = "thumbImg";
        _this.thumbImg.anchorX = 0.5;
        _this.thumbImg.anchorY = 0.5;
        _this.thumbImg.on(Index_1.ComponentEvent.COMPLETE, _this.onImgload, _this);
        _this.trackImg.container.name = "trackImg";
        _this.trackImg.fillMode = "scale";
        _this.trackImg.scale9Grid = [2, 2, 2, 2];
        _this.trackImg.style.width = "100%";
        _this.trackImg.style.height = "100%";
        _this.trackImg.on(Index_1.ComponentEvent.COMPLETE, _this.onImgload, _this);
        _this.tracklightImg.container.name = "tracklightImg";
        _this.tracklightImg.fillMode = "scale";
        _this.tracklightImg.scale9Grid = [2, 2, 2, 2];
        _this.addChild(_this.trackImg);
        _this.addChild(_this.tracklightImg);
        _this.addChild(_this.thumbImg);
        return _this;
    }
    Object.defineProperty(Slider.prototype, "value", {
        /**
         * 当前值
         */
        get: function () {
            return Utils.Round(Utils.Lerp(this.minValue, this.maxValue, this._amt), this._decimals);
        },
        set: function (value) {
            this._value = value;
            this.valueSystem();
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.valueSystem = function () {
        this._amt = (Math.max(this.minValue, Math.min(this.maxValue, this._value)) - this.minValue) / (this.maxValue - this.minValue);
        this.updatePosition();
        this.triggerValueChange();
        this.triggerValueChanging();
    };
    Object.defineProperty(Slider.prototype, "minValue", {
        get: function () {
            return this._minValue;
        },
        set: function (value) {
            this._minValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "maxValue", {
        get: function () {
            return this._maxValue;
        },
        set: function (value) {
            this._maxValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.updateLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "track", {
        get: function () {
            return this._track;
        },
        set: function (value) {
            if (value !== this._track) {
                this._track = value;
                this.trackImg.src = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "thumb", {
        get: function () {
            return this._thumb;
        },
        set: function (value) {
            if (value !== this._thumb) {
                this._thumb = value;
                this.thumbImg.src = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "tracklight", {
        get: function () {
            return this._tracklight;
        },
        set: function (value) {
            if (value !== this._tracklight) {
                this._tracklight = value;
                this.tracklightImg.src = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.setActualSize = function (w, h) {
        _super.prototype.setActualSize.call(this, w, h);
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
    };
    Slider.prototype.release = function () {
        _super.prototype.release.call(this);
        this.trackImg.release();
        this.thumbImg.release();
        this.tracklightImg.release();
    };
    Slider.prototype.onImgload = function () {
        this.updateLayout();
    };
    Slider.prototype.updateLayout = function () {
        var thumbImg = this.thumbImg;
        var tracklightImg = this.tracklightImg;
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
    };
    Slider.prototype.updatePosition = function (soft) {
        var val = 0;
        var thumbImg = this.thumbImg;
        var tracklightImg = this.tracklightImg;
        if (this.vertical) {
            val = this._height * this._amt;
            if (soft) {
                Tween_1.Tween.to({ y: thumbImg.y, height: tracklightImg.height }, { y: val, height: val }, 300).easing(Easing_1.Easing.Linear.None)
                    .on(Tween_1.Tween.Event.update, function (obj) {
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
                    .on(Tween_1.Tween.Event.update, function (obj) {
                    thumbImg.x = obj.x;
                    tracklightImg.width = obj.width;
                }).start();
            }
            else {
                thumbImg.x = val;
                tracklightImg.width = val;
            }
        }
    };
    Slider.prototype.onPress = function (event, isPressed, dragEvent) {
        event.stopPropagation();
        if (this._trackDrag == dragEvent && this._trackDrag.id == event.data.identifier) {
            if (isPressed) {
                this.updatePositionToMouse(event.data.global, true);
            }
        }
    };
    Slider.prototype.onDragStart = function (event) {
        if (this._thumbDrag.id == event.data.identifier) {
            this._startValue = this._amt;
            this._maxPosition = this.vertical ? this._height : this._width;
        }
    };
    Slider.prototype.onDragMove = function (event, offset) {
        if (this._thumbDrag.id == event.data.identifier) {
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.vertical ? offset.y : offset.x) / this._maxPosition)));
            this.triggerValueChanging();
            this.updatePosition();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.updatePositionToMouse(event.data.global, false);
        }
    };
    Slider.prototype.onDragEnd = function (event) {
        if (this._thumbDrag.id == event.data.identifier) {
            this.triggerValueChange();
            this.updatePosition();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.triggerValueChange();
        }
    };
    Slider.prototype.updatePositionToMouse = function (mousePosition, soft) {
        this.trackImg.container.toLocal(mousePosition, undefined, this._localMousePosition, true);
        var newPos = this.vertical ? this._localMousePosition.y : this._localMousePosition.x;
        var maxPos = this.vertical ? this._height : this._width;
        this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
        this.updatePosition(soft);
        this.triggerValueChanging();
    };
    Slider.prototype.triggerValueChange = function () {
        var value = this.value;
        this.emit(Index_1.ComponentEvent.CHANGE, this, value, this._lastChange);
        if (this._lastChange != value) {
            this._lastChange = value;
        }
    };
    Slider.prototype.triggerValueChanging = function () {
        var value = this.value;
        this.emit(Index_1.ComponentEvent.CHANGEING, this, value, this._lastChanging);
        if (this._lastChanging != value) {
            this._lastChanging = value;
        }
    };
    return Slider;
}(DisplayObject_1.DisplayObject));
exports.Slider = Slider;


/***/ }),

/***/ "./src/display/Sound.ts":
/*!******************************!*\
  !*** ./src/display/Sound.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var SpriteAnimated_1 = __webpack_require__(/*! ./SpriteAnimated */ "./src/display/SpriteAnimated.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var InputBase_1 = __webpack_require__(/*! ./private/InputBase */ "./src/display/private/InputBase.ts");
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
var Sound = /** @class */ (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        var _this = _super.call(this) || this;
        /**
         * 状态展示
         */
        _this.spriteAnimated = new SpriteAnimated_1.SpriteAnimated();
        /**
         * 是否自动播放
         * @default false
         */
        _this._autoPlay = false;
        _this._speed = 1;
        _this._volume = 100;
        _this._loop = false;
        _this._curProgress = 0;
        _this._playing = false;
        var sp = _this.spriteAnimated;
        sp.loop = true;
        _this.addChild(sp);
        _this.container.buttonMode = true;
        return _this;
    }
    Object.defineProperty(Sound.prototype, "autoPlay", {
        get: function () {
            return this._autoPlay;
        },
        set: function (value) {
            this._autoPlay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "sheetSkin", {
        get: function () {
            return this._sheetSkin;
        },
        set: function (value) {
            this._sheetSkin = value;
            this.spriteAnimated.src = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "duration", {
        get: function () {
            if (this._sound) {
                return this._sound.duration;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "src", {
        /**
         * 音频源
         */
        get: function () {
            return this._src;
        },
        set: function (src) {
            if (src === this.src) {
                return;
            }
            this._src = src;
            this.invalidateProperties();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "animationSpeed", {
        /**
         * 动画速度
         */
        get: function () {
            return this.spriteAnimated.animationSpeed;
        },
        set: function (value) {
            this.spriteAnimated.animationSpeed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "speed", {
        /**
         * 设置播放速度
         */
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
            if (this._sound) {
                this._sound.speed = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "volume", {
        /**
         * 音量
         * @default 100
         */
        get: function () {
            return this._volume;
        },
        set: function (value) {
            this._volume = value;
            if (this._sound) {
                this._sound.volume = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "loop", {
        /**
         * 是否循环
         * @default false
         */
        get: function () {
            return this._loop;
        },
        set: function (value) {
            this._loop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "isPlaying", {
        get: function () {
            if (this._sound) {
                return this._sound.isPlaying;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sound.prototype, "isPlay", {
        get: function () {
            return this.isPlaying;
        },
        set: function (value) {
            if (this._sound == undefined) {
                console.warn("curent sound initialization not complete;");
                return;
            }
            if (value) {
                this.play();
            }
            else {
                this.stop();
            }
        },
        enumerable: true,
        configurable: true
    });
    Sound.prototype.commitProperties = function () {
        this.releaseSound();
        if (this.src) {
            var sound = this._sound = Utils_1.getSound(this.src);
            sound.volume = this.volume;
            sound.speed = this.speed;
            if (this.autoPlay) {
                this.play();
            }
            else {
                this.stop();
            }
            this.container.hitArea = new PIXI.Rectangle(0, 0, this.width / this.scaleX, this.height / this.scaleY);
        }
    };
    Sound.prototype.play = function (start, end) {
        if (start === void 0) { start = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var uiObjects, key, sound, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.startTime) {
                            start = this.startTime;
                        }
                        if (this.endTime) {
                            end = this.endTime;
                        }
                        if (this._sound && this._sound.isPlaying) {
                            return [2 /*return*/];
                        }
                        uiObjects = Index_1.GroupController.getGroup(this.groupName);
                        if (uiObjects) {
                            for (key in uiObjects) {
                                if (uiObjects[key] instanceof Sound) {
                                    uiObjects[key].stop();
                                }
                            }
                        }
                        if (this._mediaInstance) {
                            this._mediaInstance.off('progress', this.onProgress, this);
                            this._mediaInstance.off('end', this.onEnd, this);
                        }
                        if (!this._sound) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._sound.play({
                                start: start,
                                end: end
                            })];
                    case 1:
                        sound = _a._mediaInstance = _b.sent();
                        sound.on('progress', this.onProgress, this);
                        sound.on('end', this.onEnd, this);
                        _b.label = 2;
                    case 2:
                        this._playing = true;
                        if (this._sheetSkin) {
                            this.spriteAnimated.animationName = "play";
                            this.spriteAnimated.play();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Sound.prototype.stop = function () {
        if (this._sound) {
            this._sound.stop();
        }
        this._playing = false;
        if (this._sheetSkin) {
            this.spriteAnimated.animationName = "stop";
            this.spriteAnimated.stop();
        }
    };
    /**
     * 恢复播放
     */
    Sound.prototype.resume = function () {
        this.play(this._curProgress);
    };
    /**
     * 暂停播放
     */
    Sound.prototype.pause = function () {
        if (this._mediaInstance && this._sound) {
            this._curProgress = this._mediaInstance.progress * this._sound.duration;
        }
        this.stop();
    };
    Sound.prototype.release = function () {
        _super.prototype.release.call(this);
        this.releaseSound();
        this.offAll();
        this.spriteAnimated.release();
    };
    Sound.prototype.releaseSound = function () {
        if (this._mediaInstance) {
            this._mediaInstance.off('progress', this.onProgress, this);
            this._mediaInstance.off('end', this.onEnd, this);
        }
        if (this._sound) {
            this._sound.stop();
            this._sound.destroy();
            this._sound = undefined;
        }
    };
    Sound.prototype.onProgress = function (progress, duration) {
        this._curProgress = progress * duration;
        if (this.listenerCount(Index_1.ComponentEvent.CHANGEING) > 0) {
            this.emit(Index_1.ComponentEvent.CHANGEING, this, this._curProgress);
        }
    };
    Sound.prototype.onEnd = function () {
        if (this.loop) {
            this.play();
            this.emit(Index_1.ComponentEvent.LOOP, this);
        }
        else {
            this.stop();
            this.emit(Index_1.ComponentEvent.COMPLETE, this);
        }
    };
    Sound.prototype.onClick = function () {
        if (this.isPlaying) {
            this.stop();
        }
        else {
            this.play();
        }
    };
    return Sound;
}(InputBase_1.InputBase));
exports.Sound = Sound;


/***/ }),

/***/ "./src/display/SpriteAnimated.ts":
/*!***************************************!*\
  !*** ./src/display/SpriteAnimated.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
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
var SpriteAnimated = /** @class */ (function (_super) {
    __extends(SpriteAnimated, _super);
    function SpriteAnimated() {
        var _this = _super.call(this) || this;
        _this._lastAnimatedName = "";
        _this._curFrameNumber = 0;
        _this._setTimeoutId = -1;
        /**
         * 要播放的动作名
         */
        _this._animationName = "default";
        /**
         * 动画速度
         */
        _this._animationSpeed = 0.1;
        /**
         * 是的循环
         */
        _this._loop = false;
        _this._playCount = 0;
        /**
         * 循环次数
         */
        _this._loopCount = 0;
        /**
         * 是否播放中
         */
        _this._playing = false;
        /**
         * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
         */
        _this._anchorX = 0;
        /**
         * 锚点，调整位图的坐标中点 0-1, 可通过 TexturePacker输出sheet图并设置好 anchor
         */
        _this._anchorY = 0;
        _this._animatedSprites = new Map();
        return _this;
    }
    Object.defineProperty(SpriteAnimated.prototype, "animationName", {
        get: function () {
            return this._animationName;
        },
        set: function (value) {
            if (this._animationName == value) {
                return;
            }
            this._animationName = value;
            this.animatedNameSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            this._src = value;
            if (value === undefined) {
                this.releaseAnimate();
            }
            else {
                this.srcSystem();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "animationSpeed", {
        get: function () {
            return this._animationSpeed;
        },
        set: function (value) {
            this._animationSpeed = value;
            this.attribSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "loop", {
        get: function () {
            return this._loop;
        },
        set: function (value) {
            this._loop = value;
            this.attribSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "loopCount", {
        get: function () {
            return this._loopCount;
        },
        set: function (value) {
            this._loopCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "playing", {
        get: function () {
            return this._playing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "anchorX", {
        get: function () {
            return this._anchorX;
        },
        set: function (value) {
            this._anchorX = value;
            this.attribSystem();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "anchorY", {
        get: function () {
            return this._anchorY;
        },
        set: function (value) {
            this._anchorY = value;
            this.attribSystem();
        },
        enumerable: true,
        configurable: true
    });
    /** 跳转到第N帧并播放 */
    SpriteAnimated.prototype.gotoAndPlay = function (frameNumber) {
        this._curFrameNumber = frameNumber;
        this._playing = true;
        this.playSystem();
    };
    /** 跳转到第N帧并停止 */
    SpriteAnimated.prototype.gotoAndStop = function (frameNumber) {
        this._curFrameNumber = frameNumber;
        this._playing = false;
        this.playSystem();
    };
    /** 停止 */
    SpriteAnimated.prototype.stop = function () {
        this._playCount = 0;
        this._curFrameNumber = 0;
        this._playing = false;
        this.playSystem();
    };
    /** 播放 */
    SpriteAnimated.prototype.play = function () {
        this._playCount = 0;
        this._curFrameNumber = 0;
        this._playing = true;
        this.playSystem();
    };
    Object.defineProperty(SpriteAnimated.prototype, "autoPlay", {
        get: function () {
            return this._playing;
        },
        set: function (value) {
            this._playing = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimated.prototype, "isPlay", {
        set: function (value) {
            if (value) {
                this.play();
            }
            else {
                this.stop();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 添加动画
     */
    SpriteAnimated.prototype.addAnimated = function (animationName, textures) {
        var sp = this._animatedSprites.get(animationName);
        if (sp) {
            if (sp.parent)
                sp.parent.removeChild(sp);
            sp.removeAllListeners();
            sp.destroy();
        }
        this._animatedSprites.set(animationName, new PIXI.AnimatedSprite(textures));
    };
    SpriteAnimated.prototype.release = function () {
        if (this._setTimeoutId) {
            clearTimeout(this._setTimeoutId);
        }
        _super.prototype.release.call(this);
        this.releaseAnimate();
        this.src = undefined;
    };
    SpriteAnimated.prototype.releaseAnimate = function () {
        this._animatedSprites.forEach(function (element) {
            if (element.parent) {
                element.parent.removeChild(element);
            }
            element.removeAllListeners();
            element.destroy();
        });
        this._animatedSprites.clear();
    };
    SpriteAnimated.prototype.srcSystem = function () {
        this.releaseAnimate();
        var src = Utils_1.getSheet(this.src);
        if (src) {
            if (Array.isArray(src)) {
                var textures_1 = [];
                src.forEach(function (value) {
                    textures_1.push(Utils_1.getTexture(value));
                });
                this.addAnimated("default", textures_1);
            }
            else {
                for (var key in src.animations) {
                    this.addAnimated(key, src.animations[key]);
                }
            }
            this.animatedNameSystem();
        }
    };
    SpriteAnimated.prototype.animatedNameSystem = function () {
        var _this = this;
        if (this._animatedSprites.size == 0) {
            return;
        }
        if (this.animationName === this._lastAnimatedName) {
            return;
        }
        var animatedSp = this._animatedSprites.get(this.animationName);
        if (animatedSp == undefined) {
            Utils_1.log("Warning SpriteAnimated -> _animatedSprites[" + this.animationName + "] == undefined");
            return;
        }
        var lastAnimated = this._animatedSprites.get(this._lastAnimatedName);
        animatedSp.onLoop = function () {
            _this.emit(Index_1.ComponentEvent.LOOP, _this);
            _this._playCount++;
            if (_this._loopCount !== 0 && _this._playCount >= _this._loopCount) {
                _this.stop();
            }
        };
        animatedSp.onComplete = function () {
            _this.emit(Index_1.ComponentEvent.COMPLETE, _this);
        };
        if (animatedSp.parent == undefined) {
            clearTimeout(this._setTimeoutId);
            this._setTimeoutId = setTimeout(function () {
                //绘制会闪烁，与下一帧渲染有关，先临时解决，设置setTimeout
                _this.container.addChild(animatedSp);
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
    };
    SpriteAnimated.prototype.playSystem = function () {
        var animatedSp = this._animatedSprites.get(this.animationName);
        if (animatedSp) {
            if (this.playing) {
                animatedSp.gotoAndPlay(this._curFrameNumber);
            }
            else {
                animatedSp.gotoAndStop(this._curFrameNumber);
            }
        }
    };
    SpriteAnimated.prototype.attribSystem = function () {
        var animatedSp = this._animatedSprites.get(this.animationName);
        if (animatedSp) {
            animatedSp.loop = this.loop;
            animatedSp.animationSpeed = this.animationSpeed;
            animatedSp.anchor.set(this.anchorX, this.anchorY);
        }
    };
    return SpriteAnimated;
}(DisplayObject_1.DisplayObject));
exports.SpriteAnimated = SpriteAnimated;


/***/ }),

/***/ "./src/display/TextInput.ts":
/*!**********************************!*\
  !*** ./src/display/TextInput.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlInput_1 = __webpack_require__(/*! ./private/HtmlInput */ "./src/display/private/HtmlInput.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var InputBase_1 = __webpack_require__(/*! ./private/InputBase */ "./src/display/private/InputBase.ts");
var Image_1 = __webpack_require__(/*! ./Image */ "./src/display/Image.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 文本输入
 *
 * @example let textInput = new gui.TextInput(true|false);//单行或多行
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTextInput
 */
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(multiline) {
        if (multiline === void 0) { multiline = false; }
        var _this = _super.call(this) || this;
        _this._oldState = "";
        _this._resolution = 1;
        _this._previous = {};
        /**
         * 预览文字的样式
         */
        _this.placeholderColor = 0xa9a9a9;
        _this._domVisible = true;
        _this.state = 'DEFAULT';
        /**
         * 预览文字
         */
        _this._placeholder = '';
        /**
         * 设置最大可输入
         */
        _this._maxLength = 99999;
        /**
         * 状态展示
        */
        _this.img = new Image_1.Image();
        _this._inputStyle = Object.assign({
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
        _this.htmlInputShared = new HtmlInput_1.default(_this._inputStyle.multiline);
        _this.htmlInputShared.setStyle(_this._inputStyle);
        _this.htmlInputShared.on("input" /* input */, _this._onInputInput, _this);
        _this.htmlInputShared.on('focus', _this._onFocused, _this);
        _this.htmlInputShared.on('blur', _this._onBlurred, _this);
        _this.img.fillMode = "scale";
        _this.img.scale9Grid = [3, 3, 3, 3];
        _this.addChild(_this.img);
        _this._textHitbox = new PIXI.Graphics();
        _this._textHitbox.name = "_textHitbox";
        _this._textHitbox.alpha = 0;
        _this._textHitbox.interactive = true;
        _this._textHitbox.cursor = 'text';
        _this._textHitbox.on('pointerdown', _this._ontextFocus, _this);
        _this.container.addChild(_this._textHitbox);
        _this._textMask = new PIXI.Graphics();
        _this._textMask.name = "_textMask";
        _this.container.addChild(_this._textMask);
        _this._text = new PIXI.Text('', {});
        _this._text.name = "_text";
        _this._text.visible = false;
        _this.container.addChild(_this._text);
        _this._text.mask = _this._textMask;
        _this._domVisible = false;
        _this.container.interactiveChildren = true;
        _this.on(Index_1.ComponentEvent.STATE_CHANGE, _this.onStateChange, _this);
        _this.container.isEmitRender = false;
        _this.container.on("renderChange", _this.updateSystem, _this);
        return _this;
    }
    Object.defineProperty(TextInput.prototype, "text", {
        /**
         * 设置文本
         */
        get: function () {
            return this._text.text;
        },
        set: function (value) {
            this._text.text = value;
            this.container.isEmitRender = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
            this.container.isEmitRender = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "maxLength", {
        get: function () {
            return this._maxLength;
        },
        set: function (value) {
            this._maxLength = value;
            this.container.isEmitRender = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "restrict", {
        get: function () {
            return this._restrict;
        },
        set: function (value) {
            this._restrict = value;
            this.container.isEmitRender = true;
        },
        enumerable: true,
        configurable: true
    });
    // GETTERS & SETTERS
    TextInput.prototype.updateSystem = function (renderer) {
        if (renderer === undefined) {
            return;
        }
        var htmlInputShared = this.htmlInputShared;
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
    };
    /**
     * 设置焦点
     */
    TextInput.prototype.focus = function () {
        this.htmlInputShared.focus();
    };
    /**
     * 失去焦点
     */
    TextInput.prototype.blur = function () {
        this.htmlInputShared.blur();
    };
    /**
     * 设置css style样式
     * @param key 健
     * @param value 值
     */
    TextInput.prototype.setInputStyle = function (key, value) {
        if (key === "fontSize") {
            value = value + "px";
        }
        if (key === "color") {
            value = "#" + Utils_1.componentToHex(value);
        }
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key, value);
    };
    TextInput.prototype.onStateChange = function (ui, state) {
        if (this._oldState == state) {
            return;
        }
        if (!this.enabled) {
            this.currentState = "disabled";
        }
        this._oldState = state;
        var img = this.img;
        img.src = this[state];
    };
    // SETUP
    TextInput.prototype._onInputInput = function () {
        this._updateSubstitution();
    };
    TextInput.prototype._onFocused = function () {
        this._setState('FOCUSED');
    };
    TextInput.prototype._onBlurred = function () {
        this._setState('DEFAULT');
    };
    TextInput.prototype._setState = function (state) {
        this.state = state;
        this._updateSubstitution();
    };
    TextInput.prototype._updateSubstitution = function () {
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
    };
    // RENDER & UPDATE
    // for pixi v5
    TextInput.prototype.render = function (renderer) {
        this._renderInternal(renderer);
    };
    TextInput.prototype._renderInternal = function (renderer) {
        this._resolution = renderer.resolution;
        this._lastRenderer = renderer;
        this._canvasBounds = this._getCanvasBounds();
        if (this._needsUpdate()) {
            this._updateSubstitution();
        }
    };
    TextInput.prototype._updateDOMInput = function () {
        if (!this._canvasBounds)
            return;
        var cb = this._canvasBounds;
        var transform = this._pixiMatrixToCSS(this._getDOMRelativeWorldTransform());
        this.htmlInputShared.updatePostion(cb.top, cb.left, transform, this.container.worldAlpha);
        this.htmlInputShared.visible = this.container.worldVisible && this._domVisible;
        this._previous.canvasBounds = this._canvasBounds;
        this._previous.worldTransform = this.container.worldTransform.clone();
        this._previous.worldAlpha = this.container.worldAlpha;
        this._previous.worldVisible = this.container.worldVisible;
    };
    // STATE COMPAIRSON (FOR PERFORMANCE BENEFITS)
    TextInput.prototype._needsUpdate = function () {
        return (!this._comparePixiMatrices(this.container.worldTransform, this._previous.worldTransform)
            || !this._compareClientRects(this._canvasBounds, this._previous.canvasBounds)
            || this.container.worldAlpha != this._previous.worldAlpha
            || this.container.worldVisible != this._previous.worldVisible);
    };
    TextInput.prototype._updatetext = function () {
        var padding = this._derivetextPadding();
        var inputBounds = this.htmlInputShared.getDOMInputBounds();
        this._text.style = this._derivetextStyle();
        this._text.style.padding = Math.max.apply(Math, padding);
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
    };
    TextInput.prototype._ontextFocus = function () {
        this.htmlInputShared.visible = true;
        //sometimes the input is not being focused by the mouseclick
        setTimeout(this._ensureFocus.bind(this), 10);
    };
    TextInput.prototype._ensureFocus = function () {
        if (!this._hasFocus())
            this.focus();
    };
    TextInput.prototype._derivetextStyle = function () {
        var style = new PIXI.TextStyle();
        for (var key in this._inputStyle) {
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
    };
    TextInput.prototype._derivetextPadding = function () {
        var indent = this._inputStyle.textIndent ? parseFloat(this._inputStyle.textIndent) : 0;
        if (this._inputStyle.padding && this._inputStyle.padding.length > 0) {
            var components = this._inputStyle.padding.trim().split(' ');
            if (components.length == 1) {
                var padding = parseFloat(components[0]);
                return [padding, padding, padding, padding + indent];
            }
            else if (components.length == 2) {
                var paddingV = parseFloat(components[0]);
                var paddingH = parseFloat(components[1]);
                return [paddingV, paddingH, paddingV, paddingH + indent];
            }
            else if (components.length == 4) {
                var padding = components.map(function (component) {
                    return parseFloat(component);
                });
                padding[3] += indent;
                return padding;
            }
        }
        return [0, 0, 0, indent];
    };
    TextInput.prototype._derivetextText = function () {
        return this.htmlInputShared.value.length === 0 ? this.placeholder : this.htmlInputShared.value;
    };
    // private _updateFontMetrics() {
    //     const style = this._derivetextStyle();
    //     const font = style.toFontString();
    //     this._fontMetrics = PIXI.TextMetrics.measureFont(font);
    // }
    // HELPER FUNCTIONS
    TextInput.prototype._hasFocus = function () {
        return document.activeElement === this.htmlInputShared.domInput;
    };
    TextInput.prototype._getCanvasBounds = function () {
        if (this._lastRenderer) {
            var rect = this._lastRenderer.view.getBoundingClientRect();
            var bounds = { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
            bounds.left += window.scrollX;
            bounds.top += window.scrollY;
            return bounds;
        }
        return undefined;
    };
    TextInput.prototype._getDOMRelativeWorldTransform = function () {
        if (this._lastRenderer) {
            var canvasBounds = this._lastRenderer.view.getBoundingClientRect();
            var matrix = this.container.worldTransform.clone();
            matrix.scale(this._resolution, this._resolution);
            matrix.scale(canvasBounds.width / this._lastRenderer.width, canvasBounds.height / this._lastRenderer.height);
            return matrix;
        }
    };
    TextInput.prototype._pixiMatrixToCSS = function (m) {
        return 'matrix(' + [m.a, m.b, m.c, m.d, m.tx, m.ty].join(',') + ')';
    };
    TextInput.prototype._comparePixiMatrices = function (m1, m2) {
        if (!m1 || !m2)
            return false;
        return (m1.a == m2.a
            && m1.b == m2.b
            && m1.c == m2.c
            && m1.d == m2.d
            && m1.tx == m2.tx
            && m1.ty == m2.ty);
    };
    TextInput.prototype._compareClientRects = function (r1, r2) {
        if (!r1 || !r2)
            return false;
        return (r1.left == r2.left
            && r1.top == r2.top
            && r1.width == r2.width
            && r1.height == r2.height);
    };
    TextInput.prototype.release = function () {
        _super.prototype.release.call(this);
        this.container.removeChild(this._text);
        this.container.removeChild(this._textHitbox);
        this.img.release();
        this._text.destroy();
        this._textHitbox && this._textHitbox.destroy();
        this.htmlInputShared.release();
        this.container.off("renderChange", this.updateSystem, this);
        this.offAll(Index_1.ComponentEvent.STATE_CHANGE);
    };
    return TextInput;
}(InputBase_1.InputBase));
exports.TextInput = TextInput;


/***/ }),

/***/ "./src/display/private/HtmlInput.ts":
/*!******************************************!*\
  !*** ./src/display/private/HtmlInput.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 私有的，由于PIXIJS不支持文本输入，这里以HTML方式实现
 */
var HtmlInput = /** @class */ (function (_super) {
    __extends(HtmlInput, _super);
    function HtmlInput(multiline) {
        var _this = _super.call(this) || this;
        _this._selection = [0, 0];
        _this._restrict_value = '';
        console.log("创建HtmlInput");
        _this._domInput = _this.addDom(multiline);
        _this.visible = false;
        document.body.appendChild(_this._domInput);
        return _this;
    }
    Object.defineProperty(HtmlInput.prototype, "domInput", {
        get: function () {
            return this._domInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlInput.prototype, "visible", {
        get: function () {
            if (this._domInput.style.display === 'block')
                return true;
            return false;
        },
        set: function (value) {
            this._domInput.style.display = value ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlInput.prototype, "value", {
        get: function () {
            return this._domInput.value;
        },
        set: function (value) {
            this._domInput.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlInput.prototype, "placeholder", {
        set: function (value) {
            this._domInput.placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlInput.prototype, "disabled", {
        set: function (value) {
            this._domInput.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlInput.prototype, "maxlength", {
        get: function () {
            return this._domInput.maxLength;
        },
        set: function (value) {
            this._domInput.maxLength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlInput.prototype, "restrict", {
        /* 输入郑泽斌表达式 */
        get: function () {
            return this._restrictRegex;
        },
        set: function (regex) {
            if (regex === undefined) {
                return;
            }
            if (regex instanceof RegExp) {
                var str = regex.toString().slice(1, -1);
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
        },
        enumerable: true,
        configurable: true
    });
    HtmlInput.prototype.setStyle = function (style) {
        for (var key in style) {
            this._domInput.style[key] = style[key];
        }
        //this._domInput.setAttribute("style", stylestr);
    };
    HtmlInput.prototype.setStyleValue = function (key, value) {
        this._domInput.style[key] = value;
    };
    HtmlInput.prototype.select = function () {
        this._domInput.select();
    };
    /** 测量，需要对象添加到body中 */
    HtmlInput.prototype.getDOMInputBounds = function () {
        var org_transform = this._domInput.style.transform;
        var org_display = this._domInput.style.display;
        this._domInput.style.transform = '';
        this._domInput.style.display = 'block';
        var bounds = this._domInput.getBoundingClientRect();
        this._domInput.style.transform = org_transform;
        this._domInput.style.display = org_display;
        return bounds;
    };
    HtmlInput.prototype.updatePostion = function (top, left, transform, opacity) {
        this._domInput.style.top = top + 'px';
        this._domInput.style.left = left + 'px';
        this._domInput.style.transform = transform;
        if (opacity)
            this._domInput.style.opacity = opacity.toString();
    };
    HtmlInput.prototype.addDom = function (multiline) {
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
    };
    HtmlInput.prototype.removeDom = function () {
        if (this._domInput) {
            document.body.removeChild(this._domInput);
        }
    };
    HtmlInput.prototype.release = function () {
        this.removeDom();
        this.removeEvent();
        this.removeAllListeners();
    };
    HtmlInput.prototype.addEvent = function () {
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
    };
    HtmlInput.prototype.removeEvent = function () {
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
    };
    HtmlInput.prototype._applyRestriction = function () {
        if (this._restrictRegex) {
            if (this._restrictRegex.test(this.value)) {
                this._restrict_value = this.value;
            }
            else {
                this.value = this._restrict_value;
                this._domInput.setSelectionRange(this._selection[0], this._selection[1]);
            }
        }
    };
    HtmlInput.prototype._onInputKeyDown = function (e) {
        this._selection = [
            this._domInput.selectionStart || 0,
            this._domInput.selectionEnd || 0
        ];
        this.emit("keydown" /* keydown */, this, e.keyCode);
        //e.preventDefault();
    };
    HtmlInput.prototype._onInputInput = function (e) {
        if (e.data != null) {
            if (this._restrictRegex)
                this._applyRestriction();
        }
        this.emit("input" /* input */, this.value);
        e.preventDefault();
    };
    HtmlInput.prototype._onInputKeyUp = function (e) {
        this.emit("keyup" /* keyup */, this.value);
        e.preventDefault();
    };
    HtmlInput.prototype._onFocused = function (e) {
        this.emit('focus');
        e.preventDefault();
    };
    HtmlInput.prototype._onBlurred = function (e) {
        this.emit('blur');
        e.preventDefault();
    };
    HtmlInput.prototype.focus = function () {
        document.body.removeChild(this._domInput);
        document.body.appendChild(this._domInput);
        this._domInput.focus();
    };
    HtmlInput.prototype.blur = function () {
        this._domInput.blur();
    };
    return HtmlInput;
}(PIXI.utils.EventEmitter));
exports.default = HtmlInput;


/***/ }),

/***/ "./src/display/private/InputBase.ts":
/*!******************************************!*\
  !*** ./src/display/private/InputBase.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = __webpack_require__(/*! ../../core/DisplayObject */ "./src/core/DisplayObject.ts");
var Index_1 = __webpack_require__(/*! ../../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 输入对象的基础类
 */
var InputBase = /** @class */ (function (_super) {
    __extends(InputBase, _super);
    function InputBase() {
        var _this = _super.call(this) || this;
        _this.clickEvent = new Index_1.ClickEvent(_this, true);
        _this._currentState = "up";
        _this._focused = false;
        _this._useTab = true;
        _this._usePrev = true;
        _this._useNext = true;
        _this._down = false;
        //this.container.interactive = true;
        _this.container.interactiveChildren = false;
        _this.on(Index_1.TouchMouseEvent.onMove, _this.onMove, _this);
        _this.on(Index_1.TouchMouseEvent.onHover, _this.onHover, _this);
        _this.on(Index_1.TouchMouseEvent.onPress, _this.onPress, _this);
        _this.on(Index_1.TouchMouseEvent.onClick, _this.onClick, _this);
        return _this;
    }
    ;
    Object.defineProperty(InputBase.prototype, "currentState", {
        get: function () {
            return this._currentState;
        },
        set: function (value) {
            if (this._currentState == value) {
                return;
            }
            this._currentState = value;
            this.emit(Index_1.ComponentEvent.STATE_CHANGE, this, value);
        },
        enumerable: true,
        configurable: true
    });
    InputBase.prototype.onMove = function () {
        if (this._down) {
            return;
        }
        this.currentState = "move";
    };
    //e: InteractionEvent,thisObj: DisplayObject,over: boolean
    InputBase.prototype.onHover = function () {
        this.currentState = "up";
    };
    InputBase.prototype.onPress = function (e, thisObj, isPress) {
        this._down = isPress;
        if (isPress) {
            this.focus();
            this.currentState = "down";
        }
        else {
            this.currentState = "up";
        }
    };
    InputBase.prototype.onClick = function () {
        //this.currentState = "up";
    };
    InputBase.prototype.keyDownEvent = function (event) {
        var e = event;
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
    };
    InputBase.prototype.documentMouseDown = function () {
        if (this.currentState !== "down") {
            this.blur();
        }
    };
    InputBase.prototype._bindEvents = function () {
        if (this.stage) {
            this.stage.on("pointerdown", this.documentMouseDown, this);
            this.keyDownEventBind = this.keyDownEvent.bind(this);
            document.addEventListener("keydown", this.keyDownEventBind);
        }
    };
    InputBase.prototype._clearEvents = function () {
        if (this.stage) {
            this.stage.off("pointerdown", this.documentMouseDown, this);
            document.removeEventListener("keydown", this.keyDownEventBind);
        }
    };
    InputBase.prototype.focus = function () {
        if (!this._focused) {
            this._focused = true;
            this._bindEvents();
            Index_1.InputController.set(this);
            this.emit("focusChanged", true);
            this.emit("focus");
        }
    };
    InputBase.prototype.blur = function () {
        if (this._focused) {
            Index_1.InputController.clear();
            this._focused = false;
            this._clearEvents();
            this.emit("focusChanged", false);
            this.emit("blur");
        }
    };
    InputBase.prototype.release = function () {
        _super.prototype.release.call(this);
        this.off(Index_1.TouchMouseEvent.onMove, this.onMove, this);
        this.off(Index_1.TouchMouseEvent.onHover, this.onHover, this);
        this.off(Index_1.TouchMouseEvent.onPress, this.onPress, this);
        this.off(Index_1.TouchMouseEvent.onClick, this.onClick, this);
        if (this.keyDownEventBind)
            document.removeEventListener("keydown", this.keyDownEventBind);
        if (this.documentMouseDown && this.stage)
            this.stage.off("pointerdown", this.documentMouseDown, this);
    };
    InputBase.prototype.setTabIndex = function (index, group) {
        this._tabIndex = index;
        this._tabGroup = group;
        if (index !== undefined && group !== undefined) {
            Index_1.InputController.registrer(this, index, group);
        }
    };
    return InputBase;
}(DisplayObject_1.DisplayObject));
exports.InputBase = InputBase;


/***/ }),

/***/ "./src/enum/FollowLineEnum.ts":
/*!************************************!*\
  !*** ./src/enum/FollowLineEnum.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
;


/***/ }),

/***/ "./src/enum/Index.ts":
/*!***************************!*\
  !*** ./src/enum/Index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FollowLineEnum = __webpack_require__(/*! ./FollowLineEnum */ "./src/enum/FollowLineEnum.ts");
exports.FollowLineEnum = FollowLineEnum;


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
 * 5. FollowLine 完成一次划线
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
var ComponentEvent = __webpack_require__(/*! ./ComponentEvent */ "./src/event/ComponentEvent.ts");
exports.ComponentEvent = ComponentEvent;
var InteractionEvent_1 = __webpack_require__(/*! ./InteractionEvent */ "./src/event/InteractionEvent.ts");
exports.InteractionEvent = InteractionEvent_1.InteractionEvent;
//import {KeyEvent} from "./KeyEvent";
var TouchMouseEvent_1 = __webpack_require__(/*! ./TouchMouseEvent */ "./src/event/TouchMouseEvent.ts");
exports.TouchMouseEvent = TouchMouseEvent_1.TouchMouseEvent;
var TweenEvent_1 = __webpack_require__(/*! ./TweenEvent */ "./src/event/TweenEvent.ts");
exports.TweenEvent = TweenEvent_1.TweenEvent;


/***/ }),

/***/ "./src/event/InteractionEvent.ts":
/*!***************************************!*\
  !*** ./src/event/InteractionEvent.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tempLocal = new PIXI.Point(0, 0);
/**
 * 事件的基础类
 *
 * 触摸或鼠标操作事件 可查看 -> TouchEventEnum.TouchEnum
 *
 * import InteractionEvent from "../interaction/InteractionEvent",
 */
var InteractionEvent = /** @class */ (function (_super) {
    __extends(InteractionEvent, _super);
    function InteractionEvent() {
        var _this = _super.call(this) || this;
        _this.local = tempLocal;
        return _this;
    }
    return InteractionEvent;
}(PIXI.interaction.InteractionEvent));
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
var TouchMouseEvent_1 = __webpack_require__(/*! ../event/TouchMouseEvent */ "./src/event/TouchMouseEvent.ts");
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
var ClickEvent = /** @class */ (function () {
    /**
     * ClickEvent 构造函数
     * @param obj 调用的显示对象
     * @param isOpenEmitEvent 是否开启事件派发，默认false，开启后，父类可以监听InteractionEvent下的TouchEvent
     * @param includeHover 是否监听鼠标移上与移出，默认true
     * @param rightMouseButton 是否开启鼠标右键点击，默认false
     * @param doubleClick 是否开启鼠标双击,默认false
     */
    function ClickEvent(obj, isOpenEmitEvent, includeHover, rightMouseButton, doubleClick) {
        this.id = 0;
        /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | gui.Interaction.TouchEvent */
        this.isOpenEmitEvent = false;
        /** 是否开启本地坐标转换，开启后，事件InteractionEvent中的localX localY为本地坐标，false情况下为0 */
        this.isOpenLocalPoint = false;
        this.localOffset = new PIXI.Point();
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
    ClickEvent.prototype.getTarget = function () {
        return this.obj;
    };
    ClickEvent.prototype.startEvent = function () {
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
    };
    /** 清除拖动 */
    ClickEvent.prototype.stopEvent = function () {
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
    };
    ClickEvent.prototype._onMouseDown = function (e) {
        this.setLocalPoint(e);
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
            var now = performance.now();
            if (now - this.time < 210) {
                this.onClick && this.onClick.call(this.obj, e, this.obj);
                this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onClick, e);
            }
            else {
                this.time = now;
            }
        }
        e.data.originalEvent.preventDefault();
    };
    ClickEvent.prototype.emitTouchEvent = function (event, e) {
        var _a;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this.isOpenEmitEvent) {
            e.type = event.toString();
            (_a = this.obj).emit.apply(_a, [e.type, e, this.obj].concat(args));
        }
    };
    ClickEvent.prototype._mouseUpAll = function (e) {
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
    };
    ClickEvent.prototype._onMouseUp = function (e) {
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
    };
    ClickEvent.prototype._onMouseUpOutside = function (e) {
        if (e.data.identifier !== this.id)
            return;
        this._mouseUpAll(e);
    };
    ClickEvent.prototype._onMouseOver = function (e) {
        if (!this.ishover) {
            this.ishover = true;
            this.obj.container.on("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.on("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, true);
            this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onHover, e, true);
        }
    };
    ClickEvent.prototype._onMouseOut = function (e) {
        if (this.ishover) {
            this.ishover = false;
            this.obj.container.off("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.off("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, false);
            this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onHover, e, false);
        }
    };
    ClickEvent.prototype._onMouseMove = function (e) {
        this.setLocalPoint(e);
        this.onMove && this.onMove.call(this.obj, e, this.obj);
        this.emitTouchEvent(TouchMouseEvent_1.TouchMouseEvent.onMove, e);
    };
    ClickEvent.prototype.setLocalPoint = function (e) {
        if (this.isOpenLocalPoint) {
            this.obj.container.toLocal(e.data.global, undefined, this.localOffset);
            e.local = this.localOffset;
        }
    };
    ClickEvent.prototype.remove = function () {
        this.stopEvent();
        this.onPress = undefined;
        this.onHover = undefined;
        this.onClick = undefined;
        this.onMove = undefined;
        this.obj.container.interactive = false;
    };
    return ClickEvent;
}());
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
    var index;
    for (var i = 0; i < exports._items.length; i++) {
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
    var item = null, index;
    var id = e.data.identifier;
    for (var i = 0; i < exports._items.length; i++) {
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
var DragEvent = /** @class */ (function () {
    function DragEvent(obj) {
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
    DragEvent.prototype.startEvent = function () {
        if (this.isStop) {
            this.obj.container.on("mousedown" /* mousedown */, this._onDragStart, this);
            this.obj.container.on("touchstart" /* touchstart */, this._onDragStart, this);
            this.isStop = false;
        }
    };
    DragEvent.prototype._onDragStart = function (e) {
        e.stopPropagation();
        this.id = e.data.identifier;
        this.onDragPress && this.onDragPress.call(this.obj, e, true, this);
        if (!this.bound && this.obj.parent && this.obj.stage) {
            var stage = this.obj.stage.container;
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
    };
    DragEvent.prototype._onDragMove = function (e) {
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
    };
    DragEvent.prototype._onDragEnd = function (e) {
        if (e.data.identifier !== this.id)
            return;
        if (this.bound && this.obj.stage) {
            var stage = this.obj.stage.container;
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
    };
    /** 清除拖动 */
    DragEvent.prototype.stopEvent = function () {
        if (this.bound && this.obj.stage) {
            var stage = this.obj.stage.container;
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
    };
    DragEvent.prototype.remove = function () {
        this.stopEvent();
        this.onDragPress = undefined;
        this.onDragEnd = undefined;
        this.onDragMove = undefined;
        this.onDragStart = undefined;
        this.obj.interactive = false;
    };
    return DragEvent;
}());
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
        var group = exports._GroupObject.get(ui.groupName);
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
        var group = exports._GroupObject.get(ui.groupName);
        if (group) {
            delete group[ui.uuid];
        }
        var isKey = false;
        for (var key in group) {
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
var ClickEvent_1 = __webpack_require__(/*! ./ClickEvent */ "./src/interaction/ClickEvent.ts");
exports.ClickEvent = ClickEvent_1.ClickEvent;
var DragDropController = __webpack_require__(/*! ./DragDropController */ "./src/interaction/DragDropController.ts");
exports.DragDropController = DragDropController;
var DragEvent_1 = __webpack_require__(/*! ./DragEvent */ "./src/interaction/DragEvent.ts");
exports.DragEvent = DragEvent_1.DragEvent;
var InputController = __webpack_require__(/*! ./InputController */ "./src/interaction/InputController.ts");
exports.InputController = InputController;
var MouseScrollEvent_1 = __webpack_require__(/*! ./MouseScrollEvent */ "./src/interaction/MouseScrollEvent.ts");
exports.MouseScrollEvent = MouseScrollEvent_1.MouseScrollEvent;
var InteractionEvent_1 = __webpack_require__(/*! ../event/InteractionEvent */ "./src/event/InteractionEvent.ts");
exports.InteractionEvent = InteractionEvent_1.InteractionEvent;
var TouchMouseEvent_1 = __webpack_require__(/*! ../event/TouchMouseEvent */ "./src/event/TouchMouseEvent.ts");
exports.TouchMouseEvent = TouchMouseEvent_1.TouchMouseEvent;
var ComponentEvent = __webpack_require__(/*! ../event/ComponentEvent */ "./src/event/ComponentEvent.ts");
exports.ComponentEvent = ComponentEvent;
var GroupController = __webpack_require__(/*! ./GroupController */ "./src/interaction/GroupController.ts");
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
var _currentItem;
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
    var groupName = tabGroup || "default";
    var items = exports.tabGroups[groupName];
    if (!items)
        items = exports.tabGroups[groupName] = [];
    var i = items.indexOf(item);
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
    var obj = _currentItem;
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
        var _tabGroup = _currentItem.attach._tabGroup;
        var i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length)
            i = 0;
        var obj = _tabGroup[i];
        if (obj.focus)
            obj.focus();
    }
}
exports.fireTab = fireTab;
/** 一般再按下键盘向下箭头执行 焦点获取与设置 */
function fireNext() {
    if (_currentItem) {
        var _tabGroup = _currentItem.attach._tabGroup;
        var i = _tabGroup.indexOf(_currentItem) + 1;
        if (i >= _tabGroup.length)
            i = _tabGroup.length - 1;
        var obj = _tabGroup[i];
        if (obj.focus)
            obj.focus();
    }
}
exports.fireNext = fireNext;
/** 一般再按下键盘向上箭头执行 焦点获取与设置 */
function firePrev() {
    if (_currentItem) {
        var _tabGroup = _currentItem.attach._tabGroup;
        var i = _tabGroup.indexOf(_currentItem) - 1;
        if (i < 0)
            i = 0;
        var obj = _tabGroup[i];
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
    var name = cb.checkGroup;
    if (name) {
        var group = exports._checkGroupObject.groups[name];
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
        var isKey = false;
        for (var key in exports._checkGroupObject.groups[cb.checkGroup]) {
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
        var group = exports._checkGroupObject.groups[cb.checkGroup];
        for (var val in group) {
            var b = group[val];
            if (b !== cb)
                b.checked = false;
        }
        exports._checkGroupObject.values[cb.checkGroup] = cb.uuid.toString();
    }
}
exports.updateCheckGroupSelected = updateCheckGroupSelected;
/** 获取分组中选中的checkbox值 */
function getCheckGroupSelectedValue(name) {
    var uuid = exports._checkGroupObject.values[name];
    if (uuid) {
        var cb = exports._checkGroupObject.groups[name][uuid.toString()];
        return cb.value;
    }
    return undefined;
}
exports.getCheckGroupSelectedValue = getCheckGroupSelectedValue;
/** 设置选中 */
function setCheckGroupSelectedValue(name, uuid) {
    var group = exports._checkGroupObject.groups[name];
    if (group) {
        var cb = group[uuid];
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
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
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
var MouseScrollEvent = /** @class */ (function () {
    /**
     *
     * @param obj 需要绑定的对象
     * @param preventDefault 是否组织系统默认的事件触发
     */
    function MouseScrollEvent(obj, preventDefault) {
        this.id = 0;
        this.delta = new PIXI.Point();
        this.isStop = true;
        this.obj = obj;
        this.preventDefault = preventDefault;
        obj.container.interactive = true;
        this.startEvent();
    }
    MouseScrollEvent.prototype.startEvent = function () {
        if (this.isStop) {
            this.obj.container.on("mouseover" /* mouseover */, this._onHover, this);
            this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
            this.isStop = false;
        }
    };
    MouseScrollEvent.prototype._onMouseScroll = function (_e) {
        _e;
        var e = _e;
        if (this.preventDefault)
            e.preventDefault();
        if (typeof e.deltaX !== "undefined")
            this.delta.set(e.deltaX, e.deltaY);
        else //Firefox{}
            this.delta.set(e.axis == 1 ? e.detail * 60 : 0, e.axis == 2 ? e.detail * 60 : 0);
        this.onMouseScroll && this.onMouseScroll.call(this.obj, e, this.delta);
    };
    //e?: interaction.InteractionEvent
    MouseScrollEvent.prototype._onHover = function () {
        if (this.mouseScrllBind === undefined) {
            this.id = Utils_1.uid();
            this.mouseScrllBind = this._onMouseScroll.bind(this);
            document.addEventListener("mousewheel", this.mouseScrllBind, { passive: false });
            document.addEventListener("DOMMouseScroll", this.mouseScrllBind, { passive: false });
        }
    };
    //e?: interaction.InteractionEvent
    MouseScrollEvent.prototype._onMouseOut = function () {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
    };
    MouseScrollEvent.prototype.stopEvent = function () {
        if (this.mouseScrllBind) {
            document.removeEventListener("mousewheel", this.mouseScrllBind);
            document.removeEventListener("DOMMouseScroll", this.mouseScrllBind);
            this.mouseScrllBind = undefined;
        }
        this.obj.container.removeListener('mouseover', this._onHover, this);
        this.obj.container.removeListener('mouseout', this._onMouseOut, this);
        this.isStop = true;
    };
    MouseScrollEvent.prototype.remove = function () {
        this.stopEvent();
    };
    return MouseScrollEvent;
}());
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
var UIKeys = __webpack_require__(/*! ../core/DisplayLayoutKeys */ "./src/core/DisplayLayoutKeys.ts");
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
    var str = value;
    var index = str.indexOf("%");
    if (index == -1) {
        return +str;
    }
    var percent = +str.substring(0, index);
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
    var values = target.$values;
    var parentWidth = target.parent ? target.parent.$values[UIKeys.width] : 1;
    var parentHeight = target.parent ? target.parent.$values[UIKeys.height] : 1;
    var hCenter = formatRelative(values[UIKeys.horizontalCenter], parentWidth * 0.5);
    var vCenter = formatRelative(values[UIKeys.verticalCenter], parentHeight * 0.5);
    var left = formatRelative(values[UIKeys.left], parentWidth || 1);
    var right = formatRelative(values[UIKeys.right], parentWidth);
    var top = formatRelative(values[UIKeys.top], parentHeight || 1);
    var bottom = formatRelative(values[UIKeys.bottom], parentHeight);
    var childWidth = unscaledWidth;
    var childHeight = unscaledHeight;
    if (!isNaN(left) && !isNaN(right)) {
        childWidth = parentWidth - right - left;
    }
    if (!isNaN(top) && !isNaN(bottom)) {
        childHeight = parentHeight - bottom - top;
    }
    target.setMeasuredSize(childWidth, childHeight);
    target.setActualSize(childWidth, childHeight);
    var childX = NaN;
    var childY = NaN;
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
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var CSSBasicLayout_1 = __webpack_require__(/*! ./CSSBasicLayout */ "./src/layout/CSSBasicLayout.ts");
function getColumnRowValue(gridTemplate, parentValue) {
    var list = [];
    var isInfinity = false;
    if (gridTemplate) {
        if (gridTemplate[0] === "repeat") {
            if (gridTemplate[1] === Infinity) {
                isInfinity = true;
                list.push(Utils_1.formatRelative(0, parentValue));
            }
            else {
                for (var i = 0; i < gridTemplate[1]; i++) {
                    list.push(Utils_1.formatRelative(gridTemplate[2], parentValue));
                }
            }
        }
        else {
            for (var i = 0; i < gridTemplate.length; i++) {
                list.push(Utils_1.formatRelative(gridTemplate[i], parentValue));
            }
        }
    }
    return { list: list, isInfinity: isInfinity };
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
    var rowHeightTotal = 0;
    var columnWidthTotal = 0;
    var style = target.style;
    var gridColumnGap = style.gridColumnGap || 0;
    var gridRowGap = style.gridRowGap || 0;
    var column = getColumnRowValue(style.gridTemplateColumns, target.parent.width);
    var row = getColumnRowValue(style.gridTemplateRows, target.parent.height);
    var child;
    var cloumnIndex = 0;
    var rowIndex = 0;
    var cloumnWidth = 0;
    var rowHeight = 0;
    var widthTotal = 0;
    for (var i = 0; i < target.uiChildren.length; i++) {
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
var CSSGridLayout_1 = __webpack_require__(/*! ./CSSGridLayout */ "./src/layout/CSSGridLayout.ts");
var CSSBasicLayout_1 = __webpack_require__(/*! ./CSSBasicLayout */ "./src/layout/CSSBasicLayout.ts");
exports.$TempRectangle = new PIXI.Rectangle();
function updateDisplayAlign(target, parentWidth, parentHeight, marginTop, marginLeft) {
    if (marginTop === void 0) { marginTop = 0; }
    if (marginLeft === void 0) { marginLeft = 0; }
    if (target.style == undefined) {
        return;
    }
    if (target.style.justifyContent == undefined && target.style.alignContent == undefined) {
        return;
    }
    var startX = 0;
    var startY = 0;
    var bounds = target.getPreferredBounds(exports.$TempRectangle);
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
        var pos = CSSBasicLayout_1.updateBasicDisplayList(target, unscaledWidth, unscaledHeight);
        //console.log(pos);
    }
    else if (target.style.display === "grid") {
        var size = CSSGridLayout_1.updateGridLayout(target);
        CSSBasicLayout_1.updateBasicDisplayList(target, size.width, size.height);
    }
    if (target.parent) {
        updateDisplayAlign(target, target.parent.width, target.parent.height, target.style.gridRowGap, target.style.gridColumnGap);
    }
    if (target.isContainer) {
        var bounds = target.getPreferredBounds(exports.$TempRectangle);
        var child = void 0;
        for (var i = 0; i < target.uiChildren.length; i++) {
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
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var DisplayObject_1 = __webpack_require__(/*! ../core/DisplayObject */ "./src/core/DisplayObject.ts");
/** ===================== background  ===================== */
function backgroundColor(target) {
    if (target.style == undefined) {
        return;
    }
    if (target.style.backgroundColor == undefined && target.$background == undefined) {
        return;
    }
    if (target.$background === undefined) {
        target.$background = new PIXI.Graphics();
        target.$background.name = "background";
        target.container.addChildAt(target.$background, 0);
    }
}
exports.backgroundColor = backgroundColor;
function backgroundPositionSize(target) {
    if (target.style == undefined) {
        return;
    }
    if (target.$background && target.$background.children.length > 0) {
        var sprite = target.$background.getChildAt(0);
        var style = target.style;
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
    var style = target.style;
    if (style.backgroundImage && target.$background) {
        target.$background.removeChildren();
        var backgroundImage_1;
        if (style.backgroundImage instanceof PIXI.Texture) {
            backgroundImage_1 = style.backgroundImage;
        }
        else if (typeof style.backgroundImage === "string") {
            backgroundImage_1 = Utils_1.getTexture(style.backgroundImage);
        }
        if (backgroundImage_1) {
            var sprite = void 0;
            if (style.backgroundRepeat === undefined) {
                style.backgroundRepeat = "no-repeat";
            }
            if (style.backgroundRepeat === "repeat") {
                sprite = new PIXI.TilingSprite(backgroundImage_1);
            }
            else {
                sprite = new PIXI.Sprite(backgroundImage_1);
            }
            target.$background.addChild(sprite);
            var maskGraphics = new PIXI.Graphics();
            target.$background.addChild(maskGraphics);
            target.$background.mask = maskGraphics;
        }
    }
}
exports.backgroundRepeat = backgroundRepeat;
function backgroundImage(target) {
    if (target.$background === undefined) {
        target.$background = new PIXI.Graphics();
        target.$background.name = "background";
        target.container.addChildAt(target.$background, 0);
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
    if (target.$mask) {
        var style = target.style;
        if (style.maskPosition === undefined) {
            return;
        }
        if (target.$mask instanceof DisplayObject_1.DisplayObject) {
            target.$mask.x = style.maskPosition[0];
            target.$mask.y = style.maskPosition[1];
        }
        else {
            target.$mask.position.set(style.maskPosition[0], style.maskPosition[1]);
        }
    }
}
exports.maskPosition = maskPosition;
function maskSize(target) {
    if (target.style == undefined) {
        return;
    }
    if (target.$mask) {
        var style = target.style;
        if (style.maskSize === undefined) {
            return;
        }
        target.$mask.width = style.maskSize[0];
        target.$mask.height = style.maskSize[1];
        if (target.$mask instanceof PIXI.Graphics) {
            //target.$mask.clone
        }
        if (!(target.$mask instanceof DisplayObject_1.DisplayObject))
            target.$mask.updateTransform();
    }
}
exports.maskSize = maskSize;
function maskImage(target) {
    if (target.style == undefined) {
        return;
    }
    target.container.mask = null;
    if (target.$mask && target.$mask.parent) {
        if (target.$mask instanceof DisplayObject_1.DisplayObject) {
            target.removeChild(target.$mask);
        }
        else {
            target.$mask.parent.removeChild(target.$mask);
        }
    }
    for (var i = 0; i < target.uiChildren.length; i++) {
        if (target.uiChildren[i].name == "maskImage") {
            target.removeChild(target.uiChildren[i]);
            break;
        }
    }
    target.$mask = undefined;
    var style = target.style;
    var container = target.container;
    var maskdisplay = Utils_1.getDisplayObject(style.maskImage, target);
    if (maskdisplay instanceof PIXI.Graphics) {
        target.$mask = maskdisplay;
        container.mask = target.$mask;
        container.addChild(target.$mask);
    }
    else if (maskdisplay instanceof DisplayObject_1.DisplayObject) {
        if (maskdisplay.maskSprite) {
            target.$mask = maskdisplay; //gui组件
            target.$mask.name = "maskImage";
            container.mask = maskdisplay.maskSprite() || null; //pixi组件
            if (maskdisplay.parent == undefined) {
                target.addChild(maskdisplay);
            }
        }
    }
    else {
        target.$mask = PIXI.Sprite.from(Utils_1.getTexture(style.maskImage));
        container.mask = target.$mask;
        container.addChild(target.$mask);
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
var CSSFunction = __webpack_require__(/*! ./CSSSSystem */ "./src/layout/CSSSSystem.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
function formatRelative(value) {
    if (value == undefined) {
        return { percent: NaN, value: NaN };
    }
    if (typeof value === "number") {
        return { percent: NaN, value: value };
    }
    var str = value;
    var index = str.indexOf("%");
    if (index == -1) {
        return { percent: NaN, value: +str };
    }
    var percent = +str.substring(0, index);
    return { percent: Math.min(percent * 0.01, 1), value: NaN };
}
/**
 * 组件样式表
 */
var CSSStyle = /** @class */ (function () {
    function CSSStyle(target) {
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
        this._textAlign = "center";
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
    CSSStyle.prototype.release = function () {
        this.parent.off(Index_1.ComponentEvent.RESIZE, this.onResize, this);
    };
    Object.defineProperty(CSSStyle.prototype, "display", {
        get: function () {
            return this._display;
        },
        set: function (value) {
            this._display = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "justifyContent", {
        get: function () {
            return this._justifyContent;
        },
        set: function (value) {
            this._justifyContent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "alignContent", {
        get: function () {
            return this._alignContent;
        },
        set: function (value) {
            this._alignContent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "gridTemplateColumns", {
        get: function () {
            return this._gridTemplateColumns;
        },
        set: function (value) {
            this._gridTemplateColumns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "gridColumnGap", {
        get: function () {
            return this._gridColumnGap;
        },
        set: function (value) {
            this._gridColumnGap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "gridTemplateRows", {
        get: function () {
            return this._gridTemplateRows;
        },
        set: function (value) {
            this._gridTemplateRows = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "gridRowGap", {
        get: function () {
            return this._gridRowGap;
        },
        set: function (value) {
            this._gridRowGap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "width", {
        /**
         * 表示显示对象的宽度，以像素为单位。
         * */
        get: function () {
            return this.parent.width;
        },
        set: function (value) {
            var relative = formatRelative(value);
            this.parent.width = relative.value;
            this.parent.percentWidth = relative.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "height", {
        /**
         * 表示显示对象的高度，以像素为单位。
         * */
        get: function () {
            return this.parent.height;
        },
        set: function (value) {
            var relative = formatRelative(value);
            this.parent.height = relative.value;
            this.parent.percentHeight = relative.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "minWidth", {
        /**
         * 设置元素的最小宽度。
         */
        get: function () {
            return this.parent.minWidth;
        },
        set: function (value) {
            this.parent.minWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "maxWidth", {
        /**
         * 设置元素的最大宽度。
         */
        get: function () {
            return this.parent.maxWidth;
        },
        set: function (value) {
            this.parent.maxWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "maxHeight", {
        /**
         * 设置元素的最小高度。
         */
        get: function () {
            return this.parent.maxHeight;
        },
        set: function (value) {
            this.parent.maxHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "minHeight", {
        /**
         * 设置元素的最大高度。
         * */
        get: function () {
            return this.parent.minHeight;
        },
        set: function (value) {
            this.parent.minHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "left", {
        /**
         * 设置定位元素左外边距边界与其容器左边界之间的偏移。
         * */
        get: function () {
            return this.parent.left;
        },
        set: function (value) {
            this.parent.left = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "top", {
        /**
         * 设置定位元素的上外边距边界与其容器上边界之间的偏移。
         * */
        get: function () {
            return this.parent.top;
        },
        set: function (value) {
            this.parent.top = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "right", {
        /**
         * 设置定位元素右外边距边界与其容器右边界之间的偏移。
         * */
        get: function () {
            return this.parent.right;
        },
        set: function (value) {
            this.parent.right = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "bottom", {
        /**
         * 设置定位元素下外边距边界与其容器下边界之间的偏移。
         * */
        get: function () {
            return this.parent.bottom;
        },
        set: function (value) {
            this.parent.bottom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "scaleX", {
        /**
         * 缩放
         * */
        get: function () {
            return this.parent.scaleX;
        },
        set: function (value) {
            this.parent.scaleX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "scaleY", {
        /**
         * 缩放
         * */
        get: function () {
            return this.parent.scaleY;
        },
        set: function (value) {
            this.parent.scaleY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "skewX", {
        /**
         * 设置元素水平拉伸扭曲（角度）。
         * */
        get: function () {
            return this.parent.skewX;
        },
        set: function (value) {
            this.parent.skewX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "skewY", {
        /**
         * 设置元素垂直拉伸扭曲（角度）。
         * */
        get: function () {
            return this.parent.skewY;
        },
        set: function (value) {
            this.parent.skewY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "rotate", {
        /**
         * 设置元素旋转 （角度）
        */
        get: function () {
            return this.parent.rotation;
        },
        set: function (value) {
            this.parent.rotation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "rotation", {
        /**
         * 设置元素旋转 （角度）
        */
        get: function () {
            return this.parent.rotation;
        },
        set: function (value) {
            this.parent.rotation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "pivotX", {
        /**
         * 轴点 像素值
         */
        get: function () {
            return this.parent.pivotX;
        },
        set: function (value) {
            this.parent.pivotX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "pivotY", {
        /**
         * 轴点 像素值
         */
        get: function () {
            return this.parent.pivotY;
        },
        set: function (value) {
            this.parent.pivotY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "tint", {
        /**
          * 调整元素的色调，取消设置0xFFFFFF
          */
        get: function () {
            return this.parent.tint;
        },
        set: function (value) {
            this.parent.tint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "alpha", {
        /**
         * 表示指定对象的 Alpha 透明度值。有效值为0（完全透明）～ 1（完全不透明）。
         * */
        get: function () {
            return this.parent.alpha;
        },
        set: function (value) {
            this.parent.alpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "visible", {
        /**
         * 显示对象是否可见
         * */
        get: function () {
            return this.parent.visible;
        },
        set: function (value) {
            this.parent.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "visibility", {
        get: function () {
            return this.parent.visible ? "visible" : "hidden";
        },
        set: function (value) {
            this.visible = value === "hidden" ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (value) {
            if (value === this.backgroundColor) {
                return;
            }
            this._backgroundColor = value;
            CSSFunction.backgroundColor(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "backgroundImage", {
        get: function () {
            return this._backgroundImage;
        },
        set: function (value) {
            this._backgroundImage = value;
            CSSFunction.backgroundImage(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "backgroundPositionX", {
        get: function () {
            return this._backgroundPositionX;
        },
        set: function (value) {
            this._backgroundPositionX = value;
            CSSFunction.backgroundPositionSize(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "backgroundPositionY", {
        get: function () {
            return this._backgroundPositionY;
        },
        set: function (value) {
            this._backgroundPositionY = value;
            CSSFunction.backgroundPositionSize(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "backgroundSize", {
        get: function () {
            return this._backgroundSize;
        },
        set: function (value) {
            this._backgroundSize = value;
            CSSFunction.backgroundPositionSize(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "backgroundRepeat", {
        get: function () {
            return this._backgroundRepeat;
        },
        set: function (value) {
            this._backgroundRepeat = value;
            CSSFunction.backgroundRepeat(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "maskImage", {
        get: function () {
            return this._maskImage;
        },
        set: function (value) {
            this._maskImage = value;
            CSSFunction.maskImage(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "maskPosition", {
        get: function () {
            return this._maskPosition;
        },
        set: function (value) {
            this._maskPosition = value;
            CSSFunction.maskPosition(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "maskSize", {
        get: function () {
            return this._maskSize;
        },
        set: function (value) {
            this._maskSize = value;
            CSSFunction.maskSize(this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        set: function (value) {
            if (value === this._filter) {
                return;
            }
            this._filter = value;
            if (value === undefined || value === 'none') {
                this.parent.container.filters = [];
                return;
            }
            var target = Utils_1.getStringFunctionParam(value);
            switch (target.key) {
                case "blur":
                    this.parent.filterBlur = target.value;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "cursor", {
        /**
         * 设置鼠标样式
         */
        get: function () {
            return this.parent.container.cursor;
        },
        set: function (value) {
            this.parent.container.cursor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            CSSFunction.color(this.parent, "color", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "letterSpacing", {
        get: function () {
            return this._letterSpacing;
        },
        set: function (value) {
            this._letterSpacing = value;
            CSSFunction.updateFontStyle(this.parent, "letterSpacing", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "wordWrap", {
        get: function () {
            return this._wordWrap;
        },
        set: function (value) {
            this._wordWrap = value;
            CSSFunction.updateFontStyle(this.parent, "wordWrap", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "wordWrapWidth", {
        get: function () {
            return this._wordWrapWidth;
        },
        set: function (value) {
            this._wordWrapWidth = value;
            CSSFunction.updateFontStyle(this.parent, "wordWrapWidth", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "textAlign", {
        get: function () {
            return this._textAlign;
        },
        set: function (value) {
            this._textAlign = value;
            CSSFunction.updateFontStyle(this.parent, "textAlign", value);
            CSSFunction.updateFontStyle(this.parent, "align", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "lineHeight", {
        get: function () {
            return this._lineHeight;
        },
        set: function (value) {
            this._lineHeight = value;
            CSSFunction.updateFontStyle(this.parent, "lineHeight", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "fontFamily", {
        get: function () {
            return this._fontFamily;
        },
        set: function (value) {
            this._fontFamily = value;
            CSSFunction.updateFontStyle(this.parent, "fontFamily", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "fontSize", {
        get: function () {
            return this._fontSize;
        },
        set: function (value) {
            this._fontSize = value;
            CSSFunction.updateFontStyle(this.parent, "fontSize", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "fontStyle", {
        get: function () {
            return this._fontStyle;
        },
        set: function (value) {
            this._fontStyle = value;
            CSSFunction.updateFontStyle(this.parent, "fontStyle", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "fontVariant", {
        get: function () {
            return this._fontVariant;
        },
        set: function (value) {
            this._fontVariant = value;
            CSSFunction.updateFontStyle(this.parent, "fontVariant", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "fontWeight", {
        get: function () {
            return this._fontWeight;
        },
        set: function (value) {
            this._fontWeight = value;
            CSSFunction.updateFontStyle(this.parent, "fontWeight", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "padding", {
        get: function () {
            return this._padding;
        },
        set: function (value) {
            this._padding = value;
            CSSFunction.updateFontStyle(this.parent, "padding", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (value) {
            this._stroke = value;
            CSSFunction.updateFontStyle(this.parent, "stroke", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "strokeThickness", {
        get: function () {
            return this._strokeThickness;
        },
        set: function (value) {
            this._strokeThickness = value;
            CSSFunction.updateFontStyle(this.parent, "strokeThickness", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "dropShadow", {
        get: function () {
            return this._dropShadow;
        },
        set: function (value) {
            this._dropShadow = value;
            CSSFunction.updateFontStyle(this.parent, "dropShadow", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "dropShadowAlpha", {
        get: function () {
            return this._dropShadowAlpha;
        },
        set: function (value) {
            this._dropShadowAlpha = value;
            CSSFunction.updateFontStyle(this.parent, "dropShadowAlpha", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "dropShadowAngle", {
        get: function () {
            return this._dropShadowAngle;
        },
        set: function (value) {
            this._dropShadowAngle = value;
            CSSFunction.updateFontStyle(this.parent, "dropShadowAngle", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "dropShadowBlur", {
        get: function () {
            return this._dropShadowBlur;
        },
        set: function (value) {
            this._dropShadowBlur = value;
            CSSFunction.updateFontStyle(this.parent, "dropShadowBlur", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "dropShadowColor", {
        get: function () {
            return this._dropShadowColor;
        },
        set: function (value) {
            this._dropShadowColor = value;
            CSSFunction.updateFontStyle(this.parent, "dropShadowColor", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "dropShadowDistance", {
        get: function () {
            return this._dropShadowDistance;
        },
        set: function (value) {
            this._dropShadowDistance = value;
            CSSFunction.updateFontStyle(this.parent, "dropShadowDistance", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSStyle.prototype, "breakWords", {
        get: function () {
            return this._breakWords;
        },
        set: function (value) {
            this._breakWords = value;
            CSSFunction.updateFontStyle(this.parent, "breakWords", value);
        },
        enumerable: true,
        configurable: true
    });
    CSSStyle.prototype.onResize = function () {
        var target = this.parent;
        if (target.width == 0 || target.height == 0) {
            return;
        }
        if (this.backgroundColor && target.$background) {
            var background = target.$background;
            //console.log("onResize backgroundColor",background.width , target.width ,background.height ,target.height)
            background.clear();
            background.beginFill(this.backgroundColor);
            background.drawRoundedRect(0, 0, target.width, target.height, 0);
            background.endFill();
        }
        if (target.$background && target.$background.mask) {
            //console.log("onResize backgroundColor mask",this.backgroundColor)
            var mask = target.$background.mask;
            mask.clear();
            mask.beginFill(this.backgroundColor);
            mask.drawRoundedRect(0, 0, target.width, target.height, 0);
            mask.endFill();
        }
    };
    return CSSStyle;
}());
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
        None: function (k) {
            return k;
        }
    },
    Quadratic: {
        In: function (k) {
            return Math.pow(k, 2);
        },
        Out: function (k) {
            return k * (2 - k);
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 2);
            }
            return -0.5 * (--k * (k - 2) - 1);
        }
    },
    Cubic: {
        In: function (k) {
            return Math.pow(k, 3);
        },
        Out: function (k) {
            return --k * k * k + 1;
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 3);
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        }
    },
    Quartic: {
        In: function (k) {
            return Math.pow(k, 4);
        },
        Out: function (k) {
            return 1 - --k * k * k * k;
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 4);
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        }
    },
    Quintic: {
        In: function (k) {
            return Math.pow(k, 5);
        },
        Out: function (k) {
            return --k * k * k * k * k + 1;
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 5);
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        }
    },
    Sinusoidal: {
        In: function (k) {
            return 1 - Math.cos((k * Math.PI) / 2);
        },
        Out: function (k) {
            return Math.sin((k * Math.PI) / 2);
        },
        InOut: function (k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
    },
    Exponential: {
        In: function (k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        Out: function (k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut: function (k) {
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
        In: function (k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out: function (k) {
            return Math.sqrt(1 - --k * k);
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
    },
    Elastic: {
        In: function (k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        },
        Out: function (k) {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (k) {
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
        In: function (k) {
            var s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        Out: function (k) {
            var s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut: function (k) {
            var s = 1.70158 * 1.525;
            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        }
    },
    Bounce: {
        In: function (k) {
            return 1 - exports.Easing.Bounce.Out(1 - k);
        },
        Out: function (k) {
            var x = 2.75;
            var y = 7.5625;
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
        InOut: function (k) {
            if (k < 0.5) {
                return exports.Easing.Bounce.In(k * 2) * 0.5;
            }
            return exports.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        }
    },
    Stepped: {
        steps: function (steps) { return function (k) { return ((k * steps) | 0) / steps; }; }
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Ticker_1 = __webpack_require__(/*! ../core/Ticker */ "./src/core/Ticker.ts");
var ObjectPool_1 = __webpack_require__(/*! ../utils/ObjectPool */ "./src/utils/ObjectPool.ts");
var Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
var Easing_1 = __webpack_require__(/*! ./Easing */ "./src/tween/Easing.ts");
/**
 * @private
 */
var Node = /** @class */ (function () {
    function Node(node) {
        this.default = 0;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.startFrame = 0;
        this.endFrame = 0;
        this.prevTime = 0;
        this.parent = node;
    }
    Node.prototype.release = function () {
        this.parent = undefined;
        this.easing = undefined;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
        this.endFrame = 0;
        this.prevTime = 0;
    };
    Node.prototype.load = function () { };
    Node.prototype.destroy = function () { };
    return Node;
}());
/**
 * 基于帧的时间轴控制类
 *
 * @example let timeline = new gui.Timeline();
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTimeLine
 */
var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline() {
        var _this = _super.call(this) || this;
        _this.id = -1;
        _this._frames = new Array();
        _this._frameCount = 0;
        _this._elapsedMS = 16.66; //1000/60
        _this._prevTime = 0;
        _this._isStop = false;
        _this._lastNode = new Map();
        _this._isSetDefault = false;
        _this.loop = false;
        return _this;
    }
    Timeline.prototype.setDefault = function (object, _duration, fps) {
        this._object = object;
        this._elapsedMS = 1000 / fps;
        var frameCount = Math.round(_duration / this._elapsedMS);
        this._frameCount = frameCount;
        var frames = this._frames;
        while (frames && frames.length > frameCount) {
            frames.pop();
        }
        var i = frames.length === 0 ? 0 : frames.length;
        for (i; i <= frameCount; i++) {
            if (frames[i] === undefined)
                frames[i] = new Map();
        }
        this._isSetDefault = true;
        return this;
    };
    Timeline.prototype.addProperty = function (property, value, endFrame, easing) {
        if (endFrame > this._frameCount) {
            throw "Error Timeline.addProperty overflow frame";
        }
        var parentNode = this._lastNode.get(property);
        var node = ObjectPool_1.objectPoolShared.pop(Node);
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
        for (var i = node.startFrame; i <= endFrame; i++) {
            this._frames[i].set(property, node);
        }
        return this;
    };
    Timeline.prototype.stop = function () {
        this._isStop = true;
    };
    Timeline.prototype.play = function () {
        this._isStop = false;
    };
    Timeline.prototype.gotoAndPlay = function (frame) {
        this.goto(frame, false);
    };
    Timeline.prototype.gotoAndStop = function (frame) {
        this.goto(frame, true);
    };
    Timeline.prototype.seekLastNode = function (value, frame) {
        if (value.parent === undefined) {
            return value;
        }
        if (value.endFrame > frame) {
            this.seekLastNode(value.parent, frame);
        }
        return value;
    };
    Timeline.prototype.goto = function (frame, isStop) {
        var _this = this;
        var _a = this, _lastNode = _a._lastNode, _frames = _a._frames;
        _lastNode.forEach(function (value, key) {
            var node = _this.seekLastNode(value, frame);
            node.prevTime = node.duration;
            _this.updateobject(key, node);
        }, this);
        this._prevTime = frame * this._elapsedMS;
        var _loop_1 = function (i) {
            _frames[i].forEach(function (value, key) {
                if (i == frame) {
                    value.prevTime = (frame - value.startFrame) * _this._elapsedMS;
                    _this.updateobject(key, value);
                }
                else {
                    value.prevTime = 0;
                }
            }, this_1);
        };
        var this_1 = this;
        for (var i = frame; i < _frames.length; i++) {
            _loop_1(i);
        }
        this._isStop = isStop;
        if (!this._isStop) {
            this.load();
        }
    };
    Timeline.prototype.update = function (a, b, elapsedMS) {
        var _this = this;
        if (elapsedMS === void 0) { elapsedMS = 0; }
        if (this._isStop) {
            return;
        }
        var _prevTime = this._prevTime;
        var _a = this, _frames = _a._frames, _frameCount = _a._frameCount, _elapsedMS = _a._elapsedMS;
        var curFrame = Math.round(_prevTime / _elapsedMS);
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
        _frames[curFrame].forEach(function (value, key) {
            if (value.start !== value.end) {
                value.prevTime += elapsedMS;
                _this.updateobject(key, value);
            }
        }, this);
        this._prevTime = _prevTime;
        return true;
    };
    Timeline.prototype.updateobject = function (key, node) {
        var elapsed;
        if (!node.duration) {
            elapsed = 1;
        }
        else {
            elapsed = node.prevTime / node.duration;
            elapsed = elapsed > 1 ? 1 : elapsed;
        }
        var value = node.easing(elapsed);
        var start = node.start;
        var end = node.end;
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
    };
    Timeline.prototype.load = function () {
        if (!this._isSetDefault) {
            throw "Error Timeline.load undefined default";
        }
        Ticker_1.shared.removeUpdateEvent(this.update, this);
        Ticker_1.shared.addUpdateEvent(this.update, this);
    };
    Timeline.prototype.release = function () {
        Ticker_1.shared.removeUpdateEvent(this.update, this);
        this._frames.forEach(function (map) {
            map.forEach(function (value) {
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
    };
    return Timeline;
}(PIXI.utils.EventEmitter));
exports.Timeline = Timeline;


/***/ }),

/***/ "./src/tween/Tween.ts":
/*!****************************!*\
  !*** ./src/tween/Tween.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Easing_1 = __webpack_require__(/*! ./Easing */ "./src/tween/Easing.ts");
var Interpolation_1 = __webpack_require__(/*! ./private/Interpolation */ "./src/tween/private/Interpolation.ts");
var core_1 = __webpack_require__(/*! ./private/core */ "./src/tween/private/core.ts");
var constants_1 = __webpack_require__(/*! ./private/constants */ "./src/tween/private/constants.ts");
var TweenEvent_1 = __webpack_require__(/*! ../event/TweenEvent */ "./src/event/TweenEvent.ts");
var defaultEasing = Easing_1.Easing.Linear.None;
/**
 * 缓动动画
 *
 * @example let tween = new gui.Tween(myObject).to({width:'300px'}, 2000).start()
 *
 * @namespace gui
 *
 * @link https://vipkid-edu.github.io/vf-gui-docs/play/#example/0.7.0/TestTween
 */
var Tween = /** @class */ (function (_super) {
    __extends(Tween, _super);
    function Tween(object) {
        var _this = _super.call(this) || this;
        _this._valuesEnd = null;
        _this._duration = 1000;
        _this._easingFunction = defaultEasing;
        _this._easingReverse = defaultEasing;
        _this._startTime = 0;
        _this._delayTime = 0;
        _this._repeat = 0;
        _this._initRepeat = 0;
        _this._isPlaying = false;
        _this._yoyo = false;
        _this._reversed = false;
        _this._onStartCallbackFired = false;
        _this._isFinite = true;
        _this._prevTime = 0;
        _this._rendered = false;
        _this._reverseDelayTime = 0;
        /** 附加数据 */
        _this.data = {};
        _this.id = Utils_1.uid();
        _this.object = object;
        _this._valuesStart = Array.isArray(object) ? [] : {};
        _this._interpolationFunction = Interpolation_1.Interpolation.Linear;
        return _this;
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
    Tween.fromTo = function (object, to, duration) {
        var tween = new Tween(object).to(to, duration);
        return tween;
    };
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {TAny} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, 1000)
     * @memberof gui.Tween
     * @static
     */
    Tween.to = function (object, to, duration) {
        return Tween.fromTo(object, to, duration);
    };
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {TAny} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, 1000)
     * @memberof gui.Tween
     * @static
     */
    Tween.from = function (object, from, duration) {
        return Tween.fromTo(object, from, duration);
    };
    Object.defineProperty(Tween.prototype, "isPlaying", {
        /**
         * 是否在播放中
         * @return {boolean}
         * @example tween.isPlaying()
         * @memberof gui.Tween
         */
        get: function () {
            return this._isPlaying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tween.prototype, "isStarted", {
        /**
         * 是否开始播放
         * @return {boolean}
         * @example tween.isStarted()
         * @memberof gui.Tween
         */
        get: function () {
            return this._onStartCallbackFired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tween.prototype, "startTime", {
        /**
         * 获取动画的开始时间
         */
        get: function () {
            return this._startTime;
        },
        /**
         * 获取动画的开始时间
         */
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tween.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        /**
         * 设置缓动时长
         * @param {number} amount 持续的毫秒值
         * @example tween.duration(2000)
         * @memberof gui.Tween
         * @deprecated 不推荐使用这个方法，内部使用
         * @private
         */
        set: function (amount) {
            this._duration = typeof amount === 'function' ? amount(this._duration) : amount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 逆向缓动
     * @example tween.reverse()
     * @param {boolean=} state 是否逆向
     * @memberof gui.Tween
     */
    Tween.prototype.reverse = function (state) {
        var _reversed = this._reversed;
        this._reversed = state !== undefined ? state : !_reversed;
        return this;
    };
    /**
     * 当前动画是否逆转
     * @return {boolean}
     * @example tween.reversed() true逆向中
     * @memberof gui.Tween
     */
    Tween.prototype.reversed = function () {
        return this._reversed;
    };
    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof gui.Tween
     */
    Tween.prototype.pause = function () {
        if (!this._isPlaying) {
            return this;
        }
        this._isPlaying = false;
        core_1.remove(this);
        return this.emit(TweenEvent_1.TweenEvent.pause, this.object);
    };
    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof gui.Tween
     */
    Tween.prototype.play = function () {
        if (this._isPlaying) {
            return this;
        }
        this._isPlaying = true;
        this._startTime = 0;
        core_1.add(this);
        return this.emit(TweenEvent_1.TweenEvent.play, this.object);
    };
    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new gui.Tween({x:0}).to({x:100}, 2000)
     * @memberof gui.Tween
     */
    Tween.prototype.to = function (properties, duration) {
        if (duration === void 0) { duration = 1000; }
        this._valuesEnd = properties;
        this._duration = duration;
        return this;
    };
    Tween.prototype.render = function () {
        if (this._rendered) {
            return this;
        }
        var _a = this, _valuesStart = _a._valuesStart, _valuesEnd = _a._valuesEnd, object = _a.object;
        if (!_valuesStart.processed) {
            for (var property in _valuesEnd) {
                var start = object && object[property] && Utils_1.deepCopy(object[property]);
                _valuesStart[property] = start || 0;
                constants_1.decompose(property, object, _valuesStart, _valuesEnd);
            }
            _valuesStart.processed = true;
        }
        this._rendered = true;
        return this;
    };
    /**
     * 开始执行缓动
     * @param {number|string} time 要开始的时间，延迟值
     * @example tween.start()
     * @memberof gui.Tween
     */
    Tween.prototype.start = function (time) {
        this._startTime = time !== undefined ? time : 0;
        this._startTime += this._delayTime;
        this._prevTime = 0;
        this._onStartCallbackFired = false;
        this._rendered = false;
        this._isPlaying = true;
        core_1.add(this);
        return this;
    };
    /**
     * 停止缓动
     * @example tween.stop()
     * @memberof gui.Tween
     */
    Tween.prototype.stop = function () {
        var _a = this, _isPlaying = _a._isPlaying, _isFinite = _a._isFinite, object = _a.object, _duration = _a._duration, _initRepeat = _a._initRepeat, _yoyo = _a._yoyo, _reversed = _a._reversed;
        if (!_isPlaying) {
            return this;
        }
        var atStart = _isFinite ? (_initRepeat + 1) % 2 === 1 : !_reversed;
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
    };
    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof gui.Tween
     */
    Tween.prototype.delay = function (amount) {
        this._delayTime = amount;
        return this;
    };
    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof gui.Tween
     */
    Tween.prototype.repeat = function (amount) {
        this._repeat = !this._duration ? 0 : amount;
        this._initRepeat = this._repeat;
        this._isFinite = isFinite(amount);
        return this;
    };
    /**
     * 设置每个重复执行过程的延迟时间，毫秒
     * @param {number} amount 延迟值
     * @example tween.reverseDelay(500)
     * @memberof gui.Tween
     */
    Tween.prototype.reverseDelay = function (amount) {
        this._reverseDelayTime = amount;
        return this;
    };
    /**
     * 是否在重复执行中启用反向动画
     * @param {boolean} state true启动
     * @param {Function=} _easingReverse 反向时的Easing function
     * @example tween.yoyo(true)
     * @memberof gui.Tween
     */
    Tween.prototype.yoyo = function (state, _easingReverse) {
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
    };
    /**
     * 设置缓动函数
     * @param {Function} _easingFunction 缓动函数的公式，如果设置yoyo的第二个值会应用于逆向缓动
     * @example tween.easing(Easing.Elastic.InOut)
     * @memberof gui.Tween
     */
    Tween.prototype.easing = function (_easingFunction) {
        this._easingFunction = _easingFunction;
        return this;
    };
    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof gui.Tween
     */
    Tween.prototype.interpolation = function (_interpolationFunction) {
        if (typeof _interpolationFunction === 'function') {
            this._interpolationFunction = _interpolationFunction;
        }
        return this;
    };
    /**
     * 更新动画到指定时间点，进行播放
     * @param time
     */
    Tween.prototype.gotoAndPlay = function (time) {
        this._prevTime = time;
        this.update(0);
    };
    /**
     * 更新动画到指定时间点，停止播放
     * @param time
     */
    Tween.prototype.gotoAndStop = function (time) {
        this._prevTime = time;
        this.update(0);
        this.pause();
    };
    /**
     * 更新动画到指定时间点，停止播放
     * @param time
     */
    Tween.prototype.gotoAndEnd = function () {
        this._prevTime = this._duration;
        this.update(0);
    };
    /**
     * 更新函数，通过给定的 `time` 设置目标属性变化
    * @param {number=} elapsedMS 帧间隔
    * @param {Boolean=} preserve 完成后，防止删除动画对象
     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
     * @example tween.update(100)
     * @memberof gui.Tween
     */
    Tween.prototype.update = function (elapsedMS, preserve, forceTime) {
        var _a = this, _onStartCallbackFired = _a._onStartCallbackFired, _easingFunction = _a._easingFunction, _easingReverse = _a._easingReverse, _delayTime = _a._delayTime, _reverseDelayTime = _a._reverseDelayTime, _yoyo = _a._yoyo, _reversed = _a._reversed, _startTime = _a._startTime, _duration = _a._duration, _valuesStart = _a._valuesStart, _valuesEnd = _a._valuesEnd, object = _a.object, _isFinite = _a._isFinite, _isPlaying = _a._isPlaying;
        if (!_isPlaying || (_startTime > 0 && !forceTime)) {
            this._startTime -= elapsedMS;
            this._startTime = Math.max(0, this._startTime);
            return true;
        }
        var elapsed;
        var property;
        var _repeat = this._repeat;
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
        var currentEasing = _reversed ? _easingReverse || _easingFunction : _easingFunction;
        for (property in _valuesEnd) {
            var start = _valuesStart[property];
            var end = _valuesEnd[property];
            var value = currentEasing[property] ? currentEasing[property](elapsed) : typeof currentEasing === 'function' ? currentEasing(elapsed) : defaultEasing(elapsed);
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
    };
    Tween.core = { add: core_1.add, get: core_1.get, getAll: core_1.getAll, remove: core_1.remove, removeAll: core_1.removeAll, removeDisplay: core_1.removeDisplay, update: core_1.update };
    Tween.Event = TweenEvent_1.TweenEvent;
    return Tween;
}(PIXI.utils.EventEmitter));
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
var constants_1 = __webpack_require__(/*! ./constants */ "./src/tween/private/constants.ts");
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
    Linear: function (v, k, value) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = exports.Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f, value);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f, value);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i, value);
    },
    Bezier: function (v, k, value) {
        var b = exports.Interpolation.Utils.Reset(value);
        var n = v.length - 1;
        var pw = Math.pow;
        var fn = exports.Interpolation.Utils.Bernstein;
        var isBArray = Array.isArray(b);
        for (var i = 0; i <= n; i++) {
            if (typeof b === 'number') {
                b += pw(1 - k, n - i) * pw(k, i) * v[i] * fn(n, i);
            }
            else if (isBArray) {
                for (var p = 0, len = b.length; p < len; p++) {
                    if (typeof b[p] === 'number') {
                        b[p] += pw(1 - k, n - i) * pw(k, i) * v[i][p] * fn(n, i);
                    }
                    else {
                        b[p] = v[i][p];
                    }
                }
            }
            else if (typeof b === 'object') {
                for (var p in b) {
                    if (typeof b[p] === 'number') {
                        b[p] += pw(1 - k, n - i) * pw(k, i) * v[i][p] * fn(n, i);
                    }
                    else {
                        b[p] = v[i][p];
                    }
                }
            }
            else if (typeof b === 'string') {
                var STRING_BUFFER = '';
                var idx = Math.round(n * k);
                var vCurr = v[idx];
                for (var ks = 1, len = vCurr.length; ks < len; ks++) {
                    STRING_BUFFER += vCurr[ks];
                }
                return STRING_BUFFER;
            }
        }
        return b;
    },
    CatmullRom: function (v, k, value) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = exports.Interpolation.Utils.CatmullRom;
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
        Linear: function (p0, p1, t, v) {
            if (p0 === p1 || typeof p0 === 'string') {
                // Quick return for performance reason
                if (p1.length && p1.splice && p1.isString) {
                    p1 = '';
                    for (var i = 0, len = p0.length; i < len; i++) {
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
                    var isForceStringProp = typeof p0[0] === 'string' || p0.isString;
                    if (isForceStringProp || p0[0] === constants_1.STRING_PROP) {
                        var STRING_BUFFER = '';
                        for (var i = isForceStringProp ? 0 : 1, len = p0.length; i < len; i++) {
                            var currentValue = t === 0 ? p0[i] : t === 1 ? p1[i] : typeof p0[i] === 'number' ? p0[i] + (p1[i] - p0[i]) * t : p1[i];
                            if ((t > 0 && t < 1 && constants_1.isRGBColor(p0, i)) || constants_1.isRGBColor(p0, i, constants_1.RGBA)) {
                                currentValue |= 0;
                            }
                            STRING_BUFFER += currentValue;
                        }
                        return STRING_BUFFER;
                    }
                    else if (v && v.length && v.splice) {
                        for (var p = 0, len = v.length; p < len; p++) {
                            v[p] = exports.Interpolation.Utils.Linear(p0[p], p1[p], t, v[p]);
                        }
                    }
                }
                else {
                    for (var p in v) {
                        v[p] = exports.Interpolation.Utils.Linear(p0[p], p1[p], t, v[p]);
                    }
                }
                return v;
            }
        },
        Reset: function (value) {
            if (Array.isArray(value)) {
                for (var i = 0, len = value.length; i < len; i++) {
                    value[i] = exports.Interpolation.Utils.Reset(value[i]);
                }
                return value;
            }
            else if (typeof value === 'object') {
                for (var i in value) {
                    value[i] = exports.Interpolation.Utils.Reset(value[i]);
                }
                return value;
            }
            else if (typeof value === 'number') {
                return 0;
            }
            return value;
        },
        Bernstein: function (n, i) {
            var fc = exports.Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (var i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t, v) {
            if (typeof p0 === 'string') {
                return p1;
            }
            else if (typeof p0 === 'number') {
                var v0 = (p2 - p0) * 0.5;
                var v1 = (p3 - p1) * 0.5;
                var t2 = t * t;
                var t3 = t * t2;
                return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
            }
            else if (typeof p0 === 'object') {
                if (p0.length !== undefined) {
                    if (p0[0] === constants_1.STRING_PROP) {
                        var STRING_BUFFER = '';
                        for (var i = 1, len = p0.length; i < len; i++) {
                            var currentValue = typeof p0[i] === 'number' ? exports.Interpolation.Utils.CatmullRom(p0[i], p1[i], p2[i], p3[i], t) : p3[i];
                            if (constants_1.isRGBColor(p0, i) || constants_1.isRGBColor(p0, i, constants_1.RGBA)) {
                                currentValue |= 0;
                            }
                            STRING_BUFFER += currentValue;
                        }
                        return STRING_BUFFER;
                    }
                    for (var p = 0, len = v.length; p < len; p++) {
                        v[p] = exports.Interpolation.Utils.CatmullRom(p0[p], p1[p], p2[p], p3[p], t, v[p]);
                    }
                }
                else {
                    for (var p in v) {
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
var Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.ts");
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
var isNaNForST = function (v) { return isNaN(+v) || ((v[0] === '+' || v[0] === '-') && v[1] === '=') || v === '' || v === ' '; };
var hexColor = /^#([0-9a-f]{6}|[0-9a-f]{3})$/gi;
var hex2rgbext = function (all) {
    var hex = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        hex[_i - 1] = arguments[_i];
    }
    var rgb = Utils_1.hexToRgb(all);
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
    var hex = fromValue.replace(hexColor, hex2rgbext).match(exports.NUM_REGEX);
    var value;
    if (hex) {
        value = hex.map(function (v) { return (isNaNForST(v) ? v : +v); });
    }
    value.isString = true;
    return value;
}
exports.decomposeString = decomposeString;
// Decompose value, now for only `string` that required
function decompose(prop, obj, from, to) {
    var fromValue = from[prop];
    var toValue = to[prop];
    if (fromValue === toValue) {
        return true;
    }
    else if (Array.isArray(fromValue) && Array.isArray(toValue) && fromValue.length === toValue.length) {
        for (var i = 0, len = toValue.length; i < len; i++) {
            var a = fromValue[i];
            var b = toValue[i];
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
        var fromValue1 = decomposeString(fromValue);
        var toValues = toValue.map(decomposeString);
        from[prop] = fromValue1;
        to[prop] = toValues;
        return true;
    }
    else if (typeof fromValue === 'string' || typeof toValue === 'string') {
        var fromValue1 = Array.isArray(fromValue) && fromValue[0] === exports.STRING_PROP ? fromValue : decomposeString(fromValue);
        var toValue1 = Array.isArray(toValue) && toValue[0] === exports.STRING_PROP ? toValue : decomposeString(toValue);
        if (fromValue1 === undefined) {
            return;
        }
        var i = 1;
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
            return fromValue.map(function (v, i) { return decompose(i, obj[prop], fromValue, toValue); });
        }
        else {
            for (var prop2 in toValue) {
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
function isRGBColor(v, i, r) {
    if (r === void 0) { r = exports.RGB; }
    return typeof v[i] === 'number' && (v[i - 1] === r || v[i - 3] === r || v[i - 5] === r);
}
exports.isRGBColor = isRGBColor;
function recompose(prop, obj, from, to, t, originalT, stringBuffer) {
    var fromValue = stringBuffer ? from : from[prop];
    var toValue = stringBuffer ? to : to[prop];
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
            var STRING_BUFFER = '';
            for (var i = 0, len = fromValue.length; i < len; i++) {
                if (fromValue[i] !== toValue[i] || typeof fromValue[i] !== 'number' || typeof toValue[i] === 'number') {
                    var isRelative = typeof fromValue[i] === 'number' && typeof toValue[i] === 'string' && toValue[i][1] === '=';
                    var currentValue = typeof fromValue[i] !== 'number'
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
            for (var i = 0, len = fromValue.length; i < len; i++) {
                if (fromValue[i] === toValue[i] || typeof obj[prop] === 'string') {
                    continue;
                }
                recompose(i, obj[prop], fromValue, toValue, t, originalT);
            }
        }
        else if (typeof fromValue === 'object' && !!fromValue && !fromValue.isString) {
            for (var i in fromValue) {
                if (fromValue[i] === toValue[i]) {
                    continue;
                }
                recompose(i, obj[prop], fromValue, toValue, t, originalT);
            }
        }
    }
    else if (typeof fromValue === 'number') {
        var isRelative = typeof toValue === 'string';
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
var propRegExp = /([.[])/g;
var replaceBrace = /\]/g;
var propExtract = function (obj, property) {
    var value = obj[property];
    var props = property.replace(replaceBrace, '').split(propRegExp);
    var propsLastIndex = props.length - 1;
    var lastArr = Array.isArray(obj);
    var lastObj = typeof obj === 'object' && !lastArr;
    if (lastObj) {
        obj[property] = null;
        delete obj[property];
    }
    else if (lastArr) {
        obj.splice(property, 1);
    }
    return props.reduce(function (nested, prop, index) {
        if (lastArr) {
            if (prop !== '.' && prop !== '[') {
                prop *= 1;
            }
        }
        var nextProp = props[index + 1];
        var nextIsArray = nextProp === '[';
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
        for (var prop in nested) {
            if (prop.indexOf('.') !== -1 || prop.indexOf('[') !== -1) {
                propExtract(nested, prop);
            }
            else if (typeof nested[prop] === 'object' && !!nested[prop]) {
                var nested2 = nested[prop];
                for (var prop2 in nested2) {
                    if (prop2.indexOf('.') !== -1 || prop2.indexOf('[') !== -1) {
                        propExtract(nested2, prop2);
                    }
                    else if (typeof nested2[prop2] === 'object' && !!nested2[prop2]) {
                        var nested3 = nested2[prop2];
                        for (var prop3 in nested3) {
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
var _tweens = [];
/**
 * 是否运行中
 */
var isStarted = false;
/**
 * 空帧标识
 */
var emptyFrame = 0;
/**
 * 空帧后最大间隔帧率
 */
var powerModeThrottle = 120;
/**
 * 是否开启卡针后平滑处理
 */
var handleLag = true;
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
    var i = _tweens.indexOf(tween);
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
function FrameThrottle(frameCount) {
    if (frameCount === void 0) { frameCount = 120; }
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
function ToggleLagSmoothing(_state) {
    if (_state === void 0) { _state = true; }
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
    for (var i = 0; i < _tweens.length; i++) {
        if (tween === _tweens[i]) {
            return _tweens[i];
        }
    }
    return null;
}
exports.get = get;
function removeDisplay(uuid) {
    for (var i = 0; i < _tweens.length; i++) {
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
    var i = _tweens.indexOf(tween);
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
function update(time, preserve) {
    if (preserve === void 0) { preserve = false; }
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
    var i = 0;
    var length = _tweens.length;
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
var core_1 = __webpack_require__(/*! ./core */ "./src/tween/private/core.ts");
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
var Interpolation_1 = __webpack_require__(/*! ./Interpolation */ "./src/tween/private/Interpolation.ts");
exports.Interpolation = Interpolation_1.Interpolation;
var utils = __webpack_require__(/*! ./constants */ "./src/tween/private/constants.ts");
exports.utils = utils;
var TweenEvent_1 = __webpack_require__(/*! ../../event/TweenEvent */ "./src/event/TweenEvent.ts");
exports.TweenEvent = TweenEvent_1.TweenEvent;
var Timeline_1 = __webpack_require__(/*! ../Timeline */ "./src/tween/Timeline.ts");
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
var ObjectPool = /** @class */ (function () {
    function ObjectPool() {
        /**
         * 作为对象池的词典dict
         */
        this.objPoolDict = new Map();
    }
    /**
     * 向对象池中放入对象，以便重复利用
     */
    ObjectPool.prototype.push = function (keyClass, oldObj) {
        if (oldObj === undefined) {
            return;
        }
        var objs = this.objPoolDict.get(keyClass);
        if (objs === undefined) {
            objs = [];
            this.objPoolDict.set(keyClass, objs);
        }
        if (objs.indexOf(oldObj) === -1) {
            oldObj.release();
            objs.push(oldObj);
        }
    };
    /**
     * 从对象池中取出需要的对象
     * @return 取出的相应对象
     *
     */
    ObjectPool.prototype.pop = function (keyClass) {
        var objs = this.objPoolDict.get(keyClass);
        if (objs !== undefined && objs.length > 0) {
            return objs.pop();
        }
        return new keyClass();
    };
    return ObjectPool;
}());
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
var Stage_1 = __webpack_require__(/*! ../core/Stage */ "./src/core/Stage.ts");
/**
 * 工具类
 */
/** 日志输出 */
function log(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    console.log.apply(console, [message].concat(optionalParams));
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
    if (src === '') {
        src = undefined;
        return src;
    }
    return PIXI.Texture.from(src);
}
exports.getTexture = getTexture;
function getSheet(src) {
    if (exports.$getSourcePath) {
        src = exports.$getSourcePath(src);
    }
    return src;
}
exports.getSheet = getSheet;
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
function getDisplayObject(src, target) {
    if (exports.$getUIDisplayObjectPath) {
        src = exports.$getUIDisplayObjectPath(src, target);
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
        var offset = performance && performance.timing && performance.timing.navigationStart ? performance.timing.navigationStart : Date.now();
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
        var tempTarget = target || {};
        for (var prop in source) {
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
    var result = parseInt(str.replace('#', '0x'));
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
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + alpha + ")" : false;
}
exports.hexToRgba = hexToRgba;
/**
 * 转换为16位字符串，不够2位的补0，如 “01”
 * @param c 要转换的数字
 */
function componentToHex(c) {
    var hex = c.toString(16);
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
    var colors = color.substring(4, color.length - 1).split(",");
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
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
    var pow = Math.pow(10, decimals);
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
    var params = new URLSearchParams(location.search);
    if (params.has(variable)) {
        return params.get(variable);
    }
    return undefined;
}
exports.getQueryVariable = getQueryVariable;
/**
 * 解析一个字符串函数的参数，如xxx(1) = 1
 * @param
 */
function getStringFunctionParam(str) {
    var target = {};
    target.key = str.substr(0, str.indexOf("("));
    var value = str.substr(str.indexOf("(") + 1);
    target.value = parseFloat(value.substr(0, value.lastIndexOf(")")));
    return target;
}
exports.getStringFunctionParam = getStringFunctionParam;
function isDeltaIdentity(m) {
    return (m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1);
}
exports.isDeltaIdentity = isDeltaIdentity;
/**
 * 格式化一个百分比为小数
 * @param value
 * @param total
 */
function formatRelative(value, total) {
    if (value == undefined) {
        return NaN;
    }
    if (typeof value === "number") {
        return value;
    }
    var str = value;
    var index = str.indexOf("%");
    if (index == -1) {
        return +str;
    }
    var percent = +str.substring(0, index);
    return percent * 0.01 * total;
}
exports.formatRelative = formatRelative;
/** 计算两点距离 */
function pointDistance(pointA, pointB) {
    return Math.sqrt((pointA.x - pointB.x) * (pointA.x - pointB.x) + (pointA.y - pointB.y) * (pointA.y - pointB.y));
}
exports.pointDistance = pointDistance;
/** 坐标相减 */
function pointSub(source, subPoint) {
    var x = source.x - subPoint.x;
    var y = source.y - subPoint.y;
    return { x: x, y: y };
}
exports.pointSub = pointSub;
/** 向量转弧度 */
function pointSignAngle(pointA, pointB) {
    var num1 = (pointA.x * pointB.y) - (pointB.x * pointA.y);
    var num2 = (pointA.x * pointB.x) + (pointA.y * pointB.y);
    return Math.atan2(num1, num2) * (360 / (Math.PI * 2));
}
exports.pointSignAngle = pointSignAngle;


/***/ }),

/***/ "./src/vf-gui.ts":
/*!***********************!*\
  !*** ./src/vf-gui.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vfgui = __webpack_require__(/*! ./UI */ "./src/UI.ts");
// //注入常规兼容方法
// if(!Array.from){
//     Array.from = function (el: unknown[]) {
//         return Array.apply(this, el);
//     }
// }
// String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
//     return this.lastIndexOf(word, pos0.7.16.0.7.16.0.7.16) ==0.7.16.0.7.16.0.7.16;
// });
window.gui = vfgui;
window.gui.version = "0.7.16";
exports.default = vfgui;
// declare namespace gui{
//     export * from "src/UI";
// }


/***/ })

/******/ });
//# sourceMappingURL=vf-gui.js.map