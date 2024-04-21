// function recursiveFactorial(n) {
//     if (n === 0) return 1;
//     return n * recursiveFactorial(n - 1);
// }
// console.log(recursiveFactorial(3));


// function printTwoTable(n) {
//     if (n === 0) return;
//     printTwoTable(n - 1);
//     return (`${n} + ${n} = ${2 * n}`);
// }
// // console.log(printTwoTable(10));

// let table = 5;
// function printTable(n) {
//     if (n === 0) return;
//     printTable(n - 1);
//     console.log(n * table);
//     // for (let i = 1; i <= 10; i++) {
//     //     console.log(n*i);
//     // }
// }
// printTable(10);

// function recursiveStr(str) {
//     if (str.length === 0) return;
//     console.log(`Name: ${str}\nLength: ${str.length}\nFirst Letter: ${str.slice(0, 1)}\nLast Letter: ${str.slice(-1)}\nPadStart: ${str.slice(4, str.length).padStart(str.length, '*')}`);
// }
// recursiveStr('Uzair');

// function iterativeFibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     let previous = 0;
//     let current = 1;
//     for (let i = n; i > 1; i--) {
//         let next = previous + current;
//         previous = current;
//         current = next;
//     }
//     console.log(current);
// }
// iterativeFibonacci(2);


// function filter(predicateFn, array) {
//     if (array.length === 0) return [];
//     const [firstItem, ...rest] = array;
//     const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
//     return filteredFirst.concat(filter(predicateFn, rest));
// }
// // Example usage
// const numbers = [1, 2, 3, 4, 5, 6];
// const isEven = num => num % 2 === 0;
// const isOdd = num => num % 2 !== 0;

// const filteredNumbers = filter(isOdd, numbers);
// console.log(filteredNumbers); // Output: [2, 4, 6]

// function ab(a, b) {
//     return [a + b];
// }
// console.log(ab(1, 2));


// function pure(a, b) {
//     return a + b;
// }
// console.log(pure(1, 2));
// let a = 10;
// let b = 10;
// function impure() {
//     return a + b;
// }
// console.log(impure(a, b))

// function rec(n) {
//     if (n === 0) return false;
//     rec(n - 1);
//     console.log(n);
//     return 0;
// }
// console.log(rec(10));


// function whatIsPureFunction(a, b) {
//     return a + b;
// }
// console.log(whatIsPureFunction(10, 20));
// function explainImmutability() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(i);
//     }
//     return arr
// }
// console.log(explainImmutability());
// const originalArray = [1, 2, 3, 4, 5];
// const modifiedArray = [...originalArray, 6]; 

// clouser
function first() {
    let a = 'i am outer';
    function sec() {
        return a;
    }
    return sec();
}
console.log(first());
