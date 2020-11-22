import React, {useEffect, useState} from "react";
import './App.css';
import Time from "./Components/Time/time";
import Navbar from "./Components/Navbar/navbar";
import Timezones from "./Components/Timezones/tz";

const moment = require("moment-timezone");

function App() {

  const tzList = moment.tz.names();
  const [timezones, setTimezones] = useState("");

  useEffect(() => {
    console.log(timezones);
  }, [timezones]);

  return (
    <div className="App">
      <Navbar addTZ={tz => setTimezones(tz)}/>
      <Time />
      <Timezones timezones={timezones} />
    </div>
  );
}

export default App;
