import React from "react";
import "./tz.css"

// importing momentjs
const moment = require("moment-timezone");

const Timezones = () => {
    let laTime = moment().tz("America/Los_Angeles").format();

    console.log(moment.tz.zonesForCountry("US"))
    console.log(moment.tz.countries())

    return (
        <div>
            <div>Timezone Name: {laTime}</div>
            <div>Timezone date?:</div>
            <div>Timezone hour:</div>
            <div>Timezone minute:</div>
            <div>Timezone second:</div>
        </div>
    )
}

export default Timezones;