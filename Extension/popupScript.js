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
var urlRows = document.getElementsByClassName('url');
var cursorsRows = document.getElementsByClassName('cursors');
var moreRows = document.getElementsByClassName('more');
buts = document.getElementsByTagName('button');
chosen = document.getElementsByClassName('chosen');

//varibles end

//eventlisners start
//class
for (i=0; i < buts.length; i ++){
    document.getElementById(buts[i].id).addEventListener('click', select)
    }
//id
document.getElementById("infoLink").addEventListener('click', informationLink);
document.getElementById('save').removeEventListener('click', select);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('URL').removeEventListener('click', select);
document.getElementById('URL').addEventListener('click', urlAppear);
document.getElementById('cursor').removeEventListener('click', select);
document.getElementById('cursor').addEventListener('click', cursorAppear);
document.getElementById('more').removeEventListener('click', select);
document.getElementById('more').addEventListener('click', more);



//eventlisners end

//on load start
document.addEventListener('DOMContentLoaded', function() {
    for (i=0; i < urlRows.length; i++){
        urlRows[i].style.display = "none";
    }
    for (i=0; i < moreRows.length; i++){
        moreRows[i].style.display = "none";
    }
}, false);
//on load end


//functions start
function informationLink (){
    parent.window.open('http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=popup');
}

function more(){
    document.getElementById('prev').style.display = "table-row";

    for (i=0; i < urlRows.length; i++){
        urlRows[i].style.display = "none";
    }

    for (i=0; i < cursorsRows.length; i++) {
        cursorsRows[i].style.display = "none";
    }

    for (i=0; i < moreRows.length; i++){
        moreRows[i].style.display = "table-row";
    }
}

function cursorAppear (){
    document.getElementById('prev').style.display = "table-row";

    for (i=0; i < moreRows.length; i++){
        moreRows[i].style.display = "none";
    }
    for (i=0; i < urlRows.length; i++){
        urlRows[i].style.display = "none";
    }
    for (i=0; i < cursorsRows.length; i++){
        cursorsRows[i].style.display = "table-row";
    }
}

function urlAppear(){
    document.getElementById('prev').style.display = "none";

    for (i=0; i < moreRows.length; i++){
        moreRows[i].style.display = "none";
    }
    for (i=0; i < cursorsRows.length; i++){
        cursorsRows[i].style.display = "none";
    }

    for (i=0; i < urlRows.length; i++){
        urlRows[i].style.display = "table-row";
    }
}

function select() {
    selection = this.id;
document.getElementById("chosen").innerText = selection;
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
}

function saveOptions() {
    _gaq.push(['_trackEvent', selection, 'clicked']);

    chrome.storage.sync.set(
        {"option": selection, "link": custom}, function () {
            document.getElementById("result").value = "Saved Option as: " + selection;

        });
}