function higherOrderFunction(callback) {
  console.log("Executing the higher-order function");
  callback();
}

function callbackFunction() {
  console.log("Executing the callback function");
}
higherOrderFunction(callbackFunction);

function num1(callback) {
  console.log(1);
  callback();
}
function num2() {
  console.log(2);
}
num1(num2);

const person = Object.freeze({
  name: "John",
  age: 30,
});

// Attempting to modify a frozen object will not have any effect
person.age = 31;

console.log(person); // Output: { name: 'John', age: 30 }

function firstName(callback) {
  console.log("john");
  callback();
}
function lastName() {
  console.log("doe");
}
firstName(lastName);

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
// const triple = createMultiplier(3);

console.log(createMultiplier(double(5))(5)); // Output: 10
// console.log(triple(5)); // Output: 15
