const francisFridge = {
  "🥔": 5,
  "🍕": 1,
  "🧋": 4,
  "🎂": 1,
};

const fetchItemFromFridge = (fridge, item, callbackWhenSuccess, callbackWhenFail) => {
  try {
    if (!fridge[item]) {
      throw new Error();
    }
    callbackWhenSuccess(item);
  } catch (error) {
    callbackWhenFail(error);
  }
};

const showTheItem = (item) => console.log(item);
const showTheError = (error) => console.log(error);

fetchItemFromFridge(francisFridge, "🎵", showTheItem, showTheError);

fetchItemFromFridge(francisFridge, "🎵")
  .then(showTheItem)
  .catch(showTheError)
  .finally("be happy");

// const fetchItemFromFridge = (fridge, item) => {
//   if (fridge[item] > 0) {
//     fridge[item] = fridge[item] - 1;
//     console.log("Elements remaining", fridge);
//   } else {
//     console.log(`There is no ${item} in the fridge`);
//   }
// };

// fetchItemFromFridge(francisFridge, "🍕");
// fetchItemFromFridge(francisFridge, "🍕");
// fetchItemFromFridge(francisFridge, "🏜️");

try {
  const bob = 5;
  bob = 10;
} catch (err) {
  console.log(err);
}

setTimeout(() => {
  try {
    const bob = 5;
    bob = 10;
  } catch (err) {
    console.log(err);
  }
}, 1000);

// try {
//   const bob = 5;
//   setTimeout(() => {
//     bob = 10;
//   }, 1000);
// } catch (err) {
//   console.log("WORKS AS EXPECTED");
//   console.log(err);
// }

console.log("WILL I SHOW UP ?");
