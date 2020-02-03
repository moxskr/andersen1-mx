import {ADD_TO_FAVOURITE, DELETE_FROM_FAVOURITE, FETCH_BY_SEARCH_SUCCESS} from "../actionTypes";
import {isItemInFavourite} from "../utils/api";

const init = {
    list : []
};

export default (state = init, {type, payload}) => {
    switch (type) {
        case FETCH_BY_SEARCH_SUCCESS:
            return {
                ...state,
                list: payload.map(item => ({...item, show : {...item.show, isFavourite : isItemInFavourite(item)}}))
            };
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                list : state.list.map(item => item.show.id === payload.show.id ? ({...item, show : {...item.show, isFavourite : true}}) : item)
            };
        case DELETE_FROM_FAVOURITE:
            return {
                ...state,
                list : state.list.map(item => item.show.id === payload.show.id ? ({...item, show : {...item.show, isFavourite : false}}) : item)
            };
        default: return state;
    }
}
