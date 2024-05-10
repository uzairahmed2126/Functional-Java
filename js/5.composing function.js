// const add = x => x + 1;
// const multiplyByTwo = x => x * 2;

// // Function composition using the compose function
// const compose = (f, g) => x => f(g(x));

// const addThenMultiplyByTwo = compose(multiplyByTwo, add);

// console.log(addThenMultiplyByTwo(5)); // Output: 12 (5 + 1 = 6, 6 * 2 = 12)

// const multiplyByTwo = (x) => x * 2;
// const add = (x) => x + 1;
// const compose = (f, g) => (x) => f(g(x));
// const addThenMultiplyByTwo = compose(add, multiplyByTwo);
// console.log(addThenMultiplyByTwo(5));

const table = (start = 1, end = 10) => start * end;
const compose = (f) => (x) => f(x);
const value = compose(table);
console.log(value(1));