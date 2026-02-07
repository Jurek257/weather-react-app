import "./LocationPermisionPreloadOverlay.css";

interface LocationPermisionPreloadOverlayProps {
  onGeolocationAllowed: () => void;
}

export function LocationPermisionPreloadOverlay({
  onGeolocationAllowed,
}: LocationPermisionPreloadOverlayProps) {
  return (
    <div className="locationPermisionPreloadOverlay">
      <h3>
        Für eine präzisere Wettervorhersage in Ihrer Region benötigen wir den
        Zugriff auf Ihren Standort.
      </h3>

      <h4>
        Keine Sorge, ich speichere keine Informationen über Ihren Standort. 😊
      </h4>

      <button onClick={onGeolocationAllowed}>Standort freigeben</button>
    </div>
  );
}
