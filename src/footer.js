const createFooter = () => {
    const content = document.querySelector("#content");

    const footer = document.createElement("div");
    footer.classList.add("footer-container");

    const links = document.createElement("div");
    links.classList.add("links");

    const footerContact = document.createElement("div");
    footerContact.classList.add("Contact");
    
    const linksHead = document.createElement("h4");
    linksHead.classList.add("links-head");
    linksHead.textContent = "Quick Links";
    links.appendChild(linksHead);

    const about = document.createElement("div");
    about.classList.add("links-content");
    about.textContent = "About";
    links.appendChild(about);

    const courses = document.createElement("div");
    courses.classList.add("links-content");
    courses.textContent = "Courses";
    links.appendChild(courses)

    const footerLogin = document.createElement("div");
    footerLogin.classList.add("links-content");
    footerLogin.textContent = "Login";
    links.appendChild(footerLogin);

    footer.appendChild(links)

    const contact = document.createElement("h4");
    contact.classList.add("links-head");
    contact.textContent = "Contact";
    footerContact.appendChild(contact);

    const address = document.createElement("div");
    address.classList.add("links-content");
    address.textContent = "Abuja, Nigeria";
    footerContact.appendChild(address);

    const phone = document.createElement("div");
    phone.classList.add("links-content");
    phone.textContent = "Phone: +234-705-345-55";
    footerContact.appendChild(phone)

    const mailing = document.createElement("div");
    mailing.classList.add("links-content");
    mailing.textContent = "e-mail: @foodcitee.ng";
    footerContact.appendChild(mailing);

    footer.appendChild(footerContact);

    content.appendChild(footer);
}
export default createFooter;