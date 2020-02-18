import React from "react";
import {connect} from 'react-redux';
import {fetchFavourite} from "../../actions/favourite";
import {selectFavorList} from "../../selectors";
import List from "../List";
import Container from "@material-ui/core/Container";
import PropTypes from 'prop-types';

class Favourite extends React.Component{
    constructor(props) {
        super(props);
        props.fetchFavourite();
    }
    render() {
        return (
            <div className="favourite">
                <Container maxWidth="lg">
                    <List list={this.props.list}/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list : selectFavorList(state)
});

Favourite.propTypes = {
    fetchFavourite : PropTypes.func,
    list : PropTypes.array
};

export default connect(mapStateToProps, {fetchFavourite}) (Favourite);
