// we are utlising the cookies to store the next nextVide
// regex, if the string is toonova then find the element of the char array that
//it is stored in.
let sourcesClass = document.getElementsByClassName("vmargin");
var sourceNumber = sourcesClass.length;
var sourceArray=[];

// getting the links to the previous and the next videos
try{
  var nextVideo = document.getElementById("elinks").children[1];
  var prevVideo = document.getElementById("elinks").children[0];
}
catch(err){
  console.log(err.message);
}
// this section removes the annoying header from the website
// this deletes the side margin ads, if dont exist caught by error
try{
  var blockSideMarginAds = document.getElementById("body").children[1].children[0];
  blockSideMarginAds.remove()
  let blockedMarginParent = document.getElementById("upper-header").children[0].children[0].children[2].children[0];
  blockedMarginParent.remove()
}
catch(err){}

try{
DifferentVideo(nextVideo,9); // this gets the next video in the playlist
DifferentVideo(prevVideo,16); // this gets the previous video in the playlist
}
catch(err){
}

var savedVideo = document.cookie
document.addEventListener("keydown",saveVideo);// allows me to save an episode in cookies

function saveVideo(e){
  if(e.keyCode == 48){
    if (confirm("Would you like to save video?")) {
      document.cookie = window.location.href
    }
    else {
      alert("No video saved");
    }
  }
}
var chars = savedVideo.split(';'); // everything works up to the for loop
 // we do need to iterate through the array
var i;

// this is saying that if i find an element in the cookies that has the word Toonova
// then i know that it is my saved video
for (i = 0; i < chars.length; i++) {
  if (chars[i].includes('toonova')){
    var correctSave = chars[i];
  }
}
document.addEventListener("keydown",loadVideo);
function loadVideo(e){
  if(e.keyCode == 189){
    window.open(correctSave,"_self");
  }
}


function DifferentVideo(video,keyNumber){
  document.addEventListener("keydown",function(e){
  if (e.keyCode === keyNumber){
    if(video!= null&&video.href!=null){
      window.open(video.href,"_self");

  }
}
  });
}
