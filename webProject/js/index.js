var colors = ["blue","green", "purple" , "cyan" ,"magenta"]
var currentColor = 0
var lis = document.querySelectorAll(".main h2")

function sparkle() {

  
    //set interval
    myVar = setInterval(alertFunc, 1000);
  
    console.log("spark");
  }

//color change function
function alertFunc() {
    --currentColor
    if (currentColor < 0) currentColor = colors.length -1
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.color = colors[(currentColor +i) % colors.length]
    }
 }

//reset pe hover peste titlu
function stop() {
    //clear timeout
    clearInterval(myVar);
    //set timeout
    setTimeout(function(){ 
      for (var i = 0; i < lis.length; i++) {
      lis[i].style.color = "black"
    } 
  }, 500);
  }

sparkle();