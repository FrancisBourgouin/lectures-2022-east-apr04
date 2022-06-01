export const prettifyWeatherData = (weatherData, currentCity) => {
  const fancyReport = {};

  fancyReport.city = currentCity;
  fancyReport.temperature = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  fancyReport.conditions = weatherData.weather[0].description;

  return fancyReport;
};
