import { DisplayObject } from "./DisplayObject";


export class UIBase extends DisplayObject implements Lifecycle {

    public constructor() {
        super();
        throw "UIBase Deprecated, new -> DisplayObject";
    }
}