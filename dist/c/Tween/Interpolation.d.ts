/**
 * 差值计算列表
 * @namespace TWEEN.Interpolation
 * @example
 *
 * let bezier = vfui.tween.Interpolation.Bezier
 * new vfui.tween.Tween({x:0}).to({x:[0, 4, 8, 12, 15, 20, 30, 40, 20, 40, 10, 50]}, 1000).interpolation(bezier).start()
 * @memberof vfui.tween
 */
declare const Interpolation: {
    Linear(v: any, k: number, value: any): any;
    Bezier(v: any, k: number, value: any): any;
    CatmullRom(v: any, k: number, value: any): any;
    Utils: {
        Linear(p0: any, p1: any, t: any, v: any): any;
        Reset(value: any): any;
        Bernstein(n: any, i: any): number;
        Factorial: (n: any) => number;
        CatmullRom(p0: any, p1: any, p2: any, p3: any, t: any, v?: any): any;
    };
};
export default Interpolation;
