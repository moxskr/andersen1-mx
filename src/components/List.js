import React from 'react';
import Item from "./Item";
import FilterDate from "./FilterDate";
import {connect} from 'react-redux';
import {selectFilterDate} from "../selectors";
import {filter} from "../utils/helper";
import PropTypes from 'prop-types';

const List = ({list, filterDate}) => {
    const filtered = filterDate ? filter(list, filterDate) : list;
    return  <>
        <FilterDate/>
        {!!filtered.length && filtered.map(item =>
        {
            return <Item
                key={item.show.id}
                item={item.show}
                obj={item}
            />
        })}
    </>
};

const mapStateToProps = state => ({
    filterDate : selectFilterDate(state)
});

List.propTypes = {
    filterDate : PropTypes.string
};

export default connect(mapStateToProps)(List);
