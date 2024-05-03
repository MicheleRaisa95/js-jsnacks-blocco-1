Calcola la somma e la media dei primi 10 numeri.

per calcolare la somma dei primi 10 numeri creo la variabile:

const somma = 0

creo un ciclo con for per iniziare la somma dei primi 10 numeri

for(let i = 1; i<=10; i++)
somma += i;

procedo con il calcolo della media creando una variabile media dove divido il risulttao della somma per 10

const media = somma / 10

Stampa i risultati on console

console.log("Media dei primi 10 numeri:", media);