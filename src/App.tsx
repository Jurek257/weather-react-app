import { useEffect, useState } from "react";

import "./App.css";
import MainCard from "./components/MainCard/MainCard";
import CardGroup from "./components/CardGroup/CardGroup";
import { LocationPermisionPreloadOverlay } from "./components/LocationPermisionPreloadOverlay/LocationPermisionPreloadOverlay.tsx";
import { formateWeatherByDay } from "./utils/FormatWeather.ts";

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

  async function loadWeathher() {
    try {
      const coords = await getUserPosition();
      setLocationPermision(true);

      const cityName = await getCityByCoordinates(coords.lat, coords.lon);
      setCity(cityName);

      const weatherForecastArray = await getWeatherByCoordinates(
        coords.lat,
        coords.lon,
      );
      setForecastArray(weatherForecastArray);

      setLoading(true);
    } catch (err) {
      setLocationPermision(false);
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
  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  const days = [0, 1, 2, 3, 4].map((i) =>
    formateWeatherByDay(forecastArray, i),
  );

  return (
    <div className="container">
      <MainCard {...days[0]} cityName={city}></MainCard>

      <CardGroup forecastDailyList={days.slice(1)}></CardGroup>
    </div>
  );
}

export default App;
