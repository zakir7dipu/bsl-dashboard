import React from 'react';

function Index(props) {
    return (
        <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
                <i className="mdi mdi-magnify mdi-24px lh-0"></i>
                <input
                    type="text"
                    className="form-control border-0 shadow-none bg-body"
                    placeholder="Search..."
                    aria-label="Search..."/>
            </div>
        </div>
    );
}

export default Index;
