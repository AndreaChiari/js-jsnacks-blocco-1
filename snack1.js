/* 
1) chiedo all'utente 10 volte di inserire un numero tramite un prompt
2) stampo la somma dei numeri inseriti
*/


for (i=0; i < 10; i++){
    const numbers = prompt("inserisci un numero");
    console.log(numbers);

   if(numbers !== isNaN){
    alert('You must use a number!');
}


   
   
}