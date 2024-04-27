// // pure
function toHex(n) {
  let hex = n.toString(16);
  return hex;
}
// console.log(toHex(10));

function rgbToHex(R, G, B) {
  return "#" + [toHex(R), toHex(G), toHex(B)].join("");
}
// console.log(rgbToHex(15, 15, 15));

function add(a, b) {
  return a + b;
}
// console.log(add(5, 9));

function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}
// console.log(exclusiveOr(1, 1));

// pure
function greet(name) {
  return `Assalamu Alykum ${name}`;
}

// console.log(greet("uzair ahmed")); // Assalamu Alykum uzair ahmed
// console.log(greet("Shaikh")); // Assalamu Alykum Shaikh
// console.log(greet("Ali")); // Assalamu Alykum Ali

// Impure
let name = "Danish";
name = "Fayyaz";
function greet1() {
  return `Assalamu Alykum ${name}`;
}
// console.log(greet1()); //Fayyaz
// console.log(greet1()); //Fayyaz
// console.log(greet1()); //Fayyaz

// impure
function random() {
  return Math.random();
}
// console.log(random());

let a = 10;
function multiply(b) {
  return a * b;
}
// console.log(multiply(a, 20));

// The arrSlice function is impure because it relies on the external array arr. Pure functions should not depend on external data like this, making arrSlice impure.
function arrSlice(start, end) {
  return arr.slice(start, end);
}
// console.log(arrSlice(0, 2));
// not pure function
let num = 10;
function notPure(n) {
  return n + num;
}
// console.log(notPure());

let newArr = [];
function addTwo() {
  for (let i = 0; i < 10; i++) {
    newArr.push(i);
  }
  return newArr;
}
// console.log(addTwo());
// console.log(newArr);

function addTwo() {
  let newArr = [];
  for (let i = 0; i < 10; i++) {
    newArr.push(i);
  }
  return newArr;
}
// console.log(addTwo());

function printTable(num) {
  for (let i = 1; i <= num; i++) {
     console.log(i * num);
  }
  return `Number you were select ${num}`;
}
console.log(printTable(10));
