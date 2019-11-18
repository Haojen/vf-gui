/**
 * 回放位置的相关操作函数
 */
export default class PlaybackPosition {
    constructor() { }

    private totalTime = 0;
    private labels: string[] = [];
    private offsets: number[] = [];

    public parseLabel(_name: string, offset: string | number | null) {
        const { offsets, labels } = this;
        let i = _name ? labels.indexOf(_name) : -1;
        if (typeof _name === 'string' && _name.indexOf('=') !== -1 && !offset && i === -1) {
            const rty = _name.substr(_name.indexOf('=') - 1, 2);
            const rt = _name.split(rty);
            offset = rt.length === 2 ? rty + rt[1] : null;
            _name = rt[0];
            i = labels.indexOf(_name);
        }
        if (i !== -1 && _name) {
            let currOffset = offsets[i] || 0;
            if (typeof offset === 'number') {
                currOffset = offset;
            } else if (typeof offset === 'string') {
                if (offset.indexOf('=') !== -1) {
                    const type = offset.charAt(0);
                    offset = Number(offset.substr(2));
                    if (type === '+' || type === '-') {
                        currOffset += parseFloat(type + offset);
                    } else if (type === '*') {
                        currOffset *= offset;
                    } else if (type === '/') {
                        currOffset /= offset;
                    } else if (type === '%') {
                        currOffset *= offset / 100;
                    }
                }
            }
            return currOffset;
        }
        return typeof offset === 'number' ? offset : 0;
    }

    public addLabel(_name: string, offset: string | number | null) {
        this.labels.push(_name);
        this.offsets.push(this.parseLabel(_name, offset));
        return this;
    }

    public setLabel(_name: string, offset: string | number | null) {
        const i = this.labels.indexOf(_name)
        if (i !== -1) {
            this.offsets.splice(i, 1, this.parseLabel(_name, offset));
        }
        return this;
    }

    public eraseLabel(_name: string, offset: string | number | null) {
        const i = this.labels.indexOf(_name)
        if (i !== -1) {
            this.labels.splice(i, 1);
            this.offsets.splice(i, 1);
        }
        return this;
    }
}
