'strict'

// calcolo la somma dei primi dieci numeri

let somma = 0;

// creo il ciclo for

for (let i = 1; i <= 10; i++) {
    // calcolo la somma dei primo 10 numeri
    somma += i;
}

// calcolo la media

const media = somma / 10

// stampo la media 

console.log("Media dei primi 10 numeri:", media);