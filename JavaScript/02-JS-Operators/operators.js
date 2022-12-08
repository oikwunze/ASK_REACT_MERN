/**
 * 1. arithmetic + - / * %
 * 2. shorthand += -= *= /=
 * 3. logical operators && ||
 * 4. Conditional : < > <= >= !==
 * 5. ternary ?:
 * 6. incr, decr ++ --
 * 7. equality == , ===
 */

let num1 = 100;
let num2 = 5;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`DIV : ${num1 / num2}`);

let a = 10;
let b = 20;
let add = 100;
//add = add * (a + b);
add *= (a + b);
console.log(add);

let courseCompleted = true;
let projectFinished = true;
if(courseCompleted && projectFinished){
    console.log('You will get job soon');
}
else{
    console.log('Keep practising');
}

let marks = 35;
let result = "";
if(marks <= 35){
    result = "You Failed the exam";
}
else{
    result = "You Pass the exam";
}
console.log(result);

/**
 * ternary operator
 * (condition)? true : false;
 */
marks = 35;
result = "";
(marks <= 35)? result = "You Failed the exam" :  result = "You Pass the exam";
console.log(result);

let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// ==, ===
let p = 10;
let q = "10";
if(p === q){
    console.log('equal');
}
else{
    console.log('not equal');
}





