import React from "react";
import "./navbar.css";
import logo from "./logo.png";

const Navbar = (props) => {
    const setArrayTZnames = () => {
        return (
            <ul>
                {props.filterList.map(name => <li>{name}</li>)}
            </ul>
        );
    }
    
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
                onChange={e => props.addTZ(e.target.value.toLocaleLowerCase())}>
            </input>
            <div className="filter-tz">{setArrayTZnames()}</div>
            <button className="add-tz-btn">+</button>
            
        </div>
    )
}

export default Navbar;