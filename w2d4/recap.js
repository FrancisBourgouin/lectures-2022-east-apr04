// Callbacks

const listElementsAndDoSomething = (list, action) => {
  // Higher Order Function
  for (const item of list) {
    action(item);
  }
};

// I, [NAME OF APPLICANT] will eat potatoes

const someList = ["Heron", "Nathan", "Yuri", "Jennifer"];

const singAnElement = (element) => console.log(`🎵🎵${element}🎵🎵`);

const yellAnElement = (element) => console.log(element.toUpperCase());

listElementsAndDoSomething(someList, singAnElement);
listElementsAndDoSomething(someList, yellAnElement);

// const someDelayedAction = () => {
//   setTimeout(() => {
//     console.log("Pouet pouet");
//   }, 1000);
// };

// someDelayedAction()

// request(url, options, (err, data) => {

// })

let someValue = 0;

setTimeout(() => {
  someValue = 5;
}, 1000);

console.log(someValue);

// we define and set someValue to 0
// we set a timer to do the callback at a specified time, after every synchronous
// log to the console someValue (0)
// change the value of someValue to 5
