import vfui from "./index";

export default class TestTilingSprite {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        /** 平铺的图片，可调整内部缩放与位置 */
        let tilingSprite = new vfui.TilingSprite();
        tilingSprite.width = 631;
        tilingSprite.height = 343;
        tilingSprite.source = "assets/pc.png";
        tilingSprite.x = app.view.width - tilingSprite.width >> 1;
        tilingSprite.y = app.view.height - tilingSprite.height >> 1;
        uiStage.addChild(tilingSprite);

        let count = 0;
        vfui.TickerShared.addUpdateEvent(() => {
            count += 0.005;
            //缩放
            tilingSprite.tileScale.x = 2 + Math.sin(count);
            tilingSprite.tileScale.y = 2 + Math.cos(count);
            //位置
            tilingSprite.tilePosition.x += 1;
            tilingSprite.tilePosition.y += 1;
        }, this);
    }

}

