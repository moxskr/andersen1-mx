import React from 'react';
import List from "../List";
import {connect} from "react-redux";
import {selectList} from "../../selectors";
import {Container} from "@material-ui/core";

const Home = (props) => {
    return <section className="home">
        <Container>
            <List list={props.list}/>
        </Container>
    </section>
};

const mapStateToProps = state => ({
    list : selectList(state)
});

export default connect(mapStateToProps)(Home);
