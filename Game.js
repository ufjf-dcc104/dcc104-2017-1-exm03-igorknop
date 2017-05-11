var canvas;
var ctx;

function init(){
  canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = 520;
  canvas.height = 480;
  ctx = canvas.getContext("2d");
}
