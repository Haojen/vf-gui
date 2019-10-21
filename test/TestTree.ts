import vfui from "../src/pixi-vfui";

export default class TestRect {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app, uiStage)
    }

    protected treeI = 0; // 二叉树节点字符数组遍历索引
    protected treeL = 0; // 树的深度索引
    protected printArr = [];

    protected createBiTree(node:Node, layer:number) {
        if(layer>4){
            return;
        }
        this.treeI++;
        node.leftChild = new Node(node);
        node.leftChild.isLeft = true;
        node.leftChild.div.style.rotation = 35;
        this.createBiTree(node.leftChild, ++layer);
        node.rightChild = new Node(node);
        node.rightChild.div.style.rotation = -35;
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

        new vfui.Tween(root.style).to({rotation:-85},2000)
        .repeat(Infinity)
        .easing(vfui.Easing.Linear.None)
        .yoyo(true)
        .start(0);


        let rootNode = new Node(undefined,root);
        this.createBiTree(rootNode,0);

    }

}


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
        div.style.scaleX = 1;
        div.style.scaleY = 1;

        new vfui.Tween(div.style).to({rotation:0,scaleX:0.52,scaleY:0.52},2000)
        .repeat(Infinity)
        .easing(vfui.Easing.Linear.None)
        .yoyo(true)
        .start(0);

        if(root){
            root.addChild(div);
        }else{
            this.parent = parent;
            parent.div.addChild(div);
        }
        
    }

    public div = new vfui.Container();
    public parent:Node;
    public isLeft = false;
    public leftChild:Node = null;
    public rightChild:Node = null;
}

