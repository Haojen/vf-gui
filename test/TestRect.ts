import vfui from "../src/pixi-vfui";

class Node {
    public constructor(parent?: Node,root?:vfui.Container) {
        let div = this.div;
        div.style.backgroundColor = 0x136086;
        div.style.height = 10;
        div.style.width = 100;
        div.style.left = 100;
        div.style.top = 0;
        div.style.pivotX = 5;
        div.style.pivotY = 5;
        // new vfui.Tween(div.style).to({rotation:5,scaleX:0.72,scaleY:0.72},2000)
        // .repeat(Infinity)
        // .easing(vfui.Easing.Linear.None)
        // .yoyo(true)
        // .start(0);


        if(root){
            root.addChild(div);
        }else{
            this.parent = parent;
            if(this.isLeft)
                div.style.rotation = 90;
            else
                div.style.rotation = -45;
            parent.div.addChild(div);
        }
        
    }
    public div = new vfui.Container();
    public parent:Node;
    public isLeft = false;
    public leftChild:Node = null;
    public rightChild:Node = null;
}

export default class TestRect {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app, uiStage)
    }

    protected treeI = 0; // 二叉树节点字符数组遍历索引
    protected treeL = 0; // 树的深度索引
    protected printArr = [];
    // 生成二叉树
    // @params {Node} node 节点
    // @params {number} layer 当前树层度
    // @params {Node} parent 父节点
    protected createBiTree(node:Node, layer:number) {
        console.log(this.treeI);
        if(layer>2){
            return;
        }
        this.treeI++;
        node.leftChild = new Node(node);
        node.leftChild.isLeft = true;
        this.createBiTree(node.leftChild, ++layer);
        node.rightChild = new Node(node);
        this.createBiTree(node.rightChild, layer);
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let root = new vfui.Container();
        root.style.backgroundColor = 0x136086;
        root.style.height = 10;
        root.style.width = 100;
        root.style.bottom = 0;
        root.style.left = " 50%";
        root.style.pivotX = 5;
        root.style.pivotY = 5;
        root.style.rotation = -95;
        uiStage.addChild(root);

        setTimeout(() => {
            new vfui.Tween(root.style).to({rotation:-85,scaleX:0.72,scaleY:0.72},2000)
            .repeat(Infinity)
            .easing(vfui.Easing.Linear.None)
            .yoyo(true)
            .start(0);
        }, 1000);


        let rootNode = new Node(undefined,root);
        this.createBiTree(rootNode,0);
        console.log(rootNode);
        return;
        // let rect = new vfui.Rect();
        // rect.style.left = 0;
        // rect.style.top = 0;
        // rect.style.right = 100;
        // rect.style.width = 100;//占位
        // rect.style.height = 100;
        // rect.style.position = "fixed";
        // //rect.style.center = "center";
        // // rect.style.scaleX = 1.5;
        // // rect.style.scaleY = 1.5;

        // rect.customizeStyle.color = 0xffffff;
        // rect.customizeStyle.lineColor = 0xff00cc;
        // rect.customizeStyle.lineWidth = 1;
        // rect.customizeStyle.radius = 10;

        /** 绘制矩形 */
        let rect = new vfui.Rect();
        rect.x = 200;
        rect.y = 200;
        // 方法绘制 - 高效
        //rect.drawRoundedRect(rx,ry,width,height,radius,fill); //绘制内部
        // 属性绘制 - 低效
        rect.rx = 0;//绘制的起始坐标
        rect.ry = 0;
        rect.width = 160;
        rect.height = 160;
        rect.radius = 0;
        rect.fill = 0x0000ff;
        uiStage.addChild(rect);

        let count = 0;
        vfui.TickerShared.addUpdateEvent((delta: number) => {
            count += delta;
            if (count > 50) {
                vfui.Tween.core.removeAll();
                new vfui.Tween(rect)
                    .to({ rotation: rect.rotation + 1 }, 100)
                    .easing(vfui.Easing.Linear.None)
                    .start();
            }

        }, this);
    }

}

