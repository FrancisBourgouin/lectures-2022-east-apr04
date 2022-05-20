import "./App.css";
import CityForm from "./components/CityForm";
import Counter from "./components/Counter";
import Frankenstein from "./components/Frankenstein";
import PotatoForm from "./components/PotatoForm";
import Weather from "./components/Weather";

import useOpenWeatherMap from "./hooks/useOpenWeatherMap";

function App() {
  const { currentWeather, prettyWeather, changeCurrentCity } = useOpenWeatherMap();
  console.log(currentWeather, prettyWeather);
  return (
    <div className="App">
      <Frankenstein />
      <header>
        <h1>Weather Magic!</h1>
      </header>
      {/* <Counter /> */}
      <CityForm onSubmit={changeCurrentCity} />
      {/* <h1>Potato</h1> */}
      {/* <PotatoForm onSubmit={(formData) => console.log(formData)} /> */}
      {/* <Weather
        city={prettyWeather.city}
        conditions={prettyWeather.conditions}
        temperature={prettyWeather.temperature}
      /> */}
      <Weather {...prettyWeather} />
    </div>
  );
}

export default App;
