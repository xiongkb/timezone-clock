import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
    const [searchState, setSearchState] = useState('close');

    function userSearch() {

    }

    return (
        <div className="navBar">
            <h1 className="app-title">Time Station</h1>
            {searchState === 'open' ?
                <div>
                    <input className="search-bar" placeholder="Enter a timezone"></input>
                    <button className="add-tz" onClick={() => setSearchState("close")}>-</button>
                </div> :
                <button className="add-tz" onClick={() => setSearchState("open")}>+</button>
            }
        </div>
    )
}

export default Navbar;