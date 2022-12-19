console.log(document);
console.log(document.title);
document.title = "Changed from JS File";
console.log(document.head);
console.log(document.body);

const h1Element = document.querySelector("h1");
console.log(h1Element);
h1Element.innerHTML = `<span style="color: red">Hello JS</span>`;

const changeTextButton = document.querySelector("#change-text-btn");
changeTextButton.addEventListener('click', (event) => {
    applyStyles();
});

// apply styles
const applyStyles = () => {
    const msgElement = document.querySelector("#msg");
    msgElement.style.backgroundColor = "lightgrey";
    msgElement.style.color = "teal";
    msgElement.style.fontFamily = "Arial,sans-serif";
    msgElement.style.padding = "10px";
};

// change width & height of image
const changeImage = () => {
    const imageElement = document.querySelector("#food-image");
    // change attributes
    const imageUrl = "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000";
    imageElement.setAttribute('src', imageUrl);
};


const showPassword = () => {
    // change password box to text box
    const inputElement = document.querySelector("#input");
    const buttonElement = document.querySelector("#the-button");

    if (inputElement.getAttribute('type') === "password") {
        buttonElement.innerText = "Hide Password";
        inputElement.setAttribute('type', "text");
    } else {
        buttonElement.innerText = "Show Password";
        inputElement.setAttribute('type', "password");
    }
};

// construct table
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
const displayEmployees = () => {
    let tableRowElement = "";
    for (let employee of employees) {

        tableRowElement += `<tr>
                            <td>${employee.sno}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.designation}</td>
                        </tr>\n`;
    }
    const tableBodyElement = document.querySelector("#table-body");
    tableBodyElement.innerHTML = tableRowElement;
};







