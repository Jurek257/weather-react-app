import styles from "./LocationPermisionPreloadOverlay.module.css";

interface LocationPermisionPreloadOverlayProps {
  onGeolocationAllowed: () => void;
}

export function LocationPermisionPreloadOverlay({
  onGeolocationAllowed,
}: LocationPermisionPreloadOverlayProps) {
  return (
    <div className={styles.locationPermisionPreloadOverlay}>
      <h3>
        Für eine präzisere Wettervorhersage in Ihrer Region benötigen wir den
        Zugriff auf Ihren Standort.
      </h3>

      <button onClick={onGeolocationAllowed}>Standort Abrufen</button>

      <p>oder</p>

      <input
        className={styles.cityInput}
        type="text"
        //todo : Value input , and variable
        id="city-intput"
        name="city-input"
        placeholder="Find the  city manuel"
      />
    </div>
  );
}
