Snack 5

Crea un array vuoto.
in questo array andranno inseriti numeri dispari:

const numeriDispari = []

Chiedi per 6 volte all’utente di inserire un numero,

per chiedere quante volte l'utente deve insereri i numeri bisogna creare una const che chiamearemo maxNumber uguale a 6

const maxNumber = 6

creiamo il cicolo con for 

for (let i = 1; i <= maxNumber; i++) {
    creo il prompt per far inserire i numeri all'utente
    const currentNumber = Number(
        prompt(`${i} di ${maxNumber} - Inserisci un numero`)
    );

    controllo se l'utente ha scritto correttamente 
    if (!isNaN(currentNumber)) {
    console.log(`${i} - Hai inserito il numero ${currentNumber}`);
} else {
    console.log(`${i} - valore non valido`);
    i--;
}

}

Se è dispari inseriscilo nell’array.

all'interno del ciclo for inseriamo la modale 

if (currentNumber % 2 !== 0) {
    numeriDispari.push(currentNumber);
}



Stampa in console l'array risultante.
bastera un console.log(numeriDisapri)