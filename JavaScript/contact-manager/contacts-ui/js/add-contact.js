import * as ContactService from "../../services/ContactService.js";


/**
 * when the page loaded get groups data from server and display as dropdown
 */
window.addEventListener('DOMContentLoaded', () => {
    ContactService.getAllGroups().then((groupResponse) => {
        const groups = groupResponse.data;
        populateDropdown(groups);
    }).catch((error) => {
        console.error(error);
    });
})

/**
 * populate Dropdown
 */
const populateDropdown = (groups) => {
    const selectElement = document.querySelector('#group-select-input');
    let optionElement = `<option value="">Select a Group</option>`;
    for (let group of groups) {
        optionElement += `<option value="${group.id}">${group.name}</option>`
    }
    selectElement.innerHTML = optionElement;
};

/**
 * change on Image Url for image display
 */
const imageUrlElement = document.querySelector("#image-input");
imageUrlElement.addEventListener('input', () => {
    const imageUrl = imageUrlElement.value;
    const displayImageElement = document.querySelector('#display-image');
    displayImageElement.setAttribute('src', imageUrl);
})

/**
 * when the form is submitted
 */
const addContactForm = document.querySelector("#add-contact-form");
addContactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // read the form data
    const contact = {
        name: document.querySelector("#name-input").value,
        imageUrl: document.querySelector("#image-input").value,
        mobile: document.querySelector("#mobile-input").value,
        email: document.querySelector("#email-input").value,
        company: document.querySelector("#company-input").value,
        title: document.querySelector("#title-input").value,
        groupId: document.querySelector("#group-select-input").value,
    };
    // if create is success, redirect to home page
    ContactService.createContact(contact).then((response) => {
        if (response.data) {
            window.location.href = "/contact-manager/index.html";
        }
    }).catch((error) => {
        console.error(error);
    })
})

















