import { DynamicTextStyle } from "./DynamicTextStyle";

export class DynamicText{
    public dirtyStyle = false;

    public update(){
        
    }
}


//Atlas
/**
 * @private
 */
export const metricsCanvas = document.createElement("canvas");
/**
 * @private
 */
export const  metricsContext = metricsCanvas.getContext("2d");
metricsCanvas.width = 100;
metricsCanvas.height = 100;

export class DynamicAtlas{
    public getCharObject(char: string, style: DynamicTextStyle) {
        const width = 0;
        return {width,char,style};
    }
}