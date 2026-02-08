type Coordinates = {
  lat: number;
  lon: number;
};

export async function getCoordinatesByCity(
  cityName: string,
): Promise<Coordinates> {
  const response = await fetch(
    `api/cityToCoordinates?cityName=${encodeURIComponent(cityName)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates");
  }

  const data = await response.json();
  const firstResultCity = data?.[0];

  if (!firstResultCity) {
    throw new Error("City not Found");
  }

  return { lat: firstResultCity.lon, lon: firstResultCity.lon };
}
