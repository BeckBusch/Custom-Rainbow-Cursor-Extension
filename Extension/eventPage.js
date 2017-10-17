ignoreUpdate = ["3.3.0", "3.3.1", "3.3.2"]

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){

        window.open("http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=install");
        chrome.runtime.openOptionsPage();

    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        if  (ignoreUpdate.indexOf(thisVersion) == -1) {
            window.open("http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=update");
            chrome.runtime.openOptionsPage();
        }



    }
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-98900189-4']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();