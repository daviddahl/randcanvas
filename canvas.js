// Canvas JS
var canvas, ctx, ceil;

$(document).ready(function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  var width = window.innerWidth;
  var height = window.innerHeight;
  ceil = width;
  $(canvas).attr({height: height, width: width});
  init();
});

function init()
{
  // ctx.fillRect(x, y, width, height);
  setInterval("drawStuff()", random(50));
}

function clear()
{
  ctx.clearRect(0, 0, 1000, 1000);
}

function colorIt(aStrokeStyle)
{
  var r = random(255);
  var b = random(255);
  var g = random(255);

  var style = "rgb(" + r + "," + b + "," + g + ")";
  if (aStrokeStyle) {
    ctx.strokeStyle = style;
  } else {
    ctx.fillStyle = style;
  }
}

function curvyShape()
{
  var beginPt = [random(), random()];
  var numCurves = random(32);
  ctx.lineWidth = random(20);
  ctx.beginPath();
  ctx.moveTo(beginPt[0], beginPt[1]);
  for (var i = 0; i < numCurves; i++) {
    ctx.moveTo(random(), random());
    ctx.quadraticCurveTo(random(), random(), random(), random());
  }
  ctx.moveTo(beginPt[0], beginPt[1]);
  ctx.quadraticCurveTo(random(), random(), random(), random());
  ctx.stroke();
  colorIt(1);
}

function drawStuff()
{
  var numObjects = random(random());
  for (var i = 0; i < numObjects; i++) {
    var choose = random(3);
    if (choose == 0) {
      rectangle();
    }
    else if (choose == 1){
      randomShape();
    }
    else if (choose == 2){
      circle();
    }
    else if (choose == 3){
      curvyShape();
    }
  }
  text();
}

function text(aText)
{
  var fontsize = random(200);
  ctx.font = fontsize + "pt Arial";
  ctx.strokeText("FUCK", random(), random());
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

function circle()
{
  ctx.beginPath();
  ctx.arc(random(100), random(500), random(500), 0, Math.PI*2, false);
  ctx.closePath();
  ctx.fill();
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

