import * as ContactService from "../../services/ContactService.js";

/**
 * when the page is loaded, get Contact Id from url and send to server
 */
window.addEventListener('DOMContentLoaded', () => {
    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (contactId && contactId.length > 0) {
        ContactService.getContact(contactId).then((contactResponse) => {
            const contact = contactResponse.data;
            ContactService.getGroup(contact).then((groupResponse) => {
                const group = groupResponse.data;
                displayContactInfo(contact, group);
            }).catch((error) => {
                console.error(error);
            })
        }).catch((error) => {
            console.error(error);
        });
    }
})

/**
 * display contact information on UI
 */
const displayContactInfo = (contact, group) => {
    const contactRowElement = document.querySelector("#contact-row");
    if (contact && group && Object.keys(contact).length > 0 && Object.keys(group).length > 0) {
        const contactInfoElement = `<div class="col-sm-3">
                                        <img alt=""
                                             class="img-fluid rounded-circle shadow-lg"
                                             src="${contact.imageUrl}">
                                    </div>
                                    <div class="col-sm-8 offset-1">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                Name : <span class="fw-bold">${contact.name}</span>
                                            </li>
                                            <li class="list-group-item">
                                                Email : <span class="fw-bold">${contact.email}</span>
                                            </li>
                                            <li class="list-group-item">
                                                Mobile : <span class="fw-bold">${contact.mobile}</span>
                                            </li>
                                            <li class="list-group-item">
                                                Company : <span class="fw-bold">${contact.company}</span>
                                            </li>
                                            <li class="list-group-item">
                                                Title : <span class="fw-bold">${contact.title}</span>
                                            </li>
                                            <li class="list-group-item">
                                                Group : <span class="fw-bold">${group.name}</span>
                                            </li>
                                        </ul>
                                    </div>`;
        contactRowElement.innerHTML = contactInfoElement;
    }
};