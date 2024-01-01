import React from 'react';
import {Link} from "@inertiajs/react";
import {IoHomeOutline} from "react-icons/io5";

function NavLink({name, url, icon, isActive, className}) {
    return (
        <li className={`menu-item ${isActive && "active"}`}>
            <Link href={url} className="menu-link">
                {icon}
                <div>{name}</div>
            </Link>
        </li>
    );
}

export default NavLink;
