/*
console.log('person 1');
console.log('person 2');
setTimeout(() => {
    console.log('person 3');
}, 3000);
console.log('person 4');
console.log('person 5');
*/

// callbacks
const employees = [{sno: 'A01', name: 'Rajan'}, {sno: 'A02', name: 'Mahesh'}];

const createNewEmployee = (employee, callback) => {
    setTimeout(() => {
        console.log('From Create Employee');
        employees.push(employee);
        callback();
    }, 2000)
};

const readEmployees = () => {
    setTimeout(() => {
        console.log("reading employees");
        console.log(employees);
    }, 1000);
};

createNewEmployee({sno: "A03", name: "John"}, readEmployees);













