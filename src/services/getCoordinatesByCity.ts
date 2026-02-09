export async function getCoordinatesByCity(
  cityName: string,
): Promise<{ lat: number; lon: number }> {
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

  return { lat: firstResultCity.lat, lon: firstResultCity.lon };
}
