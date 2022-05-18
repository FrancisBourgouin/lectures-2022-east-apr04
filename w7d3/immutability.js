// // Immutability

// let bob = "bob";
// let bobby = bob;

// bobby = "Robert";

// console.log(bob, bobby);

// const names = ["George", "Nathan", "Yuri", "Brent"];
// const otherNames = names;

// otherNames[3] = "Ben";

// console.log(names, otherNames);

// const betterNames = ["George", "Nathan", "Yuri", "Brent"];
// const betterOtherNames = [...betterNames];
// const otherNamesWithoutSpread = betterNames.map((name) => name);

// betterOtherNames[3] = "Ben";

// console.log(betterNames, betterOtherNames);

// const someArrayOfObjects = [{ a: 1 }, { b: 2 }];
// const otherArrayOfObjects = [...someArrayOfObjects];

// otherArrayOfObjects[0].a = 9001;
// otherArrayOfObjects.push({ c: 3 });

// console.log(someArrayOfObjects, otherArrayOfObjects);

const someArrayOfObjects = [{ a: 1 }, { b: 2 }];
const otherArrayOfObjects = [...someArrayOfObjects];

const updatedObject = { ...otherArrayOfObjects[0] };
updatedObject.a = 9001;
otherArrayOfObjects[0] = updatedObject;

console.log(someArrayOfObjects, otherArrayOfObjects);
