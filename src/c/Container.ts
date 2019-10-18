import {UIBase} from "../core/UIBase";
import { _getSourcePath, hexToInt } from "../core/Utils";

/**
 * UI的显示容器
 *
 * @class
 * @extends PIXI.UI.UIBase
 * @memberof PIXI.UI
 * @param width {Number} 宽度
 * @param height {Number} 高度
 */
export class Container extends UIBase{
    public constructor(width?: number, height?: number){
        super(width,height);
        this._childrenStartIndex = 1;
        this._background = new PIXI.Graphics();
        //跳过uiChildren
        this.container.addChild(this._background);
        this._style.eventEmitter.on("ValueChangeEvent",this.onStyleValueChangeEvent,this);

    }

    protected _background:PIXI.Graphics;
    protected _dirtyBackgroundColor = false;
    protected _dirtyBackgroundImage = false;
    protected _dirtyBackgroundPostion = false;

    private onStyleValueChangeEvent(key:string,value:TAny){
        if(key === "backgroundColor"){
            this._dirtyBackgroundColor = true;
            return;
        }
        if(key === "backgroundImage"){
            this._dirtyBackgroundImage = true;
            return;
        }
        this._dirtyBackgroundPostion = true;
    }

    public update(){
        if(this._dirtyBackgroundColor){
            let {_style,_background} = this;
            _background.clear();
            if(_style.backgroundColor!==undefined){
                _background.clear();
                if(typeof _style.backgroundColor === "number"){
                    _background.beginFill(_style.backgroundColor);
                }else{
                    _background.beginFill(hexToInt(_style.backgroundColor,0xFFFFFF));
                }
                _background.drawRoundedRect(0,0,this._width,this._height,0);
                _background.endFill();
            }
            this._dirtyBackgroundColor = false;
        }
        if(this._dirtyBackgroundImage){
            let {_style,_background} = this;
            _background.removeChildren();
            let backgroundImage:PIXI.Texture|undefined;
            if(_style.backgroundImage instanceof PIXI.Texture){
                backgroundImage = _style.backgroundImage;
            }else if(typeof _style.backgroundImage === "string"){
                let url = _style.backgroundImage;
                if (_getSourcePath) {
                    url = _getSourcePath(url);
                }
                backgroundImage = PIXI.Texture.from(url);
            }
            if(backgroundImage){
                let sprite: PIXI.TilingSprite|PIXI.NineSlicePlane|PIXI.Sprite;
                if (_style.backgroundRepeat === "repeat") {
                    sprite = new PIXI.TilingSprite(backgroundImage);
                } else{
                    sprite = new PIXI.Sprite(backgroundImage);
                }
                _background.addChild(sprite);

                const maskGraphics = new PIXI.Graphics();
                maskGraphics.beginFill(0xFF3300);
                maskGraphics.drawRect(0,0, this._width,  this._height);
                maskGraphics.endFill();
                _background.addChild(maskGraphics);
                _background.mask = maskGraphics;
                
            }
            this._dirtyBackgroundImage = false;
        }
        let {_style,_background} = this;
        if( this._dirtyBackgroundPostion && _background.children.length>0){

            let sprite = _background.getChildAt(0) as PIXI.Sprite;
            if(sprite instanceof PIXI.TilingSprite){
                sprite.tilePosition.x = _style.backgroundPositionX || 0;
                sprite.tilePosition.y = _style.backgroundPositionY || 0;   
            }else{
                sprite.x = _style.backgroundPositionX || 0;
                sprite.y = _style.backgroundPositionY || 0;
                if(_style.backgroundSize!==undefined){
                    sprite.width =_style.backgroundSize[0];
                    sprite.height = _style.backgroundSize[1];
                } 
            }   


            this._dirtyBackgroundPostion = false;
        }

        
    }
    
    public release() {
        this._style.eventEmitter.removeAllListeners();
        super.release();
    }


}