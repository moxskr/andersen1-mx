import React from 'react';
import {fetchFromLocal} from "../utils/api";
import {setSearch} from "../actions/search";
import {connect} from 'react-redux';
import Input from "@material-ui/core/Input";
import {withStyles} from "@material-ui/core/styles";

const styles =  {
    input : {
        padding : '5px',
        backgroundColor : '#fff',
        borderRadius : '4px',
        width : '100%'
    }
};

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
        const {classes} = this.props;
        return <Input
            data-test="component-search-input"
            className={classes.input}
            type="text"
            placeholder="Search smth..."
            value={this.state.text}
            onChange={this.handleChange}
        />
    }
}

export default connect(null, {setSearch})(withStyles(styles)(SearchInput));
