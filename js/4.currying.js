function greet(greeting, name) {
    return `${greeting} ${name}`
}

console.log(greet('hey', 'John'));

function curryGreet(greeting) {
    return function (name) {
        return `${greeting} ${name}`
    }
}

const greetItal = curryGreet('Ciao');
console.log(greetItal('Alanzo'));

const greetTex = curryGreet('Howdy');
console.log(greetTex("Alonzo"));
console.log(greetTex("Alan"));