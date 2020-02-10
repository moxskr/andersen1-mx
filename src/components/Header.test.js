import React from 'react';
import {shallow} from 'enzyme';
import Header from "./Header";
import {findByAttr} from "../_tests/testUtils";

const setup = () => shallow(<Header/>);

test('header renders without errors', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'component-header');
    expect(component.length).toBe(1);
});

test('favourite button renders without errors', () => {
    const wrapper = setup();
    const button = findByAttr(wrapper, 'favourite-button');
    expect(button.length).toBe(1);
});
