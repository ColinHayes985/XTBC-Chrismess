const button=document.querySelector('button')
const heading=document.querySelector('h1')

function changeHeading(){
    heading.textContent='Clicked'
}

button.addEventListener('click', changeHeading)