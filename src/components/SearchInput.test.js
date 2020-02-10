import React from 'react';
import SearchInput from "./SearchInput";
import {shallow} from 'enzyme';
import {findByAttr, storeFactory} from "../_tests/testUtils";

const setup = (initState = {}) => {
    const store = storeFactory(initState);
    const wrapper = shallow(<SearchInput store={store}/>).dive().dive();
    wrapper.setState({'text' : ''});
    return wrapper;
};

describe('renders', () => {
    test('renders without errors', () => {
        const wrapper = setup();
        const component = findByAttr(wrapper, 'component-search-input');
        expect(component.length).toBe(1);
    });
    test('input updates the local state', () => {
        const wrapper = setup();
        const input = findByAttr(wrapper, 'component-search-input');
        const event = {
            target : { value : 'game' }
        };
        input.simulate('change', event);
        wrapper.update();
        expect(wrapper.state('text')).toBe('game');
    });
});
