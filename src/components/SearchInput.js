import React from 'react';
import {fetchFromLocal} from "../utils/api";
import {setSearch} from "../actions/search";
import {connect} from 'react-redux';

class SearchInput extends React.Component{
    constructor(props) {
        super(props);
        if(fetchFromLocal()) {
            this.props.setSearch(fetchFromLocal());
        }
        else{
            this.props.setSearch('');
        }
        this.state = {
            text : fetchFromLocal() || ''
        }
    }
    handleChange = e => {
        this.props.setSearch(e.target.value);
        this.setState({
            text : e.target.value
        })
    };
    render() {
        return <input
            type="text"
            placeholder="Search smth..."
            value={this.state.text}
            onChange={this.handleChange}
        />
    }
}

export default connect(null, {setSearch})(SearchInput);
