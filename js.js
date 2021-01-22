let si = document.getElementById('si');
si.addEventListener("click", function(e){
    alert("Gracias, sabia que Aceptarias. TE AMO ❤❤");
});
/*
let no = document.getElementById('no');
no.addEventListener("mousemove", function(e){
    let x = Math.round( Math.random() * 93);
    let y = Math.round( Math.random() * 93);
    no.style.left = x+"%";
    no.style.top = y+"%";
});
*/
function mueveElBoton() {

    newWidth =( Math.random() * 450);
    newHeight = ( Math.random() * 450);

    document.getElementById('no').style.position= "absolute";
    document.getElementById('no').style.left= newWidth + "px";
    document.getElementById('no').style.top = newHeight + "px";
    
    /*
    document,getElementById('no').style.marginTop = newWidth + "px";
    document,getElementById('no').style.marginLeft = newHeight + "px";
    */
}