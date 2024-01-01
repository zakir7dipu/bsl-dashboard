import React from 'react';
import {Link} from "@inertiajs/react";
import {IoCheckboxOutline, IoCubeOutline, IoDocumentAttachOutline, IoHomeOutline} from "react-icons/io5";
import NavLink from "@/Components/Backend/SideNav/Nav-Link.jsx";
import NavComboLink from "@/Components/Backend/SideNav/Nav-Combo-Link.jsx";
import {BsWindowFullscreen} from "react-icons/bs";
import {MdFlipToBack, MdOutlineDateRange, MdOutlineEmail} from "react-icons/md";
import NavHeader from "@/Components/Backend/SideNav/Nav-header.jsx";
import {CiChat1, CiGrid32, CiUnlock, CiViewTable} from "react-icons/ci";
import {FaIcons, FaRegCreditCard, FaRegStar, FaRegUser, FaWpforms} from "react-icons/fa";
import {FiArchive} from "react-icons/fi";
import {TbTableShare} from "react-icons/tb";
import {GiLifeBuoy} from "react-icons/gi";
import Style from "./Index.module.css"

function Index(props) {
    return (
        <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${Style.sidebar}`}>
            <div className="app-brand demo">
                <Link href="#" className="app-brand-link">
                    <span className="app-brand-text demo menu-text fw-semibold ms-2">Materio</span>
                </Link>

                <Link href="#" className="layout-menu-toggle menu-link text-large ms-auto">
                    <i className="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i>
                </Link>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                {/*Dashboards*/}
                <NavLink
                    name="Dashboards"
                    url={`#`}
                    isActive={true}
                    icon={<IoHomeOutline className="menu-icon"/>}
                />

                <NavComboLink
                    name={`Layouts`}
                    icon={<BsWindowFullscreen className="menu-icon"/>}
                >
                    <NavLink
                        name="Without menu"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Without navbar"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Container"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Fluid"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Blank"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                <NavComboLink
                    name={`Front Pages`}
                    icon={<MdFlipToBack className="menu-icon"/>}
                >
                    <NavLink
                        name="Landing"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Pricing"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Payment"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Checkout"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Help Center"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                <NavHeader
                    name={`Apps & Pages`}
                />

                {/*Apps*/}

                <NavLink
                    name="Email"
                    url={`#`}
                    isActive={false}
                    icon={<MdOutlineEmail className="menu-icon"/>}
                />

                <NavLink
                    name="Chat"
                    url={`#`}
                    isActive={false}
                    icon={<CiChat1 className="menu-icon"/>}
                />

                <NavLink
                    name="Calendar"
                    url={`#`}
                    isActive={false}
                    icon={<MdOutlineDateRange className="menu-icon"/>}
                />

                <NavLink
                    name="Kanban"
                    url={`#`}
                    isActive={false}
                    icon={<CiGrid32 className="menu-icon"/>}
                />


                {/*Pages*/}
                <NavComboLink
                    name={`Account Settings`}
                    icon={<FaRegUser className="menu-icon"/>}
                >
                    <NavLink
                        name="Account"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Notifications"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Connections"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                <NavComboLink
                    name={`Authentications`}
                    icon={<CiUnlock className="menu-icon"/>}
                >
                    <NavLink
                        name="Login"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Register"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Forgot Password"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                <NavComboLink
                    name={`Misc`}
                    icon={<IoCubeOutline className="menu-icon"/>}
                >
                    <NavLink
                        name="Error"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Under Maintenance"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                {/*Components*/}
                <NavHeader
                    name={`Components`}
                />

                {/*Cards*/}
                <NavLink
                    name="Cards"
                    url={`#`}
                    isActive={false}
                    icon={<FaRegCreditCard className="menu-icon"/>}
                />

                {/*User interface*/}
                <NavComboLink
                    name={`User interface`}
                    icon={<FiArchive className="menu-icon"/>}
                >
                    <NavLink
                        name="Accordion"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Alerts"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Badges"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Buttons"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Carousel"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Collapse"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Dropdowns"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Footer"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="List groups"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Modals"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Navbar"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Offcanvas"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Pagination &amp; Breadcrumbs"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Progress"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Spinners"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Tabs & Pills"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Toasts"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Tooltips &amp; popovers"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Typography"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                {/*Extended components*/}
                <NavComboLink
                    name={`Extended UI`}
                    icon={<FaRegStar className="menu-icon"/>}
                >
                    <NavLink
                        name="Perfect scrollbar"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Text Divider"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                {/*Icons*/}
                <NavLink
                    name="Icons"
                    url={`#`}
                    isActive={false}
                    icon={<FaIcons className="menu-icon"/>}
                />

                {/*Forms & Tables*/}
                <NavHeader
                    name={`Forms & Tables`}
                />

                {/*Forms*/}
                <NavComboLink
                    name={`Form Elements`}
                    icon={<FaWpforms className="menu-icon"/>}
                >
                    <NavLink
                        name="Basic Inputs"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Input groups"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                <NavComboLink
                    name={`Form Layouts`}
                    icon={<IoCubeOutline className="menu-icon"/>}
                >
                    <NavLink
                        name="Vertical Form"
                        url={`#`}
                        isActive={false}
                    />
                    <NavLink
                        name="Horizontal Form"
                        url={`#`}
                        isActive={false}
                    />
                </NavComboLink>

                {/*Form Validation*/}
                <NavLink
                    name="Form Validation"
                    url={`#`}
                    isActive={false}
                    icon={<IoCheckboxOutline className="menu-icon"/>}
                />

                {/*Tables*/}
                <NavLink
                    name="Table"
                    url={`#`}
                    isActive={false}
                    icon={<CiViewTable className="menu-icon"/>}
                />

                {/*Data Tables*/}
                <NavLink
                    name="Datatables"
                    url={`#`}
                    isActive={false}
                    icon={<TbTableShare className="menu-icon"/>}
                />

                {/*Misc*/}
                <NavHeader
                    name={`Misc`}
                />

                <NavLink
                    name="Support"
                    url={`#`}
                    isActive={false}
                    icon={<GiLifeBuoy className="menu-icon"/>}
                />

                <NavLink
                    name="Documentation"
                    url={`#`}
                    isActive={false}
                    icon={<IoDocumentAttachOutline className="menu-icon"/>}
                />
            </ul>
        </aside>
    );
}

export default Index;
