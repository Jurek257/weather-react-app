import { useState } from "react";


import "./App.css";
import MainCard from "./components/MainCard/MainCard";
import CardGroup from "./components/CardGroup/CardGroup";
import { LocationPermisionPreloadOverlay } from "./components/LocationPermisionPreloadOverlay/LocationPermisionPreloadOverlay.tsx";
import { formateWeatherByDay } from "./utils/FormatWeather.ts";

import { getUserPosition } from "./services/getCoordinatesByUser.ts";
import { getCityByCoordinates } from "./services/getCityByCoordinates.ts";
import { getWeatherByCoordinates } from "./services/getWeatherByCoordinstes";
import { getCoordinatesByCity } from "./services/getCoordinatesByCity.ts";

function App() {
  const [hasLocationPermision, setLocationPermision] = useState<boolean | null>(
    null,
  );

  const [city, setCity] = useState<string>("");
  const [forecastArray, setForecastArray] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  async function manuallyLoadWeatherByCity(cityName: string) {
    setLoading(true);
    setError(null);

    try {
      const coords = await getCoordinatesByCity(cityName);
      setCity(cityName);
      setLocationPermision(true);
      const weatherForecastArray = await getWeatherByCoordinates(
        coords.lat,
        coords.lon,
      );

      setForecastArray(weatherForecastArray);
    } catch (error) {
      setError("weather loading went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (hasLocationPermision === null)
    return (
      <LocationPermisionPreloadOverlay
        onGeolocationAllowed={loadWeathher}
        manuallyLoadWeatherByCity={manuallyLoadWeatherByCity}
      ></LocationPermisionPreloadOverlay>
    );

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (error || hasLocationPermision === false) {
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
