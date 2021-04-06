function pressup(){
    var a = document.getElementById('up');
    a.style.background="#1e1e1e";
    a.style.color="#fcfcfc";
    setTimeout(function(){
        var a = document.getElementById('up');
        a.style.background="#fcfcfc";
        a.style.color="#1e1e1e";    
    }, 100);
}
function pressdown(){
    var a = document.getElementById('down');
    a.style.background="#1e1e1e";
    a.style.color="#fcfcfc";
    setTimeout(function(){
        var a = document.getElementById('down');
        a.style.background="#fcfcfc";
        a.style.color="#1e1e1e";    
    }, 100);
}
function pressshift(){
    var a = document.getElementById('shift');
    a.style.background="#1e1e1e";
    a.style.color="#fcfcfc";
    setTimeout(function(){
        var a = document.getElementById('shift');
        a.style.background="#fcfcfc";
        a.style.color="#1e1e1e";    
    }, 100);
}
function pressleft(){
    var a = document.getElementById('left');
    a.style.background="#1e1e1e";
    a.style.color="#fcfcfc";
    setTimeout(function(){
        var a = document.getElementById('left');
        a.style.background="#fcfcfc";
        a.style.color="#1e1e1e";    
    }, 100);
}
function pressright(){
    var a = document.getElementById('right');
    a.style.background="#1e1e1e";
    a.style.color="#fcfcfc";
    setTimeout(function(){
        var a = document.getElementById('right');
        a.style.background="#fcfcfc";
        a.style.color="#1e1e1e";    
    }, 100);
}
function pressjump(){
    var a = document.getElementById('jump');
    a.style.background="#1e1e1e";
    a.style.color="#fcfcfc";
    setTimeout(function(){
        var a = document.getElementById('jump');
        a.style.background="#fcfcfc";
        a.style.color="#1e1e1e";    
    }, 100);
}
function pressfire(){
    var a = document.getElementById('fire');
    a.style.background="#1e1e1e";
    a.style.color="#fcfcfc";
    setTimeout(function(){
        var a = document.getElementById('fire');
        a.style.background="#fcfcfc";
        a.style.color="#1e1e1e";    
    }, 100);
}

function keypress(){
    var x = event.keyCode;

    if(x == 38 || x == 87)
        pressup();

    if(x == 40 || x == 83)
        pressdown();

    if(x == 37 || x == 65)
        pressleft();

    if(x == 39 || x == 68)
        pressright();

    if(x == 16 || x == 16)
        pressshift();

    if(x == 88 || x == 88)
        pressjump();

    if(x == 67 || x == 67)
        pressfire();

}