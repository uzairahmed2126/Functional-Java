function writeMessage(message, salutation, name) {
    return `<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}
document.write(writeMessage('Hey pal!', 'Party at my place tonight', 'bring snacks!'));

const add = function (x) {
    return x + 1;
}
const multiply = function (x) {
    return x * 2;
}
const composedFunction = function (x) { return multiply(add(x)) };
console.log(composedFunction(3)); // Output: 8