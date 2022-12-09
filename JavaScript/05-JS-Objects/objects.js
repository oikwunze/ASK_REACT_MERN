const student = {
    name: "Rajan",
    age: 23,
    course: "BTech",
    college: "CBIT"
};
console.log(student);
console.log(student.address); // undefined
console.log(student.name); // Rajan
console.log(student['name']); // Rajan

// dynamic props
const propName = "course";
console.log(student[propName]);

// nested object
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
console.log(user);
console.log(user.address);

console.log(`Lat : ${user.address.geo.lat} Lng : ${user.address.geo.lng}`);

// destructuring
let {lat: theLat, lng: theLng} = user.address.geo;
console.log(`Lat : ${theLat} Lng : ${theLng}`);

// JSON <-> Object
/**
 * Object -> JSON -> JSON.stringify()
 * JSON -> Object -> JSON.parse();
 */
const mobile = {
    brand: "Apple",
    color: "Silver",
    price: 35000
};
let mobileStr = JSON.stringify(mobile);
console.log(mobileStr);

let mobileObj = JSON.parse(mobileStr);
console.log(mobileObj);

/**
 * get all keys
 * get all values
 * get all entries
 */
console.log(Object.keys(mobile));
console.log(Object.values(mobile));
console.log(Object.entries(mobile));

for (let key of Object.keys(mobile)) {
    console.log(`key : ${key}  value : ${mobile[key]}`);
}







