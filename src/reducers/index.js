import {combineReducers} from "redux";
import search from "./search";
import favourite from "./favourite";
import filter from './filter';

export default combineReducers({
    search,
    favourite,
    filter
});
