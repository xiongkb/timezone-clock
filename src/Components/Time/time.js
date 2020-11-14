import React, { useState, useEffect } from 'react';
import "./time.css";

const Time = () => {

    // let seconds;
    const [displayTime, setDisplayTime] = useState({ year: 0, seconds: 0 });
    // let currentTime = new Date().toString();

    function translateWeekday(weekday) {
        switch (new Date().getDay()) {
            case 0:
                weekday = "Mon";
                break;
            case 1:
                weekday = "Tue";
                break;
            case 2:
                weekday = "Wed";
                break;
            case 3:
                weekday = "Thu";
                break; 
            case 4:
                weekday = "Fri";
                break;
            case 5:
                weekday = "Sat";
                break;
            case 6:
                weekday = "Sun";
                break;           
            default:
                weekday = " ";
                break;
        }
    }

    function runTime() { 
        let time = new Date();
        
        setDisplayTime({
            year: time.getFullYear(),
            month: time.getMonth(),
            hour: time.getHours(),
            minutes: time.getMinutes(),
            weekday: translateWeekday(time.getDay()),
            seconds: time.getSeconds()
        });
        // --------------------------------
        
        console.log("time: " + JSON.stringify({
            year: time.getFullYear(),
            seconds: time.getSeconds()
        }))
        // --------------------------------
    };

    // const [ displayTime, setDisplayTime] = useState(currentTime);
    

    useEffect(() => {
        runTime();
         setInterval(runTime, 1000);
        
    }, [])

    return (
        <div>
            <p>Seconds in time: {displayTime.seconds}</p>

            {/* <button onClick={() => setDisplaySeconds(new Date().toString())}>
                check time
            </button> */}
        </div>
    )
};

export default Time;