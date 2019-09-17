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

    import Button from "pixi-vfui/dist/c/Button";

    其他组件导入方式可查看“组件”部分


### CDN Install

推荐使用ES6标准方式导入，使用CDN命名空间方式导入，请注意.d.ts的编写以及创建方式为：

    vfui.Button
    vfui.CheckBox
    vfui.xxxxxx

Master:

    <script src="http://unpkg.com/pixi-vfui/dist/pixi-vfui.js"></script>

    <script src="http://unpkg.com/pixi-vfui/dist/pixi-vfui.min.js"></script>
    
Version:

    <script src="http://unpkg.com/pixi-vfui@0.1.6/dist/pixi-vfui.js"></script>
    
    <script src="http://unpkg.com/pixi-vfui@0.1.6/dist/pixi-vfui.min.js"></script>

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

导入方式 | 名称 
-|-|-
import Stage from "pixi-vfui/dist/Stage"  |  UI舞台 |
import Container from "pixi-vfui/dist/c/Container";  | 容器 |
import ScrollingContainer from "pixi-vfui/dist/c/ScrollingContainer" | 可滑动的容器 |
import ScrollBar from "pixi-vfui/dist/c/ScrollBar" | 带有滑动条容器 |
import SortableList from "pixi-vfui/dist/c/SortableList"  | 带有排序功能的列表容器 |
import Sprite from "pixi-vfui/dist/c/Sprite" | 图片 |
import TilingSprite from "pixi-vfui/dist/c/TilingSprite"  | 平铺的图片 |
import SliceSprite from "pixi-vfui/dist/c/SliceSprite" | 九宫图片 |
import Button from "pixi-vfui/dist/c/Button" | Button - 按钮 |
import CheckBox from "pixi-vfui/dist/c/CheckBox" | 单选与复选 |
import Rect from "pixi-vfui/dist/c/Rect" | 绘制矢量矩形 |
import Text from "pixi-vfui/dist/c/Text"   | 文本 |
import TextInput from "pixi-vfui/dist/c/TextInput"  | 输入文本 |
import Slider from "pixi-vfui/dist/c/Slider"   | 滑动条 |
import Ticker from "pixi-vfui/dist/Ticker" | 心跳 |
import Tween from "pixi-vfui/dist/c/Tween/index"  | 缓动 |
import Utils from "pixi-vfui/dist/Utils" | 工具类 |


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
