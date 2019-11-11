import gui from "../src/vf-gui";

export default class TestTimeLine {

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        this.onLoad(app, uiStage);
    }


    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        let sheep = new Sheep();
        uiStage.addChild(sheep.shape);

        let sheepline = new gui.Timeline();
        //设置动画对象、时间、帧率
        sheepline.setDefault(sheep, 3000, 30);
        sheepline.addProperty("progress", 100, 30);
        sheepline.addProperty("progress", 200, 40,gui.Easing.Linear.None);
        sheepline.addProperty("progress", 300, 50);
        sheepline.addProperty("progress", 400, 60);
        sheepline.addProperty("progress", 500, 70);
        sheepline.addProperty("progress", 600, 80);
        sheepline.addProperty("progress", 1000, 90);

        sheepline.addProperty("y", 30, 60);
        sheepline.addProperty("y", 0, 90);
        sheepline.loop = true;
        sheepline.load();


        sheepline.on(gui.Interaction.ComponentEvent.COMPLETE,()=>{
            console.log("COMPLETE");
        });

        sheepline.on(gui.Interaction.ComponentEvent.LOOP,()=>{
            console.log("LOOP");
        });

        let slider = new gui.Slider();
        slider.vertical = false;
        slider.thumb = "assets/skin/Slider/thumb.png";
        slider.track = "assets/skin/Slider/track.png";
        slider.tracklight = "assets/skin/Slider/tracklight.png";
        slider.maxValue = 90;
        slider.style.width = 500;
        slider.style.height = 10;
        slider.style.bottom = 50;
        slider.style.left = 150;
        slider.value = 0; 
        uiStage.addChild(slider);

        let count = 0
        slider.on(gui.Interaction.ComponentEvent.CHANGEING, (slider:gui.CheckBox,curValue: number) => {
            if(count == 0){
                count++;
                return;
            }
            console.log(count);
            sheepline.loop = false;
            sheepline.gotoAndStop(curValue);
        });
       
    }

}

class Sheep{

    public constructor(){
        this.shape.graphics.lineStyle(1,0xff00cc);
    }

    private _lastPoint:number[] = [];
    private _paths = ("M 343.5 646.6 L 343.5 646.6 C 343.5 646.6 357.2 683.2 355.8 696.8 C 322.1 685.6 319.8 692.8 319.8 692.8 C 319.8 692.8 320.1 698.8 330.1 704.5 C 340.1 710.2 341.1 713.5 341.1 713.5 C 341.1 713.5 327 717.8 319.8 718.5 C 313.6 719.1 299.9 664 300.1 659.5 C 300.2 655.9 302.1 650 301.1 639 C 300.2 629.5 296.1 615.5 292.6 608.5 C 290.1 603.6 276.6 571.5 261.1 557.5 C 254.6 529.5 256.1 473.3 230.1 472.5 C 236.6 497 252.6 525.9 243.1 548 C 240.1 555 192.4 534.3 187.1 541.5 C 179.4 552 238.6 553.5 260.2 576.9 C 286.7 608 291.2 645.5 284.5 650.8 C 279.3 655 228.9 626.3 227.8 628.8 C 225.4 634.2 236.8 645.1 249.8 651.5 C 263.9 658.5 283.8 671 287.8 678.8 C 291.4 685.7 306.6 709.8 299.8 717.5 C 297.1 720.5 253.1 690.5 239.6 681.7 C 230.4 675.7 208.1 652.9 183.6 625.9 C 182.1 604.9 176.8 597.6 173.3 593.6 C 169.8 589.6 151.5 572.8 145.8 569.6 C 140.2 566.5 122.9 559.7 141 576.3 C 162.7 596.3 165.2 621.5 165.2 621.5 C 165.2 621.5 103.2 605.7 116.8 615.9 C 137.7 631.6 144.6 628.5 155.2 632.5 C 171.2 636.9 220.2 676.4 215.9 680.2 C 209.2 686 160.2 697.1 161.3 701 C 162.9 706.8 209.3 693.9 224.3 695.2 C 247.5 697.1 289.3 724.9 287.2 728.2 C 284.8 731.9 267.8 737.7 260.5 740.2 C 255.3 742 235.3 740.9 236.7 746.3 C 238 751.5 257.5 749.2 261.5 748.7 C 269.7 747.7 308.5 736.2 308.5 736.2 C 308.5 736.2 306.8 751.6 301 758.9 C 297.2 763.6 268.9 781.8 295 774.4 C 310.2 770.1 320.2 734.8 323.2 734.2 C 326 733.6 350.9 729.4 352.5 731.2 C 356.2 735.2 360.6 751.5 360.6 751.5 C 363.1 758.6 368.4 767.3 372.7 772.5 C 377.7 784.5 376.6 798.4 379.9 800.7 C 404 798.5 408.9 761.9 415.2 747.5 C 420.5 735.4 420.2 734.9 422.5 728.7 C 424.7 723.1 426.9 720 429.1 713 C 429.8 710.7 430.8 706.8 432 702.4 C 432.6 699.9 435.5 692.5 435.5 692.5 C 436.9 687.4 442.9 674.7 445 671.9 C 446.9 669.4 461.8 640.6 462.2 649.2 C 467.9 647.9 472.2 646.7 474.2 644.9 C 476.7 646.2 481.9 642.3 482.9 644.2 C 484.1 646.4 490.9 645.7 492.6 642.9 C 498.6 646.9 502.7 667 501.2 694.5 C 499.7 722 500.5 770.5 500.2 772.3 C 499.9 774.1 496.4 776.9 494.4 780.1 C 492.4 783.3 491.9 790.6 491.9 790.6 L 486.6 797.6 C 486.6 797.6 515.6 805.8 520.4 800.6 C 525.2 795.4 519.9 779.1 523.7 762.6 C 519.9 747.4 523.2 725.6 528.2 714.1 C 526.9 708.9 528.7 692.1 528.7 692.1 C 525.5 675.3 529.5 648.6 534 634.3 C 540 641.3 538.2 672.8 541 706.1 C 549.8 728.6 549 738.2 550.3 748.4 C 551.6 758.6 554.4 770.1 554.6 777.4 C 554.8 784.7 555.1 788.9 554.3 790.7 C 553.5 792.5 550 801 550 801 L 570.5 801.3 C 570.5 801.3 569 794 572.8 793.3 C 576.6 792.6 581.1 792.3 581.1 789.8 C 581.1 787.3 576.1 777.5 575.1 772.5 C 574.1 767.5 574.6 764.3 575.9 757.5 C 573.1 712 568.9 699.2 568.1 694.2 C 567.3 689.2 568.8 674.4 570.1 663.9 C 571.4 653.4 571.1 644.1 571.9 633.1 C 578.4 633.9 621 628.6 630.2 625.6 C 639.4 622.6 653.9 613.3 665.7 606.3 C 667.2 622.3 693.7 669.8 696.2 677.8 C 698.7 685.8 689 730.3 688.2 740.8 C 687.4 751.3 684.7 775.8 676.9 786.8 C 669.1 797.8 669.9 801.6 669.9 801.6 C 669.9 801.6 680.7 801.6 691.7 801.3 C 691.7 798 692.5 792.5 696 791.5 C 699.5 790.5 706.3 792.6 707.5 791.8 C 708.7 791 704.5 773.2 704.2 767.5 C 703.9 761.8 706.4 760.5 707.7 754.5 C 709 748.5 712 730.4 713 725.2 C 714 720 719.3 682.6 720.6 675.8 C 721.9 669 720.1 665 719.1 648 C 728.9 654.2 747.9 684.5 760.9 686.5 C 760.4 691 761.9 723.5 762.9 731.5 C 763.9 739.5 766.4 781 766.4 782.5 C 766.4 784 762.9 787 759.4 791 C 755.9 795 749.9 809.5 749.9 809.5 L 770.9 809.5 C 770.9 809.5 778.9 800 778.4 796.5 C 777.9 793 783.4 779 785.4 763 C 787.4 747 792.9 700 788.4 676 C 783.9 652 760.4 633.5 758.9 608 C 764.4 590 766.3 564 766.6 555.2 C 766.9 546.3 767.4 542 768.6 542 C 769.7 542 772.8 555.4 776.4 561.3 C 780 567.2 786.7 566.8 788.2 566.5 C 789.7 566.2 792.9 567.4 791.4 549.7 C 789.9 532 769.5 498.2 765.7 494.2 C 761.9 490.2 742.2 480.1 742.2 480.1 C 742.2 480.1 714 467.3 690.7 460.8 C 662.7 452.9 591.7 453 582.7 454.5 C 574.3 455.9 536.5 466.5 523.7 472.5 C 512.4 477.9 492.5 487.5 478.7 501.2 C 468.9 511 438.1 546.6 429.5 566.8 C 422.3 583.7 409.1 618.7 401 635.7 C 392.8 653.1 377.9 681.3 378.5 680.6 C 379.1 679.9 376 671.1 369 661.6 C 361.5 651.4 343.5 646.6 343.5 646.6").split(" ");
    public shape =new  gui.Graphics();

    private oldValue = 0;
    private curValue = 0;

    public set progress(value:number){
        this.curValue = value;
        this.update();
    }
    public get progress(){
        return this.curValue;
    }

    public set y(value){
        this.shape.style.top = value;
    }
    public get y(){
        return this.shape.style.top;
    }

    private update(){
        
        if(this.oldValue>this.curValue){
            this.oldValue = 0;
            this.shape.graphics.clear();
            this.shape.graphics.lineStyle(1,0xff00cc);
        }

        for(let i = this.oldValue;i<this.curValue;i++){
            this.draw(i);
        }
        this.oldValue = this.curValue;
    }

    private draw(i:number){
        let paths = this._paths;
        let g = this.shape;

        if(paths[i] === "M"){
            this._lastPoint = [];
        }
        if(this._lastPoint.length>0){
            g.graphics.moveTo(this._lastPoint[0],this._lastPoint[1]);
        }
        switch(paths[i]){
            case "M":
                this._lastPoint = [parseFloat(paths[i+1]),parseFloat(paths[i+2])];
                g.graphics.moveTo(parseFloat(paths[i+1]),parseFloat(paths[i+2]));
                break;
            case "L":
                this._lastPoint = [parseFloat(paths[i+1]),parseFloat(paths[i+2])];
                g.graphics.lineTo(parseFloat(paths[i+1]),parseFloat(paths[i+2]));
                break;
            case "C":
                this._lastPoint = [parseFloat(paths[i+5]),parseFloat(paths[i+6])];
                g.graphics.bezierCurveTo(parseFloat(paths[i+1]),parseFloat(paths[i+2]),parseFloat(paths[i+3]),parseFloat(paths[i+4]),parseFloat(paths[i+5]),parseFloat(paths[i+6]));
                break;
                                        
        }
    }

}

