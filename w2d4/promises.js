const someAsyncFancyHOF = (element, actionWhenSuccess, actionWhenFail) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      actionWhenSuccess(element);
    } else {
      actionWhenFail(element);
    }
  }, 1000);
};

// Callback -> Promises

// Define a promise (Pending)
// Keep a promise (fulfilled)
// Break a promise (rejected)

const someAsyncPromise = (element) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        resolve(element);
      } else {
        reject(element);
      }
    }, 1000);
  });
};

// const result = someAsyncPromise("Woop woop");
// console.log(result);

// someAsyncPromise("Woop woop")
//   .then((element) => console.log(`Yay ! ${element}`))
//   .catch((element) => console.log(`SAAD ${element}`))
//   .finally(() => console.log("THE END"));

// const listOfPromises = []
// for(let i = 0; i < 100; i++){
//   listOfPromises.push(someAsyncPromise(1))
// }

someAsyncPromise("Woop woop")
  .then((element) => console.log(`Yay ! ${element}`))
  .then(() => someAsyncPromise("Wiggle wiggle"))
  .then((element) => console.log("yep", element))
  .then(() => someAsyncPromise("Pouet pouet"))
  .then((element) => console.log("yep!", element))
  .catch(() => console.log("OH NO"));

someAsyncPromise("Woop woop")
  .then((element) => `${element}11111`)
  .then(() => someAsyncPromise("Wiggle wiggle"));

// WE WANT TO DOWNLOAD 5 PAGES

// UP TO 5

// ALL 5

const listOfPromises = [
  someAsyncPromise("Woop woop"),
  someAsyncPromise("Wiggle wiggle"),
  someAsyncPromise("Pouet pouet"),
];

Promise.all(listOfPromises)
  .then((results) => console.log(results))
  .catch((err) => console.log("OH NO", err));
