import {SET_FILTER} from "../actionTypes";
import {saveDateToLocal} from "../utils/api";

export const setFilter = date => {
    saveDateToLocal(date);
    return ({
        type : SET_FILTER,
        payload : date
    });
};
