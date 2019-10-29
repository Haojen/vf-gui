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
const Image_1 = __webpack_require__(/*! ./c/Image */ "./src/c/Image.ts");
exports.Image = Image_1.Image;
const SpriteAnimated_1 = __webpack_require__(/*! ./c/SpriteAnimated */ "./src/c/SpriteAnimated.ts");
exports.SpriteAnimated = SpriteAnimated_1.SpriteAnimated;
const Label_1 = __webpack_require__(/*! ./c/Label */ "./src/c/Label.ts");
exports.Label = Label_1.Label;
exports.LabelProps = Label_1.LabelProps;
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
const Graphics_1 = __webpack_require__(/*! ./c/Graphics */ "./src/c/Graphics.ts");
exports.Graphics = Graphics_1.Graphics;
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

/**
 * 按钮组件
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Label_1 = __webpack_require__(/*! ./Label */ "./src/c/Label.ts");
const Image_1 = __webpack_require__(/*! ./Image */ "./src/c/Image.ts");
const InputBase_1 = __webpack_require__(/*! ../core/InputBase */ "./src/core/InputBase.ts");
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 按钮自定义字段
 */
class ButtonProps extends BaseProps_1.BaseProps {
    constructor() {
        super();
        /**
         * 按钮的文字
         */
        this.text = "";
        /** 状态展示 */
        this.img = new Image_1.Image();
        /** 文字展示 */
        this.label = new Label_1.Label();
    }
}
exports.ButtonProps = ButtonProps;
/**
 * 按钮
 */
class Button extends InputBase_1.InputBase {
    constructor() {
        super();
        this._oldState = "";
        this._selectedStr = "";
        this.container.buttonMode = true;
    }
    initProps() {
        const props = this.props;
        props.img.props.fillMode = "scale";
        props.img.props.scale9Grid = [3, 3, 3, 3];
        this.addChild(props.img);
        props.label.props.fontSize = 18;
        props.label.on(Index_1.ComponentEvent.CHANGE, this.onLabelChange, this);
        this.addChild(props.label);
        return props;
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new ButtonProps().proxyData;
        this.initProps();
        return this._props;
    }
    update(_style) {
        const { props } = this;
        if (props.dirty.dirty) {
            props.dirty.dirty = false;
            if (props.label.props.text !== props.text) {
                props.label.props.text = props.text;
            }
            this.container.hitArea = new PIXI.Rectangle(0, 0, this._width, this._height);
        }
        if (this.currentState !== this._oldState) {
            this._oldState = this.currentState;
            props.img.style.width = this._width;
            props.img.style.height = this._height;
            props.img.props.src = props[this.currentState + this._selectedStr];
        }
    }
    updateBlendMode() {
        if (this.blendMode) {
            this.blendMode = this.blendMode;
        }
    }
    release() {
        super.release();
        this.props.label.off(Index_1.ComponentEvent.CHANGE, this.onLabelChange, this);
        this.removeChild(this.props.img);
        this.removeChild(this.props.label);
    }
    onLabelChange(label) {
        label.style.left = this.width - label.width >> 1;
        label.style.top = this.height - label.height >> 1;
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

/**
 * 单选框与复选框组件，没有时间去拆分，区别只是皮肤与分组不同
 *
 * checbox 不需要设置设置组
 *
 * radio 需要设置分组
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Button_1 = __webpack_require__(/*! ./Button */ "./src/c/Button.ts");
/** Image 对象的自有字段 */
class CheckBoxFields extends Button_1.ButtonProps {
    constructor() {
        super();
        /**
         * 设置是否选中
         * */
        this.checked = false;
    }
}
/**
 * UI 按钮显 示对象
 */
class CheckBox extends Button_1.Button {
    constructor() {
        super();
    }
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new CheckBoxFields().proxyData;
        this.initProps();
        return this._props;
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
        return this.props.checkGroup;
    }
    set checkGroup(value) {
        if (value === undefined) {
            Index_1.InputController.unRegistrerCheckGroup(this);
        }
        if (this.props.checkGroup == value) {
            return;
        }
        this.props.checkGroup = value; //需要在registrerCheckGroup之前
        Index_1.InputController.registrerCheckGroup(this);
    }
    /**
     * 获取设置默认值
     */
    get value() {
        return this.props.value;
    }
    set value(value) {
        if (value === this.props.value) {
            return;
        }
        this.props.value = value;
    }
    /**
     * 设置是否选中
     * @default false
     */
    get checked() {
        return this.props.checked;
    }
    set checked(value) {
        if (value !== this.props.checked) {
            if (this.checkGroup)
                Index_1.InputController.updateCheckGroupSelected(this);
            this._oldState = "";
            if (value) {
                this._selectedStr = "AndSelected";
            }
            else {
                this._selectedStr = "";
            }
            this.props.checked = value;
            this.emit(Index_1.ComponentEvent.CHANGE, this);
        }
    }
    onClick() {
        super.onClick();
        if (this.checkGroup && this.checked)
            return;
        this.checked = !this.checked;
    }
    // public update(_style:CSSStyle) {
    //     super.update(_style);
    // }
    // public release() {
    //     super.release();
    // }
    onLabelChange(label) {
        label.style.left = this.width;
        label.style.top = this.height - label.height >> 1;
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
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
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
    constructor() {
        super();
        this._childrenStartIndex = 1;
        this._background = new PIXI.Graphics();
        this._background.name = "background";
        //跳过uiChildren
        this.container.addChild(this._background);
    }
    update(_style) {
        if (_style.dirty.background) {
            const { _background } = this;
            _style.dirty.background = false;
            if (_style.backgroundColor !== undefined && _style.backgroundColor != _style._oldValue.backgroundColor) {
                _background.clear();
                if (typeof _style.backgroundColor === "number") {
                    _background.beginFill(_style.backgroundColor);
                }
                else {
                    _background.beginFill(Utils_1.hexToInt(_style.backgroundColor, 0xFFFFFF));
                }
                _background.drawRoundedRect(0, 0, this._width, this._height, 0);
                _background.endFill();
            }
            if (_style.backgroundImage !== undefined && _style.backgroundImage != _style._oldValue.backgroundImage) {
                _background.removeChildren();
                let backgroundImage;
                if (_style.backgroundImage instanceof PIXI.Texture) {
                    backgroundImage = _style.backgroundImage;
                }
                else if (typeof _style.backgroundImage === "string") {
                    backgroundImage = Utils_1.getTexture(_style.backgroundImage);
                }
                if (backgroundImage) {
                    let sprite;
                    if (_style.backgroundRepeat === "repeat") {
                        sprite = new PIXI.TilingSprite(backgroundImage);
                    }
                    else {
                        sprite = new PIXI.Sprite(backgroundImage);
                    }
                    _background.addChild(sprite);
                    const maskGraphics = new PIXI.Graphics();
                    maskGraphics.beginFill(0xFF3300);
                    maskGraphics.drawRect(0, 0, this._width, this._height);
                    maskGraphics.endFill();
                    _background.addChild(maskGraphics);
                    _background.mask = maskGraphics;
                }
            }
            if (_background.children.length > 0) {
                const sprite = _background.getChildAt(0);
                if (sprite instanceof PIXI.TilingSprite) {
                    sprite.tilePosition.set(_style.backgroundPositionX || 0, _style.backgroundPositionY || 0);
                }
                else {
                    if (_style.backgroundSize !== undefined) {
                        sprite.width = _style.backgroundSize[0];
                        sprite.height = _style.backgroundSize[1];
                    }
                    sprite.position.set(_style.backgroundPositionX || 0, _style.backgroundPositionY || 0);
                }
            }
        }
    }
    release() {
        this._style.eventEmitter.removeAllListeners();
        super.release();
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
        if (this.isEmitRender) {
            this.emit("renderChange", renderer);
        }
        super.render(renderer);
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

/***/ "./src/c/Graphics.ts":
/*!***************************!*\
  !*** ./src/c/Graphics.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
/**
 * 图片
 * Event: sourceComplete
 */
class Graphics extends UIBase_1.UIBase {
    constructor(geometry) {
        super();
        this._props = new PIXI.Graphics(geometry);
        this.container.addChild(this._props);
    }
    get props() {
        return this._props;
    }
}
exports.Graphics = Graphics;


/***/ }),

/***/ "./src/c/Image.ts":
/*!************************!*\
  !*** ./src/c/Image.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
/** Image 对象的自有字段 */
class ImageProps extends BaseProps_1.BaseProps {
    constructor() {
        super();
        /**
         * 填充模式
         * 设置scale后，可设置scale9Grid进行调整缩放区域
         */
        this.fillMode = "no-repeat";
    }
}
/**
 * 图片
 * Event: sourceComplete
 */
class Image extends UIBase_1.UIBase {
    constructor() {
        super();
    }
    initProps() {
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new ImageProps().proxyData;
        this.initProps();
        return this._props;
    }
    set width(value) {
        this._width = value;
        this.syncImageSize();
    }
    set height(value) {
        this._height = value;
        this.syncImageSize();
    }
    update(_style) {
        if (this.props.dirty.dirty) {
            //console.log("update");
            const props = this.props;
            const container = this.container;
            let { _sprite, _texture, _source } = this;
            props.dirty.dirty = false;
            if (props.src === undefined) {
                if (_sprite && _sprite.parent) {
                    container.removeChild(_sprite);
                    _sprite.destroy();
                }
                if (_texture) {
                    _texture.removeAllListeners();
                }
                _sprite = undefined;
                _texture = undefined;
                _source = undefined;
                return;
            }
            if (props.src && props.src !== _source) {
                this._source = _source = props.src;
                this._texture = _texture = Utils_1.getTexture(props.src);
                this._texture.once("update", () => {
                    this.syncImageSize();
                    this.emit(Image.onload, this);
                }, this);
                if (!PIXI.utils.isWebGLSupported()) {
                    _sprite = PIXI.Sprite.from(this._texture);
                }
                else {
                    if (props.fillMode === "no-repeat") {
                        if (_sprite instanceof PIXI.Sprite) {
                            _sprite.texture = _texture;
                        }
                        else {
                            _sprite = new PIXI.Sprite(_texture);
                        }
                    }
                    else if (props.fillMode === "repeat") {
                        if (_sprite instanceof PIXI.TilingSprite) {
                            _sprite.texture = _texture;
                        }
                        else {
                            _sprite = new PIXI.TilingSprite(_texture);
                        }
                    }
                    else if (props.fillMode === "scale") {
                        if (_sprite instanceof PIXI.NineSlicePlane) {
                            _sprite.texture = _texture;
                        }
                        else {
                            _sprite = new PIXI.NineSlicePlane(_texture);
                        }
                    }
                }
                this._sprite = _sprite;
            }
            if (props.scale9Grid) {
                if (_sprite instanceof PIXI.TilingSprite) {
                    _sprite.tileScale.set(props.scale9Grid[0], props.scale9Grid[1]);
                    _sprite.tilePosition.set(props.scale9Grid[2], props.scale9Grid[3]);
                }
                else if (_sprite instanceof PIXI.NineSlicePlane) {
                    if (props.scale9Grid[0] !== undefined) {
                        _sprite.leftWidth = props.scale9Grid[0];
                    }
                    if (props.scale9Grid[1] !== undefined) {
                        _sprite.rightWidth = props.scale9Grid[1];
                    }
                    if (props.scale9Grid[2] !== undefined) {
                        _sprite.topHeight = props.scale9Grid[2];
                    }
                    if (props.scale9Grid[3] !== undefined) {
                        _sprite.bottomHeight = props.scale9Grid[3];
                    }
                }
            }
            if (_sprite) {
                if (_sprite.parent == null) {
                    container.addChild(_sprite);
                }
                this.syncImageSize();
                if (props.tint !== undefined) {
                    _sprite.tint = props.tint;
                }
            }
        }
    }
    syncImageSize() {
        const { _sprite, _texture } = this;
        if (_sprite) {
            if (this._width > 1) {
                _sprite.width = this._width;
            }
            else {
                if (_texture && _texture.width > 1) {
                    this._width = _sprite.width = _texture.frame.width;
                }
            }
            if (this._height > 1) {
                _sprite.height = this._height;
            }
            else {
                if (_texture && _texture.height > 1) {
                    this._height = _sprite.height = _texture.frame.height;
                }
            }
            if (this.props.anchorX) {
                _sprite.x = -Math.floor(_sprite.width * this.props.anchorX);
            }
            if (this.props.anchorY) {
                _sprite.y = -Math.floor(_sprite.height * this.props.anchorY);
            }
        }
    }
}
/** 图片加载完成事件 */
Image.onload = "onload";
exports.Image = Image;


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

/***/ "./src/c/Label.ts":
/*!************************!*\
  !*** ./src/c/Label.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
const updatepropsProxyHandler = {
    get(target, key) {
        return target[key];
    },
    set(target, key, value) {
        if (target[key] === value) {
            return true;
        }
        switch (key) {
            case "text":
                target.dirty.text = true;
                break;
            case "color":
                target.dirty.color = true;
                break;
            default:
                target.dirty.dirty = true;
        }
        target[key] = value;
        return true;
    }
};
/** Image 对象的自有字段 */
class LabelProps extends BaseProps_1.BaseProps {
    constructor() {
        super(updatepropsProxyHandler);
        this.dirty = { dirty: false, text: false, color: false };
        /**
         * 设置文本内容
         */
        this.text = "";
        /**
         * 文本颜色，16进制
         * */
        this.color = 0xfffff0;
        /**
         * 是否自动换行
         * */
        this.wordWrap = false;
        /**
         * 多行文本(wordWrap = true) - 对齐方式
         * */
        this.textAlign = "left";
        /** 字体大小 */
        this.fontSize = 22;
        /** 字体样式 */
        this.fontStyle = "normal";
        /**  字体变形，普通或小写  */
        this.fontVariant = "normal";
        /** 字体粗细 */
        this.fontWeight = "normal";
        /** 描边的笔触粗细值 */
        this.strokeThickness = 0;
        /** 是否设置投影 */
        this.dropShadow = false;
        /** 投影的alpha值 */
        this.dropShadowAlpha = false;
        /** 是否设置投影 */
        this.dropShadowAngle = 0; //Math.PI / 6;
        /** 投影的模糊半径 */
        this.dropShadowBlur = 0;
        /** 投影填充颜色值 */
        this.dropShadowColor = 0x000000;
        /** 投影深度 */
        this.dropShadowDistance = 5;
        /** 中文换行 */
        this.breakWords = true;
    }
}
exports.LabelProps = LabelProps;
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
class Label extends UIBase_1.UIBase {
    /**
     * 文本构造函数
     * @param text 要显示的内容，默认为""
     * @param TextStyle {} 文本样式，参考TextStyle
     */
    constructor(text = "") {
        super();
        this._props = null;
        this._text = new PIXI.Text(text);
        this.container.addChild(this._text);
    }
    initProps() {
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new LabelProps().proxyData;
        this.initProps();
        return this._props;
    }
    set props(value) {
        this._props = value.proxyData;
        for (const key in this._props.dirty) {
            this._props.dirty[key] = true;
        }
    }
    update(_style) {
        const { props } = this;
        if (props.dirty.dirty) {
            props.dirty.dirty = false;
            for (const key in this.props) {
                if (key === "_proxy" || key === "dirty") {
                    continue;
                }
                this._text.style[key] = this.props[key];
            }
        }
        if (props.dirty.text) {
            props.dirty.text = false;
            this._text.text = props.text;
            if (this._width == 0) {
                this._width = this._text.width;
            }
            else {
                this._text.width = this._width;
            }
            if (this._height == 0) {
                this._height = this._text.height;
            }
            else {
                this._text.height = this._height;
            }
            this.emit(Index_1.ComponentEvent.CHANGE, this);
        }
        if (props.dirty.color) {
            props.dirty.color = false;
            if (props.color !== undefined)
                this._text.style.fill = props.color;
        }
    }
    updateBlendMode() {
        // if (!isNaN(this.tint))
        //     this._text.tint = this.tint;
        if (this._text && this.blendMode) {
            this._text.blendMode = this.blendMode;
        }
    }
}
exports.Label = Label;


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
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
/** Rect 对象的自有字段 */
class RectProps extends BaseProps_1.BaseProps {
    constructor() {
        super();
        /**
         * 圆角
         */
        this.radius = 0;
        /**
         * 线条颜色
         */
        this.lineColor = 0;
        /**
         * 线条粗细
         */
        this.lineWidth = 0;
        /**
         * 颜色
         */
        this.color = 0;
    }
}
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
        this._graphics = new PIXI.Graphics();
        this.container.addChild(this._graphics);
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new RectProps().proxyData;
        this.initProps();
        return this._props;
    }
    initProps() {
    }
    get graphics() {
        return this._graphics;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this._graphics.width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
        this._graphics.height = value;
    }
    update() {
        if (this.props.dirty.dirty) {
            const { props, _graphics } = this;
            _graphics.clear();
            _graphics.lineStyle(props.lineWidth, props.lineColor);
            _graphics.beginFill(props.color);
            _graphics.drawRoundedRect(props.anchorX ? -props.anchorX * this._width : 0, props.anchorY ? -props.anchorY * this._height : 0, this._width, this._height, props.radius);
            _graphics.endFill();
            props.dirty.dirty = false;
            // if(this._style.tint!== undefined){
            //     _graphics.tint
            //     _graphics.tint = this._style.tint;
            // }
            if (this.blendMode !== undefined) {
                _graphics.blendMode = this.blendMode;
            }
        }
    }
}
exports.Rect = Rect;


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
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const ContainerBase_1 = __webpack_require__(/*! ./ContainerBase */ "./src/c/ContainerBase.ts");
/**
 * 滚动容器自定义字段
 */
class ScrollingContainerProps extends BaseProps_1.BaseProps {
    constructor() {
        super();
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
         * 是否启用水平滚动
         * @default false
         */
        this.scrollX = false;
        /**
         * 是否滚动中
         */
        this.scrollY = false;
    }
}
/**
 * 可滚动的容器
 */
class ScrollingContainer extends Container_1.Container {
    constructor() {
        super();
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
        this._childrenStartIndex = 0;
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
            if (this.props.scrollX)
                this._targetPosition.x = this._containerStart.x + offset.x;
            if (this.props.scrollY)
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
        this.dragEvent.stopEvent();
        this.mouseScrollEvent.stopEvent();
    }
    initProps() {
        // let props = this.props; 
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new ScrollingContainerProps().proxyData;
        this.initProps();
        return this._props;
    }
    update(_style) {
        super.update(_style);
        if (this._lastWidth != this._width || this._lastHeight != this._height) {
            const _of = this.props.expandMask;
            this.style.maskPosition = [_of, _of];
            this.style.maskSize = [this._width, this._height];
            this._lastWidth = this._width;
            this._lastHeight = this._height;
            this.setScrollPosition();
        }
    }
    setScrollPosition(speed) {
        if (speed) {
            this._Speed = speed;
        }
        if (!this.props.animating) {
            this.props.animating = true;
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
        this._innerContainer.addChildAt(item.container, index);
        this.uiChildren.splice(index, 0, item);
        this.updatesettings(true, true);
        this.getInnerBounds(true);
        this.emit(Index_1.ComponentEvent.ADDED, this);
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
    initialize() {
        super.initialize();
        this.initScrolling();
    }
    initScrolling() {
        this._isInitScrolling = true;
        //Drag scroll and Mouse scroll
        if (this.props.dragScrolling) {
            this.mouseScrollEvent.startEvent();
            this.dragEvent.startEvent();
        }
        else {
            this.mouseScrollEvent.stopEvent();
            this.dragEvent.stopEvent();
        }
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
        if (this.props.scrollX && direction == "x") {
            this._innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.props.scrollY && direction == "y") {
            this._innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this._Position[direction] = this._targetPosition[direction] = this._innerContainer.position[direction];
    }
    /** 根据焦点设置位置 */
    focusPosition(pos) {
        const bounds = this.getInnerBounds();
        let dif;
        if (this.props.scrollX) {
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
        if (this.props.scrollY) {
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
        if (this.props.scrollX)
            this.updateDirection("x", delta);
        if (this.props.scrollY)
            this.updateDirection("y", delta);
        if (stop) {
            this.props.animating = false;
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
            this._Speed[direction] = Utils.Lerp(this._Speed[direction], 0, (5 + 2.5 / Math.max(this.props.softness, 0.01)) * delta);
            if (this._targetPosition[direction] > 0) {
                this._targetPosition[direction] = 0;
            }
            else if (this._targetPosition[direction] < min) {
                this._targetPosition[direction] = min;
            }
        }
        if (!this.scrolling && Math.round(this._Speed[direction]) === 0 && (this._innerContainer[direction] > 0 || this._innerContainer[direction] < min)) {
            const target = this._Position[direction] > 0 ? 0 : min;
            this._Position[direction] = Utils.Lerp(this._Position[direction], target, (40 - (30 * this.props.softness)) * delta);
            this._stop = false;
        }
        else if (this.scrolling || Math.round(this._Speed[direction]) !== 0) {
            if (this.scrolling) {
                this._Speed[direction] = this._Position[direction] - this._lastPosition[direction];
                this._lastPosition.copyFrom(this._Position);
            }
            if (this._targetPosition[direction] > 0) {
                this._Speed[direction] = 0;
                this._Position[direction] = 100 * this.props.softness * (1 - Math.exp(this._targetPosition[direction] / -200));
            }
            else if (this._targetPosition[direction] < min) {
                this._Speed[direction] = 0;
                this._Position[direction] = min - (100 * this.props.softness * (1 - Math.exp((min - this._targetPosition[direction]) / -200)));
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

/***/ "./src/c/Slider.ts":
/*!*************************!*\
  !*** ./src/c/Slider.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const Image_1 = __webpack_require__(/*! ./Image */ "./src/c/Image.ts");
const Utils = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
const Tween_1 = __webpack_require__(/*! ./Tween */ "./src/c/Tween.ts");
const Easing_1 = __webpack_require__(/*! ./Easing */ "./src/c/Easing.ts");
/**
 * 按钮自定义字段
 */
class SliderProps extends BaseProps_1.BaseProps {
    constructor() {
        super();
        /**
         * 当前值
         */
        this.value = 0;
        /**
         * 最小值
         */
        this.minValue = 0;
        /**
         * 最大值
         */
        this.maxValue = 100;
        /**
         * 是否垂直,滑块方向
         */
        this.vertical = false;
        /** 状态展示 */
        this.trackImg = new Image_1.Image();
        this.thumbImg = new Image_1.Image();
        this.tracklightImg = new Image_1.Image();
    }
}
/**
 * UI 滑动条
 */
class Slider extends UIBase_1.UIBase {
    constructor() {
        super();
        this._oldState = "";
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
        this._thumbDrag.onDragPress = this.onPress;
        this._thumbDrag.onDragStart = this.onDragStart;
        this._thumbDrag.onDragMove = this.onDragMove;
        this._thumbDrag.onDragEnd = this.onDragEnd;
        this._trackDrag.onDragPress = this.onPress;
        this._trackDrag.onDragStart = this.onDragStart;
        this._trackDrag.onDragMove = this.onDragMove;
        this._trackDrag.onDragEnd = this.onDragEnd;
    }
    initProps() {
        const props = this.props;
        props.thumbImg.props.anchorX = 0.5;
        props.thumbImg.props.anchorY = 0.5;
        props.thumbImg.on(Image_1.Image.onload, this.onImgload, this);
        props.trackImg.props.fillMode = "scale";
        props.trackImg.props.scale9Grid = [2, 2, 2, 2];
        props.trackImg.style.width = "100%";
        props.trackImg.style.height = "100%";
        props.trackImg.on(Image_1.Image.onload, this.onImgload, this);
        props.tracklightImg.props.fillMode = "scale";
        props.tracklightImg.props.scale9Grid = [2, 2, 2, 2];
        this.addChild(props.trackImg);
        this.addChild(props.tracklightImg);
        this.addChild(props.thumbImg);
        return props;
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new SliderProps().proxyData;
        this.initProps();
        return this._props;
    }
    /**
     * 当前值
     */
    get value() {
        return Utils.Round(Utils.Lerp(this.props.minValue, this.props.maxValue, this._amt), this._decimals);
    }
    set value(value) {
        this._amt = (Math.max(this.props.minValue, Math.min(this.props.maxValue, value)) - this.props.minValue) / (this.props.maxValue - this.props.minValue);
        this.updatePosition();
        this.triggerValueChange();
        this.triggerValueChanging();
    }
    onImgload() {
        this.updateLayout();
    }
    updateLayout() {
        const thumbImg = this.props.thumbImg;
        const tracklightImg = this.props.tracklightImg;
        if (this.props.vertical) {
            //thumbImg.style.top =this._amt; 
            thumbImg.style.left = this._width >> 1;
            tracklightImg.style.width = this._width;
            //tracklightImg.style.height = this._amt * this.height;
        }
        else {
            thumbImg.style.top = this._height >> 1;
            //thumbImg.style.left = this._amt; 
            tracklightImg.style.height = this._height;
            //tracklightImg.style.width =  this._amt * this.width;
        }
    }
    update(_style) {
        const props = this.props;
        if (props.dirty.dirty) {
            props.dirty.dirty = false;
            if (props.track !== this._track) {
                this._track = props.track;
                props.trackImg.props.src = props.track;
            }
            if (props.thumb !== this._thumb) {
                this._thumb = props.thumb;
                props.thumbImg.props.src = props.thumb;
            }
            if (props.tracklight !== this._tracklight) {
                this._tracklight = props.tracklight;
                props.tracklightImg.props.src = props.tracklight;
            }
            this.updateLayout();
            if (props.value != this._lastChange) {
                this.value = this.props.value;
            }
        }
    }
    updatePosition(soft) {
        let val = 0;
        const thumbImg = this.props.thumbImg;
        const tracklightImg = this.props.tracklightImg;
        if (this.props.vertical) {
            val = this._height * this._amt;
            if (soft) {
                Tween_1.Tween.to(thumbImg.style, { top: val }, 300).easing(Easing_1.Easing.Linear.None).start();
                Tween_1.Tween.to(tracklightImg.style, { height: val }, 300).easing(Easing_1.Easing.Linear.None).start();
            }
            else {
                thumbImg.style.top = val;
                tracklightImg.style.height = val;
            }
        }
        else {
            val = this._width * this._amt;
            if (soft) {
                Tween_1.Tween.to(thumbImg.style, { left: val }, 300).easing(Easing_1.Easing.Linear.None).start();
                Tween_1.Tween.to(tracklightImg.style, { width: val }, 300).easing(Easing_1.Easing.Linear.None).start();
            }
            else {
                thumbImg.style.left = val;
                tracklightImg.style.width = val;
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
            this._maxPosition = this.props.vertical ? this._height : this._width;
        }
    }
    onDragMove(event, offset) {
        if (this._thumbDrag.id == event.data.identifier) {
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.props.vertical ? offset.y : offset.x) / this._maxPosition)));
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
        this.props.trackImg.container.toLocal(mousePosition, undefined, this._localMousePosition, true);
        const newPos = this.props.vertical ? this._localMousePosition.y : this._localMousePosition.x;
        const maxPos = this.props.vertical ? this._height : this._width;
        this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
        this.updatePosition(soft);
        this.triggerValueChanging();
    }
    triggerValueChange() {
        const value = this.value;
        this.emit(Index_1.ComponentEvent.CHANGE, this, value, this._lastChange);
        if (this._lastChange != value) {
            this._lastChange = value;
            this.props.value = this._lastChange;
        }
    }
    triggerValueChanging() {
        this.emit(Index_1.ComponentEvent.CHANGEING, this, this.value, this._lastChanging);
        if (this._lastChanging != this.value) {
            this._lastChanging = this.value;
        }
    }
}
exports.Slider = Slider;


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
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
/**
 * 按钮自定义字段
 */
class SpriteAnimatedProps extends BaseProps_1.BaseProps {
    constructor() {
        super();
        /**
         * 要播放的动作名
         */
        this.animationName = "default";
        /**
         * 动画速度
         */
        this.animationSpeed = 0.1;
        /**
         * 是的循环
         */
        this.loop = true;
        /**
         * 是否播放中
         */
        this.playing = false;
    }
}
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
        this._lastAnimatedName = "";
        this._curFrameNumber = 0;
        this._animatedSprites = new Map();
    }
    initProps() {
        // let props = this.props; 
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new SpriteAnimatedProps().proxyData;
        this.initProps();
        return this._props;
    }
    /** 跳转到第N帧并播放 */
    gotoAndPlay(frameNumber) {
        this._curFrameNumber = frameNumber;
        this.props.playing = true;
    }
    /** 跳转到第N帧并停止 */
    gotoAndStop(frameNumber) {
        this._curFrameNumber = frameNumber;
        this.props.playing = false;
    }
    /** 停止 */
    stop() {
        this._curFrameNumber = 0;
        this.props.playing = false;
    }
    /** 播放 */
    play() {
        this._curFrameNumber = 0;
        this.props.playing = true;
    }
    update() {
        const { props, _animatedSprites } = this;
        if (!props.dirty.dirty) {
            return;
        }
        props.dirty.dirty = false;
        let animatedSp = _animatedSprites.get(this._lastAnimatedName);
        if (this._lastAnimatedName !== props.animationName) {
            if (animatedSp && animatedSp.parent) {
                animatedSp.stop();
                animatedSp.parent.removeChild(animatedSp);
            }
            this._lastAnimatedName = props.animationName;
        }
        if (props.src && props.src != this._src) {
            this._src = props.src;
            if (Array.isArray(props.src)) {
                let textures = [];
                if (typeof props.src[0] === "number") {
                    props.src.forEach(value => {
                        textures.push(Utils_1.getTexture(value));
                    });
                }
                else {
                    textures = props.src;
                }
                _animatedSprites.set("default", new PIXI.AnimatedSprite(textures));
            }
            else {
                for (const key in props.src.animations) {
                    _animatedSprites.set(key, new PIXI.AnimatedSprite(props.src.animations[key]));
                }
            }
        }
        animatedSp = _animatedSprites.get(props.animationName);
        if (animatedSp == undefined) {
            Utils_1.log("Error SpriteAnimated -> _animatedSprites[props.animationName] == undefined ");
        }
        else {
            if (animatedSp.parent == undefined) {
                animatedSp.onLoop = () => {
                    this.emit(Index_1.ComponentEvent.LOOP, this);
                };
                animatedSp.onComplete = () => {
                    this.emit(Index_1.ComponentEvent.COMPLETE, this);
                };
                this._curFrameNumber = 0;
                animatedSp.anchor.set(this.props.anchorX, this.props.anchorY);
                this.container.addChild(animatedSp);
                this.emit(Index_1.ComponentEvent.CHANGE, this);
            }
            animatedSp.loop = props.loop;
            animatedSp.animationSpeed = props.animationSpeed;
            if (this.props.playing) {
                animatedSp.gotoAndPlay(this._curFrameNumber);
            }
            else {
                animatedSp.gotoAndStop(this._curFrameNumber);
            }
        }
    }
    release() {
        super.release();
        this._animatedSprites.forEach(element => {
            if (element.parent) {
                element.parent.removeChild(element);
            }
            element.destroy();
        });
    }
}
exports.SpriteAnimated = SpriteAnimated;


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
const BaseProps_1 = __webpack_require__(/*! ../layout/BaseProps */ "./src/layout/BaseProps.ts");
const Utils_1 = __webpack_require__(/*! ../core/Utils */ "./src/core/Utils.ts");
const InputBase_1 = __webpack_require__(/*! ../core/InputBase */ "./src/core/InputBase.ts");
const Image_1 = __webpack_require__(/*! ./Image */ "./src/c/Image.ts");
class TextInputProps extends BaseProps_1.BaseProps {
    constructor() {
        super();
        /**
         * 设置字体大小
         */
        this.fontSize = 25;
        this.color = 0x26272e;
        /**
         * 设置文本
         */
        this.text = '';
        /**
         * 预览文字
         */
        this.placeholder = '';
        /**
         * 是否可交互
         */
        this.enabled = true;
        /**
         * 设置最大可输入
         */
        this.maxLength = 99999;
        /** 状态展示 */
        this.img = new Image_1.Image();
    }
}
exports.TextInputProps = TextInputProps;
/**
 * @example
 * new PIXI.TextInput
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
        this._inputStyle = Object.assign({
            position: 'absolute',
            background: 'none',
            border: 'none',
            outline: 'none',
            transformOrigin: '0 0',
            padding: '5px 8px',
            color: '#000000',
            lineHeight: '1'
        }, {
            multiline: multiline
        });
        this.htmlInputShared = new HtmlInput_1.default(this._inputStyle.multiline);
        this.htmlInputShared.setStyle(this._inputStyle);
        this.htmlInputShared.on("input" /* input */, this._onInputInput, this);
        this.htmlInputShared.on('focus', this._onFocused, this);
        this.htmlInputShared.on('blur', this._onBlurred, this);
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
    }
    initProps() {
        const props = this.props;
        props.img.props.fillMode = "scale";
        props.img.props.scale9Grid = [3, 3, 3, 3];
        this.addChildAt(props.img, 0);
    }
    /** 子类可以重写 */
    get props() {
        if (this._props) {
            return this._props;
        }
        this._props = new TextInputProps().proxyData;
        this.initProps();
        return this._props;
    }
    // GETTERS & SETTERS
    update(_style, renderer) {
        const { props, htmlInputShared } = this;
        if (this.props.dirty.dirty) {
            this.props.dirty.dirty = false;
            htmlInputShared.maxlength = props.maxLength;
            htmlInputShared.placeholder = props.placeholder;
            htmlInputShared.disabled = !props.enabled;
            htmlInputShared.restrict = props.restrict;
            htmlInputShared.value = props.text;
            this.setInputStyle("fontFamily", props.fontFamily);
            this.setInputStyle("fontSize", props.fontSize + "px");
            this.setInputStyle("width", this._width + "px");
            this.setInputStyle("height", this._height + "px");
            this.setInputStyle("color", "#" + Utils_1.componentToHex(props.color));
            if (renderer)
                this.render(renderer);
        }
        if (this.currentState !== this._oldState) {
            if (!props.enabled) {
                this.currentState = "disabled";
            }
            const currentState = props[this.currentState];
            if (currentState) {
                this._oldState = this.currentState;
                props.img.props.src = currentState;
            }
        }
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
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key, value);
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
        this.props.text = this._text.text;
        this.props.dirty.dirty = false;
        this._textHitbox.clear();
        this._textHitbox.beginFill(0);
        this._textHitbox.drawRect(0, 0, inputBounds.width, inputBounds.height);
        this._textHitbox.endFill();
        this._textHitbox.interactive = this.props.enabled;
        this._textMask.clear();
        this._textMask.beginFill(0);
        this._textMask.drawRect(padding[3], 0, inputBounds.width - padding[3] - padding[1], inputBounds.height);
        this._textMask.endFill();
        this.props.img.style.width = inputBounds.width;
        this.props.img.style.height = inputBounds.height;
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
        return this.htmlInputShared.value.length === 0 ? this.props.placeholder : this.htmlInputShared.value;
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
        this.props.img.release();
        this._text.destroy();
        this._textHitbox && this._textHitbox.destroy();
        this.htmlInputShared.release();
    }
}
exports.TextInput = TextInput;


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
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
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
     * @param {TAny} object object
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
     * @param {TAny} object object
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
            this.emit(InteractionEvent_1.TweenEvent.start, object);
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

/***/ "./src/core/Core.ts":
/*!**************************!*\
  !*** ./src/core/Core.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ContainerBase_1 = __webpack_require__(/*! ../c/ContainerBase */ "./src/c/ContainerBase.ts");
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
class Core extends PIXI.utils.EventEmitter {
    constructor() {
        super();
        /**
         * 是否初始化
         * @default
         */
        this.initialized = false;
        /** 设置添加索引时的开始位置，一般过滤子组件的背景 */
        this._childrenStartIndex = 0;
        /**
         * 节点列表
         */
        this.uiChildren = [];
        this.container = new ContainerBase_1.ContainerBase();
    }
    /** 添加显示对象，需集成UIBASE */
    addChild(item) {
        return this.addChildAt(item, this.uiChildren.length + this._childrenStartIndex);
    }
    addChildAt(item, index) {
        if (item.parent) {
            item.parent.removeChild(item);
        }
        item.parent = this;
        this.container.addChildAt(item.container, index);
        this.uiChildren.splice(index, 0, item);
        this.updatesettings(true, true);
        this.emit(Index_1.ComponentEvent.ADDED, this);
        return item;
    }
    /**
     * 移除已添加的UI组件，可以同时移除多个如addChild(a,b,c,d)
     * @param UIObject 要移除的UI组件
     */
    removeChild(item) {
        const index = this.uiChildren.indexOf(item);
        if (index !== -1) {
            const oldUIParent = item.parent;
            //var oldParent = UIObject.container.parent;
            item.container.parent.removeChild(item.container);
            this.uiChildren.splice(index, 1);
            item.parent = undefined;
            //oldParent._recursivePostUpdateTransform();
            setTimeout(() => {
                if (oldUIParent && oldUIParent.updatesettings)
                    oldUIParent.updatesettings(true, true);
            }, 0);
            this.emit(Index_1.ComponentEvent.REMOVEED, this);
        }
    }
    removeChildren(beginIndex, endIndex) {
        let start = beginIndex ? beginIndex + this._childrenStartIndex : this._childrenStartIndex;
        let end = endIndex ? endIndex - this._childrenStartIndex : this.uiChildren.length - this._childrenStartIndex;
        for (let i = start; i < end; i++) {
            this.removeChild(this.uiChildren[i]);
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
        for (let i = 0; i < this.uiChildren.length; i++) {
            this.uiChildren[i].updatesettings(true);
        }
    }
    /**
     * 绘制渲染对象
     * @param updateChildren 是否渲染子节点，true渲染
     * @param updateParent  是否渲染父容器，true渲染
     */
    updatesettings(updateChildren, updateParent) {
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
    /** 清除全部事件 */
    offAll(event) {
        return this.removeAllListeners(event);
    }
}
exports.Core = Core;


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
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Stage_1 = __webpack_require__(/*! ./Stage */ "./src/core/Stage.ts");
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
    constructor() {
        super();
        this._clickEvent = new Index_1.ClickEvent(this, true);
        this.currentState = "up";
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
    onMove() {
        if (this._down) {
            return;
        }
        this.currentState = "move";
    }
    //e: InteractionEvent,thisObj: UIBase,over: boolean
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
        if (Stage_1.Stage.Ins) {
            Stage_1.Stage.Ins.on("pointerdown", this.documentMouseDown, this);
            this.keyDownEventBind = this.keyDownEvent.bind(this);
            document.addEventListener("keydown", this.keyDownEventBind);
        }
    }
    _clearEvents() {
        if (Stage_1.Stage.Ins) {
            Stage_1.Stage.Ins.off("pointerdown", this.documentMouseDown, this);
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
        if (this.documentMouseDown && Stage_1.Stage.Ins)
            Stage_1.Stage.Ins.off("pointerdown", this.documentMouseDown, this);
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
const Core_1 = __webpack_require__(/*! ./Core */ "./src/core/Core.ts");
const Ticker_1 = __webpack_require__(/*! ./Ticker */ "./src/core/Ticker.ts");
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
class Stage extends Core_1.Core {
    constructor(width, height) {
        super();
        this._width = 0;
        this._height = 0;
        this._width = width;
        this._height = height;
        this.stage = this;
        this.container.name = "Stage";
        this.container.hitArea = new PIXI.Rectangle(0, 0, width, height);
        this.container.interactive = true;
        this.container.interactiveChildren = true;
        Stage._stage = this;
        this.initialized = true;
    }
    static get Ins() {
        return Stage._stage;
    }
    releaseAll() {
        for (let i = 0; i < this.uiChildren.length; i++) {
            let ui = this.uiChildren[i];
            ui.offAll();
            ui.release();
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
        Ticker_1.shared.removeAllListeners();
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
    resize() {
        this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
        this.updateChildren();
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
const Index_1 = __webpack_require__(/*! ../interaction/Index */ "./src/interaction/Index.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/core/Utils.ts");
const CSSStyle_1 = __webpack_require__(/*! ../layout/CSSStyle */ "./src/layout/CSSStyle.ts");
const CSSLayout_1 = __webpack_require__(/*! ../layout/CSSLayout */ "./src/layout/CSSLayout.ts");
const Core_1 = __webpack_require__(/*! ./Core */ "./src/core/Core.ts");
/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @param width {Number} Width UI对象的宽度
 * @param height {Number} Height UI对象的高度
 * @since 1.0.0
 */
class UIBase extends Core_1.Core {
    /**
     * 构造函数
     * @param width 宽 数字或百分比, 不传默认0
     * @param height 高 数字或百分比,不传默认0
     */
    constructor() {
        super();
        /**
         * 自定义组价名
         */
        this.name = "";
        /**
        *  在不同分辨率下保持像素稳定
        * @default
        */
        this.pixelPerfect = true;
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
         * 动态属性，避免其他类注入
         */
        this.attach = {};
        /**
         * 是否拖动中
         * @default
         */
        this.dragging = false;
        this._width = 0;
        this._height = 0;
        this._draggable = false;
        /**
         * 是否开启限制拖动范围
         */
        this.dragRestricted = false;
        /**
         * 拖动限制门槛,小于设置的数不执行拖动
         */
        this.dragThreshold = 0;
        this._droppable = false;
        this.updateStyleProxyHandler = {
            get(target, key, receiver) {
                return target[key];
            },
            set(target, key, value, receiver) {
                if (target[key] === value) {
                    return true;
                }
                target.dirtyCheck(key, value);
                const oldValue = target[key];
                target._oldValue[key] = oldValue;
                target[key] = value;
                target.eventEmitter.emit("ValueChangeEvent", key, value, oldValue);
                return true;
            }
        };
        this.uuid = Utils_1.uid();
        this.container.name = this.constructor.name;
        this.__styleObject = new CSSStyle_1.CSSStyle();
        this._style = new Proxy(this.__styleObject, this.updateStyleProxyHandler);
        this.container.isEmitRender = true;
        this.container.on("renderChange", this.onRenderer, this);
    }
    get blendMode() {
        return this._blendMode;
    }
    set blendMode(value) {
        if (value !== this._blendMode) {
            this._blendMode = value;
            this.updateBlendMode();
        }
    }
    updateBlendMode() {
    }
    /**
     * 组件渲染后，才会有值
     */
    get x() {
        return this.container.x;
    }
    set x(value) {
        this.container.x = value;
    }
    /**
     * 组件渲染后，才会有值
     */
    get y() {
        return this.container.y;
    }
    set y(value) {
        this.container.y = value;
    }
    /**
     * 组件渲染后，才会有值,继承组件需要根据这个值确定宽高
     */
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    /**
     * 组件渲染后，才会有值
     */
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    /**
     * 获取样式
     */
    get style() {
        return this._style;
    }
    /**
     * 是否开启拖动
     * @default false
     */
    set draggable(value) {
        this._draggable = value;
        if (this.initialized) {
            if (value)
                this.initDraggable();
            else
                this.clearDraggable();
        }
    }
    get draggable() {
        return this._draggable;
    }
    /**
     * 是否开拖动掉落
     */
    set droppable(value) {
        this._droppable = true;
        if (this.initialized) {
            if (value)
                this.initDroppable();
            else
                this.clearDroppable();
        }
    }
    get droppable() {
        return this._droppable;
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
            if (this.parent.initialized) {
                this.initialize();
            }
        }
        if (updateParent) {
            this.updateParent();
        }
        this.onRenderer();
        if (updateChildren) {
            this.updateChildren();
        }
    }
    onRenderer(renderer) {
        const { _style } = this;
        this.updateBaseLayout(_style, renderer);
        this.updateMask(_style, renderer);
        this.updateAlpha(_style, renderer);
        this.update(_style, renderer);
    }
    updateBaseLayout(_style, renderer) {
        if (!this.parent) {
            return;
        }
        //Unrestricted dragging
        if (this.dragging && !this.dragRestricted && this._dragPosition) {
            this.container.setTransform(this._dragPosition.x, this._dragPosition.y);
            return;
        }
        CSSLayout_1.updateDisplayList(this, _style);
    }
    updateMask(_style, renderer) {
        if (_style.dirty.mask) {
            const { container } = this;
            _style.dirty.mask = false;
            if (this.mask && _style.maskImage !== _style._oldValue.maskImage && this.mask) {
                if (_style._oldValue.maskImage instanceof UIBase) {
                    this.removeChild(_style._oldValue.maskImage);
                }
                else {
                    container.removeChild(this.mask);
                }
                this.mask = undefined;
            }
            if (_style.maskImage && this.mask === undefined) {
                if (_style.maskImage instanceof PIXI.Graphics) {
                    this.mask = _style.maskImage;
                    container.mask = this.mask;
                    container.addChild(this.mask);
                }
                else if (_style.maskImage instanceof UIBase) {
                    //后期组件完成后补充，矢量与位图组件
                    _style.maskImage.parent = this;
                    this.mask = _style.maskImage.container;
                    _style.maskImage.container.name = "mask";
                    container.mask = this.mask || null;
                    if (container.mask)
                        container.addChildAt(this.mask, 0);
                }
                else {
                    this.mask = PIXI.Sprite.from(Utils_1.getTexture(_style.maskImage));
                    container.mask = this.mask;
                    container.addChild(this.mask);
                }
            }
            if (this.mask) {
                if (_style.maskImage instanceof UIBase) {
                    if (_style.maskPosition !== undefined) {
                        _style.maskImage.x = _style.maskPosition[0];
                        _style.maskImage.y = _style.maskPosition[1];
                    }
                    if (_style.maskSize !== undefined) {
                        _style.maskImage.style.width = _style.maskSize[0];
                        _style.maskImage.style.height = _style.maskSize[1];
                    }
                }
                else {
                    if (_style.maskPosition !== undefined) {
                        this.mask.position.set(_style.maskPosition[0], _style.maskPosition[1]);
                    }
                    if (_style.maskSize !== undefined) {
                        this.mask.width = _style.maskSize[0];
                        this.mask.height = _style.maskSize[1];
                        this.mask.updateTransform();
                    }
                }
            }
        }
    }
    updateAlpha(_style, renderer) {
        if (_style.dirty.alpha) {
            console.log("updateAlpha");
            const { container } = this;
            _style.dirty.alpha = false;
            container.alpha = _style.alpha;
            container.visible = _style.visible;
        }
    }
    /**
     * 更新方法，其他组件重写
     */
    update(_style, renderer) {
    }
    release() {
        const { _style, container } = this;
        container.off("renderChange", this.onRenderer, this);
        container.mask = null;
        if (_style.maskImage instanceof UIBase) {
            _style.maskImage.release();
            this.mask = undefined;
        }
        if (this.mask) {
            container.removeChild(this.mask);
            this.mask.destroy();
            this.mask = undefined;
        }
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }
    releaseAll() {
        for (let i = 0; i < this.uiChildren.length; i++) {
            let ui = this.uiChildren[i];
            ui.offAll();
            ui.release();
            ui.releaseAll();
        }
        this.uiChildren = [];
        this.container.removeAllListeners();
        this.container.removeChildren();
    }
    /**
     * Initializes the object when its added to an UIStage
     * 将对象添加到UIStage时，进行的初始化方法
     */
    initialize() {
        this.initialized = true;
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
            this.drag = new Index_1.DragEvent(this);
            this.drag.onDragStart = (e) => {
                const added = Index_1.DragDropController.add(this, e);
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
                        const item = Index_1.DragDropController.getItem(this);
                        if (item && this.parent) {
                            const container = this.parent.container;
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
            this.container.off("mouseup" /* mouseup */, this.onDrop, this);
            this.container.off("touchend" /* touchend */, this.onDrop, this);
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
        const item = Index_1.DragDropController.getEventItem(e, this.dropGroup);
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
function getTexture(src) {
    if (exports._getSourcePath) {
        src = exports._getSourcePath(src);
    }
    if (src instanceof PIXI.Texture) {
        return src;
    }
    return PIXI.Texture.from(src);
}
exports.getTexture = getTexture;
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

/***/ "./src/interaction/ComponentEvent.ts":
/*!*******************************************!*\
  !*** ./src/interaction/ComponentEvent.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 特定属性改变时
 * 1. CheckBox 的 checked 改变时
 * 2. Text 的 label 改变时
 * 3. SpriteAnimated 的 animationName 改变时
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
 * SpriteAnimated 每次播放完时，触发(loop = false时)
 */
exports.COMPLETE = "COMPLETE";
/**
 * 状态切换完成时
 *
 * SpriteAnimated 每次播放完时，，触发(loop = true时)
 */
exports.LOOP = "LOOP";
/**
 * 容器被添加在到父级时触发
 */
exports.ADDED = "ADDED";
/**
 * 容器被从父级移除时触发
 */
exports.REMOVEED = "REMOVEED";


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
const Stage_1 = __webpack_require__(/*! ../core/Stage */ "./src/core/Stage.ts");
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
        obj.container.interactive = true;
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
        if (!this.bound && this.obj.parent) {
            const stage = Stage_1.Stage.Ins.container;
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
        if (this.bound) {
            const stage = Stage_1.Stage.Ins.container;
            stage.removeListener("mousemove" /* mousemove */, this._onDragMove, this);
            stage.removeListener("touchmove" /* touchmove */, this._onDragMove, this);
            stage.removeListener("mouseup" /* mouseup */, this._onDragEnd, this);
            stage.removeListener("mouseupoutside" /* mouseupoutside */, this._onDragEnd, this);
            stage.removeListener("touchend" /* touchend */, this._onDragEnd, this);
            stage.removeListener("touchendoutside" /* touchendoutside */, this._onDragEnd, this);
            stage.removeListener("touchcancel" /* touchcancel */, this._onDragEnd, this);
            this.dragging = false;
            this.bound = false;
            this.onDragEnd && this.onDragEnd.call(this.obj, e, this);
            this.onDragPress && this.onDragPress.call(this.obj, e, false, this);
        }
    }
    /** 清除拖动 */
    stopEvent() {
        if (this.bound) {
            const stage = Stage_1.Stage.Ins.container;
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
const ComponentEvent = __webpack_require__(/*! ./ComponentEvent */ "./src/interaction/ComponentEvent.ts");
exports.ComponentEvent = ComponentEvent;


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

/***/ "./src/layout/BaseProps.ts":
/*!*********************************!*\
  !*** ./src/layout/BaseProps.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** 默认的自定义字段基础代理 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUpdatePropsProxyHandler = {
    get(target, key) {
        return target[key];
    },
    set(target, key, value) {
        if (target[key] === value) {
            return true;
        }
        target.dirty.dirty = true;
        target[key] = value;
        return true;
    }
};
class BaseProps {
    constructor(updatePropsProxyHandler) {
        this.dirty = { dirty: false };
        this._proxy = { data: this };
        if (updatePropsProxyHandler) {
            this._proxy.data = new Proxy(this, updatePropsProxyHandler);
        }
        else {
            this._proxy.data = new Proxy(this, exports.defaultUpdatePropsProxyHandler);
        }
    }
    get proxyData() {
        return this._proxy.data;
    }
}
exports.BaseProps = BaseProps;


/***/ }),

/***/ "./src/layout/CSSLayout.ts":
/*!*********************************!*\
  !*** ./src/layout/CSSLayout.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIBase_1 = __webpack_require__(/*! ../core/UIBase */ "./src/core/UIBase.ts");
const UI_1 = __webpack_require__(/*! ../UI */ "./src/UI.ts");
/**
 * 格式化值（int,%）到组件
 */
function formatStyleValue(style, key, parentValue) {
    if (style._valuesPct[key]) {
        return Math.round(style._valuesPct[key] * parentValue);
    }
    else {
        return style[key];
    }
}
exports.formatStyleValue = formatStyleValue;
/** 计算节点的宽高位置 */
function getChildBoundsSize(left, right, top, bottom, width, height, parentWidth, parentHeight, maxWidth, minWidth, maxHeight, minHeight) {
    let x = 0;
    let y = 0;
    if (left !== undefined && right !== undefined) {
        width = parentWidth - right - left;
    }
    if (top !== undefined && bottom !== undefined) {
        height = parentHeight - bottom - top;
    }
    //min/max sizes
    if (maxWidth !== undefined && width > maxWidth) {
        width = maxWidth;
    }
    if (minWidth !== undefined && width < minWidth) {
        width = minWidth;
    }
    if (maxHeight !== undefined && height > maxHeight) {
        height = maxHeight;
    }
    if (minHeight !== undefined && height < minHeight) {
        height = minHeight;
    }
    if (left !== undefined)
        x = left;
    else if (right !== undefined)
        x = parentWidth - width - right;
    if (top !== undefined)
        y = top;
    else if (bottom !== undefined)
        y = parentHeight - height - bottom;
    return { width, height, x, y };
}
exports.getChildBoundsSize = getChildBoundsSize;
function centerAlign(width, height, parentWidth, parentHeight, align = "center") {
    const point = { x: 0, y: 0 };
    if (align == "center") {
        point.x = parentWidth - width >> 1;
        point.y = parentHeight - height >> 1;
    }
    return point;
}
exports.centerAlign = centerAlign;
/**
 * 调整目标的元素的大小并定位这些元素。
 *
 * @param width 指定目标在目标坐标中的宽度（以像素为单位）。
 * @param height 指定组件在目标坐标中的高度（以像素为单位）。
 *
 */
function updateDisplayList(component, _style) {
    if (!_style.dirty.dirty) {
        return;
    }
    //console.log("updateBaseLayout");
    _style.dirty.dirty = false;
    const { container } = component;
    let x = 0;
    let y = 0;
    let parentHeight = 0;
    let parentWidth = 0;
    if (component.parent instanceof UIBase_1.UIBase) {
        parentWidth = component.parent.width;
        parentHeight = component.parent.height;
    }
    else if (component.parent instanceof UI_1.Stage) {
        parentWidth = component.parent.width;
        parentHeight = component.parent.height;
    }
    if (_style.position === "fixed") {
        parentWidth = UI_1.Stage.Ins.width;
        parentHeight = UI_1.Stage.Ins.height;
    }
    let width = formatStyleValue(_style, "width", parentWidth);
    const minWidth = formatStyleValue(_style, "minWidth", parentWidth);
    const maxWidth = formatStyleValue(_style, "maxWidth", parentWidth);
    let height = formatStyleValue(_style, "height", parentHeight);
    const minHeight = formatStyleValue(_style, "minHeight", parentHeight);
    const maxHeight = formatStyleValue(_style, "maxHeight", parentHeight);
    const left = formatStyleValue(_style, "left", parentWidth);
    const top = formatStyleValue(_style, "top", parentHeight);
    const right = formatStyleValue(_style, "right", parentWidth);
    const bottom = formatStyleValue(_style, "bottom", parentHeight);
    if (_style.display === "block") {
        if (_style.position === "absolute") {
            const bounds = getChildBoundsSize(left, right, top, bottom, width, height, parentWidth, parentHeight, maxWidth, minWidth, maxHeight, minHeight);
            width = bounds.width;
            height = bounds.height;
            x = bounds.x;
            y = bounds.y;
        }
        else if (_style.position === "fixed") { //fixed
            const bounds = getChildBoundsSize(left, right, top, bottom, width, height, UI_1.Stage.Ins.width, UI_1.Stage.Ins.height, maxWidth, minWidth, maxHeight, minHeight);
            width = bounds.width;
            height = bounds.height;
            x = bounds.x;
            y = bounds.y;
            const globalPosition = container.toLocal(new PIXI.Point(x, y));
            x = globalPosition.x;
            y = globalPosition.y;
        }
        else {
            x = left;
            y = top;
        }
    }
    else { //style.display = grid
    }
    //make pixel perfect
    if (component.pixelPerfect) {
        width = Math.round(width);
        height = Math.round(height);
        x = Math.round(x);
        y = Math.round(y);
    }
    container.alpha = _style.alpha;
    container.visible = _style.visibility === "hidden" ? false : true;
    if (_style.zIndex !== -1) {
        if (component.parent) {
            component.parent.container.sortableChildren = true;
            container.zIndex = _style.zIndex;
        }
    }
    //return;
    component.width = width;
    component.height = height;
    // if(component.align){
    //     let point = centerAlign(width,height,parentWidth, parentHeight)
    // }
    container.setTransform(x + _style.pivotX, y + _style.pivotY, _style.scaleX, _style.scaleY, _style.rotate * (Math.PI / 180), _style.skewX, _style.skewY, _style.pivotX, _style.pivotY);
}
exports.updateDisplayList = updateDisplayList;


/***/ }),

/***/ "./src/layout/CSSStyle.ts":
/*!********************************!*\
  !*** ./src/layout/CSSStyle.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 脏数据检测
 * @param target
 * @param key
 * @param value
 */
function dirtyCheck(target, key, value) {
    if (typeof value === "string" && value.indexOf("%") !== -1) {
        target._valuesPct[key] = parseFloat(value.replace('%', '')) * 0.01 || 0;
    }
    else {
        target._valuesPct[key] = 0;
    }
    switch (key) {
        case "tint":
        case "alpha":
        case "visible":
            target.dirty.alpha = true;
            break;
        case "maskImage":
        case "maskPosition":
        case "maskSize":
            target.dirty.mask = true;
            break;
        case "backgroundColor":
        case "backgroundImage":
        case "backgroundPositionX":
        case "backgroundPositionY":
        case "backgroundRepeat":
        case "backgroundSize":
            //需要背景的组件，自己实现
            target.dirty.background = true;
            break;
        default:
            target.dirty.dirty = true;
    }
}
exports.dirtyCheck = dirtyCheck;
/**
 * 组件样式表
 */
class CSSStyle {
    constructor() {
        this.dirty = {
            /**
             * 内部脏数据标记
             * */
            dirty: false,
            /**
             * transform 脏数据标记
             */
            transform: false,
            /**
             * 遮罩脏数据
             */
            mask: false,
            /**
             * 脏背景
             */
            background: false,
            /**
             * 常规的不需要改变的脏数据
             */
            alpha: false
        };
        /**
         * 存放上次的值
         * */
        this._oldValue = {};
        /**
         * 内部百分比转换至
         * */
        this._valuesPct = {};
        /**
         * 事件发送
         * */
        this.eventEmitter = new PIXI.utils.EventEmitter();
        /**
         * 表示显示对象的宽度，以像素为单位。
         * */
        this.width = 0;
        /**
         * 表示显示对象的高度，以像素为单位。
         * */
        this.height = 0;
        //transform start
        /**
         * 缩放
         * */
        this.scaleX = 1;
        this.scaleY = 1;
        /**
         * 设置元素水平拉伸扭曲（角度）。
         * */
        this.skewX = 0;
        /**
         * 设置元素垂直拉伸扭曲（角度）。
         * */
        this.skewY = 0;
        /** 设置元素旋转 （角度） */
        this.rotate = 0;
        /** 轴点 0 - 1 */
        this.pivotX = 0;
        this.pivotY = 0;
        //transform end
        /**
         * 规定元素的定位类型。
         * */
        this.position = "absolute";
        /**
         * 规定元素的显示类型。布局模式
         * */
        this.display = "block";
        /**
         * 索引位
         * */
        this.zIndex = -1;
        /**
         * 表示指定对象的 Alpha 透明度值。有效值为0（完全透明）～ 1（完全不透明）。
         * */
        this.alpha = 1;
        /**
         * 显示对象是否可见
         * */
        this.visible = true;
        /**
         * 设置 backgroundImage 后，设置是否及如何重复背景图像。
         * repeat重复
         * no-repeat不重复，
         */
        this.backgroundRepeat = "no-repeat";
    }
    get rotation() {
        return this.rotate;
    }
    set rotation(value) {
        this.rotate = value;
    }
    get visibility() {
        return this.visible ? "visible" : "hidden";
    }
    set visibility(value) {
        this.visible = value === "hidden" ? false : true;
    }
    dirtyCheck(key, value) {
        dirtyCheck(this, key, value);
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