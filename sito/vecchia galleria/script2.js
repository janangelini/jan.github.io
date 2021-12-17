/*function changeColor() {
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
}*/




var theParent= document.querySelector("#boxopere");
theParent.addEventListener("click", openbar, false);
var box1 = document.getElementsByClassName("card");


function openbar(e) {
  if (e.target !==e.currentTarget){
  var clickedItem = e.target.id;
  alert("Hello" + clickedItem);
  }

  if(this.style.display = "flex" ){
    this.style.display = "none";
  } 
  else{
    this.style.display = "flex";
  } 

  e.stopPropagation();
}
  
 /* var box1 = document.getElementsByClassName("card");
  if (box1[0,1].style.display == "none") {
      box1[0,1].style.display = "flex";
  }
  else {
      box1[0,1].style.display = "none"; 
  }
}

/*for(i=0;i<len;i+=1){
  button[i].onclick=click;
}*/