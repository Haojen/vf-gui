import * as Utils from "./Utils";
import Stage from "./Stage";
import Container from "./c/Container";
import ScrollingContainer from "./c/ScrollingContainer";
import SortableList from "./c/SortableList";
import Sprite from "./c/Sprite";
import TilingSprite from "./c/TilingSprite";
import SliceSprite from "./c/SliceSprite";
import Slider from "./c/Slider";
import ScrollBar from "./c/ScrollBar";
import Text from "./c/Text";
import DynamicText from "./DynamicText/DynamicText";
import DynamicTextStyle from "./DynamicText/DynamicTextStyle";
import TextInput from "./c/TextInput";
import Button from "./c/Button";
import CheckBox from "./c/CheckBox";
import Tween from "./c/Tween";
import Ease from "./Ease/Ease";
import Interaction from "./Interaction/Index";


//注入常规兼容方法
if(!Array.from){
    Array.from = function (el: unknown[]) {
        return Array.apply(this, el);
    }
}
String.prototype.startsWith || (String.prototype.startsWith = function(word,pos?: number) {
    return this.lastIndexOf(word, pos || 0) === 0;
});

let  vfui = {
    Utils,
    Stage,
    Container,
    ScrollingContainer,
    SortableList,
    Sprite,
    TilingSprite,
    SliceSprite,
    Slider,
    ScrollBar,
    Text,
    DynamicText,
    DynamicTextStyle,
    TextInput,
    Button,
    CheckBox,
    Tween,
    Ease,
    Interaction

}
window.vfui= vfui;
export default vfui;