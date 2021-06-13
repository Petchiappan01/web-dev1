
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomNumber3 = Math.floor(Math.random()*6) + 1;
var randomNumber4 = Math.floor(Math.random()*6) + 1;
var randomNumber5 = Math.floor(Math.random()*6) + 1;
var randomNumber6 = Math.floor(Math.random()*6) + 1;
var randomNumber7 = Math.floor(Math.random()*6) + 1;
var randomNumber8 = Math.floor(Math.random()*6) + 1;
var randomNumber9 = Math.floor(Math.random()*6) + 1;
var randomNumber10 = Math.floor(Math.random()*6) + 1;
var randomNumber11 = Math.floor(Math.random()*6) + 1;
var randomNumber12 = Math.floor(Math.random()*6) + 1;
var randomNumber13 = Math.floor(Math.random()*6) + 1;
var randomNumber14 = Math.floor(Math.random()*6) + 1;
var randomNumber15 = Math.floor(Math.random()*6) + 1;
var randomNumber16 = Math.floor(Math.random()*6) + 1;
var randomNumber17 = Math.floor(Math.random()*6) + 1;
var randomNumber18 = Math.floor(Math.random()*6) + 1;
var randomNumber19 = Math.floor(Math.random()*6) + 1;
var randomNumber20 = Math.floor(Math.random()*6) + 1;
var randomNumber21 = Math.floor(Math.random()*6) + 1;
var randomNumber22 = Math.floor(Math.random()*6) + 1;
var randomNumber23 = Math.floor(Math.random()*6) + 1;
var randomNumber24 = Math.floor(Math.random()*6) + 1;

var colorsList = ['red', 'green', 'blue', 'orange', 'yellow', 'purple'];
document.getElementById("box31").style.backgroundColor = colorsList[randomNumber11];
document.getElementById("box32").style.backgroundColor = colorsList[randomNumber5];
document.getElementById("box33").style.backgroundColor = colorsList[randomNumber10];
document.getElementById("box34").style.backgroundColor = colorsList[randomNumber4];
document.getElementById("box35").style.backgroundColor = colorsList[randomNumber15];
document.getElementById("box36").style.backgroundColor = colorsList[randomNumber3];
document.getElementById("box37").style.backgroundColor = colorsList[randomNumber17];
document.getElementById("box38").style.backgroundColor = colorsList[randomNumber22];
document.getElementById("box39").style.backgroundColor = colorsList[randomNumber9];

  document.getElementById("box1").style.backgroundColor = colorsList[randomNumber1];
  document.getElementById("box2").style.backgroundColor = colorsList[randomNumber2];
  document.getElementById("box3").style.backgroundColor = colorsList[randomNumber3];
  document.getElementById("box4").style.backgroundColor = colorsList[randomNumber4];
  document.getElementById("box5").style.backgroundColor = colorsList[randomNumber5];
  document.getElementById("box6").style.backgroundColor = colorsList[randomNumber6];
  document.getElementById("box7").style.backgroundColor = colorsList[randomNumber7];
  document.getElementById("box8").style.backgroundColor = colorsList[randomNumber8];
  document.getElementById("box9").style.backgroundColor = colorsList[randomNumber9];
  document.getElementById("box10").style.backgroundColor = colorsList[randomNumber10];
  document.getElementById("box11").style.backgroundColor = colorsList[randomNumber11];
  document.getElementById("box12").style.backgroundColor = colorsList[randomNumber12];
  document.getElementById("box13").style.backgroundColor = colorsList[randomNumber13];
  document.getElementById("box14").style.backgroundColor = colorsList[randomNumber14];
  document.getElementById("box15").style.backgroundColor = colorsList[randomNumber15];
  document.getElementById("box16").style.backgroundColor = colorsList[randomNumber16];
  document.getElementById("box17").style.backgroundColor = colorsList[randomNumber17];
  document.getElementById("box18").style.backgroundColor = colorsList[randomNumber18];
  document.getElementById("box19").style.backgroundColor = colorsList[randomNumber19];
  document.getElementById("box20").style.backgroundColor = colorsList[randomNumber20];
  document.getElementById("box21").style.backgroundColor = colorsList[randomNumber21];
  document.getElementById("box22").style.backgroundColor = colorsList[randomNumber22];
  document.getElementById("box23").style.backgroundColor = colorsList[randomNumber23];
  document.getElementById("box24").style.backgroundColor = colorsList[randomNumber24];

  document.getElementById("box24").addEventListener('click', function swap() {
    var temp = 0;
    temp = document.getElementById("box24").style.backgroundColor
    document.getElementById("box24").style.backgroundColor = document.getElementById("box25").style.backgroundColor
    temp = document.getElementById("box25").style.backgroundColor

  });
