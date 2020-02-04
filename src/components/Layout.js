import React from "react";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout = ({children}) => {
    return <>
        <CssBaseline/>
        <Header/>
        {children}
    </>
};

export default Layout;
