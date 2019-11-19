
type ScaleMode = "noScale" | "showAll" | "noBorder" | "exactFit" | "fixedWidth" | "fixedHeight" | "fixedNarrow" | "fixedWide"
/**
 * @private
 * 更新播放器视口尺寸
 */
export default function  updateViewSize(app: PIXI.Application,canvasScaleFactor = 1,isWebGl =true,scaleMode: ScaleMode): void {  
    let top = 0;
    let canvas = app.view;
    let boundingClientWidth = window.innerWidth;
    let boundingClientHeight = window.innerHeight;
    let shouldRotate = false;
    let orientation = "auto";

    let screenWidth = shouldRotate ? boundingClientHeight : boundingClientWidth;
    let screenHeight = shouldRotate ? boundingClientWidth : boundingClientHeight;

    let stageSize = calculateStageSize(scaleMode,screenWidth, screenHeight, canvas.width, canvas.height);
    let stageWidth = stageSize.stageWidth;
    let stageHeight = stageSize.stageHeight;
    let displayWidth = stageSize.displayWidth;
    let displayHeight = stageSize.displayHeight;
    canvas.style.transformOrigin = "0% 0% 0px";
    if (canvas.width != stageWidth) {
        canvas.width = stageWidth;
    }
    if (canvas.height != stageHeight) {
        canvas.height = stageHeight;
    }
    let rotation = 0;
    if (shouldRotate) {
        if (orientation =="landscape") {// 默认横屏，舞台顺时针旋转90度
            rotation = 90;
            canvas.style.top = top + (boundingClientHeight - displayWidth) / 2 + "px";
            canvas.style.left = (boundingClientWidth + displayHeight) / 2 + "px";
        }
        else {// 默认横屏，舞台逆时针旋转90度
            rotation = -90;
            canvas.style.top = top + (boundingClientHeight + displayWidth) / 2 + "px";
            canvas.style.left = (boundingClientWidth - displayHeight) / 2 + "px";
        }
    }
    else {//适配屏幕
        canvas.style.top = top + (boundingClientHeight - displayHeight) / 2 + "px";
        canvas.style.left = (boundingClientWidth - displayWidth) / 2 + "px";
    }
    let scalex = displayWidth / stageWidth,
        scaley = displayHeight / stageHeight;
    let canvasScaleX = scalex * canvasScaleFactor;
    let canvasScaleY = scaley * canvasScaleFactor;
    if (!isWebGl) {
        canvasScaleX = Math.ceil(canvasScaleX);
        canvasScaleY = Math.ceil(canvasScaleY);
    }

    let m = new PIXI.Matrix();
    m.identity();
    m.scale(scalex / canvasScaleX, scaley / canvasScaleY);
    m.rotate(rotation * Math.PI / 180);

    canvas.style.transform =  `matrix(${m.a},${m.b},${m.c},${m.d},${m.tx},${m.ty})`;
    canvas.width = stageWidth * canvasScaleX;
    canvas.height = stageHeight * canvasScaleY;
}

/**
 * @private
 * 计算舞台显示尺寸
 * @param scaleMode 当前的缩放模式
 * @param screenWidth 播放器视口宽度
 * @param screenHeight 播放器视口高度
 * @param contentWidth 初始化内容宽度
 * @param contentHeight 初始化内容高度
 */
function calculateStageSize(
    scaleMode: ScaleMode,
    screenWidth: number,
    screenHeight: number,
    contentWidth: number,
    contentHeight: number) {

    let displayWidth = screenWidth;
    let displayHeight = screenHeight;
    let stageWidth = contentWidth;
    let stageHeight = contentHeight;
    let scaleX = (screenWidth / stageWidth) || 0;
    let scaleY = (screenHeight / stageHeight) || 0;
    switch (scaleMode) {
        case "exactFit":
            break;
        case "fixedHeight":
            stageWidth = Math.round(screenWidth / scaleY);
            break;
        case "fixedWidth":
            stageHeight = Math.round(screenHeight / scaleX);
            break;
        case "noBorder":
            if (scaleX > scaleY) {
                displayHeight = Math.round(stageHeight * scaleX);
            }
            else {
                displayWidth = Math.round(stageWidth * scaleY);
            }
            break;
        case "showAll":
            if (scaleX > scaleY) {
                displayWidth = Math.round(stageWidth * scaleY);
            }
            else {
                displayHeight = Math.round(stageHeight * scaleX);
            }
            break;
        case "fixedNarrow":
            if (scaleX > scaleY) {
                stageWidth = Math.round(screenWidth / scaleY);
            }
            else {
                stageHeight = Math.round(screenHeight / scaleX);
            }
            break;
        case "fixedWide":
            if (scaleX > scaleY) {
                stageHeight = Math.round(screenHeight / scaleX);
            }
            else {
                stageWidth = Math.round(screenWidth / scaleY);
            }
            break;
        default:
            stageWidth = screenWidth;
            stageHeight = screenHeight;
            break;
    }
    //宽高不是2的整数倍会导致图片绘制出现问题
    if (stageWidth % 2 != 0) {
        stageWidth += 1;
    }
    if (stageHeight % 2 != 0) {
        stageHeight += 1;
    }
    if (displayWidth % 2 != 0) {
        displayWidth += 1;
    }
    if (displayHeight % 2 != 0) {
        displayHeight += 1;
    }
    return {
        stageWidth: stageWidth,
        stageHeight: stageHeight,
        displayWidth: displayWidth,
        displayHeight: displayHeight
    }
}