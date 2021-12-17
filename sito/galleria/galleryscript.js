const galleries= document.querySelectorAll('button')
galleries.forEach(gallerie => {
    gallerie.addEventListener('click', e => {
        //alert('prova')
    const pittura= document.getElementById(`${e.target.getAttribute('id')}box`)
    
    if(pittura.style.display =="none"){
        pittura.style.display = "flex";}
    else {
        pittura.style.display ="none"
    }
    })
})