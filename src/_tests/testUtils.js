import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from '../reducers';
import checkPropTypes from 'check-prop-types';

export const findByAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

export const storeFactory = initState =>createStore(reducer, initState, applyMiddleware(thunk));

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBe(undefined);
};
