// we are utlising the cookies to store the next nextVide
// regex, if the string is toonova then find the element of the char array that
//it is stored in.
let sourcesClass = document.getElementsByClassName("vmargin");
var sourceNumber = sourcesClass.length;
var sourceArray=[];
try{
  var nextVideo = document.getElementById("elinks").children[1];
  var prevVideo = document.getElementById("elinks").children[0];
}
catch(err){
  console.log(err.message);
}
try{
DifferentVideo(nextVideo,9);
DifferentVideo(prevVideo,16);
}
catch(err){
}
var savedVideo = document.cookie
document.addEventListener("keydown",saveVideo);
function saveVideo(e){
  if(e.keyCode == 48){
    if (confirm("Would you like to save video?")) {
      document.cookie = window.location.href
    }
    else {
      //alert("No video saved");
    }
  }
}
var chars = savedVideo.split(';'); // everything works up to the for loop
 // we do need to iterate through the array
var i;

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
