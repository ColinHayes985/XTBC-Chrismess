const button=document.querySelector('button')
const bonusButton=document.querySelector('button.bonusCredit')
const heading=document.querySelector('h1')
const bonusHeading=document.querySelector('h1.bonusCredit')
const form=document.querySelector('#filmForm')

function changeHeading(){
    heading.textContent='Clicked'
}

function changeHeading2(){
    bonusHeading.textContent='Chris'
}

function updateHeading(ev){
    ev.preventDefault();
    const input=ev.target.filmName.value;
    const filmList=document.querySelector('#films');
    filmList.innerHTML+='<p>${input};</p>'
    ev.target.reset;
}

button.addEventListener('click', changeHeading)
bonusButton.addEventListener('click', changeHeading2)
form.addEventListener('submit', updateHeading)
