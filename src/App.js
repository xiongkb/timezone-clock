import React, {useEffect, useState} from "react";
import './App.css';
import Time from "./Components/Time/time";
import Navbar from "./Components/Navbar/navbar";
import Timezones from "./Components/Timezones/tz";

const moment = require("moment-timezone");

function App() {
  
  const tzList = moment.tz.names();
  const [timezones, setTimezones] = useState("");
  const [filterNames, setFilterNames] = useState([]);
  const [existingTZ, setExistingTZ] = useState([]);
  
  
  
  // user input will only pop up based on input
  useEffect(() => {
    const filterSearch = tzList.filter(tz => tz.toLowerCase().includes(timezones))
    setFilterNames(timezones.length === 0 ? [] : filterSearch);
  }, [timezones]);

  return (
    <div className="App">
      <Navbar 
        addToExistingTZ={tz => setExistingTZ([...existingTZ, tz])} 
        addTZ={tz => setTimezones(tz)} 
        filterList={filterNames}
      />
      <Time />
      {existingTZ.map(tz => <Timezones tz={tz} timezones={timezones} />)}
      
    </div>
  );
}

export default App;
