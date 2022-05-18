import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import { plantListArr, plantListObj } from "./data/plantsData";

function App() {
  const [plants, setPlants] = useState(plantListObj);

  const waterPlantArr = (id) => {
    const updatedPlants = [...plants];

    const plant = updatedPlants.find((plant) => plant.id === id);
    const updatedPlant = { ...plant };

    const newDate = new Date();
    updatedPlant.lastWateredDate = newDate.toDateString();

    const plantIndex = updatedPlants.findIndex((plant) => plant.id === id);
    updatedPlants[plantIndex] = updatedPlant;

    setPlants(updatedPlants);
  };

  const waterPlant = (id) => {
    const updatedPlants = { ...plants };
    const updatedPlant = { ...plants[id] };

    const newDate = new Date();
    updatedPlant.lastWateredDate = newDate.toDateString();

    updatedPlants[id] = updatedPlant;

    setPlants(updatedPlants);
  };

  const waterPlantButBetter = (id) => {
    const newDate = new Date();
    const newDateString = newDate.toDateString();

    const updatedPlants = { ...plants }; // Shallow copy of plants
    const updatedPlant = { ...plants[id], lastWateredDate: newDateString }; // Shallow copy of a singular plant

    updatedPlants[id] = updatedPlant; // Put the updated plant in the plants copy
    console.log(updatedPlants);

    setPlants(updatedPlants);
  };

  const waterAllPlants = () => {
    const newDate = new Date();
    const newDateString = newDate.toDateString();
    const updatedPlants = { ...plants };

    for (const key in plants) {
      const updatedPlant = { ...plants[key], lastWateredDate: newDateString };

      updatedPlants[key] = updatedPlant;
    }

    setPlants(updatedPlants);
  };

  const waterAllPlantsBad = () => {
    for (const key in plants) {
      waterPlantButBetter(key);
    }
  };

  return (
    <div className="App">
      <Header />
      <Counter />
      <PlantList
        plants={Object.values(plants)}
        waterPlant={waterPlantButBetter}
        waterAllPlants={waterAllPlants}
      />
    </div>
  );
}

export default App;
