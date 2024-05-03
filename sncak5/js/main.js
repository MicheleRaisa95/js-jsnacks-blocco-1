"use strict"

// creo array vuoto

const numeriDispari = [];

// stabilisco quanti numeri dovra inserire l'utente

const maxNumber = 6

// creo ciclo for

for (let i = 1; i <= maxNumber; i++) {
    // creo il prompt per far inserire i numeri all'utente
    const currentNumber = Number(
        prompt(`${i} di ${maxNumber} - Inserisci un numero`)
    );

    // controllo se l'utente ha scritto correttamente 

    if (!isNaN(currentNumber)) {
    console.log(`${i} - Hai inserito il numero ${currentNumber}`);
} else {
    console.log(`${i} - valore non valido`);
    i--;
}

// verifico se il numero e dispari e lo inserisco nel array

if (currentNumber % 2 !== 0) {
    numeriDispari.push(currentNumber);
}

}

// stanpo array nella console

console.log("I numeri disapri sono:", numeriDispari);