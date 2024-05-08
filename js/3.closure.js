function outerFunction() {
  let outerVariable = "The outer function";

  function innerFunction() {
    return outerVariable + "The inner function";
  }
  
  return innerFunction;
}

let closureExample = outerFunction();
console.log(closureExample());

function outer() {
  let first = "Uzair";

  function inner() {
    return first;
  }

  return inner;
}
let closure = outer();
console.log(closure());

function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
let counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

let calculator = (function () {
  let result = 0;
  return {
    add: function (x) {
      result += x;
    },
    subtract: function (x) {
      result -= x;
    },
    getResult: function () {
      return result;
    },
  };
})();
calculator.add(5);
calculator.subtract(3);
console.log(calculator.getResult()); // Output: 2

function outerFunc() {
  console.log("outer");
  return function innerFunc() {
    return "inner";
  }
}
let final = outerFunc();
console.log(final());

// 12 => Array Indexing
// Given an index and an array, return the value of the array with the given index.

function valueAt(arr, value) {
  let index = Math.floor(value);
  return arr[index];
}

// // Examples
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)); //);         //  6
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)); //);         //  5
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); //);         //  4

