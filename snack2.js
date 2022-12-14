console.log('JS OK');


// preparo l'array con gli invitati
const guests = ['Andrea', 'Giorgio ','Federico']

// prendo gli elementi dalla pagina
const fillname = document.getElementById('fillName');
const button = document.getElementById('button');
const show = document.getElementById('show');


button.addEventListener('click',function () {
    const guestName = fillname.value;


// validation
if (!guestName){
    alert('inserire nome !');
    return;
}


let verify = false;

for (i=0; !verify && i < guests.length; i++){
    
    if(guestName === guests[i]) {
        verify = true;
    }
}

// stampo in pagina
const text = verify ? 'Puoi entrare' : 'torna a casa!';

show.innertext = text;

});






