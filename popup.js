document.getElementById("submit").addEventListener("click", myFunction);



function myFunction() {
    var person = prompt("Please paste the url below", "url here");

    if (person !== null) {
        document.body.style.cursor = "url(person), auto";
}
}
