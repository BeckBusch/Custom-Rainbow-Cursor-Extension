var imgURL = chrome.runtime.getURL("cursors/");

function paymentsCheck(){
    google.payments.inapp.getPurchases({
    'parameters': {'env': 'prod'},
    'success': onLicenseUpdate,
    'failure': onLicenseUpdateFail
});
};

chrome.storage.sync.get('option', function (obj) {

    if (obj['option'] == "other") {
        chrome.storage.sync.get('link', function (obj) {
            document.body.style.cursor = "url(" + obj['link'] + "), auto";
        });
    }
    else if (obj['option'] == "default") {
        document.body.style.cursor = "auto";

    }
    else {

        document.body.style.cursor = "url(" + imgURL + "arrows/" + obj['option'] + ".png), auto";
        var items = document.getElementsByTagName("a");
        for (var i = 0; i < items.length; i++) {
            items[i].style.cursor = "url(" + imgURL + "pointers/" + obj['option'] + ".png), auto";
        }
    }
});


chrome.storage.sync.get('trail', function (obj) {
    if(obj['trail'] == undefined) {
       return;
    }
    else if (obj['trail'] == "trail-dot") {
        chrome.storage.sync.get(['color', 'size'], function(obj){
            var dots = [],
                mouse = {
                    x: 0,
                    y: 0
                };
            var Dot = function() {
                this.x = 0;
                this.y = 0;
                this.node = (function(){
                    var n = document.createElement("div");
                    n.className = "trail";
                    n.style.position = "absolute";
                    n.style.height = String(obj['size'])+"px";
                    n.style.width = String(obj['size'])+"px";
                    n.style.borderRadius = String(obj['size']/2)+"px";
                    n.style.background = obj['color'];
                    n.style.pointerEvents = "none";
                    document.body.appendChild(n);
                    return n;
                }());
            };
            var trail = document.getElementsByClassName('trail');
            Dot.prototype.draw = function() {
                this.node.style.left = this.x + "px";
                this.node.style.top = this.y + "px";
            };
            for (var i = 0; i < 12; i++) {
                var d = new Dot();
                dots.push(d);
            }
            function draw() {
                var x = mouse.x,
                    y = mouse.y;
                dots.forEach(function(dot, index, dots) {
                    var nextDot = dots[index + 1] || dots[0];
                    dot.x = x;
                    dot.y = y;
                    dot.draw();
                    x += (nextDot.x - dot.x) * .6;
                    y += (nextDot.y - dot.y) * .6;

                });
            }
            addEventListener("mousemove", function(event) {
                mouse.x = event.pageX;
                mouse.y = event.pageY;
            });
            function animate() {
                draw();
                requestAnimationFrame(animate);
            }
            animate();
        })
    }
    else if (obj['trail'] == 'google' &&  ){}
});