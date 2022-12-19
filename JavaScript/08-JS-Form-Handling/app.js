const registerFormElement = document.querySelector("#register-form");

const getSelectedGender = () => {
    let selected = "";
    for (let node of document.querySelectorAll("input[name = 'gender']:checked")) {
        selected = node.value;
        return selected;
    }
};

registerFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        username: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        designation: document.querySelector("#designation").value,
        gender: getSelectedGender(),
        bio: document.querySelector("#bio").value,
        terms: document.querySelector("#terms").checked
    };
    console.log(user);
})