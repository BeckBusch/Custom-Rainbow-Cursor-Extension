//google analyitics start
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-98900189-2']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
//google analyitics end

//varibles start
custom = "";
var urlRows = document.getElementById('contentUrl');
var cursorsRows = document.getElementById('contentCur');
var colorRows = document.getElementById('contentCol');
var nextLast = document.getElementById('changeButs');

saves = document.getElementsByClassName('save');
buts = document.getElementsByClassName('curChoice');
chosen = document.getElementsByClassName('chosen');
//varibles end

//eventlisners start
//class
for (i=0; i < buts.length; i ++){
    document.getElementById(buts[i].id).addEventListener('click', select, true)
    }

for (i=0; i < saves.length; i ++){
saves[i].addEventListener('click', saveOptions);
}


//id
document.getElementById("default").addEventListener('click', select, true)
document.getElementById("cols").addEventListener('click', colorsAppear);
document.getElementById("main").addEventListener('click', cursorAppear);
document.getElementById("infoLink").addEventListener('click', informationLink);
document.getElementById("upLink").addEventListener('click', uploadLink);
document.getElementById("other").addEventListener('click', other);
document.getElementById('URL').addEventListener('click', urlAppear);
document.getElementById('cursor').addEventListener('click', cursorAppear);
document.getElementById('fb').addEventListener('click', fbPage);
document.getElementById('fb2').addEventListener('click', fbPage);
//eventlisners end

//on load start
document.addEventListener('DOMContentLoaded', function() {
    urlRows.style.display = "none";
    colorRows.style.display = "none";
}, false);
//on oad end
//beforeunload start
window.addEventListener('beforeunload', function() {
    var r = confirm("To change your cursor,\nyou need to reload the page.\nIs it ok to reload now?\n");
    if (r == true) {
        chrome.tabs.getSelected(null, function(tab) {
            var code = 'window.location.reload();';
            chrome.tabs.executeScript(tab.id, {code: code});
        });
    }
});


//functions start
function informationLink (){
    parent.window.open('http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=popup');
}
function fbPage (){
    parent.window.open('https://www.facebook.com/CustomCursorExtension');
}

function uploadLink (){
    parent.window.open('http://beckbuschgithub.sytes.net/Custom-Rainbow-Cursor-Extension/imgurUp.html');
}


function colorsAppear (){
    document.getElementById('prev').style.display = "table-row";
    cursorsRows.style.display = "none";
    urlRows.style.display = "none";
    colorRows.style.display = "table-row-group";
    nextLast.style.display = "table-row-group";
}

function cursorAppear (){
    document.getElementById('prev').style.display = "table-row";
    cursorsRows.style.display = "table-row-group";
    urlRows.style.display = "none";
    colorRows.style.display = "none";
    nextLast.style.display = "table-row-group";
}

function urlAppear(){
    document.getElementById('prev').style.display = "none";
    cursorsRows.style.display = "none";
    urlRows.style.display = "table-row-group";
    colorRows.style.display = "none";
    nextLast.style.display = "none";
}

function select() {
    selection = this.id;
    document.getElementById("chosen").innerText = selection;
    document.body.style.cursor = "url(cursors/arrows/" + selection + ".png), auto";
    document.getElementById('preview').src = "cursors/arrows/" +selection + ".png";
    saveOptions()
};


function other() {
    selection = this.id;
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
    else if ((imgWide > 32) || (imgHigh > 32)) {
        alert("Your custom image is larger that 32 pixels. This may not look good as a cursor.");
        document.getElementById('preview').style.visibility = "initial";
        document.body.style.cursor = "url(" + custom + "), auto";
    }
    else {
        document.getElementById('preview').style.visibility = "initial";
        document.body.style.cursor = "url(" + custom + "), auto";
    }
    saveOptions()
};


function saveOptions() {
    _gaq.push(['_trackEvent', selection, 'clicked']);

    chrome.storage.sync.set(
        {"option": selection, "link": custom}, function () {
            document.getElementById("result").value = "Saved Option as: " + selection;

        });
}