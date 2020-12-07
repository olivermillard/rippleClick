document.addEventListener("click", rippleClick);
var mainContainer = document.getElementById("mainContainer");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function rippleClick(event) {
  var X = event.clientX;
  var Y = event.clientY;
  var R = 10;
  console.log(X, Y);
  ctx.lineWidth = 3;
  ctx.fillStyle = "#000000";

  ctx.beginPath();
  ctx.arc(X, Y, R, 0, 2 * Math.PI);
  ctx.stroke();
}
