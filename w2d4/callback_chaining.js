const francisFridge = {
  "🥔": 5,
  "🍕": 1,
  "🧋": 4,
  "🎂": 1,
};

const fetchItemFromFridge = (fridge, item) => {
  if (!fridge[item]) {
    return console.log(`There is no ${item} in the fridge`);
  }
  fridge[item] = fridge[item] - 1;
  return console.log("Elements remaining", fridge);
};

// const fetchItemFromFridge = (fridge, item) => {
//   if (fridge[item] > 0) {
//     fridge[item] = fridge[item] - 1;
//     console.log("Elements remaining", fridge);
//   } else {
//     console.log(`There is no ${item} in the fridge`);
//   }
// };

fetchItemFromFridge(francisFridge, "🍕");
fetchItemFromFridge(francisFridge, "🍕");
fetchItemFromFridge(francisFridge, "🏜️");
