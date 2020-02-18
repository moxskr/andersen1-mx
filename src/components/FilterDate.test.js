import React from 'react';
import {shallow} from 'enzyme';
import {findByAttr, storeFactory} from "../_tests/testUtils";
import FilterDate from "./FilterDate";

const setup = initState => {
    const store = storeFactory(initState);
    return shallow(<FilterDate store={store}/>).dive().dive().dive();
};

describe('renders', () => {
   test('renders component without error', () => {
        const wrapper = setup();
        const component = findByAttr(wrapper, 'component-filter');
        expect(component.length).toBe(1);
   });
   test('renders data picker', () => {
       const wrapper = setup();
       const dataPicker = findByAttr(wrapper, 'date-picker');
       expect(dataPicker.length).toBe(1);
   });
   test('renders submit button if there is no filter in state', () => {
       const wrapper = setup({
           filter : {
               filterDate : ''
           }
       });
       const button = findByAttr(wrapper, 'submit');
       expect(button.length).toBe(1);
   });
   test('renders cancel button if there is a filter in state', () => {
        const wrapper = setup({
            filter : {
                filterDate: '2019-02-10'
            }
        });
        const button = findByAttr(wrapper, 'cancel');
        expect(button.length).toBe(1);
   });
});
