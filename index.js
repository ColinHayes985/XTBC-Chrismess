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

function listItems(ev){
    ev.preventDefault();
    const film=ev.target.filmName.value;
    const movie=document.createElement('li');
    movie.textContent=film;
    const filmList=document.querySelector('#films');
    filmList.appendChild(movie);
    listChris(ev);
    ev.target.reset();
}
function listChris(ev){
    ev.preventDefault();
    const chris=ev.target.chrisName.value;
    const name=document.createElement('li')
    name.textContent='Chris '+chris
    const chrisList=document.querySelector('#films')
    chrisList.appendChild(name);
    ev.target.reset();
}

button.addEventListener('click', changeHeading);
bonusButton.addEventListener('click', changeHeading2);
form.addEventListener('submit', listItems); 
