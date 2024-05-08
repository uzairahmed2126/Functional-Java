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
  let a = "i am outer";
  function sec() {
    return a;
  }
  return sec();
}
// console.log(first());

function sum(numbers) {
  let total = 0;
  if (numbers.length === 1) {
    return numbers[0];
  }
  return sum(numbers.slice(1));
}
// console.log(sum([1, 2, 4, 3]));

function recursiveFactorial(n) {
  //   if (n === 0) return 1;
  //   return n * recursiveFactorial(n - 1);
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}
// console.log(recursiveFactorial(5));

function printTable(n) {
  //   if (n > 0) return n;
  //   return n * printTable(n++);
  //   let res = 0;
  //   for (let i = 1; i <= n; i++) {
  // let i = 1;
  // do {
  //   console.log(`${n * i}`);
  //   i++;
  // } while (i <= 10);
  // //   }
  // return `you enter : ${n}`;
}
// console.log(printTable(10));

function length(str) {
  if (str === "") return 0;
  return 1 + length(str.slice(1));
}
// console.log(length("apple")); //➞ 5
// console.log(length("make")); //➞ 4
// console.log(length("a")); //➞ 1
// console.log(length("")); //➞ 0

function search(arr, item) {
  function binarySearch(low, high) {
    if (low > high) {
      return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] < item) {
      return binarySearch(mid + 1, high);
    } else {
      return binarySearch(low, mid - 1);
    }
  }

  return binarySearch(0, arr.length - 1);
}
// console.log(search([1, 2, 3, 4], 3)); //➞ 2
// console.log(search([2, 4, 6, 8, 10], 8)); //➞ 3
// console.log(search([1, 3, 5, 7, 9], 11)); //➞ -1

function iterativeFibonacci(n) {
  // return n === 0 || n === 1 ? 0 : 1;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}
// console.log(iterativeFibonacci(2));

function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFactorial(n - 1);
}
// console.log(recursiveFibonacci(2));

function reverse(str) {
  if (str.length < 1) {
    return str;
  }
  return str.slice(-1) + reverse(str.slice(0, -1));
}
console.log(reverse("hello")); //➞ "olleh"
console.log(reverse("world")); //➞ "dlrow"
console.log(reverse("a")); //➞ "a"
console.log(reverse("")); //➞ ""

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(4));

function simpleTable(n) {
  if (n === 1) return n;
  return simpleTable(n-1);
}
console.log(simpleTable(10));



