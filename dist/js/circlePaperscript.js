var choice = -1,
  Max = 6; // currently max is 1 but I can increase number of folders for music then it'll also increase as well

var MainAddr = "assets/music/";

var folderX = ["A", "B", "C", "D", "E", "F", "G"];
// SOUNDS form folder X
var soundAddr = [
  "bubbles",
  "clay",
  "confetti",
  "corona",
  "dotted-spiral",
  "flash-1",
  "flash-2",
  "flash-3",
  "glimmer",
  "moon",
  "pinwheel",
  "piston-1",
  "piston-2",
  "piston-3",
  "prism-1",
  "prism-2",
  "prism-3",
  "splits",
  "squiggle",
  "strike",
  "suspension",
  "timer",
  "ufo",
  "veil",
  "wipe",
  "zig-zag"
];

var tempAddr;
// our music ...for 26 letters only (one set at a time)
var sounds = [];

addMusic();

function addMusic() {
  choice = Max == choice ? 0 : choice++;

  for (i = 0; i < 26; i++) {
    tempAddr = MainAddr + folderX[choice] + "/" + soundAddr[i] + ".mp3";
    sounds[i] = new Howl({
      src: tempAddr
    });
    // ! DEBUG
    // console.log(tempAddr);
  }
}

// make an empty circle array

var circles = [];

// on keydown creat cicles of one type
// next create circles with diff colors

function onKeyDown(event) {
  // the pressed key
  var x = event.key;
  var len = x.length;
  var charNum = x.charCodeAt(0);

  // ! change music folders when pressed "space"
  if (x == "space") addMusic();

  if (len == 1 && charNum >= 97 && charNum <= 122) {
    // ! DEBUG
    // console.log(x.charCodeAt(0));

    // ! Playing Sound for Each Defined Key

    sounds[charNum - 97].play();
    // console.log(charNum-97);
    // ! Creating Circles ...have to change this..as used circles are not getting removed

    var maxPoint = new Point(view.size.width, view.size.height);
    var randNess = Point.random();
    var curPoint = maxPoint * randNess;
    var circle = new Path.Circle(curPoint, 500);

    // ! Have to change colors everytime

    colr = "rgb(";
    // add num rgb format strings in it
    for (var i = 0; i < 3; i++) {
      a = Math.floor(Math.random() * 256);
      colr += a;
      if (i == 2) colr += ")";
      else colr += ", ";
    }
    // filling color
    circle.fillColor = colr;
    circles.push(circle);

    if (circles.length > 100) circles.shift();
  }
}
var flg = 0;
// onframe let them shine...hue+=1
// next dlt the used ones
function onFrame(event) {
  flg++;
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 4;
    circles[i].scale(0.9);
    //console.log("Current len:- " + circles.length);
  }
  if (flg > 1000) {
    circles.shift();
    flg = 0;
  }
}
