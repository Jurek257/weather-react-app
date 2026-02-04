import { useState } from "react";
import "./App.css";
import MainCard from "./components/MainCard/MainCard";
import CardGroup from "./components/CardGroup/CardGroup";
import { Assets } from "./shared/assets";

function App() {
  const forecast = [
    { day: "Montag", temperature: 18, icon: Assets.PartlyCloudy },
    { day: "Dienstag", temperature: 22, icon: Assets.Sunny },
    { day: "Mittwoch", temperature: 15, icon: Assets.Rain },
    { day: "Donnerstag", temperature: 20, icon: Assets.Sunny },
    { day: "Freitag", temperature: 17, icon: Assets.PartlyCloudy },
    { day: "Samstag", temperature: 19, icon: Assets.Sunny },
  ];

  return (
    <div className="container">
      <MainCard></MainCard>

      <CardGroup forecastDailyList={forecast}></CardGroup>
    </div>
  );
}

export default App;
