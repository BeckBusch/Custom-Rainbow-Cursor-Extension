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
buts = document.getElementsByClassName('curChoice');
chosen = document.getElementsByClassName('chosen');
colButs = document.getElementsByClassName('colorButton');
//varibles end

//eventlisners start
//class
for (i=0; i < buts.length; i ++){
    document.getElementById(buts[i].id).addEventListener('click', select, true)
}
for (i=0; i <colButs.length; i ++) {
    document.getElementById(colButs[i].id).addEventListener('click', trailCol)
}
//trail
document.getElementById('trail-none').addEventListener('click', trailNone);
document.getElementById('size-slider').addEventListener('change',trailSize);
document.getElementById("trail-dot").addEventListener('click', trail);
//id
document.getElementById("default").addEventListener('click', select, true);
document.getElementById("infoLink").addEventListener('click', informationLink);
document.getElementById("upLink").addEventListener('click', uploadLink);
document.getElementById("other").addEventListener('click', other);
document.getElementById('gotoOptions').addEventListener('click', gotoOptions);
document.getElementById("other2").addEventListener('click', imgurUp);
document.getElementById('fb').addEventListener('click', fbPage);
document.getElementById('fb2').addEventListener('click', fbPage);
//eventlisners end

//onload start
//the idea behind this, is to call all the user preferences out of chrome storage, so that the defualt valuse of all the inputs are set to what teh user last used. this should make the ui more welcoming to the user.
//onload end


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
function trailNone(){
    chrome.storage.sync.set({'trail': "none"})
    document.getElementById("trail-result").value = "Removed Trail";

}
function trail () {
    selected = this.id;
    if (chrome.storage.sync.get('color', function(obj){return obj['color']}) == undefined) {
        chrome.storage.sync.set({"color": '#4663ff'})
    }
    if (chrome.storage.sync.get('size', function(obj){return obj['size']}) == undefined) {
        chrome.storage.sync.set({"size": 6})
    }
    chrome.storage.sync.set({"trail": selected});
    document.getElementById("trail-result").value = "Saved Option as: " + selected;
}
function trailSize(){
    sizeValue = this.value;
    demo = document.getElementById("dotTrailDemo");
    demo.style.height = String(sizeValue) + "px";
    demo.style.width = String(sizeValue) + "px";
    demo.style.borderRadius = String(sizeValue/2) + "px";
    chrome.storage.sync.set({'size': sizeValue});
    document.getElementById("trail-result").value = "Saved Size as: " + String(sizeValue);
}
function trailCol(){
    selectedCol = this.id;
    document.getElementById("dotTrailDemo").style.backgroundColor = selectedCol;
    chrome.storage.sync.set(
        {"color": selectedCol})
    document.getElementById("trail-result").value = "Saved Color as: " + selectedCol;
}

function informationLink (){
    parent.window.open('http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=popup');
}

function fbPage (){
    parent.window.open('https://www.facebook.com/CustomCursorExtension');
}

function gotoOptions(){
    chrome.runtime.openOptionsPage();
}

function uploadLink (){
    parent.window.open('http:/beckbusch.github.io/Custom-Rainbow-Cursor-Extension/imgurUp.html');
}

function select() {
    selection = this.id;
    document.getElementById("chosen").innerText = selection;
    document.body.style.cursor = "url(cursors/arrows/" + selection + ".png), auto";
    document.getElementById('preview').src = "cursors/arrows/" +selection + ".png";
    saveOptions()
}

function imgurUp(){
    selection = "other";
    custom = document.getElementById("uploadedImg").src;
    saveOptions();
}

function other() {
    selection = this.id;
    custom = (document.getElementById('other_input').value);
    document.getElementById('preview').src = custom;
    var img = document.getElementById('preview');
    var imgWide = img.naturalWidth;
    var imgHigh = img.naturalHeight;
    if ((imgWide > 128) || (imgHigh > 128)) {
        alert("Your custom image is larger that 128x128. This can not be used as a cursor.");
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
}

function saveOptions() {
    _gaq.push(['_trackEvent', selection, 'clicked']);

    chrome.storage.sync.set(
        {"option": selection, "link": custom}, function () {
        });
}