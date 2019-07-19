// add event listener to the iframe object
// replace link if value is null
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
  console.log(err.message);
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
