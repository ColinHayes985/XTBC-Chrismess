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
        //console.log(document.getElementById('faveYes').value)
        ev.target.reset();
        console.log(chrisArr)
        console.log(filmArr)
        console.log(itemArr)
        ev.target.filmName.focus();
        
    }
}
function parseListItem(ev){
    const film=ev.target.filmName.value;
    const chris=ev.target.chrisName.value;
    if(film!=''){
        //Check for favorite and add to film arr
        if(document.getElementById('faveYes').checked){
            filmArr.push('***'+film+'***')
        }
        else{filmArr.push(film)}
        //Check for Chris and add to chris arr
        if (chris!=''){
            var chrisses=chris.split(' ')
            console.log (chrisses)
            item=film+' starring '
            for(var i=0; i<chrisses.length; i++){
                
                item+='Chris '
                item+=chrisses[i]
                
                if(i==chrisses.length-2){
                    item+=' and '
                }

                else if (chrisses.length>2&&i<chrisses.length-1){
                    item+=', '
                }
                
                
            }
            if(document.getElementById('faveYes').checked){
                for(var i=0; i<chrisses.length; i++){
                    chrisArr.push('***'+chrisses[i]+'***');
                }
                itemArr.push('***'+item+'***')
                item='***'+item+'***'
            }
            else{
                for(var i=0; i<chrisses.length; i++){
                    chrisArr.push(chrisses[i])
                }
                itemArr.push(item)
            }
            return item
        }
        else {
            item=film
            if(document.getElementById('faveYes').checked){
                itemArr.push('***'+item+'***')
                item='***'+item+'***'
            }
            else{itemArr.push(item)}
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

