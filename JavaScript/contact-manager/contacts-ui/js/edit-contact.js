import * as ContactService from "../../services/ContactService.js";


/**
 * when the page is loaded, get Contact Id from url and send to server
 */
window.addEventListener('DOMContentLoaded', () => {

    /**
     * when the page loaded get groups data from server and display as dropdown
     */
    ContactService.getAllGroups().then((groupResponse) => {
        const groups = groupResponse.data;
        populateDropdown(groups);
    }).catch((error) => {
        console.error(error);
    });

    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (contactId && contactId.length > 0) {
        ContactService.getContact(contactId).then((contactResponse) => {
            const contact = contactResponse.data;
            ContactService.getGroup(contact).then((groupResponse) => {
                const group = groupResponse.data;
                populateFormData(contact, group)
            }).catch((error) => {
                console.error(error);
            })
        }).catch((error) => {
            console.error(error);
        });
    }
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
 * populate contact data in the form
 */
const populateFormData = (contact, group) => {
    document.querySelector("#name-input").value = contact.name;
    document.querySelector("#image-input").value = contact.imageUrl;
    document.querySelector("#mobile-input").value = contact.mobile;
    document.querySelector("#email-input").value = contact.email;
    document.querySelector("#company-input").value = contact.company;
    document.querySelector("#title-input").value = contact.title;
    document.querySelector("#group-select-input").value = contact.groupId;
    document.querySelector("#display-image").setAttribute("src", contact.imageUrl);
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
const addContactForm = document.querySelector("#edit-contact-form");
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
    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (Object.keys(contact).length > 0 && contactId && contactId.length > 0) {
        // if create is success, redirect to home page
        ContactService.updateContact(contact, contactId).then((response) => {
            if (response.data) {
                window.location.href = "/contact-manager/index.html";
            }
        }).catch((error) => {
            console.error(error);
        })
    }
})
