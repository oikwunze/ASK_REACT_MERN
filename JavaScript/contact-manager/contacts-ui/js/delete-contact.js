import * as ContactService from "../../services/ContactService.js";

/**
 * when the page is loaded, get Contact Id from url and send to server
 */
window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (contactId && contactId.length > 0) {
        ContactService.deleteContact(contactId).then((response) => {
            if (response.data) {
                window.location.href = "/contact-manager/index.html";
            }
        }).catch((error) => {
            console.error(error);
        });
    }
})