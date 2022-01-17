var ban= document.getElementsByClassName('banner')[0];
var blo= document.getElementsByClassName('blocks')

for(var i = 1; i < 200; i++){
    ban.innerHTML += "<div class='blocks'></div>";
    blo[i].style.animationDelay=`${i * 0.05}s`;
}