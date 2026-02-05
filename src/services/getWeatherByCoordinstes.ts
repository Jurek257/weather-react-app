export async function getWeatherByCoordinates(lat: number, lon: number) {
  const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
  const data = await response.json();
  return data;
}
