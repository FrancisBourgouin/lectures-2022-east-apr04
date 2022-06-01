export default function Weather(props) {
  const { city, temperature, conditions } = props;
  return (
    <section className="Weather">
      <h1>Weather for {city}</h1>
      <h2>
        Currently {temperature} with {conditions}
      </h2>
    </section>
  );
}
