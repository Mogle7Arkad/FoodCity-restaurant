
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("div");
    header.classList.add("header-container");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("headName");
    restaurantName.textContent = "food city"; 
    header.appendChild(restaurantName);
    pageContent.appendChild(header);

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const briefDescription = document.createElement("h1");
    briefDescription.textContent = "Satisfying cravings since 2022";
    mainContent.appendChild(briefDescription);

    const briefs = document.createElement("p");
    briefs.textContent = "Experience our seasonal menu in a beautiful classic environment Eat the tastiest meal from the comfort of food city"
    mainContent.appendChild(briefs);

    const tableBtn = document.createElement("button");
    tableBtn.setAttribute("id", "tableBtn");
    tableBtn.classList.add("tab");
    tableBtn.textContent = "BOOK A TABLE";
    mainContent.appendChild(tableBtn);
    content.appendChild(pageContent);
    content.appendChild(mainContent);
}
export default createRestaurantHomePage;