export async function getCityByCoordinates(
  lat: number,
  lon: number,
): Promise<string> {
  const response = await fetch(`/api/geocode?lat=${lat}&lon=${lon}`);
  const data = await response.json();
  return data[0]?.name || "City no data in JSON";
}
