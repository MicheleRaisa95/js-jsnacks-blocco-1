'use strict'
// definisco la variabile somma 
let somma = 0;
// ciclo per chiedere all utente di inserire una cifra 10 volte 
for (let i = 0; i < 10; i++) {
let numero = parseInt(prompt('Inserisci un numero:'));
// condizionale se utente non inserisce un numero
if (isNaN(numero)) {
    console.log("Devi inserire un numero valido.");
    i--; /*
    stoppo il ciclo
    */
} else {
    somma += numero;
}
}
// stampa la somma in console
console.log('La somma di tutti i numeri inseriti è:', somma);