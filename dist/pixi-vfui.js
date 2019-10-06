var pixivfui =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pixi-vfui.ts");
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
const Stage_1 = __webpack_require__(/*! ./core/Stage */ "./src/core/Stage.ts");
exports.Stage = Stage_1.Stage;
const UIBase_1 = __webpack_require__(/*! ./core/UIBase */ "./src/core/UIBase.ts");
exports.UIBase = UIBase_1.UIBase;
const Ticker_1 = __webpack_require__(/*! ./core/Ticker */ "./src/core/Ticker.ts");
exports.TickerShared = Ticker_1.shared;
const Utils = __webpack_require__(/*! ./core/Utils */ "./src/core/Utils.ts");
exports.Utils = Utils;
const Container_1 = __webpack_require__(/*! ./c/Container */ "./src/c/Container.ts");
exports.Container = Container_1.Container;
const ScrollingContainer_1 = __webpack_require__(/*! ./c/ScrollingContainer */ "./src/c/ScrollingContainer.ts");
exports.ScrollingContainer = ScrollingContainer_1.ScrollingContainer;
const SortableList_1 = __webpack_require__(/*! ./c/SortableList */ "./src/c/SortableList.ts");
exports.SortableList = SortableList_1.SortableList;
const ScrollBar_1 = __webpack_require__(/*! ./c/ScrollBar */ "./src/c/ScrollBar.ts");
exports.ScrollBar = ScrollBar_1.ScrollBar;
const Sprite_1 = __webpack_require__(/*! ./c/Sprite */ "./src/c/Sprite.ts");
exports.Sprite = Sprite_1.Sprite;
const SpriteTiling_1 = __webpack_require__(/*! ./c/SpriteTiling */ "./src/c/SpriteTiling.ts");
exports.SpriteTiling = SpriteTiling_1.SpriteTiling;
const SpriteSlice_1 = __webpack_require__(/*! ./c/SpriteSlice */ "./src/c/SpriteSlice.ts");
exports.SpriteSlice = SpriteSlice_1.SpriteSlice;
const SpriteAnimated_1 = __webpack_require__(/*! ./c/SpriteAnimated */ "./src/c/SpriteAnimated.ts");
exports.SpriteAnimated = SpriteAnimated_1.SpriteAnimated;
const Text_1 = __webpack_require__(/*! ./c/Text */ "./src/c/Text.ts");
exports.Text = Text_1.Text;
const TextStyle_1 = __webpack_require__(/*! ./c/TextStyle */ "./src/c/TextStyle.ts");
exports.TextStyle = TextStyle_1.TextStyle;
const TextInput_1 = __webpack_require__(/*! ./c/TextInput */ "./src/c/TextInput.ts");
exports.TextInput = TextInput_1.TextInput;
const Slider_1 = __webpack_require__(/*! ./c/Slider */ "./src/c/Slider.ts");
exports.Slider = Slider_1.Slider;
const Button_1 = __webpack_require__(/*! ./c/Button */ "./src/c/Button.ts");
exports.Button = Button_1.Button;
const CheckBox_1 = __webpack_require__(/*! ./c/CheckBox */ "./src/c/CheckBox.ts");
exports.CheckBox = CheckBox_1.CheckBox;
const Rect_1 = __webpack_require__(/*! ./c/Rect */ "./src/c/Rect.ts");
exports.Rect = Rect_1.Rect;
const Tween_1 = __webpack_require__(/*! ./c/Tween */ "./src/c/Tween.ts");
exports.Tween = Tween_1.Tween;
const Timeline_1 = __webpack_require__(/*! ./c/Timeline */ "./src/c/Timeline.ts");
exports.Timeline = Timeline_1.Timeline;
const Easing_1 = __webpack_require__(/*! ./c/Easing */ "./src/c/Easing.ts");
exports.Easing = Easing_1.Easing;
const Interaction = __webpack_require__(/*! ./interaction/Index */ "./src/interaction/Index.ts");
exports.Interaction = Interaction;
const AlignEnum = __webpack_require__(/*! ./enum/AlignEnum */ "./src/enum/AlignEnum.ts");
exports.AlignEnum = AlignEnum;


/***/ }),

/***/ "./src/c/Button.ts":
/*!*************************!*\
  !*** ./src/c/Button.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __webpack_require__(/*! ./Text */ "./src/c/Text.ts");
const InputSkinBase_1 = __webpack_require__(/*! ../core/InputSkinBase */ "./src/core/InputSkinBase.ts");
/**
 * UI 按钮显 示对象
 *
 * @class
 * @extends PIXI.UI.InputBase
 * @memberof PIXI.UI
 * @param [options.tabIndex=0] {Number} input tab index
 * @param [options.tabGroup=0] {Number|String} input tab group
 * @param [options.width=100h] {Number|String} width
 * @param [options.height=20] {Number|String} height
 */
class Button extends InputSkinBase_1.InputSkinBase {
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    constructor(option = { width: 100, height: 20, tabIndex: 0, tabGroup: 0 }) {
        super(option.width, option.height, option.tabIndex, option.tabGroup.toString());
        this._text = new Text_1.Text();
        this.container.buttonMode = true;
        this._text.verticalAlign = 2 /* middle */;
        this._text.horizontalAlign = 2 /* center */;
        this._text.style.fontSize = 18;
        this._text.style.fill = 0xFFFFFF;
        this._text.top = 8;
        this._text.left = 8;
        this._text.right = 8;
        this._text.bootom = 8;
        this.addChild(this._text);
    }
    initialize() {
        super.initialize();
        this.container.interactiveChildren = false;
    }
    /**
     * 获取或设置文本内容
     */
    get label() {
        return this._text.label;
    }
    set label(value) {
        this._text.label = value;
    }
    /** 设置颜色 */
    get labelColor() {
        return this._text.style.fill.toString();
    }
    set labelColor(value) {
        this._text.style.fill = value;
    }
    /** 设置文字大小 */
    get labelSize() {
        return this._text.style.fontSize;
    }
    set labelSize(value) {
        this._text.style.fontSize = value;
    }
    /** 设置文字居中方式 */
    get labelHorizontalAlign() {
        return this._text.horizontalAlign || 2 /* center */;
    }
    set labelHorizontalAlign(value) {
        this._text.horizontalAlign = value;
    }
    /** 设置文字复杂样式 */
    get labelStyle() {
        return this._text.style;
    }
    set labelStyle(value) {
        this._text.style = value;
    }
    get text() {
        return this._text;
    }
}
exports.Button = Button;


/***/ }),

/***/ "./src/c/CheckBox.ts":
/*!***************************!*\
  !*** ./src/c/CheckBox.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/c/Sprite.ts");
const InputController = __webpack_require__(/*! ../interaction/InputController */ "./src/interaction/InputController.ts");
const InputSkinBase_1 = __webpack_require__(/*! ../core/InputSkinBase */ "./src/core/InputSkinBase.ts");
/**
 * UI 单选框与复选框，区别在于有没有时间去拆分，如果没有时间拆分就直接用这个吧，只是皮肤不同
 *
 * box不需要设置设置组
 *
 * radio 需要设置分组
 *
 * @class
 * @extends PIXI.UI.InputBase
 * @memberof PIXI.UI
 * @param [options.tabIndex=0] {Number} input tab index
 * @param [options.tabGroup=0] {Number|String} input tab group
 * @param [options.width=20] {Number|String} width
 * @param [options.height=20] {Number|String} height
 */
class CheckBox extends InputSkinBase_1.InputSkinBase {
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    constructor(option = { width: 20, height: 20, tabIndex: 0, tabGroup: 0 }) {
        super(option.width, option.height, option.tabIndex, option.tabGroup.toString());
        this._checked = false;
        this.container.buttonMode = true;
        this._checkmark = new Sprite_1.Sprite();
        this._checkmark.verticalAlign = 2 /* middle */;
        this._checkmark.horizontalAlign = 2 /* center */;
        this._checkmark.alpha = 0;
        this.addChild(this._checkmark);
    }
    /** 勾选图 */
    get sourceMark() {
        return this._sourceMark;
    }
    set sourceMark(value) {
        this._sourceMark = value;
        this.update();
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
     * 获取或设置当前选中的值
     */
    get selectedValue() {
        if (this.checkGroup) {
            return InputController.getCheckGroupSelectedValue(this.checkGroup);
        }
        return undefined;
    }
    /**
     * 设置分组名
     */
    get checkGroup() {
        return this._checkGroup;
    }
    set checkGroup(value) {
        if (value === undefined) {
            InputController.unRegistrerCheckGroup(this);
        }
        if (this._checkGroup == value) {
            return;
        }
        this._checkGroup = value; //需要在registrerCheckGroup之前
        InputController.registrerCheckGroup(this);
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
                InputController.updateCheckGroupSelected(this);
            this._checked = value;
            this.update();
        }
    }
    onClick() {
        super.onClick();
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    }
    update() {
        super.update();
        this._checkmark.alpha = this.checked ? 1 : 0;
        this._checkmark.source = this._sourceMark;
    }
}
exports.CheckBox = CheckBox;


/***/ }),

/***/ "./src/c/Container.ts":
/*!****************************!*\
  !*** ./src/c/Container.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/c/Sprite.ts");
const Rect_1 = __webpack_require__(/*! ./Rect */ "./src/c/Rect.ts");
/**
 * UI的显示容器
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {Number} 宽度
 * @param height {Number} 高度
 */
class Container extends UIBase_1.UIBase {
    constructor(width, height) {
        super(width, height);
    }
    update() {
        //if (this.container.interactive) {
        // this.container.hitArea.width = this._width;
        // this.container.hitArea.height = this._height;
        //}
    }
    /**
     * 设置遮罩
     */
    set mask(value) {
        if (value === this.mask) {
            return;
        }
        if (value === undefined) {
            this.container.mask = null;
        }
        else if (value instanceof Sprite_1.Sprite) {
            this.container.mask = value.img;
        }
        else if (value instanceof Rect_1.Rect) {
            this.container.mask = value.graphics;
        }
        else {
            this.container.mask = value;
        }
        this._mask = value;
    }
    get mask() {
        return this._mask;
    }
}
exports.Container = Container;


/***/ }),

/***/ "./src/c/ContainerBase.ts":
/*!********************************!*\
  !*** ./src/c/ContainerBase.ts ***!
  \********************************/
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
        super.render(renderer);
        if (this.isEmitRender) {
            this.emit("render", renderer);
        }
    }
}
exports.ContainerBase = ContainerBase;


/***/ }),

/***/ "./src/c/Easing.ts":
/*!*************************!*\
  !*** ./src/c/Easing.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  完整的缓动曲线列表
 * @namespace tween.Easing
 * @example
 *
 * // then set via new vfui.Tween({x:0}).to({x:100}, 1000).easing(tween.Easing.Quadratic.InOut).start()
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
            let x = 2.75;
            let y = 7.5625;
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

/***/ "./src/c/InputText/HtmlInput.ts":
/*!**************************************!*\
  !*** ./src/c/InputText/HtmlInput.ts ***!
  \**************************************/
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
    /* 输入郑泽斌表达式 */
    get restrict() {
        return this._restrictRegex;
    }
    set restrict(regex) {
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
    setAttribute(key, value) {
        this._domInput.setAttribute(key, value);
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
    destroy() {
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
        if (this._restrictRegex)
            this._applyRestriction();
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

/***/ "./src/c/Rect.ts":
/*!***********************!*\
  !*** ./src/c/Rect.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
/**
 * UI 矩形
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
class Rect extends UIBase_1.UIBase {
    constructor() {
        super();
        this._graphicsDirty = false;
        this._radius = 0;
        this._fill = 0xffffff;
        this._rx = 0;
        this._ry = 0;
        this._graphics = new PIXI.Graphics();
        this.container.addChild(this._graphics);
    }
    drawUpdate() {
        if (this._graphicsDirty) {
            this._graphics.clear();
            const graphics = this._graphics;
            graphics.lineStyle(this._lineWidth, this._lineColor);
            graphics.beginFill(this._fill);
            graphics.drawRoundedRect(this.rx, this.ry, this.width, this.height, this.radius);
            graphics.endFill();
            this._graphicsDirty = false;
        }
    }
    /** 绘制矩形方法 */
    drawRoundedRect(x, y, width, height, radius, color) {
        this._radius = radius;
        this._rx = x;
        this._ry = y;
        this.setDefaultSize(width, height);
        if (color) {
            this._fill = color;
        }
        this._graphicsDirty = true;
        this.updatesettings(true);
    }
    /** 获得绘制矢量源 */
    get graphics() {
        return this._graphics;
    }
    /**
     * 圆角
     */
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 要填充的颜色
     * @default 0xFFFFFF
     * */
    get fill() {
        return this._fill;
    }
    set fill(value) {
        this._fill = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 线条宽度
     */
    get lineWidth() {
        return this._lineWidth;
    }
    set lineWidth(value) {
        this._lineWidth = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 线条颜色
     */
    get lineColor() {
        return this._lineColor;
    }
    set lineColor(value) {
        this._lineColor = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 绘制的起始坐标
     */
    get rx() {
        return this._rx;
    }
    set rx(value) {
        this._rx = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 绘制的起始坐标
     */
    get ry() {
        return this._ry;
    }
    set ry(value) {
        this._ry = value;
        this._graphicsDirty = true;
        this.dalayDraw = true;
    }
    /**
     * 显示对象填充色 0xFFFFFF
     */
    set tint(value) {
        this._graphics.tint = value;
        this.setting.tint = value;
    }
    get tint() {
        return this.setting.tint || NaN;
    }
    update() {
        this.drawUpdate();
    }
}
exports.Rect = Rect;


/***/ }),

/***/ "./src/c/ScrollBar.ts":
/*!****************************!*\
  !*** ./src/c/ScrollBar.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Slider_1 = __webpack_require__(/*! ./Slider */ "./src/c/Slider.ts");
const ScrollingContainer_1 = __webpack_require__(/*! ./ScrollingContainer */ "./src/c/ScrollingContainer.ts");
const tween = __webpack_require__(/*! ./tween/index */ "./src/c/tween/index.ts");
/**
 * UI 带有滚动条的容器
 */
class ScrollBar extends Slider_1.Slider {
    constructor(trackBorderWidth = 0, thumbBorderWidth = 0, tracklightBorderWidth = 0) {
        super(trackBorderWidth, thumbBorderWidth, tracklightBorderWidth);
        /**
         * 是的自动隐藏滚动条
         */
        this.autohide = false;
        this._hidden = false;
    }
    toggleHidden(hidden) {
        if (this.autohide) {
            if (hidden && !this._hidden) {
                tween.Tween.to(this, { alpha: 0 }, 200).start();
                this._hidden = true;
            }
            else if (!hidden && this._hidden) {
                tween.Tween.to(this, { alpha: 1 }, 200).start();
                this._hidden = false;
            }
        }
    }
    onThumbLoadComplete(rectangle, source) {
        super.onThumbLoadComplete(rectangle, source);
        this.alignToContainer();
    }
    triggerValueChanging() {
        super.triggerValueChanging();
        if (this.scrollingContainer) {
            const sizeAmt = this.scrollingContainer._height / this.scrollingContainer.innerContainer.height || 0.001;
            if (sizeAmt < 1)
                this.scrollingContainer.forcePctPosition(this.vertical ? "y" : "x", this._amt);
        }
    }
    get scrollingContainer() {
        return this._scrollingContainer;
    }
    set scrollingContainer(value) {
        if (this._scrollingContainer) {
            this._scrollingContainer.off(ScrollingContainer_1.ScrollingContainer.ChangeEvent, this.alignToContainer, this);
            this._scrollingContainer.off(ScrollingContainer_1.ScrollingContainer.ReSizeEvent, this.alignToContainer, this);
        }
        if (value == undefined) {
            this._scrollingContainer = undefined;
            return;
        }
        this._scrollingContainer = value;
        this._scrollingContainer.on(ScrollingContainer_1.ScrollingContainer.ChangeEvent, this.alignToContainer, this);
        this._scrollingContainer.on(ScrollingContainer_1.ScrollingContainer.ReSizeEvent, this.alignToContainer, this);
    }
    alignToContainer() {
        if (this.scrollingContainer) {
            let newPos;
            let size;
            const xORy = this.vertical ? "y" : "x";
            const widthORheight = this.vertical ? "height" : "width";
            const topORleft = this.vertical ? "top" : "left";
            const scrollingContainer = this.scrollingContainer;
            const innerContainer = this.scrollingContainer.innerContainer;
            const _posAmt = !innerContainer[widthORheight] ? 0 : -(innerContainer[xORy] / innerContainer[widthORheight]);
            const sizeAmt = !innerContainer[widthORheight] ? 1 : scrollingContainer["_" + widthORheight] / innerContainer[widthORheight];
            //update amt
            const diff = innerContainer[widthORheight] - scrollingContainer["_" + widthORheight];
            this._amt = !scrollingContainer["_" + widthORheight] || !diff ? 0 : -(innerContainer[xORy] / diff);
            const self = this;
            const _thumb = this._thumb;
            if (sizeAmt >= 1) {
                size = self["_" + widthORheight];
                _thumb[topORleft] = size * 0.5;
                this.toggleHidden(true);
            }
            else {
                size = self["_" + widthORheight] * sizeAmt;
                if (this._amt > 1) {
                    size -= (self["_" + widthORheight] - size) * (this._amt - 1);
                }
                else if (this._amt < 0) {
                    size -= (self["_" + widthORheight] - size) * -this._amt;
                }
                if (this._amt < 0) {
                    newPos = size * 0.5;
                }
                else if (this._amt > 1) {
                    newPos = self["_" + widthORheight] - size * 0.5;
                }
                else {
                    newPos = (_posAmt * self["_" + widthORheight]) + (size * 0.5);
                }
                _thumb[topORleft] = newPos;
                this.toggleHidden(false);
            }
            _thumb[widthORheight] = size;
        }
    }
}
exports.ScrollBar = ScrollBar;


/***/ }),

/***/ "./src/c/ScrollingContainer.ts":
/*!*************************************!*\
  !*** ./src/c/ScrollingContainer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __webpack_require__(/*! ./Container */ "./src/c/Container.ts");
const Ticker = __webpack_require__(/*! ../core/Ticker */ "./src/core/Ticker.ts");
const Utils = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
const DragEvent_1 = __webpack_require__(/*! ../interaction/DragEvent */ "./src/interaction/DragEvent.ts");
const MouseScrollEvent_1 = __webpack_require__(/*! ../interaction/MouseScrollEvent */ "./src/interaction/MouseScrollEvent.ts");
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
const Rect_1 = __webpack_require__(/*! ./Rect */ "./src/c/Rect.ts");
/**
 * 可滚动的容器
 */
class ScrollingContainer extends Container_1.Container {
    constructor() {
        super();
        /**
         * 遮罩
         */
        this._maskRect = new Rect_1.Rect();
        /**
         * 内容容器
         * @private
         */
        this.innerContainer = new PIXI.Container();
        /**
         * 内容的宽高
         */
        this.innerBounds = new PIXI.Rectangle();
        /**
         * 是否启动拖拽滚动
         * @default true
         */
        this.dragScrolling = true;
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
         * 是否滚动中
         */
        this.scrolling = false;
        /**
         * 临时方案，设置时间间隔，跳转容器宽高
         */
        this._boundCached = Utils_1.now() - 1000;
        this._lastWidth = 0;
        this._lastHeight = 0;
        this._scrollX = false;
        this._scrollY = false;
        this._isInitScrolling = false;
        this._containerStart = new PIXI.Point();
        this._targetPosition = new PIXI.Point();
        this._lastPosition = new PIXI.Point();
        this._Position = new PIXI.Point();
        this._Speed = new PIXI.Point();
        this._stop = false;
        this._maskRect.y = 0;
        this.addChild(this._maskRect);
        this.container.addChild(this.innerContainer);
        this.container.name = "ScrollingContainer.container";
        this.innerContainer.name = "ScrollingContainer.innerContainer";
        this.mask = this._maskRect.graphics;
    }
    /**
     * 是否启用水平滚动
     * @default false
     */
    get scrollX() {
        return this._scrollX;
    }
    set scrollX(value) {
        this._scrollX = value;
    }
    /**
     * 是否启用垂直滚动
     * @default false
     */
    get scrollY() {
        return this._scrollY;
    }
    set scrollY(value) {
        this._scrollY = value;
    }
    update() {
        if (this._lastWidth != this._width || this._lastHeight != this._height) {
            const _of = this.expandMask;
            this._maskRect.drawRoundedRect(_of, -_of, this._width + _of, this._height + _of, this.radius, 0xFFFFFF);
            this._lastWidth = this._width;
            this._lastHeight = this._height;
        }
        this.setScrollPosition();
    }
    setScrollPosition(speed) {
        if (speed) {
            this._Speed = speed;
        }
        if (!this.animating) {
            this.animating = true;
            this._lastPosition.copyFrom(this.innerContainer.position);
            this._targetPosition.copyFrom(this.innerContainer.position);
            this.updateScrollPosition(0);
        }
    }
    addChild(uiObject) {
        super.addChild(uiObject);
        if (uiObject != this._maskRect) {
            this.innerContainer.addChild(uiObject.container);
        }
        this.getInnerBounds(true); //make sure bounds is updated instantly when a child is added
        return uiObject;
    }
    getInnerBounds(force) {
        //this is a temporary fix, because we cant rely on innercontainer height if the children is positioned > 0 y.
        if (force || Utils_1.now() - this._boundCached > 1000) {
            this.innerContainer.getLocalBounds(this.innerBounds);
            this.innerBounds.height = this.innerBounds.y + this.innerContainer.height;
            this.innerBounds.width = this.innerBounds.x + this.innerContainer.width;
            this._boundCached = Utils_1.now();
        }
        return this.innerBounds;
    }
    initialize() {
        super.initialize();
        this.initScrolling();
    }
    initScrolling() {
        this._isInitScrolling = true;
        if (this.dragEvent) {
            this.dragEvent.remove();
            this.dragEvent = undefined;
        }
        //Drag scroll
        if (this.dragScrolling) {
            this.dragEvent = new DragEvent_1.DragEvent(this);
            this.dragEvent.onDragStart = () => {
                if (!this.scrolling) {
                    this._containerStart.copyFrom(this.innerContainer.position);
                    this._Position.copyFrom(this.innerContainer.position);
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
        }
        //Mouse scroll
        if (this.mouseScrollEvent) {
            this.mouseScrollEvent.remove();
            this.mouseScrollEvent = undefined;
        }
        const scrollSpeed = new PIXI.Point();
        this.mouseScrollEvent = new MouseScrollEvent_1.MouseScrollEvent(this, true);
        this.mouseScrollEvent.onMouseScroll = (e, delta) => {
            scrollSpeed.set(-delta.x * 0.2, -delta.y * 0.2);
            this.setScrollPosition(scrollSpeed);
        };
        this.updateScrollBars();
    }
    updateScrollBars() {
        this.emit(ScrollingContainer.ChangeEvent, this);
    }
    /**
     * 百分比设置位置
     * @param direction 方向
     * @param pct 百分比0-1
     */
    forcePctPosition(direction, pct) {
        const bounds = this.getInnerBounds();
        if (this.scrollX && direction == "x") {
            this.innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.scrollY && direction == "y") {
            this.innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this._Position[direction] = this._targetPosition[direction] = this.innerContainer.position[direction];
    }
    /** 根据焦点设置位置 */
    focusPosition(pos) {
        const bounds = this.getInnerBounds();
        let dif;
        if (this.scrollX) {
            const x = Math.max(0, (Math.min(bounds.width, pos.x)));
            if (x + this.innerContainer.x > this._width) {
                dif = x - this._width;
                this.innerContainer.x = -dif;
            }
            else if (x + this.innerContainer.x < 0) {
                dif = x + this.innerContainer.x;
                this.innerContainer.x -= dif;
            }
        }
        if (this.scrollY) {
            const y = Math.max(0, (Math.min(bounds.height, pos.y)));
            if (y + this.innerContainer.y > this._height) {
                dif = y - this._height;
                this.innerContainer.y = -dif;
            }
            else if (y + this.innerContainer.y < 0) {
                dif = y + this.innerContainer.y;
                this.innerContainer.y -= dif;
            }
        }
        this._lastPosition.copyFrom(this.innerContainer.position);
        this._targetPosition.copyFrom(this.innerContainer.position);
        this._Position.copyFrom(this.innerContainer.position);
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
        if (!this.scrolling && Math.round(this._Speed[direction]) === 0 && (this.innerContainer[direction] > 0 || this.innerContainer[direction] < min)) {
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
        this.innerContainer.position[direction] = Math.round(this._Position[direction]);
        this.updateScrollBars();
    }
}
/**
 * 滑动条值发生改变后
 */
ScrollingContainer.ChangeEvent = "change";
/**
 * 滑动条值发生改变后
 */
ScrollingContainer.ReSizeEvent = "resize";
exports.ScrollingContainer = ScrollingContainer;


/***/ }),

/***/ "./src/c/Slider.ts":
/*!*************************!*\
  !*** ./src/c/Slider.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Utils = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
const SpriteSlice_1 = __webpack_require__(/*! ./SpriteSlice */ "./src/c/SpriteSlice.ts");
const tween = __webpack_require__(/*! ./tween/index */ "./src/c/tween/index.ts");
const DragEvent_1 = __webpack_require__(/*! ../interaction/DragEvent */ "./src/interaction/DragEvent.ts");
/**
 * UI 滑动条
 */
class Slider extends UIBase_1.UIBase {
    constructor(trackBorderWidth = 0, thumbBorderWidth = 0, tracklightBorderWidth = 0) {
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
        /**
         * 滑块方向
         */
        this._vertical = false;
        this._sourceTrack = "";
        this._sourceTracklight = "";
        this._sourceThumb = "";
        this._thumbDrag = new DragEvent_1.DragEvent(this);
        this._trackDrag = new DragEvent_1.DragEvent(this);
        this._startValue = 0;
        this._maxPosition = 0;
        this._localMousePosition = new PIXI.Point();
        this._lastChange = 0;
        this._lastChanging = 0;
        this._minValue = 0;
        this._maxValue = 100;
        /** 是否可以绘制布局，设置本值并不会触发绘制，只是标记*/
        this._isUpdateLayout = true;
        this._track = new SpriteSlice_1.SpriteSlice();
        this._track.borderWidth = trackBorderWidth;
        this._thumb = new SpriteSlice_1.SpriteSlice();
        this._thumb.borderWidth = thumbBorderWidth;
        this._thumb.pivot = 0.5;
        this._thumb.container.buttonMode = true;
        this._tracklight = new SpriteSlice_1.SpriteSlice();
        this._tracklight.borderWidth = tracklightBorderWidth;
        this.addChild(this._track);
        this.addChild(this._tracklight);
        this.addChild(this._thumb);
        this._thumbDrag.onDragPress = this.onPress;
        this._thumbDrag.onDragStart = this.onDragStart;
        this._thumbDrag.onDragMove = this.onDragMove;
        this._thumbDrag.onDragEnd = this.onDragEnd;
        this._trackDrag.onDragPress = this.onPress;
        this._trackDrag.onDragStart = this.onDragStart;
        this._trackDrag.onDragMove = this.onDragMove;
        this._trackDrag.onDragEnd = this.onDragEnd;
    }
    /**
     * 背景
     */
    get sourceTrack() {
        return this._sourceTrack;
    }
    set sourceTrack(value) {
        this._sourceTrack = value;
        this._track.source = value;
    }
    /**
     * 进度填充
     */
    get sourceTracklight() {
        return this._sourceTracklight;
    }
    set sourceTracklight(value) {
        this._sourceTracklight = value;
        this._tracklight.source = value;
    }
    /**
     * 拖拽手柄
     */
    get sourceThumb() {
        return this._sourceThumb;
    }
    set sourceThumb(value) {
        this._sourceThumb = value;
        this._thumb.visible = false;
        this._thumb.off(SpriteSlice_1.SpriteSlice.SourceCompleteEvent, this.onThumbLoadComplete, this);
        this._thumb.once(SpriteSlice_1.SpriteSlice.SourceCompleteEvent, this.onThumbLoadComplete, this);
        this._thumb.source = value;
    }
    //rectangle:PIXI.Rectangle,source?:SliceSprite
    onThumbLoadComplete(rectangle, source) {
        source.width = rectangle.width;
        source.height = rectangle.height;
        source.visible = true;
        this.update();
    }
    /**
     * 是否垂直
     * @default false
     */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = value;
        this._isUpdateLayout = true;
        this.update();
    }
    /**
     * 最小值
     * @default 0
     */
    get minValue() {
        return this._minValue;
    }
    set minValue(value) {
        this._minValue = value;
        this.update();
    }
    /**
     * 最大值
     * @default 100
     */
    get maxValue() {
        return this._maxValue;
    }
    set maxValue(value) {
        this._maxValue = value;
        this.update();
    }
    /**
     * 当前值
     */
    get value() {
        return Utils.Round(Utils.Lerp(this._minValue, this._maxValue, this._amt), this._decimals);
    }
    set value(value) {
        this._amt = (Math.max(this._minValue, Math.min(this._maxValue, value)) - this._minValue) / (this._maxValue - this._minValue);
        this.update();
        this.triggerValueChange();
        this.triggerValueChanging();
    }
    updateLayout() {
        if (!this._isUpdateLayout) {
            return;
        }
        this._track.widthPet = "100%";
        this._track.heightPct = "100%";
        if (this.vertical) {
            this._thumb.horizontalAlign = 2 /* center */;
            this._thumb.verticalAlign = undefined;
            this._tracklight.horizontalAlign = 2 /* center */;
            this._tracklight.verticalAlign = undefined;
            this._tracklight.widthPet = "100%";
        }
        else {
            this._thumb.verticalAlign = 2 /* middle */;
            this._thumb.horizontalAlign = undefined;
            this._tracklight.verticalAlign = 2 /* middle */;
            this._tracklight.horizontalAlign = undefined;
            this._tracklight.heightPct = "100%";
        }
        this._isUpdateLayout = false;
    }
    update(soft) {
        this.updateLayout();
        let handleSize;
        let val;
        if (this._thumb) {
            if (this.vertical) {
                handleSize = this._thumb._height || this._thumb.container.height;
                val = ((this._height - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    tween.Tween.to(this._thumb, { top: val }, 300).easing(tween.Easing.Linear.None).start();
                    tween.Tween.to(this._tracklight, { height: val }, 300).easing(tween.Easing.Linear.None).start();
                }
                else {
                    this._thumb.top = val;
                    this._tracklight.height = val;
                }
            }
            else {
                handleSize = this._thumb._width || this._thumb.container.width;
                val = ((this._width - handleSize) * this._amt) + (handleSize * 0.5);
                if (soft) {
                    tween.Tween.to(this._thumb, { left: val }, 300).easing(tween.Easing.Linear.None).start();
                    tween.Tween.to(this._tracklight, { width: val }, 300).easing(tween.Easing.Linear.None).start();
                }
                else {
                    this._thumb.left = val;
                    this._tracklight.width = val;
                }
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
        if (this._thumb && this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this._startValue = this._amt;
            this._maxPosition = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
        }
    }
    onDragMove(event, offset) {
        if (this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.vertical ? offset.y : offset.x) / this._maxPosition)));
            this.triggerValueChanging();
            this.update();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.updatePositionToMouse(event.data.global, false);
        }
    }
    onDragEnd(event) {
        if (this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this.triggerValueChange();
            this.update();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.triggerValueChange();
        }
    }
    updatePositionToMouse(mousePosition, soft) {
        if (this._track) {
            this._track.container.toLocal(mousePosition, undefined, this._localMousePosition, true);
        }
        if (this._thumb) {
            const newPos = this.vertical ? this._localMousePosition.y - this._thumb._height * 0.5 : this._localMousePosition.x - this._thumb._width * 0.5;
            const maxPos = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
            this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
            this.update(soft);
            this.triggerValueChanging();
        }
    }
    triggerValueChange() {
        this.emit("change", this.value, this._lastChange);
        if (this._lastChange != this.value) {
            this._lastChange = this.value;
        }
    }
    triggerValueChanging() {
        this.emit("changing", this.value, this._lastChanging);
        if (this._lastChanging != this.value) {
            this._lastChanging = this.value;
        }
    }
}
/**
 * 滑动条值发生改变后
 */
Slider.ChangeEvent = "change";
/**
 * 滑动条值发生改变时
 */
Slider.ChangingEvent = "changing";
exports.Slider = Slider;


/***/ }),

/***/ "./src/c/SortableList.ts":
/*!*******************************!*\
  !*** ./src/c/SortableList.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __webpack_require__(/*! ./Container */ "./src/c/Container.ts");
const tween = __webpack_require__(/*! ./tween/index */ "./src/c/tween/index.ts");
/**
 * UI 可以排序的容器
 */
class SortableList extends Container_1.Container {
    constructor() {
        super();
        /**
         * 是否按降序排序
         * @private false
         */
        this.desc = false;
        /**
         * 是否开启排序动画，默认不开启
         * @default 0
         */
        this.tweenTime = 0;
        this.tweenEase = tween.Easing.Sinusoidal.In;
        this.items = [];
        this._sortTimeout = -1;
    }
    /**
     * 添加显示列表，通过参数函数进行排序
     * @param UIObject UI显示对象
     * @param fnValue 前置条件
     * @param fnThenBy 后置条件
     */
    addChild(UIObject, fnValue, fnThenBy) {
        super.addChild(UIObject);
        if (this.items.indexOf(UIObject) === -1) {
            this.items.push(UIObject);
        }
        if (fnValue)
            UIObject.attach._sortListValue = fnValue;
        if (fnThenBy)
            UIObject.attach._sortListThenByValue = fnThenBy;
        if (!UIObject.attach._sortListRnd)
            UIObject.attach._sortListRnd = Math.random();
        this.sort();
        return UIObject;
    }
    removeChild(UIObject) {
        super.removeChild(UIObject);
        const index = this.items.indexOf(UIObject);
        if (index != -1) {
            this.items.splice(index, 1);
        }
        this.sort();
    }
    sort(instant) {
        clearTimeout(this._sortTimeout);
        if (instant) {
            this._sort();
            return;
        }
        this._sortTimeout = window.setTimeout(() => { this._sort(); }, 0);
    }
    _sort() {
        const self = this;
        const desc = this.desc;
        let y = 0;
        let alt = true;
        this.items.sort((a, b) => {
            const aFnValue = a.attach._sortListValue;
            const bFnValue = b.attach._sortListValue;
            const aFnThenBy = a.attach._sortListThenByValue;
            const bFnThenBy = a.attach._sortListThenByValue;
            let res = aFnValue() < bFnValue() ? desc ? 1 : -1 : aFnValue() > bFnValue() ? desc ? -1 : 1 : 0;
            if (res === 0 && aFnThenBy && bFnThenBy) {
                res = aFnThenBy() < bFnThenBy() ? desc ? 1 : -1 : aFnThenBy() > bFnThenBy() ? desc ? -1 : 1 : 0;
            }
            if (res === 0) {
                res = a.attach._sortListRnd > b.attach._sortListRnd ? 1 :
                    a.attach._sortListRnd < b.attach._sortListRnd ? -1 : 0;
            }
            return res;
        });
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            alt = !alt;
            if (this.tweenTime > 0) {
                tween.Tween.fromTo(item, { x: 0, y: y }, this.tweenTime).easing(this.tweenEase).start();
            }
            else {
                item.x = 0;
                item.y = y;
            }
            y += item.height;
            const itemTany = item; //设置单独项目的背景或
            if (typeof itemTany.altering === "function")
                itemTany.altering(alt);
        }
        //force it to update parents when sort animation is done (prevent scrolling container bug)
        if (this.tweenTime > 0) {
            setTimeout(function () {
                self.updatesettings(false, true);
            }, this.tweenTime * 1000);
        }
    }
}
exports.SortableList = SortableList;


/***/ }),

/***/ "./src/c/Sprite.ts":
/*!*************************!*\
  !*** ./src/c/Sprite.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
/**
 * UI图片显示对象，如果使用拉伸或9切，请使用 SliceSprite
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
class Sprite extends UIBase_1.UIBase {
    constructor(t) {
        super();
        this._anchorX = 0;
        this._anchorY = 0;
        this._source = t;
        this._sprite = new PIXI.Sprite(t);
        this.container.addChild(this._sprite);
    }
    /** 获得图像 */
    get img() {
        return this._sprite;
    }
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    get source() {
        return this._source;
    }
    set source(value) {
        if (Utils_1._getSourcePath) {
            value = Utils_1._getSourcePath(value);
        }
        if (value === undefined) {
            return;
        }
        if (value === this._source) {
            return;
        }
        this._source = value;
        if (value instanceof PIXI.Texture) {
            this._sprite.texture = value;
            this.correctionWidthAndHeight();
            this.updatesettings(true);
            this.emit(Sprite.SourceCompleteEvent, value.frame, this);
        }
        else {
            this._sprite.texture = PIXI.Texture.from(value);
            if (this._sprite.texture.width > 1 && this._sprite.texture.height > 1) {
                this.correctionWidthAndHeight();
                this.updatesettings(true);
                this.emit(Sprite.SourceCompleteEvent, this._sprite.texture.frame, this);
            }
            else {
                this._sprite.texture.once("update", () => {
                    this.correctionWidthAndHeight();
                    this.updatesettings(true);
                    this.emit(Sprite.SourceCompleteEvent, this._sprite.texture.frame, this);
                }, this);
            }
        }
    }
    correctionWidthAndHeight() {
        if (this.setting.width == 0) {
            this.setting.width = this._sprite.texture.width;
        }
        if (this.setting.height == 0) {
            this.setting.height = this._sprite.texture.height;
        }
    }
    /** 设置X的锚点 */
    get anchorX() {
        return this._anchorX;
    }
    set anchorX(value) {
        this._anchorX = value;
        this._sprite.anchor.x = value;
    }
    /** 设置Y的锚点 */
    get anchorY() {
        return this._anchorY;
    }
    set anchorY(value) {
        this._anchorY = value;
        this._sprite.anchor.y = value;
    }
    update() {
        if (!isNaN(this.tint))
            this._sprite.tint = this.tint;
        if (!isNaN(this.blendMode))
            this._sprite.blendMode = this.blendMode;
        this._sprite.width = this._width;
        this._sprite.height = this._height;
    }
}
/** 图片加载完成事件 */
Sprite.SourceCompleteEvent = "sourceCompleteEvent";
exports.Sprite = Sprite;


/***/ }),

/***/ "./src/c/SpriteAnimated.ts":
/*!*********************************!*\
  !*** ./src/c/SpriteAnimated.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
/**
 * UI 序列图动画
 * 需要设置轴点旋转，需要使用texturepacker处理轴点
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 */
class SpriteAnimated extends UIBase_1.UIBase {
    constructor() {
        super();
        this._animationName = "";
        /**
         * 是否自动播放
         */
        this._autoPlay = false;
        /**
         * 播放速度
        */
        this._animationSpeed = 1;
        /**
         * 是否循环
         */
        this._loop = true;
    }
    get animationName() {
        return this._animationName;
    }
    set animationName(value) {
        this._animationName = value;
        this.update();
    }
    get autoPlay() {
        return this._autoPlay;
    }
    set autoPlay(value) {
        this._autoPlay = value;
        if (this._curAnimation && value) {
            this._curAnimation.sp.play();
        }
    }
    get source() {
        return this._source;
    }
    set source(value) {
        if (Utils_1._getSourcePath) {
            value = Utils_1._getSourcePath(value, SpriteAnimated);
        }
        this._source = value;
        this.update();
    }
    get animationSpeed() {
        return this._animationSpeed;
    }
    set animationSpeed(value) {
        this._animationSpeed = value;
        this.dalayDraw = true;
    }
    get loop() {
        return this._loop;
    }
    set loop(value) {
        this._loop = value;
        this.dalayDraw = true;
    }
    /** 跳转到第N帧并播放 */
    gotoAndPlay(frameNumber) {
        if (this._curAnimation)
            this._curAnimation.sp.gotoAndPlay(frameNumber);
    }
    /** 跳转到第N帧并停止 */
    gotoAndStop(frameNumber) {
        if (this._curAnimation)
            this._curAnimation.sp.gotoAndStop(frameNumber);
    }
    /** 停止 */
    stop() {
        if (this._curAnimation)
            this._curAnimation.sp.stop();
    }
    /** 播放 */
    play() {
        if (this._curAnimation)
            this._curAnimation.sp.play();
    }
    update() {
        let { _source, _animationName, _animatedSprites, _curAnimation } = this;
        if (_source === undefined) {
            return;
        }
        if (_animationName === "") {
            return;
        }
        if (_animatedSprites === undefined || _animatedSprites.size == 0) {
            _animatedSprites = new Map();
            for (let key in _source.animations) {
                _animatedSprites.set(key, new PIXI.AnimatedSprite(_source.animations[key]));
            }
            if (_animatedSprites.size) {
                let sp = _animatedSprites.get(_animationName);
                if (sp) {
                    sp.loop = this._loop;
                    sp.animationSpeed = this._animationSpeed;
                    this.container.addChild(sp);
                    if (this.autoPlay) {
                        sp.play();
                    }
                    _curAnimation = { name: _animationName, sp: sp };
                }
            }
        }
        if (_curAnimation) {
            if (_curAnimation.name !== _animationName) {
                _curAnimation.sp.stop();
                this.container.removeChild(_curAnimation.sp);
                let sp = _animatedSprites.get(_animationName);
                if (sp) {
                    this.container.addChild(sp);
                    _curAnimation.name = _animationName;
                    _curAnimation.sp = sp;
                    if (this.autoPlay) {
                        sp.play();
                    }
                }
            }
            _curAnimation.sp.loop = this._loop;
            _curAnimation.sp.animationSpeed = this._animationSpeed;
            this._curAnimation = _curAnimation;
            this._animatedSprites = _animatedSprites;
        }
    }
}
exports.SpriteAnimated = SpriteAnimated;


/***/ }),

/***/ "./src/c/SpriteSlice.ts":
/*!******************************!*\
  !*** ./src/c/SpriteSlice.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
/**
 * 动态宽高的图片,9切
 * Event: sourceComplete
 */
class SpriteSlice extends UIBase_1.UIBase {
    /**
     * 构造函数，如果不设置horizontalSlice，verticalSlice。 按设置的BorderWidth进行9切
     *
     * @see https://docs.cocos.com/creator/manual/zh/ui/sliced-sprite.html
     */
    constructor() {
        super();
        this._leftWidth = 0;
        this._topHeight = 0;
        this._rightWidth = 0;
        this._bottomHeight = 0;
        /** 边框 */
        this.bw = 0;
        this.vs = true;
        this.hs = true;
    }
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    get source() {
        return this._source;
    }
    set source(value) {
        if (Utils_1._getSourcePath) {
            value = Utils_1._getSourcePath(value);
        }
        if (value === undefined) {
            return;
        }
        if (value === this._source) {
            return;
        }
        this._source = value;
        if (value instanceof PIXI.Texture) {
            this._texture = value;
            this.createSlice();
            this.emit(SpriteSlice.SourceCompleteEvent, value.frame, this);
        }
        else {
            if (this._texture) {
                this._texture.removeAllListeners();
            }
            this._texture = PIXI.Texture.from(value);
            if (this._texture.width > 1 && this._texture.height > 1) {
                if (this._texture) {
                    this.createSlice();
                    this.emit(SpriteSlice.SourceCompleteEvent, this._texture.frame, this);
                }
            }
            else {
                this._texture.once("update", () => {
                    if (this._texture) {
                        this.createSlice();
                        this.emit(SpriteSlice.SourceCompleteEvent, this._texture.frame, this);
                    }
                }, this);
            }
        }
    }
    /**
     * 边角宽度，要9切的范围
    */
    set borderWidth(value) {
        this.bw = value;
        this._topHeight = value;
        this._leftWidth = value;
        this._rightWidth = value;
        this._bottomHeight = value;
        this.drawSlicePlane();
    }
    get borderWidth() {
        return this.bw;
    }
    /**
     * 获取设置距离左边宽度
     */
    get leftWidth() {
        return this._leftWidth;
    }
    set leftWidth(value) {
        this._leftWidth = value;
        this.drawSlicePlane();
    }
    /**
     * 获取设置距离顶部宽度
     */
    get topHeight() {
        return this._topHeight;
    }
    set topHeight(value) {
        this._topHeight = value;
        this.drawSlicePlane();
    }
    /**
     * 获取设置距离右边宽度
     */
    get rightWidth() {
        return this._rightWidth;
    }
    set rightWidth(value) {
        this._rightWidth = value;
        this.drawSlicePlane();
    }
    /**
     * 获取设置距离底部宽度
     */
    get bottomHeight() {
        return this._bottomHeight;
    }
    set bottomHeight(value) {
        this._bottomHeight = value;
        this.drawSlicePlane();
    }
    /**
     * 是否水平切
    */
    set horizontalSlice(value) {
        this.hs = value;
        this.setting.minWidth = this.bw * 2;
        this.drawSlicePlane();
    }
    get horizontalSlice() {
        return this.hs;
    }
    /**
      * 是否垂直切
     */
    set verticalSlice(value) {
        this.vs = value;
        this.setting.minHeight = this.bw * 2;
        this.drawSlicePlane();
    }
    get verticalSlice() {
        return this.vs;
    }
    createSlice() {
        if (this._texture == null) {
            return;
        }
        const lastSlicePlane = this._nineSlice;
        this._nineSlice = new PIXI.NineSlicePlane(this._texture);
        this.drawSlicePlane();
        //跳过编译器
        this.container.addChild(this._nineSlice);
        this.dalayDraw = true;
        if (lastSlicePlane) {
            this.container.removeChild(lastSlicePlane);
        }
    }
    drawSlicePlane() {
        if (this._nineSlice === undefined) {
            return;
        }
        const nineSlicePlane = this._nineSlice;
        nineSlicePlane.width = this._width;
        nineSlicePlane.height = this._height;
        if (this.vs && this.hs) {
            //默认
            nineSlicePlane.topHeight = this._topHeight;
            nineSlicePlane.bottomHeight = this._bottomHeight;
            nineSlicePlane.leftWidth = this._leftWidth;
            nineSlicePlane.rightWidth = this._rightWidth;
        }
        else if (this.hs) {
            nineSlicePlane.leftWidth = this._leftWidth;
            nineSlicePlane.rightWidth = this._rightWidth;
        }
        else { //vs
            nineSlicePlane.topHeight = this._topHeight;
            nineSlicePlane.bottomHeight = this._bottomHeight;
        }
    }
    update() {
        const nineSlicePlane = this._nineSlice;
        if (nineSlicePlane === undefined) {
            return;
        }
        if (nineSlicePlane) {
            nineSlicePlane.width = this._width;
            nineSlicePlane.height = this._height;
            if (!isNaN(this.tint)) {
                nineSlicePlane.tint = this.tint;
            }
            if (!isNaN(this.blendMode)) {
                nineSlicePlane.blendMode = this.blendMode;
            }
        }
    }
}
/** 图片加载完成事件 */
SpriteSlice.SourceCompleteEvent = "sourceCompleteEvent";
exports.SpriteSlice = SpriteSlice;


/***/ }),

/***/ "./src/c/SpriteTiling.ts":
/*!*******************************!*\
  !*** ./src/c/SpriteTiling.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
/**
 * UI平铺显示对象,功能与官方一直，可参考官方示例
 *
 * @example https://pixijs.io/examples/#/sprite/tiling-sprite.js
 */
class SpriteTiling extends UIBase_1.UIBase {
    constructor(width, height) {
        super(width, height);
        this._tilePosition = new PIXI.ObservablePoint(this.update, this);
        this._tileScale = new PIXI.ObservablePoint(this.update, this);
    }
    /**
     * 获取或设置显示源
     * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
     *
     * 设置null可以传入PIXI.Texture.EMPTY
     */
    get source() {
        return this._source;
    }
    set source(value) {
        if (value === undefined) {
            return;
        }
        if (value === this._source) {
            return;
        }
        this._source = value;
        if (value instanceof PIXI.Texture) {
            this.getNewTilingSprite(value);
        }
        else {
            const t = PIXI.Texture.from(value);
            const sprite = this.getNewTilingSprite(t);
            sprite.texture.once("update", () => {
                if (!this.height) {
                    this.height = sprite.height;
                }
                if (!this.width) {
                    this.width = sprite.width;
                }
                this.updatesettings(true);
            }, this);
        }
    }
    getNewTilingSprite(t) {
        if (this._sprite === undefined) {
            this._sprite = new PIXI.TilingSprite(t);
            this.container.addChild(this._sprite);
        }
        else {
            this._sprite.texture.removeAllListeners();
            this._sprite.texture = t;
        }
        return this._sprite;
    }
    /** 获取设置位置 */
    get tilePosition() {
        return this._tilePosition;
    }
    set tilePosition(value) {
        this._tilePosition.set(value.x, value.y);
        this.update();
    }
    /** 获取设置缩放 */
    get tileScale() {
        return this._tileScale;
    }
    set tileScale(value) {
        this._tileScale.set(value.x, value.y);
        this.update();
    }
    update() {
        if (this._sprite) {
            if (!isNaN(this.tint))
                this._sprite.tint = this.tint;
            if (!isNaN(this.blendMode))
                this._sprite.blendMode = this.blendMode;
            this._sprite.tileScale.set(this._tileScale.x, this._tileScale.y);
            this._sprite.tilePosition.set(this._tilePosition.y, this._tilePosition.y);
            this._sprite.width = this._width;
            this._sprite.height = this._height;
        }
    }
}
exports.SpriteTiling = SpriteTiling;


/***/ }),

/***/ "./src/c/Text.ts":
/*!***********************!*\
  !*** ./src/c/Text.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
/**
 * UI文本显示对象
 *
 * 中文换行特殊处理 xxxx.style.breakWords = true;
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 * @see https://pixijs.io/pixi-text-style
 */
class Text extends UIBase_1.UIBase {
    /**
     * 文本构造函数
     * @param text 要显示的内容，默认为""
     * @param TextStyle {} 文本样式，参考TextStyle
     */
    constructor(text = "", TextStyle) {
        super();
        this._source = text;
        this._text = new PIXI.Text(text, TextStyle);
        this.setDefaultSize(this._text.width, this._text.height);
        this.container.addChild(this._text);
    }
    /**
     * 获取或设置文本
     */
    get source() {
        return this._source;
    }
    set source(value) {
        if (value === this._source) {
            return;
        }
        this._source = value;
        this._text.text = value;
        this.updatesettings(true);
    }
    /**
     * 获取或设置文本内容
     */
    get label() {
        return this._source;
    }
    set label(value) {
        this.source = value;
    }
    get style() {
        return this._text.style;
    }
    set style(value) {
        this._text.style = value;
    }
    get textWidth() {
        return this._text.getBounds().width;
    }
    get textHeight() {
        return this._text.getBounds().height;
    }
    get textBounds() {
        return this._text.getBounds();
    }
    baseupdate() {
        const bounds = this._text.getBounds();
        this.setting.width = bounds.width;
        this.setting.widthPct = undefined;
        this.setting.height = bounds.height;
        this.setting.heightPct = undefined;
        super.baseupdate();
    }
    update() {
        if (!isNaN(this.tint))
            this._text.tint = this.tint;
        if (!isNaN(this.blendMode))
            this._text.blendMode = this.blendMode;
    }
}
exports.Text = Text;
/** 获得默认行高 */
function defaultLineHeight(style) {
    const _tempText = new PIXI.Text("1", style);
    const lineHeight = _tempText.height;
    const textHeight = _tempText.height;
    _tempText.destroy();
    return { lineHeight, textHeight };
}
exports.defaultLineHeight = defaultLineHeight;


/***/ }),

/***/ "./src/c/TextInput.ts":
/*!****************************!*\
  !*** ./src/c/TextInput.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HtmlInput_1 = __webpack_require__(/*! ./InputText/HtmlInput */ "./src/c/InputText/HtmlInput.ts");
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
/**
 * @example
 * new PIXI.TextInput({
 * input: {
 *      fontSize: '25pt',
 *      padding: '14px',
 *      width: '500px',
 *      color: '#26272E'
 *  },
 *  box: {...}
 * })
 */
class TextInput extends UIBase_1.UIBase {
    constructor(styles) {
        super();
        this._disabled = false;
        this._maxLength = NaN;
        this._previous = {};
        this._domVisible = true;
        this._placeholder = '';
        this._placeholderColor = 0xa9a9a9;
        this._substituted = false;
        this._resolution = 1;
        this.state = 'DEFAULT';
        this._inputStyle = Object.assign({
            position: 'absolute',
            background: 'none',
            border: 'none',
            outline: 'none',
            transformOrigin: '0 0',
            padding: '5px 8px',
            color: '#000000',
            lineHeight: '1'
        }, styles);
        this.htmlInputShared = new HtmlInput_1.default(this._inputStyle.multiline);
        this.htmlInputShared.setStyle(this._inputStyle);
        this.htmlInputShared.on("input" /* input */, this._onInputInput, this);
        this.htmlInputShared.on('focus', this._onFocused, this);
        this.htmlInputShared.on('blur', this._onBlurred, this);
        this.substituteText = true;
        this._setState('DEFAULT');
        this.container.isEmitRender = true;
        this.container.on("render", this.render, this);
    }
    // GETTERS & SETTERS
    update() {
        if (this._surrogate) {
            //this._surrogate.width = this.actualWidth;
            //this._surrogate.height = this.actualHeight;
        }
        this.setInputStyle("width", this.actualWidth.toString() + "px");
        this.setInputStyle("height", this.actualHeight.toString() + "px");
    }
    /**
     * 预览文字
     */
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(text) {
        this._placeholder = text;
        if (this._substituted) {
            this._updateSurrogate();
            this.htmlInputShared.placeholder = '';
        }
        else {
            this.htmlInputShared.placeholder = text;
        }
    }
    /**
     * 设置不可用
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this.htmlInputShared.disabled = value;
        this._setState(value ? 'DISABLED' : 'DEFAULT');
    }
    /**
     * 设置最大可输入
     */
    get maxLength() {
        return this._maxLength;
    }
    set maxLength(value) {
        this._maxLength = value;
        this.htmlInputShared.setAttribute('maxlength', value.toString());
    }
    /**
     * 过滤表达式
     */
    get restrict() {
        return this.htmlInputShared.restrict;
    }
    set restrict(regex) {
        this.htmlInputShared.restrict = regex;
    }
    /**
     * 设置字体大小
     */
    get fontSize() {
        if (this._inputStyle.fontSize == null) {
            return NaN;
        }
        return parseInt(this._inputStyle.fontSize);
    }
    set fontSize(value) {
        const str = value + "px";
        this.setInputStyle("fontSize", str);
    }
    /** 设置字体 */
    get fontFamily() {
        return this._inputStyle.fontFamily;
    }
    set fontFamily(value) {
        this.setInputStyle("fontFamily", value);
    }
    /**
     * 设置字体颜色
     */
    get fill() {
        if (this._inputStyle.color == null) {
            return "";
        }
        return this._inputStyle.color;
    }
    set fill(value) {
        this.setInputStyle("color", value.toString());
    }
    /**
     * 设置文本
     */
    get text() {
        return this.htmlInputShared.value;
    }
    set text(text) {
        this.htmlInputShared.value = text;
        if (this._substituted)
            this._updateSurrogate();
    }
    get substituteText() {
        return this._substituted;
    }
    set substituteText(substitute) {
        if (this._substituted == substitute)
            return;
        this._substituted = substitute;
        if (substitute) {
            this._createSurrogate();
            this._domVisible = false;
        }
        else {
            this._destroySurrogate();
            this._domVisible = true;
        }
        this.placeholder = this._placeholder;
        this._update();
    }
    /**
     * 设置焦点
     */
    focus() {
        this.htmlInputShared.setStyle(this._inputStyle);
        if (this._substituted && !this._domVisible)
            this.htmlInputShared.visible = true;
        this.htmlInputShared.value = this.text;
        this.htmlInputShared.focus();
    }
    /**
     * 失去焦点
     */
    blur() {
        this.htmlInputShared.blur();
    }
    /**
     * 全选
     */
    select() {
        this.focus();
        this.htmlInputShared.select();
    }
    /**
     * 设置css style样式
     * @param key 健
     * @param value 值
     */
    setInputStyle(key, value) {
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key, value);
        if (this._substituted && (key === 'fontFamily' || key === 'fontSize'))
            this._updateFontMetrics();
        if (this._lastRenderer)
            this._update();
    }
    // SETUP
    _onInputInput() {
        if (this._substituted)
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
        if (this._substituted)
            this._updateSubstitution();
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
        if (this._needsUpdate())
            this._update();
    }
    _update() {
        this._updateDOMInput();
        if (this._substituted)
            this._updateSurrogate();
    }
    _updateSubstitution() {
        if (this.state === 'FOCUSED') {
            this._domVisible = true;
            if (this._surrogate)
                this._surrogate.visible = false;
            this.text.length === 0;
        }
        else {
            this._domVisible = false;
            if (this._surrogate)
                this._surrogate.visible = true;
        }
        this._updateDOMInput();
        this._updateSurrogate();
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
    // INPUT SUBSTITUTION
    _createSurrogate() {
        this._surrogateHitbox = new PIXI.Graphics();
        this._surrogateHitbox.name = "_surrogateHitbox";
        this._surrogateHitbox.alpha = 0;
        this._surrogateHitbox.interactive = true;
        this._surrogateHitbox.cursor = 'text';
        this._surrogateHitbox.on('pointerdown', this._onSurrogateFocus, this);
        this.container.addChild(this._surrogateHitbox);
        this._surrogateMask = new PIXI.Graphics();
        this._surrogateMask.name = "_surrogateMask";
        this.container.addChild(this._surrogateMask);
        this._surrogate = new PIXI.Text('', {});
        this._surrogate.name = "_surrogate";
        this.container.addChild(this._surrogate);
        this._surrogate.mask = this._surrogateMask;
        this._updateFontMetrics();
        this._updateSurrogate();
    }
    _updateSurrogate() {
        const padding = this._deriveSurrogatePadding();
        const inputBounds = this.htmlInputShared.getDOMInputBounds();
        if (this._surrogate) {
            this._surrogate.style = this._deriveSurrogateStyle();
            this._surrogate.style.padding = Math.max(...padding);
            this._surrogate.y = this._inputStyle.multiline ? padding[0] : (inputBounds.height - this._surrogate.height) / 2;
            this._surrogate.x = padding[3];
            if (this._inputStyle.multiline) {
                this._surrogate.style.wordWrap = true;
                this._surrogate.style.wordWrapWidth = inputBounds.width;
                this._surrogate.style.breakWords = true;
            }
            this._surrogate.text = this._deriveSurrogateText();
        }
        this._updateSurrogateHitbox(inputBounds);
        this._updateSurrogateMask(inputBounds, padding);
    }
    _updateSurrogateHitbox(bounds) {
        if (this._surrogateHitbox) {
            this._surrogateHitbox.clear();
            this._surrogateHitbox.beginFill(0);
            this._surrogateHitbox.drawRect(0, 0, bounds.width, bounds.height);
            this._surrogateHitbox.endFill();
            this._surrogateHitbox.interactive = !this._disabled;
        }
    }
    _updateSurrogateMask(bounds, padding) {
        if (this._surrogateMask) {
            this._surrogateMask.clear();
            this._surrogateMask.beginFill(0);
            this._surrogateMask.drawRect(padding[3], 0, bounds.width - padding[3] - padding[1], bounds.height);
            this._surrogateMask.endFill();
        }
    }
    _destroySurrogate() {
        if (!this._surrogate)
            return;
        if (!this._surrogateHitbox)
            return;
        this.container.removeChild(this._surrogate);
        this.container.removeChild(this._surrogateHitbox);
        this._surrogate.destroy();
        this._surrogateHitbox && this._surrogateHitbox.destroy();
        this._surrogate = undefined;
        this._surrogateHitbox = undefined;
    }
    _onSurrogateFocus() {
        this.htmlInputShared.visible = true;
        //sometimes the input is not being focused by the mouseclick
        setTimeout(this._ensureFocus.bind(this), 10);
    }
    _ensureFocus() {
        if (!this._hasFocus())
            this.focus();
    }
    _deriveSurrogateStyle() {
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
            style.fill = this._placeholderColor;
        return style;
    }
    _deriveSurrogatePadding() {
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
    _deriveSurrogateText() {
        return this.htmlInputShared.value.length === 0 ? this._placeholder : this.htmlInputShared.value;
    }
    _updateFontMetrics() {
        const style = this._deriveSurrogateStyle();
        const font = style.toFontString();
        this._fontMetrics = PIXI.TextMetrics.measureFont(font);
    }
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
}
exports.TextInput = TextInput;


/***/ }),

/***/ "./src/c/TextStyle.ts":
/*!****************************!*\
  !*** ./src/c/TextStyle.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TextStyle extends PIXI.TextStyle {
    constructor(style) {
        super(style);
    }
}
exports.TextStyle = TextStyle;


/***/ }),

/***/ "./src/c/Timeline.ts":
/*!***************************!*\
  !*** ./src/c/Timeline.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Ticker_1 = __webpack_require__(/*! ../core/Ticker */ "./src/core/Ticker.ts");
const Easing_1 = __webpack_require__(/*! ./Easing */ "./src/c/Easing.ts");
const ObjectPool_1 = __webpack_require__(/*! ../core/ObjectPool */ "./src/core/ObjectPool.ts");
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
 * 时间轴主类
 *
 * @constructor
 * @class
 * @namespace tween.Timeline
 * @param {Object=} params 默认参数
 * @example let tl = new Timeline({delay:200})
 * @extends Tween
 */
class Timeline {
    constructor() {
        this.id = -1;
        this._frames = new Array();
        this._frameCount = 0;
        this._elapsedMS = 16.66; //1000/60
        this._prevTime = 0;
        this._duration = 0;
        this._isStop = false;
        this._lastNode = new Map();
        this._isSetDefault = false;
    }
    setDefault(object, _duration, fps) {
        this._object = object;
        this._duration = _duration;
        this._elapsedMS = 1000 / fps;
        let frameCount = Math.round(_duration / this._elapsedMS);
        this._frameCount = frameCount;
        let frames = this._frames;
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
        let parentNode = this._lastNode.get(property);
        let node = ObjectPool_1.objectPoolShared.pop(Node);
        if (parentNode === undefined) {
            node.parent = undefined;
        }
        else {
            node.parent = parentNode;
        }
        node.startFrame = node.parent === undefined ? 0 : (node.parent.endFrame + 1);
        node.end = value;
        node.start = node.parent === undefined ? (this._object[property] || 0) : node.parent.end;
        node.default = this._object[property];
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
        let { _lastNode, _frames } = this;
        _lastNode.forEach((value, key) => {
            let node = this.seekLastNode(value, frame);
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
        let { _prevTime, _frames, _frameCount, _elapsedMS } = this;
        let curFrame = Math.round(_prevTime / _elapsedMS);
        if (curFrame >= _frameCount) {
            this._isStop = true;
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
                case "scaleX":
                case "scaleY":
                case "rotation":
                    this._object[key] = node.default * Math.floor(start + (end - start) * value);
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
        this._duration = 0;
        this._isStop = false;
        this._isSetDefault = false;
        this._lastNode.clear();
    }
    destroy(destroyWebGL) {
    }
}
exports.Timeline = Timeline;


/***/ }),

/***/ "./src/c/Tween.ts":
/*!************************!*\
  !*** ./src/c/Tween.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
const Easing_1 = __webpack_require__(/*! ./Easing */ "./src/c/Easing.ts");
const Interpolation_1 = __webpack_require__(/*! ./tween/Interpolation */ "./src/c/tween/Interpolation.ts");
const core_1 = __webpack_require__(/*! ./tween/core */ "./src/c/tween/core.ts");
const constants_1 = __webpack_require__(/*! ./tween/constants */ "./src/c/tween/constants.ts");
const InteractionEvent_1 = __webpack_require__(/*! ../interaction/InteractionEvent */ "./src/interaction/InteractionEvent.ts");
const defaultEasing = Easing_1.Easing.Linear.None;
/**
 * 缓动动画的主类
 * @constructor
 * @class
 * @namespace vfui.Tween
 * @param {Object=} object
 * @example let tween = new Tween(myObject).to({width:'300px'}, 2000).start()
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
     * @memberof vfui.Tween
     * @static
     */
    static fromTo(object, to, duration) {
        const tween = new Tween(object).to(to, duration);
        return tween;
    }
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    static to(object, to, duration) {
        return Tween.fromTo(object, to, duration);
    }
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    static from(object, from, duration) {
        return Tween.fromTo(object, from, duration);
    }
    /**
     * 是否在播放中
     * @return {boolean}
     * @example tween.isPlaying()
     * @memberof vfui.Tween
     */
    get isPlaying() {
        return this._isPlaying;
    }
    /**
     * 是否开始播放
     * @return {boolean}
     * @example tween.isStarted()
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
     */
    reversed() {
        return this._reversed;
    }
    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof vfui.Tween
     */
    pause() {
        if (!this._isPlaying) {
            return this;
        }
        this._isPlaying = false;
        core_1.remove(this);
        return this.emit(InteractionEvent_1.TweenEvent.pause, this.object);
    }
    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof vfui.Tween
     */
    play() {
        if (this._isPlaying) {
            return this;
        }
        this._isPlaying = true;
        this._startTime = 0;
        core_1.add(this);
        return this.emit(InteractionEvent_1.TweenEvent.play, this.object);
    }
    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new vfui.Tween({x:0}).to({x:100}, 2000)
     * @memberof vfui.Tween
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
        let { _valuesStart, _valuesEnd, object } = this;
        if (!_valuesStart.processed) {
            for (const property in _valuesEnd) {
                let start = object && object[property] && Utils_1.deepCopy(object[property]);
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
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
     */
    stop() {
        let { _isPlaying, _isFinite, object, _duration, _initRepeat, _yoyo, _reversed } = this;
        if (!_isPlaying) {
            return this;
        }
        let atStart = _isFinite ? (_initRepeat + 1) % 2 === 1 : !_reversed;
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
        return this.emit(InteractionEvent_1.TweenEvent.stop, object);
    }
    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof vfui.Tween
     */
    delay(amount) {
        this._delayTime = amount;
        return this;
    }
    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
     */
    easing(_easingFunction) {
        this._easingFunction = _easingFunction;
        return this;
    }
    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
     */
    update(elapsedMS, preserve, forceTime) {
        let { _onStartCallbackFired, _easingFunction, _interpolationFunction, _easingReverse, _repeat, _delayTime, _reverseDelayTime, _yoyo, _reversed, _startTime, _duration, _valuesStart, _valuesEnd, object, _isFinite, _isPlaying } = this;
        if (!_isPlaying || (_startTime > 0 && !forceTime)) {
            this._startTime -= elapsedMS;
            this._startTime = Math.max(0, this._startTime);
            return true;
        }
        let elapsed;
        let currentEasing;
        let property;
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
            this.emit(InteractionEvent_1.TweenEvent.start, object);
            this._onStartCallbackFired = true;
        }
        currentEasing = _reversed ? _easingReverse || _easingFunction : _easingFunction;
        for (property in _valuesEnd) {
            const start = _valuesStart[property];
            const end = _valuesEnd[property];
            const value = currentEasing[property] ? currentEasing[property](elapsed) : typeof currentEasing === 'function' ? currentEasing(elapsed) : defaultEasing(elapsed);
            if (typeof end === 'number') {
                object[property] = Math.floor(start + (end - start) * value);
            }
            else if (typeof end === 'boolean') {
                object[property] = end;
                elapsed = _reversed ? 0 : 1;
            }
            else { //颜色
                constants_1.recompose(property, object, _valuesStart, _valuesEnd, value, elapsed);
            }
            // else if (Array.isArray(end) && !(end as any).isString && !Array.isArray(start)) {
            //     const _interpolationFunctionCall = _interpolationFunction[property]
            //     ? _interpolationFunction[property] : typeof _interpolationFunction === 'function' ? _interpolationFunction : Interpolation.Linear;
            //     object[property] = _interpolationFunctionCall(end, value, object[property]);
            // } 
        }
        this.emit(InteractionEvent_1.TweenEvent.update, object, elapsed, elapsedMS);
        if (elapsed === 1 || (_reversed && elapsed === 0)) {
            this._prevTime = 0;
            if (_repeat > 0 && _duration > 0) {
                if (_isFinite) {
                    this._repeat--;
                }
                if (_yoyo) {
                    this._reversed = !_reversed;
                }
                this.emit(_yoyo && !_reversed ? InteractionEvent_1.TweenEvent.reverse : InteractionEvent_1.TweenEvent.repeat, object);
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
                this.emit(InteractionEvent_1.TweenEvent.complete, object);
                this._repeat = this._initRepeat;
                return false;
            }
        }
        return true;
    }
}
Tween.core = { add: core_1.add, get: core_1.get, getAll: core_1.getAll, remove: core_1.remove, removeAll: core_1.removeAll, removeDisplay: core_1.removeDisplay, update: core_1.update };
Tween.Event = InteractionEvent_1.TweenEvent;
exports.Tween = Tween;


/***/ }),

/***/ "./src/c/tween/Interpolation.ts":
/*!**************************************!*\
  !*** ./src/c/tween/Interpolation.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "./src/c/tween/constants.ts");
/**
 * 差值计算列表
 * @namespace TWEEN.Interpolation
 * @example
 *
 * let bezier = vfui.tween.Interpolation.Bezier
 * new vfui.tween.Tween({x:0}).to({x:[0, 4, 8, 12, 15, 20, 30, 40, 20, 40, 10, 50]}, 1000).interpolation(bezier).start()
 * @memberof vfui.tween
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

/***/ "./src/c/tween/constants.ts":
/*!**********************************!*\
  !*** ./src/c/tween/constants.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../../core/Utils */ "./src/core/Utils.ts");
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

/***/ "./src/c/tween/core.ts":
/*!*****************************!*\
  !*** ./src/c/tween/core.ts ***!
  \*****************************/
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
 * @memberof vfui.tween
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
 * @memberof vfui.tween
 * @example
 * let tween = new vfui.tween.Tween({x:0})
 * tween.to({x:200}, 1000)
 * vfui.tween.add(tween)
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
 * @memberof vfui.tween
 * @example
 * vfui.tween.FrameThrottle(60)
 */
function FrameThrottle(frameCount = 120) {
    powerModeThrottle = frameCount * 1.05;
}
exports.FrameThrottle = FrameThrottle;
/**
 * 延时处理，针对插件、canvas、dom
 * @param {number} state=true 是否平滑处理
 * @memberof vfui.tween
 * @example
 * vfui.tween.ToggleLagSmoothing(false)
 */
function ToggleLagSmoothing(_state = true) {
    handleLag = _state;
}
exports.ToggleLagSmoothing = ToggleLagSmoothing;
/**
 * 获得所有缓动对象
 * @memberof vfui.tween
 * vfui.tween.getAll()
 */
function getAll() {
    return _tweens;
}
exports.getAll = getAll;
/**
 * 移除所有动画对象
 * @example  vfui.tween.removeAll()
 * @memberof vfui.tween
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
 * @memberof vfui.tween
 * @example
 * vfui.tween.get(tween)
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
        console.log(_tweens[i].object.uuid);
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
 * @memberof vfui.tween
 * @example
 * vfui.tween.remove(tween)
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
 * @memberof vfui.tween
 * @example
 * vfui.tween.update(500)
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
 * @memberof vfui.tween
 * @example vfui.tween.isRunning()
 */
function isRunning() {
    return isStarted;
}
exports.isRunning = isRunning;
/**
 * 返回是否开启延迟平滑状态
 * @return {Boolean}
 * @memberof vfui.tween
 * @example vfui.tween.isRunning()
 */
function isLagSmoothing() {
    return handleLag;
}
exports.isLagSmoothing = isLagSmoothing;


/***/ }),

/***/ "./src/c/tween/index.ts":
/*!******************************!*\
  !*** ./src/c/tween/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! ./core */ "./src/c/tween/core.ts");
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
const Easing_1 = __webpack_require__(/*! ../Easing */ "./src/c/Easing.ts");
exports.Easing = Easing_1.Easing;
const Interpolation_1 = __webpack_require__(/*! ./Interpolation */ "./src/c/tween/Interpolation.ts");
exports.Interpolation = Interpolation_1.Interpolation;
const utils = __webpack_require__(/*! ./constants */ "./src/c/tween/constants.ts");
exports.utils = utils;
const InteractionEvent_1 = __webpack_require__(/*! ../../interaction/InteractionEvent */ "./src/interaction/InteractionEvent.ts");
exports.TweenEvent = InteractionEvent_1.TweenEvent;
const Tween_1 = __webpack_require__(/*! ../Tween */ "./src/c/Tween.ts");
exports.Tween = Tween_1.Tween;
const Timeline_1 = __webpack_require__(/*! ../Timeline */ "./src/c/Timeline.ts");
exports.Timeline = Timeline_1.Timeline;


/***/ }),

/***/ "./src/core/InputBase.ts":
/*!*******************************!*\
  !*** ./src/core/InputBase.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ./UIBase */ "./src/core/UIBase.ts");
const InputController = __webpack_require__(/*! ../interaction/InputController */ "./src/interaction/InputController.ts");
/**
 * 输入对象的基础类
 *
 * base object for all Input type objects
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {number} 宽度
 * @param height {number} 高度
 * @param tabIndex {(PIXI.UI.SliceSprite|PIXI.UI.Sprite)} will be used as background for input
 */
class InputBase extends UIBase_1.UIBase {
    constructor(width, height, tabIndex, tabGroup) {
        super(width, height);
        this._focused = false;
        this._useTab = true;
        this._usePrev = true;
        this._useNext = true;
        this.__down = false;
        this.container.interactive = true;
        InputController.registrer(this, tabIndex, tabGroup);
        this.container.on("pointerdown", this.onPointer, this);
        this.container.on("pointerup", this.onPointer, this);
        this.container.on("pointerupoutside", this.onPointer, this);
    }
    onPointer(e) {
        switch (e.type) {
            case "pointerdown":
                this.focus();
                this.__down = true;
                break;
            case "pointerup":
                this.__down = false;
                break;
            case "pointerupoutside":
                this.__down = false;
                break;
        }
    }
    keyDownEvent(event) {
        const e = event;
        if (e.which === 9) {
            if (this._useTab) {
                InputController.fireTab();
                e.preventDefault();
            }
        }
        else if (e.which === 38) {
            if (this._usePrev) {
                InputController.firePrev();
                e.preventDefault();
            }
        }
        else if (e.which === 40) {
            if (this._useNext) {
                InputController.fireNext();
                e.preventDefault();
            }
        }
    }
    documentMouseDown() {
        if (!this.__down)
            this.blur();
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
            InputController.set(this);
            this.emit("focusChanged", true);
            this.emit("focus");
        }
    }
    blur() {
        if (this._focused) {
            InputController.clear();
            this._focused = false;
            this._clearEvents();
            this.emit("focusChanged", false);
            this.emit("blur");
        }
    }
}
exports.InputBase = InputBase;


/***/ }),

/***/ "./src/core/InputSkinBase.ts":
/*!***********************************!*\
  !*** ./src/core/InputSkinBase.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputBase_1 = __webpack_require__(/*! ./InputBase */ "./src/core/InputBase.ts");
const ClickEvent_1 = __webpack_require__(/*! ../interaction/ClickEvent */ "./src/interaction/ClickEvent.ts");
const InteractionEvent_1 = __webpack_require__(/*! ../interaction/InteractionEvent */ "./src/interaction/InteractionEvent.ts");
const SpriteSlice_1 = __webpack_require__(/*! ../c/SpriteSlice */ "./src/c/SpriteSlice.ts");
/**
 * UI 按钮显 示对象
 *
 * @class
 * @extends PIXI.UI.InputBase
 * @memberof PIXI.UI
 * @param [options.tabIndex=0] {Number} input tab index
 * @param [options.tabGroup=0] {Number|String} input tab group
 * @param [options.width=100h] {Number|String} width
 * @param [options.height=20] {Number|String} height
 */
class InputSkinBase extends InputBase_1.InputBase {
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    constructor(width, height, tabIndex, tabGroup) {
        super(width, height, tabIndex, tabGroup);
        this._isHover = false;
        this._background = new SpriteSlice_1.SpriteSlice();
        this._clickEvent = new ClickEvent_1.ClickEvent(this, true);
        /**
         * 组件的当前视图状态 。 后续扩展
         */
        this._currentState = "Up";
        this._background.widthPet = "100%";
        this._background.heightPct = "100%";
        this._background.pivot = 0.5;
        this._background.verticalAlign = 2 /* middle */;
        this._background.horizontalAlign = 2 /* center */;
        this._background.borderWidth = 10;
        this.addChild(this._background);
        this.on(InteractionEvent_1.TouchMouseEvent.onMove, this.onMove, this);
        this.on(InteractionEvent_1.TouchMouseEvent.onHover, this.onHover, this);
        this.on(InteractionEvent_1.TouchMouseEvent.onPress, this.onPress, this);
        this.on(InteractionEvent_1.TouchMouseEvent.onClick, this.onClick, this);
    }
    onHover(e, thisObj, over) {
        this._isHover = over;
        this.currentState = "Up";
    }
    onPress(e, thisObj, isPress) {
        if (isPress)
            this.currentState = "Down";
        else
            this.currentState = "Up";
    }
    onClick() {
        //this.currentState = "Down";
    }
    onMove() {
        this.currentState = "Move";
    }
    get currentState() {
        return this._currentState;
    }
    set currentState(value) {
        if (value === this._currentState) {
            return;
        }
        this._currentState = value;
        this.update();
    }
    get sourceUp() {
        return this._sourceUp;
    }
    set sourceUp(value) {
        if (value == this._sourceUp) {
            return;
        }
        this._sourceUp = value;
        this.update();
    }
    get sourceMove() {
        return this._sourceMove;
    }
    set sourceMove(value) {
        if (value == this._sourceMove) {
            return;
        }
        this._sourceMove = value;
        this.update();
    }
    get sourceDown() {
        return this._sourceDown;
    }
    set sourceDown(value) {
        if (value == this._sourceDown) {
            return;
        }
        this._sourceDown = value;
        this.update();
    }
    focus() {
        if (!this._focused) {
            super.focus();
        }
    }
    blur() {
        if (this._focused) {
            super.blur();
        }
    }
    updateHitArea() {
        const bounds = this.container.getLocalBounds();
        this.container.hitArea = new PIXI.Rectangle(bounds.x < 0 ? bounds.x : 0, bounds.y < 0 ? bounds.y : 0, Math.max(bounds.x + bounds.width + (bounds.x < 0 ? -bounds.x : 0), this.width), Math.max(bounds.y + bounds.height + (bounds.y < 0 ? -bounds.y : 0), this.height));
    }
    update() {
        const thisObj = this;
        this._background.width = this.width;
        this._background.height = this.height;
        this._background.source = thisObj["_source" + this.currentState];
        this.updateHitArea();
    }
}
exports.InputSkinBase = InputSkinBase;


/***/ }),

/***/ "./src/core/ObjectPool.ts":
/*!********************************!*\
  !*** ./src/core/ObjectPool.ts ***!
  \********************************/
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

/***/ "./src/core/Stage.ts":
/*!***************************!*\
  !*** ./src/core/Stage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ./UIBase */ "./src/core/UIBase.ts");
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
class Stage extends PIXI.Container {
    constructor(width, height) {
        super();
        /**
         * 最小宽度
         * @default
         */
        this.minWidth = 0;
        /**
         * 最小高度
         * @default
         */
        this.minHeight = 0;
        /**
         * 节点列表
         */
        this.UIChildren = [];
        /**
         * 是否开启交互功能
         * @default
         */
        this.interactive = true;
        /**
         * 可交互区域
         */
        this.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        /**
         * 是否初始化
         * @default
         */
        this.initialized = true;
        this._width = 0;
        this._height = 0;
        /** 没有功能实现，内部编辑器 */
        this.container = new PIXI.Container;
        this._width = width;
        this._height = height;
        this.stage = this;
        this.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        this.resize(width, height);
    }
    get width() {
        return this._width;
    }
    set width(value) {
        if (!isNaN(value)) {
            this._width = value;
            this.resize();
        }
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (!isNaN(value)) {
            this._height = value;
            this.resize();
        }
    }
    /** 添加显示对象，需集成UIBASE */
    addChild(...UIObject) {
        const argumentsLength = UIObject.length;
        if (argumentsLength > 1) {
            for (let i = 0; i < argumentsLength; i++) {
                this.addChild(UIObject[i]);
            }
        }
        else {
            if (UIObject[0] instanceof UIBase_1.UIBase) {
                const item = UIObject[0];
                if (item.parent) {
                    item.parent.removeChild(item);
                }
                item.parent = this;
                this.UIChildren.push(item);
                super.addChild(item.container);
                item.updatesettings(true);
            }
            else {
                throw "stage addChild arg not vfui";
            }
        }
        return UIObject[0];
    }
    addChildAt(item, index) {
        if (item instanceof UIBase_1.UIBase) {
            if (item.parent) {
                if (item.parent instanceof UIBase_1.UIBase) {
                    item.parent.removeChild(item);
                }
                else {
                    item.parent.removeChild(item);
                }
            }
            item.parent = this;
            super.addChildAt(item.container, index);
            this.UIChildren.splice(index, 0, item);
            item.updatesettings(true);
        }
        else {
            throw "stage addChildAt arg not vfui";
        }
        return item;
    }
    removeChild(...UIObject) {
        const argumentLenght = UIObject.length;
        if (argumentLenght > 1) {
            for (let i = 0; i < argumentLenght; i++) {
                this.removeChild(UIObject[i]);
            }
        }
        else {
            if (!(UIObject[0] instanceof UIBase_1.UIBase)) {
                throw "stage removeChild arg not vfui";
            }
            const item = UIObject[0];
            const index = this.UIChildren.indexOf(item);
            if (index !== -1) {
                super.removeChild(item.container);
                this.UIChildren.splice(index, 1);
                item.parent = undefined;
            }
        }
        return UIObject[0];
    }
    resize(width, height) {
        if (width && !isNaN(width))
            this._width = width;
        if (height && !isNaN(height))
            this._height = height;
        if (this.minWidth || this.minHeight) {
            let rx = 1, ry = 1;
            if (width && width < this.minWidth) {
                rx = this.minWidth / width;
            }
            if (height && height < this.minHeight) {
                ry = this.minHeight / height;
            }
            if (rx > ry && rx > 1) {
                this.scale.set(1 / rx);
                this._height *= rx;
                this._width *= rx;
            }
            else if (ry > 1) {
                this.scale.set(1 / ry);
                this._width *= ry;
                this._height *= ry;
            }
            else if (this.scale.x !== 1) {
                this.scale.set(1);
            }
        }
        this.hitArea.width = this._width;
        this.hitArea.height = this._height;
        for (let i = 0; i < this.UIChildren.length; i++)
            this.UIChildren[i].updatesettings(true, false);
    }
    /** 没有功能实现，内部编辑器 */
    updatesettings() {
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
const tween = __webpack_require__(/*! ../c/tween/index */ "./src/c/tween/index.ts");
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


/***/ }),

/***/ "./src/core/UIBase.ts":
/*!****************************!*\
  !*** ./src/core/UIBase.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UISettings_1 = __webpack_require__(/*! ./UISettings */ "./src/core/UISettings.ts");
const Stage_1 = __webpack_require__(/*! ./Stage */ "./src/core/Stage.ts");
const DragEvent_1 = __webpack_require__(/*! ../interaction/DragEvent */ "./src/interaction/DragEvent.ts");
const DragDropController = __webpack_require__(/*! ../interaction/DragDropController */ "./src/interaction/DragDropController.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/core/Utils.ts");
const ContainerBase_1 = __webpack_require__(/*! ../c/ContainerBase */ "./src/c/ContainerBase.ts");
/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @param width {Number} Width UI对象的宽度
 * @param height {Number} Height UI对象的高度
 * @since 1.0.0
 */
class UIBase extends PIXI.utils.EventEmitter {
    /**
     * 构造函数
     * @param width 宽 数字或百分比, 不传默认0
     * @param height 高 数字或百分比,不传默认0
     */
    constructor(width, height) {
        super();
        this.name = "";
        /**
         * 当前UI包含的节点
         * @default
         */
        this.children = [];
        /**
         * 是否初始化
         * @default
         */
        this.initialized = false;
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
         * 是否脏数据
         * @default
         */
        this.dirty = true;
        /** 测量值 */
        /**
         * @private
         */
        this._width = 0;
        /**
         * @private
         */
        this._height = 0;
        this._parentWidth = 0;
        this._parentHeight = 0;
        /** 动态属性，避免其他类注入 */
        this.attach = {};
        /**
         * 上次的宽度（未使用，丢弃）
         */
        this._oldWidth = -1;
        /**
         * 上次的高度（未使用，丢弃）
         */
        this._oldHeight = -1;
        /**
        *  在不同分辨率下保持像素稳定
        * @default
        */
        this.pixelPerfect = true;
        /**
         * 是否拖动中
         * @default
         */
        this.dragging = false;
        this.dalayDrawTimeId = -1;
        this.uuid = Utils_1.uid();
        this.container = new ContainerBase_1.ContainerBase();
        //this.container.name = this.constructor.name;
        this.setting = new UISettings_1.UISettings();
        if (width && height)
            this.setDefaultSize(width, height);
    }
    /** 设置默认的宽高，一般使用情况在构造函数中，并不会触发组件刷新 */
    setDefaultSize(width, height) {
        const widthItem = this.getPetValue(width);
        if (widthItem.num !== undefined) {
            this.setting.width = widthItem.num;
        }
        else {
            this.setting.widthPct = widthItem.pct;
        }
        const heightItem = this.getPetValue(height);
        if (heightItem.num !== undefined) {
            this.setting.height = heightItem.num;
        }
        else {
            this.setting.heightPct = heightItem.pct;
        }
    }
    /**
     * 数值或百分比，转换为数值类型
     */
    getPetValue(value) {
        let num;
        let pct;
        if (typeof (value) == "number") {
            num = value || 0;
        }
        else if (typeof (value) == "string" && value != "") {
            if (value.indexOf('%') !== -1) {
                pct = parseFloat(value.replace('%', '')) * 0.01 || undefined;
            }
            else {
                num = parseInt(value);
            }
        }
        else {
            pct = undefined;
        }
        if (num)
            num = Math.max(num, 0);
        if (pct) {
            pct = Math.max(pct, 0);
        }
        return { num, pct };
    }
    /** 获取设置X */
    set x(value) {
        this.left = value;
    }
    get x() {
        return this.setting.left;
    }
    /** 获取设置Y */
    set y(value) {
        this.top = value;
    }
    get y() {
        return this.setting.top;
    }
    /**
     * 设置宽度百分比
     */
    set widthPet(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.width = item.num;
        }
        else {
            this.setting.widthPct = item.pct;
        }
        this.updatesettings(true);
    }
    /**
     * 设置宽度,整数
     */
    set width(value) {
        value = Math.max(value, 0);
        this.setting.width = value;
        this.setting.widthPct = undefined;
        this.updatesettings(true);
    }
    get width() {
        return this.setting.width;
    }
    /**
     * 立即获取渲染的实际宽度 Identifier 'actual_width' is not in camel case
     */
    get actualWidth() {
        if (this.dirty) {
            if (this.setting.widthPct && this.parent) {
                this._width = this.parent._width * this.setting.widthPct;
            }
            else {
                this._width = this.setting.width;
            }
        }
        return this._width;
    }
    /**
     * 设置高度，数百分比
     */
    set heightPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.height = item.num;
        }
        else {
            this.setting.heightPct = item.pct;
        }
        this.updatesettings(true);
    }
    /**
     * 设置高度，数字
     */
    set height(value) {
        value = Math.max(value, 0);
        this.setting.height = value;
        this.setting.heightPct = undefined;
        this.updatesettings(true);
    }
    get height() {
        return this.setting.height;
    }
    /**
     * 立即获取渲染的实际高度
     */
    get actualHeight() {
        if (this.dirty) {
            if (this.setting.heightPct && this.parent) {
                this._height = this.parent._height * this.setting.heightPct;
            }
            else {
                this._height = this.setting.height;
            }
        }
        return this._height;
    }
    /**
     * 设置最小宽度百分比
     */
    set minWidthPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.minWidth = item.num;
        }
        else {
            this.setting.minWidthPct = item.pct;
        }
        this.updatesettings(true);
    }
    /**
     * 设置最小宽度
     */
    set minWidth(value) {
        this.setting.minWidth = value;
        this.updatesettings(true);
    }
    get minWidth() {
        return this.setting.minWidth;
    }
    /**
     * 立即获取渲染的实际最小宽度
     */
    get actualMinWidth() {
        if (this.dirty) {
            if (this.setting.minWidthPct && this.parent) {
                this._minWidth = this.parent._width * this.setting.minWidthPct;
            }
            else {
                this._minWidth = this.setting.minWidth;
            }
        }
        return this._minWidth;
    }
    /**
     * 设置最小高度百分比
     */
    set minHeightPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.minHeight = item.num;
        }
        else {
            this.setting.minHeightPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 设置最小高度 */
    set minHeight(value) {
        this.setting.minHeight = value;
        this.updatesettings(true);
    }
    get minHeight() {
        return this.setting.minHeight;
    }
    /**
     * 立即获取渲染的实际最小高度
     */
    get actualMinHeight() {
        if (this.dirty) {
            if (this.setting.minHeightPct && this.parent) {
                this._minHeight = this.parent._height * this.setting.minHeightPct;
            }
            else {
                this._minHeight = this.setting.minHeight;
            }
        }
        return this._minHeight;
    }
    /**
     * 设置最大宽度百分比
     */
    set maxWidthPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.maxWidth = item.num;
        }
        else {
            this.setting.maxWidthPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 置最大宽度 */
    set maxWidth(value) {
        this.setting.maxWidth = value;
        this.updatesettings(true);
    }
    get maxWidth() {
        return this.setting.maxWidth;
    }
    /**
     * 立即获取渲染的实际最小高度
     */
    get actualMaxWidth() {
        if (this.dirty) {
            if (this.setting.maxWidthPct && this.parent) {
                this._maxWidth = this.parent._width * this.setting.maxWidthPct;
            }
            else {
                this._maxWidth = this.setting.maxWidth;
            }
        }
        return this._maxWidth;
    }
    /**
     * 设置最大高度百分比
     */
    set maxHeightPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.maxHeight = item.num;
        }
        else {
            this.setting.maxHeightPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 设置最大高度 */
    set maxHeight(value) {
        this.setting.maxHeight = value;
        this.updatesettings(true);
    }
    get maxHeight() {
        return this.setting.maxHeight;
    }
    /**
     * 立即获取渲染的实际最小高度
     */
    get actualMaxHeight() {
        if (this.dirty) {
            if (this.setting.maxHeightPct && this.parent) {
                this._maxHeight = this.parent._height * this.setting.maxHeightPct;
            }
            else {
                this._maxHeight = this.setting.maxHeight;
            }
        }
        return this._maxHeight;
    }
    /**
     * 设置锚点距左边距离百分比
     */
    set anchorLeftPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.anchorLeft = item.num;
        }
        else {
            this.setting.anchorLeftPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 设置锚点距左边距离 */
    set anchorLeft(value) {
        this.setting.anchorLeft = value;
        this.updatesettings(true);
    }
    get anchorLeft() {
        return this.setting.anchorLeft;
    }
    /**
     * 立即获取渲染的实际锚点左边距离
     */
    get actualAnchorLeft() {
        if (this.dirty) {
            if (this.setting.anchorLeftPct && this.parent) {
                this._anchorLeft = this.parent._width * this.setting.anchorLeftPct;
            }
            else {
                this._anchorLeft = this.setting.anchorLeft;
            }
        }
        return this._anchorLeft;
    }
    /**
     * 获取设置锚点右边距离百分比
     */
    set anchorRightPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.anchorRight = item.num;
        }
        else {
            this.setting.anchorRightPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 获取设置锚点右边距离 */
    set anchorRight(value) {
        this.setting.anchorRight = value;
        this.updatesettings(true);
    }
    get anchorRight() {
        return this.setting.anchorRight;
    }
    /**
     * 立即获取渲染的实际锚点右边距离
     */
    get actualAnchorRight() {
        if (this.dirty) {
            if (this.setting.anchorRightPct && this.parent) {
                this._anchorRight = this.parent._width * this.setting.anchorRightPct;
            }
            else {
                this._anchorRight = this.setting.anchorRight;
            }
        }
        return this._anchorRight;
    }
    /**
     * 获取或设置锚点距离顶部距离百分比
     */
    set anchorTopPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.anchorTop = item.num;
        }
        else {
            this.setting.anchorTopPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 获取或设置锚点距离顶部距离 */
    set anchorTop(value) {
        this.setting.anchorTop = value;
        this.updatesettings(true);
    }
    get anchorTop() {
        return this.setting.anchorTop;
    }
    /**
     * 立即获取渲染的实际锚点顶部距离
     */
    get actualAnchorTop() {
        if (this.dirty) {
            if (this.setting.anchorTopPct && this.parent) {
                this._anchorTop = this.parent._height * this.setting.anchorTopPct;
            }
            else {
                this._anchorTop = this.setting.anchorTop;
            }
        }
        return this._anchorTop;
    }
    /**
     * 设置锚点距离底部距离百分比
     */
    set anchorBottomPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.anchorBottom = item.num;
        }
        else {
            this.setting.anchorBottomPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 获取或设置锚点距离底部距离 */
    set anchorBottom(value) {
        this.setting.anchorBottom = value;
        this.updatesettings(true);
    }
    get anchorBottom() {
        return this.setting.anchorBottom;
    }
    /**
     * 立即获取渲染的实际锚点底部距离
     */
    get actualAnchorBottom() {
        if (this.dirty) {
            if (this.setting.anchorBottomPct && this.parent) {
                this._anchorBottom = this.parent._height * this.setting.anchorBottomPct;
            }
            else {
                this._anchorBottom = this.setting.anchorBottom;
            }
        }
        return this._anchorBottom;
    }
    /** 设置距离左边距 百分比 */
    set leftPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.left = item.num;
        }
        else {
            this.setting.leftPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 设置左边距 */
    set left(value) {
        this.setting.left = value;
        this.updatesettings(true);
    }
    get left() {
        return this.setting.left;
    }
    /**
     * 立即获取渲染的实际左部距离
     */
    get actualLeft() {
        if (this.dirty) {
            if (this.setting.leftPct && this.parent) {
                this._left = this.parent._width * this.setting.leftPct;
            }
            else {
                this._left = this.setting.left;
            }
        }
        return this._left;
    }
    /** 设置右边距百分比 */
    set rightPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.right = item.num;
        }
        else {
            this.setting.rightPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 设置右边距 */
    set right(value) {
        this.setting.right = value;
        this.updatesettings(true);
    }
    get right() {
        return this.setting.right;
    }
    /**
     * 立即获取渲染的实际右部距离
     */
    get actualRight() {
        if (this.dirty) {
            if (this.setting.rightPct && this.parent) {
                this._right = this.parent.width * this.setting.rightPct;
            }
            else {
                this._right = this.setting.right;
            }
        }
        return this._right;
    }
    /**
     * 设置距离顶部距离百分比
     */
    set topPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.top = item.num;
        }
        else {
            this.setting.topPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 设置顶边距 */
    set top(value) {
        this.setting.top = value;
        this.updatesettings(true);
    }
    get top() {
        return this.setting.top;
    }
    /**
     * 立即获取渲染的实际顶部距离
     */
    get actualTop() {
        if (this.dirty) {
            if (this.setting.topPct && this.parent) {
                this._top = this.parent._height * this.setting.topPct;
            }
            else {
                this._top = this.setting.top;
            }
        }
        return this._top;
    }
    /**
     * 获取或设置距离底部距离
     */
    set bottomPct(value) {
        const item = this.getPetValue(value);
        if (item.num !== undefined) {
            this.setting.bottom = item.num;
        }
        else {
            this.setting.bottomPct = item.pct;
        }
        this.updatesettings(true);
    }
    /** 设置底边距 */
    set bootom(value) {
        this.setting.bottom = value;
        this.updatesettings(true);
    }
    get bottom() {
        return this.setting.bottom;
    }
    /**
     * 立即获取渲染的实际顶部距离
     */
    get actualBottom() {
        if (this.dirty) {
            if (this.setting.bottomPct && this.parent) {
                this._bottom = this.parent.height * this.setting.bottomPct;
            }
            else {
                this._bottom = this.setting.bottom;
            }
        }
        return this._bottom;
    }
    /**
     * 垂直布局
     */
    set verticalAlign(value) {
        this.setting.verticalAlign = value;
        this.baseupdate();
    }
    get verticalAlign() {
        return this.setting.verticalAlign;
    }
    /**
     * 垂直布局 verticalAlign简写
     */
    set valign(value) {
        this.setting.verticalAlign = value;
        this.baseupdate();
    }
    get valign() {
        return this.setting.verticalAlign;
    }
    /**
     * 水平布局
     */
    set horizontalAlign(value) {
        this.setting.horizontalAlign = value;
        this.baseupdate();
    }
    get horizontalAlign() {
        return this.setting.horizontalAlign;
    }
    /**
     * 水平布局 horizontalAlign 简写
     */
    set align(value) {
        this.setting.horizontalAlign = value;
        this.baseupdate();
    }
    get align() {
        return this.setting.horizontalAlign;
    }
    /**
     * 显示对象填充色 0xFFFFFF
     */
    set tint(value) {
        this.setting.tint = value;
        this.update();
    }
    get tint() {
        return this.setting.tint || NaN;
    }
    /**
     * 获取设置透明度
     */
    set alpha(value) {
        this.setting.alpha = value;
        this.container.alpha = value;
    }
    get alpha() {
        return this.setting.alpha;
    }
    /**
     * 获取设置旋转 (弧度)
     */
    set rotation(value) {
        this.setting.rotation = value;
        this.container.rotation = value;
    }
    get rotation() {
        return this.setting.rotation || 0;
    }
    /**
     * 获取设置旋转 (角度)
     */
    set angle(value) {
        this.setting.angle = value;
        this.container.angle = value;
    }
    get angle() {
        return this.setting.angle || 0;
    }
    /**
     * 设置混合模式参考，PIXI.BLEND_MODES
     */
    set blendMode(value) {
        this.setting.blendMode = value;
        this.update();
    }
    get blendMode() {
        return this.setting.blendMode || NaN;
    }
    /**
     * 获取设置锚点Y的像素
     */
    set pivotX(value) {
        this.setting.pivotX = value;
        this.baseupdate();
        this.update();
    }
    get pivotX() {
        return this.setting.pivotX;
    }
    /**
     * 获取设置锚点Y的像素
     */
    set pivotY(value) {
        this.setting.pivotY = value;
        this.baseupdate();
        this.update();
    }
    get pivotY() {
        return this.setting.pivotY;
    }
    /**
     * 锚点的像素表示法,便捷的方法，避免单独设置
     */
    set pivot(value) {
        this.setting.pivotX = value;
        this.setting.pivotY = value;
        this.baseupdate();
        this.update();
    }
    /**
     * 设置X轴缩放
     */
    set scaleX(value) {
        this.setting.scaleX = value;
        this.container.scale.x = value;
        this.baseupdate();
    }
    get scaleX() {
        return this.setting.scaleX;
    }
    /**
     * 设置Y轴缩放
     */
    set scaleY(value) {
        this.setting.scaleY = value;
        this.container.scale.y = value;
    }
    get scaleY() {
        return this.setting.scaleY;
    }
    /**
     * 进行统一缩放，当单独设置过scaleX、scaleY后，调用scale取值为scaleX
     */
    set scale(value) {
        this.setting.scaleX = value;
        this.setting.scaleY = value;
        this.container.scale.x = value;
        this.container.scale.y = value;
    }
    get scale() {
        return this.setting.scaleX;
    }
    /**
     * 是否开启拖动
     * @default false
     */
    set draggable(value) {
        this.setting.draggable = value;
        if (this.initialized) {
            if (value)
                this.initDraggable();
            else
                this.clearDraggable();
        }
    }
    get draggable() {
        return this.setting.draggable;
    }
    /**
     * 是否开启限制拖动范围
     */
    set dragRestricted(value) {
        this.setting.dragRestricted = value;
    }
    get dragRestricted() {
        return this.setting.dragRestricted;
    }
    /**
     * 限制拖动抽X抽或Y抽，需要开启dragRestricted
     */
    set dragRestrictAxis(value) {
        this.setting.dragRestrictAxis = value;
    }
    get dragRestrictAxis() {
        return this.setting.dragRestrictAxis;
    }
    /**
     * 拖动限制门槛,小于设置的数不执行拖动
     */
    set dragThreshold(value) {
        this.setting.dragThreshold = value;
    }
    get dragThreshold() {
        return this.setting.dragThreshold;
    }
    /**
     * 拖动分组
     */
    set dragGroup(value) {
        this.setting.dragGroup = value;
    }
    get dragGroup() {
        return this.setting.dragGroup;
    }
    /**
     * 拖动的容器
     */
    set dragContainer(value) {
        this.setting.dragContainer = value;
    }
    get dragContainer() {
        return this.setting.dragContainer;
    }
    /**
     * 是否开拖动掉落
     */
    set droppable(value) {
        this.setting.droppable = true;
        if (this.initialized) {
            if (value)
                this.initDroppable();
            else
                this.clearDroppable();
        }
    }
    get droppable() {
        return this.setting.droppable;
    }
    /**
     * 接收掉落的新容器
     */
    set droppableReparent(value) {
        this.setting.droppableReparent = value;
    }
    get droppableReparent() {
        return this.setting.droppableReparent;
    }
    /**
     * 接收拖动掉落的分组名
     */
    set dropGroup(value) {
        this.setting.dropGroup = value;
    }
    get dropGroup() {
        return this.setting.dropGroup;
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
     * 显示对象是否可见
     */
    set visible(value) {
        this.container.visible = value;
    }
    get visible() {
        return this.container.visible;
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
        this.container.interactive = value;
    }
    get interactive() {
        return this.container.interactive;
    }
    /**
     * 子对象是否可以接收事件，设置false后，会绕过HitTest方法的递归
     */
    set interactiveChildren(value) {
        this.container.interactiveChildren = value;
    }
    get interactiveChildren() {
        return this.container.interactiveChildren;
    }
    /**
     * 绘制渲染对象
     * @param updateChildren 是否渲染子节点，true渲染
     * @param updateParent  是否渲染父容器，true渲染
     */
    updatesettings(updateChildren, updateParent) {
        if (!this.initialized) {
            if (this.parent == null) {
                return;
            }
            if (this.parent.stage !== null && this.parent.initialized) {
                this.initialize();
            }
        }
        if (updateParent)
            this.updateParent();
        this.baseupdate();
        this.update();
        if (updateChildren)
            this.updateChildren();
    }
    /**
     * 延迟渲染，PIXI还没找到下一帧事件，后续修改，注意生命周期结束的销毁
     */
    set dalayDraw(isDalay) {
        if (!isDalay) {
            window.clearTimeout(this.dalayDrawTimeId);
            this.dalayDrawTimeId = -1;
        }
        if (this.dalayDrawTimeId !== -1) {
            return;
        }
        this.dalayDrawTimeId = window.setTimeout(() => {
            this.update();
            this.dalayDrawTimeId = -1;
        }, 30);
    }
    /**
     * 更新方法，其他组件重写
     */
    update() {
    }
    release() {
    }
    /**
     * 更新渲染设置属性
     */
    baseupdate() {
        if (!this.parent) {
            return;
        }
        let parentHeight, parentWidth;
        //transform convertion (% etc)
        this.dirty = true;
        this._width = this.actualWidth;
        this._height = this.actualHeight;
        this._minWidth = this.actualMinWidth;
        this._minHeight = this.actualMinHeight;
        this._maxWidth = this.actualMaxWidth;
        this._maxHeight = this.actualMaxHeight;
        this._anchorLeft = this.actualAnchorLeft;
        this._anchorRight = this.actualAnchorRight;
        this._anchorTop = this.actualAnchorTop;
        this._anchorBottom = this.actualAnchorBottom;
        this._left = this.actualLeft;
        this._right = this.actualRight;
        this._top = this.actualTop;
        this._bottom = this.actualBottom;
        this._parentWidth = parentWidth = this.parent._width;
        this._parentHeight = parentHeight = this.parent._height;
        this.dirty = false;
        let pivotXOffset = this.pivotX * this._width;
        let pivotYOffset = this.pivotY * this._height;
        if (this.pixelPerfect) {
            pivotXOffset = Math.round(pivotXOffset);
            pivotYOffset = Math.round(pivotYOffset);
        }
        if (this.horizontalAlign === undefined) {
            //get anchors (use left right if conflict)
            if (this._anchorLeft !== undefined && this._anchorRight === undefined && this._right !== undefined)
                this._anchorRight = this._right;
            else if (this._anchorLeft === undefined && this._anchorRight !== undefined && this._left !== undefined)
                this._anchorLeft = this._left;
            else if (this._anchorLeft === undefined && this._anchorRight === undefined && this._left !== undefined && this._right !== undefined) {
                this._anchorLeft = this._left;
                this._anchorRight = this._right;
            }
            const useHorizontalAnchor = this._anchorLeft !== undefined || this._anchorRight !== undefined;
            const useLeftRight = !useHorizontalAnchor && (this._left !== undefined || this._right !== undefined);
            if (useLeftRight) {
                if (this._left !== undefined)
                    this.container.position.x = this._left;
                else if (this._right !== undefined)
                    this.container.position.x = parentWidth - this._right;
            }
            else if (useHorizontalAnchor) {
                if (this._anchorLeft !== undefined && this._anchorRight === undefined)
                    this.container.position.x = this._anchorLeft;
                else if (this._anchorLeft === undefined && this._anchorRight !== undefined)
                    this.container.position.x = parentWidth - this._width - this._anchorRight;
                else if (this._anchorLeft !== undefined && this._anchorRight !== undefined) {
                    this.container.position.x = this._anchorLeft;
                    this._width = parentWidth - this._anchorLeft - this._anchorRight;
                }
                this.container.position.x += pivotXOffset;
            }
            else {
                this.container.position.x = 0;
            }
        }
        if (this.verticalAlign === undefined) {
            //get anchors (use top bottom if conflict)
            if (this._anchorTop !== undefined && this._anchorBottom === undefined && this._bottom !== undefined)
                this._anchorBottom = this._bottom;
            if (this._anchorTop === undefined && this._anchorBottom !== undefined && this._top !== undefined)
                this._anchorTop = this._top;
            const useVerticalAnchor = this._anchorTop !== undefined || this._anchorBottom !== undefined;
            const useTopBottom = !useVerticalAnchor && (this._top !== undefined || this._bottom !== undefined);
            if (useTopBottom) {
                if (this._top !== undefined)
                    this.container.position.y = this._top;
                else if (this._bottom !== undefined)
                    this.container.position.y = parentHeight - this._bottom;
            }
            else if (useVerticalAnchor) {
                if (this._anchorTop !== undefined && this._anchorBottom === undefined)
                    this.container.position.y = this._anchorTop;
                else if (this._anchorTop === undefined && this._anchorBottom !== undefined)
                    this.container.position.y = parentHeight - this._height - this._anchorBottom;
                else if (this._anchorTop !== undefined && this._anchorBottom !== undefined) {
                    this.container.position.y = this._anchorTop;
                    this._height = parentHeight - this._anchorTop - this._anchorBottom;
                }
                this.container.position.y += pivotYOffset;
            }
            else {
                this.container.position.y = 0;
            }
        }
        //min/max sizes
        if (this._maxWidth !== undefined && this._width > this._maxWidth)
            this._width = this._maxWidth;
        if (this._minWidth !== undefined && this._width < this._minWidth)
            this._width = this._minWidth;
        if (this._maxHeight !== undefined && this._height > this._maxHeight)
            this._height = this._maxHeight;
        if (this._minHeight !== undefined && this._height < this._minHeight)
            this._height = this._minHeight;
        //pure vertical/horizontal align
        if (this.horizontalAlign !== undefined) {
            if (this.horizontalAlign == 2 /* center */)
                this.container.position.x = parentWidth * 0.5 - this._width * 0.5;
            else if (this.horizontalAlign == 1 /* right */)
                this.container.position.x = parentWidth - this._width;
            else
                this.container.position.x = 0;
            this.container.position.x += pivotXOffset;
        }
        if (this.verticalAlign !== undefined) {
            if (this.verticalAlign == 2 /* middle */)
                this.container.position.y = parentHeight * 0.5 - this._height * 0.5;
            else if (this.verticalAlign == 3 /* bottom */)
                this.container.position.y = parentHeight - this._height;
            else
                this.container.position.y = 0;
            this.container.position.y += pivotYOffset;
        }
        //Unrestricted dragging
        if (this.dragging && !this.setting.dragRestricted && this._dragPosition) {
            this.container.position.x = this._dragPosition.x;
            this.container.position.y = this._dragPosition.y;
        }
        //scale
        this.container.scale.x = this.setting.scaleX;
        this.container.scale.y = this.setting.scaleY;
        //pivot
        this.container.pivot.x = pivotXOffset;
        this.container.pivot.y = pivotYOffset;
        this.container.alpha = this.setting.alpha;
        if (this.setting.rotation !== undefined)
            this.container.rotation = this.setting.rotation;
        //make pixel perfect
        if (this.pixelPerfect) {
            this._width = Math.round(this._width);
            this._height = Math.round(this._height);
            this.container.position.x = Math.round(this.container.position.x);
            this.container.position.y = Math.round(this.container.position.y);
        }
    }
    /**
     * 渲染父容器
     */
    updateParent() {
        if (this.parent && this.parent.updatesettings) {
            this.parent.updatesettings(false, true);
        }
    }
    /**
     * 更新所有子节点
     */
    updateChildren() {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].updatesettings(true);
        }
    }
    /**
     * 添加UI元件，可以同时添加多个如addChild(a,b,c,d)
     * @param UIObject 要添加的UI组件
     */
    addChild(UIObject) {
        // const argumentsLength = UIObject.length;
        // if (argumentsLength > 1) {
        //     for (let i = 0; i < argumentsLength; i++) {
        //         this.addChild(UIObject[i]);
        //     }
        // }
        // else {
        //     const item  = UIObject[0];
        //     if (item.parent) {
        //         item.parent.removeChild(item);
        //     }
        //     item.parent = this;
        //     this.container.addChild(item.container);
        //     this.children.push(item);
        //     this.updatesettings(true, true);
        // }
        const item = UIObject;
        if (item.parent) {
            if (item.parent instanceof UIBase) {
                item.parent.removeChild(item);
            }
            else {
                item.parent.removeChild(item);
            }
        }
        item.parent = this;
        this.container.addChild(item.container);
        this.children.push(item);
        this.updatesettings(true, true);
        return UIObject;
    }
    addChildAt(item, index) {
        if (item.parent) {
            if (item.parent instanceof UIBase) {
                item.parent.removeChild(item);
            }
            else {
                item.parent.removeChild(item);
            }
        }
        item.parent = this;
        this.container.addChildAt(item.container, index);
        this.children.splice(index, 0, item);
        this.updatesettings(true, true);
        return item;
    }
    /**
     * 移除已添加的UI组件，可以同时移除多个如addChild(a,b,c,d)
     * @param UIObject 要移除的UI组件
     */
    removeChild(UIObject) {
        // const argumentLenght = UIObject.length;
        // if (argumentLenght > 1) {
        //     for (let i = 0; i < argumentLenght; i++) {
        //         this.removeChild(UIObject[i]);
        //     }
        // }
        // else {
        //     const item  = UIObject[0];
        //     const index = this.children.indexOf(item);
        //     if (index !== -1) {
        //         const oldUIParent = item.parent;
        //         //var oldParent = UIObject.container.parent;
        //         item.container.parent.removeChild(item.container);
        //         this.children.splice(index, 1);
        //         item.parent = undefined;
        //         //oldParent._recursivePostUpdateTransform();
        //         setTimeout(() => { //hack but cant get the transforms to update propertly otherwice?
        //             if (oldUIParent && oldUIParent.updatesettings)
        //                 oldUIParent.updatesettings(true, true);
        //         }, 0);
        //     }
        // }
        const item = UIObject;
        const index = this.children.indexOf(item);
        if (index !== -1) {
            const oldUIParent = item.parent;
            //var oldParent = UIObject.container.parent;
            item.container.parent.removeChild(item.container);
            this.children.splice(index, 1);
            item.parent = undefined;
            //oldParent._recursivePostUpdateTransform();
            setTimeout(() => {
                if (oldUIParent && oldUIParent.updatesettings)
                    oldUIParent.updatesettings(true, true);
            }, 0);
        }
    }
    /**
     * Initializes the object when its added to an UIStage
     * 将对象添加到UIStage时，进行的初始化方法
     */
    initialize() {
        this.initialized = true;
        this.stage = this.parent && this.parent.stage;
        if (this.draggable) {
            this.initDraggable();
        }
        if (this.droppable) {
            this.initDroppable();
        }
    }
    clearDraggable() {
        if (this.dragInitialized) {
            this.dragInitialized = false;
            this.drag && this.drag.stopEvent();
        }
    }
    initDraggable() {
        if (!this.dragInitialized) {
            this.dragInitialized = true;
            const containerStart = new PIXI.Point(), stageOffset = new PIXI.Point();
            //self = this;
            this._dragPosition = new PIXI.Point();
            this.drag = new DragEvent_1.DragEvent(this);
            this.drag.onDragStart = (e) => {
                const added = DragDropController.add(this, e);
                if (!this.dragging && added) {
                    this.dragging = true;
                    this.container.interactive = false;
                    containerStart.copyFrom(this.container.position);
                    if (this.dragContainer) {
                        let c;
                        if (this.dragContainer instanceof UIBase) {
                            c = this.dragContainer.container;
                        }
                        else if (this.dragContainer instanceof PIXI.Container) {
                            c = this.dragContainer;
                        }
                        if (c && this.parent) {
                            //_this.container._recursivePostUpdateTransform();
                            stageOffset.set(c.worldTransform.tx - this.parent.container.worldTransform.tx, c.worldTransform.ty - this.parent.container.worldTransform.ty);
                            c.addChild(this.container);
                        }
                    }
                    else {
                        stageOffset.set(0);
                    }
                    this.emit("onDragStart" /* onDragStart */, e);
                }
            };
            this.drag.onDragMove = (e, offset) => {
                if (this.dragging && this._dragPosition) {
                    this._dragPosition.set(containerStart.x + offset.x - stageOffset.x, containerStart.y + offset.y - stageOffset.y);
                    this.x = this._dragPosition.x;
                    this.y = this._dragPosition.y;
                    this.emit("onDragMove" /* onDragMove */, e);
                }
            };
            this.drag.onDragEnd = (e) => {
                if (this.dragging) {
                    this.dragging = false;
                    //Return to container after 0ms if not picked up by a droppable
                    setTimeout(() => {
                        this.container.interactive = true;
                        const item = DragDropController.getItem(this);
                        if (item && this.parent) {
                            let container;
                            if (this.parent instanceof Stage_1.Stage) {
                                container = this.stage;
                            }
                            else {
                                container = this.parent.container;
                            }
                            if (container)
                                container.toLocal(this.container.position, this.container.parent);
                            if (container != this.container) {
                                if (this.parent instanceof UIBase) {
                                    this.parent.addChild(this);
                                }
                                else {
                                    this.parent.addChild(this);
                                }
                            }
                        }
                        this.emit("onDragEnd" /* onDragEnd */, e);
                    }, 0);
                }
            };
        }
    }
    clearDroppable() {
        if (this.dropInitialized) {
            this.dropInitialized = false;
            this.container.removeListener("mouseup" /* mouseup */, this.onDrop, this);
            this.container.removeListener("touchend" /* touchend */, this.onDrop, this);
        }
    }
    initDroppable() {
        if (!this.dropInitialized) {
            this.dropInitialized = true;
            const container = this.container;
            //self = this;
            this.container.interactive = true;
            container.on("mouseup" /* mouseup */, this.onDrop, this);
            container.on("touchend" /* touchend */, this.onDrop, this);
        }
    }
    onDrop(e) {
        const item = DragDropController.getEventItem(e, this.dropGroup);
        if (item && item.dragging) {
            item.dragging = false;
            item.container.interactive = true;
            const parent = this.droppableReparent !== undefined ? this.droppableReparent : this;
            if (parent) {
                parent.container.toLocal(item.container.position, item.container.parent);
                if (parent.container != item.container.parent)
                    parent.addChild(item);
            }
        }
    }
}
exports.UIBase = UIBase;


/***/ }),

/***/ "./src/core/UISettings.ts":
/*!********************************!*\
  !*** ./src/core/UISettings.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 基础的显示数据类型
 * @since 1.0.0
 */
class UISettings {
    constructor() {
        /** 宽度 */
        this.width = 0;
        /** 高度 */
        this.height = 0;
        /** 最小高度 */
        this.minHeight = 0;
        /** 宽度百分比 */
        this.minWidth = 0;
        /** 锚点X的像素表示法 */
        this.pivotX = 0;
        /** 锚点Y的像素表示法 */
        this.pivotY = 0;
        /** X轴缩放 */
        this.scaleX = 1;
        /** Y轴缩放 */
        this.scaleY = 1;
        /** 透明度（0-1） */
        this.alpha = 1;
        /** 是否开启拖动 true|false */
        this.draggable = false;
        /** 是否开启限制拖动范围 */
        this.dragRestricted = false;
        /** 拖动限制门槛,小于次数不执行拖动 */
        this.dragThreshold = 0;
    }
}
exports.UISettings = UISettings;


/***/ }),

/***/ "./src/core/Utils.ts":
/*!***************************!*\
  !*** ./src/core/Utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 工具类
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** 日志输出 */
function log(message, ...optionalParams) {
    console.log(message, ...optionalParams);
}
exports.log = log;
function setSourcePath(params) {
    exports._getSourcePath = params;
}
exports.setSourcePath = setSourcePath;
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
function deepCopy(source) {
    if (source === undefined || typeof source !== 'object') {
        return source;
    }
    else if (Array.isArray(source)) {
        return [].concat(source);
    }
    else if (typeof source === 'object') {
        const target = {};
        for (const prop in source) {
            target[prop] = deepCopy(source[prop]);
        }
        return target;
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
    return PIXI.utils.uid().toString();
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


/***/ }),

/***/ "./src/enum/AlignEnum.ts":
/*!*******************************!*\
  !*** ./src/enum/AlignEnum.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/interaction/ClickEvent.ts":
/*!***************************************!*\
  !*** ./src/interaction/ClickEvent.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InteractionEvent_1 = __webpack_require__(/*! ./InteractionEvent */ "./src/interaction/InteractionEvent.ts");
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
 *  onHover: ((e: InteractionEvent,thisOBj:UIBase,over: boolean) => void) | undefined
 *  onPress: ((e: InteractionEvent,thisOBj:UIBase, isPressed: boolean) => void) | undefined;
 *  onClick: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
 *  onMove: ((e: InteractionEvent,thisOBj:UIBase) => void) | undefined
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
        /** 是否基于事件派发，开启后，可以侦听相关的事件 InteractionEvent.TouchEvent | vfui.Interaction.TouchEvent */
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
        obj.container.interactive = true;
        this.startEvent();
    }
    startEvent() {
        this.obj.container.on(this.eventnameMousedown, this._onMouseDown, this);
        if (!this.right)
            this.obj.container.on("touchstart" /* touchstart */, this._onMouseDown, this);
        if (this.hover) {
            this.obj.container.on("mouseover" /* mouseover */, this._onMouseOver, this);
            this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
        }
    }
    _onMouseDown(e) {
        this.mouse.copyFrom(e.data.global);
        this.id = e.data.identifier;
        this.onPress && this.onPress.call(this.obj, e, this.obj, true), this.obj;
        this.emitTouchEvent(InteractionEvent_1.TouchMouseEvent.onPress, e, true);
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
                this.emitTouchEvent(InteractionEvent_1.TouchMouseEvent.onClick, e);
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
            this.obj.container.removeListener(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.removeListener(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.removeListener("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.removeListener("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = false;
        }
        this.onPress && this.onPress.call(this.obj, e, this.obj, false);
        this.emitTouchEvent(InteractionEvent_1.TouchMouseEvent.onPress, e, false);
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
            this.emitTouchEvent(InteractionEvent_1.TouchMouseEvent.onClick, e, false);
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
            this.emitTouchEvent(InteractionEvent_1.TouchMouseEvent.onHover, e, true);
        }
    }
    _onMouseOut(e) {
        if (this.ishover) {
            this.ishover = false;
            this.obj.container.removeListener("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.removeListener("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, false);
            this.emitTouchEvent(InteractionEvent_1.TouchMouseEvent.onHover, e, false);
        }
    }
    _onMouseMove(e) {
        this.onMove && this.onMove.call(this.obj, e, this.obj);
        this.emitTouchEvent(InteractionEvent_1.TouchMouseEvent.onMove, e);
    }
    /** 清除拖动 */
    stopEvent() {
        if (this.bound) {
            this.obj.container.removeListener(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.removeListener(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.removeListener("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.removeListener("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = false;
        }
        this.obj.container.removeListener(this.eventnameMousedown, this._onMouseDown, this);
        if (!this.right)
            this.obj.container.removeListener("touchstart" /* touchstart */, this._onMouseDown, this);
        if (this.hover) {
            this.obj.container.removeListener("mouseover" /* mouseover */, this._onMouseOver, this);
            this.obj.container.removeListener("mouseout" /* mouseout */, this._onMouseOut, this);
            this.obj.container.removeListener("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.removeListener("touchmove" /* touchmove */, this._onMouseMove, this);
        }
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
    item.dragDropEventId = e.data.identifier;
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
        if (exports._items[i].dragDropEventId === id) {
            if (group !== exports._items[i].dragGroup) {
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
 *  可侦听事件(未实现):
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
        this.obj = obj;
        obj.container.interactive = true;
        this.startEvent();
    }
    startEvent() {
        this.obj.container.on("mousedown" /* mousedown */, this._onDragStart, this);
        this.obj.container.on("touchstart" /* touchstart */, this._onDragStart, this);
    }
    _onDragStart(e) {
        this.id = e.data.identifier;
        this.onDragPress && this.onDragPress.call(this.obj, e, true, this);
        if (!this.bound && this.obj.stage) {
            this.start.copyFrom(e.data.global);
            this.obj.stage.on("mousemove" /* mousemove */, this._onDragMove, this);
            this.obj.stage.on("touchmove" /* touchmove */, this._onDragMove, this);
            this.obj.stage.on("mouseup" /* mouseup */, this._onDragEnd, this);
            this.obj.stage.on("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            this.obj.stage.on("touchend" /* touchend */, this._onDragEnd, this);
            this.obj.stage.on("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            this.obj.stage.on("touchcancel" /* touchcancel */, this._onDragEnd, this);
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
            if (this.obj.dragRestrictAxis !== undefined) {
                this.cancel = false;
                if (this.obj.dragRestrictAxis == "x" && this.movementY > this.movementX)
                    this.cancel = true;
                else if (this.obj.dragRestrictAxis == "y" && this.movementY <= this.movementX)
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
            this.obj.stage.removeListener("mousemove" /* mousemove */, this._onDragMove, this);
            this.obj.stage.removeListener("touchmove" /* touchmove */, this._onDragMove, this);
            this.obj.stage.removeListener("mouseup" /* mouseup */, this._onDragEnd, this);
            this.obj.stage.removeListener("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchend" /* touchend */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchcancel" /* touchcancel */, this._onDragEnd, this);
            this.dragging = false;
            this.bound = false;
            this.onDragEnd && this.onDragEnd.call(this.obj, e, this);
            this.onDragPress && this.onDragPress.call(this.obj, e, false, this);
        }
    }
    /** 清除拖动 */
    stopEvent() {
        if (this.bound && this.obj.stage) {
            this.obj.stage.removeListener("mousemove" /* mousemove */, this._onDragMove, this);
            this.obj.stage.removeListener("touchmove" /* touchmove */, this._onDragMove, this);
            this.obj.stage.removeListener("mouseup" /* mouseup */, this._onDragEnd, this);
            this.obj.stage.removeListener("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchend" /* touchend */, this._onDragEnd, this);
            this.obj.stage.removeListener("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            this.bound = false;
        }
        this.obj.container.removeListener("mousedown" /* mousedown */, this._onDragStart, this);
        this.obj.container.removeListener("touchstart" /* touchstart */, this._onDragStart, this);
    }
    remove() {
        this.stopEvent();
        this.onDragPress = undefined;
        this.onDragEnd = undefined;
        this.onDragMove = undefined;
        this.onDragStart = undefined;
        this.obj.container.interactive = false;
    }
}
exports.DragEvent = DragEvent;


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
const InteractionEvent_1 = __webpack_require__(/*! ./InteractionEvent */ "./src/interaction/InteractionEvent.ts");
exports.InteractionEvent = InteractionEvent_1.InteractionEvent;
exports.TouchMouseEvent = InteractionEvent_1.TouchMouseEvent;


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
        group[cb.uuid] = cb;
        if (cb.checked)
            exports._checkGroupObject.values[name] = cb.uuid;
    }
}
exports.registrerCheckGroup = registrerCheckGroup;
/**
 * 注销指定分组或指定分组的子项
 * @param cb CheckBox
 */
function unRegistrerCheckGroup(cb) {
    if (cb.checkGroup && exports._checkGroupObject.groups[cb.checkGroup]) {
        delete exports._checkGroupObject.groups[cb.checkGroup][cb.uuid];
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
        exports._checkGroupObject.values[cb.checkGroup] = cb.uuid;
    }
}
exports.updateCheckGroupSelected = updateCheckGroupSelected;
/** 获取分组中选中的checkbox值 */
function getCheckGroupSelectedValue(name) {
    const uuid = exports._checkGroupObject.values[name];
    if (uuid) {
        const cb = exports._checkGroupObject.groups[name][uuid];
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

/***/ "./src/interaction/InteractionEvent.ts":
/*!*********************************************!*\
  !*** ./src/interaction/InteractionEvent.ts ***!
  \*********************************************/
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
/**
 * 对外，封装的点击触摸事件
 *
 * import InteractionEvent,{Mouse} from "../interaction/InteractionEvent",
 */
exports.TouchMouseEvent = {
    /**
     * 移出
     *
     * (e: InteractionEvent,thisObj:UIBase,over: boolean)=>{}
     */
    onHover: "hover",
    /**
     * 按下
     *
     * (e: InteractionEvent,thisObj:UIBase, isPressed: boolean)=>void
     */
    onPress: "press",
    /**
     * 点击
     *
     * (e: InteractionEvent,thisObj:UIBase)=>void
     */
    onClick: "click",
    /**
     * 移动
     *
     * (e: InteractionEvent,thisObj:UIBase)=>void
     */
    onMove: "move",
};
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

/***/ "./src/interaction/MouseScrollEvent.ts":
/*!*********************************************!*\
  !*** ./src/interaction/MouseScrollEvent.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
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
        this.id = "";
        this.delta = new PIXI.Point();
        this.obj = obj;
        this.preventDefault = preventDefault;
        obj.container.interactive = true;
        this.startEvent();
    }
    startEvent() {
        this.obj.container.on("mouseover" /* mouseover */, this._onHover, this);
        this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
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
    }
    remove() {
        this.stopEvent();
    }
}
exports.MouseScrollEvent = MouseScrollEvent;


/***/ }),

/***/ "./src/pixi-vfui.ts":
/*!**************************!*\
  !*** ./src/pixi-vfui.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pixivfui = __webpack_require__(/*! ./UI */ "./src/UI.ts");
// //注入常规兼容方法
// if(!Array.from){
//     Array.from = function (el: unknown[]) {
//         return Array.apply(this, el);
//     }
// }
// String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
//     return this.lastIndexOf(word, pos || 0) === 0;
// });
window.vfui = pixivfui;
exports.default = pixivfui;
// declare namespace vfui{
//     export * from "src/UI";
// }


/***/ })

/******/ });
//# sourceMappingURL=pixi-vfui.js.map