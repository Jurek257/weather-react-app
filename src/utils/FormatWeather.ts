export function formateDayName(dateString: string): string {
  const dateObject = new Date(dateString);
  return dateObject.toLocaleDateString("en-EN", { weekday: "long" });
}

export function formateIconUrl(iconCode: string): string {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

/**
 * Function get js object and formate him and return  a needable weather data
 * @param forecastArray js object with weather data
 * @param dayIndex 0 = today , 1 = tomorrow , 2 = aftertommorow...
 * @returns Name of the requested Weekday , temperature and icon of weather from OpenWeather site
 */
export function formateWeatherByDay(forecastArray: any, dayIndex: number) {
  const listIndex = dayIndex * 8;
  const dayWeatherData = forecastArray.list[listIndex];

  return {
    day: formateDayName(dayWeatherData.dt_txt),
    temperature: Math.round(dayWeatherData.main.temp),
    icon: formateIconUrl(dayWeatherData.weather[0].icon),
  };
}
