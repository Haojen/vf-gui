[![npm version](https://badge.fury.io/js/pixi-vfui.svg)](https://badge.fury.io/js/pixi-vfui)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/pixi-vfui)

## pixi-vfui

pixi-vfui简称`vfui`是基于PIXIJS引擎，使用TypeScript语言开发的开源UI库。 为PIXIJS提供提供基础可靠的UI组件。

## 学习(Learn) 


* [文档(documentation)](https://vipkid-edu.github.io/pixi-vfui-docs/0.1.0/)

* [示例(Examples)](https://vipkid-edu.github.io/pixi-vfui-docs/play)

* [API](https://vipkid-edu.github.io/pixi-vfui-docs/0.1.0/globals.html)

* [源码(Github)](https://github.com/vipkid-edu/pixi-vfui/)


## 安装(Setup) 

>使用vfui库之前，我们默认你已经导入pixijs库，如何导入请参考网络教程。

### NPM Install

    npm install pixi-vfui

#### 正确的导入方式 (The correct way to import is): 

    import vfui from "vfui";

### CDN Install

Master:

    <script src="http://unpkg.com/pixi-vfui/dist/vfui.js"></script>

    <script src="http://unpkg.com/pixi-vfui/dist/vfui.min.js"></script>
Version:

    <script src="http://unpkg.com/pixi-vfui@0.1.2/dist/vfui.js"></script>
    
    <script src="http://unpkg.com/pixi-vfui@0.1.2/dist/vfui.min.js"></script>

## 如何构建(How build)

1. git clone https://github.com/vipkid-edu/pixi-vfui
1. setup Visual Studio Code
1. setup Visual Studio Code Extension (Debugger for Chrome）
1. setup Visual Studio Code Extension (ESLint）
1. setup Visual Studio Code Extension (Live Server）
1. run Live Server
1. npm run build or npm run watch
1. view http://127.0.0.1:5501/


## 如果你是开发人员请提交时进行`eslint`检测

    npm run lint


## 组件(Component)
可使用组件：

    Stage - UI舞台
    Text - 文本
    Button - 按钮
    CheckBox - 单选与复选
    Slider - 滑动条
    Container - 容器
    ScrollingContainer - 可滑动的容器
    ScrollBar - 带有滑动条容器
    SortableList - 带有排序功能的列表容器
    Sprite - 图片
    SliceSprite - 可以设置九宫拉伸的图片
    TilingSprite - 平铺的图片
    TextInput - 输入文本
    Ticker - 心跳
    Tween - 缓动
    Rect - 绘制矢量矩形

计划中：

    Sound - 音频
    Recording/Audio - 麦克风
    Spine/DB - 龙骨
    Video - 视频
    Particle - 粒子
    DialogueText - 字幕
    Sequence - 动画序列图
    Accordion - 手风琴
    Http/WebSocket - 网络

## Ohter

Chrome debug - windows

Right click the Chrome shortcut, and select properties
In the "target" field, append --remote-debugging-port=9222
Or in a command prompt, execute <path to chrome>/chrome.exe --remote-debugging-port=9222

Chrome debug - mac

In a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

License
This content is released under the (http://opensource.org/licenses/MIT) MIT License.
