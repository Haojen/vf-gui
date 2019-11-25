import gui from "../src/vf-gui";

export default class TestSound {


    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

        let sound = new gui.Sound();
        sound.x = 100;
        sound.y = 100;
        sound.width = 100; //音频组件本身没有点击区域（0，0），设置宽高后会设置新的点击区域
        sound.height =100;
        sound.sheetSkin = PIXI.Loader.shared.resources["soundskin"].spritesheet;//spritesheet格式中animations需要包含play与stop动作
        sound.loop = true;
        sound.volume = 0.5;
        sound.startTime = 0;
        sound.endTime = 2;//音频播放区间未0-2秒
        sound.autoPlay = false;
        sound.groupName = "a1";//属于a1组的音频互斥
        sound.src = "./assets/test.mp3";
        uiStage.addChild(sound);
        //sound.play();

        // setTimeout(() => {
        //     sound.pause();
        // }, 2000);

        // setTimeout(() => {
        //     sound.resume();
        // }, 4000);


        sound.on(gui.Interaction.ComponentEvent.CHANGEING,(sd:gui.Sound,progress:number)=>{
            //console.log("CHANGEING",progress,sd.duration);
        });

        sound.on(gui.Interaction.ComponentEvent.LOOP,(sd:gui.Sound)=>{
            console.log("LOOP"); //sound.loop = true时
        });


        let sound2 = new gui.Sound();
        sound2.x = 220;
        sound2.y = 100;
        sound2.width = 100;
        sound2.height =100;
        sound2.sheetSkin = PIXI.Loader.shared.resources["soundskin"].spritesheet;//spritesheet格式中animations需要包含play与stop动作
        sound2.loop = false;
        sound2.volume = 100;
        sound2.autoPlay = false;
        sound2.groupName = "a1";//属于a1组的音频互斥
        sound2.src = "./assets/test.mp3";
        uiStage.addChild(sound2);


        sound2.on(gui.Interaction.ComponentEvent.COMPLETE,(sd:gui.Sound)=>{
            console.log("COMPLETE"); //sound.loop = false时
        });
    }

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        
        const loader = PIXI.Loader.shared;

        loader.add("soundskin", 'assets/skin/Sound/sound.json').load((loader: PIXI.Loader, resources: any) => {
            this.onLoad(app, uiStage);
        });
    }

}

