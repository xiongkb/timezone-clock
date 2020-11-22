import React, {useEffect, useState} from "react";
import './App.css';
import Time from "./Components/Time/time";
import Navbar from "./Components/Navbar/navbar";
import Timezones from "./Components/Timezones/tz";

const moment = require("moment-timezone");

function App() {

  const [timezones, setTimezones] = useState([]);

  let tzList = moment.tz.names();;
  console.log(tzList)
  return (
    <div className="App">
      <Navbar addTZ={tz => setTimezones([...timezones, tz])}/>
      <Time />
      <Timezones timezones={timezones} />
    </div>
  );
}

export default App;
