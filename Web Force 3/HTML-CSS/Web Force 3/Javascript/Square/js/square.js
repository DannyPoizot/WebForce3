let square = document.getElementById("square");

let btnL = document.getElementById("btnL");
let btnU = document.getElementById("btnU");
let btnD = document.getElementById("btnD");
let btnR = document.getElementById("btnR");

function move(direction, speed = 50){
  switch (direction) {
    case "left": square.style.left = square.offsetLeft - speed + "px";
    break;
    case"up": square.style.top = square.offsetTop - speed + "px"
    break;
    case "down": square.style.top = square.offsetTop + speed + "px";
    break;
    case "right": square.style.left = square.offsetLeft + speed + "px";
    break;
  }
}

btnL.onclick = function() {
  // console.log("Gauche");
  move("left");
}

btnU.onclick = function() {
  // console.log("Haut");
  move("up");
}

btnD.onclick = function() {
  // console.log("Bas");
  move("down");
}

btnR.onclick = function() {
  // console.log("Droite");
  move("right");
}
document.onkeydown = function(e) {
  switch (e.key) {
    case "ArrowLeft": move("left");
    break;
    case "ArrowUp": move("up");
    break;
    case "ArrowDown": move("down");
    break;
    case "ArrowRight": move("right");
    break;
  }
}
