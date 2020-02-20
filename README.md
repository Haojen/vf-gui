[![npm version](https://badge.fury.io/js/vf-gui.svg)](https://badge.fury.io/js/vf-gui)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vf-gui)

## vf-gui

vf-gui简称`gui`是基于PIXIJS引擎，使用TypeScript语言开发的开源UI库。 为PIXIJS提供提供基础可靠的UI组件。


## 学习(Learn) 

* [示例(Examples)](https://vipkid-edu.github.io/vf-gui-docs/play)

* [API](https://vipkid-edu.github.io/vf-gui-docs/api)

* [源码(Github)](https://github.com/vipkid-edu/vf-gui/)


## 安装(Setup) 

>使用gui库之前，我们默认你已经导入pixijs库，如何导入请参考网络教程。

### NPM Install

    npm install vf-gui

### CDN Install
    
Version:

    <script src="http://unpkg.com/vf-gui@1.1.2/dist/vf-gui.js"></script>
    
    <script src="http://unpkg.com/vf-gui@01.1.2/dist/vf-gui.min.js"></script>

Master:

    <script src="http://unpkg.com/vf-gui/dist/vf-gui.js"></script>

    <script src="http://unpkg.com/vf-gui/dist/vf-gui.min.js"></script>

### 创建方式(Usage)：

    let button = new  gui.Button();


## 如何构建(How build)

1. git clone https://github.com/vipkid-edu/vf-gui
1. npm i
1. setup Visual Studio Code
1. setup Visual Studio Code Extension (Debugger for Chrome）
1. setup Visual Studio Code Extension (ESLint）
1. setup Visual Studio Code Extension (Live Server）
1. run Live Server
1. npm run test
1. view http://127.0.0.1:5501/


## 组件(Component)

使用示例：https://vipkid-edu.github.io/vf-gui-docs/play

可使用组件：

| 导入方式    |      名称       |
|----------|-------------|
| gui.Stage |  UI舞台 |
| gui.Container | 容器 |
| gui.ScrollingContainer | 可滑动的容器 |
| gui.Image | 图片 |
| gui.Label | 文本 |
| gui.TextInput | 输入文本 |
| gui.Graphics | 绘制矢量 |
| gui.Rect | 绘制矢量矩形 |
| gui.Circle | 绘制矢量圆形 |
| gui.Button | 按钮 |
| gui.CheckBox | 单选与复选 |
| gui.SpriteAnimated | 序列图 |
| gui.Slider | 滑动/进度条 |
| gui.FollowLine | 跟随鼠标划线与擦除 |
| gui.ConnectLine | 连线 |
| gui.Ticker | 心跳 |
| gui.Tween | 缓动 |
| gui.Timeline | 缓动 |
| gui.Sound | 音频(deprecated) |
| gui.Utils | 工具类 |


计划中：

    Recording/Audio - 麦克风
    Spine/DB - 龙骨
    Video - 视频
    Particle - 粒子
    DialogueText - 字幕
    Sequence - 动画序列图
    Accordion - 手风琴
    Http/WebSocket - 网络


## 请提交时进行`eslint`检测

    npm run lint


## Other

Chrome debug - windows

Right click the Chrome shortcut, and select properties
In the "target" field, append --remote-debugging-port=9222
Or in a command prompt, execute <path to chrome>/chrome.exe --remote-debugging-port=9222

Chrome debug - mac

In a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

### License

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
