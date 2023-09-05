const createMenuPage = () =>{
    const content = document.querySelector("#content");

    const baseDiv = document.createElement("div");
    baseDiv.classList.add("base-div");

    const heading = document.createElement("h1");
    heading.textContent = "Delicious Food Menu And Prices";

    const swallowCont = document.createElement("div");
    swallowCont.textContent = "Swallow";
    swallowCont.classList.add("cat-cont");

    const swallow = document.createElement("div");
    swallow.classList.add("category");

    const swallow1 = document.createElement("div");
    swallow1.textContent = "Pounded Yam";
    swallow.appendChild(swallow1)

    const price1 = document.createElement("div");
    price1.textContent = "N 500.00";
    swallow.appendChild(price1);

    const catCont = document.createElement("div");
    catCont.textContent = "Soup";
    catCont.classList.add("cat-cont");

    const soup = document.createElement("div");
    soup.classList.add("category");

    const soup1 = document.createElement("div");
    soup1.textContent = "Egusi soup";
    soup.appendChild(soup1)

    const soupPrice1 = document.createElement("div");
    soupPrice1.textContent = "N 500.00";
    soup.appendChild(soupPrice1);

    swallowCont.appendChild(swallow);
    catCont.appendChild(soup);
    
    baseDiv.appendChild(heading);
    baseDiv.appendChild(swallowCont);
    baseDiv.appendChild(catCont);

    content.appendChild(baseDiv);
}
export default createMenuPage;