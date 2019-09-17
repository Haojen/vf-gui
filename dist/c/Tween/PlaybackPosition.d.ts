/**
 * 回放位置的相关操作函数
 */
export default class PlaybackPosition {
    constructor();
    private totalTime;
    private labels;
    private offsets;
    parseLabel(_name: string, offset: string | number | null): number;
    addLabel(_name: string, offset: string | number | null): this;
    setLabel(_name: string, offset: string | number | null): this;
    eraseLabel(_name: string, offset: string | number | null): this;
}
