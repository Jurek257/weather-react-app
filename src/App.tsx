import { useEffect, useState } from "react";

import "./App.css";
import MainCard from "./components/MainCard/MainCard";
import CardGroup from "./components/CardGroup/CardGroup";
import { LocationPermisionPreloadOverlay } from "./components/LocationPermisionPreloadOverlay/LocationPermisionPreloadOverlay.tsx";

import { Assets } from "./shared/assets";

import { getUserPosition } from "./services/getCoordinates";
import { getCityByCoordinates } from "./services/getCity";
import { getWeatherByCoordinates } from "./services/getWeatherByCoordinstes";

function App() {
  const [hasLocationPermision, setLocationPermision] = useState<boolean | null>(
    null,
  );

  const [city, setCity] = useState<string>("");
  const [forecastArray, setForecastArray] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadWeathher();
  }, []);

  //TODO: temporary solution, connect weather API , after delete that
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

  async function loadWeathher() {
    try {
      const coords = await getUserPosition();

      const cityName = await getCityByCoordinates(coords.lat, coords.lon);
      setCity(cityName);

      const weatherForecastArray = await getWeatherByCoordinates(
        coords.lat,
        coords.lon,
      );
      setForecastArray(weatherForecastArray);

      setLocationPermision(true);
    } catch (err) {
      setLocationPermision(true);
      setError("Loding weather went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (hasLocationPermision === null)
    return <LocationPermisionPreloadOverlay></LocationPermisionPreloadOverlay>;

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className="container">
      <MainCard
        day={today.day}
        temperature={today.temperature}
        icon={today.icon}
        cityName={city}
      ></MainCard>

      <CardGroup forecastDailyList={nextDays}></CardGroup>
    </div>
  );
}

export default App;
