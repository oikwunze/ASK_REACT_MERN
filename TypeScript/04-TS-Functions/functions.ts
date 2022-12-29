const greet = (name:string,age:number):void => {
    let result:string = `Hello ${name}, you are ${age} yrs of old`;
   console.log(result);
};
greet("John", 40);

// print Object
interface Student{
    name : string;
    age : number;
    college : string;
}
const printStudent = (student:Student):void => {
    const result:string = JSON.stringify(student);
    console.log(result);
};
const student:Student = {
    name : "Rajan",
    age : 21,
    college : "CBIT"
};
printStudent(student);