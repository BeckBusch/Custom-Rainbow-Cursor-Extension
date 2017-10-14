function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var type = getParameterByName('type');

if (type == "install") {
alert("Welcome new user\nPlease use this page to learn about the extension");
}
else if (type == "update") {
alert("Welcome back\nThe extension has been updated\nYou can use this page to learn about the changes that have been made");
};

