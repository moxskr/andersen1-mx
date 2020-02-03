import {combineReducers} from "redux";
import search from "./search";
import favourite from "./favourite";

export default combineReducers({
    search,
    favourite
});
