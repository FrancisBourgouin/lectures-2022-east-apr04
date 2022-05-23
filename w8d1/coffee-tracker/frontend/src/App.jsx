import useCoffeeData from "./hooks/useCoffeeData";

import Header from "./components/Header";
import CoffeeDrinkForm from "./components/CoffeeDrinkForm";
import CoffeeDrinkList from "./components/CoffeeDrinkList";

import "./App.css";

function App() {
  const { coffeeDrinkList, sendAndAddDrink, sendAndDeleteDrink } = useCoffeeData();

  return (
    <div className="App">
      {/* <SuperButtonOfDestiny type="submit">Some Text</SuperButtonOfDestiny> */}
      <Header />
      <main>
        <CoffeeDrinkForm onSubmit={sendAndAddDrink} />
        <CoffeeDrinkList
          coffeeDrinkList={coffeeDrinkList}
          deleteADrink={sendAndDeleteDrink}
        />
      </main>
    </div>
  );
}

export default App;
