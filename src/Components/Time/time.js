import React, { useState, useEffect } from 'react';
import "./time.css";

const Time = () => {
    
    const [displayTime, setDisplayTime] = useState({ year: 0, seconds: 0 });

    // weekday
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

    // month
    function translateMonth(month) {
        switch (new Date().getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";  
            default:
                return " ";
        }
    }

    function leadingZero(num) {
        return num < 10 ? ("0" + num) : num;
    }


    function runTime() { 
        let time = new Date();
        
        setDisplayTime({
            year: time.getFullYear(),
            month: translateMonth(time.getMonth()),
            hour: time.getHours(),
            minutes: time.getMinutes(),
            weekday: translateWeekday(time.getDay()),
            seconds: time.getSeconds(),
        });
        // time.getSeconds() < 10 ? ("0" + time.getSeconds()) : time.getSeconds()
    };
    

    useEffect(() => {
        runTime();
         setInterval(runTime, 1000);
        
    }, [])

    return (
        <div>
            <div>
                {displayTime.month} {displayTime.year}
            </div>
            <div>
                {displayTime.weekday}
            </div>
            <div>
                {leadingZero(displayTime.hour)}:
                {leadingZero(displayTime.minutes)}
                <span className="seconds"> {leadingZero(displayTime.seconds)}</span>
            </div>

        </div>
    )
};

export default Time;