/* //temporary code for testing
export const forecastArrayMock = {
  cod: "200",
  message: 0,
  cnt: 16, // 2 дня * 8 слотов
  list: [
    // День 1
    {
      dt: 1770292800,
      main: {
        temp: 1.11,
        feels_like: 1.11,
        temp_min: 0.57,
        temp_max: 1.11,
        pressure: 994,
        sea_level: 994,
        grnd_level: 950,
        humidity: 96,
        temp_kf: 0.54,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.04, deg: 144, gust: 3.11 },
      visibility: 4749,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-05 00:00:00",
    },
    {
      dt: 1770296400,
      main: {
        temp: 2.0,
        feels_like: 1.9,
        temp_min: 1.5,
        temp_max: 2.0,
        pressure: 995,
        sea_level: 995,
        grnd_level: 951,
        humidity: 95,
        temp_kf: 0.5,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: { all: 20 },
      wind: { speed: 1.2, deg: 150, gust: 3.0 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-05 03:00:00",
    },
    // ... ещё 6 слотов для первого дня
    {
      dt: 1770300000,
      main: {
        temp: 3.0,
        feels_like: 2.8,
        temp_min: 2.5,
        temp_max: 3.0,
        pressure: 996,
        sea_level: 996,
        grnd_level: 952,
        humidity: 94,
        temp_kf: 0.5,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.5, deg: 160, gust: 3.2 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-05 06:00:00",
    },
    {
      dt: 1770303600,
      main: {
        temp: 4.0,
        feels_like: 3.8,
        temp_min: 3.5,
        temp_max: 4.0,
        pressure: 997,
        sea_level: 997,
        grnd_level: 953,
        humidity: 90,
        temp_kf: 0.5,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 40 },
      wind: { speed: 2.0, deg: 170, gust: 3.5 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-05 09:00:00",
    },
    {
      dt: 1770307200,
      main: {
        temp: 5.0,
        feels_like: 4.5,
        temp_min: 4.5,
        temp_max: 5.0,
        pressure: 998,
        sea_level: 998,
        grnd_level: 954,
        humidity: 88,
        temp_kf: 0.5,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: { all: 20 },
      wind: { speed: 2.1, deg: 180, gust: 3.6 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-05 12:00:00",
    },
    {
      dt: 1770310800,
      main: {
        temp: 6.0,
        feels_like: 5.5,
        temp_min: 5.5,
        temp_max: 6.0,
        pressure: 999,
        sea_level: 999,
        grnd_level: 955,
        humidity: 85,
        temp_kf: 0.5,
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "03d" },
      ],
      clouds: { all: 60 },
      wind: { speed: 2.2, deg: 190, gust: 3.8 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-05 15:00:00",
    },
    {
      dt: 1770314400,
      main: {
        temp: 4.5,
        feels_like: 4.0,
        temp_min: 4.0,
        temp_max: 4.5,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 956,
        humidity: 90,
        temp_kf: 0.5,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.8, deg: 160, gust: 3.5 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-05 18:00:00",
    },
    {
      dt: 1770318000,
      main: {
        temp: 3.0,
        feels_like: 2.5,
        temp_min: 2.5,
        temp_max: 3.0,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 957,
        humidity: 92,
        temp_kf: 0.5,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.2, deg: 150, gust: 3.0 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2026-02-05 21:00:00",
    },

    // День 2
    {
      dt: 1770321600,
      main: {
        temp: 2.0,
        feels_like: 1.5,
        temp_min: 1.5,
        temp_max: 2.0,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 958,
        humidity: 90,
        temp_kf: 0.5,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: { all: 20 },
      wind: { speed: 1.5, deg: 140, gust: 3.2 },
      visibility: 5000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2026-02-06 00:00:00",
    },
    // ... ещё 7 слотов второго дня
  ],
}; */

export function getDayName(dateString: string): string {
  const dateObject = new Date(dateString);
  return dateObject.toLocaleDateString("de-DE", { weekday: "long" });
}

export function getIconUrl(iconCode: string): string {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

/**
 * Function get js object and formate him and return  a needable weather data
 * @param forecastArray js object with weather data
 * @param dayIndex 0 = today , 1 = tomorrow , 2 = aftertommorow...
 * @returns Name of the requested Weekday , temperature and icon of weather from OpenWeather site
 */
export function getWeatherByDay(forecastArray: any, dayIndex: number) {
  const listIndex = dayIndex * 8;
  const dayWeatherData = forecastArray.list[listIndex];

  return {
    day: getDayName(dayWeatherData.dt_txt),
    temperature: dayWeatherData.main.temp,
    icon: getIconUrl(dayWeatherData.weather.icon),
  };
}
