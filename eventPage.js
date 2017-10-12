ignoreUpdate = ["3.3.0", "3.3.1"]

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