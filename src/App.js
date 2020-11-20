import React, {useEffect, useState} from "react";
import './App.css';
import Time from "./Components/Time/time"
import Navbar from "./Components/Navbar/navbar"
import Timezones from "./Components/Timezones/tz";

function App() {
  const [timezones, setTimezones] = useState([]);

  return (
    <div className="App">
      <Navbar addTZ={tz => setTimezones([...timezones, tz])}/>
      <Time />
      <Timezones timezones={timezones} />
    </div>
  );
}

export default App;
