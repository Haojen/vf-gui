import TestContainer from "./TestContainer";
import TestRect from "./TestRect";
import { UIBase } from "../src/UI";
import TestSprite from "./TestSprite";

let type = "TestSprite";
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
        
}
