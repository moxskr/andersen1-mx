import favourite from "./favourite";
import {ADD_TO_FAVOURITE, DELETE_FROM_FAVOURITE} from "../actionTypes";

test('returning object with an empty favorList', () => {
    const newState = favourite({ favorList : [] }, {type : null, payload : null});
    expect(newState.favorList.length).toBe(0);
});

test('add to favourite', () => {
    const newState = favourite({ favorList : [] }, {type : ADD_TO_FAVOURITE, payload : {title : '123'}});
    expect(newState.favorList.length).not.toBe(0);
});

test('delete from favourite', () => {
    const newState = favourite({ favorList : [{title : '123', show : {id : 1}}]}, {type : DELETE_FROM_FAVOURITE, payload : {title : '123', show : {id : 1}}});
    expect(newState.favorList.length).toBe(0);
});
