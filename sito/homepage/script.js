var toggleBtn = document.querySelector('#tecnica1');
var divList = document.querySelector('#one');

toggleBtn.addEventListener('click',() => {
    if(divList.style.display === 'flex') {
        divList.style.display ='none';
    } else {
        divList.style.display = 'flex';
    }
});

var toggleBtn2 = document.querySelector('#tecnica2');
var divList2 = document.querySelector('#two');

toggleBtn2.addEventListener('click',() => {
    if(divList2.style.display === 'flex') {
        divList2.style.display ='none';
    } else {
        divList2.style.display = 'flex';
    }
});

var toggleBtn3 = document.querySelector('#tecnica3');
var divList3 = document.querySelector('#three');

toggleBtn3.addEventListener('click',() => {
    if(divList3.style.display === 'flex') {
        divList3.style.display ='none';
    } else {
        divList3.style.display = 'flex';
    }
});