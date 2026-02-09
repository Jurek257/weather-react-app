export default async function handler(req: any, res: any) {
  const { lat, lon } = req.query;

  const API_KEY = process.env.OPEN_WEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );

  const data = await response.json();

  res.status(200).json(data);
}
