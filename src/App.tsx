import { useState } from "react";
import "./App.css";

import PartlyCloudy from "./assets/cloudy.png";
import Sunny from "./assets/sun.png";
import Rain from "./assets/heavy-rain.png";
import Snow from "./assets/snow.png";

function App() {
  return (
    <div className="container">
      <div className="main-card">
        <h3>Chemnnitz</h3>
        <h4>Montag</h4>
        <img
          src={PartlyCloudy}
          alt="weather image"
          width="128px"
          height="128px"
        />
        <p>Today is {} C</p>
        <p></p>
      </div>

      <div className="card-group">
        <div className="card">
          <h4>Montag</h4>
          <img
            src={PartlyCloudy}
            alt="weather image"
            width="64px"
            height="64px"
          />
          <p>Today is {} C</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
