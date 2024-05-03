'use strict'

// creo un prompt dove si chiede di inserire un numero di 4 cifre

const numero = prompt("Inserisci un numero di 4 cifre");

// prima di calcolare la somma verfico se l'utente ha scritto correttamente

if(numero.length !== 4 || isNaN(numero)) {
    console.log("Input non valido")
} else {

    // faccio la somma

    let sommaCifre = 0;
    for(let i = 0; i < numero.length; i++) {
        sommaCifre += parseInt(numero[i]);
}

// Stampa il risultato in console

console.log("La somma delle cifre del numero", numero, "è:", sommaCifre);

}