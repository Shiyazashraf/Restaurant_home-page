function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    console.log('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 9599458624';

    const address = document.createElement('p');
    address.textContent = '🏠 Food angadi, perinthalmanna';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    
    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;