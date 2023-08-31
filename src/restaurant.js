
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("div");
    header.classList.add("header-container");

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "food city"; 
    header.appendChild(restaurantName);
    pageContent.appendChild(header);

    const briefDescription = document.createElement("h1");
    briefDescription.textContent = "Satisfying your cravings since 2022";
    header.appendChild(briefDescription);

    const briefs = document.createElement("p");
    briefs.textContent = "Experience our seasonal menu in a beautiful classic environment Eat the tastiest meal from our the comfort of food city"
    header.appendChild(briefs);

    const tableBtn = document.createElement("button");
    tableBtn.setAttribute("id", "tableBtn");
    tableBtn.classList.add("tab");
    tableBtn.textContent = "BOOK A TABLE";
    header.appendChild(tableBtn);




    const headerImage = document.createElement("div");
    headerImage.classList.add("header-image");
    const image = document.createElement("img");
    image.src = "./img/namu.jpg";
    image.height = "500";
    image.width = "500";
    headerImage.appendChild(image);
    pageContent.appendChild(headerImage);


    content.appendChild(pageContent);
}
export default createRestaurantHomePage;