import React from "react";
import "./navbar.css";
import logo from "./logo.png"

const Navbar = (props) => {

    // rendering items
    return (
        <div className="navBar">
            <div>
                <img src={logo} alt="Red Clock" className="clock-logo"></img>
                <h1 className="app-title">Time Station</h1>
            </div>
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