function orbit(){
    var planet = document.getElementById("planet");
    var star = document.getElementById("star");

    var y0 = 450;
    var x0 = 950;

    var y2 = 41;
    var x2 = 46;

    var r = 360;
    var i = 0;

    var transtar = "translate("+x2+"vw, "+y2+"vh)"
    star.style.transform = transtar;

    setInterval(function(){
        x1 = r*Math.sin(i) + x0;
        y1 = r*Math.cos(i) + y0;

        var trans = "translate("+x1+"px, "+y1+"px)"
        planet.style.transform = trans;
        planet.style.transition = "100ms"; 

        i+=0.01745329;

        console.log(i);
    }, 10);
}

function fly(){
    var planet = document.getElementById("ball");
    x = planet.x;
    console.log(x);
    var trans = "translateY(" + (x-100) + "px)";
    planet.style.transform = trans;
    planet.style.transition = "100ms";
}
function downwardsGravity(){
    var planet = document.getElementById("ball");

    var gAcc = 5;
    var vel = 0;

    setInterval(function(){
        if(vel>=(document.getElementById("canvas").clientHeight-165)){
            var a = document.getElementById("canvas").clientHeight;
            console.log(a);
            var trans = "translateY(" + (a-165) + "px)";
            planet.style.transform = trans;
            planet.style.transition = "100ms";
            bounce(a, 100);
            bounce(a, 60);
            bounce(a, 20);
        }
        else{
            vel = vel + gAcc;
            var trans = "translateY(" + vel + "px)";
            planet.style.transform = trans;
            planet.style.transition = "100ms";
        }
    }, 10)
}