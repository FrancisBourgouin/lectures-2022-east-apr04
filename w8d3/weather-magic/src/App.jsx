import { useEffect, useState } from "react";
import "./App.css";
import CityForm from "./components/CityForm";
import Weather from "./components/Weather";
import axios from "axios";
import { prettifyWeatherData } from "./helpers/weatherHelpers";
import CityList from "./components/CityList";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 09fd719b4b698ec0260e424f83378e3d

// Should have a form to choose a city
// Should see the weather when a city is chosen

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityHistory, setCityHistory] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    // url
    // something after /
    // put in currentCity
  });

  useEffect(() => {
    if (currentCity) {
      updateWeather(currentCity);
    }
  }, [currentCity]);
  const updateCity = (city) => setCurrentCity(city);
  // const updateCity = (city) => {
  //   if (typeof city === "string") {
  //     setCurrentCity(city);
  //   } else {
  //     setCurrentCity(city.city);
  //   }
  // };
  // const updateCityFromButton = (city) => setCurrentCity(city)

  const updateWeather = (city) => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    axios
      .get(url)
      .then((res) => {
        setCurrentWeather(res.data);
        !cityHistory.includes(city) && setCityHistory([...cityHistory, city]);
      })
      .catch(() => setCurrentWeather(null));
  };
  // Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu

  return (
    <div className="App">
      <header>
        <h1>Weather magic</h1>
      </header>
      <CityForm onSubmit={updateCity} />
      {cityHistory.length !== 0 && (
        <CityList cityHistory={cityHistory} updateCity={updateCity} />
      )}
      {currentWeather && (
        <Weather {...prettifyWeatherData(currentWeather, currentCity)} />
      )}
    </div>
  );
}

export default App;
