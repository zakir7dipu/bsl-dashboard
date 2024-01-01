import SideNav from "@/Components/Backend/SideNav/index.jsx";
import TopNav from "@/Components/Backend/TopNav/index.jsx";
import Footer from "@/Components/Backend/Footer/index.jsx";
import "../../css/core.css";
import "../../css/theme-default.css";
import "../../css/demo.css";

export default function Authenticated({user, header, children}) {

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SideNav/>
                <div className="layout-page">
                    <TopNav/>
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            {children}
                        </div>
                        <Footer/>
                        <div className="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
            {/*Overlay*/}
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    );
}
