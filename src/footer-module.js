/*
<footer>
    Images by <a href="http://www.freepik.com/">freepik</a>
</footer> 
*/

const footer = document.createElement("footer");

footer.innerText = "Photo by ";
const link = document.createElement("a");
link.setAttribute("href", "http://www.freepik.com/")
link.innerText = "freepik"
footer.appendChild(link);

footer.appendChild(document.createTextNode(" - Bowl icon by "));
const link2 = document.createElement("a");
link2.setAttribute("href", "https://www.freepik.com/icon/salad_11661826");
link2.innerText = "kmg design";
footer.appendChild(link2);

{/* <a href="https://www.freepik.com/search">Icon by Maan Icons</a> */}
{/* <a href="https://www.freepik.com/icon/salad_11661826">Icon by kmg design</a> */}
document.body.appendChild(footer);
