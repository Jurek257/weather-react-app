export default async function handler(req, res) {
  const { cityName } = req.query;

  const API_KEY = process.env.OPEN_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`,
  );

  const data = await response.json();

  res.status(200).json(data);
}
