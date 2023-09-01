// import createRestaurantHomePage from "./restaurant";

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

    div1.setAttribute("id", "home-btn");
    div2.setAttribute("id", "menu-btn");
    div3.setAttribute("id", "contact-btn");

    div1.classList.add("tab");
    div2.classList.add("tab");
    div3.classList.add("tab");

    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    header.appendChild(div1);
    header.appendChild(div2);
    header.appendChild(div3);

    content.appendChild(header)

    // div1.addEventListener('click', () => {
    //     clearContent();
    //     createRestaurantHomePage();
    // })

    // div2.addEventListener('click', () => {
    //     clearContent();
    //     createMenuPage();
    // })

    // div3.addEventListener('click', () => {
    //     clearContent();
    //     createContactPage();
    // })
}

// function clearContent() {
//     const conent = document.querySelector("#content");
//     const pageContent = document.querySelector(".page-content");
//     if (pageContent) {
//         content.removeChild(pageContent)
//     }
// }

export default createTabs;