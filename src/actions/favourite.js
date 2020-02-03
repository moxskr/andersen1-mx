import {ADD_TO_FAVOURITE, DELETE_FROM_FAVOURITE, FETCH_FAVOURITE} from "../actionTypes";
import {deleteItemFromFavourite, fetchItemsFromFavourite, saveToFavourite} from "../utils/api";

export const addToFavourite = item => {
    saveToFavourite(item);
    return({
        type : ADD_TO_FAVOURITE,
        payload : item
    });
};

export const removeFromFavourite = item => {
    deleteItemFromFavourite(item);
    return({
        type : DELETE_FROM_FAVOURITE,
        payload : item
    })
};

export const fetchFavourite = () => {
    return({
        type : FETCH_FAVOURITE,
        payload : fetchItemsFromFavourite()
    })
};
