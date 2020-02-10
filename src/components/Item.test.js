import React from 'react';
import {shallow} from 'enzyme';
import Item from './Item';
import {findByAttr, storeFactory} from "../_tests/testUtils";

const setup = (props) => {
    const defaultProps = {
        isFavourite : false,
        genres : {},
        rating : {
            average : ''
        }
    };
    const store = storeFactory();
    const newProps = {...defaultProps, ...props};
    return shallow(<Item item={newProps} store={store}/>).dive();
};

describe('render', () => {
    test('renders component without errors', () => {
        const wrapper = setup();
        const component = findByAttr(wrapper, 'component-item');
        expect(component.length).toBe(1);
    });
    test('renders title', () => {
        const wrapper = setup();
        const title = findByAttr(wrapper, 'item-title');
        expect(title.length).toBe(1);
    });
    test('renders image', () => {
        const wrapper = setup();
        const image = findByAttr(wrapper, 'item-image');
        expect(image.length).toBe(1);
    });
    test('renders remove button if prop favorite is `true`', () => {
        const wrapper = setup({ isFavourite: true});
        const button = findByAttr(wrapper, 'remove-button');
        expect(button.length).toBe(1);
    });
    test('renders add button if prop favorite is `false`', () => {
        const wrapper = setup({ isFavourite: false});
        const button = findByAttr(wrapper, 'add-button');
        expect(button.length).toBe(1);
    });
    test('renders premired date', () => {
        const wrapper = setup();
        const premiered = findByAttr(wrapper, 'item-premiered');
        expect(premiered.length).toBe(1);
    });
    test('renders genres', () => {
        const wrapper = setup();
        const genres = findByAttr(wrapper, 'item-genres');
        expect(genres.length).toBe(1);
    });
    test('renders rating', () => {
        const wrapper = setup();
        const rating = findByAttr(wrapper, 'item-rating');
        expect(rating.length).toBe(1);
    });
    test('renders more information button', () => {
        const wrapper = setup();
        const button = findByAttr(wrapper, 'more-information-button');
        expect(button.length).toBe(1);
    });
});
