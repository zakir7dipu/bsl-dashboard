import React, {createRef, useEffect} from 'react';
import {Link} from "@inertiajs/react";
import Avatars1 from "../../../../../img/avatars/1.png";

function Index(props) {
    const parentRef = createRef()
    const childRef = createRef()
    const menuAction = (e) => {
        e.preventDefault()
        e.target.classList.toggle('show')
        childRef.current.classList.toggle('show')
    }

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (childRef.current && !childRef.current.contains(event.target)) {
                // Clicked outside the dropdown, close it
                childRef.current.classList.remove("show")
                parentRef.current.classList.remove("show")
            }
        };

        // Add event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[childRef])

    return (
        <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <Link
                    ref={parentRef}
                    className="nav-link dropdown-toggle hide-arrow p-0"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                    onClick={e => menuAction(e)}>
                    <div className="avatar avatar-online">
                        <img src={Avatars1} alt="" className="w-px-40 h-auto rounded-circle"/>
                    </div>
                </Link>
                <ul ref={childRef} className="dropdown-menu dropdown-menu-end mt-3 py-2" data-bs-popper="static">
                    <li>
                        <Link className="dropdown-item pb-2 mb-1" href="#">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-2 pe-1">
                                    <div className="avatar avatar-online">
                                        <img src={Avatars1} alt=""
                                             className="w-px-40 h-auto rounded-circle"/>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-0">John Doe</h6>
                                    <small className="text-muted">Admin</small>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown-divider my-1"></div>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="#">
                            <i className="mdi mdi-account-outline me-1 mdi-20px"></i>
                            <span className="align-middle">My Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="#">
                            <i className="mdi mdi-cog-outline me-1 mdi-20px"></i>
                            <span className="align-middle">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown-divider my-1"></div>
                    </li>
                    <li>
                        <Link
                            className="dropdown-item"
                            href={route('logout')}
                            method="post"
                            as="button">
                            <i className="mdi mdi-power me-1 mdi-20px"></i>
                            <span className="align-middle">Log Out</span>
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default Index;
