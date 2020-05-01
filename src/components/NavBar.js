import React from "react";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div className="navbar">
            <Logo />
            <ul className="navbar__menu">
                <li className="navbar__item">Home</li>
                <li className="navbar__item">About</li>
                <li className="navbar__item">Projects</li>
                <li className="navbar__item">Education</li>
                <li className="navbar__item">Experiance</li>
                <li className="navbar__item">Contact</li>
            </ul>
        </div>
    );
};

export default NavBar;
