import * as ContactService from '../../services/ContactService.js';

/**
 * when the page loaded, get the contacts data from server
 */
window.addEventListener('DOMContentLoaded', () => {
    ContactService.getAllContacts().then((response) => {
        const contacts = response.data;
        displayCards(contacts);
    }).catch((error) => {
        console.log(error);
    });
})

/**
 * display cards on UI
 */
const displayCards = (contacts) => {
    const cardRowElement = document.querySelector("#card-row");
    let cardsElement = "";
    for (let contact of contacts) {
        cardsElement += `<div class="col-sm-6 mt-3">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-3">
                                <img alt="" class="img-fluid rounded-circle"
                                     src="${contact.imageUrl}">
                            </div>
                            <div class="col-sm-8">
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
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column align-items-center">
                                <a class="btn btn-warning" href="contacts-ui/view-contact.html?contactId=${contact.id}">
                                    <i class="bi bi-eye-fill"></i>
                                </a>
                                <a class="btn btn-primary mt-2" href="contacts-ui/edit-contact.html?contactId=${contact.id}">
                                    <i class="bi bi-pencil-square"></i>
                                </a>
                                 <a class="btn btn-danger mt-2" href="contacts-ui/delete-contact.html?contactId=${contact.id}">
                                    <i class="bi bi-trash-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    cardRowElement.innerHTML = cardsElement;
};















