import "./styles.css"; // Loads the style sheet
import "./footer-module.js"; // Adds the footer to the page
import showHomePage, {contentContainer} from "./home-module.js"; 
import {showMenuPage} from "./menu-module.js";
import {showAboutPage} from "./about-module.js";


// Get buttons to allow highlighting of active nav button
const buttons = document.getElementsByTagName("button");

showHomePage(); // Shows home page on load
buttons[0].classList.add("active");

// Logic to process nav button clicks and 'switch' pages using module functions 
// Set an event listener on parent element of target buttons
document.getElementsByTagName("nav")[0].addEventListener("click", function(event) {

    // Only responds to nav button clicks
    if (event.target.matches(".nav-button")) {
        contentContainer.innerHTML = ""; // First clears the page
        
        for (const button of buttons) {
            if (button.classList.contains("active")) {
                button.classList.remove("active");
            }
        }

        // Calls render function based on which button was clicked
        const action = event.target.getAttribute("data-action");
        switch (action) {
            case "home":
                showHomePage();
                buttons[0].classList.toggle("active");
                break;
            case "menu":
                showMenuPage();
                buttons[1].classList.toggle("active");
                break;
            case "about":
                showAboutPage();
                buttons[2].classList.toggle("active");
                break;
        }
        
    }
});