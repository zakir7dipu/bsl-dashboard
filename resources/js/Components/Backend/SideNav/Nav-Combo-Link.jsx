import React, {createRef} from 'react';
import {Link} from "@inertiajs/react";

function NavComboLink({name, icon, children}) {
    const comboRef = createRef()

    const comboAction = (e) => {
        e.preventDefault()
        comboRef.current.classList.toggle("open")
    }

    return (
        <li ref={comboRef} className="menu-item">
            <Link href="#" className="menu-link menu-toggle waves-effect" onClick={e=>comboAction(e)}>
                {icon}
                <div>{name}</div>
            </Link>
            <ul className="menu-sub">
                {children}
            </ul>
        </li>
    );
}

export default NavComboLink;
