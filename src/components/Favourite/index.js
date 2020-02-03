import React from "react";
import {connect} from 'react-redux';
import {fetchFavourite} from "../../actions/favourite";
import {selectFavorList} from "../../selectors";
import List from "../List";

class Favourite extends React.Component{
    constructor(props) {
        super(props);
        props.fetchFavourite();
    }
    render() {
        return (
            <div className="favourite">
                <div className="container">
                    <div className="row">
                        <List list={this.props.list}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list : selectFavorList(state)
});

export default connect(mapStateToProps, {fetchFavourite}) (Favourite);
