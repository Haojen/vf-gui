import { EaseBase } from "./EaseBase";

/**
 * 设置缓动指数差值
 * @default 2
 * 
 * @see https://docs.microsoft.com/en-us/previous-versions/windows/silverlight/dotnet-windows-silverlight/dd431601(v=vs.95)
 */
export class ExponentialEase extends EaseBase{
    public constructor(power: number, easeIn?: number, easeOut?: number){
        super();
        this.pow = power;
        this.t = easeIn && easeOut ? 3 : easeOut ? 1 : 2;
    }

    private pow: number;
    private t: number;

    public getPosition(p: number){
        const t = this.t;
        const pow = this.pow;
        let r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
        if (pow === 1) {
            r *= r;
        } else if (pow === 2) {
            r *= r * r;
        } else if (pow === 3) {
            r *= r * r * r;
        } else if (pow === 4) {
            r *= r * r * r * r;
        }
        return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
    }
}