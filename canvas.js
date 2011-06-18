// Canvas JS
var canvas, ctx, ceil;

$(document).ready(function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ceil = 1000;
  init();
});

function init()
{
  // ctx.fillRect(x, y, width, height);
  ctx.fillRect(50, 50, 100, 100);

  ctx.strokeRect(100, 100, 100, 100);

  ctx.beginPath();
  ctx.moveTo(150, 50);
  ctx.lineTo(200, 250);
  ctx.lineTo(250, 250);
  ctx.closePath();
  ctx.fill();
}

function clear()
{
  ctx.clearRect(0, 0, 1000, 1000);
}

function colorIt()
{
  var r = random(255);
  var b = random(255);
  var g = random(255);

  var style = "rgb(" + r + "," + b + "," + g + ")";

  ctx.fillStyle = style;
}

function drawStuff()
{
  var numObjects = random(random());
  for (var i = 0; i < numObjects; i++) {
    var choose = random(1);
    if (choose == 0) {
      rectangle();
    }
    else {
      randomShape();
    }
  }
}

function rectangle()
{
  var x = random(random());
  var y = random(random());
  var w = random(random());
  var h = random(random());

  ctx.fillRect(x, y, w, h);
  colorIt();
}

function randomShape()
{
  ctx.beginPath();
  var beginPt = [random(random()), random(random())];
  ctx.moveTo(beginPt[0], beginPt[1]);
  var numLines = random(32);
  for (var i = 0; i < numLines; i++) {
    ctx.lineTo(random(), random());
  }
  ctx.lineTo(beginPt[0], beginPt[1]);
  ctx.closePath();
  ctx.fill();
  colorIt();
}

function random(aMax)
{
  var max;
  if (aMax) {
    max = aMax;
  }
  else {
    max = ceil;
  }
  return parseInt(Math.floor(Math.random()*(max + 1)));
}

setInterval("drawStuff()", random(500));
