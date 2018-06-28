const button=document.querySelector('button')
const bonusButton=document.querySelector('button.bonusCredit');
const heading=document.querySelector('h1');
const bonusHeading=document.querySelector('h1.bonusCredit');
const listItem=document.querySelector('#filmForm');
const field=document.getElementsByName('filmName');
var filmArr=[];
var chrisArr=[];
var itemArr=[];

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
    if(checkFieldContent(ev,item)==true){
        if(document.getElementById('faveYes').checked){
           //TODO: Style fave elements on page
        }
        const filmList=document.querySelector('#films');
        filmList.appendChild(item);
        console.log(document.getElementById('faveYes').value)
        ev.target.reset();
        console.log(chrisArr)
        console.log(filmArr)
        ev.target.filmName.focus();
        
    }
}
function parseListItem(ev){
    const film=ev.target.filmName.value;
    const chris=ev.target.chrisName.value;
    if(film!=''){
        if(document.getElementById('faveYes').checked){
            filmArr.push('*'+film+'*')
        }
        else{filmArr.push(film)}
        if (chris!=''){
            item=film+' starring Chris '+chris
            if(document.getElementById('faveYes').checked){
                chrisArr.push('*'+chris+'*');
            }
            else{chrisArr.push(chris)}
            return item
        }
        else {
            item=film
            return item
        }
    }
    return '';

}
function checkFieldContent(ev,item){
    if(item.textContent==''){
        alert("Please enter a movie name")
        return false;
    }
    else{
        return true;
    }
}


button.addEventListener('click', changeHeading);
bonusButton.addEventListener('click', changeHeading2);
listItem.addEventListener('submit', listItems); 

