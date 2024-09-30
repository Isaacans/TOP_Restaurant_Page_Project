/* Declares and exports a function that builds the 'about' page */

import {contentContainer} from "./home-module.js"; 
import map from "./images/map.png"

function showAboutPage() {
    const content = document.createElement("div");
    content.classList.add("about");
    content.innerText = "We are open 24/7. Call us or email us at any time."

    const number = document.createElement("div");
    number.innerText = "Contact number: 111-222-333"
    content.appendChild(number);

    const email = document.createElement("div");
    email.innerText = "Contact email: contact@buildabowl.com"
    content.appendChild(email);

    const address = document.createElement("div");
    address.innerText = "Address: 123 Pine Valley Ln, Food Town, Earth"
    content.appendChild(address);

    const image = document.createElement("img");
    image.src = map;
    content.appendChild(image);

    contentContainer.appendChild(content);
};


export {showAboutPage}