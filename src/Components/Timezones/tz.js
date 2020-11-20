import React from "react";
import "./tz.css"

// importing momentjs
const moment = require("moment-timezone");

const Timezones = () => {
    let timezone = moment().tz("America/Chicago");
    let tzName = timezone._z.name;
    let tzDate = timezone.format("MMMM DD YYYY")
    let tzWeekDay = timezone.format("ddd")
    let tzHour = timezone.format("HH");
    let tzMinute = timezone.format("mm");
    let tzSeconds = timezone.format("ss");

    console.log(moment.tz.zonesForCountry("US"))

    return (
        <div>
            <div>{tzDate}</div>
            <div>{tzName}</div>
            <div>{tzWeekDay}</div>
            <div>
                {tzHour}:{tzMinute} <span>{tzSeconds}</span>
            </div>
        </div>
    )
}

export default Timezones;