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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Enum/AlignEnum.ts":
/*!*******************************!*\
  !*** ./src/Enum/AlignEnum.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/InputBase.ts":
/*!**************************!*\
  !*** ./src/InputBase.ts ***!
  \**************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ./UIBase */ "./src/UIBase.ts"));
var InputController = __importStar(__webpack_require__(/*! ./Interaction/InputController */ "./src/Interaction/InputController.ts"));
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
var InputBase = /** @class */ (function (_super) {
    __extends(InputBase, _super);
    function InputBase(width, height, tabIndex, tabGroup) {
        var _this = _super.call(this, width, height) || this;
        _this._focused = false;
        _this._useTab = true;
        _this._usePrev = true;
        _this._useNext = true;
        _this.__down = false;
        _this.container.interactive = true;
        InputController.registrer(_this, tabIndex, tabGroup);
        _this.container.on("pointerdown", _this.onPointer, _this);
        _this.container.on("pointerup", _this.onPointer, _this);
        _this.container.on("pointerupoutside", _this.onPointer, _this);
        return _this;
    }
    InputBase.prototype.onPointer = function (e) {
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
    };
    InputBase.prototype.keyDownEvent = function (event) {
        var e = event;
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
    };
    InputBase.prototype.documentMouseDown = function () {
        if (!this.__down)
            this.blur();
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
            InputController.set(this);
            this.emit("focusChanged", true);
            this.emit("focus");
        }
    };
    InputBase.prototype.blur = function () {
        if (this._focused) {
            InputController.clear();
            this._focused = false;
            this._clearEvents();
            this.emit("focusChanged", false);
            this.emit("blur");
        }
    };
    return InputBase;
}(UIBase_1.default));
exports.default = InputBase;


/***/ }),

/***/ "./src/InputSkinBase.ts":
/*!******************************!*\
  !*** ./src/InputSkinBase.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = __importDefault(__webpack_require__(/*! ./InputBase */ "./src/InputBase.ts"));
var ClickEvent_1 = __importDefault(__webpack_require__(/*! ./Interaction/ClickEvent */ "./src/Interaction/ClickEvent.ts"));
var SliceSprite_1 = __importDefault(__webpack_require__(/*! ./c/SliceSprite */ "./src/c/SliceSprite.ts"));
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
var InputSkinBase = /** @class */ (function (_super) {
    __extends(InputSkinBase, _super);
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    function InputSkinBase(width, height, tabIndex, tabGroup) {
        var _this = _super.call(this, width, height, tabIndex, tabGroup) || this;
        _this._isHover = false;
        _this._background = new SliceSprite_1.default();
        _this._clickEvent = new ClickEvent_1.default(_this, true);
        /**
         * 组件的当前视图状态 。 后续扩展
         */
        _this._currentState = "Up";
        _this._background.widthPet = "100%";
        _this._background.heightPct = "100%";
        _this._background.pivot = 0.5;
        _this._background.verticalAlign = 2 /* middle */;
        _this._background.horizontalAlign = 2 /* center */;
        _this._background.borderWidth = 10;
        _this.addChild(_this._background);
        _this.on("move" /* onMove */, _this.onMove, _this);
        _this.on("hover" /* onHover */, _this.onHover, _this);
        _this.on("press" /* onPress */, _this.onPress, _this);
        _this.on("click" /* onClick */, _this.onClick, _this);
        return _this;
    }
    InputSkinBase.prototype.onHover = function (e, thisObj, over) {
        this._isHover = over;
        this.currentState = "Up";
    };
    InputSkinBase.prototype.onPress = function (e, thisObj, isPress) {
        if (isPress)
            this.currentState = "Down";
    };
    InputSkinBase.prototype.onClick = function () {
        //this.currentState = "Down";
    };
    InputSkinBase.prototype.onMove = function () {
        this.currentState = "Move";
    };
    Object.defineProperty(InputSkinBase.prototype, "currentState", {
        get: function () {
            return this._currentState;
        },
        set: function (value) {
            if (value === this._currentState) {
                return;
            }
            this._currentState = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputSkinBase.prototype, "sourceUp", {
        get: function () {
            return this._sourceUp;
        },
        set: function (value) {
            if (value == this._sourceUp) {
                return;
            }
            this._sourceUp = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputSkinBase.prototype, "sourceMove", {
        get: function () {
            return this._sourceMove;
        },
        set: function (value) {
            if (value == this._sourceMove) {
                return;
            }
            this._sourceMove = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputSkinBase.prototype, "sourceDown", {
        get: function () {
            return this._sourceDown;
        },
        set: function (value) {
            if (value == this._sourceDown) {
                return;
            }
            this._sourceDown = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    InputSkinBase.prototype.focus = function () {
        if (!this._focused) {
            _super.prototype.focus.call(this);
        }
    };
    InputSkinBase.prototype.blur = function () {
        if (this._focused) {
            _super.prototype.blur.call(this);
        }
    };
    InputSkinBase.prototype.updateHitArea = function () {
        var bounds = this.container.getLocalBounds();
        this.container.hitArea = new PIXI.Rectangle(bounds.x < 0 ? bounds.x : 0, bounds.y < 0 ? bounds.y : 0, Math.max(bounds.x + bounds.width + (bounds.x < 0 ? -bounds.x : 0), this.width), Math.max(bounds.y + bounds.height + (bounds.y < 0 ? -bounds.y : 0), this.height));
    };
    InputSkinBase.prototype.update = function () {
        var thisObj = this;
        this._background.width = this.width;
        this._background.height = this.height;
        this._background.source = thisObj["_source" + this.currentState];
        this.updateHitArea();
    };
    return InputSkinBase;
}(InputBase_1.default));
exports.default = InputSkinBase;


/***/ }),

/***/ "./src/Interaction/ClickEvent.ts":
/*!***************************************!*\
  !*** ./src/Interaction/ClickEvent.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
    ClickEvent.prototype.startEvent = function () {
        this.obj.container.on(this.eventnameMousedown, this._onMouseDown, this);
        if (!this.right)
            this.obj.container.on("touchstart" /* touchstart */, this._onMouseDown, this);
        if (this.hover) {
            this.obj.container.on("mouseover" /* mouseover */, this._onMouseOver, this);
            this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
        }
    };
    ClickEvent.prototype._onMouseDown = function (e) {
        this.mouse.copyFrom(e.data.global);
        this.id = e.data.identifier;
        this.onPress && this.onPress.call(this.obj, e, this.obj, true), this.obj;
        this.emitTouchEvent("press" /* onPress */, e, true);
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
                this.emitTouchEvent("click" /* onClick */, e);
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
            this.obj.container.removeListener(this.eventnameMouseup, this._onMouseUp, this);
            this.obj.container.removeListener(this.eventnameMouseupoutside, this._onMouseUpOutside, this);
            if (!this.right) {
                this.obj.container.removeListener("touchend" /* touchend */, this._onMouseUp, this);
                this.obj.container.removeListener("touchendoutside" /* touchendoutside */, this._onMouseUpOutside, this);
            }
            this.bound = false;
        }
        this.onPress && this.onPress.call(this.obj, e, this.obj, false);
        this.emitTouchEvent("press" /* onPress */, e, false);
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
            this.emitTouchEvent("click" /* onClick */, e, false);
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
            this.emitTouchEvent("hover" /* onHover */, e, true);
        }
    };
    ClickEvent.prototype._onMouseOut = function (e) {
        if (this.ishover) {
            this.ishover = false;
            this.obj.container.removeListener("mousemove" /* mousemove */, this._onMouseMove, this);
            this.obj.container.removeListener("touchmove" /* touchmove */, this._onMouseMove, this);
            this.onHover && this.onHover.call(this.obj, e, this.obj, false);
            this.emitTouchEvent("hover" /* onHover */, e, false);
        }
    };
    ClickEvent.prototype._onMouseMove = function (e) {
        this.onMove && this.onMove.call(this.obj, e, this.obj);
        this.emitTouchEvent("move" /* onMove */, e);
    };
    /** 清除拖动 */
    ClickEvent.prototype.stopEvent = function () {
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
exports.default = ClickEvent;


/***/ }),

/***/ "./src/Interaction/DragDropController.ts":
/*!***********************************************!*\
  !*** ./src/Interaction/DragDropController.ts ***!
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

/***/ "./src/Interaction/DragEvent.ts":
/*!**************************************!*\
  !*** ./src/Interaction/DragEvent.ts ***!
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
        this.obj = obj;
        obj.container.interactive = true;
        this.startEvent();
    }
    DragEvent.prototype.startEvent = function () {
        this.obj.container.on("mousedown" /* mousedown */, this._onDragStart, this);
        this.obj.container.on("touchstart" /* touchstart */, this._onDragStart, this);
    };
    DragEvent.prototype._onDragStart = function (e) {
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
    };
    DragEvent.prototype._onDragEnd = function (e) {
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
    };
    /** 清除拖动 */
    DragEvent.prototype.stopEvent = function () {
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
    };
    DragEvent.prototype.remove = function () {
        this.stopEvent();
        this.onDragPress = undefined;
        this.onDragEnd = undefined;
        this.onDragMove = undefined;
        this.onDragStart = undefined;
        this.obj.container.interactive = false;
    };
    return DragEvent;
}());
exports.default = DragEvent;


/***/ }),

/***/ "./src/Interaction/Index.ts":
/*!**********************************!*\
  !*** ./src/Interaction/Index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent_1 = __importDefault(__webpack_require__(/*! ./ClickEvent */ "./src/Interaction/ClickEvent.ts"));
exports.ClickEvent = ClickEvent_1.default;
var DragDropController = __importStar(__webpack_require__(/*! ./DragDropController */ "./src/Interaction/DragDropController.ts"));
exports.DragDropController = DragDropController;
var DragEvent_1 = __importDefault(__webpack_require__(/*! ./DragEvent */ "./src/Interaction/DragEvent.ts"));
exports.DragEvent = DragEvent_1.default;
var InputController = __importStar(__webpack_require__(/*! ./InputController */ "./src/Interaction/InputController.ts"));
exports.InputController = InputController;
var MouseScrollEvent_1 = __importDefault(__webpack_require__(/*! ./MouseScrollEvent */ "./src/Interaction/MouseScrollEvent.ts"));
exports.MouseScrollEvent = MouseScrollEvent_1.default;
var InteractionEvent_1 = __importDefault(__webpack_require__(/*! ./InteractionEvent */ "./src/Interaction/InteractionEvent.ts"));
exports.InteractionEvent = InteractionEvent_1.default;


/***/ }),

/***/ "./src/Interaction/InputController.ts":
/*!********************************************!*\
  !*** ./src/Interaction/InputController.ts ***!
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
        exports._checkGroupObject.values[cb.checkGroup] = cb.uuid;
    }
}
exports.updateCheckGroupSelected = updateCheckGroupSelected;
/** 获取分组中选中的checkbox值 */
function getCheckGroupSelectedValue(name) {
    var uuid = exports._checkGroupObject.values[name];
    if (uuid) {
        var cb = exports._checkGroupObject.groups[name][uuid];
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

/***/ "./src/Interaction/InteractionEvent.ts":
/*!*********************************************!*\
  !*** ./src/Interaction/InteractionEvent.ts ***!
  \*********************************************/
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
 * 事件的基础类
 *
 * 触摸或鼠标操作事件 可查看 -> TouchEventEnum.TouchEnum
 *
 * import InteractionEvent from "../Interaction/InteractionEvent",
 */
var InteractionEvent = /** @class */ (function (_super) {
    __extends(InteractionEvent, _super);
    function InteractionEvent() {
        return _super.call(this) || this;
    }
    return InteractionEvent;
}(PIXI.interaction.InteractionEvent));
exports.default = InteractionEvent;


/***/ }),

/***/ "./src/Interaction/MouseScrollEvent.ts":
/*!*********************************************!*\
  !*** ./src/Interaction/MouseScrollEvent.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");
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
        this.id = "";
        this.delta = new PIXI.Point();
        this.obj = obj;
        this.preventDefault = preventDefault;
        obj.container.interactive = true;
        this.startEvent();
    }
    MouseScrollEvent.prototype.startEvent = function () {
        this.obj.container.on("mouseover" /* mouseover */, this._onHover, this);
        this.obj.container.on("mouseout" /* mouseout */, this._onMouseOut, this);
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
    };
    MouseScrollEvent.prototype.remove = function () {
        this.stopEvent();
    };
    return MouseScrollEvent;
}());
exports.default = MouseScrollEvent;


/***/ }),

/***/ "./src/Stage.ts":
/*!**********************!*\
  !*** ./src/Stage.ts ***!
  \**********************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ./UIBase */ "./src/UIBase.ts"));
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
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage(width, height) {
        var _this = _super.call(this) || this;
        /**
         * 最小宽度
         * @default
         */
        _this.minWidth = 0;
        /**
         * 最小高度
         * @default
         */
        _this.minHeight = 0;
        /**
         * 节点列表
         */
        _this.UIChildren = [];
        /**
         * 是否开启交互功能
         * @default
         */
        _this.interactive = true;
        /**
         * 可交互区域
         */
        _this.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        /**
         * 是否初始化
         * @default
         */
        _this.initialized = true;
        _this._width = 0;
        _this._height = 0;
        /** 没有功能实现，内部编辑器 */
        _this.container = new PIXI.Container;
        _this._width = width;
        _this._height = height;
        _this.stage = _this;
        _this.hitArea = new PIXI.Rectangle(0, 0, 0, 0);
        _this.resize(width, height);
        return _this;
    }
    Object.defineProperty(Stage.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (!isNaN(value)) {
                this._width = value;
                this.resize();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stage.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (!isNaN(value)) {
                this._height = value;
                this.resize();
            }
        },
        enumerable: true,
        configurable: true
    });
    /** 添加显示对象，需集成UIBASE */
    Stage.prototype.addChild = function () {
        var UIObject = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            UIObject[_i] = arguments[_i];
        }
        var argumentsLength = UIObject.length;
        if (argumentsLength > 1) {
            for (var i = 0; i < argumentsLength; i++) {
                this.addChild(UIObject[i]);
            }
        }
        else {
            if (UIObject[0] instanceof UIBase_1.default) {
                var item = UIObject[0];
                if (item.parent) {
                    item.parent.removeChild(item);
                }
                item.parent = this;
                this.UIChildren.push(item);
                _super.prototype.addChild.call(this, item.container);
                item.updatesettings(true);
            }
            else {
                throw "stage addChild arg not vfui";
            }
        }
        return UIObject[0];
    };
    Stage.prototype.addChildAt = function (item, index) {
        if (item instanceof UIBase_1.default) {
            if (item.parent) {
                item.parent.removeChild(item);
            }
            item.parent = this;
            _super.prototype.addChildAt.call(this, item.container, index);
            this.UIChildren.splice(index, 0, item);
            item.updatesettings(true);
        }
        else {
            throw "stage addChildAt arg not vfui";
        }
        return item;
    };
    Stage.prototype.removeChild = function () {
        var UIObject = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            UIObject[_i] = arguments[_i];
        }
        var argumentLenght = UIObject.length;
        if (argumentLenght > 1) {
            for (var i = 0; i < argumentLenght; i++) {
                this.removeChild(UIObject[i]);
            }
        }
        else {
            if (!(UIObject[0] instanceof UIBase_1.default)) {
                throw "stage removeChild arg not vfui";
            }
            var item = UIObject[0];
            var index = this.UIChildren.indexOf(item);
            if (index !== -1) {
                item.container.parent.removeChild(item.container);
                this.UIChildren.splice(index, 1);
                item.parent = undefined;
            }
        }
        return UIObject[0];
    };
    Stage.prototype.resize = function (width, height) {
        if (width && !isNaN(width))
            this._width = width;
        if (height && !isNaN(height))
            this._height = height;
        if (this.minWidth || this.minHeight) {
            var rx = 1, ry = 1;
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
        for (var i = 0; i < this.UIChildren.length; i++)
            this.UIChildren[i].updatesettings(true, false);
    };
    /** 没有功能实现，内部编辑器 */
    Stage.prototype.updatesettings = function () {
    };
    return Stage;
}(PIXI.Container));
exports.default = Stage;


/***/ }),

/***/ "./src/Ticker.ts":
/*!***********************!*\
  !*** ./src/Ticker.ts ***!
  \***********************/
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tween = __importStar(__webpack_require__(/*! ./c/Tween/index */ "./src/c/Tween/index.ts"));
var Utils_1 = __webpack_require__(/*! ./Utils */ "./src/Utils.ts");
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
        /** 上次运行的时间 */
        _this._lastnow = 0;
        _this._disabled = true;
        _this._lastnow = Utils_1.now();
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
            if (!this._disabled) {
                this.update(Utils_1.now() - this._lastnow);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ticker.prototype.update = function (deltaTime) {
        if (this._disabled) {
            return;
        }
        var _now = Utils_1.now();
        tween.update(_now);
        this.emit("update", _now - this._lastnow, deltaTime);
        this._lastnow = _now;
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


/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = __importStar(__webpack_require__(/*! ./Utils */ "./src/Utils.ts"));
exports.Utils = Utils;
var Stage_1 = __importDefault(__webpack_require__(/*! ./Stage */ "./src/Stage.ts"));
exports.Stage = Stage_1.default;
var Container_1 = __importDefault(__webpack_require__(/*! ./c/Container */ "./src/c/Container.ts"));
exports.Container = Container_1.default;
var ScrollingContainer_1 = __importDefault(__webpack_require__(/*! ./c/ScrollingContainer */ "./src/c/ScrollingContainer.ts"));
exports.ScrollingContainer = ScrollingContainer_1.default;
var SortableList_1 = __importDefault(__webpack_require__(/*! ./c/SortableList */ "./src/c/SortableList.ts"));
exports.SortableList = SortableList_1.default;
var Sprite_1 = __importDefault(__webpack_require__(/*! ./c/Sprite */ "./src/c/Sprite.ts"));
exports.Sprite = Sprite_1.default;
var TilingSprite_1 = __importDefault(__webpack_require__(/*! ./c/TilingSprite */ "./src/c/TilingSprite.ts"));
exports.TilingSprite = TilingSprite_1.default;
var SliceSprite_1 = __importDefault(__webpack_require__(/*! ./c/SliceSprite */ "./src/c/SliceSprite.ts"));
exports.SliceSprite = SliceSprite_1.default;
var Slider_1 = __importDefault(__webpack_require__(/*! ./c/Slider */ "./src/c/Slider.ts"));
exports.Slider = Slider_1.default;
var ScrollBar_1 = __importDefault(__webpack_require__(/*! ./c/ScrollBar */ "./src/c/ScrollBar.ts"));
exports.ScrollBar = ScrollBar_1.default;
var Text_1 = __importDefault(__webpack_require__(/*! ./c/Text */ "./src/c/Text.ts"));
exports.Text = Text_1.default;
var TextStyle_1 = __importDefault(__webpack_require__(/*! ./c/Text/TextStyle */ "./src/c/Text/TextStyle.ts"));
exports.TextStyle = TextStyle_1.default;
var TextInput_1 = __importDefault(__webpack_require__(/*! ./c/TextInput */ "./src/c/TextInput.ts"));
exports.TextInput = TextInput_1.default;
var Button_1 = __importDefault(__webpack_require__(/*! ./c/Button */ "./src/c/Button.ts"));
exports.Button = Button_1.default;
var CheckBox_1 = __importDefault(__webpack_require__(/*! ./c/CheckBox */ "./src/c/CheckBox.ts"));
exports.CheckBox = CheckBox_1.default;
var Rect_1 = __importDefault(__webpack_require__(/*! ./c/Rect */ "./src/c/Rect.ts"));
exports.Rect = Rect_1.default;
var Interaction = __importStar(__webpack_require__(/*! ./Interaction/Index */ "./src/Interaction/Index.ts"));
exports.Interaction = Interaction;
var UIBase_1 = __importDefault(__webpack_require__(/*! ./UIBase */ "./src/UIBase.ts"));
exports.UIBase = UIBase_1.default;
var Ticker_1 = __webpack_require__(/*! ./Ticker */ "./src/Ticker.ts");
exports.TickerShared = Ticker_1.shared;
var AlignEnum = __importStar(__webpack_require__(/*! ./Enum/AlignEnum */ "./src/Enum/AlignEnum.ts"));
exports.AlignEnum = AlignEnum;
var tween = __importStar(__webpack_require__(/*! ./c/Tween/index */ "./src/c/Tween/index.ts"));
exports.tween = tween;


/***/ }),

/***/ "./src/UIBase.ts":
/*!***********************!*\
  !*** ./src/UIBase.ts ***!
  \***********************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UISettings_1 = __importDefault(__webpack_require__(/*! ./UISettings */ "./src/UISettings.ts"));
var Stage_1 = __importDefault(__webpack_require__(/*! ./Stage */ "./src/Stage.ts"));
var DragEvent_1 = __importDefault(__webpack_require__(/*! ./Interaction/DragEvent */ "./src/Interaction/DragEvent.ts"));
var DragDropController = __importStar(__webpack_require__(/*! ./Interaction/DragDropController */ "./src/Interaction/DragDropController.ts"));
var Utils_1 = __webpack_require__(/*! ./Utils */ "./src/Utils.ts");
var ContainerBase_1 = __importDefault(__webpack_require__(/*! ./c/ContainerBase */ "./src/c/ContainerBase.ts"));
/**
 * UI的顶级类，基础的UI对象
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @param width {Number} Width UI对象的宽度
 * @param height {Number} Height UI对象的高度
 * @since 1.0.0
 */
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    /**
     * 构造函数
     * @param width 宽 数字或百分比, 不传默认0
     * @param height 高 数字或百分比,不传默认0
     */
    function UIBase(width, height) {
        var _this = _super.call(this) || this;
        _this.name = "";
        /**
         * 当前UI包含的节点
         * @default
         */
        _this.children = [];
        /**
         * 是否初始化
         * @default
         */
        _this.initialized = false;
        /**
         * 可拖动初始化
         *  @default
         */
        _this.dragInitialized = false;
        /**
         * 可被掉落初始化
         * @default
        */
        _this.dropInitialized = false;
        /**
         * 是否脏数据
         * @default
         */
        _this.dirty = true;
        /** 测量值 */
        /**
         * @private
         */
        _this._width = 0;
        /**
         * @private
         */
        _this._height = 0;
        _this._parentWidth = 0;
        _this._parentHeight = 0;
        /** 动态属性，避免其他类注入 */
        _this.attach = {};
        /**
         * 上次的宽度（未使用，丢弃）
         */
        _this._oldWidth = -1;
        /**
         * 上次的高度（未使用，丢弃）
         */
        _this._oldHeight = -1;
        /**
        *  在不同分辨率下保持像素稳定
        * @default
        */
        _this.pixelPerfect = true;
        /**
         * 是否拖动中
         * @default
         */
        _this.dragging = false;
        _this.dalayDrawTimeId = -1;
        _this.uuid = Utils_1.uid();
        _this.container = new ContainerBase_1.default();
        _this.container.name = _this.constructor.name;
        _this.setting = new UISettings_1.default();
        if (width && height)
            _this.setDefaultSize(width, height);
        return _this;
    }
    /** 设置默认的宽高，一般使用情况在构造函数中，并不会触发组件刷新 */
    UIBase.prototype.setDefaultSize = function (width, height) {
        var widthItem = this.getPetValue(width);
        if (widthItem.num !== undefined) {
            this.setting.width = widthItem.num;
        }
        else {
            this.setting.widthPct = widthItem.pct;
        }
        var heightItem = this.getPetValue(height);
        if (heightItem.num !== undefined) {
            this.setting.height = heightItem.num;
        }
        else {
            this.setting.heightPct = heightItem.pct;
        }
    };
    /**
     * 数值或百分比，转换为数值类型
     */
    UIBase.prototype.getPetValue = function (value) {
        var num;
        var pct;
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
        return { num: num, pct: pct };
    };
    Object.defineProperty(UIBase.prototype, "x", {
        get: function () {
            return this.setting.left;
        },
        /** 获取设置X */
        set: function (value) {
            this.left = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "y", {
        get: function () {
            return this.setting.top;
        },
        /** 获取设置Y */
        set: function (value) {
            this.top = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "widthPet", {
        /**
         * 设置宽度百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.width = item.num;
            }
            else {
                this.setting.widthPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "width", {
        get: function () {
            return this.setting.width;
        },
        /**
         * 设置宽度,整数
         */
        set: function (value) {
            value = Math.max(value, 0);
            this.setting.width = value;
            this.setting.widthPct = undefined;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualWidth", {
        /**
         * 立即获取渲染的实际宽度 Identifier 'actual_width' is not in camel case
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.widthPct && this.parent) {
                    this._width = this.parent._width * this.setting.widthPct;
                }
                else {
                    this._width = this.setting.width;
                }
            }
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "heightPct", {
        /**
         * 设置高度，数百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.height = item.num;
            }
            else {
                this.setting.heightPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "height", {
        get: function () {
            return this.setting.height;
        },
        /**
         * 设置高度，数字
         */
        set: function (value) {
            value = Math.max(value, 0);
            this.setting.height = value;
            this.setting.heightPct = undefined;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualHeight", {
        /**
         * 立即获取渲染的实际高度
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.heightPct && this.parent) {
                    this._height = this.parent._height * this.setting.heightPct;
                }
                else {
                    this._height = this.setting.height;
                }
            }
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "minWidthPct", {
        /**
         * 设置最小宽度百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.minWidth = item.num;
            }
            else {
                this.setting.minWidthPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "minWidth", {
        get: function () {
            return this.setting.minWidth;
        },
        /**
         * 设置最小宽度
         */
        set: function (value) {
            this.setting.minWidth = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualMinWidth", {
        /**
         * 立即获取渲染的实际最小宽度
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.minWidthPct && this.parent) {
                    this._minWidth = this.parent._width * this.setting.minWidthPct;
                }
                else {
                    this._minWidth = this.setting.minWidth;
                }
            }
            return this._minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "minHeightPct", {
        /**
         * 设置最小高度百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.minHeight = item.num;
            }
            else {
                this.setting.minHeightPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "minHeight", {
        get: function () {
            return this.setting.minHeight;
        },
        /** 设置最小高度 */
        set: function (value) {
            this.setting.minHeight = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualMinHeight", {
        /**
         * 立即获取渲染的实际最小高度
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.minHeightPct && this.parent) {
                    this._minHeight = this.parent._height * this.setting.minHeightPct;
                }
                else {
                    this._minHeight = this.setting.minHeight;
                }
            }
            return this._minHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "maxWidthPct", {
        /**
         * 设置最大宽度百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.maxWidth = item.num;
            }
            else {
                this.setting.maxWidthPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "maxWidth", {
        get: function () {
            return this.setting.maxWidth;
        },
        /** 置最大宽度 */
        set: function (value) {
            this.setting.maxWidth = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualMaxWidth", {
        /**
         * 立即获取渲染的实际最小高度
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.maxWidthPct && this.parent) {
                    this._maxWidth = this.parent._width * this.setting.maxWidthPct;
                }
                else {
                    this._maxWidth = this.setting.maxWidth;
                }
            }
            return this._maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "maxHeightPct", {
        /**
         * 设置最大高度百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.maxHeight = item.num;
            }
            else {
                this.setting.maxHeightPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "maxHeight", {
        get: function () {
            return this.setting.maxHeight;
        },
        /** 设置最大高度 */
        set: function (value) {
            this.setting.maxHeight = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualMaxHeight", {
        /**
         * 立即获取渲染的实际最小高度
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.maxHeightPct && this.parent) {
                    this._maxHeight = this.parent._height * this.setting.maxHeightPct;
                }
                else {
                    this._maxHeight = this.setting.maxHeight;
                }
            }
            return this._maxHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorLeftPct", {
        /**
         * 设置锚点距左边距离百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.anchorLeft = item.num;
            }
            else {
                this.setting.anchorLeftPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorLeft", {
        get: function () {
            return this.setting.anchorLeft;
        },
        /** 设置锚点距左边距离 */
        set: function (value) {
            this.setting.anchorLeft = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualAnchorLeft", {
        /**
         * 立即获取渲染的实际锚点左边距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.anchorLeftPct && this.parent) {
                    this._anchorLeft = this.parent._width * this.setting.anchorLeftPct;
                }
                else {
                    this._anchorLeft = this.setting.anchorLeft;
                }
            }
            return this._anchorLeft;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorRightPct", {
        /**
         * 获取设置锚点右边距离百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.anchorRight = item.num;
            }
            else {
                this.setting.anchorRightPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorRight", {
        get: function () {
            return this.setting.anchorRight;
        },
        /** 获取设置锚点右边距离 */
        set: function (value) {
            this.setting.anchorRight = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualAnchorRight", {
        /**
         * 立即获取渲染的实际锚点右边距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.anchorRightPct && this.parent) {
                    this._anchorRight = this.parent._width * this.setting.anchorRightPct;
                }
                else {
                    this._anchorRight = this.setting.anchorRight;
                }
            }
            return this._anchorRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorTopPct", {
        /**
         * 获取或设置锚点距离顶部距离百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.anchorTop = item.num;
            }
            else {
                this.setting.anchorTopPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorTop", {
        get: function () {
            return this.setting.anchorTop;
        },
        /** 获取或设置锚点距离顶部距离 */
        set: function (value) {
            this.setting.anchorTop = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualAnchorTop", {
        /**
         * 立即获取渲染的实际锚点顶部距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.anchorTopPct && this.parent) {
                    this._anchorTop = this.parent._height * this.setting.anchorTopPct;
                }
                else {
                    this._anchorTop = this.setting.anchorTop;
                }
            }
            return this._anchorTop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorBottomPct", {
        /**
         * 设置锚点距离底部距离百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.anchorBottom = item.num;
            }
            else {
                this.setting.anchorBottomPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "anchorBottom", {
        get: function () {
            return this.setting.anchorBottom;
        },
        /** 获取或设置锚点距离底部距离 */
        set: function (value) {
            this.setting.anchorBottom = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualAnchorBottom", {
        /**
         * 立即获取渲染的实际锚点底部距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.anchorBottomPct && this.parent) {
                    this._anchorBottom = this.parent._height * this.setting.anchorBottomPct;
                }
                else {
                    this._anchorBottom = this.setting.anchorBottom;
                }
            }
            return this._anchorBottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "leftPct", {
        /** 设置距离左边距 百分比 */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.left = item.num;
            }
            else {
                this.setting.leftPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "left", {
        get: function () {
            return this.setting.left;
        },
        /** 设置左边距 */
        set: function (value) {
            this.setting.left = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualLeft", {
        /**
         * 立即获取渲染的实际左部距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.leftPct && this.parent) {
                    this._left = this.parent._width * this.setting.leftPct;
                }
                else {
                    this._left = this.setting.left;
                }
            }
            return this._left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "rightPct", {
        /** 设置右边距百分比 */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.right = item.num;
            }
            else {
                this.setting.rightPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "right", {
        get: function () {
            return this.setting.right;
        },
        /** 设置右边距 */
        set: function (value) {
            this.setting.right = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualRight", {
        /**
         * 立即获取渲染的实际右部距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.rightPct && this.parent) {
                    this._right = this.parent.width * this.setting.rightPct;
                }
                else {
                    this._right = this.setting.right;
                }
            }
            return this._right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "topPct", {
        /**
         * 设置距离顶部距离百分比
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.top = item.num;
            }
            else {
                this.setting.topPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "top", {
        get: function () {
            return this.setting.top;
        },
        /** 设置顶边距 */
        set: function (value) {
            this.setting.top = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualTop", {
        /**
         * 立即获取渲染的实际顶部距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.topPct && this.parent) {
                    this._top = this.parent._height * this.setting.topPct;
                }
                else {
                    this._top = this.setting.top;
                }
            }
            return this._top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "bottomPct", {
        /**
         * 获取或设置距离底部距离
         */
        set: function (value) {
            var item = this.getPetValue(value);
            if (item.num !== undefined) {
                this.setting.bottom = item.num;
            }
            else {
                this.setting.bottomPct = item.pct;
            }
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "bootom", {
        /** 设置底边距 */
        set: function (value) {
            this.setting.bottom = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "bottom", {
        get: function () {
            return this.setting.bottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "actualBottom", {
        /**
         * 立即获取渲染的实际顶部距离
         */
        get: function () {
            if (this.dirty) {
                if (this.setting.bottomPct && this.parent) {
                    this._bottom = this.parent.height * this.setting.bottomPct;
                }
                else {
                    this._bottom = this.setting.bottom;
                }
            }
            return this._bottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "verticalAlign", {
        get: function () {
            return this.setting.verticalAlign;
        },
        /**
         * 垂直布局
         */
        set: function (value) {
            this.setting.verticalAlign = value;
            this.baseupdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "valign", {
        get: function () {
            return this.setting.verticalAlign;
        },
        /**
         * 垂直布局 verticalAlign简写
         */
        set: function (value) {
            this.setting.verticalAlign = value;
            this.baseupdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "horizontalAlign", {
        get: function () {
            return this.setting.horizontalAlign;
        },
        /**
         * 水平布局
         */
        set: function (value) {
            this.setting.horizontalAlign = value;
            this.baseupdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "align", {
        get: function () {
            return this.setting.horizontalAlign;
        },
        /**
         * 水平布局 horizontalAlign 简写
         */
        set: function (value) {
            this.setting.horizontalAlign = value;
            this.baseupdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "tint", {
        get: function () {
            return this.setting.tint || NaN;
        },
        /**
         * 显示对象填充色 0xFFFFFF
         */
        set: function (value) {
            this.setting.tint = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "alpha", {
        get: function () {
            return this.setting.alpha;
        },
        /**
         * 获取设置透明度
         */
        set: function (value) {
            this.setting.alpha = value;
            this.container.alpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "rotation", {
        get: function () {
            return this.setting.rotation || 0;
        },
        /**
         * 获取设置旋转 (弧度)
         */
        set: function (value) {
            this.setting.rotation = value;
            this.container.rotation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "angle", {
        get: function () {
            return this.setting.angle || 0;
        },
        /**
         * 获取设置旋转 (角度)
         */
        set: function (value) {
            this.setting.angle = value;
            this.container.angle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "blendMode", {
        get: function () {
            return this.setting.blendMode || NaN;
        },
        /**
         * 设置混合模式参考，PIXI.BLEND_MODES
         */
        set: function (value) {
            this.setting.blendMode = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "pivotX", {
        get: function () {
            return this.setting.pivotX;
        },
        /**
         * 获取设置锚点Y的像素
         */
        set: function (value) {
            this.setting.pivotX = value;
            this.baseupdate();
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "pivotY", {
        get: function () {
            return this.setting.pivotY;
        },
        /**
         * 获取设置锚点Y的像素
         */
        set: function (value) {
            this.setting.pivotY = value;
            this.baseupdate();
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "pivot", {
        /**
         * 锚点的像素表示法,便捷的方法，避免单独设置
         */
        set: function (value) {
            this.setting.pivotX = value;
            this.setting.pivotY = value;
            this.baseupdate();
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "scaleX", {
        get: function () {
            return this.setting.scaleX;
        },
        /**
         * 设置X轴缩放
         */
        set: function (value) {
            this.setting.scaleX = value;
            this.container.scale.x = value;
            this.baseupdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "scaleY", {
        get: function () {
            return this.setting.scaleY;
        },
        /**
         * 设置Y轴缩放
         */
        set: function (value) {
            this.setting.scaleY = value;
            this.container.scale.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "scale", {
        get: function () {
            return this.setting.scaleX;
        },
        /**
         * 进行统一缩放，当单独设置过scaleX、scaleY后，调用scale取值为scaleX
         */
        set: function (value) {
            this.setting.scaleX = value;
            this.setting.scaleY = value;
            this.container.scale.x = value;
            this.container.scale.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "draggable", {
        get: function () {
            return this.setting.draggable;
        },
        /**
         * 是否开启拖动
         * @default false
         */
        set: function (value) {
            this.setting.draggable = value;
            if (this.initialized) {
                if (value)
                    this.initDraggable();
                else
                    this.clearDraggable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "dragRestricted", {
        get: function () {
            return this.setting.dragRestricted;
        },
        /**
         * 是否开启限制拖动范围
         */
        set: function (value) {
            this.setting.dragRestricted = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "dragRestrictAxis", {
        get: function () {
            return this.setting.dragRestrictAxis;
        },
        /**
         * 限制拖动抽X抽或Y抽，需要开启dragRestricted
         */
        set: function (value) {
            this.setting.dragRestrictAxis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "dragThreshold", {
        get: function () {
            return this.setting.dragThreshold;
        },
        /**
         * 拖动限制门槛,小于设置的数不执行拖动
         */
        set: function (value) {
            this.setting.dragThreshold = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "dragGroup", {
        get: function () {
            return this.setting.dragGroup;
        },
        /**
         * 拖动分组
         */
        set: function (value) {
            this.setting.dragGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "dragContainer", {
        get: function () {
            return this.setting.dragContainer;
        },
        /**
         * 拖动的容器
         */
        set: function (value) {
            this.setting.dragContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "droppable", {
        get: function () {
            return this.setting.droppable;
        },
        /**
         * 是否开拖动掉落
         */
        set: function (value) {
            this.setting.droppable = true;
            if (this.initialized) {
                if (value)
                    this.initDroppable();
                else
                    this.clearDroppable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "droppableReparent", {
        get: function () {
            return this.setting.droppableReparent;
        },
        /**
         * 接收掉落的新容器
         */
        set: function (value) {
            this.setting.droppableReparent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "dropGroup", {
        get: function () {
            return this.setting.dropGroup;
        },
        /**
         * 接收拖动掉落的分组名
         */
        set: function (value) {
            this.setting.dropGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "renderable", {
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
    Object.defineProperty(UIBase.prototype, "visible", {
        get: function () {
            return this.container.visible;
        },
        /**
         * 显示对象是否可见
         */
        set: function (value) {
            this.container.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "cacheAsBitmap", {
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
    Object.defineProperty(UIBase.prototype, "interactive", {
        get: function () {
            return this.container.interactive;
        },
        /**
         * 对象是否可以接收事件
         */
        set: function (value) {
            this.container.interactive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBase.prototype, "interactiveChildren", {
        get: function () {
            return this.container.interactiveChildren;
        },
        /**
         * 子对象是否可以接收事件，设置false后，会绕过HitTest方法的递归
         */
        set: function (value) {
            this.container.interactiveChildren = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 绘制渲染对象
     * @param updateChildren 是否渲染子节点，true渲染
     * @param updateParent  是否渲染父容器，true渲染
     */
    UIBase.prototype.updatesettings = function (updateChildren, updateParent) {
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
    };
    Object.defineProperty(UIBase.prototype, "dalayDraw", {
        /**
         * 延迟渲染，PIXI还没找到下一帧事件，后续修改，注意生命周期结束的销毁
         */
        set: function (isDalay) {
            var _this = this;
            if (!isDalay) {
                window.clearTimeout(this.dalayDrawTimeId);
                this.dalayDrawTimeId = -1;
            }
            if (this.dalayDrawTimeId !== -1) {
                return;
            }
            this.dalayDrawTimeId = window.setTimeout(function () {
                _this.update();
                _this.dalayDrawTimeId = -1;
            }, 30);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 更新方法，其他组件重写
     */
    UIBase.prototype.update = function () {
    };
    /**
     * 更新渲染设置属性
     */
    UIBase.prototype.baseupdate = function () {
        if (!this.parent) {
            return;
        }
        var parentHeight, parentWidth;
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
        var pivotXOffset = this.pivotX * this._width;
        var pivotYOffset = this.pivotY * this._height;
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
            var useHorizontalAnchor = this._anchorLeft !== undefined || this._anchorRight !== undefined;
            var useLeftRight = !useHorizontalAnchor && (this._left !== undefined || this._right !== undefined);
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
            var useVerticalAnchor = this._anchorTop !== undefined || this._anchorBottom !== undefined;
            var useTopBottom = !useVerticalAnchor && (this._top !== undefined || this._bottom !== undefined);
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
    };
    /**
     * 渲染父容器
     */
    UIBase.prototype.updateParent = function () {
        if (this.parent && this.parent.updatesettings) {
            this.parent.updatesettings(false, true);
        }
    };
    /**
     * 更新所有子节点
     */
    UIBase.prototype.updateChildren = function () {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].updatesettings(true);
        }
    };
    /**
     * 添加UI元件，可以同时添加多个如addChild(a,b,c,d)
     * @param UIObject 要添加的UI组件
     */
    UIBase.prototype.addChild = function (UIObject) {
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
        var item = UIObject;
        if (item.parent) {
            item.parent.removeChild(item);
        }
        item.parent = this;
        this.container.addChild(item.container);
        this.children.push(item);
        this.updatesettings(true, true);
        return UIObject;
    };
    UIBase.prototype.addChildAt = function (item, index) {
        if (item.parent) {
            item.parent.removeChild(item);
        }
        item.parent = this;
        this.container.addChildAt(item.container, index);
        this.children.splice(index, 0, item);
        this.updatesettings(true, true);
        return item;
    };
    /**
     * 移除已添加的UI组件，可以同时移除多个如addChild(a,b,c,d)
     * @param UIObject 要移除的UI组件
     */
    UIBase.prototype.removeChild = function (UIObject) {
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
        var item = UIObject;
        var index = this.children.indexOf(item);
        if (index !== -1) {
            var oldUIParent_1 = item.parent;
            //var oldParent = UIObject.container.parent;
            item.container.parent.removeChild(item.container);
            this.children.splice(index, 1);
            item.parent = undefined;
            //oldParent._recursivePostUpdateTransform();
            setTimeout(function () {
                if (oldUIParent_1 && oldUIParent_1.updatesettings)
                    oldUIParent_1.updatesettings(true, true);
            }, 0);
        }
    };
    /**
     * Initializes the object when its added to an UIStage
     * 将对象添加到UIStage时，进行的初始化方法
     */
    UIBase.prototype.initialize = function () {
        this.initialized = true;
        this.stage = this.parent && this.parent.stage;
        if (this.draggable) {
            this.initDraggable();
        }
        if (this.droppable) {
            this.initDroppable();
        }
    };
    UIBase.prototype.clearDraggable = function () {
        if (this.dragInitialized) {
            this.dragInitialized = false;
            this.drag && this.drag.stopEvent();
        }
    };
    UIBase.prototype.initDraggable = function () {
        var _this = this;
        if (!this.dragInitialized) {
            this.dragInitialized = true;
            var containerStart_1 = new PIXI.Point(), stageOffset_1 = new PIXI.Point();
            //self = this;
            this._dragPosition = new PIXI.Point();
            this.drag = new DragEvent_1.default(this);
            this.drag.onDragStart = function (e) {
                var added = DragDropController.add(_this, e);
                if (!_this.dragging && added) {
                    _this.dragging = true;
                    _this.container.interactive = false;
                    containerStart_1.copyFrom(_this.container.position);
                    if (_this.dragContainer) {
                        var c = void 0;
                        if (_this.dragContainer instanceof UIBase) {
                            c = _this.dragContainer.container;
                        }
                        else if (_this.dragContainer instanceof PIXI.Container) {
                            c = _this.dragContainer;
                        }
                        if (c && _this.parent) {
                            //_this.container._recursivePostUpdateTransform();
                            stageOffset_1.set(c.worldTransform.tx - _this.parent.container.worldTransform.tx, c.worldTransform.ty - _this.parent.container.worldTransform.ty);
                            c.addChild(_this.container);
                        }
                    }
                    else {
                        stageOffset_1.set(0);
                    }
                    _this.emit("onDragStart" /* onDragStart */, e);
                }
            };
            this.drag.onDragMove = function (e, offset) {
                if (_this.dragging && _this._dragPosition) {
                    _this._dragPosition.set(containerStart_1.x + offset.x - stageOffset_1.x, containerStart_1.y + offset.y - stageOffset_1.y);
                    _this.x = _this._dragPosition.x;
                    _this.y = _this._dragPosition.y;
                    _this.emit("onDragMove" /* onDragMove */, e);
                }
            };
            this.drag.onDragEnd = function (e) {
                if (_this.dragging) {
                    _this.dragging = false;
                    //Return to container after 0ms if not picked up by a droppable
                    setTimeout(function () {
                        _this.container.interactive = true;
                        var item = DragDropController.getItem(_this);
                        if (item && _this.parent) {
                            var container = void 0;
                            if (_this.parent instanceof Stage_1.default) {
                                container = _this.stage;
                            }
                            else {
                                container = _this.parent.container;
                            }
                            if (container)
                                container.toLocal(_this.container.position, _this.container.parent);
                            if (container != _this.container) {
                                _this.parent.addChild(_this);
                            }
                        }
                        _this.emit("onDragEnd" /* onDragEnd */, e);
                    }, 0);
                }
            };
        }
    };
    UIBase.prototype.clearDroppable = function () {
        if (this.dropInitialized) {
            this.dropInitialized = false;
            this.container.removeListener("mouseup" /* mouseup */, this.onDrop, this);
            this.container.removeListener("touchend" /* touchend */, this.onDrop, this);
        }
    };
    UIBase.prototype.initDroppable = function () {
        if (!this.dropInitialized) {
            this.dropInitialized = true;
            var container = this.container;
            //self = this;
            this.container.interactive = true;
            container.on("mouseup" /* mouseup */, this.onDrop, this);
            container.on("touchend" /* touchend */, this.onDrop, this);
        }
    };
    UIBase.prototype.onDrop = function (e) {
        var item = DragDropController.getEventItem(e, this.dropGroup);
        if (item && item.dragging) {
            item.dragging = false;
            item.container.interactive = true;
            var parent_1 = this.droppableReparent !== undefined ? this.droppableReparent : this;
            if (parent_1) {
                parent_1.container.toLocal(item.container.position, item.container.parent);
                if (parent_1.container != item.container.parent)
                    parent_1.addChild(item);
            }
        }
    };
    return UIBase;
}(PIXI.utils.EventEmitter));
exports.default = UIBase;


/***/ }),

/***/ "./src/UISettings.ts":
/*!***************************!*\
  !*** ./src/UISettings.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 基础的显示数据类型
 * @since 1.0.0
 */
var UISettings = /** @class */ (function () {
    function UISettings() {
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
    return UISettings;
}());
exports.default = UISettings;


/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 工具类
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** 日志输出 */
function log(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    console.log.apply(console, [message].concat(optionalParams));
}
exports.log = log;
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
function deepCopy(source) {
    if (source === undefined || typeof source !== 'object') {
        return source;
    }
    else if (Array.isArray(source)) {
        return [].concat(source);
    }
    else if (typeof source === 'object') {
        var target = {};
        for (var prop in source) {
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
    return PIXI.utils.uid().toString();
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


/***/ }),

/***/ "./src/c/Button.ts":
/*!*************************!*\
  !*** ./src/c/Button.ts ***!
  \*************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Text_1 = __importDefault(__webpack_require__(/*! ./Text */ "./src/c/Text.ts"));
var InputSkinBase_1 = __importDefault(__webpack_require__(/*! ../InputSkinBase */ "./src/InputSkinBase.ts"));
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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    function Button(option) {
        if (option === void 0) { option = { width: 100, height: 20, tabIndex: 0, tabGroup: 0 }; }
        var _this = _super.call(this, option.width, option.height, option.tabIndex, option.tabGroup.toString()) || this;
        _this._text = new Text_1.default();
        _this.container.buttonMode = true;
        _this._text.verticalAlign = 2 /* middle */;
        _this._text.horizontalAlign = 2 /* center */;
        _this._text.style.fontSize = 18;
        _this._text.style.fill = 0xFFFFFF;
        _this._text.top = 8;
        _this._text.left = 8;
        _this._text.right = 8;
        _this._text.bootom = 8;
        _this.addChild(_this._text);
        return _this;
    }
    Button.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.container.interactiveChildren = false;
    };
    Object.defineProperty(Button.prototype, "label", {
        /**
         * 获取或设置文本内容
         */
        get: function () {
            return this._text.label;
        },
        set: function (value) {
            this._text.label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "labelColor", {
        /** 设置颜色 */
        get: function () {
            return this._text.style.fill.toString();
        },
        set: function (value) {
            this._text.style.fill = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "labelSize", {
        /** 设置文字大小 */
        get: function () {
            return this._text.style.fontSize;
        },
        set: function (value) {
            this._text.style.fontSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "labelHorizontalAlign", {
        /** 设置文字居中方式 */
        get: function () {
            return this._text.horizontalAlign || 2 /* center */;
        },
        set: function (value) {
            this._text.horizontalAlign = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "labelStyle", {
        /** 设置文字复杂样式 */
        get: function () {
            return this._text.style;
        },
        set: function (value) {
            this._text.style = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    return Button;
}(InputSkinBase_1.default));
exports.default = Button;


/***/ }),

/***/ "./src/c/CheckBox.ts":
/*!***************************!*\
  !*** ./src/c/CheckBox.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite_1 = __importDefault(__webpack_require__(/*! ./Sprite */ "./src/c/Sprite.ts"));
var InputController = __importStar(__webpack_require__(/*! ../Interaction/InputController */ "./src/Interaction/InputController.ts"));
var InputSkinBase_1 = __importDefault(__webpack_require__(/*! ../InputSkinBase */ "./src/InputSkinBase.ts"));
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
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    /**
     * 按钮构造函数
     *
     * @param option width:100,height:20,tabIndex:0,tabGroup:0,
     */
    function CheckBox(option) {
        if (option === void 0) { option = { width: 20, height: 20, tabIndex: 0, tabGroup: 0 }; }
        var _this = _super.call(this, option.width, option.height, option.tabIndex, option.tabGroup.toString()) || this;
        _this._checked = false;
        _this.container.buttonMode = true;
        _this._checkmark = new Sprite_1.default();
        _this._checkmark.verticalAlign = 2 /* middle */;
        _this._checkmark.horizontalAlign = 2 /* center */;
        _this._checkmark.alpha = 0;
        _this.addChild(_this._checkmark);
        return _this;
    }
    Object.defineProperty(CheckBox.prototype, "sourceMark", {
        /** 勾选图 */
        get: function () {
            return this._sourceMark;
        },
        set: function (value) {
            this._sourceMark = value;
            this.update();
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
    Object.defineProperty(CheckBox.prototype, "selectedValue", {
        /**
         * 获取或设置当前选中的值
         */
        get: function () {
            if (this.checkGroup) {
                return InputController.getCheckGroupSelectedValue(this.checkGroup);
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
            return this._checkGroup;
        },
        set: function (value) {
            if (value === undefined) {
                InputController.unRegistrerCheckGroup(this);
            }
            if (this._checkGroup == value) {
                return;
            }
            this._checkGroup = value; //需要在registrerCheckGroup之前
            InputController.registrerCheckGroup(this);
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
                    InputController.updateCheckGroupSelected(this);
                this._checked = value;
                this.update();
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
    CheckBox.prototype.update = function () {
        _super.prototype.update.call(this);
        this._checkmark.alpha = this.checked ? 1 : 0;
        this._checkmark.source = this._sourceMark;
    };
    return CheckBox;
}(InputSkinBase_1.default));
exports.default = CheckBox;


/***/ }),

/***/ "./src/c/Container.ts":
/*!****************************!*\
  !*** ./src/c/Container.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
var Sprite_1 = __importDefault(__webpack_require__(/*! ./Sprite */ "./src/c/Sprite.ts"));
var Rect_1 = __importDefault(__webpack_require__(/*! ./Rect */ "./src/c/Rect.ts"));
/**
 * UI的显示容器
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {Number} 宽度
 * @param height {Number} 高度
 */
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(width, height) {
        return _super.call(this, width, height) || this;
    }
    Container.prototype.update = function () {
        //if (this.container.interactive) {
        // this.container.hitArea.width = this._width;
        // this.container.hitArea.height = this._height;
        //}
    };
    Object.defineProperty(Container.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        /**
         * 设置遮罩
         */
        set: function (value) {
            if (value === this.mask) {
                return;
            }
            if (value === undefined) {
                this.container.mask = null;
            }
            else if (value instanceof Sprite_1.default) {
                this.container.mask = value.img;
            }
            else if (value instanceof Rect_1.default) {
                this.container.mask = value.graphics;
            }
            else {
                this.container.mask = value;
            }
            this._mask = value;
        },
        enumerable: true,
        configurable: true
    });
    return Container;
}(UIBase_1.default));
exports.default = Container;


/***/ }),

/***/ "./src/c/ContainerBase.ts":
/*!********************************!*\
  !*** ./src/c/ContainerBase.ts ***!
  \********************************/
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
        _super.prototype.render.call(this, renderer);
        if (this.isEmitRender) {
            this.emit("render", renderer);
        }
    };
    return ContainerBase;
}(PIXI.Container));
exports.default = ContainerBase;


/***/ }),

/***/ "./src/c/InputText/HtmlInput.ts":
/*!**************************************!*\
  !*** ./src/c/InputText/HtmlInput.ts ***!
  \**************************************/
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
    Object.defineProperty(HtmlInput.prototype, "restrict", {
        /* 输入郑泽斌表达式 */
        get: function () {
            return this._restrictRegex;
        },
        set: function (regex) {
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
    HtmlInput.prototype.setAttribute = function (key, value) {
        this._domInput.setAttribute(key, value);
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
    HtmlInput.prototype.destroy = function () {
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
        if (this._restrictRegex)
            this._applyRestriction();
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

/***/ "./src/c/Rect.ts":
/*!***********************!*\
  !*** ./src/c/Rect.ts ***!
  \***********************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
/**
 * UI 矩形
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super.call(this) || this;
        _this._graphicsDirty = false;
        _this._radius = 0;
        _this._fill = 0xffffff;
        _this._rx = 0;
        _this._ry = 0;
        _this._graphics = new PIXI.Graphics();
        _this.container.addChild(_this._graphics);
        return _this;
    }
    Rect.prototype.drawUpdate = function () {
        if (this._graphicsDirty) {
            this._graphics.clear();
            var graphics = this._graphics;
            graphics.lineStyle(this._lineWidth, this._lineColor);
            graphics.beginFill(this._fill);
            graphics.drawRoundedRect(this.rx, this.ry, this.width, this.height, this.radius);
            graphics.endFill();
            this._graphicsDirty = false;
        }
    };
    /** 绘制矩形方法 */
    Rect.prototype.drawRoundedRect = function (x, y, width, height, radius, color) {
        this._radius = radius;
        this._rx = x;
        this._ry = y;
        this.setDefaultSize(width, height);
        if (color) {
            this._fill = color;
        }
        this._graphicsDirty = true;
        this.updatesettings(true);
    };
    Object.defineProperty(Rect.prototype, "graphics", {
        /** 获得绘制矢量源 */
        get: function () {
            return this._graphics;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "radius", {
        /**
         * 圆角
         */
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
            this._graphicsDirty = true;
            this.dalayDraw = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "fill", {
        /**
         * 要填充的颜色
         * @default 0xFFFFFF
         * */
        get: function () {
            return this._fill;
        },
        set: function (value) {
            this._fill = value;
            this._graphicsDirty = true;
            this.dalayDraw = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "lineWidth", {
        /**
         * 线条宽度
         */
        get: function () {
            return this._lineWidth;
        },
        set: function (value) {
            this._lineWidth = value;
            this._graphicsDirty = true;
            this.dalayDraw = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "lineColor", {
        /**
         * 线条颜色
         */
        get: function () {
            return this._lineColor;
        },
        set: function (value) {
            this._lineColor = value;
            this._graphicsDirty = true;
            this.dalayDraw = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "rx", {
        /**
         * 绘制的起始坐标
         */
        get: function () {
            return this._rx;
        },
        set: function (value) {
            this._rx = value;
            this._graphicsDirty = true;
            this.dalayDraw = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "ry", {
        /**
         * 绘制的起始坐标
         */
        get: function () {
            return this._ry;
        },
        set: function (value) {
            this._ry = value;
            this._graphicsDirty = true;
            this.dalayDraw = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "tint", {
        get: function () {
            return this.setting.tint || NaN;
        },
        /**
         * 显示对象填充色 0xFFFFFF
         */
        set: function (value) {
            this._graphics.tint = value;
            this.setting.tint = value;
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.update = function () {
        this.drawUpdate();
    };
    return Rect;
}(UIBase_1.default));
exports.default = Rect;


/***/ }),

/***/ "./src/c/ScrollBar.ts":
/*!****************************!*\
  !*** ./src/c/ScrollBar.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Slider_1 = __importDefault(__webpack_require__(/*! ./Slider */ "./src/c/Slider.ts"));
var ScrollingContainer_1 = __importDefault(__webpack_require__(/*! ./ScrollingContainer */ "./src/c/ScrollingContainer.ts"));
var tween = __importStar(__webpack_require__(/*! ./Tween/index */ "./src/c/Tween/index.ts"));
/**
 * UI 带有滚动条的容器
 */
var ScrollBar = /** @class */ (function (_super) {
    __extends(ScrollBar, _super);
    function ScrollBar(trackBorderWidth, thumbBorderWidth, tracklightBorderWidth) {
        if (trackBorderWidth === void 0) { trackBorderWidth = 0; }
        if (thumbBorderWidth === void 0) { thumbBorderWidth = 0; }
        if (tracklightBorderWidth === void 0) { tracklightBorderWidth = 0; }
        var _this = _super.call(this, trackBorderWidth, thumbBorderWidth, tracklightBorderWidth) || this;
        /**
         * 是的自动隐藏滚动条
         */
        _this.autohide = false;
        _this._hidden = false;
        return _this;
    }
    ScrollBar.prototype.toggleHidden = function (hidden) {
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
    };
    ScrollBar.prototype.onThumbLoadComplete = function (rectangle, source) {
        _super.prototype.onThumbLoadComplete.call(this, rectangle, source);
        this.alignToContainer();
    };
    ScrollBar.prototype.triggerValueChanging = function () {
        _super.prototype.triggerValueChanging.call(this);
        if (this.scrollingContainer) {
            var sizeAmt = this.scrollingContainer._height / this.scrollingContainer.innerContainer.height || 0.001;
            if (sizeAmt < 1)
                this.scrollingContainer.forcePctPosition(this.vertical ? "y" : "x", this._amt);
        }
    };
    Object.defineProperty(ScrollBar.prototype, "scrollingContainer", {
        get: function () {
            return this._scrollingContainer;
        },
        set: function (value) {
            if (this._scrollingContainer) {
                this._scrollingContainer.off(ScrollingContainer_1.default.ChangeEvent, this.alignToContainer, this);
                this._scrollingContainer.off(ScrollingContainer_1.default.ReSizeEvent, this.alignToContainer, this);
            }
            if (value == undefined) {
                this._scrollingContainer = undefined;
                return;
            }
            this._scrollingContainer = value;
            this._scrollingContainer.on(ScrollingContainer_1.default.ChangeEvent, this.alignToContainer, this);
            this._scrollingContainer.on(ScrollingContainer_1.default.ReSizeEvent, this.alignToContainer, this);
        },
        enumerable: true,
        configurable: true
    });
    ScrollBar.prototype.alignToContainer = function () {
        if (this.scrollingContainer) {
            var newPos = void 0;
            var size = void 0;
            var xORy = this.vertical ? "y" : "x";
            var widthORheight = this.vertical ? "height" : "width";
            var topORleft = this.vertical ? "top" : "left";
            var scrollingContainer = this.scrollingContainer;
            var innerContainer = this.scrollingContainer.innerContainer;
            var _posAmt = !innerContainer[widthORheight] ? 0 : -(innerContainer[xORy] / innerContainer[widthORheight]);
            var sizeAmt = !innerContainer[widthORheight] ? 1 : scrollingContainer["_" + widthORheight] / innerContainer[widthORheight];
            //update amt
            var diff = innerContainer[widthORheight] - scrollingContainer["_" + widthORheight];
            this._amt = !scrollingContainer["_" + widthORheight] || !diff ? 0 : -(innerContainer[xORy] / diff);
            var self_1 = this;
            var _thumb = this._thumb;
            if (sizeAmt >= 1) {
                size = self_1["_" + widthORheight];
                _thumb[topORleft] = size * 0.5;
                this.toggleHidden(true);
            }
            else {
                size = self_1["_" + widthORheight] * sizeAmt;
                if (this._amt > 1) {
                    size -= (self_1["_" + widthORheight] - size) * (this._amt - 1);
                }
                else if (this._amt < 0) {
                    size -= (self_1["_" + widthORheight] - size) * -this._amt;
                }
                if (this._amt < 0) {
                    newPos = size * 0.5;
                }
                else if (this._amt > 1) {
                    newPos = self_1["_" + widthORheight] - size * 0.5;
                }
                else {
                    newPos = (_posAmt * self_1["_" + widthORheight]) + (size * 0.5);
                }
                _thumb[topORleft] = newPos;
                this.toggleHidden(false);
            }
            _thumb[widthORheight] = size;
        }
    };
    return ScrollBar;
}(Slider_1.default));
exports.default = ScrollBar;


/***/ }),

/***/ "./src/c/ScrollingContainer.ts":
/*!*************************************!*\
  !*** ./src/c/ScrollingContainer.ts ***!
  \*************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./src/c/Container.ts"));
var Ticker = __importStar(__webpack_require__(/*! ../Ticker */ "./src/Ticker.ts"));
var Utils = __importStar(__webpack_require__(/*! ../Utils */ "./src/Utils.ts"));
var DragEvent_1 = __importDefault(__webpack_require__(/*! ../Interaction/DragEvent */ "./src/Interaction/DragEvent.ts"));
var MouseScrollEvent_1 = __importDefault(__webpack_require__(/*! ../Interaction/MouseScrollEvent */ "./src/Interaction/MouseScrollEvent.ts"));
var Utils_1 = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");
var Rect_1 = __importDefault(__webpack_require__(/*! ./Rect */ "./src/c/Rect.ts"));
/**
 * 可滚动的容器
 */
var ScrollingContainer = /** @class */ (function (_super) {
    __extends(ScrollingContainer, _super);
    function ScrollingContainer() {
        var _this = _super.call(this) || this;
        /**
         * 遮罩
         */
        _this._maskRect = new Rect_1.default();
        /**
         * 内容容器
         * @private
         */
        _this.innerContainer = new PIXI.Container();
        /**
         * 内容的宽高
         */
        _this.innerBounds = new PIXI.Rectangle();
        /**
         * 是否启动拖拽滚动
         * @default true
         */
        _this.dragScrolling = true;
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
         * 是否滚动中
         */
        _this.scrolling = false;
        /**
         * 临时方案，设置时间间隔，跳转容器宽高
         */
        _this._boundCached = Utils_1.now() - 1000;
        _this._lastWidth = 0;
        _this._lastHeight = 0;
        _this._scrollX = false;
        _this._scrollY = false;
        _this._isInitScrolling = false;
        _this._containerStart = new PIXI.Point();
        _this._targetPosition = new PIXI.Point();
        _this._lastPosition = new PIXI.Point();
        _this._Position = new PIXI.Point();
        _this._Speed = new PIXI.Point();
        _this._stop = false;
        _this._maskRect.y = 0;
        _this.addChild(_this._maskRect);
        _this.container.addChild(_this.innerContainer);
        _this.container.name = "ScrollingContainer.container";
        _this.innerContainer.name = "ScrollingContainer.innerContainer";
        _this.mask = _this._maskRect.graphics;
        return _this;
    }
    Object.defineProperty(ScrollingContainer.prototype, "scrollX", {
        /**
         * 是否启用水平滚动
         * @default false
         */
        get: function () {
            return this._scrollX;
        },
        set: function (value) {
            this._scrollX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollingContainer.prototype, "scrollY", {
        /**
         * 是否启用垂直滚动
         * @default false
         */
        get: function () {
            return this._scrollY;
        },
        set: function (value) {
            this._scrollY = value;
        },
        enumerable: true,
        configurable: true
    });
    ScrollingContainer.prototype.update = function () {
        if (this._lastWidth != this._width || this._lastHeight != this._height) {
            var _of = this.expandMask;
            this._maskRect.drawRoundedRect(_of, -_of, this._width + _of, this._height + _of, this.radius, 0xFFFFFF);
            this._lastWidth = this._width;
            this._lastHeight = this._height;
        }
        this.setScrollPosition();
    };
    ScrollingContainer.prototype.setScrollPosition = function (speed) {
        if (speed) {
            this._Speed = speed;
        }
        if (!this.animating) {
            this.animating = true;
            this._lastPosition.copyFrom(this.innerContainer.position);
            this._targetPosition.copyFrom(this.innerContainer.position);
            this.updateScrollPosition(0);
        }
    };
    ScrollingContainer.prototype.addChild = function (uiObject) {
        _super.prototype.addChild.call(this, uiObject);
        if (uiObject != this._maskRect) {
            this.innerContainer.addChild(uiObject.container);
        }
        this.getInnerBounds(true); //make sure bounds is updated instantly when a child is added
        return uiObject;
    };
    ScrollingContainer.prototype.getInnerBounds = function (force) {
        //this is a temporary fix, because we cant rely on innercontainer height if the children is positioned > 0 y.
        if (force || Utils_1.now() - this._boundCached > 1000) {
            this.innerContainer.getLocalBounds(this.innerBounds);
            this.innerBounds.height = this.innerBounds.y + this.innerContainer.height;
            this.innerBounds.width = this.innerBounds.x + this.innerContainer.width;
            this._boundCached = Utils_1.now();
        }
        return this.innerBounds;
    };
    ScrollingContainer.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.initScrolling();
    };
    ScrollingContainer.prototype.initScrolling = function () {
        var _this = this;
        this._isInitScrolling = true;
        if (this.dragEvent) {
            this.dragEvent.remove();
            this.dragEvent = undefined;
        }
        //Drag scroll
        if (this.dragScrolling) {
            this.dragEvent = new DragEvent_1.default(this);
            this.dragEvent.onDragStart = function () {
                if (!_this.scrolling) {
                    _this._containerStart.copyFrom(_this.innerContainer.position);
                    _this._Position.copyFrom(_this.innerContainer.position);
                    _this.scrolling = true;
                    _this.setScrollPosition();
                    Ticker.shared.addUpdateEvent(_this.updateScrollPosition, _this);
                }
            };
            this.dragEvent.onDragMove = function (e, offset) {
                if (_this.scrollX)
                    _this._targetPosition.x = _this._containerStart.x + offset.x;
                if (_this.scrollY)
                    _this._targetPosition.y = _this._containerStart.y + offset.y;
            };
            this.dragEvent.onDragEnd = function () {
                if (_this.scrolling) {
                    _this.scrolling = false;
                    Ticker.shared.removeUpdateEvent(_this.updateScrollPosition, _this);
                }
            };
        }
        //Mouse scroll
        if (this.mouseScrollEvent) {
            this.mouseScrollEvent.remove();
            this.mouseScrollEvent = undefined;
        }
        var scrollSpeed = new PIXI.Point();
        this.mouseScrollEvent = new MouseScrollEvent_1.default(this, true);
        this.mouseScrollEvent.onMouseScroll = function (e, delta) {
            scrollSpeed.set(-delta.x * 0.2, -delta.y * 0.2);
            _this.setScrollPosition(scrollSpeed);
        };
        this.updateScrollBars();
    };
    ScrollingContainer.prototype.updateScrollBars = function () {
        this.emit(ScrollingContainer.ChangeEvent, this);
    };
    /**
     * 百分比设置位置
     * @param direction 方向
     * @param pct 百分比0-1
     */
    ScrollingContainer.prototype.forcePctPosition = function (direction, pct) {
        var bounds = this.getInnerBounds();
        if (this.scrollX && direction == "x") {
            this.innerContainer.position[direction] = -((bounds.width - this._width) * pct);
        }
        if (this.scrollY && direction == "y") {
            this.innerContainer[direction] = -((bounds.height - this._height) * pct);
        }
        this._Position[direction] = this._targetPosition[direction] = this.innerContainer.position[direction];
    };
    /** 根据焦点设置位置 */
    ScrollingContainer.prototype.focusPosition = function (pos) {
        var bounds = this.getInnerBounds();
        var dif;
        if (this.scrollX) {
            var x = Math.max(0, (Math.min(bounds.width, pos.x)));
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
            var y = Math.max(0, (Math.min(bounds.height, pos.y)));
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
        if (!this.scrolling && Math.round(this._Speed[direction]) === 0 && (this.innerContainer[direction] > 0 || this.innerContainer[direction] < min)) {
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
        this.innerContainer.position[direction] = Math.round(this._Position[direction]);
        this.updateScrollBars();
    };
    /**
     * 滑动条值发生改变后
     */
    ScrollingContainer.ChangeEvent = "change";
    /**
     * 滑动条值发生改变后
     */
    ScrollingContainer.ReSizeEvent = "resize";
    return ScrollingContainer;
}(Container_1.default));
exports.default = ScrollingContainer;


/***/ }),

/***/ "./src/c/SliceSprite.ts":
/*!******************************!*\
  !*** ./src/c/SliceSprite.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
/**
 * 动态宽高的图片,9切
 * Event: sourceComplete
 */
var SliceSprite = /** @class */ (function (_super) {
    __extends(SliceSprite, _super);
    /**
     * 构造函数，如果不设置horizontalSlice，verticalSlice。 按设置的BorderWidth进行9切
     *
     * @see https://docs.cocos.com/creator/manual/zh/ui/sliced-sprite.html
     */
    function SliceSprite() {
        var _this = _super.call(this) || this;
        _this.ftl = new PIXI.Rectangle;
        _this.ftr = new PIXI.Rectangle;
        _this.fbl = new PIXI.Rectangle;
        _this.fbr = new PIXI.Rectangle;
        _this.ft = new PIXI.Rectangle;
        _this.fb = new PIXI.Rectangle;
        _this.fl = new PIXI.Rectangle;
        _this.fr = new PIXI.Rectangle;
        _this.ff = new PIXI.Rectangle;
        _this.stl = new PIXI.Sprite();
        _this.str = new PIXI.Sprite();
        _this.sbl = new PIXI.Sprite();
        _this.sbr = new PIXI.Sprite();
        /** 边框 */
        _this.bw = 0;
        _this.vs = true;
        _this.hs = true;
        _this._tile = false;
        return _this;
    }
    Object.defineProperty(SliceSprite.prototype, "source", {
        /**
         * 获取或设置显示源
         * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
         *
         * 设置null可以传入PIXI.Texture.EMPTY
         */
        get: function () {
            return this._source;
        },
        set: function (value) {
            var _this = this;
            if (value === undefined) {
                return;
            }
            if (value === this._source) {
                return;
            }
            this._source = value;
            if (value instanceof PIXI.Texture) {
                this.t = value.baseTexture;
                this.f = value.frame;
                this.emit(SliceSprite.SourceCompleteEvent, this.f, this);
            }
            else {
                if (this._texture) {
                    this._texture.removeAllListeners();
                }
                this._texture = PIXI.Texture.from(value);
                if (this._texture.width > 1 && this._texture.height > 1) {
                    if (this._texture) {
                        this.t = this._texture.baseTexture;
                        this.f = this._texture.frame;
                        this.updatesettings(true);
                        this.emit(SliceSprite.SourceCompleteEvent, this.f, this);
                    }
                }
                else {
                    this._texture.once("update", function () {
                        if (_this._texture) {
                            _this.t = _this._texture.baseTexture;
                            _this.f = _this._texture.frame;
                            _this.updatesettings(true);
                            _this.emit(SliceSprite.SourceCompleteEvent, _this.f, _this);
                        }
                    }, this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceSprite.prototype, "borderWidth", {
        get: function () {
            return this.bw;
        },
        /**
         * 边角宽度，要9切的范围
        */
        set: function (value) {
            this.bw = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceSprite.prototype, "horizontalSlice", {
        get: function () {
            return this.hs;
        },
        /**
         * 是否水平切
        */
        set: function (value) {
            this.hs = value;
            this.setting.minWidth = this.bw * 2;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceSprite.prototype, "verticalSlice", {
        get: function () {
            return this.vs;
        },
        /**
          * 是否垂直切
         */
        set: function (value) {
            this.vs = value;
            this.setting.minHeight = this.bw * 2;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliceSprite.prototype, "tile", {
        get: function () {
            return this._tile;
        },
        /**
          * 图片展示方式，平铺或拉伸
          * @default false 拉伸
         */
        set: function (value) {
            this._tile = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    ;
    ;
    SliceSprite.prototype.updateLayer = function () {
        var f = this.f;
        var bw = this.bw;
        var t = this.t;
        if (t === undefined) {
            Utils_1.log("SliceSprite.init.t = undefined ");
            return;
        }
        if (f === undefined) {
            Utils_1.log("SliceSprite.init.f = undefined ");
            return;
        }
        //get frames
        if (this.vs && this.hs) {
            Utils_1.setRectangle(this.ftl, f.x, f.y, bw, bw);
            Utils_1.setRectangle(this.ftr, f.x + f.width - bw, f.y, bw, bw);
            Utils_1.setRectangle(this.fbl, f.x, f.y + f.height - bw, bw, bw);
            Utils_1.setRectangle(this.fbr, f.x + f.width - bw, f.y + f.height - bw, bw, bw);
            Utils_1.setRectangle(this.ft, f.x + bw, f.y, f.width - bw * 2, bw);
            Utils_1.setRectangle(this.fb, f.x + bw, f.y + f.height - bw, f.width - bw * 2, bw);
            Utils_1.setRectangle(this.fl, f.x, f.y + bw, bw, f.height - bw * 2);
            Utils_1.setRectangle(this.fr, f.x + f.width - bw, f.y + bw, bw, f.height - bw * 2);
            Utils_1.setRectangle(this.ff, f.x + bw, f.y + bw, f.width - bw * 2, f.height - bw * 2);
        }
        else if (this.hs) {
            Utils_1.setRectangle(this.fl, f.x, f.y, bw, f.height);
            Utils_1.setRectangle(this.fr, f.x + f.width - bw, f.y, bw, f.height);
            Utils_1.setRectangle(this.ff, f.x + bw, f.y, f.width - bw * 2, f.height);
        }
        else { //vs
            Utils_1.setRectangle(this.ft, f.x, f.y, f.width, bw);
            Utils_1.setRectangle(this.fb, f.x, f.y + f.height - bw, f.width, bw);
            Utils_1.setRectangle(this.ff, f.x, f.y + bw, f.width, f.height - bw * 2);
        }
        //TODO: swap frames if rotation
        //make sprites
        //跳过编译器
        this.container.removeChildren();
        var stl = this.stl;
        var str = this.str;
        var sbl = this.sbl;
        var sbr = this.sbr;
        var sl = this.sl;
        var sr = this.sr;
        var st = this.st;
        var sb = this.sb;
        var sf = this.sf;
        //make sprites
        sf = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.ff)) : new PIXI.Sprite(new PIXI.Texture(t, this.ff));
        this.container.addChildAt(sf, 0);
        if (this.vs && this.hs) {
            this.stl.texture = new PIXI.Texture(t, this.ftl);
            this.str.texture = new PIXI.Texture(t, this.ftr);
            this.sbl.texture = new PIXI.Texture(t, this.fbl);
            this.sbr.texture = new PIXI.Texture(t, this.fbr);
            this.container.addChildAt(this.stl, 0);
            this.container.addChildAt(this.str, 0);
            this.container.addChildAt(this.sbl, 0);
            this.container.addChildAt(this.sbr, 0);
        }
        if (this.hs) {
            sl = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fl)) : new PIXI.Sprite(new PIXI.Texture(t, this.fl));
            sr = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fr)) : new PIXI.Sprite(new PIXI.Texture(t, this.fr));
            this.container.addChildAt(sl, 0);
            this.container.addChildAt(sr, 0);
        }
        if (this.vs) {
            st = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.ft)) : new PIXI.Sprite(new PIXI.Texture(t, this.ft));
            sb = this._tile ? new PIXI.TilingSprite(new PIXI.Texture(t, this.fb)) : new PIXI.Sprite(new PIXI.Texture(t, this.fb));
            this.container.addChildAt(st, 0);
            this.container.addChildAt(sb, 0);
        }
        if (sl && sr)
            //set constant position and sizes
            if (this.vs && this.hs)
                st.x = sb.x = sl.y = sr.y = stl.width = str.width = sbl.width = sbr.width = stl.height = str.height = sbl.height = sbr.height = bw;
        if (this.hs)
            sf.x = sl.width = sr.width = bw;
        if (this.vs)
            sf.y = st.height = sb.height = bw;
        this.stl = stl;
        this.str = str;
        this.sbl = sbl;
        this.sbr = sbr;
        this.sl = sl;
        this.sr = sr;
        this.st = st;
        this.sb = sb;
        this.sf = sf;
    };
    SliceSprite.prototype.update = function () {
        if (this.t === undefined || this.t.width === 0 || this.t.height === 0) {
            return;
        }
        this.updateLayer();
        var bw = this.bw;
        if (this.vs && this.hs) {
            if (this.str && this.sbr && this.sr && this.sbl && this.sf && this.st && this.sb && this.sl) {
                this.str.x = this.sbr.x = this.sr.x = this._width - bw;
                this.sbl.y = this.sbr.y = this.sb.y = this._height - bw;
                this.sf.width = this.st.width = this.sb.width = this._width - bw * 2;
                this.sf.height = this.sl.height = this.sr.height = this._height - bw * 2;
            }
        }
        else if (this.hs) {
            if (this.sr && this.sl && this.sf) {
                this.sr.x = this._width - bw;
                this.sl.height = this.sr.height = this.sf.height = this._height;
                this.sf.width = this._width - bw * 2;
            }
        }
        else { //vs
            if (this.sb && this.st && this.sf) {
                this.sb.y = this._height - bw;
                this.st.width = this.sb.width = this.sf.width = this._width;
                this.sf.height = this._height - bw * 2;
            }
        }
        if (!isNaN(this.tint)) {
            if (this.sf)
                this.sf.tint = this.tint;
            if (this.vs && this.stl && this.str && this.sbl && this.sbr)
                this.stl.tint = this.str.tint = this.sbl.tint = this.sbr.tint = this.tint;
            if (this.hs && this.sl && this.sr)
                this.sl.tint = this.sr.tint = this.tint;
            if (this.vs && this.st && this.sb)
                this.st.tint = this.sb.tint = this.tint;
        }
        if (!isNaN(this.blendMode)) {
            if (this.sf)
                this.sf.blendMode = this.blendMode;
            if (this.vs && this.hs && this.stl && this.str && this.sbl && this.sbr)
                this.stl.blendMode = this.str.blendMode = this.sbl.blendMode = this.sbr.blendMode = this.blendMode;
            if (this.hs && this.sl && this.sr)
                this.sl.blendMode = this.sr.blendMode = this.blendMode;
            if (this.vs && this.st && this.sb)
                this.st.blendMode = this.sb.blendMode = this.blendMode;
        }
    };
    /** 图片加载完成事件 */
    SliceSprite.SourceCompleteEvent = "sourceCompleteEvent";
    return SliceSprite;
}(UIBase_1.default));
exports.default = SliceSprite;


/***/ }),

/***/ "./src/c/Slider.ts":
/*!*************************!*\
  !*** ./src/c/Slider.ts ***!
  \*************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
var Utils = __importStar(__webpack_require__(/*! ../Utils */ "./src/Utils.ts"));
var SliceSprite_1 = __importDefault(__webpack_require__(/*! ./SliceSprite */ "./src/c/SliceSprite.ts"));
var tween = __importStar(__webpack_require__(/*! ./Tween/index */ "./src/c/Tween/index.ts"));
var DragEvent_1 = __importDefault(__webpack_require__(/*! ../Interaction/DragEvent */ "./src/Interaction/DragEvent.ts"));
/**
 * UI 滑动条
 */
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(trackBorderWidth, thumbBorderWidth, tracklightBorderWidth) {
        if (trackBorderWidth === void 0) { trackBorderWidth = 0; }
        if (thumbBorderWidth === void 0) { thumbBorderWidth = 0; }
        if (tracklightBorderWidth === void 0) { tracklightBorderWidth = 0; }
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
        /**
         * 滑块方向
         */
        _this._vertical = false;
        _this._sourceTrack = "";
        _this._sourceTracklight = "";
        _this._sourceThumb = "";
        _this._thumbDrag = new DragEvent_1.default(_this);
        _this._trackDrag = new DragEvent_1.default(_this);
        _this._startValue = 0;
        _this._maxPosition = 0;
        _this._localMousePosition = new PIXI.Point();
        _this._lastChange = 0;
        _this._lastChanging = 0;
        _this._minValue = 0;
        _this._maxValue = 100;
        /** 是否可以绘制布局，设置本值并不会触发绘制，只是标记*/
        _this._isUpdateLayout = true;
        _this._track = new SliceSprite_1.default();
        _this._track.borderWidth = trackBorderWidth;
        _this._thumb = new SliceSprite_1.default();
        _this._thumb.borderWidth = thumbBorderWidth;
        if (_this._thumb) {
            _this._thumb.pivot = 0.5;
            _this._thumb.container.buttonMode = true;
        }
        _this._tracklight = new SliceSprite_1.default();
        _this._tracklight.borderWidth = tracklightBorderWidth;
        _this.addChild(_this._track);
        _this.addChild(_this._tracklight);
        _this.addChild(_this._thumb);
        _this._thumbDrag.onDragPress = _this.onPress;
        _this._thumbDrag.onDragStart = _this.onDragStart;
        _this._thumbDrag.onDragMove = _this.onDragMove;
        _this._thumbDrag.onDragEnd = _this.onDragEnd;
        _this._trackDrag.onDragPress = _this.onPress;
        _this._trackDrag.onDragStart = _this.onDragStart;
        _this._trackDrag.onDragMove = _this.onDragMove;
        _this._trackDrag.onDragEnd = _this.onDragEnd;
        return _this;
    }
    Object.defineProperty(Slider.prototype, "sourceTrack", {
        /**
         * 背景
         */
        get: function () {
            return this._sourceTrack;
        },
        set: function (value) {
            this._sourceTrack = value;
            this._track.source = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "sourceTracklight", {
        /**
         * 进度填充
         */
        get: function () {
            return this._sourceTracklight;
        },
        set: function (value) {
            this._sourceTracklight = value;
            this._tracklight.source = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "sourceThumb", {
        /**
         * 拖拽手柄
         */
        get: function () {
            return this._sourceThumb;
        },
        set: function (value) {
            this._sourceThumb = value;
            this._thumb.off(SliceSprite_1.default.SourceCompleteEvent, this.onThumbLoadComplete, this);
            this._thumb.once(SliceSprite_1.default.SourceCompleteEvent, this.onThumbLoadComplete, this);
            this._thumb.source = value;
            this._thumb.visible = false;
        },
        enumerable: true,
        configurable: true
    });
    //rectangle:PIXI.Rectangle,source?:SliceSprite
    Slider.prototype.onThumbLoadComplete = function (rectangle, source) {
        source.visible = true;
        source.width = rectangle.width;
        source.height = rectangle.height;
        this.update();
    };
    Object.defineProperty(Slider.prototype, "vertical", {
        /**
         * 是否垂直
         * @default false
         */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this._isUpdateLayout = true;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "minValue", {
        /**
         * 最小值
         * @default 0
         */
        get: function () {
            return this._minValue;
        },
        set: function (value) {
            this._minValue = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "maxValue", {
        /**
         * 最大值
         * @default 100
         */
        get: function () {
            return this._maxValue;
        },
        set: function (value) {
            this._maxValue = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "value", {
        /**
         * 当前值
         */
        get: function () {
            return Utils.Round(Utils.Lerp(this._minValue, this._maxValue, this._amt), this._decimals);
        },
        set: function (value) {
            this._amt = (Math.max(this._minValue, Math.min(this._maxValue, value)) - this._minValue) / (this._maxValue - this._minValue);
            this.update();
            this.triggerValueChange();
            this.triggerValueChanging();
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype.updateLayout = function () {
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
    };
    Slider.prototype.update = function (soft) {
        this.updateLayout();
        var handleSize;
        var val;
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
        if (this._thumb && this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this._startValue = this._amt;
            this._maxPosition = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
        }
    };
    Slider.prototype.onDragMove = function (event, offset) {
        if (this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this._amt = !this._maxPosition ? 0 : Math.max(0, Math.min(1, this._startValue + ((this.vertical ? offset.y : offset.x) / this._maxPosition)));
            this.triggerValueChanging();
            this.update();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.updatePositionToMouse(event.data.global, false);
        }
    };
    Slider.prototype.onDragEnd = function (event) {
        if (this._thumbDrag && this._thumbDrag.id == event.data.identifier) {
            this.triggerValueChange();
            this.update();
        }
        else if (this._trackDrag && this._trackDrag.id == event.data.identifier) {
            this.triggerValueChange();
        }
    };
    Slider.prototype.updatePositionToMouse = function (mousePosition, soft) {
        if (this._track) {
            this._track.container.toLocal(mousePosition, undefined, this._localMousePosition, true);
        }
        if (this._thumb) {
            var newPos = this.vertical ? this._localMousePosition.y - this._thumb._height * 0.5 : this._localMousePosition.x - this._thumb._width * 0.5;
            var maxPos = this.vertical ? this._height - this._thumb._height : this._width - this._thumb._width;
            this._amt = !maxPos ? 0 : Math.max(0, Math.min(1, newPos / maxPos));
            this.update(soft);
            this.triggerValueChanging();
        }
    };
    Slider.prototype.triggerValueChange = function () {
        this.emit("change", this.value, this._lastChange);
        if (this._lastChange != this.value) {
            this._lastChange = this.value;
        }
    };
    Slider.prototype.triggerValueChanging = function () {
        this.emit("changing", this.value, this._lastChanging);
        if (this._lastChanging != this.value) {
            this._lastChanging = this.value;
        }
    };
    /**
     * 滑动条值发生改变后
     */
    Slider.ChangeEvent = "change";
    /**
     * 滑动条值发生改变时
     */
    Slider.ChangingEvent = "changing";
    return Slider;
}(UIBase_1.default));
exports.default = Slider;


/***/ }),

/***/ "./src/c/SortableList.ts":
/*!*******************************!*\
  !*** ./src/c/SortableList.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./src/c/Container.ts"));
var tween = __importStar(__webpack_require__(/*! ./Tween/index */ "./src/c/Tween/index.ts"));
/**
 * UI 可以排序的容器
 */
var SortableList = /** @class */ (function (_super) {
    __extends(SortableList, _super);
    function SortableList() {
        var _this = _super.call(this) || this;
        /**
         * 是否按降序排序
         * @private false
         */
        _this.desc = false;
        /**
         * 是否开启排序动画，默认不开启
         * @default 0
         */
        _this.tweenTime = 0;
        _this.tweenEase = tween.Easing.Sinusoidal.In;
        _this.items = [];
        _this._sortTimeout = -1;
        return _this;
    }
    /**
     * 添加显示列表，通过参数函数进行排序
     * @param UIObject UI显示对象
     * @param fnValue 前置条件
     * @param fnThenBy 后置条件
     */
    SortableList.prototype.addChild = function (UIObject, fnValue, fnThenBy) {
        _super.prototype.addChild.call(this, UIObject);
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
    };
    SortableList.prototype.removeChild = function (UIObject) {
        _super.prototype.removeChild.call(this, UIObject);
        var index = this.items.indexOf(UIObject);
        if (index != -1) {
            this.items.splice(index, 1);
        }
        this.sort();
    };
    SortableList.prototype.sort = function (instant) {
        var _this = this;
        clearTimeout(this._sortTimeout);
        if (instant) {
            this._sort();
            return;
        }
        this._sortTimeout = window.setTimeout(function () { _this._sort(); }, 0);
    };
    SortableList.prototype._sort = function () {
        var self = this;
        var desc = this.desc;
        var y = 0;
        var alt = true;
        this.items.sort(function (a, b) {
            var aFnValue = a.attach._sortListValue;
            var bFnValue = b.attach._sortListValue;
            var aFnThenBy = a.attach._sortListThenByValue;
            var bFnThenBy = a.attach._sortListThenByValue;
            var res = aFnValue() < bFnValue() ? desc ? 1 : -1 : aFnValue() > bFnValue() ? desc ? -1 : 1 : 0;
            if (res === 0 && aFnThenBy && bFnThenBy) {
                res = aFnThenBy() < bFnThenBy() ? desc ? 1 : -1 : aFnThenBy() > bFnThenBy() ? desc ? -1 : 1 : 0;
            }
            if (res === 0) {
                res = a.attach._sortListRnd > b.attach._sortListRnd ? 1 :
                    a.attach._sortListRnd < b.attach._sortListRnd ? -1 : 0;
            }
            return res;
        });
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            alt = !alt;
            if (this.tweenTime > 0) {
                tween.Tween.fromTo(item, { x: 0, y: y }, this.tweenTime).easing(this.tweenEase).start();
            }
            else {
                item.x = 0;
                item.y = y;
            }
            y += item.height;
            var itemTany = item; //设置单独项目的背景或
            if (typeof itemTany.altering === "function")
                itemTany.altering(alt);
        }
        //force it to update parents when sort animation is done (prevent scrolling container bug)
        if (this.tweenTime > 0) {
            setTimeout(function () {
                self.updatesettings(false, true);
            }, this.tweenTime * 1000);
        }
    };
    return SortableList;
}(Container_1.default));
exports.default = SortableList;


/***/ }),

/***/ "./src/c/Sprite.ts":
/*!*************************!*\
  !*** ./src/c/Sprite.ts ***!
  \*************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
/**
 * UI图片显示对象，如果使用拉伸或9切，请使用 SliceSprite
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param Texture {PIXI.Texture} 文本对象
 */
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    function Sprite(t) {
        var _this = _super.call(this) || this;
        _this._anchorX = 0;
        _this._anchorY = 0;
        _this._source = t;
        _this._sprite = new PIXI.Sprite(t);
        _this.container.addChild(_this._sprite);
        return _this;
    }
    Object.defineProperty(Sprite.prototype, "img", {
        /** 获得图像 */
        get: function () {
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "source", {
        /**
         * 获取或设置显示源
         * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
         *
         * 设置null可以传入PIXI.Texture.EMPTY
         */
        get: function () {
            return this._source;
        },
        set: function (value) {
            var _this = this;
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
                    this._sprite.texture.once("update", function () {
                        _this.correctionWidthAndHeight();
                        _this.updatesettings(true);
                        _this.emit(Sprite.SourceCompleteEvent, _this._sprite.texture.frame, _this);
                    }, this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Sprite.prototype.correctionWidthAndHeight = function () {
        if (this.setting.width == 0) {
            this.setting.width = this._sprite.texture.width;
        }
        if (this.setting.height == 0) {
            this.setting.height = this._sprite.texture.height;
        }
    };
    Object.defineProperty(Sprite.prototype, "anchorX", {
        /** 设置X的锚点 */
        get: function () {
            return this._anchorX;
        },
        set: function (value) {
            this._anchorX = value;
            this._sprite.anchor.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "anchorY", {
        /** 设置Y的锚点 */
        get: function () {
            return this._anchorY;
        },
        set: function (value) {
            this._anchorY = value;
            this._sprite.anchor.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Sprite.prototype.update = function () {
        if (!isNaN(this.tint))
            this._sprite.tint = this.tint;
        if (!isNaN(this.blendMode))
            this._sprite.blendMode = this.blendMode;
        this._sprite.width = this._width;
        this._sprite.height = this._height;
    };
    /** 图片加载完成事件 */
    Sprite.SourceCompleteEvent = "sourceCompleteEvent";
    return Sprite;
}(UIBase_1.default));
exports.default = Sprite;


/***/ }),

/***/ "./src/c/Text.ts":
/*!***********************!*\
  !*** ./src/c/Text.ts ***!
  \***********************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
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
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    /**
     * 文本构造函数
     * @param text 要显示的内容，默认为""
     * @param TextStyle {} 文本样式，参考TextStyle
     */
    function Text(text, TextStyle) {
        if (text === void 0) { text = ""; }
        var _this = _super.call(this) || this;
        _this._source = text;
        _this._text = new PIXI.Text(text, TextStyle);
        _this.setDefaultSize(_this._text.width, _this._text.height);
        _this.container.addChild(_this._text);
        return _this;
    }
    Object.defineProperty(Text.prototype, "source", {
        /**
         * 获取或设置文本
         */
        get: function () {
            return this._source;
        },
        set: function (value) {
            if (value === this._source) {
                return;
            }
            this._source = value;
            this._text.text = value;
            this.updatesettings(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "label", {
        /**
         * 获取或设置文本内容
         */
        get: function () {
            return this._source;
        },
        set: function (value) {
            this.source = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "style", {
        get: function () {
            return this._text.style;
        },
        set: function (value) {
            this._text.style = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "textWidth", {
        get: function () {
            return this._text.getBounds().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "textHeight", {
        get: function () {
            return this._text.getBounds().height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "textBounds", {
        get: function () {
            return this._text.getBounds();
        },
        enumerable: true,
        configurable: true
    });
    Text.prototype.baseupdate = function () {
        var bounds = this._text.getBounds();
        this.setting.width = bounds.width;
        this.setting.widthPct = undefined;
        this.setting.height = bounds.height;
        this.setting.heightPct = undefined;
        _super.prototype.baseupdate.call(this);
    };
    Text.prototype.update = function () {
        if (!isNaN(this.tint))
            this._text.tint = this.tint;
        if (!isNaN(this.blendMode))
            this._text.blendMode = this.blendMode;
    };
    return Text;
}(UIBase_1.default));
exports.default = Text;
/** 获得默认行高 */
function defaultLineHeight(style) {
    var _tempText = new PIXI.Text("1", style);
    var lineHeight = _tempText.height;
    var textHeight = _tempText.height;
    _tempText.destroy();
    return { lineHeight: lineHeight, textHeight: textHeight };
}
exports.defaultLineHeight = defaultLineHeight;


/***/ }),

/***/ "./src/c/Text/TextStyle.ts":
/*!*********************************!*\
  !*** ./src/c/Text/TextStyle.ts ***!
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
var TextStyle = /** @class */ (function (_super) {
    __extends(TextStyle, _super);
    function TextStyle(style) {
        return _super.call(this, style) || this;
    }
    return TextStyle;
}(PIXI.TextStyle));
exports.default = TextStyle;


/***/ }),

/***/ "./src/c/TextInput.ts":
/*!****************************!*\
  !*** ./src/c/TextInput.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlInput_1 = __importDefault(__webpack_require__(/*! ./InputText/HtmlInput */ "./src/c/InputText/HtmlInput.ts"));
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
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
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(styles) {
        var _this = _super.call(this) || this;
        _this._disabled = false;
        _this._maxLength = NaN;
        _this._previous = {};
        _this._domVisible = true;
        _this._placeholder = '';
        _this._placeholderColor = 0xa9a9a9;
        _this._substituted = false;
        _this._resolution = 1;
        _this.state = 'DEFAULT';
        _this._inputStyle = Object.assign({
            position: 'absolute',
            background: 'none',
            border: 'none',
            outline: 'none',
            transformOrigin: '0 0',
            padding: '5px 8px',
            color: '#000000',
            lineHeight: '1'
        }, styles);
        _this.htmlInputShared = new HtmlInput_1.default(_this._inputStyle.multiline);
        _this.htmlInputShared.setStyle(_this._inputStyle);
        _this.htmlInputShared.on("input" /* input */, _this._onInputInput, _this);
        _this.htmlInputShared.on('focus', _this._onFocused, _this);
        _this.htmlInputShared.on('blur', _this._onBlurred, _this);
        _this.substituteText = true;
        _this._setState('DEFAULT');
        _this.container.isEmitRender = true;
        _this.container.on("render", _this.render, _this);
        return _this;
    }
    // GETTERS & SETTERS
    TextInput.prototype.update = function () {
        if (this._surrogate) {
            //this._surrogate.width = this.actualWidth;
            //this._surrogate.height = this.actualHeight;
        }
        this.setInputStyle("width", this.actualWidth.toString() + "px");
        this.setInputStyle("height", this.actualHeight.toString() + "px");
    };
    Object.defineProperty(TextInput.prototype, "placeholder", {
        /**
         * 预览文字
         */
        get: function () {
            return this._placeholder;
        },
        set: function (text) {
            this._placeholder = text;
            if (this._substituted) {
                this._updateSurrogate();
                this.htmlInputShared.placeholder = '';
            }
            else {
                this.htmlInputShared.placeholder = text;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "disabled", {
        /**
         * 设置不可用
         */
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            this.htmlInputShared.disabled = value;
            this._setState(value ? 'DISABLED' : 'DEFAULT');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "maxLength", {
        /**
         * 设置最大可输入
         */
        get: function () {
            return this._maxLength;
        },
        set: function (value) {
            this._maxLength = value;
            this.htmlInputShared.setAttribute('maxlength', value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "restrict", {
        /**
         * 过滤表达式
         */
        get: function () {
            return this.htmlInputShared.restrict;
        },
        set: function (regex) {
            this.htmlInputShared.restrict = regex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "fontSize", {
        /**
         * 设置字体大小
         */
        get: function () {
            if (this._inputStyle.fontSize == null) {
                return NaN;
            }
            return parseInt(this._inputStyle.fontSize);
        },
        set: function (value) {
            var str = value + "px";
            this.setInputStyle("fontSize", str);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "fontFamily", {
        /** 设置字体 */
        get: function () {
            return this._inputStyle.fontFamily;
        },
        set: function (value) {
            this.setInputStyle("fontFamily", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "fill", {
        /**
         * 设置字体颜色
         */
        get: function () {
            if (this._inputStyle.color == null) {
                return "";
            }
            return this._inputStyle.color;
        },
        set: function (value) {
            this.setInputStyle("color", value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "text", {
        /**
         * 设置文本
         */
        get: function () {
            return this.htmlInputShared.value;
        },
        set: function (text) {
            this.htmlInputShared.value = text;
            if (this._substituted)
                this._updateSurrogate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInput.prototype, "substituteText", {
        get: function () {
            return this._substituted;
        },
        set: function (substitute) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置焦点
     */
    TextInput.prototype.focus = function () {
        this.htmlInputShared.setStyle(this._inputStyle);
        if (this._substituted && !this._domVisible)
            this.htmlInputShared.visible = true;
        this.htmlInputShared.value = this.text;
        this.htmlInputShared.focus();
    };
    /**
     * 失去焦点
     */
    TextInput.prototype.blur = function () {
        this.htmlInputShared.blur();
    };
    /**
     * 全选
     */
    TextInput.prototype.select = function () {
        this.focus();
        this.htmlInputShared.select();
    };
    /**
     * 设置css style样式
     * @param key 健
     * @param value 值
     */
    TextInput.prototype.setInputStyle = function (key, value) {
        this._inputStyle[key] = value;
        this.htmlInputShared.setStyleValue(key, value);
        if (this._substituted && (key === 'fontFamily' || key === 'fontSize'))
            this._updateFontMetrics();
        if (this._lastRenderer)
            this._update();
    };
    // SETUP
    TextInput.prototype._onInputInput = function () {
        if (this._substituted)
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
        if (this._substituted)
            this._updateSubstitution();
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
        if (this._needsUpdate())
            this._update();
    };
    TextInput.prototype._update = function () {
        this._updateDOMInput();
        if (this._substituted)
            this._updateSurrogate();
    };
    TextInput.prototype._updateSubstitution = function () {
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
    // INPUT SUBSTITUTION
    TextInput.prototype._createSurrogate = function () {
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
    };
    TextInput.prototype._updateSurrogate = function () {
        var padding = this._deriveSurrogatePadding();
        var inputBounds = this.htmlInputShared.getDOMInputBounds();
        if (this._surrogate) {
            this._surrogate.style = this._deriveSurrogateStyle();
            this._surrogate.style.padding = Math.max.apply(Math, padding);
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
    };
    TextInput.prototype._updateSurrogateHitbox = function (bounds) {
        if (this._surrogateHitbox) {
            this._surrogateHitbox.clear();
            this._surrogateHitbox.beginFill(0);
            this._surrogateHitbox.drawRect(0, 0, bounds.width, bounds.height);
            this._surrogateHitbox.endFill();
            this._surrogateHitbox.interactive = !this._disabled;
        }
    };
    TextInput.prototype._updateSurrogateMask = function (bounds, padding) {
        if (this._surrogateMask) {
            this._surrogateMask.clear();
            this._surrogateMask.beginFill(0);
            this._surrogateMask.drawRect(padding[3], 0, bounds.width - padding[3] - padding[1], bounds.height);
            this._surrogateMask.endFill();
        }
    };
    TextInput.prototype._destroySurrogate = function () {
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
    };
    TextInput.prototype._onSurrogateFocus = function () {
        this.htmlInputShared.visible = true;
        //sometimes the input is not being focused by the mouseclick
        setTimeout(this._ensureFocus.bind(this), 10);
    };
    TextInput.prototype._ensureFocus = function () {
        if (!this._hasFocus())
            this.focus();
    };
    TextInput.prototype._deriveSurrogateStyle = function () {
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
            style.fill = this._placeholderColor;
        return style;
    };
    TextInput.prototype._deriveSurrogatePadding = function () {
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
    TextInput.prototype._deriveSurrogateText = function () {
        return this.htmlInputShared.value.length === 0 ? this._placeholder : this.htmlInputShared.value;
    };
    TextInput.prototype._updateFontMetrics = function () {
        var style = this._deriveSurrogateStyle();
        var font = style.toFontString();
        this._fontMetrics = PIXI.TextMetrics.measureFont(font);
    };
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
    return TextInput;
}(UIBase_1.default));
exports.default = TextInput;


/***/ }),

/***/ "./src/c/TilingSprite.ts":
/*!*******************************!*\
  !*** ./src/c/TilingSprite.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = __importDefault(__webpack_require__(/*! ../UIBase */ "./src/UIBase.ts"));
/**
 * UI平铺显示对象,功能与官方一直，可参考官方示例
 *
 * @example https://pixijs.io/examples/#/sprite/tiling-sprite.js
 */
var TilingSprite = /** @class */ (function (_super) {
    __extends(TilingSprite, _super);
    function TilingSprite(width, height) {
        var _this = _super.call(this, width, height) || this;
        _this._tilePosition = new PIXI.ObservablePoint(_this.update, _this);
        _this._tileScale = new PIXI.ObservablePoint(_this.update, _this);
        return _this;
    }
    Object.defineProperty(TilingSprite.prototype, "source", {
        /**
         * 获取或设置显示源
         * 可以使key、url,PIXI.Texture | canva. 当是key时确认资源库是否存在
         *
         * 设置null可以传入PIXI.Texture.EMPTY
         */
        get: function () {
            return this._source;
        },
        set: function (value) {
            var _this = this;
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
                var t = PIXI.Texture.from(value);
                var sprite_1 = this.getNewTilingSprite(t);
                sprite_1.texture.once("update", function () {
                    if (!_this.height) {
                        _this.height = sprite_1.height;
                    }
                    if (!_this.width) {
                        _this.width = sprite_1.width;
                    }
                    _this.updatesettings(true);
                }, this);
            }
        },
        enumerable: true,
        configurable: true
    });
    TilingSprite.prototype.getNewTilingSprite = function (t) {
        if (this._sprite === undefined) {
            this._sprite = new PIXI.TilingSprite(t);
            this.container.addChild(this._sprite);
        }
        else {
            this._sprite.texture.removeAllListeners();
            this._sprite.texture = t;
        }
        return this._sprite;
    };
    Object.defineProperty(TilingSprite.prototype, "tilePosition", {
        /** 获取设置位置 */
        get: function () {
            return this._tilePosition;
        },
        set: function (value) {
            this._tilePosition.set(value.x, value.y);
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TilingSprite.prototype, "tileScale", {
        /** 获取设置缩放 */
        get: function () {
            return this._tileScale;
        },
        set: function (value) {
            this._tileScale.set(value.x, value.y);
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    TilingSprite.prototype.update = function () {
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
    };
    return TilingSprite;
}(UIBase_1.default));
exports.default = TilingSprite;


/***/ }),

/***/ "./src/c/Tween/Easing.ts":
/*!*******************************!*\
  !*** ./src/c/Tween/Easing.ts ***!
  \*******************************/
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
var Easing = {
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
            return 1 - Easing.Bounce.Out(1 - k);
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
                return Easing.Bounce.In(k * 2) * 0.5;
            }
            return Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        }
    },
    Stepped: {
        steps: function (steps) { return function (k) { return ((k * steps) | 0) / steps; }; }
    }
};
exports.default = Easing;


/***/ }),

/***/ "./src/c/Tween/Interpolation.ts":
/*!**************************************!*\
  !*** ./src/c/Tween/Interpolation.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./constants */ "./src/c/Tween/constants.ts");
/**
 * 差值计算列表
 * @namespace TWEEN.Interpolation
 * @example
 *
 * let bezier = vfui.tween.Interpolation.Bezier
 * new vfui.tween.Tween({x:0}).to({x:[0, 4, 8, 12, 15, 20, 30, 40, 20, 40, 10, 50]}, 1000).interpolation(bezier).start()
 * @memberof vfui.tween
 */
var Interpolation = {
    Linear: function (v, k, value) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f, value);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f, value);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i, value);
    },
    Bezier: function (v, k, value) {
        var b = Interpolation.Utils.Reset(value);
        var n = v.length - 1;
        var pw = Math.pow;
        var fn = Interpolation.Utils.Bernstein;
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
        var fn = Interpolation.Utils.CatmullRom;
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
                            v[p] = Interpolation.Utils.Linear(p0[p], p1[p], t, v[p]);
                        }
                    }
                }
                else {
                    for (var p in v) {
                        v[p] = Interpolation.Utils.Linear(p0[p], p1[p], t, v[p]);
                    }
                }
                return v;
            }
        },
        Reset: function (value) {
            if (Array.isArray(value)) {
                for (var i = 0, len = value.length; i < len; i++) {
                    value[i] = Interpolation.Utils.Reset(value[i]);
                }
                return value;
            }
            else if (typeof value === 'object') {
                for (var i in value) {
                    value[i] = Interpolation.Utils.Reset(value[i]);
                }
                return value;
            }
            else if (typeof value === 'number') {
                return 0;
            }
            return value;
        },
        Bernstein: function (n, i) {
            var fc = Interpolation.Utils.Factorial;
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
                            var currentValue = typeof p0[i] === 'number' ? Interpolation.Utils.CatmullRom(p0[i], p1[i], p2[i], p3[i], t) : p3[i];
                            if (constants_1.isRGBColor(p0, i) || constants_1.isRGBColor(p0, i, constants_1.RGBA)) {
                                currentValue |= 0;
                            }
                            STRING_BUFFER += currentValue;
                        }
                        return STRING_BUFFER;
                    }
                    for (var p = 0, len = v.length; p < len; p++) {
                        v[p] = Interpolation.Utils.CatmullRom(p0[p], p1[p], p2[p], p3[p], t, v[p]);
                    }
                }
                else {
                    for (var p in v) {
                        v[p] = Interpolation.Utils.CatmullRom(p0[p], p1[p], p2[p], p3[p], t, v[p]);
                    }
                }
                return v;
            }
        }
    }
};
exports.default = Interpolation;


/***/ }),

/***/ "./src/c/Tween/Tween.ts":
/*!******************************!*\
  !*** ./src/c/Tween/Tween.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! ./core */ "./src/c/Tween/core.ts");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./src/Utils.ts");
var Easing_1 = __importDefault(__webpack_require__(/*! ./Easing */ "./src/c/Tween/Easing.ts"));
var constants_1 = __webpack_require__(/*! ./constants */ "./src/c/Tween/constants.ts");
var Interpolation_1 = __importDefault(__webpack_require__(/*! ./Interpolation */ "./src/c/Tween/Interpolation.ts"));
var defaultEasing = Easing_1.default.Linear.None;
/**
 * 缓动动画的主类
 * @constructor
 * @class
 * @namespace vfui.Tween
 * @param {Object=} object
 * @example let tween = new Tween(myObject).to({width:'300px'}, 2000).start()
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
        _this._initTime = 0;
        _this._delayTime = 0;
        _this._repeat = 0;
        _this._r = 0;
        _this._isPlaying = false;
        _this._yoyo = false;
        _this._reversed = false;
        _this._onStartCallbackFired = false;
        _this._pausedTime = 0;
        _this._isFinite = true;
        _this._chainedTweensCount = 0;
        _this._prevTime = 0;
        _this._rendered = false;
        _this._reverseDelayTime = 0;
        _this.id = Utils_1.uid();
        _this.object = object;
        _this._valuesStart = Array.isArray(object) ? [] : {};
        _this._interpolationFunction = Interpolation_1.default.Linear;
        return _this;
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
    Tween.fromTo = function (object, to, duration) {
        var tween = new Tween(object).to(to, duration);
        return tween;
    };
    /**
     * Easier way calling constructor only applies the `to` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} to - Target value
     * @param {object} params - Options of tweens
     * @example Tween.to(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    Tween.to = function (object, to, duration) {
        return Tween.fromTo(object, to, duration);
    };
    /**
     * Easier way calling constructor only applies the `from` value, useful for CSS Animation
     * @param {any} object object
     * @param {object} from - Initial value
     * @param {object} params - Options of tweens
     * @example Tween.from(myObject, {x:200}, 1000)
     * @memberof vfui.Tween
     * @static
     */
    Tween.from = function (object, from, duration) {
        return Tween.fromTo(object, from, duration);
    };
    /**
     * 是否在播放中
     * @return {boolean}
     * @example tween.isPlaying() // returns `true` if tween in progress
     * @memberof vfui.Tween
     */
    Tween.prototype.isPlaying = function () {
        return this._isPlaying;
    };
    /**
     * 是否开始播放
     * @return {boolean} State of started of tween
     * @example tween.isStarted() // returns `true` if tween in started
     * @memberof vfui.Tween
     */
    Tween.prototype.isStarted = function () {
        return this._onStartCallbackFired;
    };
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
         * @memberof vfui.Tween
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
     * @param {boolean=} state Set state of current reverse
     * @memberof vfui.Tween
     */
    Tween.prototype.reverse = function (state) {
        var _reversed = this._reversed;
        this._reversed = state !== undefined ? state : !_reversed;
        return this;
    };
    /**
     * 当前动画是否逆转
     * @return {boolean} State of reversed
     * @example tween.reversed() // returns `true` if tween in reversed state
     * @memberof vfui.Tween
     */
    Tween.prototype.reversed = function () {
        return this._reversed;
    };
    /**
     * 暂停缓动
     * @example tween.pause()
     * @memberof vfui.Tween
     */
    Tween.prototype.pause = function () {
        if (!this._isPlaying) {
            return this;
        }
        this._isPlaying = false;
        core_1.remove(this);
        this._pausedTime = Utils_1.now();
        return this.emit("pause" /* pause */, this.object);
    };
    /**
     * 播放或恢复播放
     * @example tween.play()
     * @memberof vfui.Tween
     */
    Tween.prototype.play = function () {
        if (this._isPlaying) {
            return this;
        }
        this._isPlaying = true;
        this._startTime += Utils_1.now() - this._pausedTime;
        this._initTime = this._startTime;
        core_1.add(this);
        this._pausedTime = Utils_1.now();
        return this.emit("play" /* play */, this.object);
    };
    /**
     * 从初始值，重新模仿
     * @param {boolean=} noDelay 如果为 `true`, 重新启动缓动，排除 `delay`
     * @example tween.restart()
     * @memberof vfui.Tween
     */
    Tween.prototype.restart = function (noDelay) {
        this._repeat = this._r;
        this.reassignValues();
        core_1.add(this);
        return this.emit("restart" /* restart */, this.object);
    };
    /**
     * Seek tween value by `time`. Note: Not works as excepted. PR are welcome
     * @param {Time} time Tween update time
     * @param {boolean=} keepPlaying When this param is set to `false`, tween pausing after seek
     * @example tween.seek(500)
     * @memberof vfui.Tween
     * @deprecated Not works as excepted, so we deprecated this method
     */
    Tween.prototype.seek = function (time, keepPlaying) {
        var _a = this, _duration = _a._duration, _initTime = _a._initTime, _startTime = _a._startTime, _reversed = _a._reversed;
        var updateTime = _initTime + time;
        this._isPlaying = true;
        if (updateTime < _startTime && _startTime >= _initTime) {
            this._startTime -= _duration;
            this._reversed = !_reversed;
        }
        this.update(time, false);
        //this.emit(TweenEvent.seek, time, this.object);
        return keepPlaying ? this : this.pause();
    };
    /**
     * 设置要缓动的目标属性与持续时间
     * @param {object} properties 目标属性值
     * @param {number|Object=} [duration=1000] 持续时间
     * @example let tween = new vfui.Tween({x:0}).to({x:100}, 2000)
     * @memberof vfui.Tween
     */
    Tween.prototype.to = function (properties, duration) {
        if (duration === void 0) { duration = 1000; }
        this._valuesEnd = properties;
        if (typeof duration === 'function') {
            this.duration = this._duration;
        }
        else {
            this._duration = duration;
        }
        return this;
    };
    /**
     *
     * Renders and computes value at first render
     * @private
     * @memberof vfui.Tween
     */
    Tween.prototype.render = function () {
        if (this._rendered) {
            return this;
        }
        var _a = this, _valuesStart = _a._valuesStart, _valuesEnd = _a._valuesEnd, object = _a.object;
        constants_1.SET_NESTED(object);
        constants_1.SET_NESTED(_valuesEnd);
        if (!_valuesStart.processed) {
            for (var property in _valuesEnd) {
                var start = object && object[property] && Utils_1.deepCopy(object[property]);
                var end = _valuesEnd[property];
                if (core_1.Plugins[property] && core_1.Plugins[property].init) {
                    core_1.Plugins[property].init.call(this, start, end, property, object);
                    if (start === undefined && _valuesStart[property]) {
                        start = _valuesStart[property];
                    }
                    if (core_1.Plugins[property].skipProcess) {
                        continue;
                    }
                }
                if ((typeof start === 'number' && isNaN(start)) ||
                    start === null ||
                    end === null ||
                    start === false ||
                    end === false ||
                    start === undefined ||
                    end === undefined ||
                    start === end) {
                    continue;
                }
                _valuesStart[property] = start;
                if (Array.isArray(end)) {
                    if (!Array.isArray(start)) {
                        end.unshift(start);
                        for (var i = 0, len = end.length; i < len; i++) {
                            if (typeof end[i] === 'string') {
                                end[i] = constants_1.decomposeString(end[i]);
                            }
                        }
                    }
                    else {
                        if (end.isString && object[property].isString && !start.isString) {
                            start.isString = true;
                        }
                        else {
                            constants_1.decompose(property, object, _valuesStart, _valuesEnd);
                        }
                    }
                }
                else {
                    constants_1.decompose(property, object, _valuesStart, _valuesEnd);
                }
                if (typeof start === 'number' && typeof end === 'string' && end[1] === '=') {
                    continue;
                }
            }
            _valuesStart.processed = true;
        }
        this._rendered = true;
        return this;
    };
    /**
     * 开始执行缓动
     * @param {number|string} time setting manual time instead of Current browser timestamp or like `+1000` relative to current timestamp
     * @example tween.start()
     * @memberof vfui.Tween
     */
    Tween.prototype.start = function (time) {
        this._startTime = time !== undefined ? (typeof time === 'string' ? Utils_1.now() + parseFloat(time) : time) : Utils_1.now();
        this._startTime += this._delayTime;
        this._initTime = this._prevTime = this._startTime;
        this._onStartCallbackFired = false;
        this._rendered = false;
        this._isPlaying = true;
        core_1.add(this);
        return this;
    };
    /**
     * 停止缓动
     * @example tween.stop()
     * @memberof vfui.Tween
     */
    Tween.prototype.stop = function () {
        var _a = this, _isPlaying = _a._isPlaying, _isFinite = _a._isFinite, object = _a.object, _startTime = _a._startTime, _duration = _a._duration, _r = _a._r, _yoyo = _a._yoyo, _reversed = _a._reversed;
        if (!_isPlaying) {
            return this;
        }
        var atStart = _isFinite ? (_r + 1) % 2 === 1 : !_reversed;
        this._reversed = false;
        if (_yoyo && atStart) {
            this.update(_startTime);
        }
        else {
            this.update(_startTime + _duration);
        }
        core_1.remove(this);
        return this.emit("stop" /* stop */, object);
    };
    /**
     * 设置延迟执行时间
     * @param {number} amount 延迟等待的时间，毫秒
     * @example tween.delay(500)
     * @memberof vfui.Tween
     */
    Tween.prototype.delay = function (amount) {
        this._delayTime = typeof amount === 'function' ? amount(this._delayTime) : amount;
        return this;
    };
    /**
     * 链式执行
     * @param {any} arguments Arguments list
     * @example tween.chainedTweens(tween1, tween2)
     * @memberof vfui.Tween
     */
    Tween.prototype.chainedTweens = function () {
        var tween = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tween[_i] = arguments[_i];
        }
        this._chainedTweensCount = tween.length;
        if (!this._chainedTweensCount) {
            return this;
        }
        for (var i = 0, len = this._chainedTweensCount; i < len; i++) {
            this[constants_1.CHAINED_TWEENS + i] = tween[i];
        }
        return this;
    };
    /**
     * 设置重复执行的次数
     * @param {number} amount 重复次数
     * @example tween.repeat(5)
     * @memberof vfui.Tween
     */
    Tween.prototype.repeat = function (amount) {
        this._repeat = !this._duration ? 0 : typeof amount === 'function' ? amount(this._repeat) : amount;
        this._r = this._repeat;
        this._isFinite = isFinite(amount);
        return this;
    };
    /**
     * 设置每个重复执行过程的延迟时间，毫秒
     * @param {number} amount 延迟值
     * @example tween.reverseDelay(500)
     * @memberof vfui.Tween
     */
    Tween.prototype.reverseDelay = function (amount) {
        this._reverseDelayTime = typeof amount === 'function' ? amount(this._reverseDelayTime) : amount;
        return this;
    };
    /**
     * 是否在重复执行中启用反向动画
     * @param {boolean} state true启动
     * @param {Function=} _easingReverse 反向时的Easing function
     * @example tween.yoyo(true)
     * @memberof vfui.Tween
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
     * @memberof vfui.Tween
     */
    Tween.prototype.easing = function (_easingFunction) {
        this._easingFunction = _easingFunction;
        return this;
    };
    /**
     * 设置差值
     * @param {Function} _interpolationFunction 差值的函数
     * @example tween.interpolation(Interpolation.Bezier)
     * @memberof vfui.Tween
     */
    Tween.prototype.interpolation = function (_interpolationFunction) {
        if (typeof _interpolationFunction === 'function') {
            this._interpolationFunction = _interpolationFunction;
        }
        return this;
    };
    /**
     * 为 Tween#restart 或 Timeline 重新分配时间
     * @private
     * @memberof vfui.Tween
     */
    Tween.prototype.reassignValues = function (time) {
        var _a = this, _valuesStart = _a._valuesStart, object = _a.object, _delayTime = _a._delayTime;
        this._isPlaying = true;
        this._startTime = time !== undefined ? time : Utils_1.now();
        this._startTime += _delayTime;
        this._reversed = false;
        core_1.add(this);
        for (var property in _valuesStart) {
            var start = _valuesStart[property];
            object[property] = start;
        }
        return this;
    };
    /**
     * 更新函数，通过给定的 `time` 设置目标属性变化
    * @param {number=} time 当前时间戳
    * @param {Boolean=} preserve 完成后，防止删除动画对象
     * @param {boolean=} forceTime 强制进行更新渲染，不关心时间是否匹配
     * @example tween.update(100)
     * @memberof vfui.Tween
     */
    Tween.prototype.update = function (time, preserve, forceTime) {
        var _a = this, _onStartCallbackFired = _a._onStartCallbackFired, _easingFunction = _a._easingFunction, _interpolationFunction = _a._interpolationFunction, _easingReverse = _a._easingReverse, _repeat = _a._repeat, _delayTime = _a._delayTime, _reverseDelayTime = _a._reverseDelayTime, _yoyo = _a._yoyo, _reversed = _a._reversed, _startTime = _a._startTime, _prevTime = _a._prevTime, _duration = _a._duration, _valuesStart = _a._valuesStart, _valuesEnd = _a._valuesEnd, object = _a.object, _isFinite = _a._isFinite, _isPlaying = _a._isPlaying, _chainedTweensCount = _a._chainedTweensCount;
        var elapsed;
        var currentEasing;
        var property;
        var propCount = 0;
        time = time !== undefined ? time : Utils_1.now();
        if (!_duration) {
            elapsed = 1;
            _repeat = 0;
        }
        else {
            var delta = time - _prevTime;
            this._prevTime = time;
            if (delta > constants_1.TOO_LONG_FRAME_MS && core_1.isRunning() && core_1.isLagSmoothing()) {
                time -= delta - constants_1.FRAME_MS;
            }
            if (!_isPlaying || (time < _startTime && !forceTime)) {
                return true;
            }
            elapsed = (time - _startTime) / _duration;
            elapsed = elapsed > 1 ? 1 : elapsed;
            elapsed = _reversed ? 1 - elapsed : elapsed;
        }
        if (!_onStartCallbackFired) {
            if (!this._rendered) {
                this.render();
                this._rendered = true;
            }
            this.emit("start" /* start */, object);
            this._onStartCallbackFired = true;
        }
        currentEasing = _reversed ? _easingReverse || _easingFunction : _easingFunction;
        if (!object) {
            return true;
        }
        for (property in _valuesEnd) {
            var start = _valuesStart[property];
            if ((start === undefined || start === null) && !(core_1.Plugins[property] && core_1.Plugins[property].update)) {
                continue;
            }
            var end = _valuesEnd[property];
            var value = currentEasing[property] ? currentEasing[property](elapsed) : typeof currentEasing === 'function' ? currentEasing(elapsed) : defaultEasing(elapsed);
            var _interpolationFunctionCall = _interpolationFunction[property]
                ? _interpolationFunction[property] : typeof _interpolationFunction === 'function' ? _interpolationFunction : Interpolation_1.default.Linear;
            if (typeof end === 'number') {
                object[property] = start + (end - start) * value;
            }
            else if (Array.isArray(end) && !end.isString && !Array.isArray(start)) {
                object[property] = _interpolationFunctionCall(end, value, object[property]);
            }
            else if (end && end.update) {
                end.update(value);
            }
            else if (typeof end === 'function') {
                object[property] = end(value);
            }
            else if (typeof end === 'string' && typeof start === 'number') {
                object[property] = start + parseFloat(end[0] + end.substr(2)) * value;
            }
            else {
                constants_1.recompose(property, object, _valuesStart, _valuesEnd, value, elapsed);
            }
            if (core_1.Plugins[property] && core_1.Plugins[property].update) {
                core_1.Plugins[property].update.call(this, object[property], start, end, value, elapsed, property);
            }
            propCount++;
        }
        if (!propCount) {
            core_1.remove(this);
            return false;
        }
        this.emit("update" /* update */, object, elapsed, time);
        if (elapsed === 1 || (_reversed && elapsed === 0)) {
            if (_repeat > 0 && _duration > 0) {
                if (_isFinite) {
                    this._repeat--;
                }
                if (_yoyo) {
                    this._reversed = !_reversed;
                }
                else {
                    for (property in _valuesEnd) {
                        var end = _valuesEnd[property];
                        if (typeof end === 'string' && typeof _valuesStart[property] === 'number') {
                            _valuesStart[property] += parseFloat(end[0] + end.substr(2));
                        }
                    }
                }
                this.emit(_yoyo && !_reversed ? "reverse" /* reverse */ : "repeat" /* repeat */, object);
                if (_reversed && _reverseDelayTime) {
                    this._startTime = time - _reverseDelayTime;
                }
                else {
                    this._startTime = time + _delayTime;
                }
                return true;
            }
            else {
                if (!preserve) {
                    this._isPlaying = false;
                    core_1.remove(this);
                }
                this.emit("complete" /* complete */, object);
                this._repeat = this._r;
                if (_chainedTweensCount) {
                    for (var i = 0; i < _chainedTweensCount; i++) {
                        this[constants_1.CHAINED_TWEENS + i].start(time + _duration);
                    }
                }
                return false;
            }
        }
        return true;
    };
    return Tween;
}(PIXI.utils.EventEmitter));
exports.default = Tween;


/***/ }),

/***/ "./src/c/Tween/constants.ts":
/*!**********************************!*\
  !*** ./src/c/Tween/constants.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./src/Utils.ts");
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

/***/ "./src/c/Tween/core.ts":
/*!*****************************!*\
  !*** ./src/c/Tween/core.ts ***!
  \*****************************/
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
 * @memberof vfui.tween
 * @example
 * vfui.tween.FrameThrottle(60)
 */
function FrameThrottle(frameCount) {
    if (frameCount === void 0) { frameCount = 120; }
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
function ToggleLagSmoothing(_state) {
    if (_state === void 0) { _state = true; }
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
 * @memberof vfui.tween
 * @example
 * vfui.tween.update(500)
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

/***/ "./src/c/Tween/index.ts":
/*!******************************!*\
  !*** ./src/c/Tween/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! ./core */ "./src/c/Tween/core.ts");
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
var Easing_1 = __importDefault(__webpack_require__(/*! ./Easing */ "./src/c/Tween/Easing.ts"));
exports.Easing = Easing_1.default;
var Interpolation_1 = __importDefault(__webpack_require__(/*! ./Interpolation */ "./src/c/Tween/Interpolation.ts"));
exports.Interpolation = Interpolation_1.default;
var utils = __importStar(__webpack_require__(/*! ./constants */ "./src/c/Tween/constants.ts"));
exports.utils = utils;
var Tween_1 = __importDefault(__webpack_require__(/*! ./Tween */ "./src/c/Tween/Tween.ts"));
exports.Tween = Tween_1.default;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vfui = __importStar(__webpack_require__(/*! ./UI */ "./src/UI.ts"));
// //注入常规兼容方法
// if(!Array.from){
//     Array.from = function (el: unknown[]) {
//         return Array.apply(this, el);
//     }
// }
// String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
//     return this.lastIndexOf(word, pos || 0) === 0;
// });
exports.default = vfui;
window.vfui = vfui;


/***/ })

/******/ });
//# sourceMappingURL=vfui.js.map