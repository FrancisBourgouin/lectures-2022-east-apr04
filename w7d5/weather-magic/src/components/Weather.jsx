export default function Weather(props) {
  const { city, temperature, conditions } = props;

  return (
    <div>
      <h1>{city} !</h1>
      <p>It is currently {temperature}</p>
      <p>Looks like {conditions}</p>
    </div>
  );
}
