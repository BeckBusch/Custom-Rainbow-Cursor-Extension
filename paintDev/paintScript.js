var can32 = document.getElementById("canvas32");
var ctx32 = can32.getContext("2d");
ctx32.fillStyle = "#c1c1c1";
ctx32.fillRect(0,0,320,320);

function hover(e)
{
    x = Math.floor(e.clientX/10);
    y = Math.floor(e.clientY/10);
    a = x * 10;
    b = y * 10;
    ctx32.fillStyle = "#afafaf";
    ctx32.fillRect(a,b,10,10);
}
function draw32(e)
{
    x = Math.floor(e.clientX/10);
    y = Math.floor(e.clientY/10);
    a = x * 10;
    b = y * 10;
    ctx32.fillStyle = "#ff002b";
    ctx32.fillRect(a,b,10,10);
}