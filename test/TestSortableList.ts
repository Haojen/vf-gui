// import gui from "../src/vf-gui";

// export default class TestSortableList {

//     public constructor(app: PIXI.Application, uiStage: gui.Stage) {
//         this.onLoad(app,uiStage)
//     }

//     private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

//         let t = new gui.Text("排序功能的容器组件SortableList,拖动左边选项到右边", new gui.TextStyle({ fill: 0x00ffcc }));
//         t.x = 50;
//         t.y = 10;
//         uiStage.addChild(t);


//         let dragContainer = new gui.Container();
//         uiStage.addChild(dragContainer);

//         this.newSortableList(1, uiStage, dragContainer);
//         this.newSortableList(2, uiStage, dragContainer);
//     }

//     private newSortableList(index: number, uiStage: gui.Stage, dragContainer: gui.Container) {

//         let sc = new gui.ScrollingContainer();
//         if (index == 2) {
//             sc.left = 400;
//         }

//         sc.top = 50;
//         sc.scrollY = true;
//         sc.dragThreshold = 5;
//         sc.dragRestrictAxis = "y";
//         sc.width = 300;
//         sc.heightPct = "100%";
//         uiStage.addChildAt(sc, 0);

//         let sb = new gui.ScrollBar(0, 1);//参数2设置sourceTrack的9宫拉伸
//         if (index == 2)
//             sb.left = 400;
//         sb.top = 50;
//         sb.sourceThumb = "assets/skin/ScrollBar/roundthumb.png";
//         sb.sourceTrack = "assets/skin/ScrollBar/track_sb.png";
//         sb.width = 10;
//         sb.heightPct = "100%";
//         sb.vertical = true;
//         sb.autohide = true; //当内容不需要滚动时，隐藏
//         sb.scrollingContainer = sc;
//         uiStage.addChild(sb);

//         //============ gui.SortableList ============= 
//         let stl = new gui.SortableList();
//         stl.tweenTime = 30;
//         stl.tweenEase = gui.Easing.Cubic.Out;
//         stl.desc = true;
//         stl.heightPct = "100%";
//         stl.widthPet = "100%";
//         stl.droppable = true;
//         stl.dropGroup = "player";
//         sc.addChild(stl);


//         for (var p = 0; p < this.playersArr.length; p++) {
//             let item = this.playersArr[p];
//             let str = `${item.name} | ${item.score}| ${item.kills}| ${item.deaths}| ${item.assist}| ${item.ping}`;

//             let c = this.getItemContainer(str, dragContainer);
//             stl.addChild(c, this.sortScore(p), this.sortKills(p));
//         }
//     }

//     private sortScore(index: number) {
//         let i = index;
//         return () => {
//             return this.playersArr[i].score;
//         }
//     }
//     private sortKills(index: number) {
//         let i = index;
//         return () => {
//             return this.playersArr[i].kills;
//         }
//     }

//     private getItemContainer(str: string, dragContainer: gui.Container) {

//         let contariner = new gui.Container()
//         contariner.draggable = true;
//         contariner.dragGroup = "player";
//         contariner.dragThreshold = 5;
//         contariner.dragRestrictAxis = "x"
//         contariner.dragContainer = dragContainer;
//         contariner.x = contariner.y = 0;
//         contariner.widthPet = "100%";
//         contariner.height = 55;

//         let rect = new gui.Rect();
//         rect.drawRoundedRect(0, 0, 300, 50, 5, 0xffffff);
//         contariner.addChild(rect);

//         let textStyle = new gui.TextStyle({ fill: ['#000000', '#00ffcc'], fontSize: 25, fontFamily: 'Calibri', fontWeight: 'bold' });
//         let text = new gui.Text(str, textStyle);
//         text.horizontalAlign = gui.AlignEnum.HorizontalAlignEnum.center;
//         text.verticalAlign = gui.AlignEnum.VerticalAlignEnum.middle;
//         contariner.addChild(text);

//         console.log(contariner.width, contariner.height);
//         return contariner;
//     }
//     private playersArr = [
//         { name: "Alex", score: 1000, kills: 15, deaths: 4, assist: 6, ping: 75 },
//         { name: "John", score: 132, kills: 1, deaths: 2, assist: 1, ping: 25 },
//         { name: "Charles", score: 595, kills: 9, deaths: 6, assist: 4, ping: 50 },
//         { name: "Ivan", score: 705, kills: 10, deaths: 5, assist: 3, ping: 33 },
//         { name: "Martin", score: 130, kills: 2, deaths: 7, assist: 7, ping: 21 },
//         { name: "Ronnie", score: 10, kills: 0, deaths: 1, assist: 1, ping: 55 },
//         { name: "Jimmy", score: 1500, kills: 17, deaths: 1, assist: 8, ping: 55 },
//         { name: "Egon", score: 1132, kills: 5, deaths: 3, assist: 5, ping: 25 },
//         { name: "Ulrik", score: 595, kills: 9, deaths: 8, assist: 4, ping: 58 },
//         { name: "Peter", score: 705, kills: 10, deaths: 3, assist: 4, ping: 33 },
//         { name: "Nick", score: 1130, kills: 15, deaths: 5, assist: 3, ping: 247 },
//         { name: "Andy", score: 17, kills: 0, deaths: 2, assist: 2, ping: 59 },
//         { name: "Alex", score: 1000, kills: 15, deaths: 4, assist: 6, ping: 75 },
//         { name: "John", score: 132, kills: 1, deaths: 2, assist: 1, ping: 25 },
//         { name: "Charles", score: 595, kills: 9, deaths: 6, assist: 4, ping: 50 },
//         { name: "Ivan", score: 705, kills: 10, deaths: 5, assist: 3, ping: 33 },
//         { name: "Martin", score: 130, kills: 2, deaths: 7, assist: 7, ping: 21 },
//         { name: "Ronnie", score: 10, kills: 0, deaths: 1, assist: 1, ping: 55 },
//         { name: "Jimmy", score: 1500, kills: 17, deaths: 1, assist: 8, ping: 55 },
//         { name: "Egon", score: 1132, kills: 5, deaths: 3, assist: 5, ping: 25 },
//         { name: "Ulrik", score: 595, kills: 9, deaths: 8, assist: 4, ping: 58 },
//         { name: "Peter", score: 705, kills: 10, deaths: 3, assist: 4, ping: 33 },
//         { name: "Nick", score: 1130, kills: 15, deaths: 5, assist: 3, ping: 247 },
//         { name: "Andy", score: 17, kills: 0, deaths: 2, assist: 2, ping: 59 }

//     ];

// }

