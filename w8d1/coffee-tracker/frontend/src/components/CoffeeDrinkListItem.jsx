export default function CoffeeDrinkListItem(props) {
  const { id, beans, technique, time, deleteADrink } = props;

  // const bob = beans || "no beans selected"
  return (
    <li className="CoffeeDrinkListItem">
      <h1>
        {beans} using the {technique} technique
      </h1>
      <h2>At {time}</h2>
      <button onClick={deleteADrink}>Delete drink</button>
    </li>
  );
}
