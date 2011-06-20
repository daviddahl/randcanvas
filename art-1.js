// Canvas JS
var canvas, ctx, ceil, txtArr, txtArrLen;

$(document).ready(function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  var width = window.innerWidth;
  var height = window.innerHeight;
  ceil = width;
  $(canvas).attr({height: height, width: width});

  txtArr = lulzsectxt.split(" ");
  txtArrLen = txtArr.length;
  init();
});

function getWord(aIndex)
{
  if (aIndex) {
    return txtArr[aIndex];
  }
  var idx = random(txtArrLen + 1);
  return txtArr[idx];
}

function getWords()
{
  var idx = random(txtArrLen + 1);

  var word0 = txtArr[idx - 1];
  var word2 = txtArr[idx + 1];

  return word0 + " " + txtArr[idx] + " " + word2;
}

function init()
{
  // ctx.fillRect(x, y, width, height);
  setInterval("drawStuff()", random(500));
}

function clear()
{
  ctx.clearRect(0, 0, 1000, 1000);
}

function colorIt(aStrokeStyle, aOverride)
{
  if (aOverride) {
    var r = aOverride[0];
    var b = aOverride[1];
    var g = aOverride[2];
  } else {
    var r = random(255);
    var b = random(255);
    var g = random(255);
  }

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
    text();
  }

  // // save the current frame, append it to the saved-frames
  // var img = canvas.toDataURL("image/png");
  // var imgNodeTxt = '<span><img src="' + img + '"/></span>';
  // console.log(imgNodeTxt);
  // $("#saved-frames").append($(imgNodeTxt));

}

function text(aText)
{
  var fontsize = random(100);
  ctx.font = fontsize + "pt Arial";
  ctx.strokeText(getWords(), random(), random());
  ctx.fillStyle("black");
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

var lulzsectxt = "Dear Internets,This is Lulz Security, better known as those evil bastards from twitter. We just hit 1000 tweets, and as such we thought it best to have a little chit-chat with our friends (and foes).For the past month and a bit, we've been causing mayhem and chaos throughout the Internet, attacking several targets including PBS, Sony, Fox, porn websites, FBI, CIA, the U.S. government, Sony some more, online gaming servers (by request of callers, not by our own choice), Sony again, and of course our good friend Sony.While we've gained many, many supporters, we do have a mass of enemies, albeit mainly gamers. The main anti-LulzSec argument suggests that we're going to bring down more Internet laws by continuing our public shenanigans, and that our actions are causing clowns with pens to write new rules for you. But what if we just hadn't released anything? What if we were silent? That would mean we would be secretly inside FBI affiliates right now, inside PBS, inside Sony... watching... abusing...Do you think every hacker announces everything they've hacked? We certainly haven't, and we're damn sure others are playing the silent game. Do you feel safe with your Facebook accounts, your Google Mail accounts, your Skype accounts? What makes you think a hacker isn't silently sitting inside all of these right now, sniping out individual people, or perhaps selling them off? You are a peon to these people. A toy. A string of characters with a value.This is what you should be fearful of, not us releasing things publicly, but the fact that someone hasn't released something publicly. We're sitting on 200,000 Brink users right now that we never gave out. It might make you feel safe knowing we told you, so that Brink users may change their passwords. What if we hadn't told you? No one would be aware of this theft, and we'd have a fresh 200,000 peons to abuse, completely unaware of a breach.Yes, yes, there's always the argument that releasing everything in full is just as evil, what with accounts being stolen and abused, but welcome to 2011. This is the lulz lizard era, where we do things just because we find it entertaining. Watching someone's Facebook picture turn into a penis and seeing their sister's shocked response is priceless. Receiving angry emails from the man you just sent 10 dildos to because he can't secure his Amazon password is priceless. You find it funny to watch havoc unfold, and we find it funny to cause it. We release personal data so that equally evil people can entertain us with what they do with it.Most of you reading this love the idea of wrecking someone else's online experience anonymously. It's appealing and unique, there are no two account hijackings that are the same, no two suddenly enraged girlfriends with the same expression when you admit to killing prostitutes from her boyfriend's recently stolen MSN account, and there's certainly no limit to the lulz lizardry that we all partake in on some level.And that's all there is to it, that's what appeals to our Internet generation. We're attracted to fast-changing scenarios, we can't stand repetitiveness, and we want our shot of entertainment or we just go and browse something else, like an unimpressed zombie. Nyan-nyan-nyan-nyan-nyan-nyan-nyan-nyan, anyway...Nobody is truly causing the Internet to slip one way or the other, it's an inevitable outcome for us humans. We find, we nom nom nom, we move onto something else that's yummier. We've been entertaining you 1000 times with 140 characters or less, and we'll continue creating things that are exciting and new until we're brought to justice, which we might well be. But you know, we just don't give a living fuck at this point - you'll forget about us in 3 months' time when there's a new scandal to gawk at, or a new shiny thing to click on via your 2D light-filled rectangle. People who can make things work better within this rectangle have power over others; the whitehats who charge $10,000 for something we could teach you how to do over the course of a weekend, providing you aren't mentally disabled.This is the Internet, where we screw each other over for a jolt of satisfaction. There are peons and lulz lizards; trolls and victims. There's losers that post shit they think matters, and other losers telling them their shit does not matter. In this situation, we are both of these parties, because we're fully aware that every single person that reached this final sentence just wasted a few moments of their time.Thank you, bitches.Lulz Security";

var stopwords = ["a","about","above","across","after","again","against","all","almost","alone","along","already","also","although","always","among","an","and","another","any","anybody","anyone","anything","anywhere","are","area","areas","around","as","ask","asked","asking","asks","at","away","b","back","backed","backing","backs","be","became","because","become","becomes","been","before","began","behind","being","beings","best","better","between","big","both","but","by","c","came","can","cannot","case","cases","certain","certainly","clear","clearly","come","could","d","did","differ","different","differently","do","does","done","down","down","downed","downing","downs","during","e","each","early","either","end","ended","ending","ends","enough","even","evenly","ever","every","everybody","everyone","everything","everywhere","f","face","faces","fact","facts","far","felt","few","find","finds","first","for","four","from","full","fully","further","furthered","furthering","furthers","g","gave","general","generally","get","gets","give","given","gives","go","going","good","goods","got","great","greater","greatest","group","grouped","grouping","groups","h","had","has","have","having","he","her","here","herself","high","high","high","higher","highest","him","himself","his","how","however","i","if","important","in","interest","interested","interesting","interests","into","is","it","its","itself","j","just","k","keep","keeps","kind","knew","know","known","knows","l","large","largely","last","later","latest","least","less","let","lets","like","likely","long","longer","longest","m","made","make","making","man","many","may","me","member","members","men","might","more","most","mostly","mr","mrs","much","must","my","myself","n","necessary","need","needed","needing","needs","never","new","new","newer","newest","next","no","nobody","non","noone","not","nothing","now","nowhere","number","numbers","o","of","off","often","old","older","oldest","on","once","one","only","open","opened","opening","opens","or","order","ordered","ordering","orders","other","others","our","out","over","p","part","parted","parting","parts","per","perhaps","place","places","point","pointed","pointing","points","possible","present","presented","presenting","presents","problem","problems","put","puts","q","quite","r","rather","really","right","right","room","rooms","s","said","same","saw","say","says","second","seconds","see","seem","seemed","seeming","seems","sees","several","shall","she","should","show","showed","showing","shows","side","sides","since","small","smaller","smallest","so","some","somebody","someone","something","somewhere","state","states","still","still","such","sure","t","take","taken","than","that","the","their","them","then","there","therefore","these","they","thing","things","think","thinks","this","those","though","thought","thoughts","three","through","thus","to","today","together","too","took","toward","turn","turned","turning","turns","two","u","under","until","up","upon","us","use","used","uses","v","very","w","want","wanted","wanting","wants","was","way","ways","we","well","wells","went","were","what","when","where","whether","which","while","who","whole","whose","why","will","with","within","without","work","worked","working","works","would","x","y","year","years","yet","you","young","younger","youngest","your","yours","z"];
