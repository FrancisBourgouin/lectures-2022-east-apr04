// Callbacks
// can be used for synchronous code

const someHOF = (element, action) => {
  console.log("--------");
  action(element);
  console.log("--------");
};

const someAction = (element) => console.log(element);
const someOtherAction = () => console.log("Wiggle wiggle");

// someHOF("Hello!", someAction);
// someHOF("Hello!", someOtherAction);

// can be used for asynchronous code

const someAsyncHOF = (element, action) => {
  setTimeout(() => {
    console.log("--------");
    action(element);
    console.log("--------");
  }, 6000);
};

someAsyncHOF("Hello!", someAction);
someAsyncHOF("Hello!", someOtherAction);

// Try & Catch
// To have more resilient code (when we have bigger files normally)
// Works well with synchronous code

try {
  const num = 1;
  num = 5; // CATASTROPHIC ERROR
} catch (err) {
  console.log("WHY DID YOU TRY TO CHANGE A CONST YOU CRAZY");
  console.log(err);
}

// Manual throw if we want to manage other errors

try {
  if (Math.random() > 0.5) {
    throw new Error("YOU LOSE");
  }
  console.log("YOU WIN");
} catch (err) {
  console.log(err);
}

// Doesn't works well with asynchronous code (Put the try/catch inside the async callback)

try {
  const num = 1;
  setTimeout(() => {
    num = 5; // CATASTROPHIC ERROR
  }, 0);
} catch (err) {
  console.log("WHY DID YOU TRY TO CHANGE A CONST YOU CRAZY");
  console.log(err);
}

// We can use multiple callbacks

const someFancyHOF = (element, actionWhenSucces, actionWhenFail) => {
  if (Math.random() > 0.5) {
    actionWhenSucces(element);
  } else {
    actionWhenFail(element);
  }
};

// Multiple callbacks with Async

const someAsyncFancyHOF = (element, actionWhenSucces, actionWhenFail) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      actionWhenSucces(element);
    } else {
      actionWhenFail(element);
    }
  }, 1000);
};

// Promises (THEYRE FUN !)
// not really friendly with synchronous content
// Like callbacks, in a codified and structured way
// Be pending, resolved or rejected
// When resolved (success) then
// When rejected (failure) catch
// When everything is done finally

const someFunctionThatReturnsAPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
};

someFunctionThatReturnsAPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const resultOfFunction = someFunctionThatReturnsAPromise();

resultOfFunction
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// We call someFunction....
// We store the result (promise) inside the variable called resultOfFunction
