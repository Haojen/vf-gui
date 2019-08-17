export class DynamicChar {
    //styledata (texture, orig width, orig height)
    public style: PIXI.TextStyle = new PIXI.TextStyle;

    //char data
    public data = null;

    //is this char space?
    public space = false;

    //is this char newline?
    public newline = false;

    public emoji = false;

    //charcode
    public charcode = 0;

    //char string value
    public value = "";

    //word index
    public wordIndex = -1;

    //line index of char
    public lineIndex = -1;
}