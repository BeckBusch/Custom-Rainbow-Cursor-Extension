document.getElementById("submit").addEventListener("click", myFunction);



function myFunction() {
    javascript:var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "http://beckbusch.github.io/html-chrome-extension/cursor.css");
document.getElementsByTagName("head")[0].appendChild(element);
}
