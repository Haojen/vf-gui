import {UIBase} from "../core/UIBase";
import { _getSourcePath, hexToInt, getTexture } from "../core/Utils";
import { CSSStyle } from "../layout/CSSStyle";

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
        this._background.name = "background";
        //跳过uiChildren
        this.container.addChild(this._background);

    }

    protected _background:PIXI.Graphics;

    public update(_style:CSSStyle){
        if(_style.dirty.background){
            let {_background} = this;
            _style.dirty.background = false;

            if(_style.backgroundColor!==undefined && _style.backgroundColor!=_style._oldValue.backgroundColor){
                _background.clear();
                if(typeof _style.backgroundColor === "number"){
                    _background.beginFill(_style.backgroundColor);
                }else{
                    _background.beginFill(hexToInt(_style.backgroundColor,0xFFFFFF));
                }
                _background.drawRoundedRect(0,0,this._width,this._height,0);
                _background.endFill();
            }

            if(_style.backgroundImage!==undefined && _style.backgroundImage!=_style._oldValue.backgroundImage){
                _background.removeChildren();
                let backgroundImage:PIXI.Texture|undefined;
                if(_style.backgroundImage instanceof PIXI.Texture){
                    backgroundImage = _style.backgroundImage;
                }else if(typeof _style.backgroundImage === "string"){
                    backgroundImage = getTexture(_style.backgroundImage);
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
            }

            if(_background.children.length>0){

                let sprite = _background.getChildAt(0) as PIXI.Sprite;
                if(sprite instanceof PIXI.TilingSprite){
                    sprite.tilePosition.set(_style.backgroundPositionX || 0,_style.backgroundPositionY || 0); 
                }else{
                    if(_style.backgroundSize!==undefined){
                        sprite.width =_style.backgroundSize[0];
                        sprite.height = _style.backgroundSize[1];
                    }
                    sprite.position.set(_style.backgroundPositionX || 0, _style.backgroundPositionY || 0) ;
                }   
            }

        }
          
    }
    
    public release() {
        this._style.eventEmitter.removeAllListeners();
        super.release();
    }


}