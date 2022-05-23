import CoffeeDrinkListItem from "./CoffeeDrinkListItem";

export default function CoffeeDrinkList(props) {
  const { coffeeDrinkList, deleteADrink } = props;

  const parsedItems =
    Array.isArray(coffeeDrinkList) &&
    coffeeDrinkList.map((coffee) => (
      <CoffeeDrinkListItem
        key={coffee.id}
        {...coffee}
        deleteADrink={() => deleteADrink(coffee.id)}
      />
    ));
  return (
    <ul>
      <h1>Drinks</h1>
      {parsedItems}
    </ul>
  );
}
