

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){

        window.open("http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=install");
        chrome.runtime.openOptionsPage();

    }else if(details.reason == "update"){

        window.open("http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=update");
        chrome.runtime.openOptionsPage();
    }
});