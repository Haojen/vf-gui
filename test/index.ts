import TestContainer from "./TestContainer";
import TestRect from "./TestRect";
import { UIBase } from "../src/UI";

let type = "Container";
switch(type){
    case "TestRect":
            new TestRect().load();
        break;
    case "Container":
            new TestContainer().load();
        break;
}
