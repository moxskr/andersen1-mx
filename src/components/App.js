import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Favourite from "./Favourite";

const App = () => {
    return <Router>
        <Switch>
            <Layout>
                <Route path="/favourite" exact component={Favourite}/>
                <Route path="/" exact component={Home}/>
            </Layout>
        </Switch>
    </Router>
};

export default App;
