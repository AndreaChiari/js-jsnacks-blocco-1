/* 
1) chiedo all'utente 10 volte di inserire un numero tramite un prompt
2) stampo la somma dei numeri inseriti
*/


const result = document.getElementById('sum');
let total = 0;
for (i=0; i < 3; i++){
    const numbers = parseInt(prompt("inserisci un numero"));
    console.log(typeof numbers);
    

    if(isNaN(numbers)){
        alert('You must use a number!');
    }
    else{total = total + numbers;
        console.log(total);
    }
    
}

result.innerText = (total);
/*

___________
i = 0
total = 0;
number = 5
___________

___________
i = 1
total = 5;
number = 3
___________

___________
i = 2
total = 8;
number = 4
___________



*/

