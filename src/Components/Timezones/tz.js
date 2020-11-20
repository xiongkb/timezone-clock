import React, { useEffect } from "react";
import "./tz.css"

// importing momentjs
const moment = require("moment-timezone");

const Timezones = (props) => {
    useEffect(() => {
        console.log(props.timezones)
        props.timezones.forEach(tz => {
            if (tz.includes('hello')) {
                console.log(tz)
            }
        })
    })
    let timezone = moment().tz("America/Chicago");
    let tzName = timezone._z.name;
    let splitName = tzName.split("/");
    let tzCountry = splitName[0];
    let tzMajorCity = splitName[1];
    let tzDate = timezone.format("MMMM DD YYYY")
    let tzWeekDay = timezone.format("ddd")
    let tzHour = timezone.format("HH");
    let tzMinute = timezone.format("mm");
    let tzSeconds = timezone.format("ss");

    console.log(moment.tz.zonesForCountry("US"))
    console.log(tzCountry + " " + tzMajorCity)

    return (
        <div className="tz-time">
            <div className="tz-month-year">{tzDate}</div>
            <div className="tz-country">{tzCountry}</div>
            <div className="tz-major-city">{tzMajorCity}</div>
            <div className="tz-weekday">{tzWeekDay}</div>
            <div>
                {tzHour}:{tzMinute} <span className="tz-seconds">{tzSeconds}</span>
            </div>
        </div>
    )
}

export default Timezones;