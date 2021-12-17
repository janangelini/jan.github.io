var output = document.getElementById("output");
var btnEl = document.querySelectorAll (".tecnica");
let boxEl = document.querySelectorAll (".boxopere")

  console.log(btnEl.length,);
  for (let i=0 ; i<btnEl.length; i++ ){
    console.log(btnEl[i].innerHTML);
    btnEl[i].addEventListener('click',myfun);
  }
  

function myfun(){
    console.log(this);
    output.innerHTML = "CLICKED";
    boxEl.style.height = "20px";
  }