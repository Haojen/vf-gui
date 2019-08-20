import {EaseBase} from "./EaseBase";
import {ExponentialEase} from "./ExponentialEase";
/**
 * Math.PI * 0.5
 */
const HALF_PI = Math.PI * 0.5;
/** 
 * 线性 
 */
const Linear = new EaseBase();
/**
 * 创建一个基础的EaseBase
 * @param fn 需要实现的EaseBase.getPosition
 */
function create(fn: (number: number) => number) {
    const cls = new EaseBase();
    cls.getPosition = fn;
    return cls;
}

/**
 * Exponetial Eases
 * @param easeInFunction 
 * @param easeOutFunction 
 * @param easeInOutFunction 
 */
function wrapEase(easeInFunction: ExponentialEase, easeOutFunction: ExponentialEase, easeInOutFunction: ExponentialEase) {
    return {
        easeIn: easeInFunction,
        easeOut: easeOutFunction,
        easeInOut: easeInOutFunction
    };
}

export const Power0 = {
    "easeNone" : Linear,
};

export const Power1 = wrapEase(
    new ExponentialEase(1, 1, 0),
    new ExponentialEase(1, 0, 1),
    new ExponentialEase(1, 1, 1));


export const Power2 = wrapEase(
    new ExponentialEase(2, 1, 0),
    new ExponentialEase(2, 0, 1),
    new ExponentialEase(2, 1, 1));

export const Power3 = wrapEase(
    new ExponentialEase(3, 1, 0),
    new ExponentialEase(3, 0, 1),
    new ExponentialEase(3, 1, 1));

export const Power4 =  wrapEase(
    new ExponentialEase(4, 1, 0),
    new ExponentialEase(4, 0, 1),
    new ExponentialEase(4, 1, 1));

export {Power1 as Quad};
export {Power2 as Cubic};
export {Power3 as Quart};
export {Power4 as Quint};


//Bounce
export const Bounce = {
    "BounceIn": create(function (p) {
        if ((p = 1 - p) < 1 / 2.75) {
            return 1 - (7.5625 * p * p);
        } else if (p < 2 / 2.75) {
            return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
        } else if (p < 2.5 / 2.75) {
            return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
        }
        return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
    }),
    "BounceOut": create(function (p) {
        if (p < 1 / 2.75) {
            return 7.5625 * p * p;
        } else if (p < 2 / 2.75) {
            return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
        } else if (p < 2.5 / 2.75) {
            return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
        }
        return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
    }),
    "BounceInOut": create(function (p) {
        const invert = (p < 0.5);
        if (invert) {
            p = 1 - (p * 2);
        } else {
            p = (p * 2) - 1;
        }
        if (p < 1 / 2.75) {
            p = 7.5625 * p * p;
        } else if (p < 2 / 2.75) {
            p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
        } else if (p < 2.5 / 2.75) {
            p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
        } else {
            p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
        }
        return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
    })
};

//Circ
export const Circ = {
    "CircIn": create(function (p) {
        return -(Math.sqrt(1 - (p * p)) - 1);
    }),
    "CircOut": create(function (p) {
        return Math.sqrt(1 - (p = p - 1) * p);
    }),
    "CircInOut": create(function (p) {
        return ((p *= 2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
    })
};


//Expo
export const Expo = {
    "ExpoIn": create(function (p) {
        return Math.pow(2, 10 * (p - 1)) - 0.001;
    }),
    "ExpoOut": create(function (p) {
        return 1 - Math.pow(2, -10 * p);
    }),
    "ExpoInOut": create(function (p) {
        return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    })
};


//Sine
export const Sine = {
    "SineIn": create(function (p) {
        return -Math.cos(p * HALF_PI) + 1;
    }),
    "SineOut": create(function (p) {
        return Math.sin(p * HALF_PI);
    }),
    "SineInOut": create(function (p) {
        return -0.5 * (Math.cos(Math.PI * p) - 1);
    })
};

