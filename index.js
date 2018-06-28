const button=document.querySelector('button')
const bonusButton=document.querySelector('button.bonusCredit');
const heading=document.querySelector('h1');
const bonusHeading=document.querySelector('h1.bonusCredit');
const listItem=document.querySelector('#filmForm');
const field=document.getElementsByName('filmName');


function changeHeading(){
    heading.textContent='Clicked'
}

function changeHeading2(){
    bonusHeading.textContent='Chris'
}

function listItems(ev){
    ev.preventDefault();
    const item=document.createElement('li');
    item.textContent=parseListItem(ev);
    const filmList=document.querySelector('#films');
    filmList.appendChild(item);
    ev.target.reset();
    focus()
}
function parseListItem(ev){
    const film=ev.target.filmName.value;
    const chris=ev.target.chrisName.value;
    if (chris!=''){
        item=film+' starring Chris '+chris
    }
    else{
        item=film
    }
    return item;

}


button.addEventListener('click', changeHeading);
bonusButton.addEventListener('click', changeHeading2);
listItem.addEventListener('submit', listItems); 

