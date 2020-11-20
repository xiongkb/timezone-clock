import React from "react";
import "./tz.css"

// importing momentjs
const moment = require("moment-timezone");

const Timezones = () => {
    let timezone = moment().tz("America/Chicago");
    let tzName = timezone._z.name;
    let tzDate = timezone.format("MM DD YYYY")
    let tzHour = timezone.format("HH");
    let tzMinute = timezone.format("mm");

    console.log(moment.tz.zonesForCountry("US"))
    console.log(timezone)



    return (
        <div>
            <div>Timezone Name: {tzName}</div>
            <div>Timezone date?:{tzDate}</div>
            <div>Timezone weekday:{tzDate}</div>
            <div>Timezone hour:{tzHour}</div>
            <div>Timezone minute:{tzMinute}</div>
        </div>
    )
}

export default Timezones;