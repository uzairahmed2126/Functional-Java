function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        return outerVariable;
    }

    return innerFunction;
}

let closureExample = outerFunction();
console.log(closureExample()); // This will log: "I am from the outer function"


function outer() {
    let first = 'Uzair';

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
};
let counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2


let calculator = (function() {
  let result = 0;
  return {
    add: function(x) {
      result += x;
    },
    subtract: function(x) {
      result -= x;
    },
    getResult: function() {
      return result;
    }
  };
})();
calculator.add(5);
calculator.subtract(3);
console.log(calculator.getResult()); // Output: 2