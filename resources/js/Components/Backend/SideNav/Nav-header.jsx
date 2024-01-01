import React from 'react';

function NavHeader({name}) {
    return (
        <li className="menu-header fw-medium mt-4">
            <span className="menu-header-text">{name}</span>
        </li>
    );
}

export default NavHeader;
