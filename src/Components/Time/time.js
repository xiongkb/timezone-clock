import React, { useState } from 'react';
import "./time.css";

const Time = () => {
    
    let currentTime = new Date().toString();
    // console.log(currentTime);
    // console.log(typeof(currentTime))
    const [ displayTime, setDisplayTime] = useState(currentTime);
    

    return (
        <div>
            <p>Time: {displayTime}</p>
            <button onClick={() => setDisplayTime(new Date().toString())}>
                check time
            </button>
        </div>
    )
};

export default Time;