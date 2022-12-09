const colors = ["white", "black", "green"];
console.log(colors);
console.log(colors[0]);
console.log(colors.length);

/**
 * normal-for loop
 */
let result = "";
for (let i = 0; i <= colors.length - 1; i++) {
    result += `${colors[i]} `;
}
console.log(result);

/**
 * for-in loop
 */
result = "";
for (let index in colors) {
    result += `${colors[index]} `;
}
console.log(result);

/**
 * for-of loop
 */
result = "";
for (let color of colors) {
    result += `${color} `;
}
console.log(result);

/**
 * forEach function
 */
result = "";
colors.forEach(function (color) {
    result += `${color} `;
});
console.log(result);

/**
 * forEach with arrow function
 */
result = "";
colors.forEach(color => result += `${color} `);
console.log(result);

// complex Array
const employees = [
    {
        sno: "A001",
        name: "Rajan",
        age: 24,
        designation: "Software Engineer"
    },
    {
        sno: "A002",
        name: "Mahesh",
        age: 28,
        designation: "Sr.Software Engineer"
    },
    {
        sno: "A003",
        name: "John",
        age: 32,
        designation: "Tech Lead"
    },
    {
        sno: "A004",
        name: "Wilson",
        age: 38,
        designation: "Manager"
    },
    {
        sno: "A005",
        name: "Laura",
        age: 42,
        designation: "Director"
    }
];

console.log(employees);

/**
 * print junior employees age <= 30
 */
const jrEmployees = [];
for (let employee of employees) {
    if (employee.age <= 30) {
        jrEmployees.push(employee);
    }
}
console.log(jrEmployees);

/**
 * filter
 */
const juniorEmployees = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(juniorEmployees);

/**
 * map
 */
const juniorEmployees1 = employees.map((employee) => {
    return employee.age;
});
console.log(juniorEmployees1);

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Country - State - City
 * Ex : India - Telanaga - <all>
 */

/**
 * https://github.com/dr5hn/countries-states-cities-database
 */



