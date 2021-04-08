//Global Variables
var objX = 0;
var obJY = 0;
var G = 0.000000000066743;
var meu = 0.8;
var g = 9.81;
var vel = 1;


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
    var a = document.getElementById("ball");
    vel++;
    time = Math.sqrt((2*800)/g);
    console.log(time);
    if(objY<620){
        objY = objY + vel*g;
        var transtar =  "translate("+objX+"px, "+objY+"px)";
        a.style.transform = transtar;
        a.style.transition = time*100+"ms";
        downwardsGravity();
    }
    else{
        objY = objY - vel*meu*g;
        var transtar =  "translate("+objX+"px, "+objY+"px)";
        a.style.transform = transtar;
        a.style.transition = time*100+"ms";
    }    
}

function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}
function toCenter(){
    var obj = document.getElementById("object");
    var x = (obj.offsetHeight/2);
    var y = (obj.offsetWidth/2);

    var cX = 1920/2;
    var cY = 1080/2;

    var i=0.4;
    var x1=x , y1=y;
    setInterval(function(){
        x1 = x1 + i;
        y1 = x1*x1;

        var trans = "translate("+x1+"px, "+y1+"px)"
        obj.style.transform = trans;
        obj.style.transition = "10ms"; 
    
        console.log(x1, y1);
        console.log("1st Quad");
   }, 10);
}

function getObjPos(){
    var bodyRect = document.body.getBoundingClientRect();
    var elemRect = document.getElementById("ball").getBoundingClientRect();
    var playRect = document.getElementById("canvas").getBoundingClientRect();
    
    objY = elemRect.top - bodyRect.top;
    objX = elemRect.left - bodyRect.left;

    var transtar =  "translate("+objX+"px, "+objY+"px)";
    document.getElementById("ball").style.transform = transtar;

    console.log(objX, objY);
}