import filter from './filter';
import {SET_FILTER} from "../actionTypes";

test('returns empty string when there is no filter', () => {
    const newState = filter({ filterDate : ''}, {type : '', payload : ""});
    expect(newState.filterDate).toBe('');
});

test('returns date when there is a filter', () => {
    const newState = filter({ filterDate: ''}, {type : SET_FILTER, payload : '2019-02-10'});
    expect(newState.filterDate).toBe('2019-02-10');
});
