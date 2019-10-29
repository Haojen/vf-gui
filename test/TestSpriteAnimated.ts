import vfui from "../src/pixi-vfui";

export default
    class TestSpriteAnimated {

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let sheetAnimated = new vfui.SpriteAnimated();
        sheetAnimated.style.left = 200;
        sheetAnimated.style.top = 500;

        sheetAnimated.props.animationSpeed = 0.1;
        sheetAnimated.props.animationName = "1";
        sheetAnimated.props.loop = true;
        sheetAnimated.props.src = PIXI.Loader.shared.resources["role"].spritesheet; //方式1，有可使用位图数组填充
        sheetAnimated.props.anchorX = 0.5;
        sheetAnimated.props.anchorY = 1;
        //sheetAnimated.props.src =[spritesheet.textures["1_role2-sheet1.png"],spritesheet.textures["1_role2-sheet2.png"]];
        
        sheetAnimated.play();

        uiStage.addChild(sheetAnimated);

        let clickAnimated = new vfui.Interaction.ClickEvent(sheetAnimated);
        clickAnimated.onClick = () => {
            if (sheetAnimated.props.animationName == "0") {
                sheetAnimated.props.animationName = "1";
            } else {
                sheetAnimated.props.animationName = "0";
            }

        }

        sheetAnimated.on(vfui.Interaction.ComponentEvent.LOOP,(sa:vfui.SpriteAnimated)=>{
            console.log("LOOP");
        });

        sheetAnimated.on(vfui.Interaction.ComponentEvent.COMPLETE,(sa:vfui.SpriteAnimated)=>{
            console.log("COMPLETE");
        });
    }

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        
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