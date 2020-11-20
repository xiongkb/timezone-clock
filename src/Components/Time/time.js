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

    // adding 0s to numbers less than 10
    function leadingZero(num) {
        return num < 10 ? ("0" + num) : num;
    }


    function runTime() { 
        let time = new Date();
        
        setDisplayTime({
            year: time.getFullYear(),
            month: translateMonth(time.getMonth()),
            day: time.getDate(),
            hour: time.getHours(),
            minutes: time.getMinutes(),
            weekday: translateWeekday(time.getDay()),
            seconds: time.getSeconds(),
        });
    };
    

    useEffect(() => {
        runTime();
         setInterval(runTime, 1000);
        
    }, [])

    return (
        <div className="local-time">
            <div className="local-month-year">
                {displayTime.month} {displayTime.day} {displayTime.year}
            </div>
            <div className="time-location">
                Your local time
            </div>
            <div className="local-weekday">
                {displayTime.weekday}
            </div>

            {/* having time display 0s here instead of object */}
            <div className="local-hour-minutes">
                {leadingZero(displayTime.hour)}:
                {leadingZero(displayTime.minutes)}
                <span className="local-seconds"> {leadingZero(displayTime.seconds)}</span>
            </div>

        </div>
    )
};

export default Time;