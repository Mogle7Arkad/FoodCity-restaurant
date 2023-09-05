
const createRestaurantHomePage = () => {

    const content = document.querySelector("#content");

    const baseDiv = document.createElement("div");
    baseDiv.classList.add("base-div");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content-div");

    const container = document.createElement("div");
    container.classList.add("container");
    
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    

    const briefDescription = document.createElement("h1");
    briefDescription.textContent = "Satisfying cravings since 2022";
    mainContent.appendChild(briefDescription);

    const briefs = document.createElement("p");
    briefs.textContent = "Experience our seasonal menu in a beautiful classic environment."
    mainContent.appendChild(briefs);

    const tableBtn = document.createElement("div");
    tableBtn.setAttribute("id", "tableBtn");
    tableBtn.classList.add("tabs");
    tableBtn.textContent = "BOOK A TABLE";
    mainContent.appendChild(tableBtn);
    
    contentDiv.appendChild(mainContent);
    contentDiv.appendChild(container);

    baseDiv.appendChild(contentDiv);

    content.appendChild(baseDiv);
}
export default createRestaurantHomePage;