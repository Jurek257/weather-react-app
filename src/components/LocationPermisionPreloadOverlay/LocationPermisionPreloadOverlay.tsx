import { useState } from "react";
import styles from "./LocationPermisionPreloadOverlay.module.css";

interface LocationPermisionPreloadOverlayProps {
  onGeolocationAllowed: () => void;
  manuallyLoadWeatherByCity: (cityName: string) => void;
}

export function LocationPermisionPreloadOverlay({
  onGeolocationAllowed,
  manuallyLoadWeatherByCity,
}: LocationPermisionPreloadOverlayProps) {
  const [cityInput, setCityInput] = useState("");

  function handleCityInputSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedCity = cityInput.trim();
    if (!trimmedCity) return;
    manuallyLoadWeatherByCity(trimmedCity); //TODO import function of loading weather by city from App.tsx
  }

  return (
    <div className={styles.locationPermisionPreloadOverlay}>
      <h3>For weather forrecast we need your geolocation</h3>

      <button onClick={onGeolocationAllowed}>Request geolocation</button>

      <p>or input him manuelly</p>

      <form onSubmit={handleCityInputSubmit}>
        <input
          className={styles.cityInput}
          type="text"
          id="city-intput"
          name="city-input"
          placeholder="(pls for current work look for city in English)"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button type="submit" disabled={!cityInput.trim()}>
          Find
        </button>
      </form>
    </div>
  );
}
