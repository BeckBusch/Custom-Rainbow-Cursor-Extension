document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("rainbow").addEventListener("onclick", select('rainbow'));
    document.getElementById("fish").addEventListener("click", select('fish'));
    document.getElementById("pokeball").addEventListener("click", select('pokeball'));
    document.getElementById("stripe").addEventListener("click", select('stripe'));
    document.getElementById("vader").addEventListener("click", select('vader'));
    document.getElementById("saber").addEventListener("click", select('saber'));

    document.getElementById("colors").addEventListener("click", select('colors'));
    document.getElementById("other").addEventListener("click", select('other'));

    document.getElementById("red").addEventListener("click", select('red'));
    document.getElementById("orange").addEventListener("click", select('orange'));
    document.getElementById("yellow").addEventListener("click", select('yellow'));
    document.getElementById("lime").addEventListener("click", select('lime'));
    document.getElementById("green").addEventListener("click", select('green'));
    document.getElementById("teal").addEventListener("click", select('teal'));
    document.getElementById("light_blue").addEventListener("click", select('light_blue'));
    document.getElementById("blue").addEventListener("click", select('blue'));
    document.getElementById("indigo").addEventListener("click", select('indigo'));
    document.getElementById("purple").addEventListener("click", select('purple'));
    document.getElementById("pink").addEventListener("click", select('pink'));
    document.getElementById("magenta").addEventListener("onclick", select('magenta'));
});



function select(selection) {
    chosen = selection;
    document.getElementById('chosen').innerText = selection;
    if ( (selection != 'other') && (selection != 'colors') ) {
        document.body.style.cursor = "url(cursors/arrows/" + selection + ".png), auto";
        document.getElementById('preview').src = "cursors/arrows/" +selection + ".png";
        document.getElementById('previewLarge').src = "images/" +selection + ".png";
    }
    else if (selection == 'other'){
        custom = (document.getElementById('other_input').value);
        document.getElementById('previewLarge').src = "";
        document.getElementById('preview').style.visibility = "none";
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
            colClass[i].style.visibility = "visible";
        }
    }
}

// Saves options to chrome.storage
function save_options() {
    chrome.storage.sync.set(
        {option: chosen, external: custom}
    );
}