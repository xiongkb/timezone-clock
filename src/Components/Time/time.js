import React, { useState, useEffect } from 'react';
import "./time.css";

const Time = () => {

    
    const [displayTime, setDisplayTime] = useState({ year: 0, seconds: 0 });

    function translateWeekday(weekday) {
        switch (new Date().getDay()) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";      
            default:
                return " ";
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
        
        console.log(JSON.stringify({
            // year: time.getFullYear(),
            weekday: translateWeekday(time.getDay()),
            // seconds: time.getSeconds()
        }))
        // --------------------------------
    };
    

    useEffect(() => {
        runTime();
         setInterval(runTime, 1000);
        
    }, [])

    return (
        <div>
            <p>Year: {displayTime.year}</p>
            <p>Seconds in time: {displayTime.seconds}</p>

        </div>
    )
};

export default Time;