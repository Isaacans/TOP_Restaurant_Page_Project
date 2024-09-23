/*
<footer>
    Images by <a href="http://www.freepik.com/">freepik</a>
</footer> 
*/

const footer = document.createElement("footer");
const text = document.createTextNode("Images by ");
footer.appendChild(text);

const link = document.createElement("a");
link.setAttribute("href", "http://www.freepik.com/")
const linkContent = document.createTextNode("freepik");
link.appendChild(linkContent);
footer.appendChild(link);

document.body.appendChild(footer);
