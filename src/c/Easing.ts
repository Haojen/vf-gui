/**
 *  完整的缓动曲线列表
 * @namespace tween.Easing
 * @example
 *
 * // then set via new vfui.Tween({x:0}).to({x:100}, 1000).easing(tween.Easing.Quadratic.InOut).start()
 */
export const Easing = {
    Linear: {
        None(k: number) {
            return k;
        }
    },

    Quadratic: {
        In(k: number) {
            return Math.pow(k, 2);
        },

        Out(k: number) {
            return k * (2 - k);
        },

        InOut(k: number) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 2);
            }

            return -0.5 * (--k * (k - 2) - 1);
        }
    },

    Cubic: {
        In(k: number) {
            return Math.pow(k, 3);
        },

        Out(k: number) {
            return --k * k * k + 1;
        },

        InOut(k: number) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 3);
            }

            return 0.5 * ((k -= 2) * k * k + 2);
        }
    },

    Quartic: {
        In(k: number) {
            return Math.pow(k, 4);
        },

        Out(k: number) {
            return 1 - --k * k * k * k;
        },

        InOut(k: number) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 4);
            }

            return -0.5 * ((k -= 2) * k * k * k - 2);
        }
    },

    Quintic: {
        In(k: number) {
            return Math.pow(k, 5);
        },

        Out(k: number) {
            return --k * k * k * k * k + 1;
        },

        InOut(k: number) {
            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(k, 5);
            }

            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        }
    },

    Sinusoidal: {
        In(k: number) {
            return 1 - Math.cos((k * Math.PI) / 2);
        },

        Out(k: number) {
            return Math.sin((k * Math.PI) / 2);
        },

        InOut(k: number) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
    },

    Exponential: {
        In(k: number) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },

        Out(k: number) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },

        InOut(k: number) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }

            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        }
    },

    Circular: {
        In(k: number) {
            return 1 - Math.sqrt(1 - k * k);
        },

        Out(k: number) {
            return Math.sqrt(1 - --k * k);
        },

        InOut(k: number) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }

            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
    },

    Elastic: {
        In(k: number) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        },

        Out(k: number) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        },

        InOut(k: number) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            k *= 2;

            if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }

            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        }
    },

    Back: {
        In(k: number) {
            const s = 1.70158;

            return k * k * ((s + 1) * k - s);
        },

        Out(k: number) {
            const s = 1.70158;

            return --k * k * ((s + 1) * k + s) + 1;
        },

        InOut(k: number) {
            const s = 1.70158 * 1.525;

            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }

            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        }
    },

    Bounce: {
        In(k: number) {
            return 1 - Easing.Bounce.Out(1 - k);
        },

        Out(k: number) {
            let x = 2.75;
            let y = 7.5625;
            if (k < 1 / x) {
                return y * k * k;
            } else if (k < 2 / x) {
                return y * (k -= 1.5 / x) * k + 0.75;
            } else if (k < 2.5 / x) {
                return y * (k -= 2.25 / x) * k + 0.9375;
            } else {
                return y * (k -= 2.625 / x) * k + 0.984375;
            }
        },

        InOut(k: number) {
            if (k < 0.5) {
                return Easing.Bounce.In(k * 2) * 0.5;
            }

            return Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        }
    },

    Stepped: {
        steps: (steps: number) => (k: number) => ((k * steps) | 0) / steps
    }
}
