// add event listener to the iframe object
let sourcesClass = document.getElementsByClassName("vmargin");
var sourceNumber = sourcesClass.length;
var sourceArray=[];
try{
  var nextVideo = document.getElementById("elinks").children[1];
}
catch(err){
  console.log(err.message);
}
var i;
for (i = 0; i < sourceNumber; i++) {
  if(sourcesClass[i].children[1].firstElementChild.src!= null){
  sourceArray.push(sourcesClass[i].children[1].firstElementChild.src)
}
  //add video type to all sources
}

sourceArray.forEach(function(element) {
  element.addEventListener("ended",function(){
      if(nextVideo!= null){
        if(nextVideo.href!=null){
        window.open(nextVideo.href,"_self");
      }
    }
});
});
