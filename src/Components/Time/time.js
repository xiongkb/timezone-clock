import React from "react";
import "./time.css";

const time = () => {
    let currentTime = new Date();
    console.log(currentTime);

    return (
        <div>
            <p>The current time right now is {currentTime.toString()}</p>
        </div>
    )
};

export default time;