//module for creating contact page

const createContactPage = () =>{
    const content = document.querySelector("#content");

    const baseDiv = document.createElement("div");
    baseDiv.classList.add("base-div");

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-div");

    const contactDivHead = document.createElement("h4");
    contactDivHead.textContent = "Drop Us a message.";
    contactDiv.appendChild(contactDivHead);

    const form = document.createElement("form");
    form.classList.add("contact-form");

    const headingInput = document.createElement("input");
    headingInput.type = "text";
    headingInput.placeholder = "Name";
    form.appendChild(headingInput);

    const mailInput = document.createElement("input");
    mailInput.type = "email";
    mailInput.placeholder = "email@email.com";
    form.appendChild(mailInput);

    const messageInput = document.createElement("textarea");
    messageInput.placeholder = "Message";
    form.appendChild(messageInput);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    form.appendChild(submitButton);
    contactDiv.appendChild(form);
    baseDiv.appendChild(contactDiv);
    content.appendChild(baseDiv);
};

export default createContactPage;