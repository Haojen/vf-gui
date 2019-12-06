import gui from "../src/vf-gui";

export default
    class TestSpriteAnimated {

    private onLoad(app: PIXI.Application, uiStage: gui.Stage) {

		/** 序列帧动画，设置spritesheet方式填充，或[texture1,textures2]方式 */
        let sheetAnimated = new gui.SpriteAnimated();
        sheetAnimated.style.left = 200;
        sheetAnimated.style.top = 500;

        sheetAnimated.animationSpeed = 0.1;
        sheetAnimated.animationName = "1";
		sheetAnimated.loop = true;
		sheetAnimated.loopCount = 30;//设置循环次数，0为不限制
        sheetAnimated.src = PIXI.Loader.shared.resources["role"].spritesheet; //方式1，有可使用位图数组填充
        sheetAnimated.anchorX = 0.5;
		sheetAnimated.anchorY = 1;
		
		// let spritesheet = PIXI.Loader.shared.resources["role"].spritesheet;
		// sheetAnimated.animationName = "default";
        // sheetAnimated.src =[spritesheet.textures["1_role2-sheet1.png"],spritesheet.textures["1_role2-sheet2.png"]];
        
        sheetAnimated.play();

        uiStage.addChild(sheetAnimated);

		sheetAnimated.isClick = true;
		sheetAnimated.on(gui.Interaction.TouchMouseEvent.onClick,()=>{
            if (sheetAnimated.animationName == "0") {
                sheetAnimated.animationName = "1";
            } else {
                sheetAnimated.animationName = "0";
            }
		});

        sheetAnimated.on(gui.Interaction.ComponentEvent.CHANGE,(sa:gui.SpriteAnimated)=>{
            console.log("CHANGE");
		});
		
        sheetAnimated.on(gui.Interaction.ComponentEvent.LOOP,(sa:gui.SpriteAnimated)=>{
            console.log("LOOP");
        });

        sheetAnimated.on(gui.Interaction.ComponentEvent.COMPLETE,(sa:gui.SpriteAnimated)=>{
            console.log("COMPLETE");
        });
    }

    public constructor(app: PIXI.Application, uiStage: gui.Stage) {
        
        const loader = PIXI.Loader.shared;

        loader.add("role", 'assets/1_role2/1_role2.json').load((loader: PIXI.Loader, resources: any) => {
            this.onLoad(app, uiStage);
        });
    }

}

/**
 *
 {"frames": {

	"1_role2-sheet0.png":
	{
		"frame": {"x":254,"y":1,"w":255,"h":391},
		"rotated": false,
		"trimmed": true,
		"spriteSourceSize": {"x":19,"y":3,"w":255,"h":391},
		"sourceSize": {"w":274,"h":394},
		"anchor": {"x":0.478102,"y":0.997462}
	},
	"1_role2-sheet1.png":
	{
		"frame": {"x":1,"y":1,"w":251,"h":394},
		"rotated": false,
		"trimmed": true,
		"spriteSourceSize": {"x":0,"y":0,"w":251,"h":394},
		"sourceSize": {"w":274,"h":394},
		"anchor": {"x":0.485401,"y":0.997462}
	},
	"1_role2-sheet2.png":
	{
		"frame": {"x":511,"y":1,"w":251,"h":391},
		"rotated": false,
		"trimmed": true,
		"spriteSourceSize": {"x":0,"y":3,"w":251,"h":391},
		"sourceSize": {"w":274,"h":394},
		"anchor": {"x":0.485401,"y":0.997462}
	}},
"animations": {
	"0": ["1_role2-sheet0.png"],
	"1": ["1_role2-sheet1.png","1_role2-sheet2.png"]
},
"meta": {
	"app": "https://www.codeandweb.com/texturepacker",
	"version": "1.0",
	"image": "1_role2.png",
	"format": "RGBA8888",
	"size": {"w":763,"h":396},
	"scale": "1",
	"smartupdate": "$TexturePacker:SmartUpdate:8d0d27b919b4fda6822284d52e1d67cd:c415d34ddf0629ae063141aa6244f453:ad483e3d8905e1e227b0a04d222a3ac4$"
}
}

 */