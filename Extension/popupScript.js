var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-98900189-2']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

custom = "";

buts = document.getElementsByTagName('button');
for (i=0; i < buts.length; i ++){
    document.getElementById(buts[i].id).addEventListener('click', select)
}
document.getElementById('save').removeEventListener('click', select);
document.getElementById('save').addEventListener('click', saveOptions);

function select() {
    selection = this.id;
    document.getElementById('chosen').innerText = selection;
    if ( (selection != 'other') && (selection != 'colors') && (selection != 'save') ) {
        document.body.style.cursor = "url(cursors/arrows/" + selection + ".png), auto";
        document.getElementById('preview').src = "cursors/arrows/" +selection + ".png";
    }
    else if (selection == 'other'){
        custom = (document.getElementById('other_input').value);
        document.getElementById('preview').src = custom;
        var img = document.getElementById('preview');
        var imgWide = img.naturalWidth;
        var imgHigh = img.naturalHeight;
        if ((imgWide > 128) || (imgHigh > 128)) {
            alert("Your custom image is larger that 128x128. This can not be used as a cursor.")
            document.getElementById('preview').src = "";
            document.getElementById('preview').style.visibility = "initial";
        }
        else if ((imgWide > 32)||(imgHigh > 32)) {
            alert("Your custom image is larger that 32 pixels. This may not look good as a cursor.");
            document.getElementById('preview').style.visibility = "initial";
            document.body.style.cursor = "url(" + custom + "), auto";
            }
        else {
            document.getElementById('preview').style.visibility = "initial";
            document.body.style.cursor = "url(" + custom + "), auto";
        }
    }
    else if (selection == 'colors'){
        colClass = document.getElementsByClassName('colours');
        for (i = 0; i < colClass.length; i++){
            colClass[i].style.display = "table-cell";
        }
    }
}

function saveOptions(){
    _gaq.push(['_trackEvent', selection, 'clicked']);

    chrome.storage.sync.set(
        {"option": selection, "link": custom}, function() {
            document.getElementById("result").value = "Saved Option as: " + selection + " and Link as: " + custom;

        });
}
