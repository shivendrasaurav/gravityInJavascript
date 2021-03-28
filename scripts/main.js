function pull(){
    var constant = 6.67*(10**-11);
    var planet = document.getElementById("planet");
    var star = document.getElementById("star");
    var m1 = 5973600000000000000000000;
    var m2 = m1*333000;
    var distance = 149000000;
    var force = constant*m1*m2/distance**2;
    console.log(force);
    var pull=0;

/*
    setInterval(function(){
        pull=pull+gravity;
        var trans = "translate("+pull**1.5+"px, "+pull**1.5+"px)"
        ball.style.transform = trans;       
        ball.style.transition = "200ms"; 
    }, 100);
*/
}

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