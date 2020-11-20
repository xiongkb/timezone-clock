import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = (props) => {

    // rendering items
    return (
        <div className="navBar">
            <h1 className="app-title">Time Station</h1>
            <input 
                className="search-bar" 
                placeholder="ex: America/Los-Angeles" 
                onChange={e => props.addTZ(e.target.value)}>
            </input>
            <button className="add-tz-btn">+</button>
            
        </div>
    )
}

export default Navbar;