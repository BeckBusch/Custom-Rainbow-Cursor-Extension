var imgURL = chrome.runtime.getURL("cursors/");

chrome.storage.sync.get('option', function (obj) {

    if (obj['option'] == "other") {
        chrome.storage.sync.get('link', function (obj) {
            document.body.style.cursor = "url(" + obj['link'] + "), auto";
        });
    }
    else if (obj['option'] == "default") {
        document.body.style.cursor = "auto";

    }
    else {

        document.body.style.cursor = "url(" + imgURL + "arrows/" + obj['option'] + ".png), auto";
        var items = document.getElementsByTagName("a");
        for (var i = 0; i < items.length; i++) {
            items[i].style.cursor = "url(" + imgURL + "pointers/" + obj['option'] + ".png), auto";
        }
    }
});