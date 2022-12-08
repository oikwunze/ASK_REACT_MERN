// console statements
console.log("Iam a log message");
console.info("Iam an information message");
console.warn("Iam a warning message");
console.error("Iam an error message");
console.table({name : "John", age : 40});

/**
 * variable declaration
 * 1. cameCase for variables
 * 2. never start with number
 * 3. a-z, $, _ allowed
 */

/**
 * data types allowed string, number,boolean, object, array
 */
const employeeName = "John";
console.log("Employee Name : " + employeeName + " Type : " + typeof  employeeName); // dont use this.

/**
 * backtick operator (`)
 */
console.log(`Employee Name : ${employeeName} Type : ${typeof  employeeName}`); // always use this

const employeeAge = 40;
console.log(`Employee Age : ${employeeAge}`);

const isManager = true;
console.log(`is Manager ?  ${isManager}`);

// employee object
const employee = {
    name : "John",
    age : 40,
    isManager : true
};
console.log(employee);
console.log(`Employee Name : ${employee.name}`);
employee.age = 45;
console.log(employee);

// array
let techs = ["html", "css", "JavaScript"];
console.log(techs);
console.log(techs[0]);







