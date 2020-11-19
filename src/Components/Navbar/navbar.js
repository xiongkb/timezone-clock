import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [searchState, setSearchState] = useState('close');

    function openSearch() {
        console.log("clicked")
        let btn = document.getElementsByClassName("add-tz-btn");
        console.log(btn);
        btn[0].style.transform = 'rotate(90deg)';
        setTimeout(() => setSearchState("open"), 3000)
        
        
    }

    return (
        <div className="navBar">
            <h1 className="app-title">Time Station</h1>
            {searchState === 'open' ?
                <div>
                    <input className="search-bar" placeholder="Enter a timezone"></input>
                    <button className="close-tz-btn" onClick={() => setSearchState("close")}>-</button>
                </div> :
                <button className="add-tz-btn" onClick={() => {openSearch() }}>+</button>
            }
        </div>
    )
}

export default Navbar;