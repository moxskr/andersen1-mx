import {SET_FILTER} from "../actionTypes";

const init = {
    filterDate : ''
};

export default (state = init, {type, payload}) => {
    switch(type) {
        case SET_FILTER :
            return {
                ...state,
                filterDate: payload
            };
        default: return state;
    }
}
