import React from 'react';
import Avatars1 from "../../../../img/avatars/1.png"
import {Link} from "@inertiajs/react";
import User from "@/Components/Backend/TopNav/User/index.jsx";
import Search from "@/Components/Backend/TopNav/Search/index.jsx";

function IoMdMenu() {
    return null;
}

function Index(props) {
    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <Link className="nav-item nav-link px-0 me-xl-4" href="#">
                    <IoMdMenu/>
                </Link>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <Search/>
                <User/>
            </div>
        </nav>
    );
}

export default Index;
