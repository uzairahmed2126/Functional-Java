// pure

function toHex(n) {
    let hex = n.toString(16);
    return hex;
}
console.log(toHex(10));

function rgbToHex(R, G, B) {
    return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}
console.log(rgbToHex(15, 15, 15));

function add(a, b) {
    return a + b;
}
console.log(add(5, 9));

function exclusiveOr(A, B) {
    return (A || B) && !(A && B);
}
console.log(exclusiveOr(1, 1));


// function computeTruthTable(operator) {
//     const truthValues = [true, false];
//     const table = [];
//     for (const A of truthValues) {
//         for (const B of truthValues) {
//             const value = operator(A, B);
//             table.push({ A, B, value });
//         }
//     }
//     return table;
// }
// function showTruthTable(operator) {
//     console.table(computeTruthTable(operator));
// }
// showTruthTable(2);
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
