import vfui from "../src/vfui";

export default class TestTween {

    public constructor(app: PIXI.Application, uiStage: vfui.Stage) {
        this.onLoad(app,uiStage)
    }

    private onLoad(app: PIXI.Application, uiStage: vfui.Stage) {

        let t = new vfui.Text("点击方块，进行缓动演示");
        t.style.fill = "#FFFFFF";
        t.y = 50;
        uiStage.addChild(t);


        /** 常规缓动 + 反向 + 无限循环 */
        let r = new vfui.Rect();
        r.y = 150;
        r.x = 70;
        r.drawRoundedRect(-50, -50, 100, 100, 5, 0xffcc00);
        uiStage.addChild(r);
        let rc = new vfui.Interaction.ClickEvent(r);
        rc.onClick = e => {
            rc.remove();

            new vfui.tween.Tween(r)
                .to({ x: 200 }, 2000)
                .repeat(Infinity)
                .easing(vfui.tween.Easing.Elastic.InOut)
                .yoyo(true)
                .start();

            new vfui.tween.Tween(r)
                .to({ angle: 90 }, 2000)
                .repeat(Infinity)
                .easing(vfui.tween.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();

        }

        /** 颜色过度缓动 */
        let r2 = new vfui.Rect();
        r2.y = 280;
        r2.x = 70;
        r2.drawRoundedRect(-50, -50, 100, 100, 5, 0xffcc00);
        uiStage.addChild(r2);
        let rc2 = new vfui.Interaction.ClickEvent(r2);
        rc2.onClick = e => {
            rc2.remove();

            new vfui.tween.Tween({ color: "#" + r2.fill.toString(16), x: 70 })
                .to({ color: "#00ccff", x: 200 }, 2000)
                .easing(vfui.tween.Easing.Elastic.InOut)
                .repeat(Infinity)
                .yoyo(true)
                .on(vfui.tween.TweenEvent.update, (obj: any) => {
                    if (obj.color.indexOf("-") === -1) {//清除不规范色值
                        r2.fill = vfui.Utils.rgbStrToNumber(obj.color);
                        r2.x = Math.floor(obj.x);
                    }
                })
                .start();


        }


        //文字样式,延迟执行
        let r3 = new vfui.Text("文字样式变化", new vfui.TextStyle({ fill: ["#FFFFFF", "#FFFFFF", "#FFFFFF"] }));
        r3.y = 380;
        r3.x = 20;
        uiStage.addChild(r3);
        let rc3 = new vfui.Interaction.ClickEvent(r3);
        rc3.onClick = e => {
            rc3.remove();

            new vfui.tween.Tween(r3.style)
                .to({ letterSpacing: 10, fontSize: 40, fill: ["#00ccff", "#ffcc00", "#00ff00"] }, 2000)
                .easing(vfui.tween.Easing.Quadratic.InOut)
                .delay(1000)
                .repeat(Infinity)
                .yoyo(true)
                .start();



        }

    }
}  