const button=document.querySelector('button')
const bonusButton=document.querySelector('button.bonusCredit')
const heading=document.querySelector('h1')
const bonusHeading=document.querySelector('h1.bonusCredit')

function changeHeading(){
    heading.textContent='Clicked'
}

function changeHeading2(){
    bonusHeading.textContent='Chris'
}

button.addEventListener('click', changeHeading)
bonusButton.addEventListener('click', changeHeading2)