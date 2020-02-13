import React from "react";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return <>
        <CssBaseline/>
        <Header/>
        {children}
    </>
};

Layout.propTypes = {
    children : PropTypes.node
};

export default Layout;
