export default function CityList(props) {
  const { cityHistory, updateCity } = props;

  const parsedCities =
    Array.isArray(cityHistory) &&
    cityHistory.map((city) => (
      <button key={city} onClick={() => updateCity(city)}>
        {city}
      </button>
    ));
  return <section className="CityList">{parsedCities}</section>;
}
