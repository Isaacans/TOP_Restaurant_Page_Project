/* Declares and exports a function that builds the 'menu' page starting from below layout

    <div class="menu">
        <div class="menu-card"></div>
        <div class="menu-card"></div>
        <div class="menu-card"></div>
    </div>
*/
import {contentContainer} from "./home-module.js"; 

function createNewFood(foodName, foodType, foodPrice) {
    const card = document.createElement("div");
    card.classList.add("menu-card")


    const name = document.createElement("div");
    name.innerText = foodName;
    card.appendChild(name);

    const type = document.createElement("div");
    type.innerText = foodType;
    card.appendChild(type);

    const price = document.createElement("div");
    price.innerText = foodPrice;
    card.appendChild(price);

    return card
};

function showMenuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerText = "*Select up to 5 items per bowl"

    menu.appendChild(createNewFood("Egg Noodle", "Base", "$2"));
    menu.appendChild(createNewFood("Rice Noodle", "Base", "$2"));
    menu.appendChild(createNewFood("White Rice", "Base", "$2"));
    menu.appendChild(createNewFood("Brown Rice", "Base", "$2"));
    menu.appendChild(createNewFood("Bread", "Base", "$2"));
    menu.appendChild(createNewFood("Boiled Eggs", "Protein", "$3"));
    menu.appendChild(createNewFood("Scrambled Eggs", "Protein", "$3"));
    menu.appendChild(createNewFood("Fried Eggs", "Protein", "$3"));
    menu.appendChild(createNewFood("Canned White Beans", "Protein", "$2"));
    menu.appendChild(createNewFood("Canned Red Beans", "Protein", "$2"));
    menu.appendChild(createNewFood("Canned Lentils", "Protein", "$2"));
    menu.appendChild(createNewFood("Spam (Canned Pork)", "Protein", "$4"));
    menu.appendChild(createNewFood("Canned Beef", "Protein", "$4"));
    menu.appendChild(createNewFood("Canned Tuna", "Protein", "$4"));
    menu.appendChild(createNewFood("Canned Mackerel", "Protein", "$4"));
    menu.appendChild(createNewFood("Canned Beetroot", "Vegetable", "$2"));
    menu.appendChild(createNewFood("Canned Corn", "Vegetable", "$2"));
    menu.appendChild(createNewFood("Canned Peas", "Vegetable", "$2"));
    menu.appendChild(createNewFood("Canned Tomato", "Vegetable", "$1"));
    menu.appendChild(createNewFood("Canned Mushroom", "Vegetable", "$2"));

    contentContainer.appendChild(menu);
};


export {showMenuPage}