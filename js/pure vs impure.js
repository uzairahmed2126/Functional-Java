// pure
function add(a, b) {
    return a + b;
}
console.log(add(5, 9));

// pure
function greet(name) {
    return `Assalamu Alykum ${name}`;
}

console.log(greet('uzair ahmed'));// Assalamu Alykum uzair ahmed 
console.log(greet('Shaikh'));// Assalamu Alykum Shaikh
console.log(greet('Ali'));// Assalamu Alykum Ali 



// Impure
let name = 'Danish'
name = 'Fayyaz'
function greet1() {
    return `Assalamu Alykum ${name}`;
}
console.log(greet1());//Fayyaz
console.log(greet1());//Fayyaz
console.log(greet1());//Fayyaz

// impure
function random() {
    return Math.random();
}
console.log(random());


let a = 10;
function multiply(b) {
    return a * b;
}
console.log(multiply(a, 20));

// The arrSlice function is impure because it relies on the external array arr. Pure functions should not depend on external data like this, making arrSlice impure.
const arr = [1, 2, 3, 4, 5];
function arrSlice(start, end) {
    return arr.slice(start, end);
}
console.log(arrSlice(0, 2));