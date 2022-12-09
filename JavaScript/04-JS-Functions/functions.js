/**
 * 1. normal function
 * 2. function expression
 * 3. arrow function
 */

function greetNF(name) {
    console.log(`Iam from greetNF ${name}`);
}

greetNF("John");

let greetFE = function (name) {
    console.log(`Iam from greetFE ${name}`);
}
greetFE("John");

let greetAF = (name) => {
    console.log(`Iam from greetAF ${name}`);
}
greetAF("John");

const sum = (a, b) => {
    let result = a + b;
    return result;
};
let theSum = sum(10, 20);
console.log(theSum);

const printNumbers = (startNumber, endNumber, incrNumber) => {
    if (startNumber > endNumber) {
        console.log('start number should be less than end number bro');
    } else {
        let result = "";
        for (let i = startNumber; i <= endNumber; i += incrNumber) {
            result += `${i} `;
        }
        console.log(result);
    }
}
printNumbers(0, 10, 1);
printNumbers(5, 20, 1);
printNumbers(10, 3000, 5);










