// import gui from "../src/vf-gui";

// export default class TestScrollBar {

//     public constructor(app: PIXI.Application, uiStage: gui.Stage) {
//         this.onLoad(app,uiStage)
//     }

//     private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

//         let t = new gui.Label("scrooll 组件，配合ScrollingContainer一起使用");
//         t.y = 20;
//         uiStage.addChild(t);

//         let sc = this.addSc(uiStage, 50, 100, "拖拽进度条或拖拽图片");
//         /** 滑动条容器 vertical = false */
//         let vscrollBar = new gui.ScrollBar(0, 1);//参数2设置sourceTrack的9宫拉伸
//         vscrollBar.sourceThumb = "assets/skin/ScrollBar/roundthumb.png";
//         vscrollBar.sourceTrack = "assets/skin/ScrollBar/track_sb.png";
//         vscrollBar.x = sc.x - 30;
//         vscrollBar.y = sc.y;
//         vscrollBar.width = 10;
//         vscrollBar.height = sc.height;
//         vscrollBar.scrollingContainer = sc;//绑定gui.ScrollingContainer
//         vscrollBar.value = 0;
//         vscrollBar.vertical = true;
//         vscrollBar.autohide = true; //当内容不需要滚动时，隐藏
//         uiStage.addChild(vscrollBar);

//         /** 滑动条容器 vertical = true */
//         let hscrollBar = new gui.ScrollBar(0, 1);
//         hscrollBar.sourceThumb = "assets/skin/ScrollBar/roundthumb.png";
//         hscrollBar.sourceTrack = "assets/skin/ScrollBar/track_sb.png";
//         hscrollBar.x = sc.x;
//         hscrollBar.y = sc.y + sc.height + 20;
//         hscrollBar.width = sc.width;
//         hscrollBar.height = 10;
//         hscrollBar.scrollingContainer = sc;//绑定gui.ScrollingContainer
//         hscrollBar.value = 0;
//         hscrollBar.vertical = false;
//         hscrollBar.autohide = true;
//         uiStage.addChild(hscrollBar);

//     }


//     private addSc(uiStage: gui.Stage, x: number, y: number, label: string) {
//         let sc = new gui.ScrollingContainer();
//         sc.x = x;
//         sc.y = y;
//         sc.scrollX = true;
//         sc.scrollY = true;
//         sc.dragScrolling = true;
//         sc.expandMask = 2;
//         sc.softness = 0.2;
//         sc.width = 300;
//         sc.height = 200;


//         for (let i = 0; i < 1; ++i) {
//             this.addSp(sc, i);
//         }


//         let t = new gui.Text(label, new gui.TextStyle({ fill: 0x00ffcc }));
//         t.y = 0;
//         sc.addChild(t);

//         let rect = new gui.Rect();
//         rect.drawRoundedRect(-5, -5, 310, 210, 1);
//         rect.x = x;
//         rect.y = y;
//         uiStage.addChild(rect);
//         uiStage.addChild(sc);
//         return sc;
//     }

//     private addSp(sc: gui.ScrollingContainer, i: number) {

//         let sp = new gui.Image();
//         sp.source = "assets/sprite.png";
//         sp.y = i * 620;
//         sc.addChild(sp);

//     }

// }


