import { useEffect, useState } from "react";
import axios from "axios";
import { prettifyWeatherData } from "../helpers/weatherHelpers";

// 09fd719b4b698ec0260e424f83378e3d
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function useOpenWeatherMap() {
  const [currentCity, setCurrentCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${APIKEY}`;

    if (currentCity) {
      axios
        .get(url)
        .then((res) => setCurrentWeather(res.data))
        .catch(() => setCurrentWeather(null));
    }
  }, [currentCity]);

  const changeCurrentCity = (formData) => {
    setCurrentCity(formData.city);
    setCurrentWeather(null);
  };

  const prettyWeather =
    currentWeather && prettifyWeatherData(currentWeather, currentCity);

  return { currentWeather, prettyWeather, changeCurrentCity };
}
