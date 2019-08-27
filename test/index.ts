import TestContainer from "./TestContainer";
import TestRect from "./TestRect";
import TestSprite from "./TestSprite";
import TestTicker from "./TestTicker";
import TestSliceSprite from "./TestSliceSprite";

let type = "TestSliceSprite";
switch(type){
    case "TestRect":
            new TestRect().load();
        break;
    case "Container":
            new TestContainer().load();
        break;
    case "TestSprite":
            new TestSprite().load();
        break;
    case "TestTicker":
        new TestTicker().load();
    break;
    case "TestSliceSprite":
        new TestSliceSprite().load();
    break;
        
}
