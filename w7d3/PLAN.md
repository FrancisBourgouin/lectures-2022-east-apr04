# Watering Plants

Plant list with name, watering interval, last watered date, button to water each plant to reset the date.

# User stories

- Log the amount of watering
- Add plants
- Search up new plants
- Reminders
- Button
- Edit data

- User should be able to see the list of all plants (MVP)
- User should be able to search a plant name (Stretch)
- User should be able to add a new plant to the list (Stretch)
- User should be able to edit a plant information (Stretch)
- User should be able to see which plants needs watering (MVP)
- User should be able to receive a notification to water a plant (Stetch)
- User should be able to update the last watered information (MVP)

# Data Structures

## Plant

```jsx
  const plant = {
    id:1,
    name:"",
    type:"",
    lastWateredDate:"Date"
    wateringInterval:0
  }
```

## Plants

```jsx
const plants = [plant, plant];

const plants = {
  1: plant,
  2: plant,
};
```

# Mock Data

```jsx
const plant1 = {
  id: 1,
  name: "Ghost Pipe (Monotropa Uniflora)",
  type: "Best plant",
  lastWateredDate: "2022-04-04",
  wateringInterval: 30,
};
const plant2 = {
  id: 2,
  name: "Spear Grass",
  type: "Pointy plant",
  lastWateredDate: "2022-05-04",
  wateringInterval: 14,
};

const plant3 = {
  id: 3,
  name: "Hyacinths",
  type: "Pretty flower",
  lastWateredDate: "2022-05-12",
  wateringInterval: 3,
};

const plant4 = {
  id: 4,
  name: "Space Fern",
  type: "Floaty",
  lastWateredDate: "2020-05-12",
  wateringInterval: 9001,
};

const plantListArr = [plant1, plant2, plant3, plant4];

const plantListObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - h1 title of section
    - ul
      - li (Green border when well watered, Red border when not)
        - h1 title of plant
        - p type of plant
        - p last watered date
        - button water the plant

# Component Structure

- App
  - Header (header)
  - PlantList (main ul)
    - PlantListItem (li)

# Data map

- App
  - Header
  - PlantList state of plants
    - PlantListItem props of plants
- App state of plants
  - Header
  - PlantForm props of plants
  - PlantList props of plants
    - PlantListItem props of plants
