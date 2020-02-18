import {storeFactory} from "./_tests/testUtils";
import {setSearch} from "./actions/search";
import {setFilter} from "./actions/filter";
import {addToFavourite} from "./actions/favourite";
import moxios from 'moxios';

describe('state', () => {
    let store;
    const initState = {
        search : {
            list : [],
        },
        favourite : {
            favorList : []
        },
        filter : {
            filterDate : ''
        }
    };
    beforeEach(() => {
        store = storeFactory(initState);
        moxios.install();
        moxios.stubRequest('http://api.tvmaze.com/search/shows?q=game', {
            response : 200
        });
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test('list is empty if input is empty', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({ status : 200, response : [] });
        });
        store.dispatch(setSearch(''));
        const expectedState = initState;
        const newState = store.getState();
        expect(newState).toEqual(expectedState);
    });
    test('list in non empty if input value is equal `game`', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({ status : 200, response : [{ score : 10, show : { title : '123' } }] });
        });
        store.dispatch(setSearch('game'))
            .then(() => {
                const newState = store.getState();
                expect(newState.search.list.length).not.toBe(0);
            });
    });
    test('filter state changes when dispatch filter action', () => {
        store.dispatch(setFilter('2019-02-10'));
        const newState = store.getState();
        expect(newState.filter.filterDate).not.toBe('');
    });
    test('adds to favourite', () => {
        store.dispatch(addToFavourite({ title : '123'}));
        const expectedState = {
            ...initState,
            favourite : {
                favorList: [{ title : '123'}]
            }
        };
        const newState = store.getState();
        expect(newState).toEqual(expectedState);
    });
});
