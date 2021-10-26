function changeColor() {
  var gang = document.getElementById("button");
  if(gang.value == "OFF") {
    document.getElementById("button").style.color="rgba(33, 125, 141,255)";
    document.getElementById("colorscheme").style.backgroundColor = "rgba(228, 165, 120)";
    document.getElementById("colorscheme").style.color = "rgba(33, 125, 141,255)";
    gang.value = "ON"; }
  
  else if(gang.value == "ON") {
      document.getElementById("button").style.color="black";
      document.getElementById("colorscheme").style.backgroundColor = "white";
      document.getElementById("colorscheme").style.color = "black";
      gang.value = "OFF";}
  }