import React from 'react';
import List from "../List";
import {connect} from "react-redux";
import {selectList} from "../../selectors";

const Home = (props) => {
    return <section className="home">
        <div className="container">
            <div className="row">
                <List list={props.list}/>
            </div>
        </div>
    </section>
};

const mapStateToProps = state => ({
    list : selectList(state)
});

export default connect(mapStateToProps)(Home);
