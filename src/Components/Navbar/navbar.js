import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navBar">
            <h1 className="app-title">Time Station</h1>
            <button className="add-tz">+</button>
        </div>
    )
}

export default Navbar;