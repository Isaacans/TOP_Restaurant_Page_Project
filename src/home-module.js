/* Declares and exports a function that builds below HTML tags/content
along with a reference to the to the div#content element:

    <h1>Welcome to Build a Bowl</h1>
    <p>Choose from our wholesome range of nutritious ingredients to design your personal meal!</p>
*/
const contentContainer = document.getElementById("content");

function showHomePage() {
    const heading = document.createElement("h1");
    const headingContent = document.createTextNode("Welcome to Build a Bowl");
    heading.appendChild(headingContent);
    
    const para = document.createElement("p");
    const paraContent = document.createTextNode("Choose from our wholesome range of nutritious ingredients to design your personal meal!");
    para.appendChild(paraContent);
    
    contentContainer.appendChild(heading);
    contentContainer.appendChild(para);
};

export {showHomePage as default, contentContainer}