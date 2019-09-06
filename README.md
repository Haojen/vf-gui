# pixi-vfui

pixi-vfui简称vfui是基于pixijs引擎提供的开源UI组件库，使用语言TypeScript。

vfui分基础UI与扩展UI库(NPM)。基础UI提供常用的UI组件库，NPM组件提供额外扩展库，非常规需求。

# 学习(Learn) （未完成）

文档(documentation)

[https://vipkid-edu.github.io/pixi-vfui-docs/](https://vipkid-edu.github.io/pixi-vfui-docs/)

API

[https://vipkid-edu.github.io/pixi-vfui-docs/](https://vipkid-edu.github.io/pixi-vfui-docs/)

示例(Examples)

[https://vipkid-edu.github.io/pixi-vfui-docs/](https://vipkid-edu.github.io/pixi-vfui-docs/)

源码(Github)

[https://github.com/vipkid-edu/pixi-vfui/](https://github.com/vipkid-edu/pixi-vfui/)

# 安装(Setup) （未完成）

使用vfui库之前，我们默认你已经导入pixijs库，如何导入请参考网络教程。

## NPM Install （未完成）

`
    npm install pixi-vfui
`
### 正确的导入方式 (The correct way to import is): （未完成）
`
    import vfui from "pixi-vfui";
`

## CDN Install （未完成）
`
    <script src="https://xxxxxxxxx/1.0.0/pixi-vfi.min.js"></script>
`

# 如何构建(How build)

1. git clone https://github.com/vipkid-edu/pixi-vfui
2. setup Visual Studio Code
3. setup Visual Studio Code Extension (Debugger for Chrome）
4. setup Visual Studio Code Extension (ESLint）
5. setup Visual Studio Code Extension (Live Server）
6. run Live Server
7. npm run build or npm run watch
8. view http://127.0.0.1:5501/


# chrome debug 

Windows

Right click the Chrome shortcut, and select properties
In the "target" field, append --remote-debugging-port=9222
Or in a command prompt, execute <path to chrome>/chrome.exe --remote-debugging-port=9222

macOS

In a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

# git commit check

eslint ./src/** --fix
