const galleries= document.querySelectorAll('button')
galleries.forEach(gallerie => {
    gallerie.addEventListener('click', e => {
    
    const pittura= document.getElementById(`${e.target.getAttribute('id')}box`)
    
    if(pittura.style.display =="flex"){
        pittura.style.display = "none";}
    else {
        pittura.style.display ="flex"
    }
    })
})

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images= document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img1= document.createElement('img')
        const img2= document.createElement('img')
        const img3= document.createElement('img')
        
        img1.src = `${e.target.classList}1.jpg`
        img2.src = `${e.target.classList}2.jpg`
        img3.src = `${e.target.classList}3.jpg`

        img1.classList.add('zoom')
        img2.classList.add('zoom')
        img3.classList.add('zoom')
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img1)
        lightbox.appendChild(img2)
        lightbox.appendChild(img3)
    })

})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})