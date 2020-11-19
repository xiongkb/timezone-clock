import React from "react";
import './App.css';
import Time from "./Components/Time/time"
import Navbar from "./Components/Navbar/navbar"
import Timezones from "./Components/Timezones/tz";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Time />
      <Timezones />
    </div>
  );
}

export default App;
