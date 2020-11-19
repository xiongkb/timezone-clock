import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [searchState, setSearchState] = useState('close');

    function btnRotation() {
        let btn = document.getElementsByClassName("add-tz-btn");
        console.log(btn);
        btn[0].style.transform = 'rotate(90deg)';
        btn[0].style.transition = 'rotate(90deg)';
        setTimeout(() => setSearchState("open"), 1000)

    }

    function btnRotationClose() {
        let btn = document.getElementsByClassName("close-tz-btn");
        console.log(btn);
        btn[0].style.transform = 'rotate(180deg)';
        setTimeout(() => setSearchState("close"), 1000)
    }

    // rendering items
    return (
        <div className="navBar">
            <h1 className="app-title">Time Station</h1>
            {searchState === 'open' ?
                <div>
                    <input className="search-bar" placeholder="ex: America/Los-Angeles"></input>
                    <button className="close-tz-btn" onClick={() => btnRotationClose()}> - </button>
                </div> :
                <button className="add-tz-btn" onClick={() => btnRotation()}>+</button>
            }
        </div>
    )
}

export default Navbar;