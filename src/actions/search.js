import { saveToLocal } from "../utils/api";
import {FETCH_BY_SEARCH_ERROR, FETCH_BY_SEARCH_REQUEST, FETCH_BY_SEARCH_SUCCESS} from "../actionTypes";

export const setSearch = text => async (dispatch) => {
    dispatch({
        type : FETCH_BY_SEARCH_REQUEST
    });
    saveToLocal(text);

    try{
        const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${text}`);
        const data = await resp.json();
        dispatch({
            type : FETCH_BY_SEARCH_SUCCESS,
            payload : data
        })
    }
    catch (e) {
        dispatch({
            type: FETCH_BY_SEARCH_ERROR
        });
        console.log(e);
    }
};

