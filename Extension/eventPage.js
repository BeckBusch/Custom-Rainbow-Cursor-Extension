chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        window.open("http://beckbusch.github.io/Custom-Rainbow-Cursor-Extension/?type=install");
    }
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-98900189-4']);
_gaq.push(['_trackPageview']);
_gaq.push(['_setCustomVar',
    4,                // This custom var is set to slot #1.  Required parameter.
    'UpdateVersion',    // The name of the custom variable.  Required parameter.
    chrome.runtime.getManifest().version,        // The value of the custom variable.  Required parameter.
                      //  (possible values might be Free, Bronze, Gold, and Platinum)
    2                 // Sets the scope to session-level.  Optional parameter.
]);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();