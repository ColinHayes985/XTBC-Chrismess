const button=document.querySelector('button')
const bonusButton=document.querySelector('button.bonusCredit');
const heading=document.querySelector('h1');
const bonusHeading=document.querySelector('h1.bonusCredit');
const listItem=document.querySelector('#filmForm');
const field=document.getElementsByName('filmName');
var filmArr=[];
var chrisArr=[];

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
        const filmList=document.querySelector('#films');
        filmList.appendChild(item);
        ev.target.reset();
    }
}
function parseListItem(ev){
    const film=ev.target.filmName.value;
    const chris=ev.target.chrisName.value;
    if (chris!=''){
        item=film+' starring Chris '+chris
        chrisArr.push(chris);
    }
    else{
        if(film!=''){
            filmArr.push(film)
        }
        item=film
    }
    return item;

}
function checkFieldContent(ev,item){
    console.log(filmArr)
    console.log(chrisArr)
    if(item.textContent==''){
        alert("Please enter a movie name")
        return false;
    }
    else{
        /*itemArr=item.textContent.split(" ");
        var i=0;
        var flickName;
        length=itemArr.length;
        while(itemArr[i]!='starring'&&i<length){
            flickName+=itemArr[i];
            flickName+=' '
            i++;
        }
        movieArr.push(flickName);
        console.log(movieArr)*/
        return true;
        

    }
}


button.addEventListener('click', changeHeading);
bonusButton.addEventListener('click', changeHeading2);
listItem.addEventListener('submit', listItems); 

