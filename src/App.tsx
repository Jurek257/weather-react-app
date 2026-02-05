import { useEffect } from "react";
import "./App.css";
import MainCard from "./components/MainCard/MainCard";
import CardGroup from "./components/CardGroup/CardGroup";
import { Assets } from "./shared/assets";
import { getUserPosition } from "./services/getCoordinates";
getUserPosition;

function App() {
  useEffect(() => {
    getUserPosition();
  }, []);

  //todo connect weather API
  const forecast = [
    { day: "Montag", temperature: 18, icon: Assets.PartlyCloudy },
    { day: "Dienstag", temperature: 22, icon: Assets.Sunny },
    { day: "Mittwoch", temperature: 15, icon: Assets.Rain },
    { day: "Donnerstag", temperature: 20, icon: Assets.Sunny },
    { day: "Freitag", temperature: 17, icon: Assets.PartlyCloudy },
    { day: "Samstag", temperature: 19, icon: Assets.Sunny },
  ];

  const today = forecast[0];
  const nextDays = forecast.slice(1);

  return (
    <div className="container">
      <MainCard
        day={today.day}
        temperature={today.temperature}
        icon={today.icon}
      ></MainCard>

      <CardGroup forecastDailyList={nextDays}></CardGroup>
    </div>
  );
}

export default App;
