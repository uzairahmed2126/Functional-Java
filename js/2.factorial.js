function recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
}
// console.log(recursiveFactorial(3));


function printTwoTable(n) {
    if (n === 0) return;
    printTwoTable(n - 1);
    return (`${n} + ${n} = ${2 * n}`);
}
// console.log(printTwoTable(10));


function printTable(n) {
    if (n === 0) return;
    printTable(n - 1);
    console.log(n * 2)
}
printTable(10);