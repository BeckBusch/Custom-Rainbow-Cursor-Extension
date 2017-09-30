chrome.storage.sync.get('option', function (obj) {

    if (obj['option'] == "other") {
        chrome.storage.sync.get('link', function (obj) {
            document.body.style.cursor = "url(" + obj['link'] + "), auto";
        });
    }
    else {
        document.body.style.cursor = "url(chrome-extension://iclinnjcnpihmbogglkigdkhkeajbcck/cursors/arrows/" + obj['option'] + ".png), auto";
    }
});