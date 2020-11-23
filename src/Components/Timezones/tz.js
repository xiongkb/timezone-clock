import React, { useEffect, useState } from "react";
import "./tz.css"

// importing momentjs
const moment = require("moment-timezone");

const Timezones = (props) => {

    const [displayTZtime, setDisplayTZtime] = useState({
        tzCountry: 0,
        tzMajorCity: 0,
        tzDate: 0,
        tzYear: 0,
        tzHour: 0,
        tzMinute: 0,
        tzSeconds: 0});

    // -------- running TZ time to be more dynamic --------
    function runTZtime() {
        let timezone = moment().tz("America/Chicago");
        let tzName = timezone._z.name;
        let splitName = tzName.split("/");

        setDisplayTZtime({
            tzCountry : splitName[0],
            tzMajorCity : splitName[1],
            tzDate : timezone.format("MMMM DD YYYY"),
            tzWeekDay : timezone.format("ddd"),
            tzHour : timezone.format("HH"),
            tzMinute : timezone.format("mm"),
            tzSeconds : timezone.format("ss"),
        });
    };

    useEffect(() => {
        runTZtime();
        setInterval(runTZtime, 1000);
    }, []);

    return (
        <div className="tz-time">
            <div className="tz-month-year">{displayTZtime.tzDate}</div>
            <div className="tz-country">{displayTZtime.tzCountry}</div>
            <div className="tz-major-city">{displayTZtime.tzMajorCity}</div>
            <div className="tz-weekday">{displayTZtime.tzWeekDay}</div>
            <div>
                {displayTZtime.tzHour}:{displayTZtime.tzMinute}
                <span className="tz-seconds"> {displayTZtime.tzSeconds}</span>
            </div>
        </div>
    );
};

export default Timezones;