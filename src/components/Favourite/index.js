import React from "react";
import {connect} from 'react-redux';
import {fetchFavourite} from "../../actions/favourite";
import {selectFavorList} from "../../selectors";
import List from "../List";
import Container from "@material-ui/core/Container";

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

export default connect(mapStateToProps, {fetchFavourite}) (Favourite);
