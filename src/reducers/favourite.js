import {ADD_TO_FAVOURITE, DELETE_FROM_FAVOURITE, FETCH_FAVOURITE} from "../actionTypes";

const init = {
    favorList : []
};

export default (state = init, {type, payload}) => {
    switch (type) {
        case FETCH_FAVOURITE:
            console.log(payload)
            return {
                ...state,
                favorList: payload
            };
        case DELETE_FROM_FAVOURITE:
            return {
                ...state,
                favorList : state.favorList.filter(item => item.show.id !== payload.show.id)
            };
        default: return state;
    }
}
