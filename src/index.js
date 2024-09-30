import "./styles.css"; // Loads the style sheet
import "./footer-module.js"; // Adds the footer to the page
import showHomePage, {contentContainer} from "./home-module.js"; 
import {showMenuPage} from "./menu-module.js";
import {showAboutPage} from "./about-module.js";

showHomePage(); // Shows home page on load

// Logic to process nav button clicks and 'switch' pages using module functions 
// Set an event listener on parent element of target buttons
document.getElementsByTagName("nav")[0].addEventListener("click", function(event) {

    // Only responds to nav button clicks
    if (event.target.matches(".nav-button")) {
        contentContainer.innerHTML = ""; // First clears the page

        // Calls render function based on which button was clicked
        const action = event.target.getAttribute("data-action");
        switch (action) {
            case "home":
                showHomePage();
                break;
            case "menu":
                showMenuPage();
                break;
            case "about":
                showAboutPage();
                break;
        }
    }
});