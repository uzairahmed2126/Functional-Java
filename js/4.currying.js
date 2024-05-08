function greet(greeting, name) {
  return `${greeting} ${name}`;
}

console.log(greet("hey", "John"));

function curryGreet(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

const greetItal = curryGreet("Ciao");
console.log(greetItal("Alanzo"));

const greetTex = curryGreet("Howdy");
console.log(greetTex("Alonzo"));
console.log(greetTex("Alan"));

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const multiplyValue = multiply(2); //outer function
console.log(multiplyValue(3)); //inner function

userObj = {
  age: 20,
  name: "john",
};
function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}
let res = userInfo(userObj);
console.log(res("age"));

function first(a) {
  return function second(b) {
    return a + b;
  };
}
let result = first(10)(20);
console.log(result);
