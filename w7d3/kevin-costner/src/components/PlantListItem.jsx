import { calculateDayDifference } from "../helpers/dateHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWateredDate, wateringInterval, waterPlant, waterPlantSad, id } =
    props;

  const liClass =
    calculateDayDifference(lastWateredDate) > wateringInterval ? "sad" : "happy";

  return (
    <li className={liClass}>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{lastWateredDate}</p>
      <button onClick={waterPlant}>WATER THE PLANT</button>
      {/* <button onClick={() => waterPlantSad(id)}>WATER THE PLANT</button> */}
    </li>
  );
}
