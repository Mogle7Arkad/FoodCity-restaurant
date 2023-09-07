import createRestaurantHomePage from "./restaurant";
import createContactPage from "./contact";
import createFooter from "./footer";
import createMenuPage from "./menu";

const createTabs = () => {
    const content = document.querySelector("#content");
    const tabs = document.createElement("div");
    tabs.classList.add("tabs-btn");

    const header = document.createElement("div");
    header.classList.add("header-container");

    // heading
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("headName");
    restaurantName.textContent = "food city"; 
    header.appendChild(restaurantName);
    content.appendChild(header);

    // tabs
    const div1 = document.createElement("button");
    const div2 = document.createElement("button");
    const div3 = document.createElement("button");
    const div4 = document.createElement("button");

    div1.setAttribute("id", "home-btn");
    div2.setAttribute("id", "menu-btn");
    div3.setAttribute("id", "contact-btn");
    div4.setAttribute("id", "login-btn");

    div1.classList.add("tab");
    div2.classList.add("tab");
    div3.classList.add("tab");
    div4.classList.add("tab");

    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";
    div4.textContent = "Login";

    tabs.appendChild(div1);
    tabs.appendChild(div2);
    tabs.appendChild(div3);
    tabs.appendChild(div4);
    
    header.appendChild(tabs);

    content.appendChild(header)


    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
        createFooter();
    })

    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
        createFooter();
    })

    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
        createFooter();
    })
    div4.addEventListener('click', () =>{

    })
}

function clearContent() {
    const content = document.querySelector("#content");
    const baseDiv = document.querySelector(".base-div");
    // const contentDiv = document.querySelector(".content-div");
    const footer = document.querySelector(".footer-container");
    if (baseDiv) {
        content.removeChild(baseDiv);
        content.removeChild(footer);
    }
}

export default createTabs;