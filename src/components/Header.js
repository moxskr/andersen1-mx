import React from "react";
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";

const Header = () => <header className="header">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 header--logo">
                <Link to="/">
                    <h3>Logo</h3>
                </Link>
            </div>
            <div className="col-lg-4 header--search d-flex align-items-center">
                <SearchInput/>
            </div>
            <div className="col-lg-1 d-flex align-items-center justify-content-end">
                <Link to="/favourite" className="btn btn-outline-success">Favourite</Link>
            </div>
        </div>
    </div>
</header>;

export default Header;
