import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants, waterPlant, waterAllPlants } = props;

  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => (
      <PlantListItem
        key={plant.id}
        {...plant}
        waterPlant={() => waterPlant(plant.id)}
        waterPlantSad={waterPlant}
      />
    ));

  return (
    <main>
      <h1>List of plants</h1>
      <button onClick={waterAllPlants}>WATER EVERYTHING</button>
      {!parsedPlants && <p>There is no plants :( </p>}
      <ul>{parsedPlants}</ul>
    </main>
  );
}
