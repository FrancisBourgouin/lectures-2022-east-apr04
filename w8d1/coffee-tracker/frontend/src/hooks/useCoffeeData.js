import { useState, useEffect } from "react";
import axios from "axios";

export default function useCoffeeData() {
  const [coffeeDrinks, setCoffeeDrinks] = useState({});
  const coffeeDrinkList = Object.values(coffeeDrinks);

  const fetchDrinks = () => {
    axios
      .get("/api/coffee-drinks")
      .then((res) => setCoffeeDrinks(res.data))
      .catch(() => setCoffeeDrinks({}));
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  const addADrink = (formData) => {
    // const id = Object.values(coffeeDrinks).length;

    return axios
      .post("/api/coffee-drinks", { ...formData })
      .then((res) => {
        const coffeeDrink = res.data;

        const updatedCoffeeDrinks = { ...coffeeDrinks };
        updatedCoffeeDrinks[coffeeDrink.id] = coffeeDrink;

        return updatedCoffeeDrinks;
      })
      .catch(() => null);
  };

  const deleteADrink = (id) => {
    // const id = Object.values(coffeeDrinks).length;
    console.log(id);
    return axios
      .delete(`/api/coffee-drinks/${id}`)
      .then((res) => {
        const updatedCoffeeDrinks = { ...coffeeDrinks };
        delete updatedCoffeeDrinks[id];

        return updatedCoffeeDrinks;
      })
      .catch(() => null);
  };

  const sendAndAddDrink = (formData) => {
    addADrink(formData).then((coffeeDrinks) => setCoffeeDrinks(coffeeDrinks));
  };

  const sendAndDeleteDrink = (id) => {
    deleteADrink(id).then((coffeeDrinks) => setCoffeeDrinks(coffeeDrinks));
  };

  return { coffeeDrinkList, sendAndAddDrink, sendAndDeleteDrink };
}
