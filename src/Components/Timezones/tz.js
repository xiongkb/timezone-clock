import React from "react";
import "./tz.css"

// importing momentjs
const moment = require("moment-timezone");

const Timezones = () => {
    let tzName = moment().tz.Zone;
    let tzDate = moment().tz("America/Los_Angeles").format("MM DD YYYY")
    let tzHour = moment().tz("America/Los_Angeles").format("HH");
    let tzMinute = moment().tz("America/Los_Angeles").format("mm");

    console.log(moment.tz.zonesForCountry("US"))



    return (
        <div>
            <div>Timezone Name: {tzName}</div>
            <div>Timezone date?:{tzDate}</div>
            <div>Timezone hour:{tzHour}</div>
            <div>Timezone minute:{tzMinute}</div>
        </div>
    )
}

export default Timezones;